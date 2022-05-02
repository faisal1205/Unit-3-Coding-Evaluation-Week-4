// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar()

//  import {countryNews,append} from "./fetch.js"


 let query = JSON.parse(localStorage.getItem("query")) 
console.log(query)
 



let defalut = async () => {
    // console.log("in")
    let url = `https://masai-mock-api.herokuapp.com/news?q=${JSON.parse(localStorage.getItem("query")) }`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    append(data.articles)
}
defalut()


let search = async (e) =>                
{
    if(e.key === "Enter")  
    {  results.innerHTML = null
      
        let query =document.getElementById("search_input").value
    // console.log("in")
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    append(data.articles)
    
   

    }
}

let append = (data) => {
    results.innerHTML = null
    //console.log(data)
    data.forEach(function (ele) {
        let maindiv = document.createElement("div")
        maindiv.style.display = "flex"
        maindiv.setAttribute("class","news")
maindiv.addEventListener("click",function()
{
    newsFunction(ele)
})
        let div = document.createElement("div")
        let Title = document.createElement("h3")
        let Description = document.createElement("p")
        let image = document.createElement("img")
        image.src = ele.urlToImage
        Title.innerText = ele.title
        Description.innerText = ele.description

        div.append(Title, Description)
        maindiv.append(image, div)

        results.append(maindiv)

    })
}


document.getElementById("search_input").addEventListener("keydown",search)

function newsFunction(ele)
{
    // console.log(ele)
    localStorage.setItem("news",JSON.stringify(ele))
    window.location.href = "news.html"

}