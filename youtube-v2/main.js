function handleMouseover(event) {
  console.log('mouseover');
  event.target.innerText = 'Thanks for hovering';
  //todo change text of button the button done
}

function handleMouseleave(event) {
  event.target.innerText = 'mouse over here pls';
}

//todo appropriate mouse event such that mouse leaves message
function handleBgColor() {
  divEl = document.getElementById('myDiv');
  console.dir(divEl);
  divEl.style.backgroundColor = 'red';
}

function handleTextColor() {
  divEl = document.getElementById('myDiv');
  console.dir(divEl);
  divEl.style.color = 'white';
}

function handleTextWeight() {
  divEl = document.getElementById('myDiv');
  console.dir(divEl);
  divEl.style.fontWeight = 'bold';
}

function handleTime() {
  const time = new Date();
  document.getElementById('timeWrapper').innerText = time.toLocaleTimeString();
}

function handleRandomNumber() {
  document.getElementById("randomNumber").innerText =
    Math.floor(Math.random() * 10) + 1;
}

function handleAddskills() {
  var ul = document.getElementById("skills");
  var candidate = document.getElementById("skillInput");
  var li = document.createElement("li");
  li.setAttribute('id', candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function handleRemoveskills() {
  var ul = document.getElementById("skills");
  ul.removeChild(ul.lastChild);
}

/* local storage api */
function handleEnteredPin() {
  pinStored = document.getElementById('pinInput').value;
  localStorage.setItem("pin",pinStored);
  document.getElementById('pincode').innerText = localStorage.getItem("pin");
}
  
function handleDeletePin() {
  let pinToBeRemoved = document.getElementById('pincode');
  let pinToBeRemovedFromInput = document.getElementById('pinInput');
  pinToBeRemoved.innerHTML="";
  pinToBeRemovedFromInput.value="";
  pinStored="";
  localStorage.removeItem("pin");
}  
//function handleOnload() {
//  document.getElementById('pincode').innerText=pinStored;
//
var pinStored = localStorage.getItem("pin");
if(pinStored!='')
{
  document.getElementById('pincode').innerText=pinStored;
}
//let pinStored = document.getElementById('pincode');
//localStorage.setItem("pin",pinStored);
//document.getElementById('pincode').innerText=localStorage.getItem("pin").value;
//web api demo todo

function handleLocateMe() {
navigator.geolocation.getCurrentPosition(locationAcessGranted,locationAcessDenied)
}

function locationAcessGranted(position) {
  console.log('inside locationAcessGranted');
  console.log(position);
  document.getElementById('latitude').innerText = position.coords.latitude;
  document.getElementById('longitude').innerText = position.coords.longitude;

}
function locationAcessDenied() {
  console.log('inside locationAcessDenied');
 }

// drag drop api
function handleDragStart(event) {
  console.log('Started Dragging');
  console.log(event);
  event.dataTransfer.setData('draggedBox',event.target.id);
}

function handleDragOver(event) {
  console.log('Inside handleDragOver');
  // allowing dropping by stopping default nature of this event
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  console.log(event.dataTransfer.getData('draggedBox'));
  // fetching the id of element  from datatransfer
  const draggedElId = event.dataTransfer.getData('draggedbox');
  //appnding the element inside droppable box
  document.getElementById('droppableBox').append(document.getElementById(draggedElId));
}