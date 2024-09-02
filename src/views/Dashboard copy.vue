<template>
  <CRow>
    <CCol :xs="12" :md="6" :lg="4">
      <CCard>
        <CHeader>
          IMAM-06
        </CHeader>
        <CBody>
          <CRow>
            <CCol class="pt-4" :xs="8">
              <center>
                <CChartDoughnut :data="defaultData" :options="defaultOptions" style="height: 200px;" />
              </center>
            </CCol>
            <CCol class="py-0" :xs="4">
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Model Name</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7"></CCol>
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
                    <CCol :xs="7"></CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #1
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #2
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
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
          IMAM-06
        </CHeader>
        <CBody>
          <CRow>
            <CCol class="pt-4" :xs="8">
              <center>
                <CChartDoughnut :data="defaultData" :options="defaultOptions" style="height: 200px;" />
              </center>
            </CCol>
            <CCol class="py-0" :xs="4">
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Model Name</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7"></CCol>
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
                    <CCol :xs="7"></CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #1
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #2
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
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
          IMAM-06
        </CHeader>
        <CBody>
          <CRow>
            <CCol class="pt-4" :xs="8">
              <center>
                <CChartDoughnut :data="defaultData" :options="defaultOptions" style="height: 200px;" />
              </center>
            </CCol>
            <CCol class="py-0" :xs="4">
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
              <CCard>
                <CFooter>
                  Total Ok
                </CFooter>
                <CBody class="text-end px-2">
                  <h3>0 Pcs</h3>
                </CBody>
              </CCard>
            </CCol>
            <CCol :xs="12">
              <CCard class="py-2">
                <CBody class="text-start px-2">
                  <CRow>
                    <CCol :xs="4">Model Name</CCol>
                    <CCol :xs="1">:</CCol>
                    <CCol :xs="7"></CCol>
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
                    <CCol :xs="7"></CCol>
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #1
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #2
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="pe-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
                  </CRow>
                </CBody>
              </CCard>
            </CCol>
            <CCol class="ps-0" :xs="12" :md="6">
              <CCard class="py-0">
                <CFooter>
                  Spindel #3
                </CFooter>
                <CBody>
                  <CRow>
                    <CChartLine :data="defaultData1" />
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
import { CChartDoughnut, CChartLine } from '@coreui/vue-chartjs';
import mqtt from 'mqtt';
export default {
  name: 'Dashboard',
  components: {
    CChartDoughnut,
    CChartLine,
  },
  
    // Doughnut Chart Data
    defaultData() {
      return {
        labels: ['VueJs', 'EmberJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [40, 20],
          },
        ],
      };
    },
    // Doughnut Chart Options
    defaultOptions() {
      return {
        plugins: {
          legend: {
            display: false, // Disable the legend
          },
        },
        responsive: true, // Make chart responsive
        maintainAspectRatio: false, // Ensure the chart uses the available space
      };
    },
    // Line Chart Data
    defaultData1() {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(228,102,81,0.9)',
            data: [30, 39, 10, 50, 30, 70, 35],
          },
          {
            label: 'Data Two',
            backgroundColor: 'rgba(0,216,255,0.9)',
            data: [39, 80, 40, 35, 40, 20, 45],
          },
        ],
      };
    },
    data() {
    return {
      connection: {
        host: 'portal-iot.com',
        port: 9001,
        endpoint: '/mqtt',
        clean: true, // Reserved session
        connectTimeout: 4000, // Time out
        reconnectPeriod: 4000, // Reconnection interval
        // Certification Information
        clientId: 'mqttjs_3be2c321',
      },
      subscription: {
        topic: 'topic/mqttx',
        qos: 0,
      },
      publish: {
        topic: 'topic/browser',
        qos: 0,
        payload: '{ "msg": "Hello, I am browser." }',
      },
      receiveNews: '',
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
    }
  },
    
  
  methods: {
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = `ws://${host}:${port}${endpoint}`
      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        console.log('Connection succeeded!')
      })
      this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message)
        console.log(`Received message ${message} from topic ${topic}`)
      })
    },
  }
};
</script>
