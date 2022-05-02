// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar()
//  import {countryNews,append} from "./fetch.js"

let data =JSON.parse(localStorage.getItem("news"))
console.log(data)
let detailnews = document.getElementById("detailed_news")
let append = (data) => {
   
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","news")
      

        let div = document.createElement("div")
        let Title = document.createElement("h3")
        let Description = document.createElement("p")
        let image = document.createElement("img")
        image.src = data.urlToImage
        Title.innerText = data.title
        Description.innerText = data.content

        div.append(Title, Description)
        maindiv.append(image, div)

        detailnews.append(maindiv)
}
append (data)


let search = async (e) =>                
{
    if(e.key === "Enter")  
     { 
   var query = document.getElementById("search_input").value
    localStorage.setItem("query",JSON.stringify(query))
    window.location.href = "search.html"

   }
  
}

document.getElementById("search_input").addEventListener("keydown",search)
