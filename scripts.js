const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

// Formatar para moeda
function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL', 
    })
    return newValue
}

// for each
function showAll(productsArray) {
    let myLi = '' //Para resetar a função, criou como opção a cariavel dentro do bloco do escopo
    productsArray.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
            </li>
         `
    })
    list.innerHTML = myLi
}

// map
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, //spread operator
        price: product.price * 0.9, //dar 10% de desconto
    }))


    showAll(newPrices)
    console.log(newPricess)
}

// reduce
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    <li>
       <p>O valor total dos itens é ${formatCurrency(totalValue)}</p>
    </li>
    `
}
//filter
function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}
// ouvintes
buttonShowAll.addEventListener('click', () => showAll(menuOptions)) //Função anonima para esperar clicar no botao devido os parenteses
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)