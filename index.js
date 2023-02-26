const btn = document.getElementById("submit");
const inputs = document.querySelectorAll("input");
let code = "";

btn.addEventListener("click", function onSubmit(event) {
    event.preventDefault()
    
    for(let i = 0; i < inputs.length; i++) {
        // let valisEmpty = inputs[i].value
        if(inputs[i].value.length < 1) {
            alert("Incorrect key");
            location.reload();
            return;
        } 
    }

    alert( `You entered: ${code}`);
    location.reload();
})


// const onChangeHandler =(e)=> {
//     if(e.length === 1) {
//         inputs[1].focus();
//     }
// }

inputs.forEach((item, index) => {
    item.oninput= function onChangeHandler(e) {
        let val = e.target.value;
        if(val.length === 1) {
           if(index <= 5) {
            code+=val;
            if(index === 5) {
                return;
            } else {
                inputs[index + 1].focus();
            }
           }
        }
    }
})