let bodyElement = document.querySelector("body");
let textArea = document.querySelector(".textArea input");
let inButtons = document.querySelectorAll("button.in");
let funcButtons = document.querySelectorAll("button.func");

for (const inButton of inButtons) {
    inButton.addEventListener("click", function(){
        let val = this.getAttribute("data-value")
        textArea.value += val;
    });
    
}

for (const funcButton of funcButtons) {
    funcButton.addEventListener("click", function(){
        textArea.value = eval(textArea.value);
    });

}
