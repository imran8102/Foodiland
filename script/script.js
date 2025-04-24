let mainDropDown = document.querySelector('.main-dropdown')
let toggleBtn = document.querySelector(".toggleBtn")
let dropDownBtn = document.querySelector(".dropdownBtn")
let dropDownMenu = document.querySelector(".dropdown")
let closeBtn = document.querySelector(".closeBtn")
let barsMenu = document.querySelector(".barsMenu")
let communicationsBtn = document.querySelector('.communicationsBtn')
let communicationsMenu = document.querySelector(".communicationsMenu")
let container = document.querySelector(".container")
let heartIcon = document.querySelectorAll(".heart")

//Closing the dropdown menu when the screen size exceeds medium.
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mainDropDown.classList.remove("max-md:hidden")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
        dropDownMenu.classList.remove("max-md:hidden")
    }else{
        mainDropDown.classList.add("max-md:hidden")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
    }
})


// bug : first transition after resize donsn't work
//toggle bars menu
toggleBtn.addEventListener("click", () => {
    if (!dropDownMenu.classList.contains("max-md:hidden"))
        dropDownMenu.classList.add("max-md:hidden")
    if(mainDropDown.classList.contains("max-md:hidden"))
        mainDropDown.classList.remove("max-md:hidden")
    
    if (mainDropDown.classList.contains("max-md:scale-y-0")) {
        mainDropDown.classList.remove("max-md:scale-y-0")
        mainDropDown.classList.add("max-md:scale-y-100")
    } else {
        mainDropDown.classList.remove("max-md:scale-y-100")
        mainDropDown.classList.add("max-md:scale-y-0")
    }
    
    closeBtn.classList.toggle("hidden")
    barsMenu.classList.toggle("hidden")
})

//toggle dropdown
dropDownBtn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
        dropDownMenu.classList.toggle("max-md:hidden")
    }
})


//Checking for clicks outside the dropdown area(or outside of dropdownBtn). 🚀
window.addEventListener("click", (e) => {
    if (!communicationsMenu.contains(e.target) && !communicationsBtn.contains(e.target))
        communicationsMenu.classList.add("max-md:hidden")
    if (!mainDropDown.contains(e.target) && !dropDownMenu.classList.contains("max-md:hidden") && !toggleBtn.contains(e.target)) {
        // mainDropDown.classList.add("max-md:hidden")
        // if (!dropDownMenu.classList.contains("hidden"))
        //     dropDownMenu.classList.add("hidden")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
    }
})

//bug:it dosn't works after open up other dropdowns
//toggle communications menu
communicationsBtn.addEventListener("click", () => {
    // communicationsMenu.classList.toggle("max-md:hidden")
    if (communicationsMenu.classList.contains("max-md:scale-y-90")) {
        communicationsMenu.classList.remove("max-md:scale-y-90")
        communicationsMenu.classList.add("max-md:scale-y-100")
        communicationsMenu.classList.remove("max-md:opacity-0")
        communicationsMenu.classList.add("max-md:opacity-100")
    }else{
        communicationsMenu.classList.remove("max-md:scale-y-100")
        communicationsMenu.classList.remove("max-md:opacity-100")
        communicationsMenu.classList.add("max-md:scale-y-90")
        communicationsMenu.classList.add("max-md:opacity-0")
    }

})

//give heart for each recipes card
heartIcon.forEach((heart) => {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("fill-[#FF6363]")) {
            heart.classList.add("fill-[#dbe2e5]")
            heart.classList.remove("fill-[#FF6363]")
        } else {
            heart.classList.remove("fill-[#dbe2e5]")
            heart.classList.add("fill-[#FF6363]")
        }
    })
})
