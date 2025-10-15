 let display = document.getElementById("display");
 let button = document.querySelectorAll("button");
 button.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.textContent==="="){
            display.value = eval(display.value);
        }
        else if(button.textContent==="C"){
            display.value="";
        }
        else{
            display.value+=button.textContent;
        }
    });
 });