<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="home-link">
        <i class="fa-solid fa-arrow-left"></i>
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
}

.content {
  text-align: center;
  max-width: 500px;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 72px;
  color: #405ff2;
  margin: 0;
  line-height: 1;
}

h2 {
  font-size: 24px;
  color: #333;
  margin: 20px 0;
}

p {
  color: #666;
  margin-bottom: 30px;
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #405ff2;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #3045c4;
}

.home-link i {
  font-size: 14px;
}

@media (max-width: 480px) {
  .content {
    padding: 30px 20px;
  }

  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 20px;
  }
}
</style> 