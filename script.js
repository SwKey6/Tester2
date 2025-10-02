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
            'вкусный сыр.jpg',
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
            'сыр в красной оболочке.jpg',
            'сыр вкусный.jpg',
            'сыр домашний вкусный.jpg',
            'сыр коронованный.jpg',
            'сыр косичка.jpg',
            'сыр натуральный.jpg',
            'сыр с плесенью.jpg',
            'сыр-колбаски.jpg',
            'сыр.jpg',
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

        const normalizeWhitespace = (s) => s.replace(/\s+/g, ' ').trim();
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

        imageFiles.forEach(f => {
            const raw = f;
            const prettyName = beautify(raw);
            const category = this.detectCategory(prettyName);
            this.products.push({
                id: Date.now() + Math.random(),
                name: prettyName,
                category,
                price: 0,
                priceText: '',
                image: `imgs/${f}`,
                description: ''
            });
        });
        // Добавляем товары из imgs2
        imageFiles2.forEach(f => {
            const raw = f;
            const prettyName = beautify(raw);
            const category = this.detectCategory(prettyName);
            this.products.push({
                id: Date.now() + Math.random(),
                name: prettyName,
                category,
                price: 0,
                priceText: '',
                image: `imgs2/${f}`,
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
        if (name.includes('напит') || name.includes('сок') || name.includes('вода') || name.includes('чай') || name.includes('кофе') || name.includes('квас') || name.includes('морс') || name.includes('лимонад')) {
            return 'напитки';
        }
        if (name.includes('лапш') || name.includes('макарон') || name.includes('паст')) {
            return 'лапша';
        }
        if (name.includes('пиво') || name.includes('beer') || name.includes('lager') || name.includes('алког') || name.includes('вин') || name.includes('водк') || name.includes('коньяк') || name.includes('шампан')) {
            return 'алкоголь';
        }
        if (name.includes('пюре')) {
            return 'пюре';
        }
        if (name.includes('морожен') || name.includes('эскимо') || name.includes('пломбир') || name.includes('рожок')) {
            return 'мороженое';
        }
        if (name.includes('соус') || name.includes('аджик') || name.includes('кетчуп') || name.includes('ткхемали') || name.includes('тхе') || name.includes('сатсабел')) {
            return 'соусы';
        }
        if (name.includes('перец') || name.includes('укроп') || name.includes('карри') || name.includes('кориандр') || name.includes('базилик') || name.includes('гвоздик') || name.includes('специ') || name.includes('лимонн') && name.includes('кислот')) {
            return 'специи';
        }
        if (name.includes('консерв') || name.includes('тушен') || name.includes('тушён') || name.includes('солянк') || name.includes('овощн') && name.includes('марин') || name.includes('черри') && name.includes('марин')) {
            return 'консервы';
        }
        if (name.includes('рис') || name.includes('греч') || name.includes('овсянн') || name.includes('овсяные') || name.includes('круп') || name.includes('вермишель')) {
            return 'крупы';
        }
        if (name.includes('молоко') || name.includes('сливк') || name.includes('сгущ')) {
            return 'молочка';
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
    updateProductsCount();
});

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