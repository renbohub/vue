<template>
  <CRow>
    <CCol :xs="12" :md="6" :lg="3">
      <CCard>
        <CHeader>
          Form Report
        </CHeader>
        <CBody>
          <CFormCheck type="radio" class="px-5 pt-3" name="exampleRadios" id="exampleRadios1" value="option1"
            label="Pick By Number" v-model="selectedOption" checked />
          <CFormCheck type="radio" class="px-5 pt-1" name="exampleRadios" id="exampleRadios2" value="option2"
            label="Pick By Date" v-model="selectedOption" />
          <CForm class="py-3 px-4" v-show="selectedOption == 'option1'" @submit.prevent="fetchData">
            <CInputGroup class="mb-2">
              <CLabel class="py-2">Engine Number : &nbsp</CLabel>
              <CFormInput type="text" id="engineNumber" placeholder="Input Engine Number" v-model="machineNo" />
            </CInputGroup>
            <CButton type="submit" color="success" class="mb-3">Submit</CButton>
          </CForm>
          <CForm class="py-3 px-4" v-show="selectedOption == 'option2'" @submit.prevent="fetchData1">
            <CInputGroup class="mb-2">
              <CLabel class="py-2">Pick Date : &nbsp</CLabel>
              <CFormInput type="date" id="engineNumber" placeholder="Input Engine Number" v-model="dateInput" />
            </CInputGroup>

            <CInputGroup class="mb-2">
              <CLabel class="py-2">Shift No : &nbsp</CLabel>
              <CFormSelect aria-label="Default select example" v-model="shift_no">
                <option>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">Two</option>
              </CFormSelect>
            </CInputGroup>


            <CButton type="submit" color="success" class="mb-3">Submit</CButton>
          </CForm>

        </CBody>
      </CCard>
    </CCol>
    <CCol :xs="12" :md="6" :lg="9">
      <CRow>
        <CCol :xs="12">
          <CCard>
            <CHeader>
              Graphic IMAM-16
            </CHeader>
            <CBody>
              <CRow>
                <CChartLine v-if="loaded" :data="defaultData1" :options="chartOptions" height="100" />
              </CRow>
            </CBody>
          </CCard>
        </CCol>
        <CCol :xs="12">
          <CCard>
            <CHeader>
              Graphic IMAM-14
            </CHeader>
            <CBody>
              <CRow>
                <CChartLine v-if="loaded" :data="defaultData2" :options="chartOptions" height="100" />
              </CRow>
            </CBody>
          </CCard>
        </CCol>
        <CCol :xs="12">
          <CCard>
            <CHeader>
              Graphic IMAM-04
            </CHeader>
            <CBody>
              <CRow>
                <CChartLine v-if="loaded" :data="defaultData3" :options="chartOptions" height="100" />
              </CRow>
            </CBody>
          </CCard>
        </CCol>
      </CRow>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios';
import { CChartLine } from '@coreui/vue-chartjs';

