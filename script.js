// get the input-box id to access the input
let input = document.getElementById('input-box')
// it is also used to acces the element id = "list-container" 
let listContainer = document.getElementById('list-container')
//   when the user click on the button then this function will run
const addTask = ()=>{
  if(input.value == ''){
    alert("please enter the value first")
  }
  else{
    // this is used to add the list inside the ul tag that is present in the html
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listContainer.appendChild(li)
    // to add the cross icon 
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    // to display the span inside the list that we already made through the javascript
    li.appendChild(span)
  }
  // used to remove the value from input after clicked on the add button 
  input.value = "";
  saveData()
}

// to delete the list and to checked and unchecked the list when we click 
listContainer.addEventListener('click', function(e){
  if(e.target.tagName == "LI" ){
    e.target.classList.toggle("checked")
    saveData()
  }
  else if (e.target.tagName == "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }
})

// now we write script to save data in the local storage 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// now we get the data in the local storage when we reload the page 

function loadData(){
  listContainer.innerHTML = localStorage.getItem("data")
}
// immediately load this function when we reload the page 

loadData()