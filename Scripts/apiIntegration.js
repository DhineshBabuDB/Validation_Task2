fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(res=>res.forEach(element => {
                displayfn(element)
            }))

function displayfn(e){
    let create = document.createElement("li")
    create.innerHTML = `<div class="card">`+
                            `<div class="cardimg">`+
                                `<img src="`+e.image+`" alt="">`+
                            `</div>`+
                            `<span>`+e.title+`</span>`+
                        `</div>`

    document.getElementById("uli").appendChild(create)
}
