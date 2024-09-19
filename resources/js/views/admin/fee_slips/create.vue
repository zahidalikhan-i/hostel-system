<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Add Fee Slip</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search by Student Name"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        v-model="studentName"
                        @keyup.enter="searchByStudentName"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-primary"
                          @click="searchByStudentName"
                          type="button"
                        >
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search By Student Roll Number"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        v-model="studentRollNumber"
                        @keyup.enter="searchByStudentRollNumber"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-primary"
                          @click="searchByStudentRollNumber"
                          type="button"
                        >
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="feeSlip.first_name"
                    placeholder="Enter First Name"
                  />
                  <small class="text-danger">{{ errorMessages.first_name && errorMessages.first_name[0] }}</small>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="last_name">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="feeSlip.last_name"
                    placeholder="Enter Last Name"
                  />
                  <small class="text-danger">{{ errorMessages.last_name && errorMessages.last_name[0] }}</small>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="roll_number">Roll No</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="feeSlip.roll_number"
                    placeholder="Enter Your Roll Number"
                  />
                  <small class="text-danger">{{ errorMessages.roll_number && errorMessages.roll_number[0] }}</small>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="fee_type">Fee Type</label>
                  <select v-model="feeSlip.fee_type" class="form-control">
                    <option value="" disabled>Select Fee Type</option>
                    <option v-for="(type, index) in fee_categories" :key="index" :value="type.category_name">
                      {{ type.category_name }}
                    </option>
                  </select>
                  <small class="text-danger">{{ errorMessages.fee_type && errorMessages.fee_type[0] }}</small>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="status">Status</label>
                  <select class="form-control" v-model="feeSlip.status">
                    <option value="">Select Status</option>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                  <small class="text-danger">{{ errorMessages.status && errorMessages.status[0] }}</small>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="month">Month</label>
                  <select class="form-control text-black" v-model="feeSlip.month" required>
                    <option value="" class="text-black">Select Month</option>
                    <option value="January" class="text-black">January</option>
                    <option value="Febuary" class="text-black">Febuary</option>
                    <option value="March" class="text-black">March</option>
                    <option value="April" class="text-black">April</option>
                    <option value="May" class="text-black">May</option>
                    <option value="June" class="text-black">June</option>
                    <option value="July" class="text-black">July</option>
                    <option value="August" class="text-black">August</option>
                    <option value="September" class="text-black">September</option>
                    <option value="October" class="text-black">October</option>
                    <option value="November" class="text-black">November</option>
                    <option value="December" class="text-black">December</option>
                    <option value="January to June" class="text-black">January to June</option>
                    <option value="June to December" class="text-black">June to December</option>
                 
                  </select>
                  <small class="text-danger">{{ errorMessages.month && errorMessages.month[0] }}</small>
                </div>
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-success" @click="saveFeeSlip">Save</button>
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
  name: "adminAddFeeSlips",
  data() {
    return {
      feeSlip: {
        first_name: '',
        last_name: '',
        roll_number: '',
        fee_type: '',
        status: '',
        month: ''
      },
      studentName: '',
      studentRollNumber: '',
      fee_categories: [], // Ensure this is populated with fee categories
      errorMessages: {},
      isLoading: false,
      searchParams: {},
      students: [],
      totalPages: 0,
      errorMessage: '',
    };
  },
  methods: {
    async saveFeeSlip() {
      try {
        const requestData = { ...this.feeSlip };
        const response = await axios.post("/api/fee_slips", requestData);
        if (response.data.status === "success") {
          notify.success(response.data.message);
          this.$router.push("/admin/fee_slips");
        }
      } catch (error) {
        this.errorMessages = error.response.data.errors;
      }
    },
    cancel() {
      this.$router.push("/admin/fee_slips");
    },
    async searchByStudentName() {
      try {
        this.isLoading = true;
        this.searchParams.searchTerm = this.studentName;
        this.searchParams.searchType = 'studentName';
        const response = await axios.get("/api/students", {
          params: this.searchParams,
        });
        console.log('Student Name Search Response:', response.data); // Debugging line
        this.handleSearchResponse(response);
      } catch (error) {
        console.error("Error searching by student name:", error);
        this.students = [];
        this.totalPages = 0;
        this.errorMessage = 'An error occurred while fetching students by name';
        this.isLoading = false;
      }
    },
    async searchByStudentRollNumber() {
      try {
        this.isLoading = true;
        this.searchParams.searchTerm = this.studentRollNumber;
        this.searchParams.searchType = 'studentRollNumber';
        const response = await axios.get("/api/students", {
          params: this.searchParams,
        });
        console.log('Student Roll Number Search Response:', response.data); // Debugging line
        this.handleSearchResponse(response);
      } catch (error) {
        console.error("Error searching by student roll number:", error);
        this.students = [];
        this.totalPages = 0;
        this.errorMessage = 'An error occurred while fetching student by roll number';
        this.isLoading = false;
      }
    },
    async handleSearchResponse(response) {
            if (response.data.students.length > 0) {
              
              // Assuming the first result is the correct student
        console.log('Student Data:', students); // Debugging line
        this.feeSlip.first_name = students.first_name;
        this.feeSlip.last_name = students.last_name;
        this.feeSlip.roll_number = students.roll_number;
      } else {
        this.errorMessage = 'No student found';
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
.fas,
.text-info {
  cursor: pointer;
}
</style>
