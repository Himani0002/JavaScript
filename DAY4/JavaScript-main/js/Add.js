let product = JSON.parse(localStorage.getItem("products")) || []

const handleProduct = (e) => {
  e.preventDefault()

  let data = {
    title: document.getElementById("title").value,
    img: document.getElementById("img").value,
    category: document.getElementById("country").value,
    country: document.getElementById("country").value
  }

  product.push(data)
  localStorage.setItem("products", JSON.stringify(product))
  window.location.href = "/index.html"
}

document.getElementById("product").addEventListener("submit", handleProduct)
