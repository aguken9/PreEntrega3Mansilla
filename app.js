function Cambio1(){
    foto.src="assets/Z.jpg"
        }
function Cambio2(){
    foto.src="assets/zwhite.jpg"
}


function Cambio3(){
    fotos.src="assets/estanteria.jpg"
        }
function Cambio4(){
    fotos.src="assets/marcas.jpg"
}


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const mContainer = document.getElementById("modal-container")
const zapatillas = [ 
    {
       id : 1,
       marca : "Nike",
       modelo : "Kobe",
       precio : 1000,
       img: "assets/nike.jpg",
    },

    {
        id : 2,
        marca : "Adidas",
        modelo : "Classic",
        precio : 2000,
        img: "assets/adidas.jpg"
     },

     {
        id : 3,
        marca : "Fila",
        modelo : "Disruptor",
        precio: 3000,
        img: "assets/fila.jpg"
     },

     {
        id : 4,
        marca : "Puma",
        modelo : "Lamelo",
        precio: 4000,
        img: "assets/pumalamelo.jpg"
     },

     {
        id : 5,
        marca : "New Balance",
        modelo : "504",
        precio : 5000,
        img: "assets/newbalance.png"
     }
];

let carrito = [] ;

//{}
zapatillas.forEach((zapas) => {
    let content = document.createElement("div");
    content.className= "card";
    content.innerHTML = `
    <img src=" ${zapas.img}">
    <h3>${zapas.marca}</h3>
    <h3>${zapas.modelo}</h3>
    <p>${zapas.precio} $ </p>

    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText= "Comprar";
    comprar.classname= "Comprar";

    content.append(comprar)
    comprar.addEventListener("click", () =>{
       carrito.push({
        id: zapas.id,
        marca: zapas.marca,
        modelo: zapas.modelo,
        precio: zapas.precio,
        img: zapas.img,
       })
    console.log(carrito)
     })
 })

  verCarrito.addEventListener("click", () =>{
    mContainer.innerHTML = ""
    mContainer.style.display = "flex"
    const mHeader = document.createElement("div");
    mHeader.className= "modal-header";
    mHeader.innerHTML = `
    <h1 class= "modal-header-tittle">Carrito</h1>
    `;
    mContainer.append(mHeader);

    const mButton = document.createElement("h1");
    mButton.innerText= "x";
    mButton.classname= "modal-header-button";

    mButton.addEventListener("click", () => {
        mContainer.style.display = "none"
    });

    mHeader.append(mButton);

    carrito.forEach((zapas) =>{
    let carritoContent = document.createElement("div")
    carritoContent.classname= "modal-content"
    carritoContent.innerHTML= ` 
        <img src=" ${zapas.img}">
        <h3>${zapas.marca}</h3>
        <h3>${zapas.modelo}</h3>
        <p>${zapas.precio} $ </p>
        `;
    mContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalComprado = document.createElement("div");
    totalComprado.classname= "total-content";
    totalComprado.innerHTML = ` Total a abonar ${total} $
    <button type ="submit">Comprar</button>`;
    mContainer.append(totalComprado);
})