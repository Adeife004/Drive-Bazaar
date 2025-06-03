<template>
  <div id="app">
    <!-- Global loading indicator -->
    <div v-if="isLoading" class="global-loading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>

    <!-- Error boundary -->
    <div v-if="error" class="error-boundary">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <h2>Something went wrong</h2>
      <p>{{ error }}</p>
      <button @click="clearError" class="retry-btn">
        <i class="fa-solid fa-rotate"></i>
        Try Again
      </button>
    </div>

    <!-- Main app content -->
    <template v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" @error="handleComponentError" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: false,
      error: null,
      loadingTimeout: null
    }
  },
  created() {
    // Handle route loading states with timeout
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true
      this.error = null
      
      // Set a timeout to show loading state
      this.loadingTimeout = setTimeout(() => {
        if (this.isLoading) {
          this.error = 'The page is taking longer than expected to load. Please try again.'
          this.isLoading = false
        }
      }, 10000) // 10 seconds timeout

      next()
    })

    this.$router.afterEach(() => {
      this.isLoading = false
      clearTimeout(this.loadingTimeout)
    })

    // Handle route errors
    this.$router.onError((error) => {
      this.error = error.message || 'An unexpected error occurred'
      this.isLoading = false
      clearTimeout(this.loadingTimeout)
    })
  },
  methods: {
    clearError() {
      this.error = null
      this.isLoading = false
      clearTimeout(this.loadingTimeout)
      // Reload the current route
      this.$router.go(0)
    },
    handleComponentError(error) {
      this.error = error.message || 'A component error occurred'
      this.isLoading = false
      clearTimeout(this.loadingTimeout)
    }
  },
  beforeUnmount() {
    clearTimeout(this.loadingTimeout)
  }
}
</script>

<style>
#app {
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  line-height: 1.6;
}

/* Loading styles */
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #405ff2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.global-loading p {
  color: #333;
  font-size: 16px;
}

/* Error boundary styles */
.error-boundary {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  width: 400px;
  z-index: 1000;
}

.error-boundary i {
  font-size: 48px;
  color: #ff4444;
  margin-bottom: 16px;
}

.error-boundary h2 {
  color: #333;
  margin-bottom: 12px;
  font-size: 20px;
}

.error-boundary p {
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
}

.retry-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #405ff2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.retry-btn:hover {
  background: #3045c4;
}

.retry-btn i {
  font-size: 14px;
  color: white;
  margin: 0;
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
