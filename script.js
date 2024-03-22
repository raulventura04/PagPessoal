function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //img

    const img = document.querySelector("#profile img")
    
    if (html.classList.contains("light")) {
        img.setAttribute("src","./assets/ft light.png")
    } else {
        img.setAttribute("src", "./assets/ft dark.png")
    }
}