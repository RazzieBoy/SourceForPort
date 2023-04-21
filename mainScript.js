function goTo() {
  var inputValue = document.getElementById('input').value
  if (inputValue === "Hell") {
    window.location = 'https://HellHole.rasmusnordberg2.repl.co';
  }
  if (inputValue === "Projects") {
    window.location = '/dungeon.html';
  }
  if (inputValue === "Phone") {
    window.location = '/phone.html';
  }
}

document.querySelector("#input").onkeydown = e => {
  if (e.key == "Enter") {
    goTo();
  }
}