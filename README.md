# Amudham Naturals Website

## 🌟 Overview
A professional website for Amudham Naturals - your trusted source for premium organic and natural products.

## 🚀 Live Website
**The website is now live and accessible at: [amudhamnaturals.com](https://amudhamnaturals.com)**
- **Deployed using Netlify** - Fast, reliable, and secure hosting
- **Custom domain configured** - Professional web presence
- **SSL certificate enabled** - Secure browsing experience

## 📋 Deployment Information
**See the complete [DEPLOYMENT GUIDE](DEPLOYMENT-GUIDE.md) for deployment details**
- **Hosting Platform**: Netlify
- **Domain**: amudhamnaturals.com
- **Deployment Status**: Live and operational

## 📁 Project Structure
```
amudham-naturals-website/
├── index.html          # Main website file
├── styles.css          # Styling and responsive design
├── script.js           # Interactive functionality
├── images/             # Product images folder
└── README.md           # This file
```

## 🖼️ Adding Your Product Images

To use your own product images instead of placeholders, follow these steps:

### Step 1: Prepare Your Images
1. **Image Format**: Use JPG, PNG, or WebP format
2. **Image Size**: Recommended dimensions: 400x300 pixels or similar aspect ratio
3. **File Size**: Keep images under 500KB for fast loading
4. **Quality**: Use high-quality images that showcase your products clearly

### Step 2: Name Your Image Files
Save your product images with these exact filenames in the `images/` folder:

- `cashews.jpg` - Premium Cashews
- `brown-rice.jpg` - Organic Brown Rice  
- `peanuts.jpg` - Roasted Peanuts
- `sesame-seeds.jpg` - Pure Sesame Seeds
- `oil.jpg` - Cold-Pressed Oil
- `coffee-beans.jpg` - Organic Coffee Beans
- `tea-leaves.jpg` - Natural Tea Leaves
- `dry-fruits.jpg` - Mixed Dry Fruits

### Step 3: Add Images to the Folder
1. Copy your prepared images to the `images/` folder
2. Make sure the filenames match exactly (case-sensitive)
3. The website will automatically display your images

### Fallback System
- If an image file is missing, a placeholder with "📷 Image Coming Soon" will be shown
- This ensures the website works even if some images are not yet available

## 🚀 How to Use the Website

### Opening the Website
1. Double-click on `index.html` to open in your default browser
2. Or right-click → "Open with" → Choose your preferred browser

### Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Product Showcase**: Displays all your organic products with prices and descriptions
- **Contact Integration**: Customers can easily contact you for orders
- **Smooth Navigation**: Easy-to-use menu with smooth scrolling
- **Professional Design**: Clean, modern look that builds trust

## 📞 Contact Information
The website displays your contact details:
- **Name**: Amudha
- **Phone**: +91 9486225762
- **Email**: amudhamnaturals@gmail.com
- **Address**: Neyveli, Tamil Nadu
- **Website**: amudhamnaturals.com

## 🛠️ Customization

### Adding New Products
To add more products, edit the `products` array in `script.js`:

```javascript
{
    id: 9,
    name: "Your New Product",
    price: "₹XXX/kg",
    description: "Product description here",
    image: "images/your-new-product.jpg",
    category: "category-name"
}
```

### Changing Colors
Main colors are defined in `styles.css`:
- Primary Green: `#6b8e23`
- Dark Green: `#2d5016`
- Background: `#f8f9fa`

### Updating Contact Information
Edit the contact details in `index.html` in the contact section.

## 📱 Mobile Optimization
The website is fully responsive and includes:
- Mobile-friendly navigation menu
- Touch-optimized buttons
- Readable text on small screens
- Fast loading on mobile networks

## 🔧 Tech Stack
The website is built using modern web technologies:

### Frontend Technologies:
- **HTML5**: Semantic markup structure for better SEO and accessibility
- **CSS3**: Modern styling with Flexbox and CSS Grid for responsive design
- **Vanilla JavaScript (ES6+)**: Interactive features and smooth animations
  - DOM manipulation and event handling
  - Intersection Observer API for scroll animations
  - Local storage for enhanced user experience
  - Responsive navigation with hamburger menu

### Design & UX:
- **Responsive Web Design**: Mobile-first approach with breakpoints
- **CSS Animations**: Smooth transitions and fade-in effects
- **Google Fonts**: Poppins font family for modern typography
- **Cross-browser Compatibility**: Works on all modern browsers

### Deployment & Hosting:
- **Netlify**: Static site hosting with continuous deployment
- **Custom Domain**: amudhamnaturals.com with SSL certificate
- **CDN**: Global content delivery for fast loading times
- **Form Handling**: Contact form with client-side validation

### Performance Features:
- **Optimized Images**: Compressed product images with fallback system
- **Lazy Loading**: Intersection Observer for performance optimization
- **Minified Assets**: Optimized CSS and JavaScript for faster loading
- **SEO Optimized**: Meta tags, semantic HTML, and structured data

## 📈 SEO Features
- Proper HTML structure
- Meta tags for search engines
- Alt text for images
- Fast loading times
- Mobile-friendly design

---

**Ready to launch your organic products business online!** 🌱

For any questions or customizations, contact the developer or refer to the code comments in the files.