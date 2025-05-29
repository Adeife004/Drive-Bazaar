<template>
    <div class="testimonial" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
        <h3>What Our Customers Say</h3>

        <div class="carousel">
            <transition name="fade" mode="out-in">
                <div class="content" :key="currentIndex" v-if="testimonials.length">
                    <div class="content-image">
                        <img :src="testimonials[currentIndex].image" alt="Customer" />
                    </div>

                    <div class="content-text">
                        <div class="rating">
                            <div class="stars">
                                <i v-for="i in 5" :key="i"
                                    :class="getStarClass(i, testimonials[currentIndex].rating)"></i>
                            </div>
                            <button>{{ testimonials[currentIndex].rating }}</button>
                        </div>

                        <h4>{{ testimonials[currentIndex].name }}</h4>
                        <p>{{ testimonials[currentIndex].title }}</p>
                        <h3>{{ testimonials[currentIndex].feedback }}</h3>
                    </div>
                </div>
            </transition>

            <!-- Indicator Dots -->
            <div class="indicators">
                <span v-for="(testimonial, index) in testimonials" :key="index"
                    :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import customer1Image from '../assets/Jazzy3.jpg';
import customer2Image from '../assets/Jazzy.jpg';
import customer3Image from '../assets/Jazzy1.jpg';
import customer4Image from '../assets/Jazzy2.JPG';
import customer5Image from '../assets/Jazzy4.jpg';
export default {
    name: 'CustomerSay',
    data() {
        return {
            currentIndex: 0,
            intervalId: null,
            testimonials: [
                {
                    image: customer1Image,
                    name: 'Adebowale Jasmine',
                    title: 'Developer',
                    rating: '5.0',
                    feedback: "I'd suggest Drive Bazaar to a friend because I had great service from my salesman Patrick and all of the team."
                },
                {
                    image: customer2Image,
                    name: 'Sarah Lee',
                    title: 'Developer',
                    rating: '4.5',
                    feedback: 'Wonderful customer experience, quick service, and really attentive staff!'
                },
                {
                    image: customer3Image,
                    name: 'John Doe',
                    title: 'Engineer',
                    rating: '4.0',
                    feedback: 'Absolutely amazing service. Will recommend to friends and family.'
                },
                {
                    image: customer4Image,
                    name: 'Jane Smith',
                    title: 'Architect',
                    rating: '4.5',
                    feedback: 'A seamless experience from start to finish. Love their dedication.'
                },
                {
                    image: customer5Image,
                    name: 'Carlos Rivera',
                    title: 'Marketer',
                    rating: '5.0',
                    feedback: "Hands down, one of the best service centers I've dealt with."
                }
            ],
        }
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
        },
        goToSlide(index) {
            this.currentIndex = index
        },
        startAutoSlide() {
            this.intervalId = setInterval(this.nextSlide, 3000)
        },
        pauseAutoSlide() {
            clearInterval(this.intervalId)
        },
        getStarClass(starIndex, rating) {
            const numericRating = parseFloat(rating);
            if (numericRating >= starIndex) {
                return 'fa-solid fa-star';
            } else if (numericRating >= starIndex - 0.5) {
                return 'fa-solid fa-star-half-alt';
            } else {
                return 'fa-regular fa-star';
            }
        }
    },
    mounted() {
        this.startAutoSlide()
    },
    beforeUnmount() {
        this.pauseAutoSlide()
    },
}
</script>

<style scoped>
.testimonial {
    padding: 40px 20px;
    background: #f8f9fa;
    text-align: center;
    position: relative;
}

.testimonial h3 {
    font-size: 24px;
    margin-bottom: 30px;
    color: #333;
}

.carousel {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

.content {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 5px;
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: center;
}

.content-image {
    flex-shrink: 0;
}

.content-image img {
    width: 250px;
    height: 280px;
    border-radius: 20px;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.content-text {
    flex-grow: 1;
    text-align: left;
}

.rating {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.stars {
    display: flex;
    gap: 5px;
}

.stars i {
    color: #ffd700;
    font-size: 18px;
}

.rating button {
    background: #405ff2;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
}

.content-text h4 {
    font-size: 20px;
    color: #333;
    margin: 0 0 5px 0;
}

.content-text p {
    color: #666;
    font-size: 16px;
    margin: 0 0 15px 0;
}

.content-text h3 {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    margin: 0;
    font-weight: 500;
    width: 70%;
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

/* Responsive */
@media (max-width: 768px) {
    .testimonial {
        padding: 30px 15px;
    }

    .content {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }

    .content-image {
        margin: 0 auto;
    }

    .content-image img {
        height: 300px;
    }

    .content-text {
        width: 100%;
        text-align: start;
    }

    .content-text h3 {
        width: 100%;
    }

    .indicators span {
        width: 10px;
        height: 10px;
    }
}

@media (max-width: 480px) {
    .testimonial {
        padding: 20px 10px;
    }

    .content {
        padding: 15px;
    }

    .content-image img {
        height: 300px;
    }

    .indicators {
        gap: 8px;
    }

    .indicators span {
        width: 8px;
        height: 8px;
    }
}
</style>