<template>
  <div>
    <Nav />
    <div class="masthead">
      <div class="text-center text-white">
        <h1 class="py-5 home-title">
          Welcome to HMS Admin Dashboard
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="text-center py-5 min-vh-50">
        <router-link to="/admin" class="btn btn-primary btn-lg">
          Go to dashboard <i class="fas fa-chevron-right"></i>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f8f9fc;
  color: #5a5c69;
}

.home-title {
  font-size: 3.5rem;
  font-weight: 700;
}

.masthead {
  background: linear-gradient(135deg, #4e73df 0%, #36b9cc 100%);
  padding-top: 5rem;
  padding-bottom: 5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.min-vh-50 {
  min-height: 50vh !important;
}

.btn-primary {
  background-color: #4e73df;
  border: none;
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 0.5rem;
}

.btn-primary:hover {
  background-color: #2e59d9;
  transform: translateY(-2px);
}

.btn-primary:active {
  background-color: #224abe;
  transform: translateY(0);
}

.container {
  max-width: 960px;
  margin: auto;
  padding: 0 1rem;
}

.text-center {
  text-align: center;
}
</style>
