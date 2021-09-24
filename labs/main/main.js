function pushParticipantsPhotos() {
    var header;
    var fill;
    header = document.getElementById("head");
    fill = document.getElementById("fill");
    header.innerHTML = "<b>Фотографії учасників команди №6</b>";
    fill.innerHTML = '<img src="/labs/main/images/n.jpg" alt="Кошова А." style="width: 250px; height: 250px; margin: 5px;"> Кошова Анастасія<br>' +
        '<img src="/labs/main/images/y.jpg" alt="Глушко Ю." style="width: 250px; height: 250px; margin: 5px;"> Глушко Юлія<br>' +
        '<img src="/labs/main/images/s.jpg" alt="Яцук С." style="width: 250px; height: 250px; margin: 5px;"> Яцук Сергій';
}