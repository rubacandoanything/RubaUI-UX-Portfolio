const colors = [
    "#440000", // Red
    "#D13955", // Dark Pink
    "#C44C18", // Dark Orange
    "#4e2487", // Dark Purple
    "#121883", // Blue
    "#34000b", // Dark Pink Red
    "#613613", // Dark Brown
    "#803E26", // Weird Pink 
    "#98573B", // Light Pink
    "#C86500", // Another Dark orange i guess
    "#BD9E00", // Yellow 
    "#182D09", // Green
];

// Function to get a random color from the list
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Set the initial background color to black
document.body.style.backgroundColor = 'black';

// Event listener for scroll event to change the background color
window.addEventListener('scroll', () => {
    document.body.style.transition = 'background-color 0.6s ease'; // Smooth transition
    document.body.style.backgroundColor = getRandomColor();
});

// 2. Carousel Item Duplication Logic
function duplicateCarouselItems(directionClass) {
    try {
        const carouselContent = document.querySelector(`.carousel-content.${directionClass}`);
        if (!carouselContent) {
            console.warn(`Carousel content not found for ${directionClass} on page: ${window.location.pathname}`);
            return;
        }
        const originalItem = carouselContent.querySelector('.carousel-item');
        if (!originalItem) {
            console.warn(`Carousel item not found for ${directionClass} on page: ${window.location.pathname}`);
            return;
        }
        const viewportWidth = 1440;
        const itemWidth = 240;
        const minItems = Math.ceil((viewportWidth / itemWidth) * 2);
        const totalItems = Math.max(minItems, 20);

        for (let i = 0; i < totalItems - 1; i++) {
            const clonedItem = originalItem.cloneNode(true);
            carouselContent.appendChild(clonedItem);
        }

        const totalWidth = totalItems * itemWidth;
        const speed = 50;
        const duration = totalWidth / speed;
        carouselContent.style.animationDuration = `${duration}s`;
    } catch (error) {
        console.error(`Error in duplicateCarouselItems for ${directionClass}:`, error);
    }
}

try {
    duplicateCarouselItems('right-to-left');
    duplicateCarouselItems('left-to-right');
} catch (error) {
    console.error('Error initializing carousel:', error);
}

