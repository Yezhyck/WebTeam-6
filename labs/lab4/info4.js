function pushParticipantsPhotos() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Фотографії учасників команди №6</b>";
    fill.innerHTML = '<br><img src="/labs/lab2/images/n.jpg" alt="Кошова А." style="width: 250px; height: 250px; margin: 5px;"><br>Кошова Анастасія<br><br>' +
        '<img src="/labs/lab2/images/y.jpg" alt="Глушко Ю." style="width: 250px; height: 250px; margin: 5px;"><br>Глушко Юлія<br><br>' +
        '<img src="/labs/lab2/images/s.jpg" alt="Яцук С." style="width: 250px; height: 250px; margin: 5px;"><br>Яцук Сергій';
}

function pushTopicPurposePlace() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Постановка задачі лабораторної <br> роботи № 4<br>"
    fill.innerHTML = '<br><br>придбати практичні навички роботи маніпулювання інформаційним<br> вмістом Web-документа засобами мови Javasсript, використання <br>об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavaScript'+
                      '<br><br> виконати завдання свого варіанту з таблиць №4 та №6 , реалізувати <br> та продемонструвати знання вивченого матеріалу <br> '
}

function pushURLScheme(){
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "схема URL <br>"
    fill.innerHTML = 'Схема URL (Uniform Resource Locator) - це один з основних елементів<br> Web- технології. Кожен інформаційний ресурс в Web має свій унікальний URL'+

                     '<br><br>URL вказують в атрибуті HREF контейнера A, в атрибуті SRC контейнера IMG<br>, в атрибуті ACTION контейнера FORM і т.п. Всі URL поділяються на схеми<br> доступу, які залежать від протоколу доступу до ресурсу, наприклад, для доступу до<br><br>'+ 
                     'FTP-архіву застосовується схема ftp, для доступу до Gopher-архіву - <br>схема gopher, для відправки електронної пошти - схема smtp.'+
                    ' <br><br><a href="javascript:doSomething();">Приклад тут</a><br><br>'+
                    '<br><br>Код<br><br>'+
                    '<img src="/labs/lab4/images/1.png" alt="1" ><br><br>' 

}

 function doSomething() {
                      alert("Мяяяяяуууу")
                    }


 function pushEventHandler() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Обробник подій <br>"
    fill.innerHTML ='<br><br>Обробник подій це підпрограма, яка опрацьовує матеріали,<br> отримані з програми. Обробник подій певним чином реагує на події, та починає виконувати<br><br>'+
                   'дії які згенерувала та чи інша подія. Обробники можуть по-різному<br> опрацьовувати події, все залежить від реалізації.'+
                   '<br><br> Приклад<br><br>'+
                   '<form >'+
                   '<p><input type="button" onclick="return ChangeColor(this);" class="btn_show" style="color: green;" value="Змінити колір"  ></p>'+
                  '</form>'+
                  '<br><br>Код<br><br>'+
                  '<img src="/labs/lab4/images/2.png" alt="2" ><br><br>'


 }

 function pushSubstitution(){
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Підстановка <br>"
    fill.innerHTML ='<br><br>підстановки (entity) Підтримуються тільки браузером Netscape <br> Navigator 4.0. Вони зустрічаються на Web-сторінках досить рідко. Проте це досить потужний <br>'+
                    'інструмент генерації HTML-сторінки на стороні браузера. підстановки мають<br> <br> формат: & {код_программи}; і використовуються в якості значень атрибутів HTML-контейнерів.<br>'+
                    'В разі підстановки JavaScript-інтерпретатор отримує управління в момент розбору <br> браузером (компонент парсер ) HTML-документа. Як тільки парсер зустрічає конструкцію & {..};<br><br>'+
                     'у атрибута контейнера, він передає управління JavaScript-інтерпретатора, Який, в свою <br>чергу, після виконання коду це управління повертає парсеру. Таким чином, дана операція аналогічна <br> підкачування графіки на HTML-сторінку.'+
                     '<br><br> Приклад(не працює:(()))<br><br>'+
                     '<p >${ var d = new Date(); window.status = d.getHours() +":"+'+
                     'd.getMinutes() +":"+d.getSeconds();setTimeout("time_scroll();",500);} </p>'+
                     '<br><br>Код<br><br>'+
                  '<img src="/labs/lab4/images/3.png" alt="3" ><br><br>'

                   

 }



 function ChangeColor(Element) {
	if (Element.style.color == 'green') Element.style.color = 'red';
	else Element.style.color = 'green';
	return false;
 }

