let type=0;
let convertType= document.getElementById("text-of-convert-type");

let output= document.getElementById("output-degree");
let output_text = document.getElementById("text-of-convert-type");
function convertDegree(){
    const degree_1= document.getElementById("first-degree").value;
    if(degree_1==""){
        alert("Please Enter a Number");
    }

    if(type==0){
        output.innerText = parseFloat(degree_1) + 273.15;
    }
        
    else if(type==1){
        output.innerText = parseFloat(degree_1) - 273.15;
    }

    else if(type==2){
        output.innerText = (parseFloat(degree_1) * 1.8 + 32) ;
    }

    else if(type==3){
        output.innerText = (parseFloat(degree_1) - 32) / 1.8;
    }

    else if(type==4){
        output.innerText = ((parseFloat(degree_1) - 32) / 1.8) + 273.15;
    }

    else if(type==5){
        output.innerText = ((parseFloat(degree_1) - 273.15) * 1.8 + 32) ;
    }
}

function changeType(){
    if(type != 5){
        type += 1;
    }

    else{
        type = 0;
    }
    
    if(type == 0){
        output_text.innerText="Celcius-Kelvin";
    }
    else if(type == 1){
        output_text.innerText="Kelvin-Celcius";
    }
    else if(type == 2){
        output_text.innerText="Celcius-Fahreneit";
    }
    else if(type == 3){
        output_text.innerText="Fahreneit-Celcius";
    }
    else if(type == 4){
        output_text.innerText="Fahreneit-Kelvin";
    }
    else if(type == 5){
        output_text.innerText="Kelvin-Fahreneit";
    }
}





