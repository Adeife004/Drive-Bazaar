<template>
    <!-- cars-container -->
    <div class="cars-container">
        <!-- shop-car -->
        <div class="shop-car">
            <h2>Shop BoxCar Your Way</h2>
            <!-- brand-link -->
            <a href="#" class="car-link">
                View All
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
        <!-- cars -->
        <ul class="cars">
            <li><a href="#" class="active">New Cars For Sale</a></li>
            <li><a href="#">Used Cars For Sale</a></li>
            <li><a href="#">Browse By Type</a></li>
            <li><a href="#">Browse By Brand</a></li>
        </ul>
        <!-- car-types -->
        <div class="car-types">
            <!-- carTypes-list -->
            <ul class="carTypes-list">
                <li><a href="#">Ford Cars</a></li>
                <li><a href="#">Honda Cars</a></li>
                <li><a href="#">Hyundai Cars</a></li>
                <li><a href="#">Infiniti Cars</a></li>
                <li><a href="#">Jaguar Cars</a></li>
                <li><a href="#">Jeep Cars</a></li>
                <li><a href="#">Kia Cars</a></li>
                <li><a href="#">Land Rover Cars</a></li>
                <li><a href="#">Lexus Cars</a></li>
                <li><a href="#">Lincoln Cars</a></li>
                <li><a href="#">Mazda Cars</a></li>
                <li><a href="#">Mercedes Cars</a></li>
                <li><a href="#">Mini Cars</a></li>
                <li><a href="#">Mitsubishi Cars</a></li>
                <li><a href="#">Nissan Cars</a></li>
                <li><a href="#">Porsche Cars</a></li>
                <li><a href="#">Ram Cars</a></li>
                <li><a href="#">Subaru Cars</a></li>
                <li><a href="#">Tesla Cars</a></li>
                <li><a href="#">Toyota Cars</a></li>
                <li><a href="#">Volkswagen Cars</a></li>
                <li><a href="#">Volvo Cars</a></li>
                <li><a href="#">Acura Cars</a></li>
                <li><a href="#">Alfa Romeo Cars</a></li>
                <li><a href="#">Aston Martin Cars</a></li>
                <li><a href="#">Audi Cars</a></li>
                <li><a href="#">Bentley Cars</a></li>
                <li><a href="#">BMW Cars</a></li>
                <li><a href="#">Buick Cars</a></li>
                <li><a href="#">Cadillac Cars</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxCar'
}
</script>

<style scoped>
.cars-container {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid #eee;
}

/* TEXT AND LINK STYLES */
.shop-car {
  display: flex;
  flex-direction: column;
}

.shop-car h2 {
  margin: 0;
  font-size: 18px;
}

.car-link {
  display: flex;
  align-items: center;
  gap: 3px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.car-link i {
  font-size: 12px;
}

/* FILTER TABS */
.cars {
  list-style: none;
  display: flex;
  flex-direction: column;
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

.car-types {
    margin-top: 20px;
}

.carTypes-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
}

.carTypes-list li a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    display: block;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.carTypes-list li a:hover {
    background: #f5f5f5;
    color: #405FF2;
}

@media (max-width: 1200px) {
    .carTypes-list {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 768px) {
    .carTypes-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 480px) {
    .carTypes-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 768px) {
  .cars-container {
    padding: 40px 30px;
  }

  .shop-car {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .shop-car h2 {
    font-size: 24px;
  }

  .cars {
    flex-direction: row;
    gap: 32px;
  }

  .cars li a {
    white-space: nowrap;
  }
}
</style>