let uList=document.querySelector('ul');
let getInput=document.querySelector('input');
let button=document.querySelector('button');

button.onclick = function(){
    let curInput = getInput.value;
    getInput.value="";

    let listItem = document.createElement('li');
    let spanInput = document.createElement('span');
    let listButton = document.createElement('button');

    listItem.appendChild(spanInput);
    listItem.appendChild(listButton);
    spanInput.textContent=curInput;
    listButton.textContent='Delete';
    uList.appendChild(listItem);
    listButton.addEventListener('click', function(){uList.removeChild(listItem)});
    getInput.focus();
}
/*
1. move the css from outside the shopping-list.html file into a separate css stylesheet called : shopping-list.css
2. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
3. Create a function that will run in response to the button being clicked.
4. Inside the function body, start off by storing the current value of the input element in a variable.
5. Next, empty the input element by setting its value to an empty string — ''.
6. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
7. Append the span and the button as children of the list item.
8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
9. Append the list item as a child of the list.
10. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
11. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
*/