//  EXERCICIO 2 - TARDE

type post = {
    author: string;
    text: string;
  };

  const postsArray: post[] = [
    {
        author: "Brunna",
        text: "You saved my so I will praise your name untill the end."
    },
    {
        author: "Elysha",
        text: "Trust in Lord with all your heart."
    },
    {
        author: "Miguel",
        text: "I will give thanks to you, Lord, with all my heart."
    },
    {
        author: "Emannuel",
        text: "The lord is refuge for opressed, a stronghold in times of trouble."
    },
    {
        author: "Anna",
        text: "I love you, Lord, my strength."
    },
];

function showPosts(allPosts: post[], author: string) : post[] {
    return allPosts.filter((elem) => {
        return (elem.author === author)
    })
}

  console.log(showPosts(postsArray, "Emannuel"))
