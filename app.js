let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
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

function checkForm() {
    saveButton.style.display = "block";

    if (titleInput.value && textInput.value && daysInput.value && timeInput.value) {
        tg.MainButton.setText("Отправить данные");
        item = JSON.stringify({
            title: titleInput.value,
            text: textInput.value,
            days: daysInput.value,
            time: timeInput.value
        });
    } else {
        saveButton.style.display = "none";
        tg.MainButton.hide();
    }
}


saveButton.addEventListener("click", function() {
    tg.sendData(item);
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
