function attachGradientEvents() {
    let divToHover = document.getElementById('gradient');
    let resultDiv = document.getElementById('result');

    const mousemove = (e) => {
       
        let width = e.target.offsetWidth;
        let currentPosition = e.offsetX;
        let percentage = (currentPosition/width)*100;

        resultDiv.textContent = `${Math.floor(percentage)}%`
       
    };

    divToHover.addEventListener('mousemove', mousemove);

}