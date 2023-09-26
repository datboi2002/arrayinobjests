


let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');



addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

    
})



var fruits = ["apple", "banana", "orange", "strawberry", "kiwi", "grape", "mango", "pear", "pineapple", "watermelon"];

var list = document.getElementById("fruitsList");


for (var i = 0; i < fruits.length; i++) {
	var listItem = document.createElement("li");
	listItem.textContent = fruits[i];
	list.appendChild(listItem);
}



var todos = [
    {
        title: "Eat lunch",
        isDone: false
    },
    {
        title: "Eat breakfast",
        isDone: true
    },
    {
        title: "Read book",
        isDone: false
    }
]

var list = document.getElementById("fruitsList");


if (isDone = true) {
    for (var i = 0; i < fruits.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = fruits[i];
        list.appendChild(listItem);
    }
} 


