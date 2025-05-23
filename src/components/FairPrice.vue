<template>
    <!-- price-container -->
    <div class="price-container">

        <!-- conatiner -->
        <div class="container d-flex align-items-center">
            <!-- car-video -->
            <div class="car-video">
                <video controls autoplay loop muted playsinline>
                    <source src="../assets/Car-Video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <!-- car-text -->
            <div class="car-text">
                <h2>Get A Fair Price For Your Car Sell To Us Today</h2>
                <p>We are committed to providing our customers with exceptional service, competitive pricing, and a wide
                    range of.</p>
                <div class="check-box">
                    <div class="checkbox-item">
                        <input type="checkbox" id="fair-price-agree-1">
                        <label for="fair-price-agree-1">We are the UK's largest provider, with more patrols in more
                            places</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="fair-price-agree-2">
                        <label for="fair-price-agree-2">You get 24/7 roadside assistance</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="fair-price-agree-3">
                        <label for="fair-price-agree-3">We fix 4 out of 5 cars at the roadside</label>
                    </div>
                </div>
                <!-- button -->
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
        <!-- sales -->
        <div class="sales">
            <!-- car-sales -->
            <div v-for="(stat, index) in salesStats" :key="index" class="car-sales">
                <h3 class="counter" :data-target="stat.value">{{ stat.current }}</h3>
                <p>{{ stat.label }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FairPrice",
    data() {
        return {
            salesStats: [
                { value: 836000000, label: 'CARS FOR SALES', current: 0 },
                { value: 738000000, label: 'DEALER REVIEWS', current: 0 },
                { value: 100000000, label: 'VISITORS PER DAY', current: 0 },
                { value: 238000000, label: 'VERIFIED DEALERS', current: 0 }
            ]
        }
    },
    mounted() {
        this.animateCounters();
    },
    methods: {
        animateCounters() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 3000; 
                const step = target / (duration / 16); 
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        // Convert to millions and format with 1 decimal place
                        const displayValue = (current / 1000000).toFixed(1);
                        counter.textContent = `${displayValue}M`;
                        requestAnimationFrame(updateCounter);
                    } else {
                        // Final value in millions
                        const finalValue = (target / 1000000).toFixed(1);
                        counter.textContent = `${finalValue}M`;
                    }
                };

                updateCounter();
            });
        }
    }
}
</script>

<style scoped>
.car-video {
    width: 50%;
}

.car-video video {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    width: 100%;
    height: 70%;
    display: block;
}

.car-text {
    background: #EEF1FB;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 40px;
    align-items: center;
    text-align: start;
    width: 50%;
}

.car-text h2 {
    margin: 0;
    font-size: 24px;
}

.car-text p {
    margin: 0;
    font-size: 14px;
}

.check-box {
    margin-top: 20px;
}

.checkbox-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.checkbox-item input[type="checkbox"] {
    margin-right: 10px;
}

.checkbox-item label {
    margin: 0;
    font-size: 14px;
}

.sales {
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
    background: #fff;
    flex-wrap: wrap;
    gap: 20px;
}

.car-sales {
    text-align: center;
}

.car-sales h3 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 0;
}

.car-sales p {
    font-size: 14px;
    color: #666;
    margin: 5px 0 0;
}

@media (max-width: 884px) {
    .container {
        flex-direction: column;
        padding: 20px;
    }

    .car-video {
        width: 100%;
        order: -1; /* This puts the video on top */
        margin-bottom: 20px;
    }

    .car-video video {
        width: 100%;
        height: auto;
        border-radius: 12px;
        max-height: 300px;
        object-fit: cover;
    }

    .car-text {
        width: 100%;
        border-radius: 12px;
        padding: 25px 20px;
    }

    .car-text h2 {
        font-size: 20px;
        line-height: 1.4;
    }

    .car-text p {
        font-size: 14px;
        margin: 10px 0;
    }

    .check-box {
        margin-top: 15px;
    }

    .checkbox-item {
        margin-bottom: 8px;
    }

    .checkbox-item label {
        font-size: 13px;
        line-height: 1.4;
    }

    .btn {
        width: 100%;
        margin-top: 15px;
    }

    .sales {
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding: 30px 20px;
    }

    .car-sales {
        width: 100%;
        max-width: 300px;
    }

    .car-sales h3 {
        font-size: 28px;
    }

    .car-sales p {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 15px;
    }

    .car-video video {
        max-height: 200px;
    }

    .car-text {
        padding: 20px 15px;
    }

    .car-text h2 {
        font-size: 18px;
    }

    .car-text p {
        font-size: 13px;
    }

    .checkbox-item label {
        font-size: 12px;
    }

    .sales {
        padding: 25px 15px;
        gap: 25px;
    }

    .car-sales {
        max-width: 250px;
    }

    .car-sales h3 {
        font-size: 24px;
    }

    .car-sales p {
        font-size: 12px;
    }
}
</style>