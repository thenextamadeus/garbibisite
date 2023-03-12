// //changing language//
// var lang = navigator.language || navigator.userLanguage;
// var textElement = document.getElementById("text");


 var fonts = ['Gloock', 'Gajraj', 'Almarai','Times New Roman', 'Montserrat Alternates', 'Verdana','Prompt'];

function changeFont() {
var title = document.querySelector('.mytext');
var font = fonts[Math.floor(Math.random() * fonts.length)];
title.style.fontFamily = font;
}
        
setInterval(changeFont, 200);