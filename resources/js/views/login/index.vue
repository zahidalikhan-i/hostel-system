<template>
  <div>
    <Nav />
    <div class="container">
      <!-- Navbar and verification status alert -->
      <div
        class="row justify-content-center"
        v-if="verificationStatus"
      >
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div
            class="alert alert-dismissible fade show mt-5"
            v-bind:class="verificationAlertClasses"
            role="alert"
          >
            <div>{{ verificationMessage }}</div>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Login form -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block img-holder">
                  <div class="bg-login-image d-lg-block "></div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome To The Hostel Management System Of GPGC Mandian Atbd No 2!</h1>
                    </div>
                    <form class="user" @submit.prevent="login">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="email"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="password"
                          required
                        />
                        <div v-if="loginError" class="text-danger">
                          {{ loginError }}
                        </div>
                      </div>
                      <!-- <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                            v-model="remember"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div> -->
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                        
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/forgot-password"
                        >Forgot Password?</router-link
                      >
                    </div>
                    <!-- <div class="text-center">
                      <router-link class="small" to="/register"
                        >Create an Account!</router-link
                      >
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../../components/Nav";
import * as notify from "../../utils/notify.js";

export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      verificationStatus: this.$route.query.verification_status ? true : false,
      verificationMessage: "",
      verificationAlertClasses: {
        "alert-success": false,
        "alert-danger": false,
      },
      loginError: "", // Error message for login failure
    };
  },
  created: function () {
    if (this.$route.query.verification_status === "success") {
      this.verificationMessage = "Your account has been verified. Please log in.";
      this.verificationAlertClasses["alert-success"] = true;
    } else if (this.$route.query.verification_status === "error") {
      this.verificationMessage = "Your account could not be verified.";
      this.verificationAlertClasses["alert-danger"] = true;
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);

        // Conditional redirection based on user type
        if (response.data.user.user_type === "admin") {
          document.location.href = `/admin`;
        } else if (response.data.user.user_type === "student") {
          document.location.href = `/student`;
        } else {
          // Default redirection (you can change this as needed)
          document.location.href = `/`;
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.loginError = "Incorrect email or password. Please try again.";
        } else {
          this.loginError = "An error occurred. Please try again later.";
        }
      }
    },
  },
};
</script>

<style scoped>


a {
  color: #000000 !important;
}

/* Specific classes for text elements in this component */
.text-gray-900 {
  color: #0a0808 !important;
}

/* Style the placeholder text in input fields */
::placeholder {
  color: #000000 !important;
}
.text-danger {
  color: #ff0000; /* Red color for error messages */
}
</style>
