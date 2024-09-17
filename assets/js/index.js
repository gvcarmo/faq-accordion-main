// const itensPerguntasERespostas = document.querySelectorAll(".resposta");

// itensPerguntasERespostas.forEach(function (item) {
//   item.addEventListener("click", function () {
//     const itemAtivoAtual = document.querySelector(".ativo");

//     if (itemAtivoAtual) {
//       itemAtivoAtual.classList.remove("ativo");
//     }
//     item.classList.add("ativo");
//   })
// })

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

