function cambiarColor(){
    //let color = document.querySelector('#color')
    let color = document.getElementById('color').value;
    console.log(color);
    let fondo = document.querySelector('#fondo')
    console.log(fondo)
    fondo.style.backgroundColor= color;
}
