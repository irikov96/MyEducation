function solve() {
  let textBox = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  if (convention === 'Camel Case') {
    for (let i = 0; i < textBox.length; i++) {
      if (textBox[i] === " ") {
        result += textBox[i + 1].toUpperCase();
        i++;
      } else {
        result += textBox[i].toLowerCase();
      }
    }
  } else if (convention === 'Pascal Case') {
    result += textBox[0].toUpperCase();
    for (let y = 1; y < textBox.length; y++) {
      if (textBox[y] === " ") {
        result += textBox[y + 1].toUpperCase();
        y++;
      } else {
        result += textBox[y].toLowerCase();
      }
    }

  } else {
    result = 'Error!'
  }

  let resultDiv = document.getElementById('result');
  resultDiv.textContent = result;

}