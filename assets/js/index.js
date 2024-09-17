const liAtivo = document.querySelectorAll(".item");

liAtivo.forEach(function (item) {
    item.addEventListener("click", function () {
        const liAtivoAtual = document.querySelector(".ativo");

        if (liAtivoAtual) {
            liAtivoAtual.classList.remove("ativo");
        }
        item.classList.add("ativo");

    })
})

