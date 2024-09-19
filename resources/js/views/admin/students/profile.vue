
<template>
  <div>
    <div class="row">
      <div class="col-md-12" v-if="!invalidObject">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <div class="row">
              <div class="col-md-8">
                <h6 class="m-0 font-weight-bold text-primary">Update Student Profile</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <!-- First row: First Name and Last Name -->
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="first_name" style="color: black;">First Name</label>
                  <input type="text" class="form-control" v-model="student.user.first_name" placeholder="Enter First Name"  required />
               
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="last_name" style="color: black;">Last Name</label>
                  <input type="text" class="form-control" v-model="student.user.last_name" placeholder="Enter Last Name"   required/>
               
                </div>
              </div>
            </div>

            <!-- Second row: Registration Number and Roll Number -->
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="registration_number" style="color: black;">Registration Number</label>
                  <input type="text" class="form-control" v-model="student.registration_number" placeholder="Enter Registration Number"  required />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="roll_number" style="color: black;">Roll Number</label>
                  <input type="text" class="form-control" v-model="student.roll_number" placeholder="Enter Roll Number"   required/>
                </div>
              </div>
            </div>


            <!-- Fourth row: Email and Gender -->
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email" style="color: black;">Email</label>
                  <input type="email" class="form-control" v-model="student.user.email" placeholder="Enter Email"   required/>
                </div>
              </div>
              
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="mobile_no">Mobile Number </label>
                  <input type="text" class="form-control" v-model="student.mobile_no"
                    placeholder="Enter Mobile Number " />
                  
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label style="color: black;">Gender  </label>
                  <div class="d-flex custom-radio-padding">
                    <div class="form-check mr-3">
                      <input type="radio" class="form-check-input" id="maleRadio" value="Male" v-model="student.gender">
                      <label class="form-check-label" for="maleRadio">Male</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="femaleRadio" value="Female" v-model="student.gender">
                      <label class="form-check-label" for="femaleRadio">Female</label>
                    </div>
                  </div>
                </div>
              </div>
          

            <!-- Fifth row: Father Name and Father CNIC -->
         
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="father_name" style="color: black;">Father Name</label>
                  <input type="text" class="form-control" v-model="student.parent.father_name" placeholder="Enter Father Name"   required/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="father_cnic">
                      Father CNIC No <span class="text-danger"></span>
                    </label>
                    <input type="text" class="form-control" v-model="student.parent.father_cnic" @input="formatCnic"
                      placeholder="00000-0000000-0" required />
                </div>
              </div>
           

            <!-- Sixth row: Father Address and Your Address 1 -->
          
              
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="your_address1" style="color: black;">Present Address</label>
                  <input type="text" class="form-control" v-model="student.address_line1" placeholder="Enter Your Address 1"   required/>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="your_address2" style="color: black;">Permanent Address</label>
                  <input type="text" class="form-control" v-model="student.address_line2" placeholder="Enter Your Address 2"   required/>
                </div>
              </div>
        
            <!-- Eighth row: Room Selection -->
          
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="room" style="color: black;">Room</label>
                  <select v-model="student.room_id" class="form-control">
                  <option value="" disabled>Select Room    </option>
                  <option v-for="room in availableRooms" :key="room.id" :value="room.id">{{ room.room_name }}   </option>
                </select>
              </div>
              </div>
            </div>

            <!-- Save and Cancel Buttons -->
            <div class="row">
              <div class="col-12">
                <button class="btn btn-success" @click="updateStudent">Update</button>
                <button class="btn btn-danger ml-3" @click="cancel">Cancel</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as notify from "../../../utils/notify.js";
import axios from "axios";

export default {
  name: "adminStudentProfileEdit",
  data() {
    return {
      errorMessages: {},
      isLoading: true,
      student: {
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
          father_cnic: "",
         
        },
        user: {
          first_name: "",
          last_name: "",
          
          email: "",
        }
      },
      rooms: [],
      invalidObject: false,
    };
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
    formatCnic() {
      const cnic = this.student.parent.father_cnic.replace(/\D/g, "").slice(0, 13);
      const formattedCnic = cnic.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");
      this.student.parent.father_cnic = formattedCnic;
    },
    async updateStudent() {
      try {
        const response = await axios.put(`students/${this.student.id}`, this.student);
        if (response.data.status === "success") {
          this.$router.push("/admin/students");
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errorMessages = error.response.data.errors;
        } else {
          notify.authError(error);
        }
      }
    },
    cancel() {
      this.$router.push("/admin/students");
    },

    async getStudent(id) {
      try {
        const response = await axios.get(`students/${id}`);
       
        this.student = response.data.student;
      } catch (error) {
        this.invalidObject = true;
        notify.authError(error);
      }
    },
  },
  mounted() {
    this.getStudent(this.$route.params.id);
    this.fetchRooms();
  },
};
</script>


<style scoped>
.fas,
.text-info {
  cursor: pointer;
}

label,
input,
.btn {
  color: black !important;
}

.custom-radio-padding {
  display: flex;
  align-items: center;
}
</style>