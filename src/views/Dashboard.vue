<template>
  <CRow>
    <CCol :xs="12" :md="6" :lg="4">
      <CCard>
        <CHeader>
          IMAM-16
        </CHeader>
        <CBody>
          <CRow>
            <CCol class="pt-4" :xs="8">
              <center>
                <CChartDoughnut v-if="loaded" :data="default1Data" :options="defaultOptions" style="height: 200px;" />
              </center>
            </CCol>
            <CCol class="py-0" :xs="4">
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ OK1 }} Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total NG
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ NG1 }} Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total RFID
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ RFID1 }} Pcs</h3>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Model Name</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7">{{ model1 }}</CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Engine Number</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7">{{ engine1 }}</CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #1
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded" :data="default1Data1" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #2
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded" :data="default2Data1" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded" :data="default3Data1" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded" :data="default4Data1" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
          </CRow>
        </CBody>
      </CCard>
    </CCol>
    <CCol :xs="12" :md="6" :lg="4">
      <CCard>
        <CHeader>
          IMAM-14
        </CHeader>
        <CBody>
          <CRow>
            <CCol class="pt-4" :xs="8">
              <center>
                <CChartDoughnut v-if="loaded1" :data="default2Data" :options="defaultOptions" style="height: 200px;" />
              </center>
            </CCol>
            <CCol class="py-0" :xs="4">
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ OK2 }} Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total NG
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ NG2 }} Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total RFID
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ RFID2 }} Pcs</h3>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Model Name</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7">{{ model2 }}</CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Engine Number</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7">{{ engine2 }}</CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #1
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded1" :data="default1Data2" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #2
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded1" :data="default2Data2" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded1" :data="default3Data2" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded1" :data="default4Data2" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
          </CRow>
        </CBody>
      </CCard>
    </CCol>
    <CCol :xs="12" :md="6" :lg="4">
      <CCard>
        <CHeader>
          IMAM-04
        </CHeader>
        <CBody>
          <CRow>
            <CCol class="pt-4" :xs="8">
              <center>
                <CChartDoughnut v-if="loaded2" :data="default3Data" :options="defaultOptions" style="height: 200px;" />
              </center>
            </CCol>
            <CCol class="py-0" :xs="4">
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ OK3 }} Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total NG
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ NG3 }} Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total RFID
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>{{ RFID3 }} Pcs</h3>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Model Name</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7">{{ model3 }}</CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Engine Number</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7">{{ engine3 }}</CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #1
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine v-if="loaded2" :data="defaultData3" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #2
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData3" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData3" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0" style="height: 200px;">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData3" :options="chartOptions" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
          </CRow>
        </CBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import mqtt from 'mqtt';
import { CChartLine } from '@coreui/vue-chartjs';
import { CChartDoughnut } from '@coreui/vue-chartjs';

