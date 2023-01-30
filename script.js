let taskbar=document.querySelector(".taskbar")
let startmenu=document.querySelector(".startmenu")
let body=document.getElementsByClassName("body")[0]
body.addEventListener("click",()=>{
    console.log("Hi")
    if(startmenu.style.bottom == "0vh"){
        startmenu.style.bottom = "-100vh"
      }
    //   else{
    //       startmenu.style.bottom = "0vh"
    //   }
})
taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "0vh"){
              startmenu.style.bottom = "-100vh"
            }
            else{
                startmenu.style.bottom = "0vh"
            }
            

})


