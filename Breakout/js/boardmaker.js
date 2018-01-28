

var g_checker = false;


/*function that checks if clicked on the boardmaker*/
function checkIn(i,j){
  g_checker = true;

  var index = document.getElementsByClassName('row-'+i)[0].children[j];



  g_newBoard[i][j] += 1;

  if(g_newBoard[i][j] > 3){
    index.setAttribute("style", "background-color:white;");
    g_newBoard[i][j] = 0;
  }

  if(g_newBoard[i][j] === 3){
    index.setAttribute("style", "background-color:#D79922;");
  }

  if(g_newBoard[i][j] === 1){
    index.setAttribute("style", "background-color:#4056A1;");
  }

  if(g_newBoard[i][j] === 2){
    index.setAttribute("style", "background-color:#F13C20;");
  }
}

/*clicked off*/
function checkOut(){
  g_checker = false;
}


/*change the board according to the selection*/
function change(i,j){
  if(g_checker){
    var index = document.getElementsByClassName('row-'+i)[0].children[j];



    g_newBoard[i][j] += 1;

    if(g_newBoard[i][j] > 3){
      index.setAttribute("style", "background-color:white;");
      g_newBoard[i][j] = 0;
    }

    if(g_newBoard[i][j] === 3){
      index.setAttribute("style", "background-color:#D79922;");
    }

    if(g_newBoard[i][j] === 1){
      index.setAttribute("style", "background-color:#4056A1;");
    }

    if(g_newBoard[i][j] === 2){
      index.setAttribute("style", "background-color:#F13C20;");
    }
  }
}

var g_newBoard =[
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
];

/*apply the new board*/
function applyBoard(){
  g_wall = new Wall(g_newBoard,0,0);
  reset();
}


/*reset the board */
function reset(){
  g_newBoard =[
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ];
  var index = document.getElementsByClassName('row');

  for (var i = 0; i < index.length; i++) {
    for (var j = 0; j < index[i].children.length; j++) {
      index[i].children[j].setAttribute("style", "background-color:white;");
    }

  }



}
