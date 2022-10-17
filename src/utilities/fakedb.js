// const addToDb = (id) => {
//     let shoppingCart = {};

//     const savedCart = localStorage.getItem('shopping-cart');

//     if (savedCart) {
//         shoppingCart = JSON.parse(savedCart);
//     }

//     const quantity = shoppingCart[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else {
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

// }
// export { addToDb }

const addToDB = (id) => {
    let shoppingCart = getStoredCart();

    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('Shopping-cart');
    // console.log(storedCart);
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}



export { addToDB, getStoredCart, removeFromDb }




// // use local storage to manage cart data
// const addToDb = id =>{
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart);
//     }

//     // add quantity
//     const quantity = shoppingCart[id];
//     if(quantity){
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else{
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

// const deleteShoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     deleteShoppingCart
// }