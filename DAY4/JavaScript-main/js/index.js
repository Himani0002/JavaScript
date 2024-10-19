
let product = JSON.parse(localStorage.getItem("products")) || []


const objectMapper = (data) => {
    document.getElementById("box").innerHTML = ""
    data.map((ele) => {
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let category = document.createElement("button")
        category.innerHTML = ele.category
        category.setAttribute("class", "btn btn-info")
        let buy = document.createElement("button")
        buy.innerHTML = "Buy"
        buy.setAttribute("class", "btn btn-info")
        let div = document.createElement("div")
        div.setAttribute("class", "col-4")
        div.append(img, title, price, category, buy)

        document.getElementById("box").append(div)

    })

}
objectMapper(product)


const search = (val) => {

    let temp = product.filter((ele) => ele.title.includes(val))
    console.log(temp);

    objectMapper(temp)

}

const handleSearch = (e) => {
    e.preventDefault()
    let val = document.getElementById("search").value
    search(val)
}



const handleSort = (val) => {
    if (val == "htl") {
        let temp = product.sort((a, b) => b.price - a.price)
        objectMapper(temp)
    }
    else {
        let temp = product.sort((a, b) => a.price - b.price)
        objectMapper(temp)
    }
}


const handleFilter = (val) => {

    let temp = product.filter((ele) => ele.category == val)
    objectMapper(temp)
}



document.getElementById("search-form").addEventListener("submit", handleSearch)
document.getElementById("lth").addEventListener("click", () => handleSort("lth"))
document.getElementById("htl").addEventListener("click", () => handleSort("htl"))
document.getElementById("kid").addEventListener("click", () => handleFilter("kid"))
document.getElementById("male").addEventListener("click", () => handleFilter("male"))
document.getElementById("female").addEventListener("click", () => handleFilter("female"))
