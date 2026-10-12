const rockBtn = document.querySelector('.js-rock-btn');
    const paperBtn = document.querySelector('.js-paper-btn');
    const scissorBtn = document.querySelector('.js-scissor-btn');
    const resultEl = document.querySelector('.js-result-el');

    rockBtn.addEventListener('click', () => {
      checkUserMove('rock');
    });
    paperBtn.addEventListener('click', () => {
      checkUserMove('paper');
    });
    scissorBtn.addEventListener('click', () => {
      checkUserMove('scissor');
    });

    function generateComputerMove() {
      const randomNumber = Math.round(Math.random()*2);
      let computerMove = '';
      
      if (randomNumber === 0) {
        computerMove = 'rock';
      } else if (randomNumber === 1) {
        computerMove = 'paper';
      } else if (randomNumber === 2) {
        computerMove = 'scissor'
      }

      return computerMove;
    }

    function checkUserMove(userMove) {
      const computerMove = generateComputerMove();
      const winMsg = `YOU WIN | You: ${userMove} - Computer: ${computerMove}`;
      const loseMsg = `YOU LOSE | You: ${userMove} - Computer: ${computerMove}`;
      const drawMsg = `DRAW | You: ${userMove} - Computer: ${computerMove}`;

      if (userMove === computerMove) {
        console.log(drawMsg);
        resultEl.textContent = drawMsg;
      } else if (userMove === 'rock' && computerMove === 'paper') {
        console.log(loseMsg);
        resultEl.textContent = loseMsg;
      } else if (userMove === 'rock' && computerMove === 'scissor') {
        console.log(winMsg);
        resultEl.textContent = winMsg;
      } else if (userMove === 'paper' && computerMove === 'rock') {
        console.log(winMsg);
        resultEl.textContent = winMsg;
      } else if (userMove === 'paper' && computerMove === 'scissor') {
        console.log(loseMsg);
        resultEl.textContent = loseMsg;
      } else if (userMove === 'scissor' && computerMove === 'rock') {
        console.log(loseMsg);
        resultEl.textContent = loseMsg;
      } else if (userMove === 'scissor' && computerMove === 'paper') {
        console.log(winMsg);
        resultEl.textContent = winMsg;
      }
    }