let value = document.getElementById("value");

let count = 0;

document.getElementById("btn-decrease").addEventListener("click", () => {
  count--;
  value.textContent = count;
});

document.getElementById("btn-increase").addEventListener("click", () => {
  count++;
  value.textContent = count;
});

document.getElementById("btn-reset").addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});
