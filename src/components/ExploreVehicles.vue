<template>
  <div class="vehicles-section">
    <!-- vehicle-text -->
    <div class="vehicle-text">
      <h2>Explore All Vehicles</h2>
      <!-- brand-link -->
      <a href="#" class="vehicle-link">
        View All
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
    <!-- cars -->
    <ul class="cars">
      <li><a href="#" class="active">In Stock</a></li>
      <li><a href="#">New Cars</a></li>
      <li><a href="#">Used Cars</a></li>
    </ul>
    <!-- carousel-wrapper -->
    <div class="carousel-wrapper">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :mouse-drag="true"
        :autoplay="true"
        :autoplay-timeout="8000"
        :pause-autoplay-on-hover="true"
        :transition="800"
        :snap-align="'center'"
        :infinite="true"
        :breakpoints="{
          768: { itemsToShow: 2 },
          1024: { itemsToShow: 3 }
        }"
      >
        <Slide v-for="(car, index) in cars" :key="index">
          <div class="car-card">
            <div class="car-image">
              <img :src="car.image" :alt="car.name" />
            </div>
            <div class="image-text">
              <button>{{ car.label }}</button>
              <i class="fa-solid fa-bookmark"></i>
            </div>
            <div class="car-text">
              <div class="first-text">
                <h4>{{ car.name }}</h4>
                <p>{{ car.description }}</p>
              </div>
              <div class="second-text">
                <div class="miles">
                  <i class="fa-solid fa-gauge-simple"></i>
                  <p>{{ car.mileage }}</p>
                </div>
                <div class="diesel">
                  <i class="fa-solid fa-gas-pump"></i>
                  <p>{{ car.fuel }}</p>
                </div>
                <div class="manual">
                  <i class="fa-solid fa-gear"></i>
                  <p>{{ car.transmission }}</p>
                </div>
              </div>
              <div class="third-text">
                <h3>{{ car.price }}</h3>
                <a href="#" class="details">
                  View Details
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import fordTransitImage from '../assets/ford transit.png';
import newGLCImage from '../assets/New GLC.png';
import audiCarImage from '../assets/Audi car.png';
import corollaAltis from '../assets/Corolla Altis.png';
import fordExplorer from '../assets/Ford Explorer.png';
export default {
  name: 'ExploreVehicles',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      cars: [
        {
          image: fordTransitImage,
          name: 'Ford Transit - 2021',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '2500 Miles',
          fuel: 'Diesel',
          transmission: 'Manual',
          price: '$22,000',
          label: 'Great Price'
        },
        {
          image: newGLCImage,
          name: 'New GLC - 2023',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '50 Miles',
          fuel: 'Petrol',
          transmission: 'Automatic',
          price: '$95,000',
          label: 'Low Mileage'
        },
        {
          image: audiCarImage,
          name: 'Audi A6 3.5 - New',
          description: '3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
          mileage: '100 Miles',
          fuel: 'Petrol',
          transmission: 'Automatic',
          price: '$58,000',
          label: 'Great Price'
        },
        {
          image: corollaAltis,
          name: 'Corolla Altis - 2023',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '15000 Miles',
          fuel: 'Petrol',
          transmission: 'CVT',
          price: '$45,000',
          label: 'Low Mileage'
        },
        {
          image: fordExplorer,
          name: 'Ford Explorer - 2023',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '10 Miles',
          fuel: 'Diesel',
          transmission: 'Automatic',
          price: '$35,000',
          label: 'Low Mileage'
        },
        {
          image: fordTransitImage,
          name: 'Ford Transit - 2021',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '2500 Miles',
          fuel: 'Diesel',
          transmission: 'Manual',
          price: '$22,000',
          label: 'Great Price'
        },
        {
          image: newGLCImage,
          name: 'New GLC - 2023',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '50 Miles',
          fuel: 'Petrol',
          transmission: 'Automatic',
          price: '$95,000',
          label: 'Low Mileage'
        },
        {
          image: audiCarImage,
          name: 'Audi A6 3.5 - New',
          description: '3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
          mileage: '100 Miles',
          fuel: 'Petrol',
          transmission: 'Automatic',
          price: '$58,000',
          label: 'Great Price'
        },
        {
          image: corollaAltis,
          name: 'Corolla Altis - 2023',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '15000 Miles',
          fuel: 'Petrol',
          transmission: 'CVT',
          price: '$45,000',
          label: 'Low Mileage'
        },
        {
          image: fordExplorer,
          name: 'Ford Explorer - 2023',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '10 Miles',
          fuel: 'Diesel',
          transmission: 'Automatic',
          price: '$35,000',
          label: 'Low Mileage'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* VEHICLE SECTION BASE STYLES */
.vehicles-section {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid #eee;
}

/* TEXT AND LINK STYLES */
.vehicle-text {
  display: flex;
  flex-direction: column;
}

.vehicle-text h2 {
  margin: 0;
  font-size: 18px;
}

.vehicle-link {
  display: flex;
  align-items: center;
  gap: 3px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.vehicle-link i {
  font-size: 12px;
}

/* FILTER TABS */
.cars {
  list-style: none;
  display: flex;
  gap: 24px;
  padding: 0;
}

.cars li a {
  position: relative;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  padding: 5px 0;
}

.cars li a::before,
.cars li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffd700;
  transition: width 0.4s ease;
}

.cars li a::before {
  left: 50%;
  transform: translateX(-50%);
}

.cars li a::after {
  right: 50%;
  transform: translateX(50%);
}

.cars li a:hover::before,
.cars li a:hover::after,
.cars li a.active::before,
.cars li a.active::after {
  width: 100%;
}

.cars li a.active {
  color: #333;
}

/* CAR-CARD STYLES */
.car-card {
  position: relative;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  transition: transform 0.5s ease, filter 0.5s ease;
  background: #fff;
}

/* CAR IMAGE */
.car-image {
  position: relative;
  width: 100%;
}

.car-image img {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

/* IMAGE LABEL & ICON */
.image-text {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.image-text button {
  border: none;
  border-radius: 30px;
  padding: 5px 16px;
  background: #3D923A;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.image-text i {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-text i:hover {
  transform: scale(1.1);
}

/* CAR TEXT CONTENT */
.car-text {
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.car-text h4 {
  font-size: 16px;
}

.car-text p {
  font-size: 14px;
}

.second-text {
  display: flex;
  justify-content: space-between;
}

.third-text {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.third-text h3 {
  font-size: 16px;
  margin: 0;
}

.third-text a {
  font-size: 14px;
  text-decoration: none;
  color: #405FF2;
}

.third-text a i {
  font-size: 12px;
}

@media (min-width: 768px) {
  .vehicles-section {
    padding: 40px 30px;
  }

  .vehicle-text {
    flex-direction: row;
    justify-content: space-between;
  }

  .vehicle-text h2 {
    font-size: 24px;
  }
}

/* ========== 🎯 CAROUSEL CUSTOMIZATION ========== */

/* Deep styling for vue3-carousel child components */
::v-deep(.carousel__viewport) {
  overflow: hidden; /* Hide parts of slides outside the viewport */
}

::v-deep(.carousel__track) {
  transition-timing-function: ease-out;
}

::v-deep(.carousel__slide) {
  padding: 10px;
  transform: scale(0.9);
  filter: blur(2px);
  opacity: 0.5;
  transition: all 0.4s ease;
}

::v-deep(.carousel__slide--visible) {
  opacity: 1;
}

::v-deep(.carousel__slide--active) {
  transform: scale(1.05);
  filter: none;
  opacity: 1;
  z-index: 10;
}

@media (min-width: 768px) {
  .vehicles-section {
    padding: 40px 30px;
  }

  .vehicle-text {
    flex-direction: row;
    justify-content: space-between;
  }

  .vehicle-text h2 {
    font-size: 24px;
  }

  .vehicle-link {
    font-size: 14px;
  }
}
</style>