function click(e){
  console.log(e);
}

function change(i,j){
  var index = document.getElementsByClassName('row-'+i)[0].children[j];
  console.log(index);


  g_newBoard[i][j] += 1;

  if(g_newBoard[i][j] > 2){
    index.setAttribute("style", "background-color:white;");
    g_newBoard[i][j] = 0;
  }

  if(g_newBoard[i][j] === 1){
    index.setAttribute("style", "background-color:red;");
  }

  if(g_newBoard[i][j] === 2){
    index.setAttribute("style", "background-color:purple;");
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

function applyBoard(){
  g_wall = new Wall(g_newBoard,0,0);
}