// 3. Hover Effects for Carousel Items
try {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.line-1').style.color = '#00CED1';
            item.querySelector('.line-2').style.color = '#00CED1';
            item.querySelector('.line-1').style.textShadow = '0 0 10px rgba(0, 206, 209, 0.5)';
            item.querySelector('.line-2').style.textShadow = '0 0 10px rgba(0, 206, 209, 0.5)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.line-1').style.color = '#fff';
            item.querySelector('.line-2').style.color = '#ccc';
            item.querySelector('.line-1').style.textShadow = 'none';
            item.querySelector('.line-2').style.textShadow = 'none';
        });

        item.addEventListener('click', () => {
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
} catch (error) {
    console.error('Error setting up carousel item hover effects:', error);
}

// 4. Scroll to Activate Services
try {
    const serviceItems = document.querySelectorAll('.service-item');
    let currentIndex = 0;

    window.addEventListener('load', () => {
        if (serviceItems.length > 0) {
            serviceItems[0].classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        const section = document.querySelector('.services-section');
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            const progress = (scrollPosition - sectionTop) / sectionHeight;
            const newIndex = Math.min(Math.floor(progress * serviceItems.length), serviceItems.length - 1);

            if (newIndex !== currentIndex) {
                serviceItems.forEach(item => item.classList.remove('active'));
                currentIndex = newIndex;
                serviceItems[currentIndex].classList.add('active');
            }
        }
    });
} catch (error) {
    console.error('Error in service items setup:', error);
}

const projects = [
    { id: "medico", title: "Medico Direct Scout", category: "Business Applications", description: "This is a recruiting tool that allows users to search for medical professionals and directly contact them. I created the UI design and handled the front-end development.", release: "2024.04", services: "UI Design, HTML/CSS, JavaScript/jQuery", url: "非公開", images: ["img/Screenshot-2025-04-24-190823.png"] },
    { id: "akihiro", title: "Akihiro Kawamura", category: "Portfolio Website", description: "A visually stunning portfolio website built for a professional photographer, featuring a responsive layout and a gallery to showcase high-resolution images with smooth animations.", release: "2024.03", services: "UI Design, HTML/CSS, JavaScript", url: "https://akihiro-portfolio.com", images: [] },
    { id: "ecommerce", title: "E-Commerce Hub", category: "Online Retail", description: "An e-commerce platform designed to provide a seamless shopping experience, with features like product filtering, a shopping cart, and a responsive checkout process.", release: "2024.02", services: "UI Design, HTML/CSS, JavaScript", url: "非公開", images: [] },
    { id: "fintech", title: "FinTech Dashboard", category: "Financial Tools", description: "A comprehensive dashboard for financial analysts, offering real-time data visualization, customizable reports, and secure data handling.", release: "2024.01", services: "UI Design, HTML/CSS, JavaScript", url: "https://fintech-dashboard.com", images: [] },
    { id: "healthsync", title: "HealthSync App", category: "Healthcare Solutions", description: "A mobile-friendly application that synchronizes health records between patients and doctors, featuring a clean interface and secure data transmission.", release: "2023.12", services: "UI Design, HTML/CSS, JavaScript", url: "非公開", images: [] },
    { id: "travelmate", title: "TravelMate Portal", category: "Travel & Tourism", description: "A travel portal that allows users to book flights, hotels, and tours, with an intuitive interface and real-time availability updates.", release: "2023.11", services: "UI Design, HTML/CSS, JavaScript", url: "https://travelmate-portal.com", images: [] },
    { id: "edustream", title: "EduStream Platform", category: "Education Tech", description: "An online learning platform that streams educational videos and provides interactive quizzes, designed for both students and educators.", release: "2023.10", services: "UI Design, HTML/CSS, JavaScript", url: "非公開", images: [] },
    { id: "retailanalytics", title: "Retail Analytics Suite", category: "Data Analytics", description: "A powerful suite of tools for retail businesses to analyze sales trends, inventory levels, and customer behavior with detailed visualizations.", release: "2023.09", services: "UI Design, HTML/CSS, JavaScript", url: "https://retailanalytics-suite.com", images: [] }
];

// Function to handle click events on project cards in projects.html
function setupProjectCardClicks() {
    try {
        console.log("Setting up project card clicks on:", window.location.pathname);
        document.querySelectorAll(".project-card").forEach(card => {
            card.addEventListener("click", function(event) {
                const href = this.getAttribute("href");
                console.log("Clicked project, navigating to:", href);
                window.location.href = href;
            });
        });
    } catch (error) {
        console.error('Error in setupProjectCardClicks:', error);
    }
}

// Navigation toggle with enhanced debugging
document.addEventListener('DOMContentLoaded', () => {
    try {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav div');

        if (!navToggle || !navMenu) {
            console.error('Navigation elements not found on page:', window.location.pathname, { navToggle, navMenu });
            return;
        }

        console.log('Navigation toggle initialized on:', window.location.pathname);

        navToggle.addEventListener('click', () => {
            console.log('Hamburger menu clicked on:', window.location.pathname);
            navMenu.classList.toggle('active');
            console.log('Menu active state:', navMenu.classList.contains('active'));
        });

        const navLinks = document.querySelectorAll('.nav div a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                console.log('Nav link clicked:', href, 'Current page:', currentPath);
                if (href === currentPath) {
                    e.preventDefault();
                }
                navMenu.classList.remove('active');
                console.log('Menu closed after link click');
            });
        });

        // Initialize project card clicks only on projects.html
        if (window.location.pathname.includes('projects.html')) {
            setupProjectCardClicks();
        }
    } catch (error) {
        console.error('Error in navigation toggle setup:', error);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});
