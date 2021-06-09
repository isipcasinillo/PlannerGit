var textEl = document.getElementById('text1'); // textbox
var saveEl = document.getElementById('submit');

var stored = localStorage.getItem('item');
textEl.textContent = stored;

saveEl.addEventListener('click', saveObj);

function saveObj() {
  var str = textEl.value;
  var set = localStorage.setItem('item', str);
}

// ---------------------------------------------------//

var textEl2 = document.getElementById('text2'); // textbox
var saveEl2 = document.getElementById('submit2');

var stored2 = localStorage.getItem('item2');
textEl2.textContent = stored2;

saveEl2.addEventListener('click', saveObj2);

function saveObj2() {
  var str2 = textEl2.value;
  var set2 = localStorage.setItem('item2', str2);
}

// -------------------------------------------------------//
var textEl3 = document.getElementById('text3'); // textbox
var saveEl3 = document.getElementById('submit3');

var stored3 = localStorage.getItem('item3');
textEl3.textContent = stored3;

saveEl3.addEventListener('click', saveObj3);

function saveObj3() {
  var str3 = textEl3.value;
  var set3 = localStorage.setItem('item3', str3);
}
