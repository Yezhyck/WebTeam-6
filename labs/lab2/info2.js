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

function pushTopicDescription() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Постанова задачі<br> лабораторної роботи №2</b>";
    fill.innerHTML = "<br><b>Тема:</b> каскадні таблиці стилів. Селектори. Ідентифікатори. Стильове оформлення текстових елементів В HTML-документах.<br><br><b>Мета:<b> придбати практичні навички роботи з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.";
}

function pushDescription() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Короткий опис предметної області</b>";
    fill.innerHTML = "<br>Обрана нами предметна галузь спрямована на спрощення процедури вибору певного екземпляру одягу сирійного виробництва і вдосконалення торгівельно-ринкових відносин між звичайним споживачем та виробником різновидів одягу широкого спектру використання.<br><br>" +
        "Бізнес-логіка нашого майбутнього WEB-застосунку буде запезпечувати користувачу широкий спектр функціоналу для найбільш раціонального вибору необхідної моделі або шуканого екземпляра одягу з точки зору онлайн-покупця в залежності від персональних параметрів людини.<br><br>" +
        "Головне призначення проекту - надати можливість швидко знайти найбільш оптимальний та вигідний для онлайн-покупця екземпляр одиниці одягу.<br><br>" +
        "Платформа матиме блок форми авторизації/аунтентифікації, щоб сервіс міг запам‘ятовувати дані про користувача, та, в залежності від цих даних, пропонувати користувачу нові, проте схожі на попередні, моделі одягу." +
        "<br><br>Функціонал:<br><br><il>Адміністратор:<li>Створення та видалення графічно-інформаційних блоків оголошення певної моделі одягу</li><li>Використання зворотного інформаційного зв'язку з сектором користувачів-покупців онлайн-пратформи</li><li>Авторизація та вхід в систему онлайн-платформи через обліковий запис з правами адміністратора</li><li>Калібрування особистих параметрів власної ваги і тіла</li><li>Фільтрування потоку товарів одягу</li><li>Пошук необхідних екземплярів одягу за деякими вказаними параметрами товарного фільтрування</li><li>Купівля обраного товару в онлайн-магазині брендового амбасадора або у власника товарного екземпляра</li><li>Створення та конфігурування набору одягу з попередньо-обраних товарів</li><li>Обрахунок загальної суми вартості обраного одягу</li><br><br>Користувач:<li>Авторизація та створення власного облікового запису</li><li>Калібрування особистих параметрів власної ваги і тіла</li><li>Фільтрування потоку товарів одягу</li><li>Пошук необхідних екземплярів одягу за деякими вказаними параметрами товарного фільтрування</li><li>Купівля обраного товару в онлайн-магазині брендового амбасадора або у власника товарного екземпляра</li><li>Створення та конфігурування набору одягу з попередньо-обраних товарів</li><li>Обрахунок загальної суми вартості обраного одягу</li><li>Використання зворотного інформаційного зв'язку з адміністрацією онлайн-пратформи</li></il>"

}

function pushSelectors() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Селектори тегу та класу</b><br>";
    fill.innerHTML = '<br><b>Теоретичний матеріал.</b><br><br><div>Селектори за типом елемента.<br><ol><li>Цей базовий селектор вибирає тип елементів, до якої застосовуватиметься правило.</li><li>Синтаксис: <em> елемент </em></li><li>Приклад: селектор input вибере всі елементи &lt;input&gt;.</li></div><div>Селектори по класу<br></ol><ol><li>Цей базовий селектор вибирає елементи, грунтуючись на значенні їх атрибута class.</li><li>Синтаксис: <em>.імяКласса </em></li><li>Приклад: селектор .index вибере всі елементи з відповідним класом (який був визначений в атрибуті class= "index").</li></ol></div>';
    example.innerHTML = '<br><b>Приклади.</b><br><br><img src="/labs/lab2/images/classes.png" alt=""><br>Рис. 5, назви класів(ЛР-2).<br><br><img src="/labs/lab2/images/sel1.png" alt=""><br>Рис. 6, селектор класу "btn_show"(ЛР-2).<br><br><img src="/labs/lab2/images/sel2.png" alt=""><br>Рис. 7, cелектор класу "btn_show_small"(ЛР-2).<br><br><img src="/labs/lab2/images/sel3.png" alt=""><br>Рис. 8, cелектори класів "dropdown" та "dropdown-content"(ЛР-2).<br><br><img src="/labs/lab2/images/hf.png" alt=""><br>Рис. 9, класи "head" та "fill"(ЛР-2).<br><br><img src="/labs/lab2/images/hf_s.png" alt=""><br>Рис. 10, cелектор1 = тег &lt;div&gt; + клас "head"<br>cелектор2 = тег &lt;div&gt; + клас "fill"(ЛР-2).<br><br><img src="/labs/lab2/images/a_tag.png" alt=""><br>Рис. 11, &lt;a&gt; теги(ЛР-2).<br><br><img src="/labs/lab2/images/a_sel.png" alt=""><br>Рис. 12, селетрор тегу &lt;a&gt;(ЛР-2).';
}

