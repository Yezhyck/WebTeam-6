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

function pushHTMLLocalTable() {
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Товари";
    fill.innerHTML = ' <br><table border="5"><caption>Товари індустрії одягу</caption><tbody><tr><th>Обкладинка</th><th>Модель</th><th>Ціна</th><th>Лінійка</th><th>Кольори</th><th>Розміри(US)</th></tr><tr><td><img src="https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/de703fcbe76647a595b0acc2015a85ce_9366/H67360_00_plp_standard.jpg"alt="" height="150px" /></td><td>Adidas Niteball</td><td>4799 грн</td><td>Originals</td><td>Червоний, Зелений, Білий</td><td>7, 7.5, 8.5</td></tr><tr><td><img src="https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/3c930598e8784957a410aa76010d8421_9366/EE6999_00_plp_standard.jpg"alt="" height="150px" /></td><td>Adidas OZWEEGO</td><td>4398 грн</td><td>Originals</td><td>Синій, Фіолетовий, Чорний</td><td>5, 6, 7, 7.5, <br>8, 8.5, 9, <br>10, 10.5, 11</td></tr><tr><td><img src="https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/5ae8c3ba13f94a98ae3ead22000382a5_9366/GZ9112_00_plp_standard.jpg"alt="" height="150px" /></td><td>Adidas Forum Low</td><td>3998 грн</td><td>Originals</td><td>Фіолетовий, Блакитний, Жовтий</td><td>5, 5.5, 6, <br>6.5, 7, 7.5, <br>8, 8.5, 9, 9.5, <br>10, 10.5, 11</td></tr></tbody></table><br>';
}