
let DOMpic = document.getElementById("pic")
let NameFor = document.getElementById("name")
let arr = []
function gettingInfo(){

    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data =>{  
           let info = data.results;
            
           for(let i =0 ; i <info.length;i++){
      
  
            let arr =[i]


            let bigDiv = document.createElement("div")
            let newDiv = document.createElement("div")
            let imgDiv = document.createElement("div")
            
            let content = document.createTextNode(arr)
            let Names = document.createTextNode(info[i].name)
            let pic = info[i].image
        
            let oldDiv = document.getElementById("pict")    
            newDiv.style.cssText = "  width: 20vw; height: 35vh; display: flex; justify-content: center; align-items: center; gap: 1px; flex-direction: column;"

            imgDiv.style.cssText = `background-image: url(${pic});  width: 20vw; height: 35vh; background-size: auto; background-repeat: no-repeat; display:flex; justify-content: center; align-items: center;   `

            
            bigDiv.appendChild(newDiv)
            newDiv.appendChild(Names)
            newDiv.appendChild(imgDiv)


            oldDiv.appendChild(newDiv)

            
            document.addEventListener("DOMContentLoaded", ()=>{

                let screen = window.matchMedia("(max-width: 600px)")
            
                if (screen.matches){
                    newDiv.style.cssText = "width: 100vw; height: 35vh; display: flex; justify-content: center; align-items: center; gap: 1px; flex-direction: column;"
                }
            })



            
            
           }
  
          });
}



gettingInfo();