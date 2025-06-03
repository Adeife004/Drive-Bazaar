<template>
  <div class="hero-wrapper">
    <!-- hero-page -->
    <div class="hero-page">
      <!-- header -->
      <header>
        <!-- navbar-content -->
        <nav class="navbar-content">
          <!-- logo-menu-icon -->
          <div class="logo-menu-icon">
            <h2>DRIVEBAZAAR</h2>
            <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" @click="toggleMenu"></i>
          </div>
          <!-- nav-menu -->
          <div class="nav-menu" :class="{ 'show-menu': isMenuOpen }">
            <!-- nav-list -->
            <ul class="nav-list">
              <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Listings</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Pages</a></li>
              <li class="nav-item"><a class="nav-link" href="#">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
              <!-- nav-iten sign-in -->
              <li class="nav-item sign-in">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-user"></i>
                  <span>Sign In</span>
                </a>
              </li>
            </ul>
            <!-- submit-btn -->
            <button class="submit-btn">Submit Listing</button>
          </div>
        </nav>
      </header>

      <!-- hero-container -->
      <div class="hero-container">
        <h2>Find Your Perfect Car</h2>
        <!-- hero-content -->
        <div class="hero-content">
          <!-- hero-list -->
          <ul class="hero-list">
            <li><a href="#" class="active">All</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Used</a></li>
          </ul>
          <!-- hero-search -->
          <div class="hero-search">
            <!-- search-container -->
            <div class="search-container">
              <!-- search-item -->
              <div class="search-item">
                <!-- form-select -->
                <select class="form-select">
                  <option selected>Any Makes</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <!-- search-item -->
              <div class="search-item">
                <!-- form-select -->
                <select class="form-select">
                  <option selected>Any Models</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="coupe">Coupe</option>
                  <option value="wagon">Wagon</option>
                </select>
              </div>
              <!-- search-item -->
              <div class="search-item">
                <!-- form-select -->
                <select class="form-select">
                  <option selected>All Prices</option>
                  <option value="0-10000">$0 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000-30000">$20,000 - $30,000</option>
                  <option value="30000-40000">$30,000 - $40,000</option>
                  <option value="40000+">$40,000+</option>
                </select>
              </div>
              <!-- search-item -->
              <div class="search-item">
                <input type="text" class="form-control" placeholder="Search for a car">
              </div>
              <!-- search-item -->
              <div class="search-item">
                <button class="btn search-btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  Search Car
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- other-features -->
        <div class="other-features">
          <p>Or Browse Featured Model</p>
          <!-- models-wrapper -->
          <div class="models-wrapper">
            <!-- models -->
            <div class="models">
              <button class="model2">
                <img src="../assets/suv-icon.png" alt="suv">
                <p>SUV</p>
              </button>
              <button class="model2">
                <img src="../assets/sedan-icon.png" alt="sedan">
                <p>Sedan</p>
              </button>
              <button class="model1">
                <img src="../assets/coupe-icon.png" alt="coupe">
                <p>Coupe</p>
              </button>
              <button class="model1">
                <img src="../assets/Hatchback-icon.png" alt="Hatchback">
                <p>Hatchback</p>
              </button>
              <button class="model2">
                <img src="../assets/Hybrid-icon.png" alt="Hybrid">
                <p>Hybrid</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ExploreBrand>
      <ExploreVehicles/>
      <FairPrice/>
      <WhyChoose/>
      <PopularMakes/>
      <BoxCar/>
      <CustomerSay/>
      <LatestBlog/>
      <CustomerCars/>
    </ExploreBrand>
    <footerPage/>
  </div>
</template>

<script>
import ExploreBrand from '../components/ExploreBrand.vue';
import ExploreVehicles from '../components/ExploreVehicles.vue';
import FairPrice from '../components/FairPrice.vue';
import WhyChoose from '../components/WhyChoose.vue';
import PopularMakes from '../components/PopularMakes.vue';
import BoxCar from '../components/BoxCar.vue';
import CustomerSay from '../components/CustomerSay.vue';
import LatestBlog from '../components/LatestBlog.vue';
import CustomerCars from '../components/CustomerCars.vue';
import footerPage from '../components/footerPage.vue';
export default {
  name: 'HeroPage',
  components: {
    ExploreBrand,
    ExploreVehicles,
    FairPrice,
    WhyChoose,
    PopularMakes,
    BoxCar,
    CustomerSay,
    LatestBlog,
    CustomerCars,
    footerPage
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.hero-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; 
  position: relative;
}

.hero-page {
  position: relative;
  z-index: 1;
  background-image: url('../assets/background-image1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  padding: 0 20px;
  overflow: hidden;
}

.hero-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.navbar-content {
  position: relative;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-menu-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;
}

.logo-menu-icon h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
}

.logo-menu-icon i {
  display: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: transparent;
  padding: 0;
  transform: none;
  opacity: 1;
  visibility: visible;
  position: static;
  width: auto;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 32px;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  gap: 8px;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #ffd700;
}

.sign-in span {
  font-size: 14px;
  margin-left: 8px;
  white-space: nowrap;
}

.sign-in .nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  color: #fff;
  text-decoration: none;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  gap: 8px;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffd700;
  transition: width 0.3s ease;
}

