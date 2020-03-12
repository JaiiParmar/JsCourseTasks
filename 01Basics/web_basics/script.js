//alert("Fine is Attached.")


// const myPElement = document.querySelector("p")

// myPElement.textContent = "I am being changed from the query selector."



// const myPElements = document.querySelectorAll("p")

// myPElements.forEach(p => {
//     p.textContent = "I am changed using js loop"
// // })

// console.log(document.title);

// document.title = "I have got chanted."

// console.log(document.title);

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));



// const myElement = document.querySelector('.classone')
// console.log(myElement);


const mButton = document.querySelector("#btn");

mButton.addEventListener('click', (event) => alert("You just clicked the button" + event));

mButton.removeEventListener('click')

//track input form

document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);
});