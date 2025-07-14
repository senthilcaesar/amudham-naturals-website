# Amudham Naturals Website

## 🌟 Overview
A professional website for Amudham Naturals - your trusted source for premium organic and natural products.

## 🚀 Want to Launch Your Website Publicly?
**See the complete [DEPLOYMENT GUIDE](DEPLOYMENT-GUIDE.md) for launching amudhamnaturals.com**
- **Cheapest option: ₹700/year (domain only)**
- **FREE hosting with GitHub Pages**
- **Step-by-step instructions included**

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

## 🔧 Technical Details
- **HTML5**: Semantic markup for better SEO
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: Interactive features and smooth animations
- **No Dependencies**: Works without internet connection
- **Cross-Browser**: Compatible with all modern browsers

## 📈 SEO Features
- Proper HTML structure
- Meta tags for search engines
- Alt text for images
- Fast loading times
- Mobile-friendly design

---

**Ready to launch your organic products business online!** 🌱

For any questions or customizations, contact the developer or refer to the code comments in the files.