function goTo() {
  var inputValue = document.getElementById('dungeonInput').value
  if (inputValue === "Hell") {
    window.location = 'https://HellHole.rasmusnordberg2.repl.co';
  }
  if (inputValue === "Info") {
    window.location = 'https://rasmus.gay';
  }
}

document.querySelector("#dungeonInput").onkeydown = e => {
  if (e.key == "Enter") {
    goTo();
  }
}