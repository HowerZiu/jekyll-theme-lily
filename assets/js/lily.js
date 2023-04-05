function setLightMode() {
    body=document.body;
    var light_mode=localStorage.getItem("light_mode");
    var theme_color_meta=document.querySelector('meta[name="theme-color"]');
    if (light_mode=="dark") {
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
function changeLightMode() {
    var light_mode=localStorage.getItem("light_mode");
    if (light_mode=='dark')
        light_mode='light';
    else
        light_mode='dark';
    localStorage.setItem('light_mode',light_mode);
    setLightMode();
    document.body.classList.add("transition");
    window.setTimeout(()=>{
        document.body.classList.remove("transition");
    },500);
}
function scrollToTop() {
    var elm=document.body||document.documentElement;
    elm.scrollIntoView();
}