let url = window.location.href;
// console.log('url:', url);
let start = url.indexOf('=') + 1;
let title = url.substring(start) + '.md';
if (start == 0) {
   title = 'index.md'; 
}
const ct = document.getElementById('content');
const mk = markdownitLatex2img;
const md = new markdownit('commonmark', {
    html: true,
    linkify: true,
    typographer: true,
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(str, {
                        language: lang,
                        ignoreIllegals: true
                    }).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});
md.use(mk);

function render(url) {
    // console.log('render-url:', url);
    get(url, (mdc) => {
        const res = md.render(mdc);
        // console.log('res:', res);
        ct.innerHTML = res;
    });
}
let article_url = './article/' + title;
// article_url = './article/git一些操作.md';
// article_url = './article/git稀疏检出.md';
// article_url = './article/thesubgraph_use.md';
// article_url = './article/矩阵解方程.md';
console.log('article_url:',article_url);
render(article_url);
