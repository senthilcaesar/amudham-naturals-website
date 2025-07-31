// Product data for Amudham Naturals
const products = [
    {
        id: 1,
        name: "Cashew (முந்திரிப்பருப்பு)",
        price: "₹1200/kg",
        description: "A nutrient-dense nut, are rich in healthy fats, protein, and essential minerals like magnesium and zinc. They support heart health, strengthen bones, boost brain function, and enhance skin health - making them a tasty and nourishing addition to any diet.",
        image: "images/cashews.jpg",
        category: "nuts"
    },
    {
        id: 2,
        name: "Karuppu Kavuni Rice (கருப்பு கவுனி அரிசி)",
        price: "₹200/kg",
        description: "An ancient Tamil Nadu heritage grain, is packed with antioxidants, fiber, and essential minerals. It supports heart health, aids digestion, regulates blood sugar, and boosts immunity - making it a powerful, natural addition to a healthy diet.",
        image: "images/Karupu-Kavuni.png",
        category: "grains"
    },
    {
        id: 3,
        name: "Aged palm jaggery (பழைய கருப்பட்டி)",
        price: "₹600/kg",
        description: "A traditional natural sweetener, is rich in iron, minerals, and antioxidants. It aids digestion, improves immunity, purifies blood, and helps fight fatigue - making it a healthy alternative to refined sugar.",
        image: "images/Old-Karupatti.png",
        category: "nuts"
    },
    {
        id: 4,
        name: "Peanuts (நிலக்கடலை)",
        price: "₹160/kg",
        description: "A protein-rich legume, are packed with healthy fats, fiber, and essential vitamins. They support heart health, boost energy, aid brain function, and help in muscle growth - making them a wholesome, everyday snack.",
        image: "images/Peanuts.png",
        category: "nuts"
    },
    //{
    //   id: 6,
    //    name: "Natural Tea Leaves (இயற்கை தேயிலை",
    //    price: "₹500/kg",
    //    description: "Hand-picked tea leaves from organic gardens. Fresh, aromatic, and full of natural antioxidants for a healthy lifestyle.",
    //    image: "images/tea-leaves.jpg",
    //    category: "beverages"
    //},
];

// Process data for each product
const processData = [
    {
        id: 1,
        productName: "Premium Cashews",
        videoUrl: "", // YouTube embed link
        steps: [
            "Hand-picked from organic cashew trees",
            "Carefully removed from shells using traditional methods",
            "Steam processed to remove natural toxins",
            "Sun-dried to preserve natural flavors",
            "Quality checked and sorted by size"
        ],
        highlight: {
            title: "Traditional Processing",
            description: "Our cashews are processed using time-tested methods that preserve their natural taste and nutritional value."
        }
    },
    {
        id: 2,
        productName: "Organic Brown Rice",
        videoUrl: "", //"https://www.youtube.com/embed/l-d3SWn9jY0", // Placeholder for YouTube link
        steps: [
            "Harvested from certified organic paddy fields",
            "Cleaned to remove impurities and stones",
            "Hulled while preserving the nutritious bran layer",
            "Sorted and graded for consistent quality",
            "Packed in moisture-proof containers"
        ],
        highlight: {
            title: "Minimal Processing",
            description: "We preserve the natural bran layer that contains essential nutrients, fiber, and vitamins."
        }
    },
    {
        id: 3,
        productName: "Peanuts",
        videoUrl: "", // Placeholder for YouTube link
        steps: [
            "Harvested from pesticide-free farms",
            "Cleaned and sorted to remove damaged nuts",
            "Roasted at optimal temperatures for flavor",
            "Cooled naturally to maintain crispness",
            "Quality tested for freshness and taste"
        ],
        highlight: {
            title: "Perfect Roasting",
            description: "Our roasting process enhances the natural nutty flavor while maintaining nutritional integrity."
        }
    },
    {
        id: 4,
        productName: "Pure Sesame Seeds",
        videoUrl: "", // Placeholder for YouTube link
        steps: [
            "Sourced from organic sesame farms",
            "Winnowed to separate seeds from pods",
            "Cleaned using natural air-flow methods",
            "Sun-dried to reduce moisture content",
            "Sieved and sorted for uniform quality"
        ],
        highlight: {
            title: "Natural Cleaning",
            description: "We use traditional winnowing and air-flow methods to ensure pure, chemical-free sesame seeds."
        }
    },
    {
        id: 5,
        productName: "Organic Coffee Beans",
        videoUrl: "", // Placeholder for YouTube link
        steps: [
            "Hand-picked from shade-grown coffee plants",
            "Pulped to remove outer cherry skin",
            "Fermented naturally for 12-24 hours",
            "Washed and sun-dried on raised beds",
            "Roasted in small batches for freshness"
        ],
        highlight: {
            title: "Artisan Roasting",
            description: "Small-batch roasting ensures each bean reaches its optimal flavor profile and aroma."
        }
    },
    {
        id: 6,
        productName: "Natural Tea Leaves",
        videoUrl: "", // Placeholder for YouTube link
        steps: [
            "Plucked early morning from organic gardens",
            "Withered naturally to reduce moisture",
            "Rolled gently to release natural oils",
            "Oxidized under controlled conditions",
            "Dried and sorted by leaf grade"
        ],
        highlight: {
            title: "Traditional Methods",
            description: "Our tea processing follows centuries-old techniques that preserve the delicate flavors and antioxidants."
        }
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Load products
    loadProducts();
    
    // Load process section
    loadProcessSection();
    
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

// Load and display process section
function loadProcessSection() {
    const processGrid = document.getElementById('processGrid');
    if (!processGrid) return;
    
    processGrid.innerHTML = '';
    
    processData.forEach(process => {
        const processCard = createProcessCard(process);
        processGrid.appendChild(processCard);
    });
}

// Create individual process card
function createProcessCard(process) {
    const card = document.createElement('div');
    card.className = 'process-card fade-in';
    
    card.innerHTML = `
        <div class="process-video">
            ${process.videoUrl ?
                `<iframe src="${process.videoUrl}" title="${process.productName} Process" allowfullscreen></iframe>` :
                `<div class="video-placeholder">
                    <div class="play-icon">▶</div>
                    <h4>${process.productName}</h4>
                    <p>Video coming soon</p>
                </div>`
            }
        </div>
        <div class="process-info">
            <h3>${process.productName}</h3>
            <p class="process-summary">${process.highlight.description}</p>
        </div>
    `;
    
    return card;
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
        
        // Get form data using name attributes
        const formData = new FormData(this);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const phone = formData.get('phone') || '';
        const message = formData.get('message') || '';
        
        // Validate required fields
        if (!name.trim() || !email.trim() || !message.trim()) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Send WhatsApp notification
        sendWhatsAppNotification({ name, email, phone, message });
        
        // Show success notification
        showNotification('Thank you for your message! Opening WhatsApp to send notification...', 'success');
        
        // Reset form
        this.reset();
        
        console.log('Contact form submitted:', { name, email, phone, message });
    });
}

