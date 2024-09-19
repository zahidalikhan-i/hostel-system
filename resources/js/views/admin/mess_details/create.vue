<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <div class="row">
              <div class="col-md-8">
                <h6 class="m-0 font-weight-bold text-primary">Add Mess Details</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="day" class="text-black">Days</label>
                  <select class="form-control text-black" v-model="mess.day" required>
                    <option value="" class="text-black">Select Day</option>
                    <option value="Monday" class="text-black">Monday</option>
                    <option value="Tuesday" class="text-black">Tuesday</option>
                    <option value="Wednesday" class="text-black">Wednesday</option>
                    <option value="Thursday" class="text-black">Thursday</option>
                    <option value="Friday" class="text-black">Friday</option>
                    <option value="Saturday" class="text-black">Saturday</option>
                    <option value="Sunday" class="text-black">Sunday</option>
                  </select>
                  <small class="text-danger">{{ errorMessages.day && errorMessages.day[0] }}</small>
                </div>
              </div>
  
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="breakfast_time">Breakfast Time</label>
                  <input type="text" class="form-control" v-model="mess.breakfast_time"   placeholder="Enter Breakfast Time" required />
                  <small class="text-danger">{{ errorMessages.breakfast_time && errorMessages.breakfast_time[0] }}</small>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="break_fast">Breakfast</label>
                  <input type="text" class="form-control" v-model="mess.break_fast" placeholder="Enter Breakfast" />
                  <small class="text-danger">{{ errorMessages.break_fast && errorMessages.break_fast[0] }}</small>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="lunch_time">Lunch Time</label>
                  <input type="text" class="form-control" v-model="mess.lunch_time"  placeholder="Enter Lunch Time " required />
                  <small class="text-danger">{{ errorMessages.lunch_time && errorMessages.lunch_time[0] }}</small>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="lunch">Lunch</label>
                  <input type="text" class="form-control" v-model="mess.lunch" placeholder="Enter Lunch" />
                  <small class="text-danger">{{ errorMessages.lunch && errorMessages.lunch[0] }}</small>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="dinner_time">Dinner Time</label>
                  <input type="text" class="form-control" v-model="mess.dinner_time"   placeholder="Enter Dinner Time" required />
                  <small class="text-danger">{{ errorMessages.dinner_time && errorMessages.dinner_time[0] }}</small>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="dinner">Dinner</label>
                  <input type="text" class="form-control" v-model="mess.dinner" placeholder="Enter Dinner" />
                  <small class="text-danger">{{ errorMessages.dinner && errorMessages.dinner[0] }}</small>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button class="btn btn-success" @click="saveMessDetail">Save</button>
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
  
  export default {
    name: "adminAddMessDetails",
    data() {
      return {
        errorMessages: {},
        mess: {
          day: "",
          breakfast_time: "",
          break_fast: "",
          lunch_time: "",
          lunch: "",
          dinner_time: "",
          dinner: "",
        },
      };
    },
    methods: {
      async saveMessDetail() {
        try {
          const response = await axios.post("/mess_details", this.mess);
          if (response.data.status === "success") {
            this.$toast.success(response.data.message, {
              position: "top-right",
              autoClose: 5000,
            });
            this.$router.push("/admin/mess_details");
          }
        } catch (error) {
          this.errorMessages = error.response.data.errors;
        }
      },
      cancel() {
        this.$router.push("/admin/mess_details");
      },
    },
  };
  </script>

<style scoped>
.fas,
.text-info {
    cursor: pointer;
}

input::placeholder,
textarea::placeholder {
    color: #3a3939; /* Dark black placeholder color */
}

input,
textarea,
select,
option {
    color: #000000; /* Dark black text color */
}

h6, label, button {
    color: #000000; /* Dark black text color for heading, labels, and buttons */
}
</style>
