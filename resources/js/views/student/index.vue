<template>
  <div class="container">
    <div class="min-vh-50 icon-container" style="position: absolute; left: 30px;">
    <router-link to="/student" class="btn btn-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </router-link>
    </div>
    <div class="card">
      <div class="card-header">
        <h2>Student Details</h2>
      </div>
      <div class="card-body" v-if="student_data">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Registration Number</th>
              <th>Roll Number</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>CNIC Number</th>
              <th>Gender</th>
              <th>Room</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ student_data.user.first_name }} {{ student_data.user.last_name }}</td>
              <td>{{ student_data.registration_number }}</td>
              <td>{{ student_data.roll_number }}</td>
              <td>{{ student_data.user.email }}</td>
              <td>{{ student_data.date_of_birth }}</td>
              <td>{{ student_data.parent.father_cnic }}</td>
              <td>{{ student_data.gender }}</td>
              <td>{{ student_data.rooms.room_name }}</td>
              <td>{{ student_data.address_line1 }}, {{ student_data.address_line2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h2>Mess Details</h2>
      </div>
      <div class="card-body">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>Day</th>
              <th>Breakfast Time</th>
              <th>Breakfast</th>
              <th>Lunch Time</th>
              <th>Lunch</th>
              <th>Dinner Time</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mess in mess_data" :key="mess.id">
              <td>{{ mess.day }}</td>
              <td>{{ mess.breakfast_time }}</td>
              <td>{{ mess.break_fast }}</td>
              <td>{{ mess.lunch_time }}</td>
              <td>{{ mess.lunch }}</td>
              <td>{{ mess.dinner_time }}</td>
              <td>{{ mess.dinner }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="isLoading" class="loading">Loading...</div>
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
      mess_data: [],
      student_data: null,
      currentPage: 1,
    };
  },
  methods: {
    async getMessDetail() {
      try {
        this.isLoading = true;
        const response = await axios.get("getAllData", {
          params: { page: this.currentPage },
        });

        console.log('Response:', response.data);  // Debug log

        if (response.data.status === 'success') {
          this.mess_data = response.data.mess_data;
          this.student_data = response.data.student;
        } else {
          this.errorMessage = response.data.message || 'Failed to fetch data';
        }

        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data:', error);  // Debug log
        this.mess_data = [];
        this.student_data = null;
        this.errorMessage = 'An error occurred while fetching data';
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getMessDetail();
  },
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 90%;
  max-width: 1200px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
}

.card-header {
  background-color: #f6f7fc;
  color: rgb(24, 22, 22);
  padding: 20px;
  text-align: center;
}

.card-header h3 {
  margin: 0;
  font-size: 24px;
}

.card-body {
  padding: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th,
.table td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.table th {
  background-color: #efeff1;
  color: white;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.table-striped tbody tr:nth-of-type(even) {
  background-color: #f2f2f2;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dddddd;
}

.thead-dark th {
  background-color: #101111;
  color: white;
}

.error-message {
  color: red;
  font-size: 18px;
}

.loading {
  font-size: 18px;
  color: #324dc7;
}
.icon-container .arrow-icon {
  color: #000000; /* Dark black color */
  width: 40px; /* Width of the arrow */
  height: 40px; /* Height of the arrow */
}

</style>
