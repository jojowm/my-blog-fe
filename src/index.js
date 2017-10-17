window.onload = function() {
  $.get("./article-data.json", function(data) {
    // 注册handlebars事件，通过id找到一个模版
    let absTemplate = Handlebars.compile($('#abs-template').html());
		// 将json数据用注册的模版封装
    $('#content').html(absTemplate(data));
  });

 $.get("./tag.json", function(tag) {
    let tagTemplate = Handlebars.compile($('#tag-template').html());
    $('#tags-1').append(tagTemplate(tag));
    $('#tags-2').append(tagTemplate(tag));
 });

 $.get("./classification.json", function(classification) {
   let clsTemplate = Handlebars.compile($('#cls-template').html());
   $('#categories-2').append(clsTemplate(classification));
   // menu高度初始化为body的高度
   $('#menu').height(document.body.scrollHeight + 'px');
 });

  let menuBtn = document.getElementById("menu-btn");
  let modal = document.getElementById("modal");
  let menu = document.getElementById('menu');
  // let 

//   点击menu-btn按钮出现menu
  menuBtn.onclick = function() {
   if (hasClass(modal, 'hide')) {
       modal.className = 'show';
       menu.className = 'showMenu';
   }
  };

  function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
};
