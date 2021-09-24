function pushParticipantsPhotos() {
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Фотографії учасників команди №6</b>";
    fill.innerHTML = '<img src="n.jpg" alt="Кошова А." style="width: 250px; height: 250px; margin: 5px;"> Кошова Анастасія<br>' +
        '<img src="y.jpg" alt="Глушко Ю." style="width: 250px; height: 250px; margin: 5px;"> Глушко Юлія<br>' +
        '<img src="s.jpg" alt="Яцук С." style="width: 250px; height: 250px; margin: 5px;"> Яцук Сергій';
}

function pushTopicPurposePlace() {
    invalidExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>ЛАБОРАТОРНА РОБОТА №1</b>";
    fill.innerHTML = "<br><b>Тема:</b> стркутура HTML-документа. Вибір предметної галузі. " +
        "Робота з посиланнями, таблицями, зображеннями, формами в HTML-документі.<br><br>" +
        "<b>Мета:</b> придбати практичні навички роботи з HTML-документом, таблицями, формами, зображеннями, посиланнями. " +
        "Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.";
}

function pushDescription() {
    invalidExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Короткий опис предметної області.</b>";
    fill.innerHTML = "<br>Обрана нами предметна галузь спрямована на спрощення процедури вибору певного екземпляру одягу сирійного виробництва і вдосконалення торгівельно-ринкових відносин між звичайним споживачем та виробником різновидів одягу широкого спектру використання.<br><br>" +
        "Бізнес-логіка нашого майбутнього WEB-застосунку буде запезпечувати користувачу широкий спектр функціоналу для найбільш раціонального вибору необхідної моделі або шуканого екземпляра одягу з точки зору онлайн-покупця в залежності від персональних параметрів людини.<br><br>" +
        "Головне призначення проекту - надати можливість швидко знайти найбільш оптимальний та вигідний для онлайн-покупця екземпляр одиниці одягу.<br><br>" +
        "Платформа матиме блок форми авторизації/аунтентифікації, щоб сервіс міг запам‘ятовувати дані про користувача, та, в залежності від цих даних, пропонувати користувачу нові, проте схожі на попередні, моделі одягу." +
        "<br><br>Функціонал:<br><br><il>Адміністратор:<li>Створення та видалення графічно-інформаційних блоків оголошення певної моделі одягу</li><li>Використання зворотного інформаційного зв'язку з сектором користувачів-покупців онлайн-пратформи</li><li>Авторизація та вхід в систему онлайн-платформи через обліковий запис з правами адміністратора</li><li>Калібрування особистих параметрів власної ваги і тіла</li><li>Фільтрування потоку товарів одягу</li><li>Пошук необхідних екземплярів одягу за деякими вказаними параметрами товарного фільтрування</li><li>Купівля обраного товару в онлайн-магазині брендового амбасадора або у власника товарного екземпляра</li><li>Створення та конфігурування набору одягу з попередньо-обраних товарів</li><li>Обрахунок загальної суми вартості обраного одягу</li><br><br>Користувач:<li>Авторизація та створення власного облікового запису</li><li>Калібрування особистих параметрів власної ваги і тіла</li><li>Фільтрування потоку товарів одягу</li><li>Пошук необхідних екземплярів одягу за деякими вказаними параметрами товарного фільтрування</li><li>Купівля обраного товару в онлайн-магазині брендового амбасадора або у власника товарного екземпляра</li><li>Створення та конфігурування набору одягу з попередньо-обраних товарів</li><li>Обрахунок загальної суми вартості обраного одягу</li><li>Використання зворотного інформаційного зв'язку з адміністрацією онлайн-пратформи</li></il>"

}

