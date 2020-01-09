document.addEventListener("DOMContentLoaded", () => {

    XMLHttpRequest.open("GET","demo_get2.asp?fname=Henry&lname=Ford", true);
    XMLHttpRequest.send();

});