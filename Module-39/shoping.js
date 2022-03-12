const displayLocalStrageCart = () => {
    const cart = getcart()
    console.log(cart);
    for (name in cart) {
        newProduct(name)
    }
}

let addItem = () => {
    const input = document.getElementById('product-name');
    const inputValue = input.value
    if (!inputValue) {
        return;
    }

    //  display in the ui
    newProduct(inputValue)

    addProduct(inputValue)
    input.value = ''
}


const newProduct = (name) => {
    const product = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerHTML = name
    product.appendChild(li)
}

const getcart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj;
}


const placeOrder = () => {
    document.getElementById('product-container').textContent = ''
    localStorage.removeItem = 'cart'

}

const addProduct = (name) => {
    const cart = getcart()
    // cart[name] = 1;
    if (cart[name]) {
        cart[name] += 1
    } else {
        cart[name] = 1
    }

    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied)

}

displayLocalStrageCart()