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
   $('#categories').append(clsTemplate(classification));
   // menu高度初始化为body的高度
   $('#menu').height(document.body.scrollHeight + 'px');
 });

 $.get("./article.json", function(article) {
  let latestPostsTemplate = Handlebars.compile($('#latest-posts-template').html());
  $('#latest-posts-2').append(latestPostsTemplate(article));
 });

  let menuBtn = document.getElementById("menu-btn");
  let modal = document.getElementById("modal");
  let menu = document.getElementById('menu');

  // 点击menu的close button，关闭菜单
  $('#close-btn').click(function() {
    if(hasClass(modal, 'show')) {
     modal.className = 'hide';
     menu.className = 'hideMenu'; 
    }
  }); 

//   点击menu-btn按钮出现menu
  menuBtn.onclick = function() {
   if (hasClass(modal, 'hide')) {
       modal.className = 'show';
       menu.className = 'showMenu';
   }
  };

// 点击主页上每个abstract，都会跳转到显示全文的页面
// 事件代理
var content = document.getElementById('content');
content.addEventListener('click', showFullArticle, false);
function showFullArticle(e) {
    e = e || window.event;
    let targetElement = e.target || e.srcElement;
    console.log(targetElement);
}





  function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
};
