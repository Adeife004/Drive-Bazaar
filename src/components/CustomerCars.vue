<template>
  <!-- cars-container -->
  <div class="cars-container">
    <!-- buy-car -->
    <div class="buy-car">
      <h4>Are You Looking For A Car?</h4>
      <p>We are committed to providing our customers with
        exceptional service.</p>
        <!-- buy-btn -->
        <div class="buy-btn">
            <button class="btn btn-primary">
              Get Started
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <img src="../assets/buy-car.png" alt="">
        </div>
    </div>

    <!-- sell-car -->
    <div class="sell-car">
      <h4>Do You Want To Sell A Car?</h4>
      <p>We are committed to providing our customers with
        exceptional service.</p>
        <!-- buy-btn -->
        <div class="buy-btn">
            <button class="btn btn-dark">
              Get Started
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <img src="../assets/sell-car.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CustomerCars'
}
</script>

<style scoped>
.cars-container {
  display: flex;
  gap: 24px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.buy-car,
.sell-car {
  flex: 1;
  padding: 32px;
  border-radius: 12px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.buy-car:hover,
.sell-car:hover {
  transform: translateY(-5px);
}

.buy-car {
  background: #E9F2FF;
}

.sell-car {
  background: #FFE9F3;
}

h4 {
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
}

p {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.buy-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.buy-btn img {
  max-width: 120px;
  height: auto;
  object-fit: contain;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #405ff2;
  color: white;
}

.btn-primary:hover {
  background: #3045c4;
}

.btn-dark {
  background: #333;
  color: white;
}

.btn-dark:hover {
  background: #222;
}

.btn i {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.btn:hover i {
  transform: translate(2px, -2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .cars-container {
    flex-direction: column;
    padding: 20px;
  }

  .buy-car,
  .sell-car {
    min-height: 250px;
    padding: 24px;
  }

  h4 {
    font-size: 20px;
  }

  .buy-btn img {
    max-width: 100px;
  }
}

@media (max-width: 480px) {
  .buy-btn {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .buy-btn img {
    max-width: 80px;
    align-self: flex-end;
  }
}
</style>