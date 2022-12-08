let url = window.location.href;
let start = url.indexOf('=') + 1;
let title = url.substring(start) + '.md';
if (start == 0) {
   title = '基础语法.md'; 
   title = '图表.md'
}
mermaid.initialize({startOnLoad:true});
const mermaidChart = (code_str) => {
  try {
    return `<div class="mermaid">${code_str}</div>`
  } catch ({ str, hash }) {
    return `<pre>${str}</pre>`
  }
};

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
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(code_str) + '</code></pre>';
    }
});
md.use(mk);

mermaid.initialize({startOnLoad:true});

function render() {
  
  const ct = document.getElementById('privew');
  const editor = document.getElementById('editor');

  const mdTxt = editor.innerText;
  const res = md.render(mdTxt);  
  // ct.innerText = res;
  let content = document.createElement('div');
  content.className = 'mermaid';
  content.innerHTML = mdTxt;
  ct.appendChild(content);
  
}

const btn = document.getElementById('privewBtn');
btn.addEventListener('click',()=>{
  render();
});