export default {
  name: 'Dashboard',
  components: {
    CChartLine, CChartDoughnut
  },
  data() {
    return {
      brokerUrl: 'ws://portal-iot.com:9001/mqtt', // Example broker URL
      client: null,
      client1: null,
      client2: null,
      topic: 'IMAM016/data',
      topic1: 'IMAM014/data',
      topic2: 'IMAM004/data',
      message: '',
      OK1: '',
      OK2: '',
      OK3: '',
      NG1: '',
      NG2: '',
      NG3: '',
      RFID1: '',
      RFID2: '',
      RFID3: '',
      engine1: '',
      engine2: '',
      engine3: '',
      model1: '',
      model2: '',
      model3: '',
      receivedMessage: '',
      message1: '',
      receivedMessage1: '',
      message2: '',
      receivedMessage2: '',
      default1Data1: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      default2Data1: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      default3Data1: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      default4Data1: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },

      default1Data2: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      default2Data2: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      default3Data2: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      default4Data2: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
      defaultData3: {
        labels: [],
        datasets: [
          {
            label: 'Torque',
            backgroundColor: '#f87979',
            data: []
          }
        ],
      },
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
      default1Data: {

        labels: ['Total Ok', 'Total NG'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [40, 20],
          },
        ],
      },
      default2Data: {

        labels: ['Total Ok', 'Total NG'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [40, 20],
          },
        ],
      },
      default3Data: {

        labels: ['Total Ok', 'Total NG'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [40, 20],
          },
        ],
      },
      defaultOptions: {
        plugins: {
          legend: {
            display: false, // Disable the legend
          },
        },
        animation: {
          duration: 0, // Set duration to 0 to disable animations
        },
        responsive: true, // Make chart responsive
        maintainAspectRatio: false, // Ensure the chart uses the available space
      },


      loaded: false,
      loaded1: false,
      loaded2: false,
    };
  },

  mounted() {
    this.connect();
  },
  methods: {
    connect() {
      this.client = mqtt.connect(this.brokerUrl);
      this.client.on('connect', () => {
        this.client.subscribe(this.topic, (err) => {
          if (!err) {

          }
        });
      });
      this.client.on('message', (topic, message) => {
        try {
          this.loaded = false;
          const data1 = JSON.parse(message.toString());
          const data = data1.chart
          this.engine1 = data[0].engine_no;
          this.model1 = data[0].model;
          this.OK1 = data1.nut_runner[0].total_ok
          this.NG1 = data1.nut_runner[0].total_ng
          this.RFID1 = data1.engine
          this.default1Data = {

            labels: ['Total Ok', 'Total NG'],
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651'],
                data: [data1.nut_runner[0].total_ok, data1.nut_runner[0].total_ng],
              },
            ],
          };
          var torque1 = []
          var torque2 = []
          var torque3 = []
          var torque4 = []
          var upper1 = []
          var upper2 = []
          var upper3 = []
          var upper4 = []
          var lower1 = []
          var lower2 = []
          var lower3 = []
          var lower4 = []
          var ts1 = []
          var ts2 = []
          var ts3 = []
          var ts4 = []
          for (let i = 0; i < data.length; i++) {
            if (data[i].spindel == 1) {
              torque1.push(data[i].torque);
              upper1.push(data[i].upper);
              lower1.push(data[i].lower);
              ts1.push(data[i].screw_no);
            }
            if (data[i].spindel == 2) {
              torque2.push(data[i].torque);
              upper2.push(data[i].upper);
              lower2.push(data[i].lower);
              ts2.push(data[i].screw_no);
            }
            if (data[i].spindel == 3) {
              torque3.push(data[i].torque);
              upper3.push(data[i].upper);
              lower3.push(data[i].lower);
              ts3.push(data[i].screw_no);
            }
            if (data[i].spindel == 4) {
              torque4.push(data[i].torque);
              upper4.push(data[i].upper);
              lower4.push(data[i].lower);
              ts4.push(data[i].screw_no);
            }
          }
          this.default1Data1 = {
            labels: ts1,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque1
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper1
              }, {
                borderWidth: 3, label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower1
              }
            ]
          };
          this.default2Data1 = {
            labels: ts2,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque2
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper2
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower2
              }
            ]
          };
          this.default3Data1 = {
            labels: ts3,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque3
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper3
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower3
              }
            ]
          };
          this.default4Data1 = {
            labels: ts4,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque4
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper4
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower4
              }
            ]
          };
          setTimeout(() => { this.loaded = true; }, 0.1);
        } catch (error) {
          console.error('Failed to parse message as JSON', error);
        }
      });
      this.client.on('error', (error) => {
        console.error('Connection error', error);
      });
      this.client1 = mqtt.connect(this.brokerUrl);
      this.client1.on('connect', () => {
        this.client1.subscribe(this.topic1, (err) => {
          if (!err) {

          }
        });
      });
      this.client1.on('message', (topic1, message1) => {
        try {
          this.loaded1 = false;
          var data1 = JSON.parse(message1.toString());
          const data = data1.chart
          this.engine2 = data[0].engine_no;
          this.model2 = data[0].model;
          this.OK2 = data1.nut_runner[0].total_ok
          this.NG2 = data1.nut_runner[0].total_ng
          this.RFID2 = data1.engine
          this.default2Data = {

            labels: ['Total Ok', 'Total NG'],
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651'],
                data: [data1.nut_runner[0].total_ok, data1.nut_runner[0].total_ng],
              },
            ],
          };
          var torque1 = []
          var torque2 = []
          var torque3 = []
          var torque4 = []
          var upper1 = []
          var upper2 = []
          var upper3 = []
          var upper4 = []
          var lower1 = []
          var lower2 = []
          var lower3 = []
          var lower4 = []
          var ts1 = []
          var ts2 = []
          var ts3 = []
          var ts4 = []
          for (let i = 0; i < data.length; i++) {
            if (data[i].spindel == 1) {
              torque1.push(data[i].torque);
              upper1.push(data[i].upper);
              lower1.push(data[i].lower);
              ts1.push(data[i].screw_no);
            }
            if (data[i].spindel == 2) {
              torque2.push(data[i].torque);
              upper2.push(data[i].upper);
              lower2.push(data[i].lower);
              ts2.push(data[i].screw_no);
            }
            if (data[i].spindel == 3) {
              torque3.push(data[i].torque);
              upper3.push(data[i].upper);
              lower3.push(data[i].lower);
              ts3.push(data[i].screw_no);
            }
            if (data[i].spindel == 4) {
              torque4.push(data[i].torque);
              upper4.push(data[i].upper);
              lower4.push(data[i].lower);
              ts4.push(data[i].screw_no);
            }
          }
          this.default1Data2 = {
            labels: ts1,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque1
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper1
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower1
              }
            ]
          };
          this.default2Data2 = {
            labels: ts2,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque2
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper2
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower2
              }
            ]
          };
          this.default3Data2 = {
            labels: ts3,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque3
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper3
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower3
              }
            ]
          };
          this.default4Data2 = {
            labels: ts4,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque4
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper4
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower4
              }
            ]
          };
          setTimeout(() => { this.loaded1 = true; }, 0.1);
        } catch (error) {
          console.error('Failed to parse message as JSON', error);
        }
      });
      this.client1.on('error', (error) => {
        console.error('Connection error', error);
      });
      this.client2 = mqtt.connect(this.brokerUrl);
      this.client2.on('connect', () => {
        this.client2.subscribe(this.topic2, (err) => {
          if (!err) {

          }
        });
      });
      this.client2.on('message', (topic2, message2) => {
        try {
          this.loaded2 = false;
          const data1 = JSON.parse(message2.toString());
          const data = data1.chart
          this.engine3 = data[0].engine_no;
          this.model3 = data[0].model;
          this.OK3 = data1.nut_runner[0].total_ok
          this.NG3 = data1.nut_runner[0].total_ng
          this.RFID3 = data1.engine
          this.default3Data = {

            labels: ['Total Ok', 'Total NG'],
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651'],
                data: [data1.nut_runner[0].total_ok, data1.nut_runner[0].total_ng],
              },
            ],
          };
          const torque = data.map(item => item.torque);
          const upper = data.map(item => item.upper);
          const lower = data.map(item => item.lower);
          const ts = data.map(item => item.screw_no);
          this.defaultData3 = {
            labels: ts,
            datasets: [
              {
                label: 'Torque',
                backgroundColor: '#f87979',
                data: torque
              }, {
                label: 'Upper Limit',
                backgroundColor: '#111111',
                data: upper
              }, {
                label: 'Lower Limit',
                backgroundColor: '#AAAAAA',
                data: lower
              }
            ]
          };
          setTimeout(() => { this.loaded2 = true; }, 0.1);
        } catch (error) {
          console.error('Failed to parse message as JSON', error);
        }
      });
      this.client2.on('error', (error) => {
        console.error('Connection error', error);
      });
    },
    disconnect() {
      if (this.client) {
        this.client.end(() => {
          console.log('Disconnected from MQTT broker');
        });
      }
    },
  },
};
</script>
