'use strict';

// Также доступно здесь: http://kodaktor.ru/g/unsafe_788e5

document
.querySelector('button')
.addEventListener('click', async () => {
    const posts = await fetch('http://95.213.200.236/wp-json/wp/v2/posts')
                        .then(res => res.json()),
          titles = await posts.map(post => post.title.rendered),
          titlesList = document.getElementById('titles');
    let list = '';

    for (const title of titles) {
        list += `<li>${title}</li>`;
    }

    titlesList.innerHTML = list;
});
