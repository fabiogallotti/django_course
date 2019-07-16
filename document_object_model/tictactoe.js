var restart = document.querySelector('#button')
var cells = document.querySelectorAll('td')

function clearBoard() {
  for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
  }

}

restart.addEventListener('click',clearBoard)

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', changeMarker);
}
