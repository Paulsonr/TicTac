var turn = true; //if true x;
var theEnd = false;
const insert = (id) => {
  var clickedCell = document.getElementById(id);
  if (turn && clickedCell.innerHTML === "") {
    clickedCell.innerHTML = "X";
    clickedCell.style.backgroundColor = "green";
    turn = false;
  } else if (!turn && clickedCell.innerHTML === "") {
    clickedCell.innerHTML = "O";
    clickedCell.style.backgroundColor = "red";
    turn = true;
  }
  setTimeout(function () {
    checkWinner();
  }, 100);
};

const gameoverCheck = () => {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") return false;
  }
  theEnd = true;
  return true;
};

const checkWinner = () => {
  var cells = document.getElementsByClassName("cell");
  var twod = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  var cellno = 0;
  for (let i = 0; i < twod.length; i++) {
    for (let j = 0; j < twod.length; j++) {
      twod[i][j] = cells[cellno].innerHTML;
      cellno++;
    }
  }
  for (let i = 0; i < twod.length; i++) {
    for (let j = 0; j < twod.length; j++) {
      if (twod[i][j] !== "") {
        if (twod[i][j] == twod[i][j - 1] && twod[i][j] == twod[i][j + 1]) {
          theEnd = true;
          alert(`${twod[i][j]} wins!`);
        }
        if (
          i - 1 >= 0 &&
          i + 1 < twod.length &&
          twod[i][j] == twod[i - 1][j] &&
          twod[i][j] == twod[i + 1][j]
        ) {
          theEnd = true;
          alert(`${twod[i][j]} wins!`);
        }
        if (
          i - 1 >= 0 &&
          i + 1 < twod.length &&
          twod[i][j] == twod[i - 1][j - 1] &&
          twod[i][j] == twod[i + 1][j + 1]
        ) {
          theEnd = true;
          alert(`${twod[i][j]} wins!`);
        }
        if (
          i - 1 >= 0 &&
          i + 1 < twod.length &&
          twod[i][j] == twod[i - 1][j + 1] &&
          twod[i][j] == twod[i + 1][j - 1]
        ) {
          theEnd = true;
          alert(`${twod[i][j]} wins!`);
        }
      }
    }
  }
  if (gameoverCheck()) alert("Game Over! No one wins!");
  if (theEnd) {
    setTimeout(function () {
      reset();
    }, 200);
  }
  console.log(twod);
};

const reset = () => {
  var cells = document.getElementsByClassName("cell");
  console.log(cells);
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
    cells[i].innerHTML = "";
  }
  theEnd = false;
  turn = true;
};
