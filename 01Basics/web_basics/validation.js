//alert('This is working')

//Write a function that do all that stuff.

function myValidation() {
    let myValue = document.getElementById('myform').value;

    // let myValue = document.querySelector('#myform').value;
    const myP = document.getElementById('idone');
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        //console.log('Not a valid input!');
        myP.textContent = 'Not a valid input!';
    }
    else {
        //console.log('This input is okay!');
        myP.textContent = 'This input is okay!';
    }
}


//Form Validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);

    event.target.username.value = ''
    event.target.realname.value =''
});