function pushOtherSelectors() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Інші селектори</b><br>";
    fill.innerHTML = "<br><b>Теоретичний матеріал.</b><br><br>Селектори за ідентифікатором.<br><br>Цей базовий селектор вибирає елементи, грунтуючись на значенні їх id атрибута. Не забувайте, що ідентифікатор повинен бути унікальним, т. Е. Використовуватися тільки для одного елемента в HTML-документі.<br>Синтаксис: # імяІдентіфікатора<br>Приклад: селектор #toc вибере елемент з ідентифікатором toc (який був визначений в атрибуті id = 'toc').<br><br>Селектори по атрибуту.<br><br>Цей селектор вибирає всі елементи, що мають даний атрибут або атрибут з певним значенням.<br>Синтаксис: [attr] [attr = value] [attr ~ = value] [attr | = value] [attr ^ = value] [attr $ = value] [attr * = value] .<br>Приклад: селектор [autoplay] вибере всі елементи, які мають атрибут autoplay (незалежно від його значення).<br>Ще приклад: a [href $ = '.Jpg'] вибере всі посилання, у яких адреса закінчується на '.jpg'.<br>Ще приклад: a [href ^ = 'https'] вибере всі посилання, у яких адреса починається на 'https'.<br><br>Дочірні селектори.<br><br>Комбінатор '>' на відміну від пропуску вибирає тільки ті елементи, які є дочірніми безпосередньо по відношенню до зазначеного елементу.<br>Синтаксис: A>B.<br>Приклад: селектор ul > li вибере тільки дочірні елементи &lt;li&gt;, які знаходяться всередині, на першому рівні вкладеності по відношенню до елементу &lt;ul&gt;.<br><br>Комбінатор наступного сусіднього елемента.<br><br>Комбінатор '+' вибирає елемент, який знаходиться безпосередньо після зазначеного елемента, якщо у них загальний батько.<br>Синтаксис: A + B.<br>Приклад: селектор ul + li вибере будь &lt;li&gt; елемент, який знаходиться безпосередньо після елемента &lt;ul&gt;.<br>";
    example.innerHTML = '<br><b>Приклади.</b><br><br><img src="/labs/lab2/images/hfe.png" alt=""><br>Рис. 13, ідентифікатори "head", "fill" та "example"(ЛР-2).<br><br><img src="/labs/lab2/images/hfes.png" alt=""><br>Рис. 14, селектор ідентифікатора(ЛР-2).<br><br><img src="/labs/lab2/images/hfes1.png" alt=""><br>Рис. 15, теги &lt;div&gt; та (ідентифікатори "head", "fill" та "example")(ЛР-2).<br><br><img src="/labs/lab2/images/dhfes.png" alt=""><br>Рис. 16, селектор1 = тег &lt;div&gt; + ідентифікатор "head"<br>селектор2 = тег &lt;div&gt; + ідентифікатор "fill"<br>селектор3 = тег &lt;div&gt; + ідентифікатор "example"<br>(ЛР-2).<br><br><img src="/labs/lab2/images/fb.png" alt=""><br>Рис. 17, тег &lt;form&gt; та &lt;button&gt;(ЛР-2).<br><br><img src="/labs/lab2/images/fb_s.png" alt=""><br>Рис. 18, контекстний селектор = тег &lt;form&gt; + &lt;button&gt;(ЛР-2).<br><br><img src="/labs/lab2/images/bdda.png" alt=""><br>Рис. 19, теги &lt;body&gt;, &lt;div&gt;, &lt;div&gt; та &lt;a&gt;(ЛР-2).<br><br><img src="/labs/lab2/images/arr.png" alt=""><br>Рис. 20, дочірні селектори(ЛР-2).<br><br><img src="/labs/lab2/images/p.png" alt=""><br>Рис. 21, клас "btn_show" та сусідній тег &lt;div&gt;(ЛР-2).<br><br><img src="/labs/lab2/images/ps.png" alt=""><br>Рис. 22, комбінаційний селектор клас "btn_show" + сусідній тег &lt;div&gt;(ЛР-2).<br>';
}

function pushGroupSelectors() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Групування селекторів</b><br>";
    fill.innerHTML = "<br><b>Теоретичний матеріал.</b><br><br>Комбінатор нащадків.<br><br>Комбінатор ' ' (пропуск) вибирає елементи, які знаходяться всередині зазначеного елемента (незалежно від рівня вкладеності).<br>Синтаксис: A B.<br>Приклад: селектор div span вибере всі елементи &lt;span&gt;, які знаходяться всередині елемента &lt;div&gt;.<br>";
    example.innerHTML = '<br><b>Приклади.</b><br><br><img src="/labs/lab2/images/bdda.png" alt=""><br>Рис. 23, теги &lt;body&gt;, &lt;div&gt;, &lt;div&gt; та &lt;a&gt;(ЛР-2).<br></br><br><img src="/labs/lab2/images/bddas.png" alt=""><br>Рис. 24, ланйцюжковий селектор з тегів &lt;body&gt;, &lt;div&gt;, &lt;div&gt; та &lt;a&gt(ЛР-2).</br>';
}

