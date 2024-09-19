<template>
  <div>
    <Nav />
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" @submit.prevent="register">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                        v-model="first_name"
                        required
                      />
                      <div v-if="errors.first_name" class="text-danger">{{ errors.first_name }}</div>
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                        v-model="last_name"
                        required
                      />
                      <div v-if="errors.last_name" class="text-danger">{{ errors.last_name }}</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      v-model="email"
                      required
                    />
                    <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <div class="input-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="password"
                          placeholder="Password"
                          v-model="password"
                          @input="checkPasswordStrength"
                          required
                        />
                      </div>
                      <small class="text-danger">{{ passwordStrengthMessage }}</small>
                      <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                          v-model="password_confirm"
                          @input="checkPasswordMatch"
                          required
                        />
                      </div>
                      <div v-if="errors.password_confirm" class="text-danger">{{ errors.password_confirm }}</div>
                      <div v-if="errors.password_match" class="text-danger">{{ errors.password_match }}</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleUserType"
                      placeholder="User Type"
                      v-model="user_type"
                      required
                    />
                    <div v-if="errors.user_type" class="text-danger">{{ errors.user_type }}</div>
                  </div>
                  
                  <LoadingButton
                    text="Register Account"
                    v-bind:isLoading="isLoading"
                  />
                </form>
                <hr />
                <div class="text-center">
                  <router-link class="small" to="/forgot-password">
                    Forgot Password?
                  </router-link>
                </div>
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
</template>
<script>
import axios from "axios";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";

export default {
  name: "Register",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      user_type: "",
      isLoading: false,
      errors: {},
      passwordStrengthMessage: "", // Added for password strength feedback
    };
  },
  methods: {
    async register() {
      this.isLoading = true;

      // Clear previous errors
      this.errors = {};

      // Validate form fields
      if (!this.first_name) {
        this.errors.first_name = "First name is required.";
      }
      if (!this.last_name) {
        this.errors.last_name = "Last name is required.";
      }
      if (!this.email) {
        this.errors.email = "Email is required.";
      }
      if (!this.password) {
        this.errors.password = "Password is required.";
      }
      if (!this.password_confirm) {
        this.errors.password_confirm = "Password confirmation is required.";
      }
      if (this.password !== this.password_confirm) {
        this.errors.password_match = "Passwords do not match.";
      }
      if (!this.user_type) {
        this.errors.user_type = "User type is required.";
      }

      // If there are any errors, stop registration process
      if (Object.keys(this.errors).length > 0) {
        this.isLoading = false;
        return;
      }

      try {
        const response = await axios.post("register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        });

        this.isLoading = false;

        if (response.data.must_verify_email) {
          this.$router.push(`/verify/user/${response.data.id}`);
        } else {
          this.$router.push('/login');
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    checkPasswordStrength() {
      const password = this.password;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasNonalphas = /\W/.test(password);

      if (password.length < 8) {
        this.passwordStrengthMessage = "Password is too short, minimum 8 characters.";
      } else if (!hasLowerCase || !hasNumbers) {
        this.passwordStrengthMessage = "Your password is weak, use a strong password including one uppercase and lowercase letter, digits, and special characters.";
      } else if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
        this.passwordStrengthMessage = "Your password is strong.";
      } else {
        this.passwordStrengthMessage = "Good! You have a strong password.";
      }
    },
    checkPasswordMatch() {
      if (this.password !== this.password_confirm) {
        this.errors.password_match = "Passwords do not match.";
      } else {
        this.errors.password_match = "";
      }
    },
  },
};
</script>


<style scoped>
/* Change the color of all text elements to dark black */


/* Ensure links are also styled as dark black */
a {
  color: #000000 !important;
}

.text-gray-900 {
  color: #000000 !important;
}

/* Style the placeholder text in input fields */
::placeholder {
  color: #000000 !important;
}

/* Style validation error messages in red */
.text-danger {
  color: #ff0000; /* Red color for validation errors */
}
</style>
