

function get(url,callback) {
    fetch(url).then((rsp)=>{
        return rsp.text();
    }).then((txt)=>{
        // console.log('rsp:',txt);
        callback(txt);
    });
}