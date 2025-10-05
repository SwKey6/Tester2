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

// Удаляем старую систему productData — модалка берёт данные напрямую из карточки

// Open modal when clicking on product (берём данные из DOM карточки)
document.addEventListener('click', (e) => {
    const productItem = e.target.closest('.product-item');
    if (!productItem) return;

    const productNameEl = productItem.querySelector('h4');
    const productImgEl = productItem.querySelector('img');
    const productCategory = productItem.getAttribute('data-category') || '';

    // 18+ подтверждение для категории алкоголь
    if (productCategory === 'алкоголь' && !window.__adultConfirmed) {
        const ok = confirm('Раздел содержит алкогольную продукцию. Вам есть 18 лет?');
        if (!ok) return;
        window.__adultConfirmed = true;
    }

    const titleText = productNameEl ? productNameEl.textContent : '';
    const imgSrc = productImgEl ? productImgEl.getAttribute('src') : '';
    const imgAlt = productImgEl ? productImgEl.getAttribute('alt') || titleText : titleText;

    modalTitle.textContent = titleText;
    modalImage.src = imgSrc;
    modalImage.alt = imgAlt;

    // Временно скрываем описание и цену, пока не добавим новые
    if (modalDescription) modalDescription.textContent = '';
    if (modalPrice) modalPrice.textContent = '';
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
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

// Blog Management System
class BlogManager {
    constructor() {
        this.posts = [];
        this.modal = document.getElementById('blog-modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalBody = document.getElementById('modal-body');
        this.modalClose = document.getElementById('blog-modal-close');
        this.blogSection = document.getElementById('blog');
        this.blogPostsContainer = document.getElementById('blog-posts');
        this.isAnimating = false;
        
        this.initBlog();
        this.bindEvents();
    }
    
    initBlog() {
        // Посты теперь загружаются из HTML
        this.addAnimations();
    }
    
    addAnimations() {
        // Добавляем анимацию появления постов
        setTimeout(() => {
            const posts = this.blogPostsContainer.querySelectorAll('.blog-post');
            posts.forEach((post, index) => {
                setTimeout(() => {
                    post.classList.add('animate');
                }, index * 100);
            });
        }, 100);
    }
    
    renderPosts() {
        // Посты уже загружены в HTML, просто добавляем анимации
        this.addAnimations();
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    openPost(postId) {
        // Получаем заголовок из HTML
        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (!postElement) return;
        
        const postTitle = postElement.querySelector('h3').textContent;
        const postContent = document.getElementById(`post-content-${postId}`);
        
        if (!postContent) return;
        
        this.modalTitle.textContent = postTitle;
        this.modalBody.innerHTML = postContent.innerHTML;
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Анимация открытия модального окна
        this.isAnimating = true;
        setTimeout(() => {
            this.isAnimating = false;
        }, 400);
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Анимация закрытия модального окна
        this.isAnimating = true;
        setTimeout(() => {
            this.isAnimating = false;
        }, 400);
    }
    
    bindEvents() {
        // Обработчик клика по постам
        this.blogPostsContainer.addEventListener('click', (e) => {
            const postElement = e.target.closest('.blog-post');
            if (postElement) {
                const postId = parseInt(postElement.dataset.postId);
                this.openPost(postId);
            }
        });
        
        // Обработчики модального окна
        this.modalClose.addEventListener('click', () => {
            this.closeModal();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal && !this.isAnimating) {
                this.closeModal();
            }
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Обработчик ссылки на блог в навигации (только для основной страницы)
        const blogLink = document.getElementById('blog-link');
        if (blogLink) {
            blogLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'blog.html';
            });
        }
    }
    
    scrollToBlog() {
        const blogSection = document.getElementById('blog');
        if (blogSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = blogSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Анимация появления секции блога
            setTimeout(() => {
                blogSection.classList.add('animate');
            }, 500);
        }
    }
    
    addPost(post) {
        this.posts.unshift(post);
        this.renderPosts();
    }
    
    updatePost(postId, updatedPost) {
        const index = this.posts.findIndex(p => p.id === postId);
        if (index !== -1) {
            this.posts[index] = { ...this.posts[index], ...updatedPost };
            this.renderPosts();
        }
    }
}

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
        this.prices = this.initializePrices();
        
        this.initProducts();
        this.bindEvents();
    }
    
    initializePrices() {
        return {
            // Сыры
            'сыр галандский': 890,
            'сыр жальгирис': 170,
            'сыр манченго': 890,
            'сыр жальгирись': 170,
            
            // Молочные продукты
            'молоко': 130,
            'кефир': 126,
            'сгущенное молоко в банке': 145,
            'сгущенное молоко в упаковке': 275,
            'сгущенное молоко егорка': 155,
            'сгущенные сливки': 155,
            'сгущенное молоко с какао': 190,
            'молоко с кофе': 185,
            'беларуский пломбир': 90,
            'беларусь пломбир': 90,
            
            // Конфеты
            'конфеты аленка': 182,
            'конфеты с вишней': 182,
            'конфеты столичные': 182,
            'белые конфеты': 140,
            'конфеты карамель в шоколаде': 265,
            'конфеты мятные леденцы': 315,
            'конфеты комунарка': 19,
            'конфеты дуэт': 910,
            'конфеты черника': 850,
            'конфеты клюква': 850,
            'конфеты черемуха': 390,
            'шоколадки комунарка': 225,
            
            // Торты и пирожные
            'торт лесная поляна': 710,
            'торт мокко безе': 695,
            'торт полет': 605,
            'торт медовый': 740,
            'торт чернос': 820,
            'красный бархат торт': 695,
            'торт сказки востока': 855,
            'пироженое птички': 346,
            'пироженое корзинка': 370,
            'пироженое картошка': 215,
            'пироженое ассорти': 699,
            
            // Блинчики и вареники
            'блинчики домашние': 395,
            'блинчики с говядиной и луком': 830,
            'блинчики ветчина и сыр': 695,
            'блинчики жульен': 677,
            'блинчики с ветчиной и сыром': 695,
            'сырники': 575,
            'вареники': 290,
            'вареники с вишней': 290,
            
            // Мясные продукты
            'говядина томленная': 270,
            'свинина томленная': 245,
            'свинина тушеная': 295,
            'свинина тушеная смачно': 195,
            'свинина тушеная первый сорт': 255,
            'говярдина тушеная гродфуд': 370,
            'свинина тушеная гродфуд': 330,
            'говядина тушеная высший сорт': 370,
            'говядина свинина походные': 340,
            'говядина свинина по домашнему': 200,
            'говядина свинина походные': 340,
            'конина тушеная': 295,
            'котлеты куриные': 488,
            'филе куриное': 375,
            'кусок цепленка': 370,
            'бифштекс': 550,
            
            // Консервы
            'каша перловская с говядиной': 190,
            'каша гречневая с говядиной': 190,
            'плов сытный': 195,
            'говядина тушеная высший сорт': 370,
            
            // Соусы и приправы
            'аджика': 110,
            'аджика в баночке': 250,
            'аджика абхазия': 250,
            'аджика острая с паприкой': 250,
            'соевый соус': 160,
            'соус чили острый': 70,
            'соус чили острый с чесноком': 70,
            'кетчуп острый': 85,
            'кетчуп барбекю': 85,
            'соус татарский абс': 110,
            'томатный соус': 220,
            'томатный соус абс': 140,
            'паста томатная': 220,
            'паста томатная абс': 145,
            'томаты маринованные': 140,
            'корнишончики маринованные': 195,
            'лукашенские маринованные огурца': 225,
            'лукашенские маринованные черри': 225,
            
            // Напитки
            'вода': 55,
            'вода арида': 75,
            'вода со вкусом персика': 90,
            'вода со вкусом яблока': 90,
            'бела кола': 71,
            'липтон': 75,
            'крем сода': 135,
            'лимонады': 60,
            'квас лидский хлебный': 155,
            'квас очаковский': 70,
            'фанта': 70,
            'абс соки': 145,
            'томатный сок': 349,
            'азамат компоты': 195,
            'нектар яблочно-сливочный': 250,
            'нектар морковно-яблочный': 110,
            
            // Специи
            'базилик сущенный': 35,
            'карри': 35,
            'лимонный': 35,
            'кориандр': 35,
            'укроп сушеный': 35,
            'лимонная кислота': 55,
            'чесночный': 55,
            'перец': 55,
            'перец для шашлыка': 55,
            'душистый': 55,
            'лавровый лист': 75,
            'гвоздика': 75,
            
            // Крупы и макароны
            'овсяные хлопья': 75,
            'всяные хлопья': 75,
            'овсянные хлопья второй завтрак': 85,
            'второй завтрак': 85,
            'макароны': 80,
            'гречка': 55,
            'лапша для лагмана': 145,
            'лапша для бесбармака': 145,
            
            // Мед и варенье
            'мед потапыч': 505,
            'мед разный': 370,
            'мед цветочный': 450,
            'варенье клубничное': 220,
            'варенье клюквенное': 220,
            'варенье из жимолости': 310,
            'варенье из брусникки': 310,
            'повидло яблочное': 160,
            'клубника джем': 65,
            'горошик': 135,
            'кукуруза сладкая': 130,
            
            // Морсы и кисели
            'морс ягодный спас': 145,
            'кисель': 65,
            'кисели': 120,
            
            // Лукашинские товары
            'лукашинские товары': 345,
            'лукашенские товары': 345,
            
            // Супы
            'щи': 105,
            'солянка': 150,
            'суп гороховый': 155,
            'рагу из овощей': 120,
            
            // Салаты
            'салат из капусты': 95,
            
            // Мороженое
            'мороженое 20 копеек': 80,
            'мороженное 28 копеек': 100,
            'лед лимоннй': 40,
            'лед с разными вкусами': 35,
            
            // Пельмени
            'пельмени маленькие': 605,
            'пельмени': 612,
            
            // Сыр-колбасы
            'сыр-колбасы': 879,
            
            // ГХИ
            'гхи': 495,
            
            // Сыр с плесенью
            'сыр с плесенью': 2300,
            
            // Сосиски
            'сосики': 450,
            
            // Икра
            'икра кабочковая': 115,
            
            // Фасоль
            'фасоль с грибами': 115,
            
            // Сахар
            'сахар': 69,
            
            // Кольца луковые
            'колечки луковые': 60,
            
            // Абс пюрешки
            'абс пюрешки': 88,
            
            // Пиво
            'все пиво лидскае': 95,
            'пиво лидское': 95,
            'пиво': 95,
            
            // Новые цены от Глеба
            'буратино': 60,
            'вода aqua клубника и лимон': 75,
            'вода aqua персик': 75,
            'вода aqua яблоко': 75,
            'вода darida миниральная': 75,
            'вода minsk water': 60,
            'вода с ароматом малины': 75,
            'говядина тущенная мясанат': 290,
            'горошей зеленый': 140,
            'кисель вишнеый': 120,
            'кисель разный': 120,
            'клюква с сахаром': 140,
            'компот азамат абрикос': 190,
            'компот азамат ассорти': 190,
            'компот азамат слива': 190,
            'конина в желе': 190,
            'конфеты ёжик': 182,
            'конфеты корал': 182,
            'конфеты фундучья карамель': 182,
            'конфеты шалун': 182,
            'крем сода напиток': 135,
            'лiдскае premium пиво': 110,
            'лiдскае аксамiтнае цёмнае пиво': 120,
            'лапша длинная': 80,
            'липтон лимон и зеленый': 90,
            'лукашенные маринованны овощи': 225,
            'лукашенские помидоры черри': 255,
            'морс вишня': 145,
            'морс клюквенный': 145,
            'морс лесные ягоды': 145,
            'морс облепиха': 145,
            'морс черно-смородивновый': 145,
            'пастораль': 80,
            'пастораль вермишель': 80,
            'пиво без алидскае нулевачка': 100,
            'пиво лiдскае pilsner': 110,
            'пиво майстра': 120,
            'походная говядина тушеная': 390,
            'пюре abc разное': 88,
            'рагу овощное': 120,
            'русский сахар': 65,
            'сатсабели соус': 240,
            'свинина с перловой кашей': 190,
            'сгущенное вареное молоко егорка': 155,
            'сен соу соусы острые': 70,
            'сливки с сахаром сгущенные': 155,
            'сок abc яблоко-виноград': 145,
            'сок abc яблоко-вишня': 145,
            'сок abc яблоко-персик': 145,
            'солянка из свежей капусты с грибами': 150,
            'соусы разные': 0, // Цена не указана
            'сочни для бесбармака': 80,
            'ткхемали соус': 240,
            'томаты в томатном соке': 140,
            'тушеная говядина 2': 350,
            'укроп сушенный': 55,
            'фанта оригинал': 70,
            'фирменная говядина тушеная': 390,
            'черри маринованные': 225,
            'щи из свежей купусты': 105,
            'ягодный коктейль': 145,
            
            // Еще цены от Глеба
            'аливарые светлое пиво': 110,
            'блинчики с вишенькой': 395,
            'блинчики с курицой': 677,
            'блинчики с творогом': 395,
            'блинчики с фаршем и грибами': 830,
            'десерт желейный': 227,
            'карамельные конфеты': 265,
            'кефир фрау му 3.2 процента': 126,
            'конфеты абрикос': 390,
            'конфеты березка': 390,
            'конфеты вишня': 390,
            'конфеты ириски': 390,
            'конфеты кузнечик': 390,
            'конфеты любимая аленка': 390,
            'конфеты муренка': 390,
            'конфеты с черничным пюре': 850,
            'конфеты слива волшебная': 850,
            'конфеты цветущий луг': 390,
            'куринные готовые котлеты': 488,
            'лидскае пиво премиум': 130,
            'лидскае пилснер пиво': 120,
            'мореженое melon': 40,
            'морожение 20 копеек пломбир с изюмом': 80,
            'морожение лед лимонный': 40,
            'мороженое 28 копеек шоколадное эскимо': 100,
            'мороженое банановое': 40,
            'мороженое грез': 110,
            'мороженое каштан': 80,
            'мороженое клубника с джемом': 85,
            'мороженое клубничное': 90,
            'мороженое сладкая малина': 60,
            'нектар марковный с мякотью': 110,
            'нектар яблочно-морковный': 395,
            'оладьи готовые': 395,
            'охотниченные колбаски': 110,
            'охотничине колбаски вкусные': 110,
            'пиво александрыя': 90,
            'пиво коронет': 100,
            'пиво крыница': 100,
            'пиво лидскае майстра': 110,
            'пиво майтра': 110,
            'пломбир 20 копеек': 80,
            'рожок колибри': 70,
            'сгущенное молоко скофе': 185,
            'шоколадка ананас и арбуз': 225,
            'шоколадка с соленой карамелью': 225,
            'шоколадка трюфельная': 325,
            
            // Еще цены от Глеба
            'abc горчица французская': 70,
            'abc хрен со свеклой': 115,
            'батончик комунарка': 330,
            'масло сливочное 62%': 220,
            'масло сливочное 82.5%': 250,
            'масло сливочное 82.5 процента': 245,
            'масло сливочное': 445,
            'молоко натуральное': 110,
            'намазка из мяса с томатами': 190,
            'паштет к завтраку': 220,
            'печень трески': 160,
            'сало домашнее': 325,
            'сервелат варено-копченный': 695,
            'сервелат высший сорт': 695,
            'сервелат с телятиной': 695,
            'сервелат сарбадос': 695,
            'сервелат швейцарский': 695,
            'уши свинные': 420
        };
    }
    
    findPrice(productName, originalFileName = '') {
        const normalizedName = productName.toLowerCase().trim();
        const normalizedFileName = originalFileName.toLowerCase().trim();
        
        // Ручное назначение цен для конкретных товаров по именам файлов
        const manualPrices = {
            // ABC пюре
            'abcпюреяблоко-груша.jpg': 88,
            'abcпюреяблоко.jpg': 88,
            'abcпюреяблокобанан.jpg': 88,
            'abc пюре яблоко - груша': 88,
            'abc пюре яблоко': 88,
            'abc пюре яблоко банан': 88,
            
            // ABC паста томатная
            'abcпастатоматная.jpg': 145,
            'abc паста томатная': 145,
            
            // ABC соусы
            'abcсоусаджика.jpg': 250,
            'abc соус аджика': 250,
            'abcсоуситальянский.jpg': 140,
            'abc соус итальянский': 140,
            'abcсоуссоевый.jpg': 160,
            'abc соус соевый': 160,
            'abcсоустатарский.jpg': 110,
            'abc соус татарский': 110,
            'abcсоустоматный.jpg': 140,
            'abc соус томатный': 140,
            
            // ABC сок
            'abcсокяблоко.jpg': 170,
            'abc сок яблоко': 170,
            
            // ABC хлопья
            'abcхлопьяовсянныевторойзавтрак.jpg': 85,
            'abc хлопья овсянные второй завтрак': 85,
            
            // BBQ соус
            'bbqтоматныйсоуспаприкой.jpg': 240,
            'bbq томатный соус с паприкой': 240,
            
            // Пиво
            'koronetlagerпиво.jpg': 95,
            'koronet lager пиво': 95,
            'пиво': 95,
            
            // Аджика
            'аджикаабхазия.jpg': 250,
            'аджика абхазия': 250,
            'аджикаостраяспаприкой.jpg': 250,
            'аджика острая с паприкой': 250,
            
            // Базилик
            'базиликсущенный.jpg': 35,
            'базилик сущенный': 35,
            
            // Бела-Кола
            'бела-кола.jpg': 71,
            'бела - кола': 71,
            
            // Борщ
            'борщсосвежейкапустой.jpg': 105,
            'борщ с о свежей капустой': 105,
            
            // Брикеты для супа
            'брикетыдлясупаразные.jpg': 120,
            'брикеты для супа разные': 120,
            
            // Чипсы Бульба
            'бульбачипсыкартошечкопо-деревенски.jpg': 60,
            'бульба чипсы картошечка по - деревенски': 60,
            'бульбачипсыострые.jpg': 60,
            'бульба чипсы острые': 60,
            
            // Буратино
            'буратино.jpg': 75,
            
            // Варенье
            'вареньеабрикосовое.jpg': 220,
            'варенье абрикосовое': 220,
            'вареньебрусничное.jpg': 220,
            'варенье брусничное': 220,
            'вареньевишневое.jpg': 220,
            'варенье вишневое': 220,
            'вареньеизбрусники.jpg': 310,
            'варенье из брусники': 310,
            'вареньеизжимолости.jpg': 310,
            'варенье из жимолости': 310,
            'вареньеклубничное.jpg': 220,
            'варенье клубничное': 220,
            'вареньеклюквенное.jpg': 220,
            'варенье клюквенное': 220,
            
            // Колбасы по именам файлов
            'докторская колбаса.jpg': 690,
            'колбаса банкетная.jpg': 800,
            'колбаса брезаоль.jpg': 450,
            'колбаса вкусная.jpg': 720,
            'колбаса желтая.jpg': 750,
            'колбаса итальянская.jpg': 550,
            'колбаса медовая.jpg': 480,
            'колбаса миндюк.jpg': 425,
            'колбаса моксвичка.jpg': 400,
            'колбаса мясной союз.jpg': 500,
            'колбаса пепперони.jpg': 600,
            'колбаса с примесями.jpg': 690,
            'колбаса с салом.jpg': 760,
            'колбаса сырокопченная минская.jpg': 650,
            'колбаса тисовецкая.jpg': 520,
            'колбаса юбилейная.jpg': 780,
            'колбаска с грибами.jpg': 380,
            'колбаска с кусочками жира.jpg': 420,
            'домашняя колбаска.jpg': 350,
            'ветчина вкусная домашняя.jpg': 400,
            'ветчина домашняя.jpg': 380,
            
            // Лапша и макароны (специально для ручного назначения)
            'лапша': 145,
            'макароны': 80,
            'паста': 145,
            'вермишель': 80,
            
            // Луковые кольца
            'луковые кольца': 60,
            'кольца луковые': 60,
            'колечки луковые': 60,
            
            // Лукашинские заправки
            'заправка для азу': 196,
            'заправка для гуляша': 196,
            'заправка': 196,
            'лукашинские заправки': 196,
            'лукашенские заправки': 196,
            
            // Колбасы (специальные цены)
            'докторская колбаса': 690,
            'колбаса докторская': 690,
            'желтая колбаса': 750,
            'колбаса желтая': 750,
            'банкетная колбаса': 800,
            'колбаса банкетная': 800,
            'вкусная колбаса': 720,
            'колбаса вкусная': 720,
            'колбаса с примесями': 690,
            'колбаса с салом': 760,
            'юбилейная колбаса': 780,
            'колбаса юбилейная': 780,
            
            // Остальные колбасы
            'колбаса брезаоль': 773,
            'колбаса итальянская': 326,
            'колбаса медовая': 480,
            'колбаса миндюк': 544,
            'колбаса моксвичка': 400,
            'колбаса мясной союз': 765,
            'колбаса пепперони': 325,
            'колбаса сырокопченная минская': 460,
            'колбаса тисовецкая': 366,
            'колбаска с грибами': 380,
            'колбаска с кусочками жира': 420,
            'домашняя колбаска': 350,
            'ветчина вкусная домашняя': 400,
            'ветчина домашняя': 380,
            
            // Дополнительные товары из прайса
            'морс ягодный спас': 145,
            'кисель': 65,
            'повидло яблочное': 160,
            'горошик': 135,
            'кукуруза сладкая': 130,
            'говядина по домашнему': 200,
            'свинина по домашнему': 200,
            'овсяные хлопья': 75,
            'мармелад яблочный': 227,
            'мед потапыч': 505,
            'молоко с кофе': 185,
            'сливки сгущенные': 155,
            'молоко сгущенное егорка': 155,
            'сгущенное молоко с какао': 190,
            'торт лесная поляна': 710,
            'торт мокко безе': 695,
            'торт полет': 605,
            'торт медовый': 740,
            'торт чернос': 820,
            'пироженое птички': 346,
            'пироженое корзинка': 370,
            'пироженое картошка': 215,
            'пироженое ассорти': 699,
            'красный бархат торт': 695,
            'торт сказки востока': 855,
            'азамат компоты': 195,
            'нектар яблочно-сливочный': 250,
            'томатный сок': 349,
            'квас очаковский': 70,
            'фанта': 70,
            'нектар морковно-яблочный': 110,
            'базилик карри': 35,
            'лимонный': 35,
            'кориандр': 35,
            'укроп сушеный': 35,
            'лимонная кислота': 55,
            'чесночный': 55,
            'перец для шашлыка': 55,
            'душистый': 55,
            'лавровый лист': 75,
            'гвоздика': 75,
            'блинчики домашние': 395,
            'блинчики с говядиной и луком': 830,
            'сырники': 575,
            'блинчики ветчина и сыр': 695,
            'кусок цепленка': 370,
            'блинчики жульен': 677,
            'тхемали': 240,
            'сатцебели': 240,
            'bbq': 240,
            'варенье из жимолости': 310,
            'варенье из брусникки': 310,
            'соус чили острый': 70,
            'соус чили острый с чесноком': 70,
            'мед разный': 370,
            'томаты маринованные': 140,
            'второй завтрак': 85,
            'лукашенские маринованные огурца': 225,
            'лукашенские маринованные черри': 225,
            'вода': 55,
            'паста томатная abc': 145,
            'соус томатный абс': 140,
            'щи': 105,
            'солянка': 150,
            'соус татарский абс': 110,
            'салат из капусты': 95,
            'говядина томленная': 270,
            'свинина томленная': 245,
            'свинина тушеная': 295,
            'спецзаказ говядина': 350,
            'спецзаказ свинина': 350,
            'вода со вкусом персика': 90,
            'вода со вкусом яблока': 90,
            'абс соки': 145,
            'конфеты карамель в шоколаде': 265,
            'достык': 510,
            'конфеты мятные леденцы': 315,
            'каша перловская с говядиной': 190,
            'каша гречневая с говядиной': 190,
            'свинина тушеная смачно': 195,
            'свинина тушеная первый сорт': 255,
            'говярдина тушеная гродфуд': 370,
            'свинина тушеная гродфуд': 330,
            'котлеты куриные': 488,
            'филе куриное': 375,
            'вареники': 290,
            'мороженое 20 копеек': 80,
            'мороженное 28 копеек': 100,
            'лед лимоннй': 40,
            'клубника джем': 65,
            'лед с разными вкусами': 35,
            'пельмени маленькие': 605,
            'пельмени': 612,
            'бифштекс': 550,
            'конфеты аленка': 182,
            'конфеты с вишней': 182,
            'конфеты столичные': 182,
            'белые конфеты': 140,
            'корнишончики маринованные': 195,
            'сгущенное молоко в банке': 145,
            'сгущенное молоко в упаковке': 275,
            'кетчуп острый': 85,
            'кетчуп барбекю': 85,
            'кисели': 120,
            'мед цветочный': 450,
            'конина тушеная': 295,
            'говядина свинина походные': 340,
            'плов сытный': 195,
            'говядина тушеная высший сорт': 370,
            'шоколадки комунарка': 225,
            'аджика в баночке': 250,
            'конфеты комунарка': 19,
            'конфеты дуэт': 910,
            'конфеты черника': 850,
            'конфеты клюква': 850,
            'конфеты черемуха': 390,
            'все пиво лидскае': 95,
            'икра кабочковая': 115,
            'суп гороховый': 155,
            'фасоль с грибами': 115,
            'сахар': 69,
            'гречка': 55,
            'крем сода': 135,
            'аджика': 110,
            'кефир': 126,
            'сыр галандский': 890,
            'сыр жальгирис': 170,
            'сыр манченго': 890,
            'сыр-колбасы': 879,
            'гхи': 495,
            'сыр с плесенью': 2300,
            'сосики': 450
        };
        
        // Проверяем ручное назначение по имени файла
        if (normalizedFileName && manualPrices[normalizedFileName]) {
            return manualPrices[normalizedFileName];
        }
        
        // Проверяем ручное назначение по обработанному имени
        if (manualPrices[normalizedName]) {
            return manualPrices[normalizedName];
        }
        
        // Прямое совпадение в основной базе цен
        if (this.prices[normalizedName]) {
            return this.prices[normalizedName];
        }
        
        // Поиск по частичному совпадению в основной базе
        for (const [key, price] of Object.entries(this.prices)) {
            if (normalizedName.includes(key) || key.includes(normalizedName)) {
                return price;
            }
        }
        
        // Поиск по ключевым словам
        const keywords = {
            'сыр': ['сыр'],
            'молоко': ['молоко'],
            'конфеты': ['конфеты', 'шоколадки'],
            'торт': ['торт'],
            'пироженое': ['пироженое'],
            'блинчики': ['блинчики'],
            'вареники': ['вареники'],
            'сырники': ['сырники'],
            'говядина': ['говядина'],
            'свинина': ['свинина'],
            'курица': ['курица', 'куриный'],
            'пельмени': ['пельмени'],
            'соус': ['соус', 'аджика', 'кетчуп'],
            'напитки': ['вода', 'сок', 'квас', 'лимонад'],
            'специи': ['перец', 'базилик', 'карри', 'кориандр'],
            'мед': ['мед'],
            'варенье': ['варенье', 'повидло', 'джем'],
            'мороженое': ['мороженое', 'пломбир', 'лед']
        };
        
        for (const [category, words] of Object.entries(keywords)) {
            for (const word of words) {
                if (normalizedName.includes(word)) {
                    // Ищем конкретную цену для этого типа товара
                    for (const [key, price] of Object.entries(this.prices)) {
                        if (key.includes(word)) {
                            return price;
                        }
                    }
                }
            }
        }
        
        return 0; // Цена не найдена
    }
    
    initProducts() {
        // Инициализируем пустой массив товаров
        this.products = [];
        this.filteredProducts = [];
        this.loadProductsFromImages();
    }
    
    // Функция для ручного добавления товаров с исправленными названиями
    loadManualProducts() {
        // Отключено — старые связи с конкретными фото удалены
        this.filteredProducts = [];
    }

    // Загрузка товаров из списка изображений (имя файла = название товара)
    loadProductsFromImages() {
        const imageFiles = [
            'ABCпастаТоматная.jpg',
            'ABCпюреЯблоко-Груша.jpg',
            'ABCпюреЯблоко.jpg',
            'ABCпюреЯблокоБанан.jpg',
            'ABCсокЯблоко.jpg',
            'ABCсоусАджика.jpg',
            'ABCсоусИтальянский.jpg',
            'ABCсоусСоевый.jpg',
            'ABCсоусТАТАРСКИЙ.jpg',
            'ABCСоусТоматный.jpg',
            'ABCхлопьяОвсянныеВторойЗавтрак.jpg',
            'BBQтоматныйсоусСпаприкой.jpg',
            'KORONETLAGERпиво.jpg',
            'АджикаАбхазия.jpg',
            'АджикаОстраяСпаприкой.jpg',
            'БазиликСущенный.jpg',
            'Бела-Кола.jpg',
            'борщсосвежейкапустой.jpg',
            'БрикетыДляСупаРазные.jpg',
            'БульбаЧипсыКартошечкапо-деревенски.jpg',
            'бульбаЧипсыОстрые.jpg',
            'Буратино.jpg',
            'ВареньеАбрикосовое.jpg',
            'ВареньеБрусничное.jpg',
            'ВареньеВишневое.jpg',
            'вареньеИзБрусники.jpg',
            'вареньеИзЖимолости.jpg',
            'вареньеКлубничное.jpg',
            'вареньеКлюквенное.jpg',
            'водаAQUA.jpg',
            'водаAQUAклубникаИлимон.jpg',
            'водаAQUAперсик.jpg',
            'водаAQUAяблоко.jpg',
            'водаDARIDA.jpg',
            'водаDARIDAминиральная.jpg',
            'водаMINSK WATER.jpg',
            'ВодаСАроматомМалины.jpg',
            'гвоздикаЦелая.jpg',
            'ГовядинасПерловойКашей.jpg',
            'ГовядинаТушеная.jpg',
            'говядинаТушенаяВысшийСорт.jpg',
            'ГовядинаТушенаяВысшийСорт2.jpg',
            'говядинаТущеннаяМясанат.jpg',
            'горошейЗеленый.jpg',
            'ГорошекЗеленыйВысшийСорт.jpg',
            'душистыйПерец.jpg',
            'Карри.jpg',
            'кашаГречневаяСговядиной.jpg',
            'кашаПерловаяСговядиной.jpg',
            'квасЛидский.jpg',
            'КвасОригинальный.jpg',
            'квасОчаковский.jpg',
            'кетчупБарбекю.jpg',
            'кетчупОстрый.jpg',
            'кисельВишнеый.jpg',
            'кисельРазный.jpg',
            'КислотаЛимонная.jpg',
            'клюкваСсахаром.jpg',
            'компотАзаматАбрикос.jpg',
            'компотАзаматАссорти.jpg',
            'КомпотАзаматСлива.jpg',
            'конинаВжеле.jpg',
            'конфетыДостык.jpg',
            'конфетыЁжик.jpg',
            'конфетыКомунарка.jpg',
            'конфетыКорал.jpg',
            'конфетыФундучьяКарамель.jpg',
            'конфетыШалун.jpg',
            'КориандрЦелый.jpg',
            'корнишоныМаринованные.jpg',
            'КремСодаНапиток.jpg',
            'кукурузаСахарная.jpg',
            'кукурузаСладкая.jpg',
            'ЛIДСКАЕpremiumпиво.jpg',
            'ЛIДСКАЕаксамIтнаеЦёмнаеПиво.jpg',
            'ЛапшаДлинная.jpg',
            'ЛапшаДляСупа.jpg',
            'ЛимонныйПерец.jpg',
            'ЛиптонЛимонИЗеленый.jpg',
            'лукашеннаяЗаправкаДляАЗУ.jpg',
            'лукашенскиеМаринованныОвощи.jpg',
            'лукашенскиеПомидорыЧерри.jpg',
            'ЛукашинскаяЗаправкаДляГуляша.jpg',
            'ЛукашинскиеШакшукаДляЯичныцы.jpg',
            'ЛуковыеКольца.jpg',
            'малинаСсахаром.jpg',
            'медРазный.jpg',
            'медЦветочный.jpg',
            'медЦветочныйПотапыч.jpg',
            'молокоСгущенноеСКакао.jpg',
            'морсВишня.jpg',
            'морсКлюквенный.jpg',
            'морсЛесныеЯгоды.jpg',
            'морсОблепиха.jpg',
            'морсЧерно-Смородивновый.jpg',
            'начос.jpg',
            'НектарМорковно-Яблочный.jpg',
            'нектарМорковный.jpg',
            'нектарЯблочно-сливочный.jpg',
            'овсянныеХлопья.jpg',
            'пастаТоматнаяABC.jpg',
            'пастораль.jpg',
            'ПасторальВермишель.jpg',
            'перецМолотый.jpg',
            'ПерецЧерный.jpg',
            'пивоБезАЛIдскаеНулевачка.jpg',
            'пивоЛIДСКАЕpilsner.jpg',
            'ПивоМайстра.jpg',
            'пловСытный.jpg',
            'повидлоЯблочное.jpg',
            'походнаяГовядинаТушеная.jpg',
            'ПриправаДляШашлыка.jpg',
            'пюреABCразное.jpg',
            'РагуОвощное.jpg',
            'рисКруглозерный.jpg',
            'РусскийСахар.jpg',
            'СалатБордо.jpg',
            'СалатИзкапустыСосвелой.jpg',
            'СалатПровансальИзСвежейКапусты.jpg',
            'СатсабелиСоус.jpg',
            'свининасПерловойКашей.jpg',
            'свининаТушеная.jpg',
            'СвининаТушенаяПервыйСорт.jpg',
            'СвининаТушенаяСмачная.jpg',
            'сгущенноеВареноеМолокоЕгорка.jpg',
            'СгущенноеМолоко.jpg',
            'СгущенноеМолокоСсахаром.jpg',
            'сенСоуСоусыОстрые.jpg',
            'СливкиССахаромСгущенные.jpg',
            'содаПищевая.jpg',
            'сокABCяблоко-виноград.jpg',
            'сокABCяблоко-вишня.jpg',
            'сокABCяблоко-персик.jpg',
            'СолянкаИзСвежейкапустыСгрибами.jpg',
            'соусыРазные.jpg',
            'сочниДляБесбармака.jpg',
            'ТкхемалиСоус.jpg',
            'ТоматыВТоматномСоке.jpg',
            'томленаяГовядина.jpg',
            'томленнаяСвинина.jpg',
            'тушенаяГовядина.jpg',
            'тушенаяГовядина2.jpg',
            'укропСушенный.jpg',
            'фантаОригинал.jpg',
            'фирменнаяГовядинаТушеная.jpg',
            'ЧерриМаринованные.jpg',
            'ЧесночныйПерец.jpg',
            'ЩИизСвежейКупусты.jpg',
            'ягодныйКоктейль.jpg'
        ];

        // Дополнительные фото из imgs2
        const imageFiles2 = [
            'ABC горчица французская.jpg',
            'ABC хрен со свеклой.jpg',
            'аливарые светлое пиво.jpg',
            'батончик комунарка.jpg',
            'беларуский пломбир.jpg',
            'белорусский хлеб вкусный.jpg',
            'белорусский хлеб.jpg',
            'блинчики с ветчиной и сыром.jpg',
            'блинчики с вишенькой.jpg',
            'блинчики с вишней.jpg',
            'блинчики с курицой.jpg',
            'блинчики с творогом.jpg',
            'блинчики с фаршем и грибами.jpg',
            'вареники с вишней.jpg',
            'вареники.jpg',
            'вафли Халвичные.jpg',
            'ветчина вкусная домашняя.jpg',
            'ветчина домашняя.jpg',
            'сыр Манченго.jpg',
            'говяжьи готовые котлеты.jpg',
            'горчица домашняя.jpg',
            'ГХИ топленое масло.jpg',
            'десерт желейный.jpg',
            'докторская колбаса.jpg',
            'домашнее сало.jpg',
            'домашняя колбаска.jpg',
            'зеленый чай класический.jpg',
            'зефир первый бобруйский.jpg',
            'карамельные конфеты.jpg',
            'кефир 3.2 процента.jpg',
            'кефир ФрауМу 3.2 процента.jpg',
            'колбаса банкетная.jpg',
            'колбаса Брезаоль.jpg',
            'колбаса вкусная.jpg',
            'колбаса желтая.jpg',
            'колбаса итальянская.jpg',
            'колбаса медовая.jpg',
            'колбаса миндюк.jpg',
            'колбаса моксвичка.jpg',
            'колбаса мясной союз.jpg',
            'колбаса пепперони.jpg',
            'колбаса с примесями.jpg',
            'колбаса с салом.jpg',
            'колбаса сырокопченная Минская.jpg',
            'колбаса Тисовецкая.jpg',
            'колбаса юбилейная.jpg',
            'колбаска с грибами.jpg',
            'колбаска с кусочками жира.jpg',
            'колтелы готовые.jpg',
            'конфеты абрикос.jpg',
            'конфеты белые.jpg',
            'конфеты березка.jpg',
            'конфеты вишня.jpg',
            'конфеты ириски.jpg',
            'конфеты клюква.jpg',
            'конфеты комунарка.jpg',
            'конфеты кузнечик.jpg',
            'конфеты Любимая Аленка.jpg',
            'конфеты муренка.jpg',
            'конфеты с черничным пюре.jpg',
            'конфеты слива волшебная.jpg',
            'конфеты столичные.jpg',
            'конфеты цветущий луг.jpg',
            'конфеты черника.jpg',
            'конфетыДуэт.jpg',
            'котлеты говяжьи.jpg',
            'котлеты куринные.jpg',
            'куринные готовые котлеты.jpg',
            'лидскае пиво премиум.jpg',
            'лидскае пилснер пиво.jpg',
            'мармелад апельсинка.jpg',
            'мармелад грейфрукт.jpg',
            'мармелад мандаринки.jpg',
            'масло сливочное 62 %.jpg',
            'масло сливочное 82.5 %.jpg',
            'масло сливочное 82.5 процента.jpg',
            'масло сливочное.jpg',
            'молоко 3.2 процента.jpg',
            'молоко натуральное.jpg',
            'мореженое melon.jpg',
            'морожение 20 копеек пломбир с изюмом.jpg',
            'морожение лед лимонный.jpg',
            'мороженое 28 копеек шоколадное эскимо.jpg',
            'мороженое банановое.jpg',
            'мороженое Грез.jpg',
            'мороженое каштан.jpg',
            'мороженое клубника с джемом.jpg',
            'мороженое клубничное.jpg',
            'мороженое сладкая малина.jpg',
            'мяско вкусное.jpg',
            'намазка из мяса с томатами.jpg',
            'нектар марковный с мякотью.jpg',
            'нектар яблочно-морковный.jpg',
            'оладьи готовые.jpg',
            'охотниченные колбаски.jpg',
            'охотничине колбаски вкусные.jpg',
            'паштет к завтраку.jpg',
            'пельмени маленькие.jpg',
            'пельмени.jpg',
            'печень трески.jpg',
            'пиво Александрыя.jpg',
            'пиво коронет.jpg',
            'пиво крыница.jpg',
            'пиво лидскае Майстра.jpg',
            'пиво майтра.jpg',
            'пироженное с крошкой.jpg',
            'пироженное с орехами.jpg',
            'пироженные.jpg',
            'пирожки готовые.jpg',
            'пломбир 20 копеек.jpg',
            'рожок колибри.jpg',
            'сало домашнее.jpg',
            'сало.jpg',
            'сгущенноеМолокоСкофЕ.jpg',
            'сервелат варено-копченный.jpg',
            'сервелат высший сорт.jpg',
            'сервелат с телятиной.jpg',
            'сервелат сарбадос.jpg',
            'сервелат швейцарский.jpg',
            'сливки 20%.jpg',
            'сливки премиум 10 процентов.jpg',
            'сливки сухие.jpg',
            'сливочное масло.jpg',
            'сметана 15%.jpg',
            'сметана домашняя.jpg',
            'сметана с примесями.jpg',
            'сосиски в упаковке.jpg',
            'сыр Галандский.jpg',
            'сыр вкусный.jpg',
            'сыр Жальгирись.jpg',
            'сыр коронованный.jpg',
            'сыр косичка.jpg',
            'сыр натуральный.jpg',
            'сыр с плесенью.jpg',
            'сыр-колбаски.jpg',
            'сыр Знатный.jpg',
            'сырки узнай мир.jpg',
            'торт ореховый.jpg',
            'трюфельная конфета.jpg',
            'тушка цыпленка.jpg',
            'уши свинные.jpg',
            'хинкали.jpg',
            'хлеб с зернами.jpg',
            'хлеб с сухофруктами и орехами.jpg',
            'холодец домашний.jpg',
            'хрен боярский.jpg',
            'чебуреки готовые.jpg',
            'шоколадка ананас и арбуз.jpg',
            'шоколадка с соленой карамелью.jpg',
            'шоколадка трюфельная.jpg',
            'эклеры маленькие.jpg',
            'Юкки птичка бресткая.jpg',
            'ягодный коктейль.jpg',
            'язык свиной.jpg'
        ];

        // Торты из imgs3
        const imageFiles3 = [
            'корзиночки 300.jpg',
            'пироженное ассорти 695.jpg',
            'пироженное картошка 215.jpg',
            'пироженные птички 346.jpg',
            'торт красный бархат 695.jpg',
            'торт лесная поляна 710.jpg',
            'торт медовый 740.jpg',
            'торт мокко 695.jpg',
            'торт полет 605.jpg',
            'торт сказки востока 855.jpg'
        ];

        const normalizeWhitespace = (s) => s.replace(/\s+/g, ' ').trim();
        
        // Функция для извлечения цены из названия файла
        const extractPriceFromFilename = (filename) => {
            const priceMatch = filename.match(/(\d+)(?=\s*\.jpg$)/);
            return priceMatch ? parseInt(priceMatch[1]) : 0;
        };
        
        const splitByCaseAndSymbols = (s) => {
            let name = s.replace(/\.[^.]+$/, '');
            name = name.replace(/[._]+/g, ' ');
            name = name.replace(/-/g, ' - ');
            // Вставляем пробелы между латиницей/кириллицей и сменой регистра
            name = name.replace(/([a-zа-яё])([A-ZА-ЯЁ])/g, '$1 $2');
            name = name.replace(/([A-Z])([А-ЯЁа-яё])/g, '$1 $2');
            name = name.replace(/([А-ЯЁа-яё])([A-Z])/g, '$1 $2');
            name = name.replace(/(\d)([A-Za-zА-Яа-яЁё])/g, '$1 $2');
            name = name.replace(/([A-Za-zА-Яа-яЁё])(\d)/g, '$1 $2');
            return normalizeWhitespace(name);
        };

        const beautify = (raw) => {
            let s = splitByCaseAndSymbols(raw).toLowerCase();
            // Бренды и замены
            const replacements = [
                [/\babc\b/g, 'ABC'],
                [/\bdarida\b/g, 'DARIDA'],
                [/\baqua\b/g, 'AQUA'],
                [/\bminsk\s*water\b/g, 'MINSK WATER'],
                [/\bлидск[аеё]\b/gi, 'Лидское'],
                [/\bлiдскае\b/gi, 'Лидское'],
                [/\bпастораль\b/gi, 'Пастораль'],
                [/\bлукаш(инск(ая|ие))\b/gi, 'Лукашинские'],
                [/\bкомунарка\b/gi, 'Коммунарка'],
                [/\bкрем\s*сода\b/gi, 'Крем-сода'],
                [/\bфанта\b/gi, 'Fanta'],
                [/\bлиптон\b/gi, 'Lipton'],
                [/\bпироженн(ое|ые)\b/gi, 'пирожное'],
                [/\bкуринн(ые|ый|ая)\b/gi, 'куриные'],
                [/\bсвинн(ые|ый|ая)\b/gi, 'свиные'],
                [/\bмореженое\b/gi, 'мороженое'],
                [/\bморожение\b/gi, 'мороженое'],
                [/\bмарковн(ый|ая|ое)\b/gi, 'морковный'],
                [/\bкласический\b/gi, 'классический'],
                [/\bсвинные\b/gi, 'свиные'],
                [/\bсгущенное\s*молоко\s*скофе\b/gi, 'Сгущенное молоко с кофе'],
            ];
            replacements.forEach(([re, to]) => { s = s.replace(re, to); });

            // Заглавные буквы слов, кроме служебных
            s = s.split(' ').map(w => {
                if (w === '-' || w.length === 0) return w;
                if (/^[A-Z0-9-]+$/.test(w)) return w; // уже бренд/аббревиатура
                const first = w.charAt(0).toUpperCase();
                return first + w.slice(1);
            }).join(' ');
            return s;
        };

        // Список исключений: товары, которые нужно скрыть с сайта
        const excludedNames = new Set([
            'мяско вкусное',
            'пироженное с крошкой',
            'пироженное с орехами',
            'пироженные',
            'пирожки готовые',
            'язык свиной',
            'чебуреки готовые',
            // возможные варианты написаний
            'чубереки готовые'
        ]);

        const isExcluded = (prettyName) => excludedNames.has(prettyName.toLowerCase());

        imageFiles.forEach(f => {
            const raw = f;
            const prettyName = beautify(raw);
            const category = this.detectCategory(prettyName);
            const price = this.findPrice(prettyName, raw);
            if (isExcluded(prettyName)) return;
            this.products.push({
                id: Date.now() + Math.random(),
                name: prettyName,
                category,
                price: price,
                priceText: price > 0 ? `${price} ₽` : '',
                image: `imgs/${f}`,
                description: ''
            });
        });
        // Добавляем товары из imgs2
        imageFiles2.forEach(f => {
            const raw = f;
            const prettyName = beautify(raw);
            const category = this.detectCategory(prettyName);
            const price = this.findPrice(prettyName, raw);
            if (isExcluded(prettyName)) return;
            this.products.push({
                id: Date.now() + Math.random(),
                name: prettyName,
                category,
                price: price,
                priceText: price > 0 ? `${price} ₽` : '',
                image: `imgs2/${f}`,
                description: ''
            });
        });
        
        // Добавляем торты из imgs3
        imageFiles3.forEach(f => {
            const raw = f;
            const priceFromFilename = extractPriceFromFilename(f);
            const prettyName = beautify(raw);
            const category = this.detectCategory(prettyName);
            // Для тортов приоритет у цены из названия файла
            const price = priceFromFilename > 0 ? priceFromFilename : this.findPrice(prettyName, raw);
            if (isExcluded(prettyName)) return;
            this.products.push({
                id: Date.now() + Math.random(),
                name: prettyName,
                category,
                price: price,
                priceText: price > 0 ? `${price} ₽` : '',
                image: `imgs3/${f}`,
                description: ''
            });
        });
        
        this.filteredProducts = [...this.products];
        this.resetCategoryPages();
        this.renderProducts();
    }
    
    
    bindEvents() {
        this.searchInput.addEventListener('input', debounce(() => this.filterProducts(), 300));
        this.categoryFilter.addEventListener('change', () => {
            const selected = this.categoryFilter.value;
            if (selected === 'алкоголь' && !window.__adultConfirmed) {
                const ok = confirm('Раздел содержит алкогольную продукцию. Вам есть 18 лет?');
                if (!ok) {
                    this.categoryFilter.value = '';
                    return;
                }
                window.__adultConfirmed = true;
            }
            this.filterProducts();
        });
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
            'лапша': { name: 'Лапша', icon: 'fas fa-utensils' },
            'алкоголь': { name: 'Алкоголь', icon: 'fas fa-beer' },
            'пюре': { name: 'Пюре', icon: 'fas fa-blender' },
            'соусы': { name: 'Соусы', icon: 'fas fa-bottle-droplet' },
            'специи': { name: 'Специи', icon: 'fas fa-seedling' },
            'консервы': { name: 'Консервы', icon: 'fas fa-jar' },
            'крупы': { name: 'Крупы', icon: 'fas fa-bowl-rice' },
                'молочка': { name: 'Молочка', icon: 'fas fa-cheese' },
                'мороженое': { name: 'Мороженое', icon: 'fas fa-ice-cream' },
                'субпродукты': { name: 'Субпродукты', icon: 'fas fa-drumstick-bite' },
            'сладкие напитки': { name: 'Сладкие напитки', icon: 'fas fa-bottle-water' },
            'другое': { name: 'Другое', icon: 'fas fa-box' }
        };
        
        Object.keys(groupedProducts).forEach(categoryKey => {
            const categoryInfo = categoryNames[categoryKey] || { name: categoryKey[0]?.toUpperCase() + categoryKey.slice(1), icon: 'fas fa-box' };
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
                            <div class="product-item" data-product-id="${product.id}" data-category="${product.category}">
                                <div class="product-image">
                                    <img loading="lazy" src="${product.image}" alt="${product.name}">
                                </div>
                                <h4>${product.name}</h4>
                                ${product.price > 0 ? `<div class="product-price">${product.priceText}</div>` : ''}
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
        
        // Данные для модального окна берём напрямую из DOM — ничего не обновляем
        
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
    
    // updateProductData отключена
    
    addProduct(product) {
        this.products.push(product);
        this.filterProducts();
        updateProductsCount();
    }
    
    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
        this.filterProducts();
        updateProductsCount();
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
        updateProductsCount();
    }
    
    // Функция для автоматического определения категории по названию
    detectCategory(productName) {
        const name = productName.toLowerCase();
        
        // Субпродукты - проверяем ПЕРВЫМИ, чтобы язык не попал в алкоголь
        if (name.includes('уши') || name.includes('язык') || name.includes('печень') || name.includes('сало')) {
            return 'субпродукты';
        }
        
        // Консервы - проверяем вторыми, чтобы тушенки не попали в алкоголь
        if (name.includes('консерв') || name.includes('тушен') || name.includes('тушён') || name.includes('солянк') || 
            (name.includes('овощн') && name.includes('марин')) || (name.includes('черри') && name.includes('марин')) || 
            name.includes('компот') || name.includes('варенье') || name.includes('мед') || name.includes('повидло') || name.includes('джем')) {
            return 'консервы';
        }
        
        // Напитки - проверяем ДО алкоголя, чтобы вода не попала в алкоголь
        if (name.includes('напит') || name.includes('сок') || name.includes('вода') || name.includes('чай') || name.includes('кофе') || name.includes('квас') || name.includes('морс') || name.includes('лимонад') || name.includes('нектар')) {
            return 'напитки';
        }
        
        // Алкоголь - проверяем после напитков
        if (name.includes('пиво') || name.includes('beer') || name.includes('lager') || name.includes('алког') || 
            name.includes('вино') || name.includes('водка') || name.includes('коньяк') || name.includes('шампан')) {
            return 'алкоголь';
        }
        
        // Колбасы и мясные изделия
        if (name.includes('колбаса') || name.includes('сарделька') || name.includes('сосиска') || name.includes('сервелат') || name.includes('ветчина') || name.includes('паштет') || name.includes('холодец')) {
            return 'колбасы';
        }
        
        // Мясо - но исключаем части животных как субпродукты
        if ((name.includes('мясо') || name.includes('говядина') || name.includes('свинина') || name.includes('баранина') || name.includes('куриц') || name.includes('цыплен') || name.includes('котлет') || name.includes('бифштекс')) && 
            !name.includes('уши') && !name.includes('язык') && !name.includes('печень')) {
            return 'мясо';
        }
        
        // Сыры - отдельная категория
        if (name.includes('сыр') && !name.includes('сырник')) {
            return 'сыры';
        }
        
        // Молочные продукты
        if (name.includes('творог') || name.includes('молочн') || name.includes('молоко') || name.includes('сливк') || name.includes('сгущ') || name.includes('кефир') || name.includes('сметана') || name.includes('масло сливочное') || name.includes('сырник')) {
            return 'молочка';
        }
        
        // Мороженое
        if (name.includes('морожен') || name.includes('эскимо') || name.includes('пломбир') || name.includes('рожок') || name.includes('лед')) {
            return 'мороженое';
        }
        
        // Сладости
        if (name.includes('слад') || name.includes('конфет') || name.includes('печенье') || name.includes('торт') || name.includes('пирожн') || name.includes('мармелад') || name.includes('зефир') || name.includes('шоколад') || name.includes('вафл') || name.includes('эклер')) {
            return 'сладости';
        }
        
        // Соусы и приправы
        if (name.includes('соус') || name.includes('аджик') || name.includes('кетчуп') || name.includes('ткхемали') || name.includes('тхе') || name.includes('сатсабел') || name.includes('горчиц') || name.includes('хрен')) {
            return 'соусы';
        }
        
        // Специи
        if (name.includes('перец') || name.includes('укроп') || name.includes('карри') || name.includes('кориандр') || name.includes('базилик') || name.includes('гвоздик') || name.includes('специ') || (name.includes('лимонн') && name.includes('кислот'))) {
            return 'специи';
        }
        
        // Крупы и макаронные изделия
        if (name.includes('рис') || name.includes('греч') || name.includes('овсянн') || name.includes('овсяные') || name.includes('круп') || name.includes('вермишель') || name.includes('лапш') || name.includes('макарон') || name.includes('паст')) {
            return 'крупы';
        }
        
        // Пюре
        if (name.includes('пюре')) {
            return 'пюре';
        }
        
        // Овощи
        if (name.includes('овощ') || name.includes('картофель') || name.includes('морков') || name.includes('лук') || name.includes('капуст') || name.includes('кукуруз') || name.includes('горошек') || name.includes('фасоль')) {
            return 'овощи';
        }
        
        // Хлебобулочные изделия
        if (name.includes('хлеб') || name.includes('блинчик') || name.includes('оладь') || name.includes('пирожк') || name.includes('хинкал') || name.includes('чебурек') || name.includes('пельмен') || name.includes('вареник')) {
            return 'другое';
        }
        
        return 'другое';
    }
    
    // Функция для парсинга цены из текста
    parsePrice(priceText) {
        const priceMatch = priceText.match(/(\d+)/);
        return priceMatch ? parseInt(priceMatch[1]) : 0;
    }
    
}

// Инициализируем менеджеры
let productsManager;
let blogManager;

document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем менеджер товаров только на основной странице
    if (document.getElementById('productsGrid')) {
        productsManager = new ProductsManager();
        updateProductsCount();
    }
    
    // Инициализируем менеджер блога только на странице блога
    if (document.getElementById('blog-posts')) {
        blogManager = new BlogManager();
    }
});

// Функция для обновления количества товаров в блоке "О нас"
function updateProductsCount() {
    const productsCountElement = document.getElementById('productsCount');
    if (productsCountElement && productsManager) {
        const totalProducts = productsManager.products.length;
        productsCountElement.textContent = `${totalProducts}+`;
    }
}

// Глобальные функции для работы с блогом
function addBlogPost(post) {
    if (blogManager) {
        blogManager.addPost(post);
    }
}

function updateBlogPost(postId, updatedPost) {
    if (blogManager) {
        blogManager.updatePost(postId, updatedPost);
    }
}

function openBlogPost(postId) {
    if (blogManager) {
        blogManager.openPost(postId);
    }
}

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