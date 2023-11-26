
function calc(option) {
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output;
    if (option == 'add') {
        output = `Sum of the number is ${Number(a) + Number(b)}`
    } else {
        output = `Sub of the number is ${Number(a) - Number(b)}`
    }
    document.getElementById("out").innerText = output
}






// function add() {
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     console.log(Number(a) + Number(b))
//     let output = `Sum of the number is ${Number(a) + Number(b)}`
//     document.getElementById("out").innerText = output

// }


// function sub() {
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     console.log(Number(a) - Number(b))
//     let output = `Sub of the number is ${Number(a) - Number(b)}`
//     document.getElementById("out").innerText = output

// }

