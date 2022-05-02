
let countryNews = async () => {
    // console.log("in")
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

    let res = await fetch(url)
    let data = await res.json()
    //console.log((data.articles))
    append(data.articles)
}




let append = (data,results) => {
 
    
    data.forEach(function ({ title, description, urlToImage }) {
        let maindiv = document.createElement("div")
        maindiv.style.display = "flex"

        let div = document.createElement("div")
        let Title = document.createElement("h3")
        let Description = document.createElement("p")
        let image = document.createElement("img")
        image.src = urlToImage
        Title.innerText = title
        Description.innerText = description

        div.append(Title, Description)
        maindiv.append(image, div)

        results.append(maindiv)

    })
}
export{countryNews,append}