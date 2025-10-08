// ========================================
// БЕЛАРУСКI БУЦИК - УПРОЩЕННАЯ ВЕРСИЯ СКРИПТА
// Все товары теперь загружаются из products-data.js
// ========================================

// ==================== НАВИГАЦИЯ ====================

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

// ==================== АНИМАЦИИ ====================

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

// ==================== SCROLL TO TOP ====================

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

// ==================== UTILITIES ====================

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

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== МОДАЛЬНОЕ ОКНО ====================

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

// Open modal when clicking on product
document.addEventListener('click', (e) => {
    const productItem = e.target.closest('.product-item');
    if (!productItem) return;

    const productNameEl = productItem.querySelector('h4');
    const productPriceEl = productItem.querySelector('.product-price');
    const productImgEl = productItem.querySelector('img');
    const productCategory = productItem.getAttribute('data-category') || '';

    // 18+ подтверждение для категории алкоголь
    if (productCategory === 'алкоголь' && !window.__adultConfirmed) {
        const ok = confirm('Раздел содержит алкогольную продукцию. Вам есть 18 лет?');
        if (!ok) return;
        window.__adultConfirmed = true;
    }

    const titleText = productNameEl ? productNameEl.textContent : '';
    const priceText = productPriceEl ? productPriceEl.textContent : '';
    const imgSrc = productImgEl ? productImgEl.getAttribute('src') : '';
    const imgAlt = productImgEl ? productImgEl.getAttribute('alt') || titleText : titleText;

    modalTitle.textContent = titleText;
    modalImage.src = imgSrc;
    modalImage.alt = imgAlt;
    
    if (modalDescription) modalDescription.textContent = '';
    if (modalPrice) modalPrice.textContent = priceText;
            
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
        showToast('Номер телефона скопирован', 'success');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('Номер телефона скопирован', 'success');
        } catch (err) {
            console.error('Failed to copy phone number:', err);
            alert('Номер телефона: ' + phoneNumber);
        }
        document.body.removeChild(textArea);
    }
});

// ==================== БЛОГ ====================

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
        this.blogPostsContainer?.addEventListener('click', (e) => {
            const postElement = e.target.closest('.blog-post');
            if (postElement) {
                const postId = parseInt(postElement.dataset.postId);
                this.openPost(postId);
            }
        });
        
        // Обработчики модального окна
        this.modalClose?.addEventListener('click', () => {
            this.closeModal();
        });
        
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal && !this.isAnimating) {
                this.closeModal();
            }
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
}

// ==================== УПРАВЛЕНИЕ ТОВАРАМИ ====================

// Упрощенный менеджер товаров
class ProductsManager {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.categoryPage = {}; // Пагинация по категориям
        this.productsPerPage = 8;
        
        this.searchInput = document.getElementById('productSearch');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.priceSort = document.getElementById('priceSort');
        this.productsGrid = document.getElementById('productsGrid');
        
