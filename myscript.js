var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var meter = document.getElementById('meter');
var centimeter = document.getElementById('centimeter');

feet.addEventListener('input',function(){
    let f = this.value;
    let i = f * 12;
    inch.value = i;
})
inch.addEventListener('input',function(){
    let i = this.value;
    let f = i / 12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
})

meter.addEventListener('input',function(){
    let m = this.value;
    let cm = m * 100;
    centimeter.value = cm;
})
centimeter.addEventListener('input',function(){
    let cm = this.value;
    let m = cm * 0.01;
    meter.value = m;
})