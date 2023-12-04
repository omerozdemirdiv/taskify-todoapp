var girilen, secilen;
var eklenen, btnTamamla, btnSil, sonuc;

function listeyeEkle() {
    girilen = document.getElementById("eventsinput").value;

    if (girilen !== "") {
        eklenen = document.createElement("li");
        document.getElementById("todolist").appendChild(eklenen);
        eklenen.innerHTML = girilen;
        document.getElementById("eventsinput").value = "";

        btnTamamla = document.createElement("img");
        eklenen.appendChild(btnTamamla);
        btnTamamla.setAttribute("src", "assets/check.svg")
        btnTamamla.setAttribute("id", "btnTamamla");
        btnTamamla.addEventListener("click", tamamla);

        btnSil = document.createElement("img");
        eklenen.appendChild(btnSil);
        btnSil.setAttribute("src", "assets/trash.svg")
        btnSil.setAttribute("id", "btnSil");
        btnSil.addEventListener("click", sil);
    } else {
        alert("Please type an action!");
    }
}

function sil() {
    secilen = event.currentTarget.parentNode;
    secilen.remove();
}

function tamamla() {
    secilen = event.currentTarget.parentNode;
    secilen.remove();
    eklenen = document.createElement("li");
    document.getElementById("completedlist").appendChild(eklenen);
    secilen = event.currentTarget.parentNode;
    secilen.childNodes[1].style.display = "none";
    secilen.childNodes[2].setAttribute("onclick", "sil();");
    eklenen.innerHTML = secilen.innerHTML;
}