function pushInsert() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<br>Вставка<br>"
    fill.innerHTML = '<br><br>Контейнер SCRIPT - це розвиток підстановок до можливості генерації <br>тексту документа JavaScript-кодом. У цьому сенсі застосування SCRIPT аналогічно Server Side <br>'+
                     'Includes, тобто Генерації сторінок документів на стороні сервера. Однак тут ми <br> <br>забігли трохи вперед. При розборі документа HTML-парсер передає управління JavaScript-інтерпретатора<br>'+
                      'після того, як зустріне тег початку контейнера SCRIPT. Інтерпретатор отримує на<br><br> виконання весь фрагмент коду всередині контейнера SCRIPT і повертає управління HTML-парсеру для обробки<br>'+
                       'тексту сторінки після тега кінця контейнера / SCRIPT.'+
                       '<br><br> Приклад<br><br>'+
                       '<img src="/labs/lab4/images/4.png" alt="4" ><br><br>'
}

function pushArrays() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>4 Пункт</b><br>МАСИВИ<br>";
    fill.innerHTML ='Приклад Сергія Яцука<br><br>'+
    ' <br><br><a href="/labs/lab4/array_sorter.html">ТИК</a><br><br>'+
    '<br><br>Код<br><br>'+
    '<img src="/labs/lab4/images/S1.png" alt="Yu1" style="width: 550px; height: 550px; margin: 5px;" ><br><br>'+
    'Приклад Юлії Глушко<br><br>'+
    ' <br><br><a href="/labs/lab4/T6.html">ТИК</a><br><br>'+
    '<br><br>Код<br><br>'+
    '<img src="/labs/lab4/images/Yu1.png" alt="Yu1" style="width: 550px; height: 550px; margin: 5px;" ><br><br>'+
    'Приклад Анастасії Кошової<br><br>'+
    ' <br><br><a href="/labs/lab4/arrays3.html">ТИК</a><br><br>'+
    '<br><br>Код<br><br>'+
    '<img src="/labs/lab4/images/A1.png" alt="Yu1" style="width: 550px; height: 550px; margin: 5px;" ><br><br>'
}

function pushExecutionOf6Points() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b> Виконанння 6 пункту</b><br>";
    fill.innerHTML = 'Приклад Анастасії Кошової<br><br>'+
    ' <br><br><a href="/labs/lab4/calculator.html">ТИК</a><br><br>'+
    '<br><br>Код<br><br>'+
    '<img src="/labs/lab4/images/A2.png" alt="Yu1" style="width: 550px; height: 550px; margin: 5px;" ><br><br>'+
    '<img src="/labs/lab4/images/A3.png" alt="Yu1"  ><br><br>'+
    'Приклад Юлії Глушко<br><br>'+
    ' <br><br><a href="/labs/lab4/calendar.html">ТИК</a><br><br>'+
    '<br><br>Код<br><br>'+
    '<img src="/labs/lab4/images/Yu2.png" alt="Yu1" style="width: 850px; height: 550px; margin: 5px;" ><br><br>'+
    'Приклад Сергія Яцука<br><br>'+
    ' <br><br><a href="/labs/lab4/tooltip.html">ТИК</a><br><br>'+
    '<br><br>Код<br><br>'+
    '<img src="/labs/lab4/images/S2.png" alt="S2" style="width: 550px; height: 550px; margin: 5px;" ><br><br>'
}

function pushConclusions(){
    
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "Висновок <br>"
    fill.innerHTML ='<br><br>На даній лабораторній роботі ми придбати практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови Javasсript, використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavaScript<br><br>'+
    'навчились застосовувати отримані навички для написання якісного коду та для виконання завдань,що були підібрані для кожного учвсника команди індивідуально,в пунктах 4 та 6. <br><br>'+
    'Знання та вміння після виконання цієї лабораторної роботи можна вважати корисним досвідом  який можде згодом бути використаний в реалізації реальних проектів з Java Script та HTML'

}

function clearExample() {
    var example;
    example = document.getElementById("example");
    if (example.value != "") example.innerHTML = "";
}
