import './main.css'
var html = ''

const nobey = '<h1>' + '<a>NoBey</a>' + '</h1>'
const link = '<div class="link">' +
             '<span><a href="https://www.zhihu.com/people/NoBey/activities"><img id="img50" src="../src/img/zhihu.png" /></a></span>' +
             '<span><a href="https://github.com/NoBey"><img src="../src/img/github.png" /></span></a>' +
             '<span><a href="http://weibo.com/nobeycn"><img src="../src/img/weibo.png" /></span></a>' +
             '<span><a href="http://blog.nobey.cn"><img src="../src/img/blog.png" /></span></a>' +
             '<span><a href="#"><img src="../src/img/at.png" /></span></a>' +
             '<span><a href="#"><img src="../src/img/resume.png" /></span></a>' +
             '</div>'

html += nobey
html += link



document.querySelector('body').innerHTML = html