// Format contact form data into a WhatsApp message
function formatContactMessage(data) {
    const { name, email, phone, message } = data;
    
    let whatsappMessage = `🌱 *New Contact Form Submission - Amudham Naturals*\n\n`;
    whatsappMessage += `👤 *Name:* ${name}\n`;
    whatsappMessage += `📧 *Email:* ${email}\n`;
    
    if (phone && phone.trim()) {
        whatsappMessage += `📱 *Phone:* ${phone}\n`;
    }
    
    whatsappMessage += `\n💬 *Message:*\n${message}\n\n`;
    whatsappMessage += `---\n`;
    whatsappMessage += `📱 Sent from: amudhamnaturals.com`;
    
    return whatsappMessage;
}

// Send WhatsApp notification
function sendWhatsAppNotification(formData) {
    try {
        const whatsappPhone = '919486225762'; // Amudha's WhatsApp number
        const formattedMessage = formatContactMessage(formData);
        const encodedMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
        
        // Open WhatsApp Web in a new tab
        const whatsappWindow = window.open(whatsappUrl, '_blank');
        
        // Check if popup was blocked
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
            // Fallback: show manual link
            showWhatsAppFallback(whatsappUrl);
        }
        
        console.log('WhatsApp notification sent:', formattedMessage);
        
    } catch (error) {
        console.error('Error sending WhatsApp notification:', error);
        showNotification('Error opening WhatsApp. Please try again.', 'error');
    }
}

// Show fallback option if WhatsApp popup is blocked
function showWhatsAppFallback(whatsappUrl) {
    const fallbackMessage = `
        <div style="text-align: center;">
            <p>Click the button below to open WhatsApp:</p>
            <a href="${whatsappUrl}" target="_blank" style="
                display: inline-block;
                background: #25D366;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin-top: 10px;
            ">📱 Open WhatsApp</a>
        </div>
    `;
    
    showCustomNotification(fallbackMessage, 'info', 8000);
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
    showCustomNotification(message, type, 5000);
}

// Show custom notification with HTML content and custom duration
function showCustomNotification(content, type = 'info', duration = 5000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let backgroundColor;
    switch(type) {
        case 'success': backgroundColor = '#4CAF50'; break;
        case 'error': backgroundColor = '#f44336'; break;
        case 'info':
        default: backgroundColor = '#2196F3'; break;
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        max-width: 350px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        line-height: 1.4;
    `;
    
    // Set content (can be HTML or text)
    if (content.includes('<')) {
        notification.innerHTML = content;
    } else {
        notification.textContent = content;
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after specified duration
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
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

// Quick WhatsApp contact (for product inquiries)
function contactViaWhatsApp(productName = '') {
    try {
        const phone = '919486225762'; // Amudha's phone number
        const message = productName
            ? `🌱 *Product Inquiry - Amudham Naturals*\n\nHi, I'm interested in *${productName}*. Please provide more details about:\n\n• Availability\n• Pricing\n• Quality specifications\n• Delivery options\n\nThank you!\n\n---\n📱 Sent from: amudhamnaturals.com`
            : `🌱 *General Inquiry - Amudham Naturals*\n\nHi, I would like to know more about your organic products.\n\nPlease share details about:\n• Available products\n• Pricing\n• Quality certifications\n• Delivery options\n\nThank you!\n\n---\n📱 Sent from: amudhamnaturals.com`;
        
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        const whatsappWindow = window.open(whatsappUrl, '_blank');
        
        // Check if popup was blocked
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
            showWhatsAppFallback(whatsappUrl);
        }
        
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        showNotification('Error opening WhatsApp. Please try again.', 'error');
    }
}

// Initialize everything when page loads
console.log('Amudham Naturals - Pure & Organic Products');