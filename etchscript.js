function clearGrid(){
    let container = document.getElementById('container');
    container.innerHTML = '';
}

function createGrid(event){
    console.log('function worked')
    let number = parseInt(document.querySelector('#inputbox').value);
    let dimension = 960/number 
    let scale = 100/number
    number*=number
    let container = document.getElementById('container')
        
        for(j=1;j<=number;j++){
            let col = document.createElement('div')
            col.style.border = 'solid';
            col.style.borderColor = 'black';
            col.style.height = `${dimension}px`;
            col.style.boxSizing = 'border-box';

            col.textContent = j;
            col.style.backgroundColor = 'white';
            col.className = 'cell';
            col.style.flex = `1 0 ${scale}%`;
            container.appendChild(col);
            col.addEventListener('mouseenter', () => {
                col.style.backgroundColor = 'black';
              });
            //   col.addEventListener('mouseleave', () => {
            //     col.style.backgroundColor = 'white';
            //   });
        }
        // container.appendChild(row);
        
    // }
    console.log('function ran')
}
console.log('script started')
const button = document.querySelector('#creategrid');

// button.addEventListener('click', createGrid(event));
button.addEventListener('click', createGrid);

const clearButton = document.querySelector('#clear');

// button.addEventListener('click', createGrid(event));
clearButton.addEventListener('click', clearGrid);