function pushIden() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Ідентифікатори</b><br>";
    fill.innerHTML = "<br><b>Теоретичний матеріал.</b><br><br>Ідентифікатор (званий також «ID селектор») визначає унікальне ім'я елемента, яке використовується для зміни його стилю і звернення до нього через скрипти.<br><br>Синтаксис застосування ідентифікатора наступний.<br> #Ім'я ідентифікатора {властивысть1: значення; властивість2: значення; ...}<br><br> При описі ідентифікатора спочатку вказується символ решітки (#), потім йде ім'я ідентифікатора. Воно повинно починатися з латинської символу і може містити в собі символ дефіса (-) і підкреслення (_). Використання кириличних символів в іменах ідентифікатора неприпустимо. На відміну від класів ідентифікатори повинні бути унікальні, іншими словами, зустрічатися в коді документа лише один раз.<br><br> Звернення до ідентифікатора відбувається аналогічно класам, але в якості ключового слова у тега використовується атрибут id, значенням якого виступає ім'я ідентифікатора. Символ решітки при цьому вже не вказується.";
    example.innerHTML = '<br><br><b>Приклади.</b><br><br><img src="/labs/lab2/images/iden.png" alt=""><br>Рис. 1, ідентифікатори(ЛР-2).<br><br><img src="/labs/lab2/images/idens.png" alt=""><br>Рис. 2, звернення до ідентивікаторів, що виділені маркерами, в CSS-файлі(ЛР-2).<br>';
}

function pushIndentation() {
    var header;
    var fill;
    var example;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    example = document.getElementById("example");
    header.innerHTML = "<b>Внутрішній і зовнішній відступ</b><br>";
    fill.innerHTML = "<br><b>Теоретичний матеріал.</b><br><br>Внутрішній відступ - порожній простір між вмістом елемента і його рамкою (якщо вона встановлена). Для додавання і управління шириною внутрішніх відступів з усіх чотирьох сторін елемента використовується властивість padding.<br><br>Зовнішній відступ - порожній простір, що відділяє елемент від інших елементів або країв вікна браузера. Для додавання і управління шириною зовнішніх відступів з усіх чотирьох сторін елемента використовується властивість margin.";
    example.innerHTML = '<br><br><b>Приклади.</b><br><br><img src="/labs/lab2/images/ent.png" alt=""><br>Рис. 3, CSS-стилі внутрішніх та зовнішніх відступів "padding", "marging-top", "marging-left", "marging-right" відповідно(ЛР-2).';
}

function pushFloatElements() {
    clearExample();
    var header;
    var fill;
    var float_element;
    float_element = '<div id="float_element" class="float_element"><b>Приклад.</b><br><br><img src="/labs/lab2/images/8.png" alt=""><br>Рис. 4, плаваючий елемент<br> у вигляді картинки, <br>яку "обтікає" текст(ЛР-2).<br></div>';
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Плаваючі елементи</b><br>";
    fill.innerHTML = "<br><b>Теоретичний матеріал.</b><br><br>Плаваючими будемо називати такі елементи, які обтікають по контуру іншими об'єктами веб-сторінки, так і з текстом. Слід розуміти, що ніхто і ніде не плаває, тому правильніше говорити «обтікаючі елементи», але з іншого боку термін «плаваючий елемент» давно вже прижився, так що його і будемо використовувати надалі." +
        float_element + "<br><br>Плаваючі елементи досить активно застосовуються при верстці і в основному служать для втілення таких завдань.<ol><li>Обтікання картинок текстом.</li><li>Створення врізок.</li><li>Розташування шарів по горизонталі (додавання колонок).</li></ol>Все це виконує одне стильове властивість float, а допомагають йому в цьому інші властивості. Хоча спочатку float не планувався на настільки універсальну роль, але життєві реалії розставили все по своїх місцях.";
}

function pushConclusions() {
    clearExample();
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Висновок</b>";
    fill.innerHTML = "<br>Після виконання лабораторної роботи №2 студенти нашої команди придбати практичні навички роботи з:<br><ol><li>Селекторами;</li><li>Ідентифікаторами;</li><li>Списками;</li><li>Різноманітними властивостями кольору і фону;</li><li>Зовнішними та внутрішними відступами;</li><li>Плаваючими елементами;</li><li>Оформленням текстових елементів.</li></ol>";
}

function clearExample() {
    var example;
    example = document.getElementById("example");
    if (example.value != "") example.innerHTML = "";
}