function solve() {
  let textArea = document.getElementById('input');
  let sentences = textArea.value.split('.').filter(s => s !== '');
  let output = document.getElementById('output');
  while (sentences.length > 0){
    let text = sentences.splice(0,3).join(". ") + '.';
    let p = document.createElement('p');
    p.textContent = text;
    output.appendChild(p);
  }
    
}