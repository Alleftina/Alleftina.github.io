let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

document.getElementById("saveButton").addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let text = document.getElementById("text").value;
    let days = document.getElementById("days").value;
    let time = document.getElementById("time").value;

    item = JSON.stringify({ title, text, days, time });

    tg.MainButton.setText("Отправить данные");
    tg.MainButton.show();
});
