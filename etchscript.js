function stripNums(rgb){
    let result = ''
    let allowed = '1234567890,'

    for (i=0; i<rgb.length; i++ ){
        if (allowed.includes(rgb[i])){
            result+=rgb[i]
        }
    }
    result = result.split(',')
    console.log(`here is ${result}`)
    for (i=0; i<result.length; i++ ){
        let work = parseInt(result[i])
        work *= 0.9
        result[i] = Math.round(work)
    }
    console.log(result)
    return `rgb(${result[0]},${result[1]},${result[2]})`
}

function randomRGB(rgb){
    if (rgb==='rgb(255, 255, 255)' ){
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        console.log('a random rgb')
        return `rgb(${r},${g},${b})`
    } else {
        return stripNums(rgb)
    }
}

function clearGrid(){
    let container = document.getElementById('container');
    container.innerHTML = '';
}

function createGrid(event){
    clearGrid()
    console.log('function worked')
    let number = parseInt(document.querySelector('#inputbox').value);
    let dimension = 960/number 
    let scale = 100/number
    number*=number
    let container = document.getElementById('container')
        
        for(j=1;j<=number;j++){
            let col = document.createElement('div')
            col.style.border = 'solid';
            col.style.borderColor = 'lightgrey';
            col.style.height = `${dimension}px`;
            col.style.boxSizing = 'border-box';

            //col.textContent = j;
            col.id = `cell${j}`
            col.style.backgroundColor = 'rgb(255,255,255)';
            col.className = 'cell';
            col.style.flex = `1 0 ${scale}%`;
            container.appendChild(col);
            // col.addEventListener('mouseenter', () => {
            //     col.style.backgroundColor = randomRGB();
            //   });
            col.addEventListener("mouseenter", function(event) {
                let bgColor = window.getComputedStyle(event.target).backgroundColor;
                console.log(`bgColor = ${bgColor}`)
                console.log(typeof bgColor)
                col.style.backgroundColor = randomRGB(bgColor)
            
            })
        // container.appendChild(row);
        
    }
    console.log('function ran')
}
console.log('script started')
const button = document.querySelector('#creategrid');

// button.addEventListener('click', createGrid(event));
button.addEventListener('click', createGrid);

const clearButton = document.querySelector('#clear');

// button.addEventListener('click', createGrid(event));
clearButton.addEventListener('click', clearGrid);

