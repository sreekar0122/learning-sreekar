let ref = document.getElementById('container');
ref.addEventListener('dblclick', ShowmagOne)
ref.addEventListener('dblclick', ShowmagTwo)
function ShowmagOne() {
    alert("Image 1 has been clicked")
}
function ShowmagTwo() {
    alert("Image 2 has been clicked")
}
function removeEvent(){
    ref.removeEventListener('dblclick', ShowmagOne)
    alert("Event listener removed successfully")
}