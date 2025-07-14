// Product data for Amudham Naturals
const products = [
    {
        id: 1,
        name: "Premium Cashews",
        price: "₹450/kg",
        description: "Fresh, organic cashews sourced directly from local farms. Rich in healthy fats, protein, and essential minerals. Perfect for snacking or cooking.",
        image: "images/cashews.jpg",
        category: "nuts"
    },
    {
        id: 2,
        name: "Organic Brown Rice",
        price: "₹80/kg",
        description: "Nutritious whole grain brown rice, unpolished and rich in fiber. Ideal for healthy meals and better digestion.",
        image: "images/brown-rice.jpg",
        category: "grains"
    },
    {
        id: 3,
        name: "Peanuts",
        price: "₹120/kg",
        description: "Peanuts with natural flavor. High in protein and healthy fats. Great for snacking and cooking.",
        image: "images/peanuts.jpg",
        category: "nuts"
    },
    {
        id: 4,
        name: "Pure Sesame Seeds",
        price: "₹200/kg",
        description: "Premium quality sesame seeds, rich in calcium and healthy oils. Perfect for cooking, baking, and garnishing.",
        image: "images/sesame-seeds.jpg",
        category: "seeds"
    },
    {
        id: 6,
        name: "Organic Coffee Beans",
        price: "₹400/kg",
        description: "Premium arabica coffee beans, organically grown and freshly roasted. Rich aroma and smooth taste for coffee lovers.",
        image: "images/coffee-beans.jpg",
        category: "beverages"
    },
    {
        id: 7,
        name: "Natural Tea Leaves",
        price: "₹250/kg",
        description: "Hand-picked tea leaves from organic gardens. Fresh, aromatic, and full of natural antioxidants for a healthy lifestyle.",
        image: "images/tea-leaves.jpg",
        category: "beverages"
    },
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Load products
    loadProducts();
    
    // Setup navigation
    setupNavigation();
    
    // Setup contact form
    setupContactForm();
    
    // Setup scroll animations
    setupScrollAnimations();
});

// Initialize website functionality
function initializeWebsite() {
    console.log('Amudham Naturals website initialized');
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load and display products
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create individual product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none;">
                <span>📷</span>
                <p>Image Coming Soon</p>
            </div>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <p class="product-description">${product.description}</p>
            <button class="product-button" onclick="contactForProduct('${product.name}')">
                Contact for Order
            </button>
        </div>
    `;
    
    return card;
}

// Setup navigation functionality
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Setup contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simulate form submission
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        this.reset();
        
        // In a real application, you would send this data to a server
        console.log('Contact form submitted:', { name, email, phone, message });
    });
}

// Contact for specific product
function contactForProduct(productName) {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill the message with product inquiry
        setTimeout(() => {
            const messageTextarea = document.querySelector('#contactForm textarea');
            if (messageTextarea) {
                messageTextarea.value = `Hi, I'm interested in ordering ${productName}. Please provide more details about availability and pricing.`;
                messageTextarea.focus();
            }
        }, 1000);
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Product filtering (for future enhancement)
function filterProducts(category) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Re-setup scroll animations for new elements
    setupScrollAnimations();
}

// Search functionality (for future enhancement)
function searchProducts(query) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    productGrid.innerHTML = '';
    
    if (searchResults.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666;">No products found matching your search.</p>';
        return;
    }
    
    searchResults.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    setupScrollAnimations();
}

// Utility function to format phone number for WhatsApp
function formatPhoneForWhatsApp(phone) {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Add country code if not present
    if (cleaned.startsWith('91')) {
        return cleaned;
    } else if (cleaned.startsWith('9')) {
        return '91' + cleaned;
    } else {
        return '91' + cleaned;
    }
}

// Quick WhatsApp contact (for future enhancement)
function contactViaWhatsApp(productName = '') {
    const phone = '919486225762'; // Amudha's phone number
    const message = productName 
        ? `Hi, I'm interested in ${productName} from Amudham Naturals. Please provide more details.`
        : 'Hi, I would like to know more about your organic products.';
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize everything when page loads
console.log('Amudham Naturals - Pure & Organic Products');