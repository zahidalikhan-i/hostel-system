<template>
    <div>
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small"
                                placeholder="Search by Student Name" aria-label="Search" aria-describedby="basic-addon2"
                                v-model="studentName" @keyup.enter="searchByStudentName" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" @click="searchByStudentName" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small"
                                placeholder="Search By Father Name" aria-label="Search" aria-describedby="basic-addon2"
                                v-model="studentFatherName" @keyup.enter="searchByStudentFatherName" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" @click="searchByStudentFatherName" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small"
                                placeholder="Search By  CNIC" aria-label="Search" aria-describedby="basic-addon2"
                                v-model="studentFatherCnic" @keyup.enter="searchByStudentFatherCnic" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" @click="searchByStudentFatherCnic" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="errorMessage" class="alert alert-danger">
            {{ errorMessage }}
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Students</h6>
                            </div>
                            <div class="col-md-4 text-right">
                                <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add
                                    Student</span>
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
                                        <th>Full Name</th>
                                        <th>Father Name</th>
                                        <th>Registration Number</th>
                                        <th>Roll Number</th>
                                        <th>CNIC Number</th>
                                        <th>Email</th>
                                        <th>Date of birth</th>
                                        <th>Room</th>
                                        <th width="100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(student, index) in students" :key="index">
                                        <td id="onclick" @click="profilePage(student)">{{ student.user.first_name + " " +
                                            student.user.last_name }}</td>
                                        <td>{{ student.parent.father_name }}</td>
                                        <td>{{ student.registration_number }}</td>
                                        <td>{{ student.roll_number }}</td>
                                        <td>{{ student.parent.father_cnic }}</td>
                                        <td>{{ student.user.email }}</td>
                                        <td>{{ student.date_of_birth }}</td>
                                        <td>{{ student.rooms.room_name }}</td>
                                        <td>
                                            <i class="fas fa-edit pl-2" @click="editPage(student)"></i>
                                            <i class="fas fa-trash pl-2" @click="deleteStudent(student.id, index)"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-show="!isLoading">
                            <pagination :totalPages="totalPages" :perPage="50" :currentPage="currentPage"
                                @pageChanged="onPageChange" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Pagination from "../components/Pagination.vue";

export default {
    name: "adminStudentsIndex",
    components: {
        Pagination,
    },
    data() {
        return {
          
           
            errorMessage: '',
            students: [],
            searchParams: {
                searchTerm: "",
                searchType: "",
                room_id: "", // Add room_id to search parameters
                page: 1,
            },
            totalPages: 0,
            currentPage: 1,
            isLoading: false,
            rooms: [], // Add rooms data property
        };
    },
    methods: {
        async getstudents() {
            try {
                this.isLoading = true;
                const response = await axios.get("/students", {
                    params: { page: this.currentPage },
                });
                console.log("Fetched students: ", response); // Log the response
                this.students = response.data.students;
                this.totalPages = response.data.total_pages;
            } catch (error) {
                console.error("Error fetching students:", error);
                this.students = [];
                this.errorMessage = "Failed to fetch students.";
            } finally {
                this.isLoading = false;
            }
        },
        async deleteStudent(id, index) {
            try {
                const result = await this.$swal({
                    title: "Are you sure?",
                    text: "You want to delete this Student?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false,
                });
                if (result.value) {
                    await axios.delete(`students/${
                        id}`);
                    this.students.splice(index, 1);
                }
            } catch (error) {
                console.error("Error deleting student:", error);
                this.$swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }
        },
        onPageChange(page) {
            this.currentPage = page;
            this.getstudents();
        },
        goToCreatePage() {
            this.$router.push("/admin/students/create");
        },
        profilePage(student) {
            this.$router.push(`/admin/students/${student.id}/profile`);
        },
        editPage(student) {
            this.$router.push(`/admin/students/${student.id}/edit`);
        },
        async handleSearchResponse(response) {
            if (response.data.students.length > 0) {
                this.students = response.data.students;
                this.totalPages = response.data.total_pages;
                this.errorMessage = '';
            } else {
                this.students = [];
                this.totalPages = 0;
                this.errorMessage = "No student found";
            }
            this.isLoading = false;
        },
        async searchByStudentName() {
            try {
                this.isLoading = true;
                this.searchParams.searchTerm = this.studentName;
                this.searchParams.searchType = 'studentName';
                const response = await axios.get("students", {
                    params: this.searchParams,
                });
                this.handleSearchResponse(response);
            } catch (error) {
                console.error("Error searching by student name:", error);
                this.students = [];
                this.totalPages = 0;
                this.errorMessage = 'An error occurred while fetching students by name';
                this.isLoading = false;
            }
        },
        async searchByStudentFatherName() {
            try {
                this.isLoading = true;
                this.searchParams.searchTerm = this.studentFatherName;
                this.searchParams.searchType = 'studentFatherName';
                const response = await axios.get("students", {
                    params: this.searchParams,
                });
                this.handleSearchResponse(response);
            } catch (error) {
                console.error("Error searching by father name:", error);
                this.students = [];
                this.totalPages = 0;
                this.errorMessage = 'An error occurred while fetching student by father name';
                this.isLoading = false;
            }
        },
        async searchByStudentFatherCnic() {
            try {
                this.isLoading = true;
                this.searchParams.searchTerm = this.studentFatherCnic;
                this.searchParams.searchType = 'studentFatherCnic';
                const response = await axios.get("students", {
                    params: this.searchParams,
                });
                this.handleSearchResponse(response);
            } catch (error) {
                console.error("Error searching by father CNIC:", error);
                this.students = [];
                this.totalPages = 0;
                this.errorMessage = 'An error occurred while fetching student by father CNIC';
                this.isLoading = false;
            }
        },
        async searchByRoom() {
            try {
                this.isLoading = true;
                const response = await axios.get("students", {
                    params: {
                        room_id: this.searchParams.room_id,
                        page: this.currentPage,
                    },
                });
                this.handleSearchResponse(response);
            } catch (error) {
                console.error("Error searching by room:", error);
                this.students = [];
                this.totalPages = 0;
                this.errorMessage = 'An error occurred while fetching students by room';
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.getstudents();
       
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

