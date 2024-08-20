//adding an event listener to the button so that it redirectd to the URLS that are in place
//adding an ID so as to target the element with js
//window.location.href - changes current page URL to the link provided eg. Github
document.getElementById('gitbtn').addEventListener('click',function(){
    window.location.href='https://github.com/';
});

document.getElementById('frontendbtn').addEventListener('click',function(){
    window.location.href="https://www.frontendmentor.io/";
})
document.getElementById('linkedInbtn').addEventListener('click',function(){
    window.location.href="https://www.linkedin.com/";
})
document.getElementById('twitterbtn').addEventListener('click',function(){
    window.location.href="https://x.com/";
})
document.getElementById('instagrambtn').addEventListener('click',function(){
    window.location.href="https://www.instagram.com/";
})