let url = window.location.href;
// console.log('url:', url);
let start = url.indexOf('=') + 1;
let title = url.substring(start) + '.md';
if (start == 0) {
   title = '基础语法.md'; 
}

mermaid.initialize({startOnLoad:true});


const mermaidChart = (code) => {
  try {
    mermaid.parse(code)
    return `<div class="mermaid">${code}</div>`
  } catch ({ str, hash }) {
    return `<pre>${str}</pre>`
  }
};

const ct = document.getElementById('content');
const mk = markdownitLatex2img;
const md = new markdownit({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function(str, lang) {
      console.log('lang:',lang);
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
        else if(lang == 'mermaid'){
            return mermaidChart(str)
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
// article_url = './article/C代码编译过程.md';
console.log('article_url:',article_url);
render(article_url);
