class Post {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
        this.conteudo = imagem
        
    }

    buscaPostFormatado(){
        const postFormatado = this.titulo + " - " + this.autor + " , " + this.conteudo;
        return postFormatado;
    }

}

    const post1 = new Post("Post A", "Post A", "Post A", "https://picsum.photos/200/200?v=1");
    const post2 = new Post("Post B", "Post B", "Post B", "https://picsum.photos/200/200?v=2");
    const post3 = new Post("Post C", "Post C", "Post C", "https://picsum.photos/200/200?v=3");
    const post4 = new Post("Post D", "Post D", "Post D", "https://picsum.photos/200/200?v=4");
    const post5 = new Post("Post E", "Post E", "Post E", "https://picsum.photos/200/200?v=5");
    const post6 = new Post("Post F", "Post F", "Post F", "https://picsum.photos/200/200?v=6");

    const playlist = [post1, post2, post3, post4, post5, post6];

    const listaDePosts = document.getElementById("listaDePosts");

    for(let post of playlist){
        listaDePosts.innerHTML += "<li>" + post.buscaPostFormatado() + "</li>";
        listaDePosts.innerHTML += "<img src=" + post.imagem + ">";
    }

