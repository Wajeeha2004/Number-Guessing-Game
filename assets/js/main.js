let random_number = Math.trunc(Math.random() * 100 + 1);
let guesses = [];
const input = document.querySelector(".game__input");
const message = document.querySelector(".game__message");
const hint = document.querySelector(".game__hint");
const gifEl = document.querySelector(".game__gif");
const guessesEl = document.querySelector(".game__guesses");
const submitBtn = document.querySelector(".game__submit");
const resetBtn = document.querySelector(".game__reset");
submitBtn.addEventListener("click", play_game);
resetBtn.addEventListener("click", reset_game);
function play_game() {
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 100) {
    setMessage("Please enter a number between 1-100", "assets/images/wrong.gif");
    return;
  }
  if (!guesses.includes(guess)) {
    guesses.push(guess);
  }
  guessesEl.textContent = "Your guesses: " + guesses.join(", ");
  if (guess === random_number) return you_got_it();
  if (guesses.length === 5) show_hint();
  if (Math.abs(guess - random_number) < 10) super_close();
  else if (Math.abs(guess - random_number) > 50) far_away();
  else guess_again();
}
function you_got_it() {
  setMessage("🎉 You got it!!", "assets/images/got_it.gif");
  hint.textContent = "Click Reset to play again!";
}
function super_close() {
  setMessage("🔥 You're super close!", "assets/images/so_close.gif");
}
function far_away() {
  setMessage("🥶 You're so far away!", "assets/images/so_far.gif");
}
function guess_again() {
  setMessage("🤔 Guess again!", "assets/images/guess_again.gif");
}
function setMessage(text, gif) {
  message.textContent = text;
   gifEl.src = gif;
}
function reset_game() {
  random_number = Math.trunc(Math.random() * 100 + 1);
  guesses = [];
  input.value = "";                       
  message.textContent = "LET'S PLAY";    
  hint.textContent = "";                  
  gifEl.src = "";                         
  guessesEl.textContent = "";          
}
function show_hint() {
  hint.textContent =
    `💡 HINT: The number is between ${Math.max(1, random_number - 5)} and ${Math.min(100, random_number + 5)}`;
}
