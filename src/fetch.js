let getData= async (url)=>{
    let res = await fetch(url);
    let data = await res.json();

    return data;
}


let append = (data, container) =>{
    data.forEach(({title,image,price,description})=>{
        let box = document.createElement("div");
        let p = document.createElement("h2");
        p.innerText = title;

        let img = document.createElement("img")
        img.src = image
        img.setAttribute("id","img")

        let rupees = document.createElement("h3")
        rupees.innerText = "$" + price;

        let para = document.createElement("p")
        para.innerText = description;

        box.append(img,p,rupees,para)

        container.append(box);
    })
}