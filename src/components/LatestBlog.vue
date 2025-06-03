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
            <!-- Grid Layout for Large Screens -->
            <div class="blog-grid">
                <div v-for="(post, index) in blogPosts" :key="index" class="blog-card">
                    <!-- image -->
                    <div class="image">
                        <img :src="post.image" :alt="post.title">
                        <button>{{ post.buttonText }}</button>
                    </div>
                    <!-- content-text -->
                    <div class="content-text">
                        <p>{{ post.author }}</p>
                        <p>{{ post.date }}</p>
                    </div>
                    <h4>{{ post.title }}</h4>
                </div>
            </div>

            <!-- Carousel for Small Screens -->
            <div class="carousel" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
                <transition name="fade" mode="out-in">
                    <div class="content" :key="currentIndex" v-if="blogPosts.length">
                        <!-- image -->
                        <div class="image">
                            <img :src="blogPosts[currentIndex].image" :alt="blogPosts[currentIndex].title">
                            <button>{{ blogPosts[currentIndex].buttonText }}</button>
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
import image1 from '../assets/blog1.png';
import image2 from '../assets/blog2.png';
import image3 from '../assets/blog3.png';
export default {
    name: 'LatestBlog',
    data() {
        return {
            currentIndex: 0,
            intervalId: null,
            blogPosts: [
                {
                    image: image1, 
                    author: 'Admin',
                    date: 'November 22, 2023',
                    title: '2024 BMW ALPINA XB with exclusive details extraordinary',
                    buttonText: 'Sound'
                },
                {
                    image: image2, 
                    author: 'Admin',
                    date: 'November 22, 2023',
                    title: 'BMW X6 M50i is designed to exceed your sportiest.',
                    buttonText: 'Accessories'
                },
                {
                    image: image3, 
                    author: 'Admin',
                    date: 'November 22, 2023',
                    title: 'BMW X5 Gold 2024 Sport Review: Light on Sport',
                    buttonText: 'Exterior'
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
            this.intervalId = setInterval(this.nextSlide, 3000)
        },
        pauseAutoSlide() {
            clearInterval(this.intervalId)
        }
    },
    mounted() {
        // Only start auto-slide if we're on mobile
        if (window.innerWidth < 768) {
            this.startAutoSlide()
        }
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
  justify-content: space-between;
  margin-bottom: 10px;
}

.text h2 {
  margin: 0;
  font-size: 20px;
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

/* Blog Grid Layout */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.blog-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.blog-card h4 {
    font-size: 20px;
    margin: 0;
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

/* Carousel styles */
.carousel {
    display: none;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

/* Responsive styles */
@media (max-width: 1024px) {
    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .blog-grid {
        display: none;
    }

    .carousel {
        display: block;
    }

    .blog-card {
        padding: 15px;
    }

    .blog-card h4 {
        font-size: 18px;
    }

    /* Carousel specific styles for mobile */
    .content {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .indicators {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 12px;
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
}

@media (max-width: 480px) {
    .blog-card {
        padding: 10px;
    }

    .blog-card h4 {
        font-size: 18px;
    }

    .content {
        padding: 10px;
    }
}
</style>