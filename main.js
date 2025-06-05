function showContent(section) {
    const content = {
        home: "Цей проєкт реалізує простий функціонал інтернет-магазину. Користувач може додавати товари з зазначенням назви, ціни та зображення, а також переглядати список доданих продуктів у вкладці “Корзина”. Сума товарів автоматично підраховується на основі обраних позицій. Усі дані зберігаються у localStorage, що дозволяє зберегти інформацію навіть після перезавантаження сторінки. Хоча на поточному етапі проєкт не підтримує підрахунок кількості однакових товарів (кожен продукт враховується лише один раз), основна логіка додавання, збереження та виведення працює стабільно.",
        screensE: "<img class='img_right' src='imgs/mainpageIMG.png'><br> <img class='img_right' src='imgs/resultIMG.png'>",
        linksForThings: "<a href='https://danylator.github.io/JsWebMini/'>GitHub Project Live</a><br><a href='https://github.com/Danylator/JsWebMini'>GitHub Project</a><br><a href='https://onedrive.live.com/personal/41e6d05dd9096a14/_layouts/15/Doc.aspx?resid=41E6D05DD9096A14!s7e037a3d2c9345bc816d43cb8d877504&app=Word&nd=1'>Word doc</a>",
        finisher: "<p>У ході виконання цієї лабораторної роботи я повторив основи роботи з HTML, CSS та JavaScript. Зокрема, я поглибив розуміння роботи з DOM, подіями, масивами об'єктів, та механізмом збереження даних у localStorage. Проєкт навчив мене організовувати структуру сторінки, використовувати гнучкий макет Flexbox і реалізовувати взаємодію між елементами інтерфейсу. Незважаючи на деякі складнощі з підрахунком кількості однакових товарів, загальний функціонал було успішно реалізовано.</p>"
    };

    document.getElementById("contentArea").innerHTML = content[section] || "<p>Нічого не знайдено.</p>";
}