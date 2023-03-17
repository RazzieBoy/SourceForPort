function goTo() {
  var inputValue = document.getElementById('input').value
  if (inputValue === "Hell") {
    window.location = 'https://HellHole.rasmusnordberg2.repl.co';
  }
  if (inputValue === "Dungeon") {
    window.location = '/dungeon.html';
  }
}

document.querySelector("#input").onkeydown = e => {
  if (e.key == "Enter") {
    goTo();
  }
}