function pushHTMLTable() {
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Товари";
    fill.innerHTML = '<br>\<table border="5"><caption>Товари індустрії одягу</caption><tbody><tr><th>Обкладинка</th><th>Модель</th><th>Ціна</th><th>Лінійка</th><th>Кольори</th><th>Розміри(US)</th></tr><tr><td><img src="https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/de703fcbe76647a595b0acc2015a85ce_9366/H67360_00_plp_standard.jpg"alt="" height="150px" /></td><td>Adidas Niteball</td><td>4799 грн</td><td>Originals</td><td>Червоний, Зелений, Білий</td><td>7, 7.5, 8.5</td></tr><tr><td><img src="https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/3c930598e8784957a410aa76010d8421_9366/EE6999_00_plp_standard.jpg"alt="" height="150px" /></td><td>Adidas OZWEEGO</td><td>4398 грн</td><td>Originals</td><td>Синій, Фіолетовий, Чорний</td><td>5, 6, 7, 7.5, <br>8, 8.5, 9, <br>10, 10.5, 11</td></tr><tr><td><img src="https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/5ae8c3ba13f94a98ae3ead22000382a5_9366/GZ9112_00_plp_standard.jpg"alt="" height="150px" /></td><td>Adidas Forum Low</td><td>3998 грн</td><td>Originals</td><td>Фіолетовий, Блакитний, Жовтий</td><td>5, 5.5, 6, <br>6.5, 7, 7.5, <br>8, 8.5, 9, 9.5, <br>10, 10.5, 11</td></tr></tbody></table><br>' +
    "Тег <ТАВLЕ><br>" +
    "Тег <ТR><br>"+
    "Тег <ТD><br>"+
    "Тег <ТН><br>"+
    "Атрибут СОLSPAN<br>"+
    "Атрибут ROWSPAN<br>"+
    "Атрибут СЕLLPADDING<br>"+
    "• ALIGN = ВLЕЕDLEFT. Притискає вміст комірки впритул до лівого краю.<br>"+
    "• ALIGN = LEFT. Вирівнює вміст комірки по лівому краю з урахуванням відступу, заданого атрибутом СЕLLPADDING<br>"+
    "• АLIGN = СЕNTER. Має у своєму розпорядженні вміст комірки по центру<br>"+
    "• АLIGN = RIGHT. Вирівнює вміст комірки по правому краю з урахуванням відступу, заданого атрибутом СЕLLPADDING<br>"+
    "• VALIGN = ТОР вирівнює вміст комірки по її верхній межі<br>"+
    "• VALIGN = Мiddle. Центрує вміст комірки по вертикалі<br>" +
    "• VALIGN = вотт. Вирівнює вміст комірки по її нижній межі<br>";
    example.innerHTML = '<br><img src="table.png" alt="Рис. 3, HTML-таблиця(ЛР-1)" width="480px" height="530px"><br>"Рис. 3, HTML-таблиця(ЛР-1)';
}

function pushGreeting() {
    var header;
    var fill;
    var login;
    var password;
    login = document.getElementById("login");
    password = document.getElementById("password");
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Тест HTML-форми";
    fill.innerHTML = '<br>Вітаю, ви авторизувалися в систему!<br><br>Ваш логін: ' + login.value + ';<br>Ваш пароль: ' + password.value + ";";
}

function pushHTMLForm() {
    invalidExample();
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "Приклад використання HTML-форми";
    fill.innerHTML = '<br><form><input id="login" type="text" placeholder="Логін"> Ваш логін<br><input id="password" type="password" placeholder="Пароль"> Ваш пароль<br><br><button onclick="pushGreeting()" style="">Відправити форму</button></form>';
    example.innerHTML = '<br><br><img src="form.png" alt="Рис. 2, HTML-форма(ЛР-1)"><br>Рис. 2, HTML-форма(ЛР-1)';
}

function invalidExample() {
    var example;
    example = document.getElementById("example");
    if (example.value != '') { example.innerHTML = ''; }
}

function pushHTMLImage() {
    invalidExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Зображення HTML-коду</b>";
    fill.innerHTML = '<img src="code.png" alt="Рис. 1, HTML-код(ЛР-1)" style="width:800px; height:600px;"><br>Рис. 1, HTML-код(ЛР-1)';
}

function pushConclusions() {
    invalidExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Висновок</b>";
    fill.innerHTML = "<br>В ході виконання даної лабораторної роботи ми вдосконалили навички роботи з HTML-документом, а саме навчилися використовувати теги при роботі з блоками, зображеннями, посиланнями та кнопками.<br><br>Здобуті знання ми застосували на практиці при створенні шаблону звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.<br><br>Крім того, ми обрали предметну галузь для подальших лабораторних робіт та описали її у текстовому форматі."
}