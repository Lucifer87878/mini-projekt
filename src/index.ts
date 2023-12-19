    let addnum1Element: HTMLInputElement | null = document.querySelector("#first-input");
    let addnum2Element: HTMLInputElement | null = document.querySelector("#second-input");
    let buttonElement: HTMLElement | null = document.querySelector(".button");
    let screensElement: HTMLElement | null = document.querySelector(".screens");
    
    function addClickEvent() {
        if (buttonElement) {
            buttonElement.addEventListener("click", function (event) {
                // Get the current values from the input fields
                let addnum1: number = addnum1Element ? parseFloat(addnum1Element.value) || 0 : 0;
                let addnum2: number = addnum2Element ? parseFloat(addnum2Element.value) || 0 : 0;
                
                const addSubObjectNr: { addnum1: number; addnum2: number } = {
                    addnum1: addnum1,
                    addnum2: addnum2
                };
                
                console.log("addnum1:", addSubObjectNr.addnum1 + addSubObjectNr.addnum2);
                let sum:number = addSubObjectNr.addnum1 + addSubObjectNr.addnum2;
                document.querySelector(".screens").innerHTML = sum.toString();
                document.getElementById('reviews').innerHTML = sum.toString();
            });
        }
    }


    addClickEvent();