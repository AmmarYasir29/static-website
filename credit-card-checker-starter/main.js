function validateCred() {
  const number = document.getElementById("num").value;
  if (number === "") {
    alert("Type Number!");
    return;
  }
  let arr = [];
  arr.push(number);
  let total = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let currValue = arr[i];
    if ((arr.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
  }
  total % 10 === 0 ? alert("Valid!") : alert("Not correct");
  return;
}
