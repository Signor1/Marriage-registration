function readFile() {
  const reader = new FileReader();
  const file = document.getElementById("file").files[0];
  const icon = document.getElementById("icon");
  const imgHolder = document.getElementById("result");

  reader.onload = function (e) {
    icon.style.display = "none";
    imgHolder.style.display = "block";
    imgHolder.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
