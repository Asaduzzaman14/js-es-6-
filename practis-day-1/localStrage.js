const getLocalStorage = () => {
    const cart = getCart()
    console.log(cart);
    for (product in cart) {
        newProduct(product)
    }
}


const addBtn = () => {
    let input = document.getElementById('input')
    let inputValue = input.value
    // display in the ui
    newProduct(inputValue)

    // add cart 
    addProduct(inputValue)
    input.value = ''

}

const newProduct = (productName) => {
    let ul = document.getElementById('ul')

    let li = document.createElement('li')
    li.innerHTML = productName
    ul.appendChild(li)
}

const getCart = () => {
    let cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj
}

const addProduct = (proName) => {
    const cart = getCart()
    // cart[proName] = 1
    if (cart[proName]) {
        cart[proName] = cart[proName] + 1
    } else {
        cart[proName] = 1
    }

    const carTstringfied = JSON.stringify(cart)
    localStorage.setItem('cart', carTstringfied)

}


getLocalStorage()