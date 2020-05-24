//tao button xoa
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myNodelist[i].appendChild(span)
}

//khi kich button xoa thi an dong li cua no
var close = document.getElementsByClassName("close")
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

//them class checked vao the li nao duoc click
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//them cong viec vao nut them
function newElement() {
    //tao node li
    var li = document.createElement("li")
    //lay gia tri nguoi dung nhap vao
    var inputValue = document.getElementById("myInput").value
    //tao doi tuong textNode
    var t = document.createTextNode(inputValue)
    //gan textNode cho li vua tao
    li.appendChild(t)
    if (inputValue === "") {
        alert('you must write something!')
    }else {
        document.getElementById('myUL').appendChild(li)
    }
    //xoa gia tri input
    document.getElementById("myInput").value = ""
    var span = document.createElement('span')
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement
            div.style.display = "none"
        }
    }  
}