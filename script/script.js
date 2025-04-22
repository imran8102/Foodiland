let mainDropDown = document.querySelector('.main-dropdown')
let toggleBtn = document.querySelector(".toggleBtn")
let dropDownBtn = document.querySelector(".dropdownBtn")
let dropDownMenu = document.querySelector(".dropdown")
let closeBtn = document.querySelector(".closeBtn")
let barsMenu = document.querySelector(".barsMenu")
let contactBtn = document.querySelector('.contactBtn')
let contactMenu = document.querySelector(".contactMenu")
let container = document.querySelector(".container")
let heartIcon = document.querySelectorAll(".heart")

dropDownBtn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
        dropDownMenu.classList.toggle("hidden")
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mainDropDown.classList.add("max-md:hidden")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
        dropDownMenu.classList.add("hidden")
    }

})

toggleBtn.addEventListener("click", () => {
    mainDropDown.classList.toggle("max-md:hidden")
    if (!dropDownMenu.classList.contains("hidden"))
        dropDownMenu.classList.add("hidden")
    closeBtn.classList.toggle("hidden")
    barsMenu.classList.toggle("hidden")
})


contactBtn.addEventListener("click", () => {
    contactMenu.classList.toggle("max-md:hidden")
})

//Checking for clicks outside the dropdown area(or outside of dropdownBtn). 🚀
window.addEventListener("click", (e) => {
    if (!contactMenu.contains(e.target) && !contactBtn.contains(e.target))
        contactMenu.classList.add("max-md:hidden")
    if (!mainDropDown.contains(e.target) && !dropDownMenu.classList.contains("max-md:hidden") && !toggleBtn.contains(e.target)) {
        mainDropDown.classList.add("max-md:hidden")
        if (!dropDownMenu.classList.contains("hidden"))
            dropDownMenu.classList.add("hidden")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
    }
})

heartIcon.forEach((heart) =>{
    heart.addEventListener("click", () => {
        if (heart.classList.contains("fill-[#FF6363]")) {
            heart.classList.add("fill-[#dbe2e5]")
            heart.classList.remove("fill-[#FF6363]")
        }else{
            heart.classList.remove("fill-[#dbe2e5]")
            heart.classList.add("fill-[#FF6363]")
        }
    })
})
