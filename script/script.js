let mainDropDown = document.querySelector('.main-dropdown')
let toggleBtn = document.querySelector(".toggleBtn")
let dropDownBtn = document.querySelector(".dropdownBtn")
let dropDownMenu = document.querySelector(".dropdown")
let closeBtn = document.querySelector(".closeBtn")
let barsMenu = document.querySelector(".barsMenu")
let communicationsBtn = document.querySelector('.communicationsBtn')
let communicationsMenu = document.querySelector(".communicationsMenu")
let heartIcon = document.querySelectorAll(".heart")
let radioButtons = document.querySelectorAll(".radioBtn")
let articlesList = document.querySelector(".articlesList")
let pagination = document.querySelectorAll('.pageBtn')
let paginationList = document.querySelector(".paginationList")
let searchInput = document.querySelector('.searchInput')
let searchBtn = document.querySelector('.searchBtn')
let currentPage = 1
const rowsCount = 6

let currentBtn = document.querySelector('button[value="1"]')
let backwardBtn = document.querySelector(".backwardBtn")
let forwardBtn = document.querySelector(".forwardBtn")
let moreBtn = document.querySelector(".moreBtn")

let articles = [
    {
        id : 1,
        image:"soup",
        title: "Crochet Projects for Noodle Lovers",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 3",
        authorName:"Wade Warren",
        date:"26 April 2025"
    },
    {
        id : 2,
        image:"fruit",
        title: "10 Vegetarian Recipes To Eat This Month",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 4",
        authorName:"Robert Fox",
        date:"26 April 2025"
    },
    {
        id : 3,
        image:"chef",
        title: "Full Guide to Becoming a Professional Chef",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 5",
        authorName:"Dianne Russell",
        date:"26 April 2025"
    },
    {
        id : 4,
        image:"Lasagna",
        title: "Simple & Delicious Vegetarian Lasagna",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 6",
        authorName:"Leslie Alexander",
        date:"26 April 2025"
    },
    {
        id : 5,
        image:"plantain",
        title: "Plantain and Pinto Stew with Aji Verde",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 7",
        authorName:"Courtney Henry",
        date:"26 April 2025"
    },
    {
        id : 6,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 7,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 8,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 9,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 10,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 11,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 12,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 13,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    },
    {
        id : 14,
        image:"assistant",
        title: "We’re Hiring a Communications Assistant!",
        description:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profilePic:"Ellipse 8",
        authorName:"Albert Flores",
        date:"26 April 2025"
    }
]


//Closing the dropdown menu when the screen size exceeds medium.
window.addEventListener("resize", () => {
    
    // Closing the navbar by changing the screen size.
    if (window.innerWidth >= 768) {
        mainDropDown.classList.remove("max-md:hidden")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
        dropDownMenu.classList.remove("max-md:hidden")
    } else {
        // mainDropDown.classList.add("max-md:hidden") => bug #1 : Replace with the two lines below.
        mainDropDown.classList.remove("max-md:scale-y-100")
        mainDropDown.classList.add("max-md:scale-y-0")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
    }

    // Closing the communication menu by changing the screen size.
    communicationsMenu.classList.remove("max-md:scale-y-100")
    communicationsMenu.classList.remove("max-md:opacity-100")
    communicationsMenu.classList.add("max-md:scale-y-90")
    communicationsMenu.classList.add("max-md:opacity-0")
})


// bug : first transition after resize donsn't work => fixed #1
//toggle bars menu
toggleBtn.addEventListener("click", () => {
    if (!dropDownMenu.classList.contains("max-md:hidden"))
        dropDownMenu.classList.add("max-md:hidden")

    if (mainDropDown.classList.contains("max-md:scale-y-0")) {
        mainDropDown.classList.remove("max-md:hidden")
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
    if (!communicationsMenu.contains(e.target) && !communicationsBtn.contains(e.target) && communicationsMenu.classList.contains("max-md:opacity-100")) {
        communicationsMenu.classList.remove("max-md:scale-y-100")
        communicationsMenu.classList.remove("max-md:opacity-100")
        communicationsMenu.classList.add("max-md:scale-y-90")
        communicationsMenu.classList.add("max-md:opacity-0")
    }
    if (!mainDropDown.contains(e.target) && !toggleBtn.contains(e.target)) {
        mainDropDown.classList.remove("max-md:scale-y-100")
        mainDropDown.classList.add("max-md:scale-y-0")
        closeBtn.classList.add("hidden")
        barsMenu.classList.remove("hidden")
    }
})

//bug:it dosn't works after click outside of it => fixed #2
//toggle communications menu
communicationsBtn.addEventListener("click", () => {
    if (communicationsMenu.classList.contains("max-md:scale-y-90")) {
        communicationsMenu.classList.remove("max-md:scale-y-90")
        communicationsMenu.classList.remove("max-md:opacity-0")
        communicationsMenu.classList.add("max-md:scale-y-100")
        communicationsMenu.classList.add("max-md:opacity-100")
    } else {
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


//tic task
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click",(e) => {
        if(e.target.classList.contains("temp")){
            e.target.classList.add("hidden")
            e.target.previousElementSibling.classList.remove("hidden")
            e.target.parentElement.nextElementSibling.classList.add("line-through")
            e.target.parentElement.nextElementSibling.classList.add("text-[#00000060]")
        }
        if(e.target.classList.contains("tic")){
            e.target.classList.add("hidden")
            e.target.nextElementSibling.classList.remove("hidden")
            e.target.parentElement.nextElementSibling.classList.remove("line-through")
            e.target.parentElement.nextElementSibling.classList.remove("text-[#00000060]")
        }
    })
})

