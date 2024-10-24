let productss=[];

let dispaly=()=>{
    document.getElementById("box").innerHTML="";
    let count=0
    productss.map((ele,i)=>{
        let title=document.createElement("h2")
        title.innerHTML=ele.title
        
        let content=document.createElement("p")
        content.innerHTML=ele.content
        
        let price=document.createElement("p")
        price.innerHTML=ele.price
        
        let img=document.createElement("img")
        img.src=ele.img
        
        let cate=document.createElement("p")
        cate.innerHTML=ele.cate
        
        count++;
        
        let btn=document.createElement("button")
        btn.innerHTML="LIKE"

        btn.addEventListener("click",()=>{
            alert("Thnk you for visite  site.....")

        })

        let btn1=document.createElement("button")
        btn1.innerHTML="DELETE"

        btn1.addEventListener("click",()=>{
            productss.splice(i,1);
            dispaly();
        })

        let div=document.createElement("div")
        div.append(img,title,content,price,cate,btn,btn1)
        document.getElementById("box").append(div)

    })
    document.getElementById("total").innerHTML=`Total Product is:${count}`
}


let products=(e)=>{
    e.preventDefault();

    let title=document.getElementById("title").value
    let content=document.getElementById("content").value
    let price=document.getElementById("price").value
    let img=document.getElementById("img").value
    let cate=document.getElementById("cate").value

    let product={
        title:title,
        content:content,
        price:price,
        img:img,
        cate:cate
    }

    if(title.length<2){
        document.getElementById("t-error").innerHTML="Please enter at least 2 character";
        document.getElementById("t-error").style.color="red"
        return
    }
    if(content.length<2){
        alert("Please enetr valid content")
        return
    }
  

    if(price<1){
        alert("Please enter garether then 0")
        return
    }

    productss.push(product);
    console.log(productss)
    dispaly()
}
document.getElementById("form").addEventListener("submit",products)