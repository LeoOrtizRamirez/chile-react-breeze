window.addEventListener('load', function () {

    if (window.location.href.indexOf("/funcionalidades") > -1) {
        document.querySelectorAll("a[href='/funcionalidades']")[0].style.color = "#00A1C9";
    }
    if (window.location.href.indexOf("/planes") > -1) {
        document.querySelectorAll("a[href='/chile/planes']")[0].style.color = "#00A1C9";
    }
    if (window.location.href.indexOf("/nosotros") > -1) {
        document.querySelectorAll("a[href='/nosotros']")[0].style.color = "#00A1C9";
    } 
    if (window.location.href.indexOf("/contacto") > -1) {
        document.querySelectorAll("a[href='/contacto']")[0].style.color = "#00A1C9";
    }

});
