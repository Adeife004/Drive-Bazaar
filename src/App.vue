<template>
  <div id="app">
    <!-- Global loading indicator -->
    <div v-if="isLoading" class="global-loading">
      Loading...
    </div>

    <!-- Error boundary -->
    <div v-if="error" class="error-boundary">
      <h2>Something went wrong</h2>
      <p>{{ error }}</p>
      <button @click="clearError">Try Again</button>
    </div>

    <!-- Main app content -->
    <template v-else>
      <router-view name="hero"></router-view>
      <!-- <router-view name="explore-brand"></router-view> -->
      <main class="main-content">
        <!-- <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view> -->
      </main>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  created() {
    // Handle route loading states
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true
      next()
    })

    this.$router.afterEach(() => {
      this.isLoading = false
    })

    // Handle route errors
    this.$router.onError((error) => {
      this.error = error.message
      this.isLoading = false
    })
  },
  methods: {
    clearError() {
      this.error = null
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
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

.main-content {
  flex: 1;
  padding: 1rem;
}

.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.error-boundary {
  padding: 2rem;
  text-align: center;
  color: #dc3545;
}

.error-boundary button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-boundary button:hover {
  background: #c82333;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
