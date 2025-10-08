// База данных товаров "Беларускi Буцик"
// Все товары прописаны вручную с правильными названиями и ценами
// Обновлено: учтены все изменения цен и названий

const PRODUCTS_DATA = [
    // ==================== КОЛБАСЫ ====================
    {
        image: 'imgs2/докторская колбаса.jpg',
        name: 'Колбаса Докторская',
        price: 815,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса Брезаоль.jpg',
        name: 'Колбаса Брезаоль',
        price: 2000,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса итальянская.jpg',
        name: 'Колбаса Итальянская',
        price: 1340,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса миндюк.jpg',
        name: 'Колбаса Киндюк',
        price: 1450,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса моксвичка.jpg',
        name: 'Колбаса Москвичка',
        price: 700,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса медовая.jpg',
        name: 'Колбаса Медовая',
        price: 1200,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса мясной союз.jpg',
        name: 'Колбаса Мясной Союз',
        price: 1350,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса пепперони.jpg',
        name: 'Колбаса Пепперони',
        price: 1300,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса Тисовецкая.jpg',
        name: 'Колбаса Тисовецкая',
        price: 1300,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса сырокопченная Минская.jpg',
        name: 'Колбаса Сырокопченная Минская',
        price: 980,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса вкусная.jpg',
        name: 'Мясо Полингвица',
        price: 780,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса желтая.jpg',
        name: 'Колбасный сыр Менчанка',
        price: 815,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса с примесями.jpg',
        name: 'Ливерная колбаса',
        price: 380,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса с салом.jpg',
        name: 'Крестец',
        price: 795,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса банкетная.jpg',
        name: 'Колбаса Банкетная',
        price: 800,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаса юбилейная.jpg',
        name: 'Колбаса Юбилейная',
        price: 780,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/домашняя колбаска.jpg',
        name: 'Утиная колбаска',
        price: 730,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаска с грибами.jpg',
        name: 'Зельц с грибами и корнишонами',
        price: 400,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/колбаска с кусочками жира.jpg',
        name: 'Рижская колбаса',
        price: 575,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/ветчина вкусная домашняя.jpg',
        name: 'Грудинка от батьки',
        price: 680,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/сервелат варено-копченный.jpg',
        name: 'Сервелат варено-копченый',
        price: 740,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/сервелат высший сорт.jpg',
        name: 'Сервелат высший сорт',
        price: 740,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/сервелат с телятиной.jpg',
        name: 'Сервелат с телятиной',
        price: 740,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/сервелат сарбадос.jpg',
        name: 'Сервелат Сарбадос',
        price: 740,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/сервелат швейцарский.jpg',
        name: 'Сервелат Швейцарский',
        price: 740,
        unit: 'за 1 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/охотниченные колбаски.jpg',
        name: 'Охотничьи колбаски',
        price: 110,
        unit: 'за 1 шт',
        category: 'колбасы'
    },
    {
        image: 'imgs2/охотничине колбаски вкусные.jpg',
        name: 'Охотничьи колбаски вкусные',
        price: 110,
        unit: 'за 1 шт',
        category: 'колбасы'
    },
    {
        image: 'imgs2/сосиски в упаковке.jpg',
        name: 'Сосиски в упаковке',
        price: 590,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/паштет к завтраку.jpg',
        name: 'Паштет к завтраку',
        price: 155,
        unit: 'за 1 шт',
        category: 'колбасы'
    },
    {
        image: 'imgs2/холодец домашний.jpg',
        name: 'Холодец домашний',
        price: 545,
        unit: 'за 0.5 кг',
        category: 'колбасы'
    },
    {
        image: 'imgs2/намазка из мяса с томатами.jpg',
        name: 'Намазка из мяса с томатами',
        price: 190,
        unit: 'за 1 шт',
        category: 'колбасы'
    },

    // ==================== СЫРЫ ====================
    {
        image: 'imgs2/сыр Галандский.jpg',
        name: 'Франциско',
        price: 1000,
        unit: 'за 1 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/Сыр Жальгирись.jpg',
        name: 'Сыр Жальгирись',
        price: 170,
        unit: 'за 100 г',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр натуральный.jpg',
        name: 'Примадонна Италия',
        price: 3300,
        unit: 'за 1 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр Знатный.jpg',
        name: 'Сыр Италия Ландана',
        price: 3500,
        unit: 'за 1 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр Манченго.jpg',
        name: 'Сыр Манченго',
        price: 890,
        unit: 'за 0.5 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр вкусный.jpg',
        name: 'Сыр вкусный',
        price: 890,
        unit: 'за 0.5 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр коронованный.jpg',
        name: 'Сыр коронованный',
        price: 890,
        unit: 'за 0.5 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр косичка.jpg',
        name: 'Сыр Косичка',
        price: 570,
        unit: 'за 0.5 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр с плесенью.jpg',
        name: 'Сыр с плесенью',
        price: 2300,
        unit: 'за 1 кг',
        category: 'сыры'
    },
    {
        image: 'imgs2/сыр-колбаски.jpg',
        name: 'Сыр-колбаски',
        price: 120,
        unit: 'за 1 шт',
        category: 'сыры'
    },

    // ==================== МОЛОЧКА ====================
    {
        image: 'imgs2/маслоСливочноеШДП.jpg',
        name: 'Масло сливочное 62%',
        price: 250,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/маслоСливочноеВДП.jpg',
        name: 'Масло сливочное 82.5%',
        price: 280,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/масло сливочное 82.5 процента.jpg',
        name: 'Масло сливочное 82.5%',
        price: 280,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/масло сливочное.jpg',
        name: 'Масло сливочное 82.5%',
        price: 280,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сливочное масло.jpg',
        name: 'Масло сливочное 82.5%',
        price: 250,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сметана домашняя.jpg',
        name: 'Домашнее масло',
        price: 445,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сметана15П.jpg',
        name: 'Сметана 15%',
        price: 85,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сметана с примесями.jpg',
        name: 'Масса в ассортименте (курага, изюм, чернослив) 350 г',
        price: 150,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/молоко натуральное.jpg',
        name: 'Молоко натуральное',
        price: 145,
        unit: 'за 1 л',
        category: 'молочка'
    },
    {
        image: 'imgs2/молоко 3.2 процента.jpg',
        name: 'Молоко 3.2%',
        price: 130,
        unit: 'за 1 л',
        category: 'молочка'
    },
    {
        image: 'imgs2/кефир 3.2 процента.jpg',
        name: 'Кефир 3.2%',
        price: 126,
        unit: 'за 1 л',
        category: 'молочка'
    },
    {
        image: 'imgs2/кефир ФрауМу 3.2 процента.jpg',
        name: 'Кефир ФрауМу 3.2%',
        price: 126,
        unit: 'за 1 л',
        category: 'молочка'
    },
    {
        image: 'imgs2/сгущенноеМолокоСкофЕ.jpg',
        name: 'Сгущенное молоко с кофе',
        price: 175,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сливки20П.jpg',
        name: 'Сливки 20%',
        price: 97,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сливки премиум 10 процентов.jpg',
        name: 'Сливки премиум 10%',
        price: 165,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сливки сухие.jpg',
        name: 'Сливки сухие',
        price: 122,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сырки узнай мир.jpg',
        name: 'Сырки Узнай мир',
        price: 50,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/беларуский пломбир.jpg',
        name: 'Белорусский пломбир',
        price: 90,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/ГХИ топленое масло.jpg',
        name: 'ГХИ топленое масло',
        price: 495,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сгущенноеМолокоСкофЕ.jpg',
        name: 'Молоко сгущенное с какао',
        price: 175,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сгущенноеМолокоСкофЕ.jpg',
        name: 'Сгущенное молоко с сахаром',
        price: 145,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs2/сливки премиум 10 процентов.jpg',
        name: 'Сливки с сахаром сгущенные',
        price: 145,
        unit: 'за 1 шт',
        category: 'молочка'
    },

    // ==================== КОНФЕТЫ И СЛАДОСТИ (за 0.5 кг) ====================
    {
        image: 'imgs/конфетыЁжик.jpg',
        name: 'Конфеты Ёжик',
        price: 600,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs/конфетыКорал.jpg',
        name: 'Конфеты Корал',
        price: 280,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs/конфетыФундучьяКарамель.jpg',
        name: 'Конфеты фундучья карамель',
        price: 280,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs/конфетыШалун.jpg',
        name: 'Конфеты Шалун',
        price: 280,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/карамельные конфеты.jpg',
        name: 'Карамельные конфеты',
        price: 300,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты абрикос.jpg',
        name: 'Конфеты Абрикос',
        price: 700,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты белые.jpg',
        name: 'Клюква в сахаре',
        price: 170,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты вишня.jpg',
        name: 'Конфеты Вишня',
        price: 182,
        unit: 'за 100 г',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты ириски.jpg',
        name: 'Конфеты Ириски',
        price: 165,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты комунарка.jpg',
        name: 'Конфеты Коммунарка',
        price: 960,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты кузнечик.jpg',
        name: 'Конфеты Кузнечик',
        price: 475,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты Любимая Аленка.jpg',
        name: 'Конфеты Любимая Аленка',
        price: 182,
        unit: 'за 100 г',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты с черничным пюре.jpg',
        name: 'Конфеты с черничным пюре',
        price: 425,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты столичные.jpg',
        name: 'Конфеты Столичные',
        price: 182,
        unit: 'за 100 г',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты березка.jpg',
        name: 'Конфеты Березка',
        price: 390,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты муренка.jpg',
        name: 'Конфеты Муренка',
        price: 390,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты цветущий луг.jpg',
        name: 'Конфеты Цветущий луг',
        price: 390,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты клюква.jpg',
        name: 'Конфеты Клюква',
        price: 850,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфеты черника.jpg',
        name: 'Конфеты Черника',
        price: 850,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/конфетыДуэт.jpg',
        name: 'Конфеты Дуэт',
        price: 910,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/батончик комунарка.jpg',
        name: 'Батончик Коммунарка',
        price: 330,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/шоколадка ананас и арбуз.jpg',
        name: 'Шоколадка Ананас и арбуз',
        price: 225,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/шоколадка с соленой карамелью.jpg',
        name: 'Шоколадка с соленой карамелью',
        price: 225,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/шоколадка трюфельная.jpg',
        name: 'Шоколадка трюфельная',
        price: 190,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/трюфельная конфета.jpg',
        name: 'Трюфельная конфета',
        price: 980,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/мармелад апельсинка.jpg',
        name: 'Мармелад апельсинка в натуральном соке',
        price: 390,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/мармелад грейфрукт.jpg',
        name: 'Мармелад грейпфрут',
        price: 390,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/мармелад мандаринки.jpg',
        name: 'Мармелад мандаринки',
        price: 390,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs2/зефир первый бобруйский.jpg',
        name: 'Зефир первый бобруйский',
        price: 176,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/десерт желейный.jpg',
        name: 'Десерт желейный',
        price: 227,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/вафли Халвичные.jpg',
        name: 'Вафли халвичные',
        price: 85,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs2/эклеры маленькие.jpg',
        name: 'Эклеры маленькие',
        price: 430,
        unit: 'за 1 шт',
        category: 'сладости'
    },

    // ==================== МОРОЖЕНОЕ ====================
    {
        image: 'imgs2/мореженое melon.jpg',
        name: 'Мороженое Melon',
        price: 85,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/морожение 20 копеек пломбир с изюмом.jpg',
        name: 'Мороженое 20 копеек пломбир с изюмом',
        price: 80,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/пломбир 20 копеек.jpg',
        name: 'Пломбир 20 копеек',
        price: 80,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое 28 копеек шоколадное эскимо.jpg',
        name: 'Мороженое 28 копеек шоколадное эскимо',
        price: 100,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/морожение лед лимонный.jpg',
        name: 'Лед лимонный',
        price: 40,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое банановое.jpg',
        name: 'Мороженое банановое',
        price: 40,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое Грез.jpg',
        name: 'Мороженое Грез',
        price: 110,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое каштан.jpg',
        name: 'Мороженое Каштан',
        price: 80,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое клубника с джемом.jpg',
        name: 'Мороженое клубника с джемом',
        price: 85,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое клубничное.jpg',
        name: 'Мороженое клубничное',
        price: 90,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/мороженое сладкая малина.jpg',
        name: 'Мороженое сладкая малина',
        price: 60,
        unit: 'за 1 шт',
        category: 'мороженое'
    },
    {
        image: 'imgs2/рожок колибри.jpg',
        name: 'Рожок Колибри',
        price: 70,
        unit: 'за 1 шт',
        category: 'мороженое'
    },

    // ==================== ЗАМОРОЗКА (БЛИНЧИКИ за 0.5 кг) ====================
    {
        image: 'imgs2/блинчики с ветчиной и сыром.jpg',
        name: 'Блинчики с ветчиной и сыром',
        price: 695,
        unit: 'за 1 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/блинчики с фаршем и грибами.jpg',
        name: 'Блинчики с фаршем и грибами',
        price: 688,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/блинчики с творогом.jpg',
        name: 'Блинчики с творогом',
        price: 588,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/блинчики с вишенькой.jpg',
        name: 'Блинчики с вишней',
        price: 588,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/блинчики с вишней.jpg',
        name: 'Блинчики с вишней',
        price: 588,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/блинчики с курицой.jpg',
        name: 'Блинчики с курицей',
        price: 677,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/вареники с вишней.jpg',
        name: 'Вареники с вишней',
        price: 399,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/вареники.jpg',
        name: 'Вареники',
        price: 399,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/оладьи готовые.jpg',
        name: 'Оладьи готовые',
        price: 395,
        unit: 'за 0.5 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/пельмени маленькие.jpg',
        name: 'Пельмени маленькие',
        price: 605,
        unit: 'за 1 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/пельмени.jpg',
        name: 'Пельмени',
        price: 612,
        unit: 'за 1 кг',
        category: 'другое'
    },
    {
        image: 'imgs2/хинкали.jpg',
        name: 'Хинкали',
        price: 589,
        unit: 'за 1 кг',
        category: 'другое'
    },

    // ==================== МЯСО И КОТЛЕТЫ ====================
    {
        image: 'imgs2/говяжьи готовые котлеты.jpg',
        name: 'Котлеты говяжьи готовые',
        price: 560,
        unit: 'за 0.5 кг',
        category: 'мясо'
    },
    {
        image: 'imgs2/котлеты говяжьи.jpg',
        name: 'Котлеты говяжьи',
        price: 560,
        unit: 'за 0.5 кг',
        category: 'мясо'
    },
    {
        image: 'imgs2/куринные готовые котлеты.jpg',
        name: 'Котлеты куриные готовые',
        price: 488,
        unit: 'за 0.5 кг',
        category: 'мясо'
    },
    {
        image: 'imgs2/котлеты куринные.jpg',
        name: 'Котлеты куриные',
        price: 488,
        unit: 'за 0.5 кг',
        category: 'мясо'
    },
    {
        image: 'imgs2/колтелы готовые.jpg',
        name: 'Треска',
        price: 588,
        unit: 'за 0.5 кг',
        category: 'мясо'
    },
    {
        image: 'imgs2/тушка цыпленка.jpg',
        name: 'Тушка цыпленка',
        price: 370,
        unit: 'за 1 кг',
        category: 'мясо'
    },

    // ==================== СУБПРОДУКТЫ ====================
    {
        image: 'imgs2/уши свинные.jpg',
        name: 'Уши целиковые',
        price: 580,
        unit: 'за 1 кг',
        category: 'субпродукты'
    },
    // {
    //     image: 'imgs2/домашнее сало.jpg',
    //     name: 'Домашнее сало',
    //     price: 825,
    //     unit: 'за 1 кг',
    //     category: 'субпродукты'
    // },
    {
        image: 'imgs2/сало.jpg',
        name: 'Сало',
        price: 795,
        unit: 'за 1 кг',
        category: 'субпродукты'
    },

    // ==================== КОНСЕРВЫ ====================
    {
        image: 'imgs2/печень трески.jpg',
        name: 'Печень трески',
        price: 675,
        unit: 'за 1 банку',
        category: 'консервы'
    },

    // ==================== АЛКОГОЛЬ ====================
    {
        image: 'imgs2/лидскае пиво премиум.jpg',
        name: 'Лидское пиво премиум',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/лидскае пилснер пиво.jpg',
        name: 'Лидское пилснер',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/пиво лидскае Майстра.jpg',
        name: 'Лидское Майстра',
        price: 120,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/пиво майтра.jpg',
        name: 'Пиво Майстра',
        price: 120,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/аливарые светлое пиво.jpg',
        name: 'Пиво Аліварые',
        price: 145,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/пиво Александрыя.jpg',
        name: 'Пиво Александрия',
        price: 110,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/пиво коронет.jpg',
        name: 'Пиво Коронет',
        price: 110,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/пиво крыница.jpg',
        name: 'Пиво Крыница',
        price: 110,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/лидскае пиво премиум.jpg',
        name: 'Лидское Аксамит',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/лидскае пилснер пиво.jpg',
        name: 'Коронет',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs2/пиво лидскае Майстра.jpg',
        name: 'Пиво Майестро',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },

    // ==================== НАПИТКИ ====================
    {
        image: 'imgs2/нектар яблочно-морковный.jpg',
        name: 'Нектар яблочно-морковный',
        price: 110,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs2/нектар марковный с мякотью.jpg',
        name: 'Нектар морковный с мякотью',
        price: 110,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs2/ягодный коктейль.jpg',
        name: 'Ягодный коктейль',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },

    // ==================== СОУСЫ ====================
    {
        image: 'imgs2/ABC горчица французская.jpg',
        name: 'ABC Горчица французская',
        price: 70,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs2/ABC хрен со свеклой.jpg',
        name: 'ABC Хрен со свеклой',
        price: 115,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs2/горчица домашняя.jpg',
        name: 'Горчица домашняя',
        price: 85,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs2/хрен боярский.jpg',
        name: 'Хрен боярский',
        price: 80,
        unit: 'за 1 шт',
        category: 'соусы'
    },

    // ==================== ХЛЕБ ====================
    {
        image: 'imgs2/белорусский хлеб.jpg',
        name: 'Белорусский хлеб',
        price: 110,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs2/белорусский хлеб вкусный.jpg',
        name: 'Белорусский хлеб вкусный',
        price: 110,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs2/хлеб с зернами.jpg',
        name: 'Хлеб с зернами',
        price: 123,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs2/хлеб с сухофруктами и орехами.jpg',
        name: 'Хлеб с сухофруктами и орехами',
        price: 150,
        unit: 'за 1 шт',
        category: 'другое'
    },

    // ==================== НАПИТКИ ====================
    {
        image: 'imgs2/зеленый чай класический.jpg',
        name: 'Зеленый чай классический',
        price: 135,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs2/Юкки птичка бресткая.jpg',
        name: 'Юкки Птичка Брестская',
        price: 95,
        unit: 'за 1 шт',
        category: 'мороженое'
    },

    // ==================== ТОВАРЫ ИЗ ПАПКИ imgs ====================
    // ==================== КОНСЕРВЫ И КАШИ ====================
    {
        image: 'imgs/кашаГречневаяСговядиной.jpg',
        name: 'Каша гречневая с говядиной',
        price: 196,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/кашаПерловаяСговядиной.jpg',
        name: 'Каша перловая с говядиной',
        price: 195,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ГовядинасПерловойКашей.jpg',
        name: 'Говядина с перловой кашей',
        price: 190,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/свининасПерловойКашей.jpg',
        name: 'Свинина с перловой кашей',
        price: 190,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/пловСытный.jpg',
        name: 'Плов сытный',
        price: 195,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ГовядинаТушеная.jpg',
        name: 'Говядина тушеная',
        price: 270,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/говядинаТушенаяВысшийСорт.jpg',
        name: 'Говядина тушеная высший сорт',
        price: 370,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ГовядинаТушенаяВысшийСорт2.jpg',
        name: 'Говядина тушеная высший сорт',
        price: 370,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/говядинаТущеннаяМясанат.jpg',
        name: 'Говядина тушенная Мясанат',
        price: 290,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/свининаТушеная.jpg',
        name: 'Свинина тушеная',
        price: 295,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/СвининаТушенаяСмачная.jpg',
        name: 'Свинина тушеная Смачная',
        price: 195,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/СвининаТушенаяПервыйСорт.jpg',
        name: 'Свинина тушеная первый сорт',
        price: 255,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/томленаяГовядина.jpg',
        name: 'Говядина томленная',
        price: 270,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/томленнаяСвинина.jpg',
        name: 'Свинина томленная',
        price: 245,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/тушенаяГовядина.jpg',
        name: 'Тушеная говядина',
        price: 350,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/тушенаяГовядина2.jpg',
        name: 'Тушеная говядина 2',
        price: 350,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/походнаяГовядинаТушеная.jpg',
        name: 'Походная говядина тушеная',
        price: 390,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/фирменнаяГовядинаТушеная.jpg',
        name: 'Фирменная говядина тушеная',
        price: 390,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/конинаВжеле.jpg',
        name: 'Конина в желе',
        price: 320,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/горошейЗеленый.jpg',
        name: 'Горошек зеленый',
        price: 130,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ГорошекЗеленыйВысшийСорт.jpg',
        name: 'Горошек зеленый высший сорт',
        price: 130,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/кукурузаСахарная.jpg',
        name: 'Кукуруза сахарная',
        price: 140,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/кукурузаСладкая.jpg',
        name: 'Кукуруза сладкая',
        price: 140,
        unit: 'за 1 шт',
        category: 'консервы'
    },

    // ==================== КРУПЫ И ЛАПША ====================
    {
        image: 'imgs/рисКруглозерный.jpg',
        name: 'Рис круглозерный',
        price: 93,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/ЛапшаДлинная.jpg',
        name: 'Лапша длинная',
        price: 145,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/ЛапшаДляСупа.jpg',
        name: 'Лапша для супа',
        price: 145,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/овсянныеХлопья.jpg',
        name: 'Овсяные хлопья',
        price: 75,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/ABCхлопьяОвсянныеВторойЗавтрак.jpg',
        name: 'ABC хлопья овсяные Второй завтрак',
        price: 85,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/пастораль.jpg',
        name: 'Пастораль',
        price: 80,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/ПасторальВермишель.jpg',
        name: 'Пастораль вермишель',
        price: 80,
        unit: 'за 1 шт',
        category: 'крупы'
    },
    {
        image: 'imgs/сочниДляБесбармака.jpg',
        name: 'Сочни для бесбармака',
        price: 80,
        unit: 'за 1 шт',
        category: 'крупы'
    },

    // ==================== НАПИТКИ ====================
    {
        image: 'imgs/ABCсокЯблоко.jpg',
        name: 'ABC Сок Яблоко',
        price: 40,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/сокABCяблоко-виноград.jpg',
        name: 'Сок ABC Яблоко-Виноград',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/сокABCяблоко-вишня.jpg',
        name: 'Сок ABC Яблоко-Вишня',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/сокABCяблоко-персик.jpg',
        name: 'Сок ABC Яблоко-Персик',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/НектарМорковно-Яблочный.jpg',
        name: 'Нектар морковно-яблочный',
        price: 110,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/нектарМорковный.jpg',
        name: 'Нектар морковный',
        price: 110,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/нектарЯблочно-сливочный.jpg',
        name: 'Нектар яблочно-сливочный 3л',
        price: 245,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаAQUA.jpg',
        name: 'Вода AQUA',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаAQUAклубникаИлимон.jpg',
        name: 'Вода AQUA клубника и лимон',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаAQUAперсик.jpg',
        name: 'Вода AQUA персик',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаAQUAяблоко.jpg',
        name: 'Вода AQUA яблоко',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаDARIDA.jpg',
        name: 'Вода DARIDA',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаDARIDAминиральная.jpg',
        name: 'Вода DARIDA минеральная',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/водаMINSK WATER.jpg',
        name: 'Вода MINSK WATER',
        price: 60,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/ВодаСАроматомМалины.jpg',
        name: 'Вода с ароматом малины',
        price: 75,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/Буратино.jpg',
        name: 'Буратино',
        price: 60,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/Бела-Кола.jpg',
        name: 'Бела-Кола',
        price: 71,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/фантаОригинал.jpg',
        name: 'Fanta Оригинал',
        price: 70,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/КремСодаНапиток.jpg',
        name: 'Крем-сода напиток',
        price: 135,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/ЛиптонЛимонИЗеленый.jpg',
        name: 'Lipton лимон и зеленый',
        price: 90,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/квасЛидский.jpg',
        name: 'Квас Лидский',
        price: 155,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/КвасОригинальный.jpg',
        name: 'Квас оригинальный',
        price: 155,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/квасОчаковский.jpg',
        name: 'Квас Очаковский',
        price: 70,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/морсВишня.jpg',
        name: 'Морс вишня',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/морсКлюквенный.jpg',
        name: 'Морс клюквенный',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/морсЛесныеЯгоды.jpg',
        name: 'Морс лесные ягоды',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/морсОблепиха.jpg',
        name: 'Морс облепиха',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/морсЧерно-Смородивновый.jpg',
        name: 'Морс черно-смородиновый',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/компотАзаматАбрикос.jpg',
        name: 'Компот Азамат абрикос',
        price: 190,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/компотАзаматАссорти.jpg',
        name: 'Компот Азамат ассорти',
        price: 190,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/КомпотАзаматСлива.jpg',
        name: 'Компот Азамат слива',
        price: 190,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/кисельВишнеый.jpg',
        name: 'Кисель вишневый',
        price: 65,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/кисельРазный.jpg',
        name: 'Кисель разный',
        price: 120,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/ягодныйКоктейль.jpg',
        name: 'Ягодный коктейль',
        price: 145,
        unit: 'за 1 шт',
        category: 'напитки'
    },

    // ==================== ПИВО (АЛКОГОЛЬ) ====================
    {
        image: 'imgs/ЛIДСКАЕpremiumпиво.jpg',
        name: 'Лидское пиво премиум',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs/ЛIДСКАЕаксамIтнаеЦёмнаеПиво.jpg',
        name: 'Лидское Аксамит',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs/пивоЛIДСКАЕpilsner.jpg',
        name: 'Лидское пилснер',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs/ПивоМайстра.jpg',
        name: 'Пиво Майстра',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },
    {
        image: 'imgs/пивоБезАЛIдскаеНулевачка.jpg',
        name: 'Пиво безалкогольное Лидское Нулевачка',
        price: 100,
        unit: 'за 1 шт',
        category: 'напитки'
    },
    {
        image: 'imgs/KORONETLAGERпиво.jpg',
        name: 'Коронет Lager',
        price: 115,
        unit: 'за 1 шт',
        category: 'алкоголь'
    },

    // ==================== СОУСЫ ====================
    {
        image: 'imgs/ABCсоусАджика.jpg',
        name: 'ABC Соус Аджика',
        price: 110,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ABCсоусИтальянский.jpg',
        name: 'ABC Соус Итальянский',
        price: 110,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ABCсоусСоевый.jpg',
        name: 'ABC Соус Соевый',
        price: 160,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ABCсоусТАТАРСКИЙ.jpg',
        name: 'ABC Соус татарский',
        price: 110,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ABCСоусТоматный.jpg',
        name: 'ABC Соус томатный',
        price: 140,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/BBQтоматныйсоусСпаприкой.jpg',
        name: 'BBQ томатный соус с паприкой',
        price: 240,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ТкхемалиСоус.jpg',
        name: 'Ткхемали соус',
        price: 240,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/СатсабелиСоус.jpg',
        name: 'Сатсабели соус',
        price: 240,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/соусыРазные.jpg',
        name: 'Соусы разные',
        price: 250,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/сенСоуСоусыОстрые.jpg',
        name: 'Сен Соу соусы острые',
        price: 70,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/АджикаАбхазия.jpg',
        name: 'Аджика Абхазия',
        price: 250,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/АджикаОстраяСпаприкой.jpg',
        name: 'Аджика острая с паприкой',
        price: 250,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/кетчупБарбекю.jpg',
        name: 'Кетчуп барбекю',
        price: 85,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/кетчупОстрый.jpg',
        name: 'Кетчуп острый',
        price: 85,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ABCпастаТоматная.jpg',
        name: 'ABC паста томатная',
        price: 145,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/пастаТоматнаяABC.jpg',
        name: 'Паста томатная ABC',
        price: 145,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ТоматыВТоматномСоке.jpg',
        name: 'Томаты в томатном соке',
        price: 140,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/корнишоныМаринованные.jpg',
        name: 'Корнишоны маринованные',
        price: 195,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ЧерриМаринованные.jpg',
        name: 'Черри маринованные',
        price: 225,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/лукашеннаяЗаправкаДляАЗУ.jpg',
        name: 'Лукашенная заправка для азу',
        price: 196,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/ЛукашинскаяЗаправкаДляГуляша.jpg',
        name: 'Лукашинская заправка для гуляша',
        price: 196,
        unit: 'за 1 шт',
        category: 'соусы'
    },
    {
        image: 'imgs/лукашенскиеМаринованныОвощи.jpg',
        name: 'Лукашенские маринованные овощи',
        price: 196,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/лукашенскиеПомидорыЧерри.jpg',
        name: 'Лукашенские помидоры черри',
        price: 196,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ЛукашинскиеШакшукаДляЯичныцы.jpg',
        name: 'Лукашинские шакшука для яичницы',
        price: 196,
        unit: 'за 1 шт',
        category: 'соусы'
    },

    // ==================== СПЕЦИИ ====================
    {
        image: 'imgs/БазиликСущенный.jpg',
        name: 'Базилик сушенный',
        price: 35,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/Карри.jpg',
        name: 'Карри',
        price: 35,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/КориандрЦелый.jpg',
        name: 'Кориандр целый',
        price: 35,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/укропСушенный.jpg',
        name: 'Укроп сушенный',
        price: 55,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/КислотаЛимонная.jpg',
        name: 'Кислота лимонная',
        price: 35,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/ЛимонныйПерец.jpg',
        name: 'Лимонный перец',
        price: 35,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/ЧесночныйПерец.jpg',
        name: 'Чесночный перец',
        price: 55,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/перецМолотый.jpg',
        name: 'Перец молотый',
        price: 55,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/ПерецЧерный.jpg',
        name: 'Перец черный',
        price: 55,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/душистыйПерец.jpg',
        name: 'Душистый перец',
        price: 55,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/гвоздикаЦелая.jpg',
        name: 'Гвоздика целая',
        price: 75,
        unit: 'за 1 шт',
        category: 'специи'
    },
    {
        image: 'imgs/ПриправаДляШашлыка.jpg',
        name: 'Приправа для шашлыка',
        price: 75,
        unit: 'за 1 шт',
        category: 'специи'
    },

    // ==================== РАЗНОЕ ====================
    {
        image: 'imgs/содаПищевая.jpg',
        name: 'Сода пищевая',
        price: 45,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/РусскийСахар.jpg',
        name: 'Русский сахар',
        price: 65,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/БульбаЧипсыКартошечкапо-деревенски.jpg',
        name: 'Чипсы Бульба картошечка по-деревенски',
        price: 145,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/бульбаЧипсыОстрые.jpg',
        name: 'Чипсы Бульба острые',
        price: 145,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/ЛуковыеКольца.jpg',
        name: 'Луковые кольца',
        price: 60,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/начос.jpg',
        name: 'Начос',
        price: 190,
        unit: 'за 1 шт',
        category: 'другое'
    },

    // ==================== КОНСЕРВЫ И САЛАТЫ ====================
    {
        image: 'imgs/СалатБордо.jpg',
        name: 'Салат бордо',
        price: 100,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/СалатИзкапустыСосвелой.jpg',
        name: 'Салат из капусты со свеклой',
        price: 100,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/СалатПровансальИзСвежейКапусты.jpg',
        name: 'Салат провансаль из свежей капусты',
        price: 100,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/РагуОвощное.jpg',
        name: 'Рагу овощное',
        price: 120,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/борщсосвежейкапустой.jpg',
        name: 'Борщ со свежей капустой',
        price: 105,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/ЩИизСвежейКупусты.jpg',
        name: 'Щи из свежей капусты',
        price: 105,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/СолянкаИзСвежейкапустыСгрибами.jpg',
        name: 'Солянка из свежей капусты с грибами',
        price: 150,
        unit: 'за 1 шт',
        category: 'консервы'
    },
    {
        image: 'imgs/БрикетыДляСупаРазные.jpg',
        name: 'Брикеты для супа разные',
        price: 120,
        unit: 'за 1 шт',
        category: 'консервы'
    },

    // ==================== ВАРЕНЬЕ И МЁД ====================
    {
        image: 'imgs/медЦветочныйПотапыч.jpg',
        name: 'Мед цветочный Потапыч',
        price: 505,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/медРазный.jpg',
        name: 'Мед разный',
        price: 370,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/медЦветочный.jpg',
        name: 'Мед цветочный',
        price: 450,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/ВареньеАбрикосовое.jpg',
        name: 'Варенье абрикосовое',
        price: 220,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/ВареньеБрусничное.jpg',
        name: 'Варенье брусничное',
        price: 220,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/ВареньеВишневое.jpg',
        name: 'Варенье вишневое',
        price: 220,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/вареньеИзБрусники.jpg',
        name: 'Варенье из брусники',
        price: 310,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/вареньеИзЖимолости.jpg',
        name: 'Варенье из жимолости',
        price: 310,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/вареньеКлубничное.jpg',
        name: 'Варенье клубничное',
        price: 220,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/вареньеКлюквенное.jpg',
        name: 'Варенье клюквенное',
        price: 220,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/повидлоЯблочное.jpg',
        name: 'Повидло яблочное',
        price: 160,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/клюкваСсахаром.jpg',
        name: 'Клюква с сахаром',
        price: 220,
        unit: 'за 1 шт',
        category: 'другое'
    },
    {
        image: 'imgs/малинаСсахаром.jpg',
        name: 'Малина с сахаром',
        price: 210,
        unit: 'за 1 шт',
        category: 'другое'
    },

    // ==================== ПЮРЕ И МОЛОЧКА ====================
    {
        image: 'imgs/ABCпюреЯблоко-Груша.jpg',
        name: 'ABC пюре яблоко-груша',
        price: 88,
        unit: 'за 1 шт',
        category: 'пюре'
    },
    {
        image: 'imgs/ABCпюреЯблоко.jpg',
        name: 'ABC пюре яблоко',
        price: 88,
        unit: 'за 1 шт',
        category: 'пюре'
    },
    {
        image: 'imgs/ABCпюреЯблокоБанан.jpg',
        name: 'ABC пюре яблоко-банан',
        price: 88,
        unit: 'за 1 шт',
        category: 'пюре'
    },
    {
        image: 'imgs/пюреABCразное.jpg',
        name: 'Пюре ABC разное',
        price: 88,
        unit: 'за 1 шт',
        category: 'пюре'
    },
    {
        image: 'imgs/молокоСгущенноеСКакао.jpg',
        name: 'Молоко сгущенное с какао',
        price: 175,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs/СгущенноеМолоко.jpg',
        name: 'Сгущенное молоко',
        price: 145,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs/СгущенноеМолокоСсахаром.jpg',
        name: 'Сгущенное молоко с сахаром',
        price: 145,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs/сгущенноеВареноеМолокоЕгорка.jpg',
        name: 'Сгущенное вареное молоко Егорка',
        price: 155,
        unit: 'за 1 шт',
        category: 'молочка'
    },
    {
        image: 'imgs/СливкиССахаромСгущенные.jpg',
        name: 'Сливки с сахаром сгущенные',
        price: 145,
        unit: 'за 1 шт',
        category: 'молочка'
    },

    // ==================== КОНФЕТЫ ИЗ ПАПКИ imgs ====================
    {
        image: 'imgs/конфетыЁжик.jpg',
        name: 'Конфеты Ёжик',
        price: 600,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs/конфетыКорал.jpg',
        name: 'Конфеты Корал',
        price: 280,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs/конфетыФундучьяКарамель.jpg',
        name: 'Конфеты фундучья карамель',
        price: 280,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    {
        image: 'imgs/конфетыШалун.jpg',
        name: 'Конфеты Шалун',
        price: 280,
        unit: 'за 0.5 кг',
        category: 'сладости'
    },
    // {
    //     image: 'imgs/конфетыКомунарка.jpg',
    //     name: 'Конфеты Коммунарка',
    //     price: 960,
    //     unit: 'за 0.5 кг',
    //     category: 'сладости'
    // },

    // ==================== ТОРТЫ ИЗ ПАПКИ imgs3 ====================
    {
        image: 'imgs3/корзиночки 300.jpg',
        name: 'Корзиночки',
        price: 300,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs3/пироженное ассорти 695.jpg',
        name: 'Пирожное ассорти',
        price: 695,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs3/пироженное картошка 215.jpg',
        name: 'Пирожное картошка',
        price: 215,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs3/пироженные птички 346.jpg',
        name: 'Пирожные птички',
        price: 346,
        unit: 'за 1 шт',
        category: 'сладости'
    },
    {
        image: 'imgs3/торт красный бархат 695.jpg',
        name: 'Торт Красный бархат',
        price: 695,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs3/торт лесная поляна 710.jpg',
        name: 'Торт Лесная поляна',
        price: 710,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs3/торт медовый 740.jpg',
        name: 'Торт Медовый',
        price: 740,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs3/торт мокко 695.jpg',
        name: 'Торт Мокко',
        price: 695,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs3/торт полет 605.jpg',
        name: 'Торт Полет',
        price: 605,
        unit: 'за 1 кг',
        category: 'сладости'
    },
    {
        image: 'imgs3/торт сказки востока 855.jpg',
        name: 'Торт Сказки востока',
        price: 855,
        unit: 'за 1 кг',
        category: 'сладости'
    }
];

// Экспортируем данные
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS_DATA;
}