        this.initProducts();
        this.bindEvents();
    }
    
    // Загрузка товаров из PRODUCTS_DATA
    initProducts() {
        if (typeof PRODUCTS_DATA !== 'undefined') {
            this.products = PRODUCTS_DATA.map((item, index) => ({
                id: index + 1,
                name: item.name,
                category: item.category,
                price: item.price,
                priceText: `${item.price} ₽ ${item.unit}`,
                image: item.image,
                description: item.description || ''
            }));
        }
        
        this.filteredProducts = [...this.products];
        this.renderProducts();
        updateProductsCount();
    }
    
    // Определение категорий
    getCategoryInfo(categoryKey) {
        const categories = {
            'колбасы': { name: 'Колбасы', icon: 'fas fa-hotdog' },
            'мясо': { name: 'Мясо', icon: 'fas fa-drumstick-bite' },
            'сыры': { name: 'Сыры', icon: 'fas fa-cheese' },
            'сладости': { name: 'Сладости', icon: 'fas fa-candy-cane' },
            'овощи': { name: 'Овощи', icon: 'fas fa-carrot' },
            'напитки': { name: 'Напитки', icon: 'fas fa-wine-bottle' },
            'лапша': { name: 'Лапша', icon: 'fas fa-utensils' },
            'алкоголь': { name: 'Алкоголь', icon: 'fas fa-beer' },
            'пюре': { name: 'Пюре', icon: 'fas fa-blender' },
            'соусы': { name: 'Соусы', icon: 'fas fa-pepper-hot' },
            'специи': { name: 'Специи', icon: 'fas fa-mortar-pestle' },
            'консервы': { name: 'Консервы', icon: 'fas fa-can-food' },
            'крупы': { name: 'Крупы', icon: 'fas fa-seedling' },
            'молочка': { name: 'Молочка', icon: 'fas fa-glass-whiskey' },
            'мороженое': { name: 'Мороженое', icon: 'fas fa-ice-cream' },
            'субпродукты': { name: 'Субпродукты', icon: 'fas fa-bacon' },
            'другое': { name: 'Другое', icon: 'fas fa-box' }
        };
        return categories[categoryKey] || { name: 'Другое', icon: 'fas fa-box' };
    }
    
    // Привязка событий
    bindEvents() {
        // Поиск
        this.searchInput.addEventListener('input', () => {
            this.filterProducts();
        });
        
        // Фильтр по категории
        this.categoryFilter.addEventListener('change', () => {
            this.filterProducts();
        });
        
        // Сортировка
        this.priceSort.addEventListener('change', () => {
            this.sortProducts();
        });
    }
    
    // Фильтрация товаров
    filterProducts() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const selectedCategory = this.categoryFilter.value;
        
        this.filteredProducts = this.products.filter(product => {
            const matchesSearch = !searchTerm || 
                product.name.toLowerCase().includes(searchTerm) ||
                product.priceText.toLowerCase().includes(searchTerm);
            
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        // Сбрасываем пагинацию и флаг анимации при фильтрации
        this.categoryPage = {};
        this._isInitialLoad = false;
        
        this.sortProducts();
    }
    
    // Сортировка товаров
    sortProducts() {
        const sortValue = this.priceSort.value;
        
        if (sortValue === 'price-asc') {
            this.filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            this.filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'name-asc') {
            this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
        } else if (sortValue === 'name-desc') {
            this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
        }
        
        this.renderProducts();
    }
    
    // Загрузка еще товаров в категории
    loadMoreCategory(categoryKey) {
        if (!this.categoryPage[categoryKey]) {
            this.categoryPage[categoryKey] = 1;
        }
        this.categoryPage[categoryKey]++;
        this.renderProducts();
    }
    
    // Рендеринг товаров
    renderProducts() {
        // Группировка по категориям
        const grouped = {};
        this.filteredProducts.forEach(product => {
            const cat = product.category || 'другое';
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(product);
        });
        
        // Рендерим HTML
        let html = '';
        Object.keys(grouped).forEach(categoryKey => {
            const categoryInfo = this.getCategoryInfo(categoryKey);
            const products = grouped[categoryKey];
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
                        ${visibleProducts.map(p => `
                            <div class="product-item" data-category="${categoryKey}">
                                <div class="product-image">
                                    <img src="${p.image}" alt="${p.name}">
                                </div>
                                <h4>${p.name}</h4>
                                <div class="product-price">${p.priceText}</div>
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
        
        // Навешиваем обработчики на кнопки "Еще"
        document.querySelectorAll('.category-load-more .load-more-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.currentTarget.getAttribute('data-category');
                this.loadMoreCategory(cat);
            });
        });
        
        // Анимация только для первой загрузки
        // При обновлении (loadMore) анимацию не запускаем
        if (!this._isInitialLoad) {
            this._isInitialLoad = true;
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
    }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

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

// ==================== УТИЛИТЫ ====================

// Функция для обновления количества товаров в блоке "О нас"
function updateProductsCount() {
    const productsCountElement = document.getElementById('productsCount');
    if (productsCountElement && productsManager) {
        const totalProducts = productsManager.products.length;
        productsCountElement.textContent = `${totalProducts}+`;
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

// Глобальные функции для работы с блогом
function openBlogPost(postId) {
    if (blogManager) {
        blogManager.openPost(postId);
    }
}
