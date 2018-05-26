
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var answerPTagWithValueEL1 = answerPTagWithValue.textContent
  var answerPTagWithValueEL2 = parseInt(answerPTagWithValueEL1)
  console.log(answerPTagWithValueEL2)
  // you do the rest
answerPTagWithValue.textContent = answerPTagWithValueEL2 *2

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var colorCircle = document.querySelector('#color-circle .exercise-item')
  // var blackCircle = colorCircle.style.background = '#000000'

  var elementStyleProps = window.getComputedStyle(colorCircle)
  // console.log(elementStyleProps.backgroundColor)
  // "rgb(0, 0, 0)"
  if(elementStyleProps.backgroundColor === "rgb(255, 255, 255)" ){
    colorCircle.style.backgroundColor = "rgb(0, 0, 0)"

  } else {
    colorCircle.style.backgroundColor = "rgb(255, 255, 255)"
  }
 //  if (colorCircle.background === '#000000') {
 // colorCircle.style.background = '#FFFFFF'
 //
 // }else {
 //   colorCircle.style.background = '#FFFFFF'
 // }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
var circleWidth = document.querySelector( ".circle-red")
// console.log(circleWidth)
var circleEl = window.getComputedStyle(circleWidth)
// console.log(circleEl)
var widthCircle = parseInt(circleEl.width)
// console.log(widthCircle)
if (widthCircle < 320) {
   var circleRed = widthCircle * 2
} else {
  var circleRed = 40
}
 var circleT = circleRed.toString()
 circleWidth.style.width = circleT + "px"
 circleWidth.style.height = circleT + "px"
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
 var lista = document.querySelectorAll('#user-list .inactive');
  var listaEl = [ ...lista];

  function larespuestAmivida(li) {
    li.style.display ="none"

  }
  listaEl.forEach(larespuestAmivida )
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var cajas = document.querySelectorAll(".answer-box")
  var cajaDos = [...cajas]
  // console.log(cajas);
  for (var i = 0; i < cajaDos.length; i++) {
    var coloresCajas = cajaDos[i]

    coloresCajas.style.display = "flex"
    coloresCajas.style.flexDirection = "row-reverse"
    coloresCajas.style.justifyContent = "center"
  }

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var teXt = document.querySelectorAll("#tasks li")
  var teXtAsks = [...teXt]
  // console.log(teXtAsks)
  for (var i = 0; i < teXtAsks.length; i++) {
   var stringList = teXtAsks[i].innerHTML.split("")
   // console.log(stringList.innerHTML)
   var listaElStr = stringList.reverse()
   // console.log(listaElStr)
   var reverselis = listaElStr.join("")
   // console.log(reverseJoin)
    teXtAsks[i].innerHTML = reverselis
    // console.log(stringList)

  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
