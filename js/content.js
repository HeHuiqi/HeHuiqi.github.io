let url = window.location.href;
// console.log('url:', url);
let start = url.indexOf('=') + 1;
let title = url.substring(start) + '.md';
if (start == 0) {
   title = '基础语法.md'; 
}

// mermaid.initialize({startOnLoad:true});
const mermaidChart = (code_str) => {
  try {
    mermaid.parse(code_str)
    return `<div class="mermaid">${code_str}</div>`
  } catch ({ str, hash }) {
    return `<pre>${str}</pre>`
  }
};
const sequenceChart = (code_str) => {
  try {
    return `<div class="diagram">${code_str}</div>`
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
    highlight: function(code_str, lang) {
      console.log('lang:',lang);
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(code_str, {
                        language: lang,
                        ignoreIllegals: true
                    }).value +
                    '</code></pre>';
            } catch (__) {}
        }
        if(lang == 'mermaid'){
            return mermaidChart(code_str)
        }
        if(lang == 'sequence'){
          return sequenceChart(code_str)
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(code_str) + '</code></pre>';
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


$.fn.sequenceDiagram = function(options) {
  return this.each(function() {
    var $this = $(this);
    var d = Diagram.parse($this.text());
    $this.html('');
    d.drawSVG(this, options);
  });
};

window.onload = function () {
  $(".diagram").sequenceDiagram();

  /*
  let code_str = `Title: 标题：复杂使用
  对象A->对象B: 对象B你好吗?（请求）
  Note right of 对象B: 对象B的描述
  Note left of 对象A: 对象A的描述(提示)
  对象B-->对象A: 我很好(响应)
  对象B->小三: 你好吗
  小三-->>对象A: 对象B找我了
  对象A->对象B: 你真的好吗？
  Note over 小三,对象B: 我们是朋友
  participant C
  Note right of C: 没人陪我玩`;
  let svg = document.createElement('div');
  svg.setAttribute('id','abcd');
  let root = document.getElementById('content');
  root.appendChild(svg);
  let d = Diagram.parse(code_str);
  console.log('d:',d);
  d.drawSVG('abcd');
  */
};



