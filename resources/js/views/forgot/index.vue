<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div v-if="!passwordReset">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-2">
                          Forgot Your Password?
                        </h1>
                        <p class="mb-4">
                          Enter your email and new password below to reset your password.
                        </p>
                      </div>
                      <form class="user" @submit.prevent="resetPassword">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            placeholder="Enter Email Address..."
                            v-model="email"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            placeholder="Enter New Password..."
                            v-model="newPassword"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            placeholder="Confirm New Password..."
                            v-model="confirmPassword"
                            required
                          />
                        </div>
                        <LoadingButton
                          text="Reset Password"
                          :isLoading="isLoading"
                        />
                      </form>
                    </div>
                    <div v-else>
                      <span class="h4">
                        <i class="far fa-check-circle text-success"></i> Password reset successfully!
                      </span>
                    </div>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/login">
                        Already have an account? Login!
                      </router-link>
                    </div>
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
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";

export default {
  name: "ForgotPasswordByEmail",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      email: "",
      newPassword: "",
      confirmPassword: "",
      isLoading: false,
      passwordReset: false,
    };
  },
  methods: {
    async resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        notify.authError("Passwords do not match");
        return;
      }

      this.isLoading = true;
      try {
        await axios.post("reset-password", {
          email: this.email,
          new_password: this.newPassword,
          new_password_confirmation: this.confirmPassword,
        });
        this.isLoading = false;
        this.passwordReset = true;
      } catch (error) {
        notify.authError(error);
        this.isLoading = false;
      }
    },
  },
};
</script>
<style scoped>
/* Change the color of all text elements to dark black */
* {
  color: #000000 !important;
}

/* Ensure links are also styled as dark black */
a {
  color: #000000 !important;
}

/* Specific classes for text elements in this component */
.text-gray-900 {
  color: #000000 !important;
}

/* Style the placeholder text in input fields */
::placeholder {
  color: #000000 !important;
}
</style>