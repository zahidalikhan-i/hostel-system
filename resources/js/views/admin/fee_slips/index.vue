<template>
  <div>
     
      <div class="row">
          <div class="col-md-12">
              <div class="card shadow mb-4">
                  <div class="card-header py-3">
                      <div class="row">
                          <div class="col-md-8">
                              <h6 class="m-0 font-weight-bold text-primary">Fee Slip</h6>
                          </div>
                          <div class="col-md-4 text-right">
                              <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add
                                  FeeSlip</span>
                          </div>
                      </div>
                  </div>
                  <div class="card-body">
                      <div class="table-responsive">
                          <div class="d-flex align-items-center justify-content-center" v-if="isLoading">
                              <div>
                                  <img width="100" src="/images/img/red-spinner.gif" />
                                  <p class="text-center mt-0">Please wait...</p>
                              </div>
                          </div>
                          <table v-show="!isLoading" class="table table-bordered" id="dataTable" width="100%"
                              cellspacing="0">

                              <thead>
            <tr>
              <th>Name</th>
             
              <th>Roll Number</th>
              <th>Email</th>
             
              <th>CNIC Number</th>
            
              <th>Room</th>
             
           
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td>{{ student.user.first_name }} {{ student.user.last_name }}</td>
           
              <td>{{ student.roll_number }}</td>
              <td>{{ student.user.email }}</td>
             
              <td>{{ student.parent.father_cnic }}</td>
             
              <td>{{ student.rooms.room_name }}</td>
<!--             
              <td>
                      <i class="fas fa-edit pl-2" @click="editPage(student.id)"></i>
                      <i class="fas fa-trash pl-2" @click="deleteRoom(student.id, index)"></i>
                    </td> -->
            </tr>
          </tbody>
        </table>
      </div>
   
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="isLoading" class="loading">Loading...</div>
  </div>
</div>
</div>
</div>

</template>


<script>
import axios from "axios";

export default {
  name: "StudentsIndex",
  data() {
    return {
      isLoading: false,
      errorMessage: '',
      students: [],
      currentPage: 1,
    };
  },
  methods: {
    async getStudentsData() {
      try {
        this.isLoading = true;
        const response = await axios.get("/getStudentsData", {
          params: { page: this.currentPage },
        });

        console.log('Response:', response.data);  // Debug log

        if (response.data.status === 'success') {
          this.students = response.data.students;
        } else {
          this.errorMessage = response.data.message || 'Failed to fetch data';
        }

        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data:', error);  // Debug log
        this.students = [];
        this.errorMessage = 'An error occurred while fetching data';
        this.isLoading = false;
      }
    },
    goToCreatePage() {
      this.$router.push("/admin/fee_slips/create");
    },
    editPage(feeSlipId) {
      this.$router.push(`/admin/fee_slips/${feeSlipId}/edit`);
    },
  },
  mounted() {
    this.getStudentsData();
  },
};
</script>

<style>
.fas,
.text-info {
    cursor: pointer;
}

#onclick {
    cursor: pointer;
}
</style>
