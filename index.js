const secimler=['r','p','s']
const rockBtn=document.querySelector('.button1')
const papperBtn=document.querySelector('.button2')
const scissorBtn=document.querySelector('.button3')
const user=document.querySelector('.user')
const bot=document.querySelector('.bot')
const round=document.querySelector('.round')
const userWin=document.querySelector('.userWin')
const botWin=document.querySelector('.botWin')
const message=document.querySelector('.message')
var tur=0
var userWinNumber=0
var botWinNumber=0
function runbotChoise(){
  const index=Math.floor(Math.random()*secimler.length)
  return secimler[index]
}
rockBtn.addEventListener('click',function(e){
  play('r')
})
papperBtn.addEventListener('click',function(e){
  play('p')
})
scissorBtn.addEventListener('click',function(e){
  play('s')
})
function play(a){
  tur++
  const userChoise=a
  const botChoise=runbotChoise()
  user.innerHTML=userChoise
  bot.innerHTML=botChoise
  round.innerHTML=tur
  if(userChoise=='r'&& botChoise=='s'){
    userWinNumber++
    userWin.innerHTML=userWinNumber
    message.innerHTML='User has won'
  }else if(userChoise=='p'&& botChoise=='r'){
    userWinNumber++
    userWin.innerHTML=userWinNumber
    message.innerHTML='User has won'
  }
  else if(userChoise=='s'&& botChoise=='p'){
    userWinNumber++
    userWin.innerHTML=userWinNumber
    message.innerHTML='User has won'
  }
  else if(userChoise=='s'&& botChoise=='r'){
    botWinNumber++
    botWin.innerHTML=botWinNumber
    message.innerHTML='bot has won'
  }else if(userChoise=='r'&& botChoise=='p'){
    botWinNumber++
    botWin.innerHTML=botWinNumber
    message.innerHTML='bot has won'
  }else if(userChoise=='p'&& botChoise=='s'){
    botWinNumber++
    botWin.innerHTML=botWinNumber
    message.innerHTML='bot has won'
  }
  else{
    message.innerHTML='draw'
  }
}