//display articles for each page
function displayArticlesList(articles,articlesList,currentPage,rowsCount){
    let endIndex = currentPage * rowsCount
    let  startIndex = endIndex - rowsCount

    let paginatedArticles = articles.slice(startIndex,endIndex)
    
    articlesList.innerHtml = ''

    paginatedArticles.forEach((article)=>{
        articlesList.insertAdjacentHTML("beforeend",
            `<li class="w-full h-auto max-md:flex-col max-md:items-center max-md:gap-y-4 flex gap-x-8">
                        <img src="../images/${article.image}.png" class="w-[290px] h-[200px] rounded-[20px] bg-cover" alt="">
                        <div class="flex flex-col max-md:items-center justify-around max-md:space-y-6">
                            <h3 class="text-xl tracking-tighter">${article.title}</h3>
                            <p class="leading-7 font-normal text-[#00000060] max-md:text-justify max-md:w-[300px] lg:w-[380px] text-justify line-clamp-2">${article.description}</p>
                            <div class="flex items-center divide-x divide-[#00000010]">
                                <div class="flex items-center px-4 gap-x-4 w-[200px]"><img src="../images/${article.profilePic}.png" class="w-[40px] h-[40px] rounded-full" alt=""> <p class="font-bold tracking-tight whitespace-nowrap">${article.authorName}</p></div>
                                <p class="text-sm tracking-tight text-[#00000060] px-4 w-[150px]">${article.date}</p>
                            </div>
                        </div>
                    </li>`
        )
    })
}

//defaul pagination setting
window.addEventListener("DOMContentLoaded",()=>{
    displayArticlesList(articles,articlesList,currentPage,rowsCount)
    let paginationCount = Math.ceil(articles.length / rowsCount)
    
    //this pagination is static but in the future it's gonna be dynamic
    if(paginationCount <= 5)
        moreBtn.classList.add("hidden")
})
let flag = (articles.length / rowsCount) <= 5
//pagination
pagination.forEach((thisPage)=>{
    thisPage.addEventListener("click",() => {
        if(thisPage.value !== "1"){
            if(flag)
                moreBtn.classList.add("hidden")
            backwardBtn.classList.remove("hidden")
        }else{
            if(!backwardBtn.classList.contains("hidden"))
                backwardBtn.classList.add("hidden")
            if(currentPage.value === thisPage.value)
                moreBtn.classList.remove("hidden")
        }
        thisPage.classList.add("bg-black","text-white")
        currentPage = +thisPage.value
        articlesList.innerHTML = ''
        if(thisPage.value !== currentBtn.value)
            currentBtn.classList.remove("bg-black","text-white")
        currentBtn = thisPage
        displayArticlesList(articles,articlesList,currentPage,rowsCount)
        window.scrollTo(0, 0);
    })
})
// next button functionality
let paginationArray = Array.from(pagination)
forwardBtn.addEventListener("click",() => {
    let nextBtn = paginationArray.find((pg) => pg.value === `${currentPage + 1}`)
    if(!(currentPage + 1 > 3)){
        currentBtn.classList.remove("bg-black","text-white")
        currentBtn = nextBtn
        currentBtn.classList.add("bg-black","text-white")
        currentPage++
        articlesList.innerHTML = ''
        displayArticlesList(articles,articlesList,currentPage,rowsCount)
        window.scrollTo(0, 0);
        if(currentBtn.value !== "1"){
            if(flag)
                moreBtn.classList.add("hidden")
            backwardBtn.classList.remove("hidden")
        }else{
            if(!backwardBtn.classList.contains("hidden"))
                backwardBtn.classList.add("hidden")
        }
    }
    console.log(currentPage)
})

//previous button functionality
backwardBtn.addEventListener("click",() => {
    let prevBtn = paginationArray.find((pg) => pg.value === `${currentPage - 1}`)
    if(!(currentPage - 1 < 1)){
        currentBtn.classList.remove("bg-black","text-white")
        currentBtn = prevBtn
        currentBtn.classList.add("bg-black","text-white")
        currentPage--
        articlesList.innerHTML = ''
        displayArticlesList(articles,articlesList,currentPage,rowsCount)
        window.scrollTo(0, 0);
        if(currentBtn.value !== "1"){
            if(flag)
                moreBtn.classList.add("hidden")
            backwardBtn.classList.remove("hidden")
        }else{
            if(!backwardBtn.classList.contains("hidden"))
                backwardBtn.classList.add("hidden")
        }
    }
    console.log(currentPage)
})

//search articles
searchBtn.addEventListener("click",(e) => {
    e.preventDefault()
    if(searchInput.value !== ''){
        let foundedArticles = articles.filter((article) =>{
            return article.title.toLowerCase().includes(searchInput.value.toLowerCase())
        })
        articlesList.innerHTML = ''
        displayArticlesList(foundedArticles,articlesList,currentPage,rowsCount)
        // console.log(foundedArticles)
    }else{
        location.reload()
    }
})

