const menu = document.getElementById("hamMenu")
const popUp= document.getElementById("popup")


const disapper=()=>{
  popUp.style.display='none'
}
disapper()

const apper=()=>{
  popUp.style.display='block'
}

menu.addEventListener('click',()=>{
    console.log("clicked");
    if(popUp.style.display==='none'){
       apper()
    }
    else{
        disapper()
    }
    
   
    
})