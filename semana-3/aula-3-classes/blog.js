function limpaCampo(){
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("imagem").value = "";
}

class Post {
    constructor(titulo, autor, conteudo, imagem){
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
        this.imagem = imagem 
    }

    renderizaPostFormatado(){
        const postFormatado = "<div><p>" + this.titulo + "</p><p>" + this.autor + "</p><p>" + this.conteudo;
        return postFormatado;
    }

}
    let listaDePost = []
    function publicarOPost(){
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const conteudo = document.getElementById("conteudo").value;
        const imagem = document.getElementById("imagem").value;
        
        const post = new Post (titulo, autor, conteudo, imagem);

        listaDePost.push (post);

        console.log("Todos os posts " listaDePost);

        limpaCampo();

        const areaDosPost = document.getElementById("posts");

        // areaDosPosts.innerHTML += "<h1>OIE!</h1>";

        for(let post of listaDePost){
            areaDosPost.innerHTML += post.renderizaPostFormatado();
        }
    }

    // for(let publicacao of listaDePost) {
    //     document.getElementById("listaDePost").innerHTML += "<div>" + "<h1>" + publicacao.titulo + "</h1>" + "</div>"
    //     document.getElementById("listaDePost").innerHTML += "<div>" + "<h1>" + publicacao.autor + "</h1>" + "</div>"
    //     document.getElementById("listaDePost").innerHTML += "<div>" + "<h1>" + publicacao.conteudo + "</h1>" + "</div>"
    //     document.getElementById("listaDePost").innerHTML += "<div>" + "<h1>" + publicacao.imagem + "</h1>" + "</div>"
    // }

