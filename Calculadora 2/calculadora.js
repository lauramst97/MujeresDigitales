let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}
function limpiar(){
    screen.value = '';
}
function calcular(){
    try{
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
        setTimeout(() =>{
            limpiar();
        }, 500);
    }
}
