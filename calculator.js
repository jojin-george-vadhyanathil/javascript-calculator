function buttonClick(val){
    document.getElementById("screen").value+=val
}

function clean(){
    document.getElementById("screen").value=""
}

function equalClick(){
    var text =document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}