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
export default {
  name: 'Dashboard',
  components: {
    CChartDoughnut,
    CChartLine,
  },
  computed: {
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
  },
};
</script>
