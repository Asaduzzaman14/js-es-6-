const getDataFormLOcalStrage = () => {
    const cart = getCart()
    for (data in cart) {
        setProductInUi(data)
    }

}


const getValue = () => {
    const input = document.getElementById('input-fild')
    const inputValue = input.value
    if (!inputValue) {
        alert('input is empty')
        return
    }

    setProductInUi(inputValue)

    // set product in the  cart 
    setItemInLocalStorage(inputValue)

    input.value = ''
}


const setProductInUi = (product) => {

    let ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = product

    ul.appendChild(li)

}


// get cart form
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartOBJ;
    if (cart) {
        cartOBJ = JSON.parse(cart)
    } else {
        cartOBJ = {}
    }
    return cartOBJ;
}


const setItemInLocalStorage = (productName) => {
    const cart = getCart()
    // console.log(productName);
    if (cart[productName]) {
        cart[productName] = cart[productName] + 1
    } else {
        cart[productName] = 1
    }
    console.log(cart);
    const cartStringfid = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfid)

}
getDataFormLOcalStrage()

let clearBtn = () => {
    document.getElementById('product-container').textContent = ''
    localStorage.removeItem('cart')
}