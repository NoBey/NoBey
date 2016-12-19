import './main.css'
var html = ''

const nobey = '<h1>' + '<a>NoBey</a>' + '</h1>'
const link = '<div class="link">' +
             '<span><img id="img50" src="../src/img/zhihu.png" /></span>' +
             '<span><img src="../src/img/github.png" /></span>' +
             '<span><img src="../src/img/weibo.png" /></span>' +
             '<span><img src="../src/img/blog.png" /></span>' +
             '<span><img src="../src/img/at.png" /></span>' +
             '<span><img src="../src/img/resume.png" /></span>' +
             '</div>'

html += nobey
html += link



document.querySelector('body').innerHTML = html
