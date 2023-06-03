let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [ 
    {id: 1, title: 'Велосипед', count: 4}, 
    {id: 2, title: 'Велосипед', count: 2}, 
    {id: 3, title: 'Велосипед', count: 10}, 
    {id: 4, title: 'Велосипед', count: 1} 
]
let idCounter = 5
let itemCount = 1


let itemContainer = document.querySelector('.item-container')
let formElem = document.querySelector('form')
let itemTitleInput = document.querySelector('#title')
let itemCountInput = document.querySelector('#count')

formElem.onsubmit = (event) =>{
    event.preventDefault()
    let data = {
        id: idCounter++,
        title: itemTitleInput.value,
        count: itemCount
    }
    products.push(data)
    reRender(products)
    saveToLocalStorage();
    formElem.reset()
}

function reRender(array){
    itemContainer.innerHTML = ''
    render(array)
}

function render(array){
    for(let elem of array){
        let divItem = document.createElement('div')
        divItem.classList.add('item')
        let pTitle = document.createElement('p')
        pTitle.innerText = elem.title
        let divCounter = document.createElement('div')
        divCounter.classList.add('count-container')
        let pCount = document.createElement('p')
        pCount.innerText = elem.count
        let minusBtn = document.createElement('button')
        minusBtn.classList.add('minus')
        minusBtn.innerText = '-'
        let plusBtn = document.createElement('button')
        plusBtn.classList.add('plus')
        plusBtn.innerText = '+'
        divItem.append(pTitle, divCounter)
        divCounter.append(minusBtn, pCount, plusBtn)
        itemContainer.append(divItem)
    
        if (elem.id === idCounter - 1) {
            divItem.classList.add('rotate-scale-up');
        }

        plusBtn.addEventListener('click', (event) => {
            elem.count++
            pCount.innerText = elem.count
            saveToLocalStorage();
        })

        minusBtn.addEventListener('click', (event) => {
            elem.count--
            pCount.innerText = elem.count
            if(elem.count === 0){
                const elemIndex = array.indexOf(elem)
                array.splice(elemIndex, 1)
                reRender(array)
            }
            saveToLocalStorage();
        })
    }
    
    document.body.append(itemContainer)
}

function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}
  
render(products)