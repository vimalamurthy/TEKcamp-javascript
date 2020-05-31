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
