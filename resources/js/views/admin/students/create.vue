<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div class="row">
            <div class="col-md-8">
              <h6 class="m-0 font-weight-bold text-primary">Add Student</h6>
            </div>
          </div>
        </div>
        <div class="card-body">
          <!-- Registration Number and Roll Number -->
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="RegistrationNumber">
                  Registration No <span class="text-danger"></span>
                </label>
                <input type="text" class="form-control" v-model="student.registration_number"
                  placeholder="00-AUST-F-GC10" @input="validateRegistrationNumber" required />
                <small class="text-danger">{{ errorMessages.registration_number && errorMessages.registration_number[0]
                  }}</small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="roll_number">
                  Roll Number <span class="text-danger"></span>
                </label>
                <input type="number" class="form-control" v-model="student.roll_number" placeholder="Enter Roll Number"
                  min="1" required />
                <small class="text-danger">{{ errorMessages.roll_number && errorMessages.roll_number[0] }}</small>
              </div>
            </div>
          </div>

          <!-- First Name and Last Name -->
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="firstName">
                  First Name <span class="text-danger"></span>
                </label>
                <input type="text" class="form-control" v-model="student.first_name" @input="validateForm"
                  placeholder="Enter First Name" required />
                <small class="text-danger">{{  errorMessages.first_name &&
                  errorMessages.first_name[0] }}</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="LastName">
                  Last Name <span class="text-danger"></span>
                </label>
                <input type="text" class="form-control" v-model="student.last_name" placeholder="Enter Last Name"
                  required />
                <small class="text-danger">{{ errorMessages.last_name &&
                  errorMessages.last_name[0] }}</small>
              </div>
            </div>
          </div>


          <!-- Father Name and Password -->
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="father_name">
                  Father Name <span class="text-danger"></span>
                </label>
                <input type="text" class="form-control" v-model="student.parent.father_name"
                  placeholder="Enter Father Name" required />
                <small class="text-danger">{{ errorMessages.parent && errorMessages.parent.father_name &&
                  errorMessages.parent.father_name[0] }}</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="password">
                  Password <span class="text-danger"></span>
                </label>
                <input type="password" id="password" class="form-control" v-model="student.password"
                  @input="checkPasswordStrength" placeholder="Enter Password" required />
                  <small class="text-danger">{{  errorMessages.password&&
                  errorMessages.password[0] }}</small>
                <small class="text-danger">{{ passwordStrengthMessage }}</small>
              </div>
            </div>
          </div>

          <!-- Confirm Password and Email -->
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="password_confirm">
                  Confirm Password <span class="text-danger"></span>
                </label>
                <input type="password" class="form-control" v-model="student.password_confirm"
                  @input="validatePassword" placeholder="Confirm Password" required />
                <small class="text-danger">{{  errorMessages.password_confirm &&
                  errorMessages.password_confirm[0] }}</small>
                <small class="text-danger" v-if="passwordMismatch"></small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email">
                  Email <span class="text-danger"></span>
                </label>
                <input type="email" class="form-control" v-model="student.email" placeholder="Enter Email"
                  required />
                <small class="text-danger">{{ errorMessages.email &&
                  errorMessages.email[0] }}</small>
              </div>
            </div>
          </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="mobile_no">Mobile Number </label>
                  <input type="text" class="form-control" v-model="student.mobile_no"
                    placeholder="Enter Mobile Number " />
                  <small class="text-danger">
                    {{ errorMessages.mobile_no && errorMessages.mobile_no[0] }}
                  </small>
                </div>
              </div>

              <!-- Gender and Date of Birth -->
              
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Gender">
                      Gender <span class="text-danger"></span>
                    </label>
                    <div class="d-flex custom-radio-padding">
                      <div class="form-check mr-3">
                        <input type="radio" value="Male" v-model="student.gender" class="form-check-input"
                          id="maleRadio" name="genderRadio" required />
                        <label class="form-check-label" for="maleRadio">Male</label>
                      </div>
                      <div class="form-check">
                        <input type="radio" value="Female" v-model="student.gender" class="form-check-input"
                          id="femaleRadio" name="genderRadio" />
                        <label class="form-check-label" for="femaleRadio">Female</label>
                      </div>
                    </div>
                    <small class="text-danger">{{ errorMessages.gender && errorMessages.gender[0] }}</small>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="date_of_birth">
                      Date Of Birth <span class="text-danger"></span>
                    </label>
                    <datepicker v-model="student.date_of_birth" placeholder="Select date" class="form-control" required>
                    </datepicker>
                    <small class="text-danger">{{ errorMessages.date_of_birth && errorMessages.date_of_birth[0]
                      }}</small>
                  </div>
                </div>
              
              <!-- Father CNIC and Address Line 1 -->
             
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="father_cnic">
                      Father CNIC No <span class="text-danger"></span>
                    </label>
                    <input type="text" class="form-control" v-model="student.parent.father_cnic" @input="formatCnic"
                      placeholder="00000-0000000-0" required />
                    <small class="text-danger">{{ errorMessages.parent && errorMessages.parent.father_cnic &&
                  errorMessages.parent.father_cnic[0] }}</small>
                  </div>
                </div>
              </div>
              

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Address1">
                      Present Address <span class="text-danger"></span>
                    </label>
                    <input type="text" class="form-control" v-model="student.address_line1" placeholder="Enter Address1"
                      required />
                    <small class="text-danger">{{ errorMessages.address_line1 && errorMessages.address_line1[0]
                      }}</small>
                  </div>
                </div>
  

              <!-- Address Line 2 and Room Selection -->
              
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Address2">
                      Permanent Address <span class="text-danger"></span>
                    </label>
                    <input type="text" class="form-control" v-model="student.address_line2" placeholder="Enter Address2"
                      required />
                    <small class="text-danger">{{ errorMessages.address_line2 && errorMessages.address_line2[0]
                      }}</small>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="room">
                      Room <span class="text-danger"></span>
                    </label>
                    <select v-model="student.room_id" class="form-control" required>
                      <option value="" disabled>Select Room</option>
                      <option v-for="room in availableRooms" :key="room.id" :value="room.id">{{ room.room_name }}
                      </option>
                    </select>
                    <small class="text-danger">{{ errorMessages.room_id && errorMessages.room_id[0] }}</small>
                  </div>
                </div>
              </div>
            
              

              <!-- Save and Cancel Buttons -->
              <div class="row">
                <div class="col">
                  <button class="btn btn-success" @click="saveStudent">Save</button>
                  <button class="btn btn-danger ml-3" @click="cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>


