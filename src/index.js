window.onload = function() {
  $.get("./article-data.json", function(data) {
    let content = document.getElementById("content");
    let dataLength = data.length;
    console.log(dataLength);
    for (let i = 0; i < dataLength; i++) {
      content.innerHTML =
        content.innerHTML +
        '<div class="abstract"><img src="' +
        data[i].pic +
        '" alt="first pic"><div class="abs-txt"><p class="abs-title">' +
        data[i].title +
        '</p><p class="abs-article">' +
        data[i].content +
        '</p></div><div class="abs-info"><i class="fa fa-calendar-minus-o grey-icon" aria-hidden="true"></i><p class="date">' +
        data[i].date +
        '</p><i class="fa fa-folder-open grey-icon" aria-hidden="true"></i><p class="cls-name">' +
        data[i].cls +
        "</p></div></div>";
    }
  });

  let menuBtn = document.getElementById("menu-btn");
  let menuWrap = document.getElementById("menu-wrap");
  let menu = document.getElementById('menu');

//   点击menu-btn按钮出现menu
  menuBtn.onclick = function() {
   if (hasClass(menuWrap, 'hide')) {
       menuWrap.className = 'show';
       menu.className = 'showMenu';
       menu.style.transform = 'translate3d(-300px, 0, 0)'
   } else {
       menu.style.transform = ''
   }
  };

  function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
};
