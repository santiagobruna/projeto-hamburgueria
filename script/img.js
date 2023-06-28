let imagem = document.getElementsByClassName('img');

for (var i = 0; i < imagem.length; i++) {
        imagem[i].addEventListener("click", function() {
          // Código a ser executado quando a imagem for clicada
            alert("Sua compra está em andamento");
        });
}

let favorito = document.getElementsByClassName('coracao-vazio');

for (var i = 0; i < favorito.length; i++) {
    favorito[i].addEventListener("click", function(){
        if (this.classList.contains("coracao-vazio")) {
            this.src = "assets/coracao-preenchido.svg";
            this.classList.remove("coracao-vazio");
        } else {
            this.src = "assets/Favoritos.svg";
            this.classList.add("coracao-vazio");
        }
    });
}
