let addnum1Element = document.querySelector("#first-input");
let addnum2Element = document.querySelector("#second-input");
let buttonElement = document.querySelector(".button");
let screensElement = document.querySelector(".screens");
function addClickEvent() {
    if (buttonElement) {
        buttonElement.addEventListener("click", function (event) {
            // Get the current values from the input fields
            let addnum1 = addnum1Element ? parseFloat(addnum1Element.value) || 0 : 0;
            let addnum2 = addnum2Element ? parseFloat(addnum2Element.value) || 0 : 0;
            const addSubObject = {
                addnum1: addnum1,
                addnum2: addnum2
            };
            console.log("addnum1:", addSubObject.addnum1 + addSubObject.addnum2);
            let sum = addSubObject.addnum1 + addSubObject.addnum2;
            document.querySelector(".screens").innerHTML = sum.toString();
            document.getElementById('reviews').innerHTML = sum.toString();
        });
    }
}
addClickEvent();
