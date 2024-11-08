 
const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara2")


 function cliqueinobotao(){
    form.style.left="50%"
    form.style.transform ="translatex(-50%)"
    mascara.style.visibility = "visible"
    
 }

 function cliquefora(){

    form.style.left="-300%"
    form.style.transform ="translatex(0%)"
    mascara.style.visibility = " hidden"

 }
