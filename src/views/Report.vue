<template>
  <CRow>
    <CCol :xs="12" :md="6" :lg="3">
      <CCard>
        <CHeader>
          Form Report
        </CHeader>
        <CBody>
          <CRow>
            <CForm class="py-3 px-4" @submit.prevent="fetchData">
              <CInputGroup class="mb-2">
                <CLabel class="py-2">Engine Number : &nbsp</CLabel>
                <CFormInput type="text" id="engineNumber" placeholder="Input Engine Number" v-model="machineNo" />
              </CInputGroup>

              <CButton type="submit" color="success" class="mb-3">Submit</CButton>
            </CForm>
          </CRow>
        </CBody>
      </CCard>
    </CCol>
    <CCol :xs="12" :md="6" :lg="9">
      <CCard>
        <CHeader>
          Chart Out
        </CHeader>
        <CBody>
          <CRow>
            <CChartLine v-if="loaded" :data="defaultData1" height="100" />
          </CRow>
        </CBody>
      </CCard>
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
      machineNo: '',
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
        const response = await axios.get('http://localhost:3001/renbo/api/v1.0/nutrunner/number', {
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

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
};

</script>