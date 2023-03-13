var modal = document.getElementById("myModal") // obtém o modal
var btn = document.getElementById("myBtn") // obtém o botão que abre o modal
var span = document.getElementsByClassName("close")[0] // obtém o elemento <span> que fecha o modal

// quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
    modal.style.display = "block"
}

// quando o usuário clicar no <span> (X), feche o modal
span.onclick = function () {
    modal.style.display = "none"
}

// quando o usuário clicar no botão, feche o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}