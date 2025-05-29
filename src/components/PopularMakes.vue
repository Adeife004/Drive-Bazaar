<template>
  <!-- container -->
  <div class="makes-container">
    <!-- makes-text -->
    <div class="makes-text">
      <h2>Popular Makes</h2>
      <!-- brand-link -->
      <a href="#" class="makes-link">
        View All
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
    <!-- cars -->
    <ul class="cars">
      <li><a href="#" class="active">Audi</a></li>
      <li><a href="#">Ford</a></li>
      <li><a href="#">Mercedes Benz</a></li>
    </ul>
    <!-- makes-card -->
    <div class="makes-card">
      <!-- card -->
      <div v-for="(car, index) in cars" :key="index" class="card">
        <!-- card-img -->
        <div class="card-img">
          <img :src="car.image" :alt="car.name">
          <!-- img-text -->
          <div class="img-text">
            <button>{{ car.label }}</button>
            <i class="fa-solid fa-bookmark"></i>
          </div>
        </div>
        <!-- card-text -->
        <div class="card-text">
          <h3>{{ car.name }}</h3>
          <p>{{ car.description }}</p>
          <!-- text -->
          <div class="text">
            <i class="fa-solid fa-gauge-simple"></i>
            <p>{{ car.mileage }}</p>
          </div>
          <!-- text -->
          <div class="text">
            <i class="fa-solid fa-gas-pump"></i>
            <p>{{ car.fuel }}</p>
          </div>
          <!-- text -->
          <div class="text">
            <i class="fa-solid fa-gear"></i>
            <p>{{ car.transmission }}</p>
          </div>
          <h5>{{ car.oldPrice }}</h5>
          <!-- price -->
          <div class="price">
            <h4>{{ car.price }}</h4>
            <a href="#" class="details">
              View Details
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import audiA5Image from '../assets/Audi A5 -2023.png';
import audiA4Image from '../assets/Audi A4 - 2022.png';
export default {
  name: 'Popularmakes',
  data() {
    return {
      cars: [
        {
          image: audiA5Image,
          name: 'Audi A5 - 2023',
          description: '2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate',
          mileage: '500 Miles',
          fuel: 'Petrol',
          transmission: 'Automatic',
          price: '$45,000',
          oldPrice: '$50,000',
          label: 'Sale'
        },
        {
          image: audiA5Image,
          name: 'Audi A5 - 2023',
          description: '2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate',
          mileage: '500 Miles',
          fuel: 'Petrol',
          transmission: 'Automatic',
          price: '$45,000',
          oldPrice: '$50,000',
          label: 'Sale'
        },
        {
          image: audiA4Image,
          name: 'Audi A4 - 2022',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '2500 Miles',
          fuel: 'Diesel',
          transmission: 'Manual',
          price: '$22,000',
          oldPrice: '$25,000',
          label: 'Sale'
        },
        {
          image: audiA4Image,
          name: 'Audi A4 - 2022',
          description: '4.0 D5 PowerPulse Momentum 5dr… Geartronic Estate',
          mileage: '2500 Miles',
          fuel: 'Diesel',
          transmission: 'Manual',
          price: '$22,000',
          oldPrice: '$25,000',
          label: 'Sale'
        }
      ]
    }
  }
}
</script>

<style scoped>
.makes-container {
  padding: 30px 20px;
  background: #050B20;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.makes-text {
  display: flex;
  flex-direction: column;
}

.makes-text h2 {
  margin: 0;
  font-size: 18px;
  color: #fff;
}

.makes-link {
  display: flex;
  align-items: center;
  gap: 3px;
  color: #333;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}

.makes-link i {
  color: #fff;
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
  color: #888;
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
  color: #fff;
}

.card {
  background: #040d30;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}

.card-img {
  position: relative;
  width: 100%;
}

.card-img img {
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}

.img-text {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.img-text button {
  border: none;
  border-radius: 15px;
  padding: 5px 16px;
  background: #405FF2;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.img-text i {
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

.img-text i:hover {
  transform: scale(1.1);
}

.card-text {
  padding: 10px 16px;
  color: #fff;
}

.card-text h3 {
  font-size: 16px;
}

.card-text p {
  font-size: 12px;
}

.text {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
  padding: 5px 0;
}

.text i {
  font-size: 12px;
}

.text p {
  margin: 0;
  font-size: 12px;
}

.card-text h5 {
  font-size: 15px;
  text-decoration: line-through;
}

.price {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.price h4 {
  font-size: 16px;
}

.details {
  color: #7b7777;
  font-size: 12px;
  text-decoration: none;
}

.makes-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}

@media (min-width: 768px) {
  .makes-container {
    padding: 40px 30px;
  }

  .makes-text {
    flex-direction: row;
    justify-content: space-between;
  }

  .makes-text h2 {
    font-size: 24px;
  }

  .makes-link {
    font-size: 14px;
  }

  .makes-card {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .makes-card {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1400px;
    margin: 20px auto 0;
    gap: 25px;
  }

  .card-text h3 {
    font-size: 18px;
  }

  .card-text p {
    font-size: 14px;
  }

  .text p {
    font-size: 14px;
  }

  .price h4 {
    font-size: 18px;
  }

  .details {
    font-size: 14px;
  }
}
</style>