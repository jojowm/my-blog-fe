function showFull(e, anchor, parentClass) {
  e = e || window.event;
  let targetElement = e.target || e.srcElement;
  // console.log(targetElement);
  // 如果点击的是abstract的div，则跳转到详情页；
  // 若不是，则要找到点击元素的父元素（class为abstract），获取其name-id属性的值, 根据id生成详情页内容
  if ($(targetElement).hasClass(parentClass)) {
    window.open(anchor);
  } else {
    let $abs = $(targetElement).parents("." + parentClass);
    // window.open('http://www.taobao.com')
     console.log($abs);
     
    window.open(anchor);
  }
}

function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
