<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm @submit.prevent="login">
                <h1>Login</h1>
                <p class="text-medium-emphasis">Login to See in action</p>
                <CInputGroup class="mb-3">
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput placeholder="Email"  v-model="username" autocomplete="email" />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput type="password" placeholder="Password"  v-model="password" autocomplete="new-password" />
                </CInputGroup>

                <div class="d-grid">
                  <CButton type="submit" color="success">Login</CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3001/renbo/api/v1.0/login', {
          username: this.username,
          password: this.password
        });

        const token = response.data.accessToken;

        // Save token to localStorage
        localStorage.setItem('token', token);
        console.log(localStorage)
        // Redirect or handle post-login success
        this.$router.push('app/dashboard'); // Example redirect to a dashboard
      } catch (err) {
        this.error = 'Invalid username or password.';
      }
    }
  }
};
</script>
