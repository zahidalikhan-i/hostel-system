<template>
	<div>
		<Nav />
		<!-- Page Heading -->
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<h1 class="h3 mb-0 text-black-800">Hostel Dashboard</h1>
		</div>
		<!-- Content Row -->
		<div class="row">
			<!-- Total Students Card -->
			<div class="col-xl-3 col-md-6 mb-4">
				<div class="card border-left-primary shadow h-100 py-2">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
									Total Students
								</div>
								<div class="h5 mb-0 font-weight-bold text-black-800">{{ dashboardData.total_students }}</div>
							</div>
							<div class="col-auto">
								<i class="fas fa-user-graduate fa-2x text-black-300"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Available Rooms Card -->
			<div class="col-xl-3 col-md-6 mb-4">
				<div class="card border-left-success shadow h-100 py-2">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs font-weight-bold text-success text-uppercase mb-1">
									Available Rooms
								</div>
								<div class="h5 mb-0 font-weight-bold text-black-800">{{ dashboardData.available_rooms }}</div>
							</div>
							<div class="col-auto">
								<i class="fas fa-bed fa-2x text-black-300"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Occupied Rooms Card -->
			<div class="col-xl-3 col-md-6 mb-4">
				<div class="card border-left-info shadow h-100 py-2">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs font-weight-bold text-info text-uppercase mb-1">
									Occupied Rooms
								</div>
								<div class="h5 mb-0 font-weight-bold text-black-800">{{ dashboardData.occupied_rooms }}</div>
							</div>
							<div class="col-auto">
								<i class="fas fa-door-closed fa-2x text-black-300"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Content Row -->
		<div class="row">
			<!-- Left Column: Students and Room Status -->
			<div class="col-lg-8">
				<!-- Students Card Example -->
				<div class="card shadow mb-4">
					<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
						<h6 class="m-0 font-weight-bold text-primary">Students</h6>
						<div class="dropdown no-arrow">
							<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
							</a>
							<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
								aria-labelledby="dropdownMenuLink">
								<div class="dropdown-header">Dropdown Header:</div>
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div class="card-body">
						<h4 class="small font-weight-bold py-2" v-for="(student, index) in displayedStudents"
							:key="student.id">
							{{ student.user.first_name }} {{ student.user.last_name }}
							<span class="float-right">{{ student.rooms.room_name }}</span>
						</h4>
						<button v-if="students.length > 3" class="btn btn-link" @click="toggleShowMore('students')">
							{{ showMoreStudents ? 'Show Less' : 'More Details' }}
						</button>
					</div>
				</div>
				<!-- Room Status Card Example -->
				<div class="card shadow mb-4">
					<div class="card-header py-5">
						<h6 class="m-0 font-weight-bold text-primary">Room Status</h6>
					</div>
					<div class="card-body">
						<h4 class="small font-weight-bold" v-for="room in displayedRooms" :key="room.id">
							{{ room.room_name }}
							<span class="float-right">
								{{ room.total_beds === room.occupied_beds ? 'Occupied' : 'Available' }}
							</span>
						</h4>
						<button v-if="rooms.length > 3" class="btn btn-link" @click="toggleShowMore('rooms')">
							{{ showMoreRooms ? 'Show Less' : 'More Details' }}
						</button>
					</div>
				</div>
			</div>
			<!-- Right Column: Room Status Chart -->
			<div class="col-lg-4">
				<div class="card shadow mb-4">
					<div class="card-header py-2">
						<h6 class="m-0 font-weight-bold text-primary">Room Status Chart</h6>
					</div>
					<div class="card-body">
						<div class="chart-pie pt-4 pb-2">
							<canvas id="myPieChart"></canvas>
						</div>
						<div class="mt-4 text-center small">
							<span class="mr-2">
								<i class="fas fa-circle text-primary"></i> Available
							</span>
							<span class="mr-2">
								<i class="fas fa-circle text-success"></i> Occupied
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import axios from "axios";
import { Chart } from "chart.js";

export default {
	name: "HostelDashboard",
	data() {
		return {
			students: [],
			rooms: [],
			dashboardData: {
				total_students: 0,
				available_rooms: 0,
				occupied_rooms: 0,
			},
			showMoreStudents: false, // State to toggle showing more or less students
			showMoreRooms: false, // State to toggle showing more or less rooms
		};
	},
	computed: {
		displayedStudents() {
			return this.showMoreStudents ? this.students : this.students.slice(0, 3);
		},
		displayedRooms() {
			return this.showMoreRooms ? this.rooms : this.rooms.slice(0, 3);
		},
	},
	methods: {
		async getDashboardData() {
			try {
				const response = await axios.get("dashboard_data");
				console.log("Fetched data: ", response);

				this.dashboardData = response.data.data;
				this.rooms = response.data.data.rooms;
				this.students = response.data.data.students.map(student => ({
					...student,
					fullName: `${student.user.first_name} ${student.user.last_name}`, // Combine first and last name
					roomName: student.rooms.room_name, // Assuming student.rooms directly has room_name
				}));

				this.initPieChart(); // Initialize pie chart
			} catch (error) {
				console.error("Error fetching dashboard data:", error);
			}
		},
		toggleShowMore(section) {
			if (section === 'students') {
				this.showMoreStudents = !this.showMoreStudents;
			} else if (section === 'rooms') {
				this.showMoreRooms = !this.showMoreRooms;
			}
		},
		initPieChart() {
			const ctx = document.getElementById("myPieChart").getContext("2d");
			new Chart(ctx, {
				type: "pie",
				data: {
					labels: ["Available", "Occupied"],
					datasets: [
						{
							data: [
								this.dashboardData.available_rooms,
								this.dashboardData.occupied_rooms,
							],
							backgroundColor: ["#4e73df", "#1cc88a"],
							hoverBackgroundColor: ["#2e59d9", "#17a673"],
							hoverBorderColor: "rgba(234, 236, 244, 1)",
						},
					],
				},
				options: {
					maintainAspectRatio: false,
					tooltips: {
						backgroundColor: "rgb(255,255,255)",
					
						bodyFontColor: "#858796",
						borderColor: "#dddfeb",
						borderWidth: 1,
						xPadding: 15,
						yPadding: 15,
						displayColors: false,
						caretPadding: 10,
					},
					legend: {
						display: false,
					},
					cutoutPercentage: 80,
				},
			});
		},
	},
	mounted() {
		this.getDashboardData();
	},
};
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
	font-family: 'Roboto', sans-serif;
	background-color: #f8f9fc;
	color: #000000;
}

.home-title {
	font-size: 3.5rem;
	font-weight: 700;
	color: #000000;
}

.masthead {
	background: linear-gradient(135deg, #4e73df 0%, #36b9cc 100%);
	padding-top: 2rem;
	padding-bottom: 2rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.min-vh-50 {
	min-height: 50vh !important;
}

.container {
	max-width: 960px;
	margin: auto;
	padding: 0 1rem;
}

.text-center {
	text-align: center;
}

.dashboard-info {
	max-width: 800px;
	margin: auto;
	color: #000000;
}

.dashboard-info h2 {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: #000000;
}

.dashboard-info p {
	font-size: 1.125rem;
	line-height: 1.6;
	margin-bottom: 2rem;
	color: #000000;
}

.hostel-picture {
	max-width: 100%;
	height: auto;
	border-radius: 0.5rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mt-4 {
	margin-top: 1.5rem;
}
</style>
