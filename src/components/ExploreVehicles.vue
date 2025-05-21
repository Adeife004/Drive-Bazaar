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
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'ExploreVehicles'
}
</script>

<style scoped>
.vehicles-section {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid #eee;
}

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
  text-align: center;
  gap: 3px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.vehicle-link i {
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

  .vehicle-link {
    font-size: 14px;
  }
}
</style>