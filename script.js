function TurnOnOff(){
    var image = document.getElementById('image');

    if(image.src.match('OFFLampada')){
        image.src = 'ONLampada.jpg';
        
    } else {
        image.src = 'OFFLampada.jpg';
    }
}