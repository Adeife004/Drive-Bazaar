
<template>
  <!-- hero-page -->
  <div class="hero-page">
    <!-- Header with Navbar -->
    <header>
      <nav class="navbar">
        <!-- Logo & Menu Icon -->
        <div class="logo-menu-icon">
          <h2>DRIVEBAZAAR</h2>
          <i :class="[
            'fa-solid',
            isMenuOpen ? 'fa-xmark' : 'fa-bars',
            { 'fa-spin': !isMenuOpen }
          ]" @click="toggleMenu"></i>
        </div>

        <!-- Navigation Menu -->
        <div class="nav-menu" :class="{ 'show-menu': isMenuOpen }">
          <ul class="nav-list">
            <!-- Home -->
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>

            <!-- Dropdown: Listings -->
            <li class="nav-item dropdown" :class="{ show: activeDropdown === 'listings' }">
              <a class="nav-link dropdown-toggle" href="#" @click.prevent="toggleDropdown('listings')">Listings</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <!-- Dropdown: Blog -->
            <li class="nav-item dropdown" :class="{ show: activeDropdown === 'blog' }">
              <a class="nav-link dropdown-toggle" href="#" @click.prevent="toggleDropdown('blog')">Blog</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <!-- Dropdown: Pages -->
            <li class="nav-item dropdown" :class="{ show: activeDropdown === 'pages' }">
              <a class="nav-link dropdown-toggle" href="#" @click.prevent="toggleDropdown('pages')">Pages</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <!-- Sign In -->
            <li class="nav-item sign-in">
              <a class="nav-link" href="#">
                <i class="fa-solid fa-user"></i>
                <span>Sign In</span>
              </a>
            </li>
          </ul>

          <!-- Submit Listing Button -->
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
            <!-- search-item(search-btn) -->
            <div class="search-item">
              <button class="btn btn-primary search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
                Search Car
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="other-features">
        <p>Or Browse Featured Model</p>
        <!-- models-wrapper -->
        <div class="models-wrapper">
          <!-- models-track -->
          <div class="models-track">
            <!-- models -->
            <div class="models">
              <!-- model -->
              <div class="model">
                <img src="../assets/suv-icon.png" alt="suv">
                <p>SUV</p>
              </div>
              <div class="model">
                <img src="../assets/sedan-icon.png" alt="sedan">
                <p>Sedan</p>
              </div>
              <div class="model">
                <img src="../assets/coupe-icon.png" alt="coupe">
                <p>Coupe</p>
              </div>
              <div class="model">
                <img src="../assets/Hatchback-icon.png" alt="Hatchback">
                <p>Hatchback</p>
              </div>
              <div class="model">
                <img src="../assets/Hybrid-icon.png" alt="Hybrid">
                <p>Hybrid</p>
              </div>
            </div>
            <!-- Duplicate for seamless scroll -->
            <div class="models">
              <div class="model">
                <img src="../assets/suv-icon.png" alt="suv">
                <p>SUV</p>
              </div>
              <div class="model">
                <img src="../assets/sedan-icon.png" alt="sedan">
                <p>Sedan</p>
              </div>
              <div class="model">
                <img src="../assets/coupe-icon.png" alt="coupe">
                <p>Coupe</p>
              </div>
              <div class="model">
                <img src="../assets/Hatchback-icon.png" alt="Hatchback">
                <p>Hatchback</p>
              </div>
              <div class="model">
                <img src="../assets/Hybrid-icon.png" alt="Hybrid">
                <p>Hybrid</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroPage',
  data() {
    return {
      isMenuOpen: false,
      activeDropdown: null
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.activeDropdown = null;
    },
    toggleDropdown(name) {
      this.activeDropdown = this.activeDropdown === name ? null : name;
    },
    handleOutsideClick(event) {
      if (!event.target.closest('.dropdown')) {
        this.activeDropdown = null;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
};
</script>

<style scoped>
.hero-page {
  position: relative;
  z-index: 1;
  background-image: url('../assets/background-image1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
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
  /* Adjust opacity as needed */
  z-index: 0;
}

.navbar {
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
  color: #fff;
}

.logo-menu-icon h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
}

.logo-menu-icon i {
  display: none;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo-menu-icon i:hover {
  transform: scale(1.1);
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
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #ffd700;
}

.dropdown-menu {
  background: #333;
  display: none;
  list-style: none;
  padding-left: 16px;
  margin-top: 8px;
}

.dropdown.show .dropdown-menu {
  display: block;
}

.dropdown-item {
  color: #fff;
  text-decoration: none;
  padding: 8px 0;
  display: block;
  transition: color 0.3s ease;
}

.dropdown-item:hover {
  color: #ffd700;
}

.dropdown-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 8px 0;
}

.sign-in span {
  font-size: 14px;
  margin-left: 8px;
  white-space: nowrap;
}

.sign-in .nav-link {
  display: flex;
  width: auto;
  white-space: nowrap;
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
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #ffed4a;
}

/* hero-container styles */
.hero-container {
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-container h2 {
  font-size: 40px;
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
  width: 100%;
  max-width: 1000px;
}

.search-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
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
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: #ffed4a;
}

.search-btn i {
  font-size: 16px;
}

.other-features {
  margin-top: 40px;
}

.other-features p {
  color: #fff;
  font-size: 20px;
}

.models-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.models-track {
  display: flex;
  animation: scrollModels 20s linear infinite;
  width: max-content;
}

.models {
  display: flex;
}

.model {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 150px;
  margin-right: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  text-align: center;
}

.model p {
  margin: 0;
}

.model img {
  width: 40px;
  height: auto;
}

.models-wrapper:hover .models-track {
  animation-play-state: paused;
}

@keyframes scrollModels {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* responsiveness for smaller screen */
@media (max-width: 768px) {
  .logo-menu-icon {
    justify-content: space-between;
    width: 100%;
  }

  .logo-menu-icon i {
    display: block;
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
    z-index: 1000;
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
    gap: 16px;
  }

  .submit-btn {
    width: 100%;
    margin-top: 16px;
  }

  .hero-container {
    padding: 20px 0;
  }

  .hero-container h2 {
    font-size: 20px;
  }

  .hero-content {
    width: 100%;
    padding: 0;
  }

  .search-container {
    flex-direction: column;
  }

  .search-item {
    width: 100%;
  }
}
</style>