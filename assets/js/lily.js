function setLilyCookie(cname,cvalue,exdays,path) {
    var d=new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    c=cname+"="+cvalue;
    if (exdays) c=c+"; expires="+d.toGMTString();
    if (path) c=c+"; path="+path;
    document.cookie=c;
}
function getLilyCookie(cname) {
    var name=cname+"=";
    var carr=document.cookie.split(';');
    for (var i=0; i<carr.length; ++i) {
        var c=carr[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}
function delLilyCookie(cname) {
    document.cookie=cname+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
function setLilyMode() {
    body=document.body;
    var lily_mode=getLilyCookie("lily_mode");
    var theme_color_meta=document.querySelector('meta[name="theme-color"]');
    if (lily_mode=="dark") {
        body.classList.remove("light");
        body.classList.add("dark");
        document.getElementById("body").classList.remove("lily-mode-light");
        document.getElementById("body").classList.add("lily-mode-dark");
        theme_color_meta.setAttribute("content","#343e8f");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        document.getElementById("body").classList.remove("lily-mode-dark");
        document.getElementById("body").classList.add("lily-mode-light");
        theme_color_meta.setAttribute("content","#dee0ff");
    }
}
function changeLilyMode() {
    var lily_mode=getLilyCookie('lily_mode');
    if (lily_mode=='dark')
        lily_mode='light';
    else
        lily_mode='dark';
    setLilyCookie('lily_mode',lily_mode,180,'/');
    setLilyMode();
}
function lilyScrollTop() {
    var elm=document.body||document.documentElement;
    elm.scrollIntoView({behavior:"smooth"});
}