var fonts = ['Gloock', 'Gajraj', 'Almarai','Times New Roman', 'Montserrat Alternates', 'Verdana','Prompt'];

function changeFont() {
  var title = document.querySelector('.mytext');
  if (title) { // check if title is not null
    var font = fonts[Math.floor(Math.random() * fonts.length)];
    title.style.fontFamily = font;
  }
}

setInterval(changeFont, 200);