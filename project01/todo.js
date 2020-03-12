//alert("connected!")

//Create text node.

// var h = document.createElement('h1');
// var myValue = document.createTextNode('Hello World!');
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);

//Loop


var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

function addItem() {

    var input = document.getElementById('input');
    var item = input.value;

    ul = document.getElementById('list')
    var textNode = document.createTextNode(item)

    if (item === '') {

        return false;
        console.log('NO INPUT');

        //Add a p tag and assing a value of "Enter your TODO."

    }
    else {
        let mLi = document.createElement('li');

        let mCheckBox = document.createElement('input');
        mCheckBox.type = 'checkbox';
        mCheckBox.setAttribute('id', 'check');

        let mLabel = document.createElement('label');
        //optional
        mLabel.setAttribute('for', 'Item');

        //add this element in webpage.

        ul.appendChild(mLabel);


        mLabel.appendChild(textNode);

        mLi.appendChild(mLabel);
        ul.insertBefore(mLi, ul.childNodes[0]);

        setTimeout(() => {
            mLi.className = 'visual';
        }, 1.7 );


        input.value = "";
    }

}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}