/* Hover and active effects */
.nav-link:hover,
.nav-link.active {
  color: #ffd700;
  transform: translateY(-2px);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.submit-btn {
  width: 100%;
  padding: 10px 16px;
  background-color: #ffd700;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #ffed4a;
}

/* hero-container styles */
.hero-container {
  margin-top: 30px;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

.hero-container h2 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}

.hero-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0;
}

.hero-list li a {
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 12px;
  transition: color 0.3s ease;
  overflow: hidden;
}

/* Before & After pseudo elements for hover effect */
.hero-list li a::before,
.hero-list li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffd700;
  transition: width 0.4s ease;
}

.hero-list li a::before {
  left: 50%;
  transform: translateX(-50%);
}

.hero-list li a::after {
  right: 50%;
  transform: translateX(50%);
}

/* On hover: grow from center to sides */
.hero-list li a:hover::before,
.hero-list li a:hover::after {
  width: 50%;
}

/* Active link highlight */
.hero-list li a.active {
  color: #ffd700;
}

.hero-search {
  margin-top: 20px;
  padding: 0 60px;
  width: 100%;
  max-width: 1200px;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

.search-container {
  border-radius: 80px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  padding: 10px 10px;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

.search-item {
  flex: 1;
  min-width: 150px;
}

.form-select,
.form-control {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  outline: none;
}

.form-select option {
  font-size: 10px;
}

.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  background-color: #ffd700;
  border: none;
  color: #333;
  border-radius: 40px;
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: #ffed4a;
}

.search-btn i {
  font-size: 16px;
}

.other-features {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

.other-features p {
  color: #fff;
  font-size: 18px;
}

.models-wrapper {
  width: 100%;
}

.models {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
}

.model1,
.model2 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  text-align: center;
  border: none;
}

.model1 p,
.model2 p {
  margin: 0;
  font-size: 12px;
}

.model1 img {
  width: 40px;
  height: auto;
}

.model2 img {
  width: 35px;
  height: auto;
}

/* responsiveness for smaller screen */
@media (max-width: 884px) {
  .logo-menu-icon {
    justify-content: space-between;
    width: 100%;
  }

  .logo-menu-icon i {
    font-size: 24px;
    cursor: pointer;
    display: block;
    transition: all 0.3s ease;
  }

  .logo-menu-icon i:hover {
    transform: scale(1.1);
  }

  .navbar-content {
    padding: 10px 0;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 16px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-menu.show-menu {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .submit-btn {
    width: 100%;
    margin-top: 5px;
  }

  .hero-search {
    width: 100%;
    padding: 0 15px;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }

  .search-container {
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }
}

@media (max-width: 768px) {
  .hero-container {
    margin-top: 0;
  }

  .hero-container h2 {
    font-size: 20px;
  }

  .hero-content {
    width: 100%;
    padding: 0;
  }

  .search-container {
    border-radius: 15px;
    padding: 12px;
    gap: 12px;
  }

  .form-select,
  .form-control {
    padding: 10px;
    font-size: 13px;
  }

  .search-btn {
    padding: 10px;
    font-size: 13px;
  }

  .model2 {
    display: none;
  }

  .other-features {
    margin-top: 20px;
  }

  .hero-search {
    padding: 0 10px;
  }

  .search-container {
    width: 100%;
    border-radius: 15px;
    padding: 12px;
    gap: 12px;
  }
}

.explore-brand-section {
  position: relative;
  z-index: 1;
  background-color: #fff;
  padding: 40px 20px;
}

@media (max-width: 320px) {
  .hero-page {
    height: 140vh;
  }
}

/* Update media query for search container */
@media (max-width: 884px) {
    .hero-search {
        width: 100%;
        padding: 0 15px;
    }

    .search-container {
        border-radius: 20px;
        flex-direction: column;
        padding: 15px;
        gap: 15px;
    }

    .search-item {
        width: 100%;
        min-width: unset;
    }

    .form-select,
    .form-control {
        width: 100%;
        padding: 12px;
        font-size: 14px;
    }

    .search-btn {
        width: 100%;
        padding: 12px;
        font-size: 14px;
    }

    .hero-container {
        padding: 30px 0;
        width: 100%;
    }

    .hero-container h2 {
        font-size: 24px;
        padding: 0 15px;
    }

    .hero-list {
        gap: 15px;
        padding: 0 15px;
    }

    .hero-list li a {
        font-size: 13px;
        padding: 6px 10px;
    }
}

/* Add styles for very small screens */
@media (max-width: 480px) {
    .hero-search {
        padding: 0 8px;
    }

    .search-container {
        width: 100%;
        border-radius: 12px;
        padding: 10px;
        gap: 10px;
    }

    .form-select,
    .form-control {
        padding: 8px;
        font-size: 12px;
    }

    .search-btn {
        padding: 8px;
        font-size: 12px;
    }

    .hero-container h2 {
        font-size: 20px;
    }
}
</style>