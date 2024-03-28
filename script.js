// var a = document.querySelector("h1")
// a.innerHTML="changed using js"
// a.style.color="black"
// a.style.backgroundColor="yellow"

// a.addEventListener("click",function(){
//     a.style.color="blue"
// })

var b = document.querySelector(".bulb")

var indicator=0

var a = document.querySelector("button")
a.addEventListener("click", function(){
    if(indicator==0)
    {
        a.style.backgroundColor="orange"
        a.innerHTML="Off"
        b.style.backgroundColor="yellow"
        indicator=indicator+1
    }
    else{
        a.style.backgroundColor="aqua"
        a.innerHTML="On"
        b.style.backgroundColor="black"
        indicator=indicator-1
    }
})