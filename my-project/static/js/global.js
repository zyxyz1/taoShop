// (function (doc, win) {
//   var docEl = doc.documentElement,
//       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//       recalc = function () {
//           var clientWidth = docEl.clientWidth;
//           if (!clientWidth) return;
//           docEl.style.fontSize = (clientWidth>=750 ? 100 : clientWidth/7.5) + 'px';
//       };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
htmlDom.style.fontSize= htmlWidth/7.5 + 'px';