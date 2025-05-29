<template>
    <!-- latest-container -->
    <div class="latest-container">
        <!-- text -->
        <div class="text">
            <h2>Latest Blog Post</h2>
            <!-- car-link -->
            <a href="#" class="car-link">
                View All
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
        <!-- blog-post -->
        <div class="blog-post">
          <div class="carousel" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
            <transition name="fade" mode="out-in">
              <div class="content" :key="currentIndex" v-if="blogPosts.length">
                  <!-- image -->
                  <div class="image">
                      <img :src="blogPosts[currentIndex].image" :alt="blogPosts[currentIndex].title">
                      <button>Sound</button>
                  </div>
                  <!-- content-text -->
                  <div class="content-text">
                      <p>{{ blogPosts[currentIndex].author }}</p>
                      <p>{{ blogPosts[currentIndex].date }}</p>
                  </div>
                  <h4>{{ blogPosts[currentIndex].title }}</h4>
              </div>
            </transition>

            <!-- Indicator Dots -->
            <div class="indicators">
              <span
                v-for="(post, index) in blogPosts"
                :key="index"
                :class="{ active: index === currentIndex }"
                @click="goToSlide(index)"
              ></span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestBlog',
    data() {
      return {
        currentIndex: 0,
        intervalId: null,
        blogPosts: [
          {
            image: '/src/assets/blog1.png', // Update path as needed
            author: 'Admin',
            date: 'November 22, 2023',
            title: '2024 BMW ALPINA XB with exclusive details extraordinary'
          },
          {
            image: '/src/assets/blog1.png', // Update path as needed
            author: 'Admin',
            date: 'November 22, 2023',
            title: 'Another exciting blog post title here'
          },
          {
            image: '/src/assets/blog1.png', // Update path as needed
            author: 'Admin',
            date: 'November 22, 2023',
            title: 'Yet another interesting blog post'
          }
        ]
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.blogPosts.length
      },
      goToSlide(index) {
        this.currentIndex = index
      },
      startAutoSlide() {
        this.intervalId = setInterval(this.nextSlide, 3000) // Auto slide every 3 seconds
      },
      pauseAutoSlide() {
        clearInterval(this.intervalId)
      }
    },
    mounted() {
      this.startAutoSlide()
    },
    beforeUnmount() {
      this.pauseAutoSlide()
    }
}
</script>

<style scoped>
.latest-container {
  padding: 40px 20px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text h2 {
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

/* Carousel styles - copied and adapted from CustomerSay.vue */
.carousel {
    max-width: 1000px; 
    margin: 0 auto;
    position: relative;
}

/* Card styling for content */
.content {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex; 
  flex-direction: column;
  gap: 15px; 
}

/* Positioning for button on image */
.image {
  position: relative; 
  display: inline-block; 
}

.image img {
  display: block; 
  width: 100%; 
  height: auto;
  border-radius: 4px;
}

.image button {
  position: absolute;
  top: 10px; 
  right: 10px; 
  z-index: 10; 
  background-color: rgba(0, 0, 0, 0.6); 
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

/* Flex display for content-text */
.content-text {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

/* Indicator Dots */
.indicators {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 12px;
    position: relative;
    z-index: 2;
}

.indicators span {
    width: 12px;
    height: 12px;
    background-color: #e0e0e0;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.indicators span:hover {
    background-color: #405ff2;
    transform: scale(1.1);
}

.indicators span.active {
    background-color: #405ff2;
    transform: scale(1.2);
    box-shadow: 0 0 8px rgba(64, 95, 242, 0.4);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive styles */
@media (max-width: 768px) {
  .latest-container {
    padding: 30px 15px;
  }

  .content {
    flex-direction: column;
    gap: 20px; /* Adjusted gap for responsive */
    padding: 10px;
  }

  .image img {
    width: 100%;
    height: auto;
  }

  .content h4 {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .latest-container {
    padding: 20px 10px;
  }

  .content {
    padding: 8px;
    gap: 15px; /* Adjusted gap for responsive */
  }

  .content h4 {
    font-size: 14px;
  }

  .image button {
    top: 5px;
    right: 5px;
    padding: 3px 6px;
    font-size: 12px;
  }
}
</style>