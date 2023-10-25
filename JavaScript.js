function myMove() {
  let id = null;
  const elem = document.getElementById("bom");
  let pos = 5;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 641) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.marginLeft = "595px";
      elem.style.right = pos + "-950px";
      elem.style.left = pos + "px";
    }
  }
}
