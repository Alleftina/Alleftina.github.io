let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#2cab37';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Отправить");
tg.MainButton.show();

let item = "";


let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;


let titleInput = document.getElementById("title");
let textInput = document.getElementById("text");
let daysInput = document.getElementById("days");
let timeInput = document.getElementById("time");
let saveButton = document.getElementById("saveButton");


saveButton.addEventListener("click", function() {
    item = JSON.stringify({
        title: titleInput.value,
        text: textInput.value,
        days: daysInput.value,
        time: timeInput.value
    });
    tg.sendData(item);
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    item = JSON.stringify({
        title: titleInput.value,
        text: textInput.value,
        days: daysInput.value,
        time: timeInput.value
    });
    tg.sendData(item);
});
