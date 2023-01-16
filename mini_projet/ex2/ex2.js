function draw(sum, segment) {
    const percent = (segment / sum) * 100;

    const progressBar = document.createElement("div");
    progressBar.style.width = '100%';
    progressBar.style.height = '20px';
    progressBar.style.backgroundColor = '#ddd';

    const filledDiv = document.createElement("div");
    filledDiv.style.width = `${percent}%`;
    filledDiv.style.height = '100%';
    filledDiv.style.backgroundColor = '#4CAF50';
    progressBar.appendChild(filledDiv);

    return progressBar;
}

const bar = draw(100, 50);
const container = document.getElementById('bar-container');
container.appendChild(bar);  