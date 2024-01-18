const secimler = ['r', 'p', 's']
const rockBtn = document.querySelector('.button1')
const papperBtn = document.querySelector('.button2')
const scissorBtn = document.querySelector('.button3')
const user = document.querySelector('.user')
const bot = document.querySelector('.bot')
const round = document.querySelector('.round')
const userWin = document.querySelector('.userWin')
const botWin = document.querySelector('.botWin')
const message = document.querySelector('.message')
var tur = 0
var userWinNumber = 0
var botWinNumber = 0
function runbotChoise() {
  const index = Math.floor(Math.random() * secimler.length)
  return secimler[index]
}

function resetGame() {
  tur = 0
  userWinNumber = 0
  botWinNumber = 0
  round.innerHTML = tur
  userWin.innerHTML = userWinNumber
  botWin.innerHTML = botWinNumber
  message.innerHTML = ''
  user.innerHTML = ''
  bot.innerHTML = ''
}

rockBtn.addEventListener('click', function (e) {
  play('r')
})

papperBtn.addEventListener('click', function (e) {
  play('p')
})

scissorBtn.addEventListener('click', function (e) {
  play('s')
})

function play(a) {
  tur++
  const userChoise = a
  const botChoise = runbotChoise()
  bot.innerHTML=botChoise
  if(userChoise=='r'){
    var imagePath = 'image/balacadas.png'
  var imageElement = document.createElement('img')
  imageElement.src = imagePath
  user.innerHTML = ''
  user.appendChild(imageElement)
  }else if(userChoise=='p'){
    var imagePath = 'image/balacakagiz.png'
  var imageElement = document.createElement('img')
  imageElement.src = imagePath
  user.innerHTML = ''
  user.appendChild(imageElement)
  }else if(userChoise=='s'){
    var imagePath = 'image/balacaqayci.png'
  var imageElement = document.createElement('img')
  imageElement.src = imagePath
  user.innerHTML = ''
  user.appendChild(imageElement)
  }
  if(botChoise=='r'){
    var imagePath = 'image/balacadas.png'
  var imageElement = document.createElement('img')
  imageElement.src = imagePath
  bot.innerHTML = ''
  bot.appendChild(imageElement)
  }else if(botChoise=='p'){
    var imagePath = 'image/balacakagiz.png'
  var imageElement = document.createElement('img')
  imageElement.src = imagePath
  bot.innerHTML = ''
  bot.appendChild(imageElement)
  }else if(botChoise=='s'){
    var imagePath = 'image/balacaqayci.png'
  var imageElement = document.createElement('img')
  imageElement.src = imagePath
  bot.innerHTML = ''
  bot.appendChild(imageElement)
  }

  round.innerHTML = tur

  if (
    (userChoise == 'r' && botChoise == 's') ||
    (userChoise == 'p' && botChoise == 'r') ||
    (userChoise == 's' && botChoise == 'p')
  ) {
    userWinNumber++
    userWin.innerHTML = userWinNumber
    message.innerHTML = 'User has won'
  } else if (
    (userChoise == 's' && botChoise == 'r') ||
    (userChoise == 'r' && botChoise == 'p') ||
    (userChoise == 'p' && botChoise == 's')
  ) {
    botWinNumber++
    botWin.innerHTML = botWinNumber
    message.innerHTML = 'Bot has won'
  } else {
    message.innerHTML = 'Draw'
  }
  if (userWinNumber >= 5 || botWinNumber >= 5) {
    if (userWinNumber > botWinNumber) {
        message.innerHTML = "Siz winnersiz";
    } else {
        message.innerHTML = "Get bəxtini təmizlə";
    }
    setTimeout(function () {
        alert(message.innerHTML);
        resetGame();
    },);
}

}
