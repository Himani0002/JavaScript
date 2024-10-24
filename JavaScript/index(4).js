
let products = [];

let dispaly = () => {
    products.map((ele) => {
        let img = document.createElement('img')
        img.src = ele.img

        let title = document.createElement('h2')
        title.innerHTML = ele.title

        let div = document.createElement('div')
        div.append(img, title)
        document.getElementById('parent-box').append(div)

    })
}

let product = (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value
    let img = document.getElementById('img').value


    let product = {
        title: title,
        img: img,
    }

    console.log(product)
    products.push(product)
    console.log(products)
    dispaly(product)

}

document.getElementById("data").addEventListener("submit", product)