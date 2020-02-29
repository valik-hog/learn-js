var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
var addressId = "address";
var addressEl = document.getElementById(addressId);
var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

firstNameEl.value ="Valik";
lastNameEl.className = "last-name-input default-input error-input";
lastNameEl.title = "Wrong last name";
avatarEl.scr = "fff.jpg"
 
avatarEl.title = "I am avatar";
citiesEl.value = "Minsk2";
hobbiesEl.value = "I have not interests";

avatarWrapperEl.innerHTML = "<ul id=\'list\'><li>1</li><li>2</li></ul>";

var listId = "list";
var numberList = document.getElementById('ListId');


window.alert(numberList.innerHTML);