# Copilot Instructions for Amudham Naturals Website

## Project Overview
- This is a static, single-page website for Amudham Naturals, showcasing premium organic products.
- Built with HTML5, CSS3 (Flexbox/Grid), and vanilla JavaScript (ES6+). No frameworks or build tools are used.
- All interactive features and data are managed client-side in `script.js`.

## Key Files & Structure
- `index.html`: Main entry point. Contains all sections (products, process, about, contact, footer).
- `styles.css`: Handles all styling, responsive design, and animations.
- `script.js`: Contains product/process data, DOM manipulation, navigation, contact form logic, WhatsApp integration, and scroll animations.
- `images/`: Product images. Filenames must match product data in `script.js` for correct display.
- `DEPLOYMENT-GUIDE.md`: Step-by-step deployment instructions for Netlify and GitHub Pages, including domain and email setup.
- `README.md`: User guide for customization, image management, and project structure.

## Developer Workflows
- **No build step required**: Open `index.html` directly in a browser for local development.
- **Deployment**: Push changes to Netlify (auto-deploy) or follow GitHub Pages steps in `DEPLOYMENT-GUIDE.md`.
- **Image updates**: Add/replace images in `images/` with exact filenames as referenced in `script.js`.
- **Product/process updates**: Edit the arrays in `script.js` (`products`, `processData`).
- **Contact info**: Update in `index.html` (contact section and footer).

## Patterns & Conventions
- **Product and process data**: Defined as arrays of objects in `script.js`. Each product must specify `id`, `name`, `price`, `description`, `image`, and `category`.
- **Image fallback**: If a product image is missing, a placeholder is shown automatically.
- **WhatsApp integration**: Contact form and product buttons trigger WhatsApp Web with pre-filled messages to the business number.
- **Responsive design**: All layout and navigation adapt to mobile, tablet, and desktop via CSS and JS.
- **Animations**: Fade-in effects and smooth scrolling are handled via Intersection Observer and CSS classes.
- **No external JS dependencies**: Only Google Fonts are loaded externally.

## Integration Points
- **Netlify**: Used for hosting, SSL, CDN, and form handling (see `DEPLOYMENT-GUIDE.md`).
- **WhatsApp**: Product inquiries and contact form submissions open WhatsApp Web for direct messaging.
- **Google Analytics/Search Console**: Add tracking code to `index.html` for analytics (see deployment guide).

## Examples
- To add a new product, update the `products` array in `script.js`:
  ```js
  {
    id: 7,
    name: "New Product",
    price: "₹XXX/kg",
    description: "Description here",
    image: "images/new-product.jpg",
    category: "category-name"
  }
  ```
- To change contact details, edit the relevant section in `index.html`.
- To deploy, follow the Netlify or GitHub Pages steps in `DEPLOYMENT-GUIDE.md`.

## Troubleshooting
- If images do not appear, check filenames and placement in `images/`.
- For contact form issues, verify Netlify form settings or WhatsApp integration in `script.js`.
- For domain/email problems, follow DNS and setup steps in `DEPLOYMENT-GUIDE.md`.

---
For further customization, refer to code comments in each file and the guides provided. This project is optimized for fast, secure, and mobile-friendly organic product showcase.
