
//bai 1
// let yourName = prompt("Bạn hãy nhập vào tên:")
// let yourAge = prompt("Bạn hãy nhập tuổi:")
// document.write("Chào bạn: <b>" + yourName + "</b>" + "<br>")
// document.write("Tuổi của bạn là: <u>" + yourAge + "</u")

//bai 2
function bai2() {
    alert("welcome to JS")
}

//bai 3
function bai3() {
    let valueS = document.getElementById("bai3").value
    alert(valueS)
}

//bai 4
// let D = new Date()
// let yourYearBorn, yourAge, currentYear;
// currentYear = D.getFullYear()
// yourYearBorn =  parseInt(prompt("Nhap nam sinh cua ban"))
// yourAge = currentYear - yourYearBorn
// document.write("Tuoi cua ban la: " + yourAge )

//bai 5
// let D1 = new Date()
// let yourYearBorn, yourAge, currentYear
// currentYear = D1.getFullYear()
// do {
//     yourYearBorn = prompt("Nhap nam sinh cua ban: ")
// }
// while(parseInt(yourYearBorn) > currentYear)
// yourAge = currentYear - yourYearBorn
// document.write("tuoi cua ban la: " + yourAge)

//bai 6
function red() {
    document.body.style.backgroundColor = "red"
}

function blue() {
    document.body.style.backgroundColor = "blue"
}

//bai 7
function changeColor() {
    document.body.style.backgroundColor = color.value
}
//bai 8
let D = new Date()
document.title =  D.getHours() + ":" + D.getMinutes()

//bai 9
let showTime = document.getElementById("show-time")
setInterval(() => {
    showTime.innerHTML = "Time: " + new Date().toLocaleTimeString()
}, 1000);

//bai 10
let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam non ducimus nam quaerat praesentium hic doloribus accusamus blanditiis suscipit, harum, consectetur quibusdam iusto laboriosam accusantium. Aliquid labore voluptate laboriosam."
let showTextP = document.getElementById("show-text")
let showBtnMore = document.getElementById("show-more")
let showBtnLess = document.getElementById("show-less")
let maxLength = 50

function showText() { 
    if (txt.length < maxLength) {
        showTextP.innerHTML = txt;
        showBtnMore.style.display = "none"
        showBtnLess.style.display = "none"
    }else {
        showTextP.innerHTML = getShortText(txt)
        showBtnLess.style.display = "none"
        showBtnMore.style.display = "block"
    }
}
    function showMore() {
        showTextP.innerHTML = txt
        showBtnMore.style.display = "none"
        showBtnLess.style.display = "block"
    }
    function showLess() {
        showTextP.innerHTML = getShortText(txt)
        showBtnMore.style.display = "block"
        showBtnLess.style.display = "none"
    }
    function getShortText() {
        return txt.substr(0, maxLength) + ". . ."
    }

showText()
