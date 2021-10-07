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
    header.innerHTML = "<br>Тема Мета Місце<br>розташування лаби №3"
    fill.innerHTML = "<br><b>Тема:<br> БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ <br><br> Мета: </br> придбати практичні навички роботи  верстки сторінок засобами CSS,<br> верстки на основі плаваючих елементів, з’ясувати переваги та недоліки <br>типів макетів веб-сторінок <br><br>Місце розташування лаби №3 : </br> https://github.com/Yezhyck/WebTeam-6.git " 

}
function pushLayoutAppearance() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<br>Зовнішній вигляд макету №3"
    fill.innerHTML = '<br><img src="/labs/lab3/images/layout_appearance.png" style="width: 550px; height: 550px; margin: 5px;"><br>'

}

function pushCodeLayoutAppearance() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Kод зовнішнього вигляду макету №3</b>";
    fill.innerHTML = '<br>Тип макета проекту: Гумовий<br><br>Базові концепції: <ol><li>Позиціонування</li><li>Маніпулування внутрішніми та зовнішніми відступами</li></ol><br><img src="/labs/lab3/images/Code.png" alt=""><br>'
}

function pushPageLayoutWithATable() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Розмітка сторінки за допомогою таблиці</b><br>";
    fill.innerHTML = '<br><b>Теоретичний матеріал.</b><br><br>У найпростішій таблиці інформація розміщена у комірках, утворених у результаті поділу прямокутника на стовпці та рядки.<br><br>У більшості комірок зберігаються дані, деякі комірки, зазвичай розміщені у верхній або боковій частині таблиці, містять заголовки.<br><br> '+
    'Для створення таблиці використовують чотири елементи. Таблицю описують за допомогою спеціальних тегів <br> <br>Таблиця повинна мати один або кілька рядків , у кожному з яких може міститися заголовок  або дані .'+
    '<br><br>Макет 1(Юлія Глушко)<br><a href="/labs/lab3/gulialayout.html/yt.html">[Посилання на HTML-сторінку макета з таблицею]</a>'+
    '<br><img src="/labs/lab3/images/Yu.png" alt="Panda" style="width: 550px; height: 550px; margin: 5px;">' +
    '<br><br>Макет 2(Яцук Сергій)<br><a href="/labs/lab3/sergeylayout/layout10table.html">[Посилання на HTML-сторінку макета з таблицею]</a>'+
    '<br><img src="/labs/lab3/sergeylayout/s1jpg.jpg" alt="">'+
    '<br><br>Макет 3(Анастасія Кошова)<br><a href="/labs/lab3/nastialayout.html/table3.html">[Посилання на HTML-сторінку макета з таблицею]</a>'+
    '<br><img src="/labs/lab3/nastialayout.html/n1.png" alt="">';

}

function pushPageLayoutWithABlock() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Розмітка сторінки за плаваючих елементів</b><br>";
    fill.innerHTML = '<br><b>Теоретичний матеріал.</b><br><br>Елемент &lt;div&gt; є блоковим елементом і призначений для виділення фрагмента документа з метою зміни</b> виду вмісту. Як правило, вид блоку управляється за допомогою стилів. </b>Щоб не описувати кожен раз стиль всередині тега, можна виділити стиль в зовнішню таблицю стилів, а для тега додати атрибут class або id з імьям селектора.'+
    'Як і при використанні інших блочних елементів, вміст тега &lt;div&gt; завжди починається з нового рядка.</b> Після нього також додається перенесення рядка.'+
    '<br><br>Макет 1(Юлія Глушко)<br><a href="/labs/lab3/gulialayout.html/yb.html">[Посилання на HTML-сторінку макета з плаваючими елементами]</a>'+
    '<br><img src="/labs/lab3/sergeylayout/s2.jpg" alt="">' +
    '<br><br>Макет 2(Яцук Сергій)<br><a href="/labs/lab3/sergeylayout/layout10blocks.html">[Посилання на HTML-сторінку макета з плаваючими елементами]</a>'+
    '<br><img src="/labs/lab3/nastialayout.html/n2.png" alt="">'+
    '<br><br>Макет 3(Анастасія Кошова)<br><a href="/labs/lab3/nastialayout.html/floatblocks3.html">[Посилання на HTML-сторінку макета з плаваючими елементами]</a>'+
    '<br><img src="/labs/lab3/images/Yu_block.png" alt="">';
}

function pushConclusions() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Висновок</b>";
    fill.innerHTML = "<br>В ході виконання даної лабораторної роботи ми придбали практичні навички верстки сторінок засобами CSS та верстки на основі плаваючих елементів.<br><ol><li>Ми розробили макет власного сайту, застосовуючи плаваючі блоки, позиціонування та маніпуляції з внутрішніми й зовнішніми відступами.</li><br><li>Було опрацьовано теоретичний матеріал стосовно типів макетів та визначено переваги й недоліки кожного з типів(фіксованого, гумового, еластичного, адаптивного, комбінованого).</li><br><li>Крім того, кожен учасник нашої команди створив окремо свою веб-сторінку, за поданим макетом, застосовуючи розмітку за допомогою таблиці й за допомогою плаваючих блоків.</li>";
}

function clearExample() {
    var example;
    example = document.getElementById("example");
    if (example.value != "") example.innerHTML = "";
}
