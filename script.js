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

// Product data - будет заполняться динамически
const productData = {};

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
    // Отключено: фиксация порядка категорий для стабильной сетки без "прыжков"
    return;
}

// Запускаем оптимизацию после загрузки контента
// Отключено: не пересортировываем сетку после загрузки
// window.addEventListener('load', () => {
//     setTimeout(optimizeProductLayout, 100);
// });

// Перезапускаем при изменении размера окна
// Отключено: не пересортировываем сетку при ресайзе
// window.addEventListener('resize', debounce(optimizeProductLayout, 250));

// Products Management System
class ProductsManager {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        // Пагинация по категориям: { [categoryKey]: currentPage }
        this.categoryPage = {};
        this.productsPerPage = 8;
        this.searchInput = document.getElementById('productSearch');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.priceSort = document.getElementById('priceSort');
        this.productsGrid = document.getElementById('productsGrid');
        
        this.initProducts();
        this.bindEvents();
    }
    
    initProducts() {
        // Инициализируем пустой массив товаров
        this.products = [];
        this.filteredProducts = [];
        
        // Вручную добавляем все товары с исправленными названиями
        this.loadManualProducts();
    }
    
    // Функция для ручного добавления товаров с исправленными названиями
    loadManualProducts() {
        const products = [
            // КОЛБАСЫ
            { name: 'Батончик шоколадный', category: 'сладости', price: 660, priceText: '330 ₽/0.5кг', image: 'imgs/батончикШоколадный330р0.5КГ.jpg', description: 'Шоколадный батончик' },
            { name: 'Сервелат швейцарский Беларусь', category: 'колбасы', price: 780, priceText: '780 ₽/кг', image: 'imgs/БеларусьСервелатШвейцарский780рКГ.jpg', description: 'Сервелат швейцарский от Беларусь' },
            { name: 'Любительская Блоним', category: 'колбасы', price: 670, priceText: '670 ₽/кг', image: 'imgs/БлонимЛюбительская670рКГ.jpg', description: 'Колбаса любительская Блоним' },
            { name: 'Балык телятина Брест', category: 'колбасы', price: 1460, priceText: '146 ₽/100г', image: 'imgs/брестБалыкТелятина146р100г.jpg', description: 'Балык из телятины Брест' },
            { name: 'Индейка Брест', category: 'мясо', price: 630, priceText: '630 ₽/кг', image: 'imgs/БрестИндейка630рКГ.jpg', description: 'Мясо индейки Брест' },
            { name: 'Колбаса зернистая Брест', category: 'колбасы', price: 1200, priceText: '1200 ₽/кг', image: 'imgs/брестКолбасаЗернистая1200рКГ.jpg', description: 'Колбаса зернистая Брест' },
            { name: 'Колбаса советская Брест', category: 'колбасы', price: 540, priceText: '540 ₽/кг', image: 'imgs/БрестКолбасаСоветсткая540рКГ.jpg', description: 'Колбаса советская Брест' },
            { name: 'Любительская Брест', category: 'колбасы', price: 575, priceText: '575 ₽/кг', image: 'imgs/БрестЛюбительск575рКГ.jpg', description: 'Колбаса любительская Брест' },
            { name: 'Сало домашнее Брест', category: 'мясо', price: 825, priceText: '825 ₽/кг', image: 'imgs/БрестСалоДомашнее825рКГ.jpg', description: 'Сало домашнее Брест' },
            { name: 'Сало соленое в чесноке Брест', category: 'мясо', price: 795, priceText: '795 ₽/кг', image: 'imgs/БрестСалоСоленоеВческноке795рКГ.jpg', description: 'Сало соленое в чесноке Брест' },
            { name: 'Сало сырокопченное Брест', category: 'мясо', price: 715, priceText: '715 ₽/кг', image: 'imgs/БрестСалоСыроКопченное715рКГ.jpg', description: 'Сало сырокопченное Брест' },
            { name: 'Сосиски Брест', category: 'колбасы', price: 450, priceText: '450 ₽/кг', image: 'imgs/брестСосиски450рКГ.jpg', description: 'Сосиски Брест' },
            { name: 'Холодец домашний Брест', category: 'мясо', price: 545, priceText: '545 ₽/кг', image: 'imgs/БРЕСТхолодецДомашний545рКГ.jpg', description: 'Холодец домашний Брест' },
            { name: 'Буженина из деревни запеченная', category: 'мясо', price: 580, priceText: '580 ₽/кг', image: 'imgs/БуженинаИзДеревниЗапеченная580рКГ.jpg', description: 'Буженина из деревни запеченная' },
            { name: 'Ветчина из окорока', category: 'мясо', price: 725, priceText: '725 ₽/кг', image: 'imgs/ВетчинаизОкоррока725рКГ.jpg', description: 'Ветчина из окорока' },
            { name: 'Волшебная сливка', category: 'сладости', price: 940, priceText: '470 ₽/полкило', image: 'imgs/Волшебнаясливка470рПолкило.jpg', description: 'Волшебная сливка' },
            { name: 'Ветчина ГОСТ', category: 'мясо', price: 680, priceText: '680 ₽/кг', image: 'imgs/ГОСТветчина680рКГ.jpg', description: 'Ветчина по ГОСТ' },
            { name: 'Зельц домашний с грибами Гродно', category: 'мясо', price: 400, priceText: '400 ₽/кг', image: 'imgs/ГРодноЗельчДомашнийСГрибами400рКГ.jpg', description: 'Зельц домашний с грибами Гродно' },
            { name: 'Колбаса вяленая домашняя Гродно', category: 'колбасы', price: 1530, priceText: '153 ₽/100г', image: 'imgs/гродноКолбасаВяленнаяДомашняя153р100г.jpg', description: 'Колбаса вяленая домашняя Гродно' },
            { name: 'Колбаса домашняя рубленная', category: 'колбасы', price: 785, priceText: '785 ₽/кг', image: 'imgs/колбасаДомашняяРубленная785рКГ.jpg', description: 'Колбаса домашняя рубленная' },
            { name: 'Колбаса московская', category: 'колбасы', price: 800, priceText: '800 ₽/кг', image: 'imgs/КолбасаМоскичка800рКГ.jpg', description: 'Колбаса московская' },
            { name: 'Колбаса рижская Брест', category: 'колбасы', price: 575, priceText: '575 ₽/кг', image: 'imgs/КолбасаРигискаяБрест575рКГ.jpg', description: 'Колбаса рижская Брест' },
            { name: 'Колбаса сырокопченая', category: 'колбасы', price: 544, priceText: '544 ₽/палка', image: 'imgs/колбасаСырокопченная544рПалка.jpg', description: 'Колбаса сырокопченая' },
            { name: 'Колбаса сырокопченая премиум', category: 'колбасы', price: 765, priceText: '765 ₽/палка', image: 'imgs/колбасаСырокопченная765рПалка.jpg', description: 'Колбаса сырокопченая премиум' },
            { name: 'Колбаска детская', category: 'колбасы', price: 745, priceText: '745 ₽/кг', image: 'imgs/КолбаскаДетская745рКГ.jpg', description: 'Колбаска детская' },
            { name: 'Колбаска докторская', category: 'колбасы', price: 645, priceText: '645 ₽/кг', image: 'imgs/колбаскаДокторская645рКГ.jpg', description: 'Колбаска докторская' },
            { name: 'Колбаски буженина вяленые', category: 'колбасы', price: 1600, priceText: '160 ₽/100г', image: 'imgs/колбаскиБожелеВяленные160р100г.jpg', description: 'Колбаски буженина вяленые' },
            { name: 'Колбаса рубленная говядина', category: 'колбасы', price: 730, priceText: '730 ₽/кг', image: 'imgs/колбассаРубленнаяГовядина730рКГ.jpg', description: 'Колбаса рубленная говядина' },
            { name: 'Конфеты Цветущий луг', category: 'сладости', price: 620, priceText: '310 ₽/полкило', image: 'imgs/конфеткиЦветущийЛуг310рПолкило.jpg', description: 'Конфеты Цветущий луг' },
            { name: 'Конфеты Белорусская девочка', category: 'сладости', price: 770, priceText: '385 ₽/полкило', image: 'imgs/КонфетыБеларусскаяДевочка385рПолкило.jpg', description: 'Конфеты Белорусская девочка' },
            { name: 'Конфеты Волшебные абрикос', category: 'сладости', price: 940, priceText: '470 ₽/полкило', image: 'imgs/КонфетыВолшебныеАбрикос470рПолкило.jpg', description: 'Конфеты Волшебные абрикос' },
            { name: 'Конфеты Муренка молочные', category: 'сладости', price: 650, priceText: '325 ₽/полкило', image: 'imgs/конфетыМуренкаМолочные325рПолкило.jpg', description: 'Конфеты Муренка молочные' },
            { name: 'Конфеты Трюфель вафельные', category: 'сладости', price: 1080, priceText: '540 ₽/полкило', image: 'imgs/конфетыТрюфельВафельные540рПолкило.jpg', description: 'Конфеты Трюфель вафельные' },
            { name: 'Краковская Брест', category: 'колбасы', price: 745, priceText: '745 ₽/кг', image: 'imgs/краковскаяБрест745рКГ.jpg', description: 'Краковская Брест' },
            { name: 'Грудинка соленая Могилев', category: 'мясо', price: 795, priceText: '795 ₽/кг', image: 'imgs/МогилевГрудинкаСоленая795рКГ.jpg', description: 'Грудинка соленая Могилев' },
            { name: 'Московская', category: 'колбасы', price: 1339, priceText: '415 ₽/310г', image: 'imgs/Московская415р310г.jpg', description: 'Колбаса московская' },
            { name: 'Мясо домашнее запеченное', category: 'мясо', price: 770, priceText: '770 ₽/кг', image: 'imgs/мяскоДомашнееЗапеченное770рКГ.jpg', description: 'Мясо домашнее запеченное' },
            { name: 'Ребра мясные', category: 'мясо', price: 650, priceText: '650 ₽/кг', image: 'imgs/ребраМясные650рКГ.jpg', description: 'Ребра мясные' },
            { name: 'Рулет из индейки', category: 'мясо', price: 680, priceText: '680 ₽/кг', image: 'imgs/РулетИзИндейки680рКГ.jpg', description: 'Рулет из индейки' },
            { name: 'Сардельки свиные', category: 'колбасы', price: 625, priceText: '625 ₽/кг', image: 'imgs/СарделькиСвинные625рКГ.jpg', description: 'Сардельки свиные' },
            { name: 'Сервелат белорусский', category: 'колбасы', price: 835, priceText: '835 ₽/кг', image: 'imgs/сервелатБеларусский835рКГ.jpg', description: 'Сервелат белорусский' },
            { name: 'Сервелат кремлевский', category: 'колбасы', price: 740, priceText: '740 ₽/кг', image: 'imgs/СервелатКремлевский740рКГ.jpg', description: 'Сервелат кремлевский' },
            { name: 'Сервелат телятина', category: 'колбасы', price: 685, priceText: '685 ₽/кг', image: 'imgs/СервелатТелятина685рКГ.jpg', description: 'Сервелат телятина' },
            { name: 'Сосиски рубленные', category: 'колбасы', price: 795, priceText: '795 ₽/кг', image: 'imgs/сосикиРубленные795рКГ.jpg', description: 'Сосиски рубленные' },
            { name: 'Сосиски Беларусь', category: 'колбасы', price: 590, priceText: '590 ₽/кг', image: 'imgs/сосискиБеларусь590рКГ.jpg', description: 'Сосиски Беларусь' },
            { name: 'Сосиски молочные Окраина', category: 'колбасы', price: 445, priceText: '445 ₽/кг', image: 'imgs/сосискиМолочныеОкраина445рКГ.jpg', description: 'Сосиски молочные Окраина' },
            { name: 'Сосиски нежные', category: 'колбасы', price: 560, priceText: '560 ₽/кг', image: 'imgs/сосискиНежные560рКГ.jpg', description: 'Сосиски нежные' },
            { name: 'Сосиски Никольские нежные', category: 'колбасы', price: 590, priceText: '590 ₽/кг', image: 'imgs/сосискиНикольскиеНежные590рКГ.jpg', description: 'Сосиски Никольские нежные' },
            { name: 'Утина рубленная жаренная', category: 'мясо', price: 770, priceText: '770 ₽/кг', image: 'imgs/утиннаяРУбленнаяЖаренная770рКГ.jpg', description: 'Утина рубленная жаренная' },
            { name: 'Утка чипсы вяленые', category: 'мясо', price: 204, priceText: '204 ₽/пачка', image: 'imgs/уткаЧипсыВяленные204рПачка.jpg', description: 'Утка чипсы вяленые' },
            { name: 'Ушки свиные', category: 'мясо', price: 560, priceText: '560 ₽/кг', image: 'imgs/ушкиСвинные560рКГ.jpg', description: 'Ушки свиные' },
            { name: 'Шпикачки', category: 'колбасы', price: 630, priceText: '630 ₽/кг', image: 'imgs/шпикачки630рКГ.jpg', description: 'Шпикачки' },
            { name: 'Язык телячий', category: 'мясо', price: 1257, priceText: '528 ₽/420г', image: 'imgs/ЯзыкТелячий528р420г.jpg', description: 'Язык телячий' }
        ];
        
        // Добавляем товары в систему
        products.forEach(product => {
            this.products.push({
                id: Date.now() + Math.random(),
                name: product.name,
                category: product.category,
                price: product.price,
                priceText: product.priceText,
                image: product.image,
                description: product.description
            });
        });
        
        this.filteredProducts = [...this.products];
        this.resetCategoryPages();
        this.renderProducts();
    }
    
    
    bindEvents() {
        this.searchInput.addEventListener('input', debounce(() => this.filterProducts(), 300));
        this.categoryFilter.addEventListener('change', () => this.filterProducts());
        this.priceSort.addEventListener('change', () => this.sortProducts());
    }
    
    filterProducts() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const selectedCategory = this.categoryFilter.value;
        
        this.filteredProducts = this.products.filter(product => {
            const matchesSearch = !searchTerm || 
                product.name.toLowerCase().includes(searchTerm) ||
                product.priceText.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm);
            
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        this.resetCategoryPages();
        this.renderProducts();
    }
    
    sortProducts() {
        const sortValue = this.priceSort.value;
        
        if (!sortValue) return;
        
        this.filteredProducts.sort((a, b) => {
            switch (sortValue) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                default:
                    return 0;
            }
        });
        
        this.resetCategoryPages();
        this.renderProducts();
    }
    
    // Сбрасываем страницы для категорий
    resetCategoryPages() {
        this.categoryPage = {};
        // Инициализация по всем текущим категориям
        this.filteredProducts.forEach(p => {
            if (!this.categoryPage[p.category]) this.categoryPage[p.category] = 1;
        });
    }
    
    // Функция для загрузки еще товаров по категории
    loadMoreCategory(categoryKey) {
        this.categoryPage[categoryKey] = (this.categoryPage[categoryKey] || 1) + 1;
        this.renderProducts();
    }
    
    renderProducts() {
        // Группируем товары по категориям
        const groupedProducts = {};
        
        this.filteredProducts.forEach(product => {
            if (!groupedProducts[product.category]) {
                groupedProducts[product.category] = [];
            }
            groupedProducts[product.category].push(product);
        });
        
        // Создаем HTML для каждой категории
        let html = '';
        const categoryNames = {
            'колбасы': { name: 'Колбасы', icon: 'fas fa-hotdog' },
            'мясо': { name: 'Мясо', icon: 'fas fa-drumstick-bite' },
            'сыры': { name: 'Сыры', icon: 'fas fa-cheese' },
            'сладости': { name: 'Сладости', icon: 'fas fa-candy-cane' },
            'овощи': { name: 'Овощи', icon: 'fas fa-carrot' },
            'напитки': { name: 'Напитки', icon: 'fas fa-wine-bottle' },
            'лапша': { name: 'Лапша', icon: 'fas fa-utensils' }
        };
        
        Object.keys(groupedProducts).forEach(categoryKey => {
            const categoryInfo = categoryNames[categoryKey];
            const products = groupedProducts[categoryKey];
            const currentPage = this.categoryPage[categoryKey] || 1;
            const endIndex = currentPage * this.productsPerPage;
            const visibleProducts = products.slice(0, endIndex);
            const hasMore = products.length > endIndex;

            html += `
                <div class="product-category" data-category="${categoryKey}">
                    <div class="category-header">
                        <h3>${categoryInfo.name}</h3>
                        <i class="${categoryInfo.icon}"></i>
                    </div>
                    <div class="product-items">
                        ${visibleProducts.map(product => `
                            <div class="product-item" data-product-id="${product.id}">
                                <div class="product-image">
                                    <img loading="lazy" src="${product.image}" alt="${product.name}">
                                </div>
                                <h4>${product.name}</h4>
                                <p>${product.description}</p>
                                <div class="product-price">${product.priceText}</div>
                            </div>
                        `).join('')}
                    </div>
                    ${hasMore ? `
                    <div class="category-load-more">
                        <button class="load-more-button" data-category="${categoryKey}">
                            <i class="fas fa-plus"></i> Еще (${products.length - visibleProducts.length})
                        </button>
                    </div>` : ''}
                </div>
            `;
        });
        this.productsGrid.innerHTML = html;
        
        // Навешиваем обработчики на кнопки "Еще" в категориях
        document.querySelectorAll('.category-load-more .load-more-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.currentTarget.getAttribute('data-category');
                this.loadMoreCategory(cat);
            });
        });
        
        // Обновляем данные для модального окна
        this.updateProductData();
        
        // Перезапускаем анимации
        setTimeout(() => {
            const animateElements = document.querySelectorAll('.product-category');
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        }, 100);
    }
    
    updateProductData() {
        // Обновляем объект productData для модального окна
        this.products.forEach(product => {
            productData[product.name] = {
                image: product.image,
                description: product.description,
                price: product.priceText
            };
        });
    }
    
    addProduct(product) {
        this.products.push(product);
        this.filterProducts();
    }
    
    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
        this.filterProducts();
    }
    
    // Функция для массового добавления товаров из фотографий
    addProductsFromPhotos(photosData) {
        photosData.forEach(photoData => {
            const product = {
                id: Date.now() + Math.random(), // Уникальный ID
                name: photoData.name || 'Товар без названия',
                category: photoData.category || 'другое',
                price: photoData.price || 0,
                priceText: photoData.priceText || 'Цена не указана',
                image: photoData.image || 'imgs/placeholder.webp',
                description: photoData.description || 'Описание товара'
            };
            this.addProduct(product);
        });
    }
    
    // Функция для автоматического определения категории по названию
    detectCategory(productName) {
        const name = productName.toLowerCase();
        
        if (name.includes('колбаса') || name.includes('сарделька') || name.includes('сосиска')) {
            return 'колбасы';
        }
        if (name.includes('мясо') || name.includes('говядина') || name.includes('свинина') || name.includes('баранина')) {
            return 'мясо';
        }
        if (name.includes('сыр') || name.includes('творог') || name.includes('молочн')) {
            return 'сыры';
        }
        if (name.includes('слад') || name.includes('конфет') || name.includes('печенье') || name.includes('торт') || name.includes('пирожн')) {
            return 'сладости';
        }
        if (name.includes('овощ') || name.includes('картофель') || name.includes('морков') || name.includes('лук') || name.includes('капуст')) {
            return 'овощи';
        }
        if (name.includes('напит') || name.includes('сок') || name.includes('вода') || name.includes('чай') || name.includes('кофе')) {
            return 'напитки';
        }
        if (name.includes('лапш') || name.includes('макарон') || name.includes('паст')) {
            return 'лапша';
        }
        
        return 'другое';
    }
    
    // Функция для парсинга цены из текста
    parsePrice(priceText) {
        const priceMatch = priceText.match(/(\d+)/);
        return priceMatch ? parseInt(priceMatch[1]) : 0;
    }
    
}

// Инициализируем менеджер товаров
let productsManager;

document.addEventListener('DOMContentLoaded', () => {
    productsManager = new ProductsManager();
});

// Расширенная функция показа уведомлений
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = type === 'success' ? 'fas fa-check-circle' : 
                 type === 'error' ? 'fas fa-exclamation-circle' : 
                 'fas fa-info-circle';
    
    toast.innerHTML = `<i class="${icon}"></i> ${message}`;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}