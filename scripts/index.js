// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
//console.log("in")

import { navbar } from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar()

// import {countryNews,append} from "./fetch.js"

let countryNews = async () => {
    // console.log("in")
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

    let res = await fetch(url)
    let data = await res.json()
    //console.log((data.articles))
    append(data.articles)
}
countryNews()

let results = document.getElementById("results")

let append = (data) => {
    results.innerHTML = null
    //console.log(data)
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


let countries = document.getElementById("sidebar").children
//console.log(countries)

countryNews()
async function cfunction() {
    console.log(this.id)
    let query = this.id
    results.innerHTML = null

    // console.log("in")
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    append(data.articles)


}

for (let ele of countries) {
    ele.addEventListener("click", cfunction)
}


let search = async (e) =>                
{
    if(e.key === "Enter")  
    {  
        
        let query = document.getElementById("search_input").value
      localStorage.setItem("query",JSON.stringify(query))

        results.innerHTML = null

    // console.log("in")
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    append(data.articles)
    
    window.location.href = "search.html"

    }
}

document.getElementById("search_input").addEventListener("keydown",search)