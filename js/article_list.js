
const articleTitles = [
    '基础语法',
    'git稀疏检出',
    'git一些操作',
    'thesubgraph_use',
    'C代码编译过程',
    '矩阵解方程',
    '游戏程序设计'
];

function articleItem(articleName) {
    const link = `./content.html?title=${articleName}`;
    let p = document.createElement('p');
    let a = document.createElement('a');
    a.setAttribute('href', link);
    a.innerText = articleName;
    p.appendChild(a);
    return p;
}
function loadArticles() {
    const articleList = document.getElementById('articleList');
    for (let index = 0; index < articleTitles.length; index++) {
        const title = articleTitles[index];
        let article = articleItem(title);
        articleList.appendChild(article);
        
    }
}
loadArticles();