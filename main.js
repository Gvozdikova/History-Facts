let output = document.querySelector('#output');
let factText = document.querySelector('#factText');
let monthInput = document.querySelector('#monthInput');
let dateInput = document.querySelector('#dateInput');
let bookPart = document.querySelector('.bookmark-part');
let bookList = document.querySelector('.myBookmarks');
let main = document.querySelector('.main');
let monthBtn = document.querySelector('#monthBtn');
let dayBtn = document.querySelector('#dayBtn');
let button = document.querySelector('#searchStart');
let addButton = document.querySelector('#bookmark');
let searchInput = document.querySelector('#searchInput');

button.addEventListener('click', getFactsFetch);
addButton.addEventListener('click', addBookmark);
monthBtn.addEventListener('click', plusMonth);
dayBtn.addEventListener('click', plusDay);
searchInput.addEventListener('keyup', filterFacts);

//XMLHttpRequest

// button.addEventListener('click', getFactsAjax);
// function getFactsAjax() {
//   let month = monthInput.value;
//   let date = dateInput.value;
//
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://numbersapi.com/'+ month + '/' + date + '/date');
//
//   xhr.onload = function(){
//     if(this.status == 200 && month !='' && date !=''){
//       output.style.display = 'block';
//       factText.innerHTML = this.responseText;
//     }
//   }
//
//   xhr.send();
//   }

//Fetch

function getFactsFetch(){
    let month = monthInput.value;
    let date = dateInput.value;
    fetch('http://numbersapi.com/'+ month + '/' + date + '/date')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      output.style.display = 'block';
      factText.innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}

//Добaвление в избранное
function addBookmark(){
  // monthInput.value = '';
  // dateInput.value = '';
  let item = document.createElement('li');
  item.innerHTML = factText.innerText;
  bookPart.style.display = 'block';
  bookList.appendChild(item);
  output.style.display = 'none';
  main.style.alignItems = 'flex-start';
}

//Счетчик для месяцев
function plusMonth(){
  let num = parseInt(monthInput.value);
  let res;
  if (num<12){
    res = num +1;
  }else{
    res = 1;
  }
  monthInput.value = res;
}

//Счетчик по дням
function plusDay(){
  let num = parseInt(dateInput.value);
  let res;
  if (num<31){
    res = num +1;
  }else{
    res = 1;
  }
  dateInput.value = res;
}

//Фильтр по добавленным фактам
function filterFacts(){
  let val = searchInput.value.toLowerCase();
  let ul = document.querySelector('.myBookmarks');
  let li = ul.querySelectorAll('li');
  for (i = 0; i<li.length; i++){
    if(li[i].innerHTML.toLowerCase().indexOf(val) != -1){
      li[i].style.display = '';
    }else{
      li[i].style.display = 'none';
    }
  }
}
