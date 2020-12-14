var turn= 0
var turnDisplay = document.querySelector('#turn')
var victory = false
var playerMarker
var ennemyMarker
var fullBoard = document.querySelector('.fullboard')
var opponentSelection = document.querySelector('.opponent-selection')
var chooseX = document.querySelector('#choose-x')
var chooseY =  document.querySelector('#choose-o')
var board = document.querySelectorAll('.board')
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')
var box4 = document.querySelector('#box4')
var box5 = document.querySelector('#box5')
var box6 = document.querySelector('#box6')
var box7 = document.querySelector('#box7')
var box8 = document.querySelector('#box8')
var box9 = document.querySelector('#box9')
var replay = document.querySelector('#replay')
//********************************************
// Functions
//********************************************
function selectX(){
    playerMarker = 'X';
    ennemyMarker ='O';
    console.log(playerMarker);
}
function selectY(){
    playerMarker = 'O';
    ennemyMarker ='X';
    console.log(playerMarker);
}

function displayGame(){
    opponentSelection.style.display = 'none'
    fullBoard.style.visibility = 'visible'
}
function changeTurnMessage(turnPlayer) {
    turnDisplay.textContent = 'Player ' +turnPlayer + ' turn.'
}
function reinitializeTurnMessage(turnPlayer){
    turnDisplay.textContent = 'Welcome back, it is player '+turnPlayer+' turn'
}
function selectWinner(b1,b2,b3){
    b1.classList.add('win');
    b2.classList.add('win');
    b3.classList.add('win');
    turnDisplay.textContent = 'Player ' + b1.innerHTML +' is the winner.';
    turnDisplay.style.fontsize = "35px";
    replay.style.visibility = 'visible'
}

function getWinner(){
    if (box1.innerHTML !== ''  && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
       selectWinner(box1,box2,box3);
    if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinner(box4,box5,box6)
    if (box7.innerHTML !== ''  && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinner(box7,box8,box9);
    if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML == box7.innerHTML)
        selectWinner(box1,box4,box7);
    if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinner(box2,box5,box8);
    if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinner(box3,box6,box9);
    if (box7.innerHTML !== '' && box7.innerHTML === box5.innerHTML && box7.innerHTML === box3.innerHTML)
        selectWinner(box7,box5,box3);
    if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinner(box1,box5,box9);
}
function cleanBoard() {
    for (var i=0; i<board.length; i++){
        board[i].classList.remove('win')
        board[i].innerHTML = ''
        reinitializeTurnMessage(playerMarker)
        replay.style.visibility = 'hidden'
    }
}


//********************************************
// select marker and transition to full board
//********************************************
chooseX.addEventListener('click',function(){
    selectX();
    displayGame();
    changeTurnMessage(playerMarker);
})
chooseY.addEventListener('click', function(){
    selectY();
    displayGame();
    changeTurnMessage(playerMarker);
 })
//********************************************
//Play game
//********************************************
for (var i=0; i<board.length; i++){
    board[i].onclick = function(){
        if(this.textContent !== 'X' && this.textContent !== 'O'){
            if(turn % 2 === 0){
                this.textContent = playerMarker;
                changeTurnMessage(ennemyMarker);
                getWinner()
                turn += 1
                console.log('turn ' +turn)
            }else{
                this.textContent = ennemyMarker;
                changeTurnMessage(playerMarker)
                getWinner()
                turn +=1;
                console.log('turn ' +turn)
            }
        }
    }
}


//********************************************
// Restart method
//********************************************
replay.addEventListener('click', function(){
    cleanBoard()
})