<script>

import axios from "axios";
import Datepicker from 'vue3-datepicker';

export default {
  name: "adminAddStudent",
  components: {
    Datepicker
  },
  data() {
    return {
      errorMessages: {},
      isLoading: true,
      student: {
        
          first_name: "",
          last_name: "",
          password: "",
          password_confirm: "",
          email: "",
        
        id: "",
        registration_number: "",
        roll_number: "",
        gender: "",
        room_id: "",
        address_line1: "",
        address_line2: "",
        mobile_no:"",
        parent: {
          father_name: "",
          father_cnic: ""
        },
        date_of_birth: null // Assuming you handle date_of_birth separately
      },
      rooms: [],
      passwordMismatch: false,
      passwordStrengthMessage: '',
      // Assuming this will be populated from an API call
    };
  },
  created() {
    this.fetchRooms(); // Fetch rooms when component is created
  },
  computed: {
    availableRooms() {
      return this.rooms.filter(room => room.occupied_beds < room.total_beds);
    },
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await axios.get("rooms");
        this.rooms = response.data.room;
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    },
    async saveStudent() {
      try {
        const response = await axios.post("students", this.student);
        if (response.data.status === "success") {
          this.$toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
          });
          this.$router.push("/admin/students");
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errorMessages = error.response.data.errors;
        } else {
          console.error("Error:", error);
        }
      }
    },
    cancel() {
      this.$router.push("/admin/students");
    },
    checkPasswordStrength() {
      const password = this.student.password;
      this.passwordStrengthMessage = this.getPasswordStrength(password);
    },
    validatePassword() {
            this.passwordMismatch = this.student.password !== this.student.password_confirm ? "Passwords do not match" : false;
        },

    formatCnic() {
      const cnic = this.student.parent.father_cnic.replace(/\D/g, "").slice(0, 13);
      const formattedCnic = cnic.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");
      this.student.parent.father_cnic = formattedCnic;
    },
    getPasswordStrength(password) {
      if (password.length < 6) {
        return "Password is too short using a strong password inculding One Upper and Lower case Letter,Digits,Special Character";
      }
      if (!/[A-Z]/.test(password)) {
        return "your password is week using a strong password inculding One Upper and Lower case Letter,Digits,Special Character";
      }
      if (!/[a-z]/.test(password)) {
        return "your password is week using a strong password inculding One Upper and Lower case Letter,Digits,Special Character";
      }
      if (!/[0-9]/.test(password)) {
        return "password must contain special character using a strong password inculding One Upper and Lower case Letter,Digits,Special Character";
      }
      if (!/[@$!%*?&#]/.test(password)) {
        return "Password should contain at least one special character";
      }
      return "Password is strong";
    },
    validateRegistrationNumber() {
      const regex = /^(\d{2})-(AUST)-([MF])-([A-Z]{3}\d{2})$/; // Define your format regex
      const isValidFormat = regex.test(this.student.registration_number);
      const expectedLength = '00-AUST-F-GC10'.length; // Adjust the length according to your format

      if (!this.student.registration_number) {
        this.errorMessages.registration_number = ['Registration number is required'];
      } else if (!isValidFormat) {
        this.errorMessages.registration_number = ['Use format: 00-AUST-F-GC10'];
      } else {
        this.errorMessages.registration_number = null;
      }
    },


  }
};
</script>

<style scoped>
.fas,
.text-info {
  cursor: pointer;
}

input#typeahead_id.simple-typeahead-input {
  width: 100% !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.35rem;
  border: 1px solid #d1d3e2;
}

.custom-radio-padding {
  width: 100% !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.35rem;
  border: 1px solid #d1d3e2;
}

input::placeholder,
textarea::placeholder {
  color: #2b2828;
  /* Dark black placeholder color */
}

input,
textarea,
select,
option {
  color: #000000;
  /* Dark black text color */
}

h6,
label,
button {
  color: #000000;
  /* Dark black text color for headings, labels, and buttons */
}

.text-danger {
  color: red;
  /* Red color for error messages */
}
</style>