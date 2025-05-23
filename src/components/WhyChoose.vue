<template>
    <!-- choose-container -->
    <div class="choose-container">
        <h2>Why Choose Us?</h2>
        <!-- choose-cards -->
        <div class="choose-cards">
            <!-- choose-card -->
            <div class="choose-card">
                <img src="../assets/special.png" alt="" class="img1">
                <h4>Special Financing Offers</h4>
                <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
            </div>
            <!-- choose-card -->
            <div class="choose-card">
                <img src="../assets/trusted.png" alt="">
                <h4>Trusted Car Dealership</h4>
                <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
                </div>
                <!-- choose-card -->
                <div class="choose-card">
                <img src="../assets/transparent.png" alt="">
                <h4>Transparent Pricing</h4>
                <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
            </div>
            <!-- choose-card -->
            <div class="choose-card">
                <img src="../assets/expert.png" alt="">
                <h4>Expert Car Service</h4>
                <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhyChoose",
}
</script>

<style scoped>
.choose-container {
    padding: 40px 20px;
    background: #f8f9fa;
}

.choose-container h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
}

.choose-cards {
    max-width: 1200px;
    margin: 0 auto;
}

.choose-card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    margin-bottom: 15px;
}

.choose-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.choose-card img {
    padding: 5px 0;
    width: 35px;
    height: 35px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.choose-card:hover img {
    transform: scale(1.1);
}

.choose-card .img1 {
    width: 28px;
    height: 28px;
}

.choose-card h4 {
    margin: 0;
    padding: 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
}

.choose-card p {
    margin: 0;
    font-size: 13px;
    line-height: 1.5;
    color: #666;
}

/* responsiveness on big screen */
@media (min-width: 768px) {
    .choose-container {
        padding: 60px 20px;
    }

    .choose-container h2 {
        font-size: 32px;
        margin-bottom: 40px;
    }

    .choose-cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        text-align: start;
    }

    .choose-card {
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
    }

    .choose-card img {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .choose-card .img1 {
        width: 40px;
        height: 40px;
    }

    .choose-card h4 {
        font-size: 18px;
        padding: 10px 0;
    }

    .choose-card p {
        font-size: 14px;
    }
}

/* tablet responsiveness */
@media (min-width: 768px) and (max-width: 1023px) {
    .choose-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
}

/* animation for cards */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.choose-card {
    animation: fadeInUp 0.5s ease-out forwards;
}

.choose-card:nth-child(1) { animation-delay: 0.1s; }
.choose-card:nth-child(2) { animation-delay: 0.2s; }
.choose-card:nth-child(3) { animation-delay: 0.3s; }
.choose-card:nth-child(4) { animation-delay: 0.4s; }
</style>