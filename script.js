// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(74, 222, 128, 0.3)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(74, 222, 128, 0.2)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-category, .contact-item, .about-text, .about-image');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Product category hover effects
document.querySelectorAll('.product-category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact item hover effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
        item.style.boxShadow = '0 5px 20px rgba(44, 85, 48, 0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
        item.style.boxShadow = 'none';
    });
});

// Rating animation
function animateRating() {
    const stars = document.querySelectorAll('.stars i');
    stars.forEach((star, index) => {
        setTimeout(() => {
            star.style.transform = 'scale(1.2)';
            star.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                star.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// Animate rating on page load
window.addEventListener('load', () => {
    setTimeout(animateRating, 1000);
});

// Add loading animation for placeholder images
document.querySelectorAll('.placeholder-image').forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        placeholder.style.background = '#e3f2fd';
        placeholder.style.borderColor = '#2196f3';
        placeholder.querySelector('i').style.color = '#2196f3';
        placeholder.querySelector('p').textContent = 'Нажмите для загрузки фото';
        
        setTimeout(() => {
            placeholder.style.background = '#f8f9fa';
            placeholder.style.borderColor = '#dee2e6';
            placeholder.querySelector('i').style.color = '#2c5530';
            placeholder.querySelector('p').textContent = placeholder.querySelector('p').textContent.replace('Нажмите для загрузки фото', 'Фото товара');
        }, 2000);
    });
});

// Add scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-accent);
    color: var(--primary-dark);
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-glow);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.background = 'var(--accent-green)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.background = 'var(--gradient-accent)';
});

// Form validation (if contact form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#28a745';
        }
    });
    
    return isValid;
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(74, 222, 128, 0.3)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(74, 222, 128, 0.2)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Product Modal Functionality
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalClose = document.getElementById('modalClose');
const callButton = document.getElementById('callButton');
const toast = document.getElementById('toast');

// Phone number from contacts section
const phoneNumber = '+7 903 113 52 44';

// Product data
const productData = {
    'Колбаса домашняя': {
        image: 'imgs/колбаса.webp',
        description: 'Традиционная белорусская колбаса, приготовленная по старинному рецепту из отборного мяса. Идеально подходит для бутербродов и нарезки.',
        price: 'от 320 ₽/кг'
    },
    'Колбаса премиум': {
        image: 'imgs/колбаса2.webp',
        description: 'Элитная колбаса высшего сорта из премиального мяса. Нежный вкус и изысканный аромат для настоящих гурманов.',
        price: 'от 450 ₽/кг'
    },
    'Лапша для супа': {
        image: 'imgs/сыр касичка.webp',
        description: 'Домашняя лапша для приготовления вкусных и питательных супов. Изготовлена из качественной муки по традиционной технологии.',
        price: 'от 120 ₽/кг'
    },
    'Мармелад ассорти': {
        image: 'imgs/мармелад.webp',
        description: 'Натуральный фруктовый мармелад из свежих фруктов и ягод. Без искусственных красителей и консервантов.',
        price: 'от 180 ₽/кг'
    },
    'Мармелад премиум': {
        image: 'imgs/мармелад2.webp',
        description: 'Элитный мармелад с натуральными соками и фруктовыми добавками. Изысканный вкус для особых случаев.',
        price: 'от 220 ₽/кг'
    },
    'Орехи со сгущенкой': {
        image: 'imgs/орехи.webp',
        description: 'Вкусные орехи в сгущенке - идеальный десерт для всей семьи. Сладкое лакомство из качественных ингредиентов.',
        price: 'от 350 ₽/кг'
    },
    'Картофель': {
        image: 'imgs/картофель.webp',
        description: 'Свежий картофель от местных фермеров. Отличное качество, подходит для любых кулинарных целей.',
        price: 'от 45 ₽/кг'
    },
    'Напитки': {
        image: 'imgs/напитки.webp',
        description: 'Качественные напитки и соки от проверенных производителей. Широкий ассортимент на любой вкус.',
        price: 'от 80 ₽/шт'
    }
};

// Open modal when clicking on product
document.addEventListener('click', (e) => {
    const productItem = e.target.closest('.product-item');
    if (productItem) {
        const productName = productItem.querySelector('h4').textContent;
        const product = productData[productName];
        
        if (product) {
            modalTitle.textContent = productName;
            modalImage.src = product.image;
            modalImage.alt = productName;
            modalDescription.textContent = product.description;
            modalPrice.textContent = product.price;
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
});

// Close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Copy phone number to clipboard
callButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(phoneNumber);
        showToast();
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Failed to copy phone number:', err);
            alert('Номер телефона: ' + phoneNumber);
        }
        document.body.removeChild(textArea);
    }
});

// Show toast notification
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Masonry-like layout for product categories
function optimizeProductLayout() {
    const grid = document.querySelector('.products-grid');
    const items = Array.from(document.querySelectorAll('.product-category'));
    
    if (window.innerWidth > 768) {
        // Сортируем по высоте - самые короткие блоки вверх
        items.sort((a, b) => {
            const heightA = a.offsetHeight;
            const heightB = b.offsetHeight;
            return heightA - heightB;
        });
        
        // Переставляем элементы в DOM
        items.forEach(item => grid.appendChild(item));
    }
}

// Запускаем оптимизацию после загрузки контента
window.addEventListener('load', () => {
    setTimeout(optimizeProductLayout, 100);
});

// Перезапускаем при изменении размера окна
window.addEventListener('resize', debounce(optimizeProductLayout, 250));