
function createGrid(event){
    console.log('function worked')
    let number = parseInt(document.querySelector('#inputbox').value);
    let container = document.getElementById('container')

    for(i=0;i<number;i++){
        console.log(i)
        let row = document.createElement('div');
        row.style.display = 'flex'
        
        row.textContent = i
        // console.log('function entered for loop');
        row.id = `row${i}`;
        
        for(j=0;j<number;j++){
            let col = document.createElement('div')
            col.style.flexGrow = 1;
            col.style.border = 'solid'
            col.style.borderColor = 'red'
            col.textContent = j
            col.style.backgroundColor = 'white'
            col.id = `r${i}j${j}`
            row.appendChild(col)
        }
        container.appendChild(row);
        
    }
    console.log('function ran')
}
console.log('script started')
const button = document.querySelector('#creategrid');

// button.addEventListener('click', createGrid(event));
button.addEventListener('click', createGrid);