export default {
  name: 'Dashboard',
  components: {
    CChartLine,
  },
  data() {
    return {
      selectedOption: 'option1', // Default selected option
      machineNo: '',
      chartOptions: {
        responsive: true,
        elements: {
          line: {
            borderWidth: 4 // Set default line width for all datasets
          }
        },
        plugins: {
          legend: {
            display: false
          },
          plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
              }
            }
          }
        },
        animation: {
          duration: 0, // Set duration to 0 to disable animations
        }
      },
      defaultData1: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      loaded: true,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.loaded = false;
        console.log(localStorage)
        const response = await axios.get('http://renbo.id:3001/renbo/api/v1.0/nutrunner/number', {
          headers: {
            'x-access-token': localStorage.getItem('token')
          },
          params: {
            machine_no: this.machineNo,
          },
        });

        this.loaded = true;
        const data = response.data.data.imam016;
        const torque = data.map(item => item.torque);
        const upper = data.map(item => item.upper);
        const lower = data.map(item => item.lower);
        const ts = data.map(item => new Date(item.ts).toLocaleTimeString());

        this.defaultData1 = {
          labels: ts,
          datasets: [
            {
              label: 'Torque',
              backgroundColor: '#f87979',
              data: torque
            }, {
              label: 'Upper Limit',
              backgroundColor: '#f87979',
              data: upper
            }, {
              label: 'Lower Limit',
              backgroundColor: '#f87979',
              data: lower
            }
          ]
        };

        const data1 = response.data.data.imam014;
        const torque1 = data1.map(item => item.torque);
        const upper1 = data1.map(item => item.upper);
        const lower1 = data1.map(item => item.lower);
        const ts1 = data1.map(item => new Date(item.ts).toLocaleTimeString());

        this.defaultData2 = {
          labels: ts1,
          datasets: [
            {
              label: 'Torque',
              backgroundColor: '#f87979',
              data: torque1
            }, {
              label: 'Upper Limit',
              backgroundColor: '#f87979',
              data: upper1
            }, {
              label: 'Lower Limit',
              backgroundColor: '#f87979',
              data: lower1
            }
          ]
        };
        const data2 = response.data.data.imam004;
        const torque2 = data2.map(item => item.torque);
        const upper2 = data2.map(item => item.upper);
        const lower2 = data2.map(item => item.lower);
        const ts2 = data2.map(item => new Date(item.ts).toLocaleTimeString());

        this.defaultData3 = {
          labels: ts2,
          datasets: [
            {
              label: 'Torque',
              backgroundColor: '#f87979',
              data: torque2
            }, {
              label: 'Upper Limit',
              backgroundColor: '#f87979',
              data: upper2
            }, {
              label: 'Lower Limit',
              backgroundColor: '#f87979',
              data: lower2
            }
          ]
        };

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchData1() {
      try {
        this.loaded = false;
        console.log(localStorage)
        const response = await axios.get('http://renbo.id:3001/renbo/api/v1.0/nutrunner/time', {
          headers: {
            'x-access-token': localStorage.getItem('token')
          },
          params: {
            shift: this.shift_no,
            date: this.dateInput
          },
        });

        this.loaded = true;
        const data = response.data.data.imam016;
        const torque = data.map(item => item.torque);
        const upper = data.map(item => item.upper);
        const lower = data.map(item => item.lower);
        const ts = data.map(item => new Date(item.ts).toLocaleTimeString());

        this.defaultData1 = {
          labels: ts,
          datasets: [
            {
              label: 'Torque',
              backgroundColor: '#f87979',
              data: torque
            }, {
              label: 'Upper Limit',
              backgroundColor: '#f87979',
              data: upper
            }, {
              label: 'Lower Limit',
              backgroundColor: '#f87979',
              data: lower
            }
          ]
        };

        const data1 = response.data.data.imam014;
        const torque1 = data1.map(item => item.torque);
        const upper1 = data1.map(item => item.upper);
        const lower1 = data1.map(item => item.lower);
        const ts1 = data1.map(item => new Date(item.ts).toLocaleTimeString());

        this.defaultData2 = {
          labels: ts1,
          datasets: [
            {
              label: 'Torque',
              backgroundColor: '#f87979',
              data: torque1
            }, {
              label: 'Upper Limit',
              backgroundColor: '#f87979',
              data: upper1
            }, {
              label: 'Lower Limit',
              backgroundColor: '#f87979',
              data: lower1
            }
          ]
        };
        const data2 = response.data.data.imam004;
        const torque2 = data2.map(item => item.torque);
        const upper2 = data2.map(item => item.upper);
        const lower2 = data2.map(item => item.lower);
        const ts2 = data2.map(item => new Date(item.ts).toLocaleTimeString());

        this.defaultData3 = {
          labels: ts2,
          datasets: [
            {
              label: 'Torque',
              backgroundColor: '#f87979',
              data: torque2
            }, {
              label: 'Upper Limit',
              backgroundColor: '#f87979',
              data: upper2
            }, {
              label: 'Lower Limit',
              backgroundColor: '#f87979',
              data: lower2
            }
          ]
        };

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
};

</script>