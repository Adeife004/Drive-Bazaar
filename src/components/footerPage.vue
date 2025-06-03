<template>
    <footer class="footer">
      <!-- Subscribe Section -->
      <div class="footer-top">
        <div class="footer-subscribe">
          <h4>Join DriveBazaar</h4>
          <p>Receive pricing updates, shopping tips & more!</p>
        </div>
        <div class="footer-input">
          <div class="input-wrapper">
            <input type="text" placeholder="Your email address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
  
      <hr />
  
      <!-- Footer Grid Section -->
      <div class="footer-links">
        <div class="footer-column">
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h5>Quick Links</h5>
          <ul>
            <li>Get in Touch</li>
            <li>Help Center</li>
            <li>Live Chat</li>
            <li>How It Works</li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h5>Our Brands</h5>
          <ul>
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
            <li>Volkswagen</li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h5>Vehicles Type</h5>
          <ul>
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Convertible</li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h5>Our Mobile App</h5>
          <div class="app-buttons">
            <button class="apple"><i class="fab fa-apple"></i> Apple Store</button>
            <button class="google"><i class="fab fa-google-play"></i> Google Play</button>
          </div>
          <h5>Connect With Us</h5>
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
  
      <hr />
  
      <!-- Bottom Footer -->
      <div class="footer-bottom">
        <p>© 2024 DriveBazaar. All rights reserved.</p>
        <p>
          <a href="#">Terms & Conditions</a> • <a href="#">Privacy Notice</a>
        </p>
        <!-- up-arrow to take us back to the beginning of the page -->
        <a v-if="showBackToTop" href="#" class="back-to-top" @click.prevent="scrollToTop">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterPage",
    data() {
      return {
        showBackToTop: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.showBackToTop = window.scrollY > 100
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.showBackToTop = false
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background: #050b20;
    color: white;
    padding: 40px 20px;
    /* margin: 5px 5px 0 5px; */
  }
  
  .footer-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  
  .footer-subscribe h4 {
    font-size: 1.5rem;
  }
  
  .footer-input {
    display: flex;
    align-items: center;
  }
  
  .input-wrapper {
    position: relative;
    width: 280px;
  }
  
  .input-wrapper input {
    width: 100%;
    padding: 10px 90px 10px 18px;
    border-radius: 20px;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    box-shadow: 0 0 0 1px #3f52e3;
  }
  
  .input-wrapper input::placeholder {
    color: #bfc6e0;
  }
  
  .input-wrapper button {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    background: #3f52e3;
    color: white;
    padding: 7px 20px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background 0.3s ease;
    box-shadow: 0 2px 8px rgba(63,82,227,0.08);
  }
  
  .input-wrapper button:hover {
    background: #2f3cb4;
  }
  
  hr {
    border: 0.5px solid #1e273f;
    margin: 30px 0;
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 30px;
  }
  
  .footer-column h5 {
    margin-bottom: 10px;
    font-size: 1rem;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
    font-size: 0.9rem;
  }
  
  .footer-column ul li {
    margin-bottom: 6px;
    cursor: pointer;
    position: relative;
    transition: color 0.3s;
    padding-left: 0;
  }
  
  .footer-column ul li::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #405ff2 60%, #34a853 100%);
    transition: width 0.3s;
  }
  
  .footer-column ul li:hover {
    color: #405ff2;
  }
  
  .footer-column ul li:hover::after {
    width: 25%;
  }
  
  .app-buttons button {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: #1e273f;
    border: none;
    color: white;
    border-radius: 6px;
    width: 140px;
    text-align: left;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background 0.3s, transform 0.2s;
  }
  
  .app-buttons button.apple:hover {
    background: #405ff2;
    transform: scale(1.05);
  }
  
  .app-buttons button.google:hover {
    background: #34a853;
    transform: scale(1.05);
  }
  
  .app-buttons i {
    font-size: 1.2rem;
  }
  
  .social-icons i {
    font-size: 1rem;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s, transform 0.3s, background 0.3s;
    border-radius: 50%;
    padding: 8px;
    background: transparent;
    position: relative;
  }
  
  .social-icons i:hover {
    color: #fff;
    background: linear-gradient(135deg, #405ff2 40%, #34a853 100%);
    transform: scale(1.25) rotate(-8deg);
    box-shadow: 0 2px 8px #405ff288;
    animation: bounce 0.4s;
  }
  
  @keyframes bounce {
    0% { transform: scale(1) rotate(-8deg); }
    30% { transform: scale(1.35) rotate(-8deg); }
    60% { transform: scale(1.15) rotate(-8deg); }
    100% { transform: scale(1.25) rotate(-8deg); }
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.8rem;
    color: #aaa;
  }
  
  .footer-bottom a {
    color: #aaa;
    text-decoration: none;
    margin: 0 5px;
  }
  
  .back-to-top {
    position: fixed;
    background: #3f52e3;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    right: 30px;
  }
  
  </style>
  