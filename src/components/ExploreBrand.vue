<template>
  <!-- container for both brand and vehicles -->
  <div class="overlap-container">
    <!-- brand-section -->
    <div class="brand-section">
      <!-- brand-text -->
      <div class="brand-text">
        <h2>Explore Our Premium Brands</h2>
        <!-- brand-link -->
        <a href="#" class="brand-link">
          Show All Brands
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <!-- brand-logo -->
      <div class="brand-logo">
        <!-- logo -->
        <div class="logo">
          <img src="../assets/audi.png" alt="">
          <p>Audi</p>
        </div>
        <!-- logo -->
        <div class="logo">
          <img src="../assets/astonmartin.png" alt="">
          <p>BMW</p>
        </div>
        <!-- logo -->
        <div class="logo">
          <img src="../assets/ferrari.png" alt="">
          <p>Ferrari</p>
        </div>
        <!-- logo -->
        <div class="logo">
          <img src="../assets/koenisegg.png" alt="">
          <p>Mercedes Benz</p>
        </div>
        <!-- logo -->
        <div class="logo">
          <img src="../assets/lamborghini.png" alt="">
          <p>Lamborghini</p>
        </div>
        <!-- logo -->
        <div class="logo">
          <img src="../assets/maserati.png" alt="">
          <p>Maserati</p>
        </div>
      </div>
      <!-- bootstrap carousel for brands-logo -->
      <div id="carouselExampleCaptions" class="carousel slide">
        <!-- carousel-indicators -->
        <div class="carousel-indicators">
          <!-- button from slide 0 to slide 1 -->
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <!-- button from slide 1 to slide 2 -->
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <!-- button from slide 2 to slide 3 -->
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <!-- button from slide 3 to slide 4 -->
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <!-- button from slide 4 to slide 5 -->
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
          <!-- button from slide 5 to slide 6 -->
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
            aria-label="Slide 6"></button>
        </div>
        <!-- carousel-inner -->
        <div class="carousel-inner">
          <!-- carousel-item -->
          <div class="carousel-item active">
            <img src="../assets/astonmartin.png" class="d-block w-100" alt="Aston Martin">
            <div class="carousel-caption">
              <p>Aston Martin</p>
            </div>
          </div>
          <!-- carousel-item -->
          <div class="carousel-item">
            <img src="../assets/audi.png" class="d-block w-100" alt="Audi">
            <div class="carousel-caption">
              <p>Audi</p>
            </div>
          </div>
          <!-- carousel-item -->
          <div class="carousel-item">
            <img src="../assets/ferrari.png" class="d-block w-100" alt="Ferrari">
            <div class="carousel-caption">
              <p>Ferrari</p>
            </div>
          </div>
          <!-- carousel-item -->
          <div class="carousel-item">
            <img src="../assets/lamborghini.png" class="d-block w-100" alt="Lamborghini">
            <div class="carousel-caption">
              <p>Lamborghini</p>
            </div>
          </div>
          <!-- carousel-item -->
          <div class="carousel-item">
            <img src="../assets/maserati.png" class="d-block w-100" alt="Maserati">
            <div class="carousel-caption">
              <p>Maserati</p>
            </div>
          </div>
          <!-- carousel-item -->
          <div class="carousel-item">
            <img src="../assets/koenisegg.png" class="d-block w-100" alt="Koenisegg">
            <div class="carousel-caption">
              <p>Koenisegg</p>
            </div>
          </div>
        </div>
        <!-- button -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- vehicles section will be placed here by parent -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ExploreBrand',
  mounted() {
    // Initialize the carousel with auto-sliding
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 3000, // Time between slides in milliseconds
      wrap: true,     // Whether to cycle continuously
      keyboard: true, // Whether to respond to keyboard events
      pause: 'hover'  // Pauses on mouse enter and resumes on mouse leave
    });
  }
}
</script>

<style scoped>
.overlap-container {
  position: relative;
  margin-top: -80px;
  width: 95%;
  max-width: 1500px;
  background: #F9FBFC;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
}

.brand-section {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid #eee;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-text h2 {
  margin: 0;
  font-size: 18px;
}

.brand-link {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 3px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.brand-link i {
  font-size: 12px;
}

.brand-logo {
  display: none;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 10px 16px;
  border-radius: 10px;
}

.logo img {
  width: 50%;
}

/* Carousel arrow styles */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #000;
  border-radius: 50%;
  padding: 20px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-caption {
  padding: 8px 24px;
  position: absolute;
  bottom: 20px;
  white-space: nowrap;
  width: auto;
}

.carousel-caption p {
  color: #333;
  margin: 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.carousel-indicators {
  margin-bottom: 0;
}

.carousel-indicators button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.5;
}

.carousel-indicators button.active {
  opacity: 1;
}

.carousel {
  display: block;
  margin: 20px 0;
}

.carousel-item img {
  max-height: 200px;
  object-fit: contain;
  padding: 20px;
}

@media (min-width: 768px) {
  .overlap-container {
    margin-top: -70px;
    width: 95%;
  }

  .brand-section {
    padding: 40px 30px;
  }

  .brand-text {
    flex-direction: row;
    justify-content: space-between;
  }

  .brand-text h2 {
    font-size: 24px;
  }

  .brand-link {
    font-size: 14px;
  }

  .brand-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }

  .carousel {
    display: none;
  }

  .carousel-item img {
    max-height: 150px;
  }
}

@media (max-width: 767px) {
  .carousel {
    display: block;
  }

  .brand-logo {
    display: none;
  }
}
</style>