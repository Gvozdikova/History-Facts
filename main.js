let output = document.querySelector('#output');
let factText = document.querySelector('#factText');

let monthInput = document.querySelector('#monthInput');
let dateInput = document.querySelector('#dateInput');
let bookPart = document.querySelector('.bookmark-part');
let bookList = document.querySelector('.myBookmarks');

let button = document.querySelector('#searchStart');
let addButton = document.querySelector('#bookmark');
button.addEventListener('click', getFactsFetch);
addButton.addEventListener('click', addBookmark);

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
      monthInput.value = '';
      dateInput.value = '';
    })
    .catch(function(err){
      console.log(err);
    });
}

function addBookmark(){
  let item = document.createElement('li');
  item.innerHTML = factText.innerText;
  bookPart.style.display = 'block';
  bookList.appendChild(item);
  output.style.display = 'none';
}
