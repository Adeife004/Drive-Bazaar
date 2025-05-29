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
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
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

.main-content {
  flex: 1;
  padding: 1rem;
  width: 100%;
  overflow-x: hidden;
  position: relative;
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

/* Loading and error styles */
.global-loading,
.error-boundary {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.error-boundary button {
  margin-top: 10px;
  padding: 8px 16px;
  background: #405ff2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-boundary button:hover {
  background: #3045c4;
}
</style>
