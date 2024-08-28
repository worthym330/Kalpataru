// meta.js

// Define your meta title and description here
const metaTitle = "Kalpataru Advay, Borivali West, Mumbai, Location, Reviews";
// const metaDescription = "Your page description goes here.";
const metaDescription = "Your page description goes here.";
// Function to set meta tags
function setMetaTags() {
    document.title = metaTitle;

    // Set meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute("content", metaDescription);
    } else {
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.setAttribute("name", "description");
        metaDescriptionTag.setAttribute("content", metaDescription);
        document.head.appendChild(metaDescriptionTag);
    }
}

// Call the function to set meta tags
setMetaTags();
