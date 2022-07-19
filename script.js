let Home = document.querySelector(".dropdown-p")
let Blog = document.querySelector(".dropdown1-p") 
let Page = document.querySelector(".dropdown2-p") 
let arrow1 = 0;
let arrow2 = 0;
let arrow3 = 0;
let myDropdown = document.querySelector("#myDropdown")
let section1_wrapper_div2_img = document.querySelector(".section1-wrapper-div2-img")
let section2_wrapper_main = document.querySelector(".section2-wrapper-main")
let header_menu_appear_Main = document.querySelector(".header-menu-appear-Main")
if (window.innerWidth <= 1024) {
    let exchange_value_AMD = document.querySelector(".exchange_value_AMD")
    let exchange_value_USD = document.querySelector(".exchange_value_USD")
    let exchange_value_AMD_clone = exchange_value_AMD.cloneNode(true)
    let exchange_value_USD_clone = exchange_value_USD.cloneNode(true)
    header_menu_appear_Main.appendChild(exchange_value_AMD_clone)
    header_menu_appear_Main.appendChild(exchange_value_USD_clone)
    exchange_value_AMD_clone.style.display = "block"
    exchange_value_USD_clone.style.display = "none"
    exchange_value_AMD_clone.addEventListener("click" , (e) => {
        exchange_value_AMD_clone.style.display = "none"
        exchange_value_USD_clone.style.display = "block"
    })
    exchange_value_USD_clone.addEventListener("click" , (e) => {
        exchange_value_AMD_clone.style.display = "block"
        exchange_value_USD_clone.style.display = "none"
    })

    exchange_value_AMD_clone.addEventListener('click', () => {
        let amd_span = document.querySelectorAll(".amd-span")
            amd_span.forEach(element => {
                    element.innerHTML = "USD-"
                    let mathAMD = Math.round(element.parentElement.childNodes[3].innerHTML / 410)
                    element.parentElement.childNodes[3].innerHTML = mathAMD
                })     
    })
    
    exchange_value_USD_clone.addEventListener('click', () => {
        let amd_span = document.querySelectorAll(".amd-span")
            amd_span.forEach(element => {
                    element.innerHTML = "AMD-"
                    let mathUSD = Math.round(element.parentElement.childNodes[3].innerHTML * 410)
                    element.parentElement.childNodes[3].innerHTML = mathUSD
            })
    })
}
//////////////////////////////see-all-chefs-appear///////////////////////
setTimeout(() => {
    section1_wrapper_div2_img.style.animation = "none"
    section1_wrapper_div2_img.style.animation = "rotate-pizza 2999s ease"
}, 1400)

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      Home.style.transform = "rotate(0deg)";
      arrow1 = 0;
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      } 
    }
  }

  function myFunctionOne() {
    myDropdown.classList.toggle("show");
    if(arrow1 === 0){
        Home.style.transform = "rotate(-90deg)";
        Home.style.transition = ".3s";
        arrow1 = 1;
    }else if(arrow1 === 1){
        Home.style.transform = "rotate(0deg)";
        arrow1 = 0;
    }
}




/////////////////////////search////////////////////////////
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// plus minus
let plus_minus = document.querySelector(".plus-minus")
let counterDisplayElem = document.querySelector('.p1');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');
let count = 0;
//////////////////////////SEARCH/////////////////////////////////////////
let search_appear = document.querySelector(".search-appear")
let search_appear_wrapper_input = document.querySelector(".search-appear-wrapper-input")
let search_appear_wrapper_cancle = document.querySelector(".search-appear-wrapper-cancle")
let adaptive_bottom_header_smallDiv_middle = document.querySelector(".adaptive-bottom-header-smallDiv-middle")
let header_search = document.querySelector(".header-search").addEventListener("click" , (e) =>{
    search_appear.style.display = "flex"
    search_appear.style.animation = "search-appear .5s ease-in-out"
})

let header_search1 = document.querySelector(".header-search1").addEventListener("click" , (e) =>{
    search_appear.style.display = "flex"
    search_appear.style.animation = "search-appear .5s ease-in-out"
})

search_appear_wrapper_cancle.addEventListener("click" , (e) =>{
    search_appear.style.animation = "search-appear-close .5s ease-in-out"
    setTimeout(() => {
        search_appear.style.display = "none"
    }, 499)
})
////////////////////////about/////////////////////////
let header_nav_ul_li3 = document.querySelectorAll(".header-nav-ul-li3").forEach((value , index) =>{
    value.addEventListener("click" , (e) => {
        about_appear = document.querySelector(".about_appear")
        about_appear.style.animation = "about_appear .5s ease-out"
        about_appear.style.display = "flex"
        about_appear_cancel = document.querySelector(".about_appear_cancel").addEventListener("click" , (e) => {
            about_appear.style.animation = "about_close .5s ease-out"
            setTimeout(() => {about_appear.style.display = "none"} , 499)
        })
    })
})
/////////////////////////////////contact//////////////////////
let header_nav_ul_li5 = document.querySelectorAll(".header-nav-ul-li5").forEach((value , index) =>{
    value.addEventListener("click" , (e) => {
        contact_appear = document.querySelector(".contact_appear")
        contact_appear.style.animation = "contact_appear .5s ease-out"
        contact_appear.style.display = "flex"
        contact_appear_cancel = document.querySelector(".contact_appear_cancel").addEventListener("click" , (e) => {
            contact_appear.style.animation = "contact_close .5s ease-out"
            setTimeout(() => {contact_appear.style.display = "none"} , 499)
        })
    })
})

/////////////////////////FAVORITE//////////////////////////
let header_like_appear1 = document.querySelector(".header-like-appear1")
let header_like_appear_Main = document.querySelector(".header-like-appear-Main")
let header_like_appear_Main1 = document.querySelector(".header-like-appear-Main1")
let header_like_appear_close1 = document.querySelector(".header-like-appear-close1")   
let header_like_p = document.querySelector(".header-like-p")
let header_like_p_number = 0
let section2_wrapper_main_offers_div_hearthh = document.querySelectorAll(".section2-wrapper-main-offers-div-hearth")
section2_wrapper_main_offers_div_hearthh.forEach((element , index) => {
    let blackOrRed = "black"
    element.addEventListener("click" , (e) =>{
        e.currentTarget.style.color = `${blackOrRed}`
        let clone_like = e.currentTarget.parentElement.cloneNode(true)
        let clone_like1 = e.currentTarget.parentElement.cloneNode(true)
        if (e.currentTarget.style.color === "black") {
            e.currentTarget.style.color = "red"
            header_like_appear_Main.appendChild(clone_like)
            header_like_appear_Main1.appendChild(clone_like1)
            clone_like.childNodes[3].addEventListener("click" , (e) => {
                element.style.color = "black"
                header_like_appear_Main.removeChild(clone_like)
                header_like_appear_Main1.removeChild(clone_like1)
                header_like_p_number -= 1
                header_like_p.innerHTML = header_like_p_number
                blackOrRed = "black"
            })
            clone_like1.childNodes[3].addEventListener("click" , (e) => {
                element.style.color = "black"
                header_like_appear_Main.removeChild(clone_like)
                header_like_appear_Main1.removeChild(clone_like1)
                header_like_p_number -= 1
                header_like_p.innerHTML = header_like_p_number
                blackOrRed = "black"
            })
            header_like_p_number += 1
            header_like_p.innerHTML = header_like_p_number
            blackOrRed = "red"
        }
    })
    adaptive_bottom_header_smallDiv_middle.addEventListener("click" , () => {
        header_like_appear1.style.marginTop = "-100vh"
    })
    header_like_appear_close1.addEventListener("click" , () => {
        header_like_appear1.style.marginTop = "0"
    })
})
////////////////////////////////////////
let Book_Table_a = document.querySelector(".Book-Table-a").addEventListener("click" , (e) => {
    setTimeout((e) => {
        window.scrollTo(0 , header.clientHeight * 29)
    } , 1)
})
//////////////////////////SHOPPING_CARD_ADAPTIVE////////////////////////////////////
let header_shoping_cart_appear = document.querySelector(".header-shoping-cart-appear")
let adaptive_bottom_header_smallDiv_third = document.querySelector(".adaptive-bottom-header-smallDiv-third")
adaptive_bottom_header_smallDiv_third.addEventListener("click" , (e) =>{
    header_shoping_cart_appear.style.marginLeft = "-100%"
})

/////////////////////Shoping cart appear////////////////////////////
let header_shoping_cart_appear_close = document.querySelector(".header-shoping-cart-appear-close")
let header_like_appear_close = document.querySelector(".header-like-appear-close")
let header_menu_appear_close = document.querySelector(".header-menu-appear-close")
let shopBtn = document.querySelector(".header-shoping-cart").addEventListener("click" , () => {
    header_shoping_cart_appear.style.marginLeft = "-25vw"
})

let header_like_appear = document.querySelector(".header-like-appear")
let likeBtn = document.querySelector(".header-like").addEventListener("click" , () => {
    header_like_appear.style.marginLeft = "-25vw"
})

let header_menu_appear = document.querySelector(".header-menu-appear")
let burger_menu = document.querySelector("#burger-menu").addEventListener("click" , () => {
    header_menu_appear.style.marginLeft = "100%"
})

header_shoping_cart_appear_close.addEventListener("click" , () => {
    header_shoping_cart_appear.style.marginLeft = "0"
})
header_like_appear_close.addEventListener("click" , () => {
    header_like_appear.style.marginLeft = "0"
})
header_menu_appear_close.addEventListener("click" , () => {
    header_menu_appear.style.marginLeft = "0"
})

let outside_div_menu_wrapper_div1 = document.querySelector(".outside-div-menu-wrapper-div1")
let outside_div_menu_wrapper_div2 = document.querySelector(".outside-div-menu-wrapper-div2")
let outside_div_menu_wrapper_div3 = document.querySelector(".outside-div-menu-wrapper-div3")
let outside_div_menu_wrapper_div4 = document.querySelector(".outside-div-menu-wrapper-div4")
let outside_div_menu_wrapper_div5 = document.querySelector(".outside-div-menu-wrapper-div5")
let outside_div_menu_wrapper_div6 = document.querySelector(".outside-div-menu-wrapper-div6")
let addedToBag = document.querySelector(".addedToBag")
let header = document.querySelector("#header");
function scrollHeader(){
    let header2 = document.querySelector("#header2");
    if(this.scrollY >= header.clientHeight / 2) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
    if(this.scrollY >= header2.clientHeight / 2) header2.classList.add('scroll-header2'); else header2.classList.remove('scroll-header2');
    if(this.scrollY >= header.clientHeight / 1.4){
        outside_div_menu_wrapper_div1.style.animation = "offer1 .8s ease-in-out"
        outside_div_menu_wrapper_div2.style.animation = "offer1 1s ease-in-out"
        outside_div_menu_wrapper_div3.style.animation = "offer1 1.2s ease-in-out"
        outside_div_menu_wrapper_div4.style.animation = "offer1 1.4s ease-in-out"
        outside_div_menu_wrapper_div5.style.animation = "offer1 1.6s ease-in-out"
        outside_div_menu_wrapper_div6.style.animation = "offer1 1.8s ease-in-out"
    }else if(this.scrollY <= header.clientHeight / 1.4){
        outside_div_menu_wrapper_div1.style.animation = "none"
        outside_div_menu_wrapper_div2.style.animation = "none"
        outside_div_menu_wrapper_div3.style.animation = "none"
        outside_div_menu_wrapper_div4.style.animation = "none"
        outside_div_menu_wrapper_div5.style.animation = "none"
        outside_div_menu_wrapper_div6.style.animation = "none"
    }
}
window.addEventListener('scroll' , scrollHeader)

let section2 = document.querySelector(".section2")
let section2_wrapper_main_offer1 = document.querySelector(".section2-wrapper-main-offer1")
let section2_wrapper_main_offer2 = document.querySelector(".section2-wrapper-main-offer2")
let section2_wrapper_main_offer3 = document.querySelector(".section2-wrapper-main-offer3")
let section2_wrapper_main_offer4 = document.querySelector(".section2-wrapper-main-offer4")
let section2_wrapper_main_offer5 = document.querySelector(".section2-wrapper-main-offer5")
let section2_wrapper_main_offer6 = document.querySelector(".section2-wrapper-main-offer6")
let section2_wrapper_main_offer7 = document.querySelector(".section2-wrapper-main-offer7")
let section2_wrapper_main_offer8 = document.querySelector(".section2-wrapper-main-offer8")
let section2_wrapper_main_offer9 = document.querySelector(".section2-wrapper-main-offer9")
let section2_wrapper_main_offer10 = document.querySelector(".section2-wrapper-main-offer10")
let header_shoping_cart_p = document.querySelector(".header-shoping-cart-p")
let section2_wrapper_nav_a1 = document.querySelector(".section2-wrapper-nav-a1")
let section2_wrapper_nav_a2 = document.querySelector(".section2-wrapper-nav-a2")
let section2_wrapper_nav_a3 = document.querySelector(".section2-wrapper-nav-a3")
let section2_wrapper_nav_a4 = document.querySelector(".section2-wrapper-nav-a4")
let section2_wrapper_nav_a5 = document.querySelector(".section2-wrapper-nav-a5")
let section2_wrapper_h2 = document.querySelector(".section2-wrapper-h2")
function section2Upgrade1 () {
    section2_wrapper_main_offer1.style.display = "flex"
    section2_wrapper_main_offer2.style.display = "flex"
    section2_wrapper_nav_a1.style.backgroundColor = "orange";
    section2_wrapper_nav_a2.style.backgroundColor = "white";
    section2_wrapper_nav_a3.style.backgroundColor = "white";
    section2_wrapper_nav_a4.style.backgroundColor = "white";
    section2_wrapper_nav_a5.style.backgroundColor = "white";
    setTimeout((e) => {
        window.scrollTo(0, header.clientHeight * 9.5)
    } , 1)
    if(window.innerWidth <= 1024){
        section2.style.height = "283vw"
        section2_wrapper_h2.style.marginTop = "7vw"
    }else {
        section2.style.height = "70.71vw"
    }
}
function section2Upgrade2 () {
    section2_wrapper_main_offer3.style.display = "flex"
    section2_wrapper_main_offer4.style.display = "flex"
    section2_wrapper_nav_a1.style.backgroundColor = "white"
    section2_wrapper_nav_a2.style.backgroundColor = "orange"
    section2_wrapper_nav_a3.style.backgroundColor = "white"
    section2_wrapper_nav_a4.style.backgroundColor = "white"
    section2_wrapper_nav_a5.style.backgroundColor = "white"
    setTimeout((e) => {
        window.scrollTo(0, header.clientHeight * 9.5)
    } , 1)
    if(window.innerWidth <= 1024){
        section2.style.height = "283vw"
        section2_wrapper_h2.style.marginTop = "7vw"
    }else {
        section2.style.height = "70.71vw"
    }
}

function section2Upgrade3 () {
    section2_wrapper_main_offer5.style.display = "flex"
    section2_wrapper_main_offer6.style.display = "flex"
    section2_wrapper_nav_a1.style.backgroundColor = "white"
    section2_wrapper_nav_a2.style.backgroundColor = "white"
    section2_wrapper_nav_a3.style.backgroundColor = "orange"
    section2_wrapper_nav_a4.style.backgroundColor = "white"
    section2_wrapper_nav_a5.style.backgroundColor = "white"
    setTimeout((e) => {
        window.scrollTo(0, header.clientHeight * 9.5)
    } , 1)
    if(window.innerWidth <= 1024){
        section2.style.height = "283vw"
        section2_wrapper_h2.style.marginTop = "7vw"
    }else {
        section2.style.height = "70.71vw"
    }
}

function section2Upgrade4 () {
    section2_wrapper_main_offer7.style.display = "flex"
    section2_wrapper_main_offer8.style.display = "flex"
    section2_wrapper_nav_a1.style.backgroundColor = "white"
    section2_wrapper_nav_a2.style.backgroundColor = "white"
    section2_wrapper_nav_a3.style.backgroundColor = "white"
    section2_wrapper_nav_a4.style.backgroundColor = "orange"
    section2_wrapper_nav_a5.style.backgroundColor = "white"
    setTimeout((e) => {
        window.scrollTo(0, header.clientHeight * 9.5)
    } , 1)
    if(window.innerWidth <= 1024){
        section2.style.height = "283vw"
        section2_wrapper_h2.style.marginTop = "7vw"
    }else {
        section2.style.height = "70.71vw"
    }
}

function section2Upgrade5 () {
    section2_wrapper_main_offer9.style.display = "flex"
    section2_wrapper_main_offer10.style.display = "flex"
    section2_wrapper_nav_a1.style.backgroundColor = "white"
    section2_wrapper_nav_a2.style.backgroundColor = "white"
    section2_wrapper_nav_a3.style.backgroundColor = "white"
    section2_wrapper_nav_a4.style.backgroundColor = "white"
    section2_wrapper_nav_a5.style.backgroundColor = "orange"
    setTimeout((e) => {
        window.scrollTo(0, header.clientHeight * 9.5)
    } , 1)
    if(window.innerWidth <= 1024){
        section2.style.height = "283vw"
        section2_wrapper_h2.style.marginTop = "7vw"
    }else {
        section2.style.height = "70.71vw"
    }
}

let amd = document.querySelector('.exchange_value_AMD')
let usd = document.querySelector('.exchange_value_USD')
amd.style.display = "none"
usd.style.display = "block"
amd.addEventListener("click" , (e) => {
    amd.style.display = "none"
    usd.style.display = "block"
})
usd.addEventListener("click" , (e) => {
    amd.style.display = "block"
    usd.style.display = "none"
})


let exchange_value_AMD = document.querySelector(".exchange_value_AMD").addEventListener('click', () => {
    let amd_span = document.querySelectorAll(".amd-span")
        amd_span.forEach(element => {
                element.innerHTML = "AMD-"
                let mathAMD = Math.round(element.parentElement.childNodes[3].innerHTML * 410)
                element.parentElement.childNodes[3].innerHTML = mathAMD
            })     
})

let exchange_value_USD = document.querySelector(".exchange_value_USD").addEventListener('click', () => {
    let amd_span = document.querySelectorAll(".amd-span")
        amd_span.forEach(element => {
                element.innerHTML = "USD-"
                let mathUSD = Math.round(element.parentElement.childNodes[3].innerHTML / 410)
                element.parentElement.childNodes[3].innerHTML = mathUSD
        })
})

let shopBagNumber = 0;
let header_shoping_cart_appear_Main = document.querySelector(".header-shoping-cart-appear-Main")
let a1 = document.querySelectorAll(".section2-shopping-cart")
let b1 = a1.forEach((element , index) => {
        const staticValue = element.parentElement.parentElement.childNodes[1].childNodes[3]
        let a1_acces = true
        element.parentElement.addEventListener("click" , (e) => {
        let a = e.currentTarget.parentElement.parentElement
        if (a1_acces === true) {
            let clone = a.cloneNode(true)
            header_shoping_cart_appear_Main.appendChild(clone)
            clone.childNodes[3].addEventListener("click" , () => {
                header_shoping_cart_appear_Main.removeChild(clone)
                shopBagNumber -= 1
                header_shoping_cart_p.innerHTML = shopBagNumber
                a1_acces = true
            })
            let plus_minus_clone = plus_minus.cloneNode(true)
            clone.childNodes[9].appendChild(plus_minus_clone)
            let constantValue = plus_minus_clone.parentElement.childNodes[1].childNodes[3]
            let plus_minus_clone_value = 1 
            plus_minus_clone.childNodes[1].childNodes[3].innerHTML = plus_minus_clone_value
            plus_minus_clone.childNodes[1].childNodes[1].addEventListener("click" , (e) => {
                plus_minus_clone_value -= 1
                constantValue.innerHTML = staticValue.innerHTML * plus_minus_clone_value
                plus_minus_clone.childNodes[1].childNodes[3].innerHTML = plus_minus_clone_value
                if(plus_minus_clone_value < 1){
                    plus_minus_clone_value = 1 
                    plus_minus_clone.childNodes[1].childNodes[3].innerHTML = plus_minus_clone_value
                    if(constantValue.innerHTML == 0){
                        constantValue.innerHTML = staticValue.innerHTML
                    }
                }
            })
            plus_minus_clone.childNodes[1].childNodes[5].addEventListener("click" , (e) => {
                plus_minus_clone_value += 1
                constantValue.innerHTML = staticValue.innerHTML * plus_minus_clone_value
                plus_minus_clone.childNodes[1].childNodes[3].innerHTML = plus_minus_clone_value
            })
            clone.childNodes[9].childNodes[3].childNodes[1].replaceWith(document.createElement("p").innerHTML = "ORDER")
            addedToBag.style.animation = "none"
            addedToBag.style.display = "flex"
            addedToBag.style.animation = "addedToBag .8s ease-in-out"
            setTimeout(() =>{addedToBag.style.animation = "none" ; addedToBag.style.animation = "addedToBagClose .8s ease-in-out" ; setTimeout(()=>{addedToBag.style.animation = "none" ; addedToBag.style.display = "none"},799)}, 1000)
            shopBagNumber += 1
            header_shoping_cart_p.innerHTML = shopBagNumber
            a1_acces = false      
        }
    })
})


////////////////////////////////LANGUAGE_SWICH//////////////////////////////////////////////////////
let ARM = document.querySelector("#arm")
let ARM1 = document.querySelector("#arm1")
let ENG = document.querySelector("#eng")
let ENG1 = document.querySelector("#eng1")
ARM.addEventListener("click" , (e) => {
    e.target.style.boxShadow = "0 0 .6vw"
    ENG.style.boxShadow = "none"
    let exchange = document.querySelectorAll(".exchange")
    exchange.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Փոխարժեք"
    })
    let menu = document.querySelectorAll(".menu")
    menu.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Մենյու"
    })
    let about = document.querySelectorAll(".about")
    about.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Մեր մասին"
    })
    let Book_Table = document.querySelectorAll(".Book-Table")
    Book_Table.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Պատվիրեք սեղան"
    })
    let contact = document.querySelectorAll(".contact")
    contact.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Կապ"
    })
    let call_order = document.querySelector(".call_order").innerHTML = "Զանգահարեք և պատվիրեք"
    let close = document.querySelectorAll(".close")
    close.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Փակել"
    })
    let favorite = document.querySelectorAll(".favorite")
    favorite.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Նախընտրելի"
    })
    let cart = document.querySelectorAll(".cart")
    cart.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Գնումների զամբյուղ"
    })
    let search = document.querySelectorAll(".search")
    search.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Որոնել"
    })
    let unlimited = document.querySelectorAll(".unlimited")
    unlimited.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "3.5vw"
        element.innerHTML = "ԱՆՍԱՀՄԱՆԱՓԱԿ ՄԻՋԻՆ ՊԻՑԱՆԵՐ"
    })
    let Medium2 = document.querySelectorAll(".Medium2") 
    Medium2.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Միջին 2 հատ* պիցցա"
    })
    let Additional = document.querySelectorAll(".Additional")
    Additional.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "*Լրացուցիչ վճար պրեմիում լցոնումների համար: Պահանջվում է նվազագույնը 2:"
    })
    let ORDER = document.querySelectorAll(".ORDER")
    ORDER.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ՊԱՏՎԻՐԵԼ ՀԻՄԱ"
    })
    let pizza = document.querySelectorAll(".pizza")
    pizza.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Պիցցա"
    })
    let chicken = document.querySelectorAll(".chicken")
    chicken.forEach(element => {
        element.innerHTML = "Հավ"
        element.style.fontFamily = 'arnamu'
    })
    let drinks = document.querySelectorAll(".drinks")
    drinks.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Խմիչքներ"
    })
    let combo = document.querySelectorAll(".combo")
    combo.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Կոմբո"
    })
    let sauces = document.querySelectorAll(".sauces")
    sauces.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Սոուսեր"
    })
    let kids = document.querySelectorAll(".kids")
    kids.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Մանկական մենյու"
    })
    let day = document.querySelectorAll(".day")
    day.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "1.55vw"
        element.innerHTML = "Ցանկացած օրվա <br/> առաջարկներ"
    })
    let PHENOMENON = document.querySelectorAll(".PHENOMENON")
    PHENOMENON.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Նոր ֆենոմեն բուրգերի <br /> համ"
    })
    let Other = document.querySelectorAll(".Other")
    Other.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "1.55vw"
        element.innerHTML = "Այլ համային <br />  տեսականի"
    })
    let save_room = document.querySelectorAll(".save_room")
    save_room.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Պահպանեք սենյակը"
    })
    let poco_store = document.querySelectorAll(".poco_store")
    poco_store.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "1.55vw"
        element.innerHTML = "Գտեք Poco <br /> խանութ <br /> ձեր մոտ"
    })
    let contact_us = document.querySelectorAll(".contact_us")
    contact_us.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Կապվեք մեզ հետ"
    })
    let popular_dishes = document.querySelectorAll(".popular_dishes")
    popular_dishes.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Հանրաճանաչ ուտեստներ"
    })
    let sushi = document.querySelectorAll(".sushi")
    sushi.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Սուշի"
    })
    let salates = document.querySelectorAll(".salates")
    salates.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Աղցաններ"
    })
    let burger = document.querySelectorAll(".burger")
    burger.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Բուրգեր"
    })
    let hotdog = document.querySelectorAll(".hotdog")
    hotdog.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "5.5vw"
        element.innerHTML = "ՀՈԹ ԴՈԳ"
    })
    let order_now = document.querySelectorAll(".order_now")
    order_now.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ՊԱՏՎԻՐԵԼ ՀԻՄԱ"
    })
    let always_quality = document.querySelectorAll(".always_quality")
    always_quality.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Միշտ Որակյալ"
    })
    let our_services = document.querySelectorAll(".our_services")
    our_services.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "2.5vw"
        element.innerHTML = "Մեր ծառայությունները"
    })
    let QUALITY = document.querySelectorAll(".QUALITY")
    QUALITY.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ՈՐԱԿՅԱԼ ՍՆՆԴԱՄԹԵՐՔ"
    })
    let RECIPES = document.querySelectorAll(".RECIPES")
    RECIPES.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ԲՆՕՐԻՆԱԿ ԲԱՂԱԴՐԱՏՈՄՍԵՐ"
    })
    let DELIVERY = document.querySelectorAll(".DELIVERY")
    DELIVERY.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ԱՐԱԳ ԱՌԱՔՈՒՄ"
    })
    let quickly = document.querySelectorAll(".quickly")
    quickly.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Ամեն ինչ , ինչ որ դուք պատվիրել եք, պետք է արագ առաքվի ձեր դռան մոտ."
    })
    let restaurants = document.querySelectorAll(".restaurants")
    restaurants.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Poco-ընտանեկան միջազգային ցանց ռեստորան ՝ եվրոպական խոհանոցի"
    })
    let shipping = document.querySelectorAll(".shipping")
    shipping.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Հաղորդագրություն փակցնելու համար կստանաք անվճար արագ առաքում"
    })
    let address = document.querySelectorAll('.our-address')
    address.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Մեր հասցեն'
    })
    let chefs = document.querySelectorAll('.chefs')
    chefs.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Մեր Տաղանդավոր Շեֆ-Խոհարարները'
    })
    let reservation = document.querySelectorAll('.reservation')
    reservation.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Ամրագրում'
    })
    let book = document.querySelectorAll('.book')
    book.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Ամրագրիր քո սեղանը'
    })
    let welcome = document.querySelectorAll('.welcome')
    welcome.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = '2vw'
        element.innerHTML = 'Բարի գալուստ!'
    })
    let burger_ideas = document.querySelectorAll('.burger_ideas')
    burger_ideas.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Լավագույն գաղափարներն ու ավանդույթները ամբողջ աշխարհում'
    })
})
ARM1.addEventListener("click" , (e) => {
    e.target.style.boxShadow = "0 0 .6vw"
    ENG1.style.boxShadow = "none"
    let exchange = document.querySelectorAll(".exchange")
    exchange.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Փոխարժեք"
    })
    let menu = document.querySelectorAll(".menu")
    menu.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Մենյու"
    })
    let about = document.querySelectorAll(".about")
    about.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Մեր մասին"
    })
    let Book_Table = document.querySelectorAll(".Book-Table")
    Book_Table.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Պատվիրեք սեղան"
    })
    let contact = document.querySelectorAll(".contact")
    contact.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Կապ"
    })
    let call_order = document.querySelector(".call_order").innerHTML = "Զանգահարեք և պատվիրեք"
    let close = document.querySelectorAll(".close")
    close.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Փակել"
    })
    let favorite = document.querySelectorAll(".favorite")
    favorite.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Նախընտրելի"
    })
    let cart = document.querySelectorAll(".cart")
    cart.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Գնումների զամբյուղ"
    })
    let search = document.querySelectorAll(".search")
    search.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Որոնել"
    })
    let unlimited = document.querySelectorAll(".unlimited")
    unlimited.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "3.5vw"
        element.innerHTML = "ԱՆՍԱՀՄԱՆԱՓԱԿ ՄԻՋԻՆ  ՊԻՑԱՆԵՐ"
    })
    let Medium2 = document.querySelectorAll(".Medium2")
    Medium2.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Միջին 2 հատ* պիցցա"
    })
    let Additional = document.querySelectorAll(".Additional")
    Additional.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "*Լրացուցիչ վճար պրեմիում լցոնումների համար: Պահանջվում է նվազագույնը 2:"
    })
    let ORDER = document.querySelectorAll(".ORDER")
    ORDER.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ՊԱՏՎԻՐԵԼ ՀԻՄԱ"
    })
    let pizza = document.querySelectorAll(".pizza")
    pizza.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Պիցցա"
    })
    let chicken = document.querySelectorAll(".chicken")
    chicken.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Հավ"
    })
    let drinks = document.querySelectorAll(".drinks")
    drinks.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Խմիչքներ"
    })
    let combo = document.querySelectorAll(".combo")
    combo.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Կոմբո"
    })
    let sauces = document.querySelectorAll(".sauces")
    sauces.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Սոուսեր"
    })
    let kids = document.querySelectorAll(".kids")
    kids.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Մանկական"
    })
    let day = document.querySelectorAll(".day")
    day.forEach(element => {
        element.style.fontFamily = 'arnamu'
        if(window.innerWidth <= 460){
            element.style.fontSize = "5.55vw"
            element.style.lineHeight = "5vw"
        }else{
            element.style.fontSize = "1.55vw"
        }
        element.innerHTML = "Ցանկացած օրվա <br/> առաջարկներ"
    })
    let PHENOMENON = document.querySelectorAll(".PHENOMENON")
    PHENOMENON.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Նոր ֆենոմեն բուրգերի <br /> համ"
    })
    let Other = document.querySelectorAll(".Other")
    Other.forEach(element => {
        element.style.fontFamily = 'arnamu'
        if(window.innerWidth <= 460){
            element.style.fontSize = "5.55vw"
            element.style.lineHeight = "5.5vw"
        }else{
            element.style.fontSize = "1.55vw"
        }
        element.innerHTML = "Այլ համային տեսականի"
    })
    let save_room = document.querySelectorAll(".save_room")
    save_room.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Պահպանեք սենյակը"
    })
    let poco_store = document.querySelectorAll(".poco_store")
    poco_store.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.lineHeight = '7vw'
        element.innerHTML = "Գտեք Poco խանութ <br /> ձեր մոտ"
    })
    let contact_us = document.querySelectorAll(".contact_us")
    contact_us.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Կապվեք մեզ հետ"
    })
    let popular_dishes = document.querySelectorAll(".popular_dishes")
    popular_dishes.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = '5vw'
        element.style.marginTop = '1vw'
        element.innerHTML = "Հանրաճանաչ ուտեստներ"
    })
    let sushi = document.querySelectorAll(".sushi")
    sushi.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Սուշի"
    })
    let salates = document.querySelectorAll(".salates")
    salates.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Աղցաններ"
    })
    let burger = document.querySelectorAll(".burger")
    burger.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Բուրգեր"
    })
    let hotdog = document.querySelectorAll(".hotdog")
    hotdog.forEach(element => {
        element.style.fontFamily = 'arnamu'
        if(window.innerWidth <= 460){
            element.style.fontSize = "8.55vw"
            element.style.width = "40vw"
            element.style.marginLeft = "6vw"
        }else{
            element.style.fontSize = "5.5vw"
        }
        element.innerHTML = "ՀՈԹ ԴՈԳ"
    })
    let order_now = document.querySelectorAll(".order_now")
    order_now.forEach(element => {
        element.style.fontFamily = 'arnamu'
        if(window.innerWidth <= 460){
            element.style.fontSize = "2.35vw"
            element.style.marginLeft = "6vw"
        }
        element.innerHTML = "ՊԱՏՎԻՐԵԼ ՀԻՄԱ"
    })
    let always_quality = document.querySelectorAll(".always_quality")
    always_quality.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Միշտ Որակյալ"
    })
    let our_services = document.querySelectorAll(".our_services")
    our_services.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = "2.5vw"
        element.innerHTML = "Մեր ծառայությունները"
    })
    let QUALITY = document.querySelectorAll(".QUALITY")
    QUALITY.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ՈՐԱԿՅԱԼ ՍՆՆԴԱՄԹԵՐՔ"
    })
    let RECIPES = document.querySelectorAll(".RECIPES")
    RECIPES.forEach(element => {
        element.style.textAlign = 'center'
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ԲՆՕՐԻՆԱԿ ԲԱՂԱԴՐԱՏՈՄՍԵՐ"
    })
    let DELIVERY = document.querySelectorAll(".DELIVERY")
    DELIVERY.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "ԱՐԱԳ ԱՌԱՔՈՒՄ"
    })
    let quickly = document.querySelectorAll(".quickly")
    quickly.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Ամեն ինչ , ինչ որ դուք պատվիրել եք, պետք է արագ առաքվի ձեր դռան մոտ."
    })
    let restaurants = document.querySelectorAll(".restaurants")
    restaurants.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Poco-ընտանեկան միջազգային ցանց ռեստորան ՝ եվրոպական խոհանոցի"
    })
    let shipping = document.querySelectorAll(".shipping")
    shipping.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = "Հաղորդագրություն փակցնելու համար կստանաք անվճար արագ առաքում"
    })
    let address = document.querySelectorAll('.our-address')
    address.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Մեր հասցեն'
    })
    let chefs = document.querySelectorAll('.chefs')
    chefs.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Մեր Տաղանդավոր Շեֆ-Խոհարարները'
    })
    let reservation = document.querySelectorAll('.reservation')
    reservation.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Ամրագրում'
    })
    let book = document.querySelectorAll('.book')
    book.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Ամրագրիր քո սեղանը'
    })
    let welcome = document.querySelectorAll('.welcome')
    welcome.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.style.fontSize = '2vw'
        element.innerHTML = 'Բարի գալուստ!'
    })
    let burger_ideas = document.querySelectorAll('.burger_ideas')
    burger_ideas.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Լավագույն գաղափարներն ու ավանդույթները ամբողջ աշխարհում'
    })
})
ENG.addEventListener("click" , (e) => {
    e.target.style.boxShadow = "0 0 .6vw"
    ARM.style.boxShadow = "none"
    let exchange = document.querySelectorAll(".exchange")
    exchange.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Currency"
    })
    let menu = document.querySelectorAll(".menu")
    menu.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Menu"
    })
    let about = document.querySelectorAll(".about")
    about.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "About"
    })
    let Book_Table = document.querySelectorAll(".Book-Table")
    Book_Table.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Book a Table"
    })
    let contact = document.querySelectorAll(".contact")
    contact.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Contact"
    })
    let call_order = document.querySelector(".call_order").innerHTML = "Call and Order In"
    let close = document.querySelectorAll(".close")
    close.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "CLOSE"
    })
    let favorite = document.querySelectorAll(".favorite")
    favorite.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "FAVORITE"
    })
    let cart = document.querySelectorAll(".cart")
    cart.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SHOPPING CART"
    })
    let search = document.querySelectorAll(".search")
    search.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Search"
    })
    let unlimited = document.querySelectorAll(".unlimited")
    unlimited.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "4vw"
        element.innerHTML = 'UNLIMITED MEDIUM <span class="section1-wrapper-div1-span"> PIZZA </span>'
    })
    let Medium2 = document.querySelectorAll(".Medium2")
    Medium2.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "2vw"
        element.innerHTML = "Medium 2-topping* pizza"
    })
    let Additional = document.querySelectorAll(".Additional")
    Additional.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "*Additional charge for premium toppings. Minimum of 2 required."
    })
    let ORDER = document.querySelectorAll(".ORDER")
    ORDER.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "ORDER NOW"
    })
    let pizza = document.querySelectorAll(".pizza")
    pizza.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "PIZZA"
    })
    let chicken = document.querySelectorAll(".chicken")
    chicken.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "CHICKEN"
    })
    let drinks = document.querySelectorAll(".drinks")
    drinks.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "DRINKS"
    })
    let combo = document.querySelectorAll(".combo")
    combo.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "COMBO"
    })
    let sauces = document.querySelectorAll(".sauces")
    sauces.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SAUCES"
    })
    let kids = document.querySelectorAll(".kids")
    kids.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "KIDS MENUS"
    })
    let day = document.querySelectorAll(".day")
    day.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "2vw"
        element.innerHTML = "Any day <br /> offers"
    })
    let PHENOMENON = document.querySelectorAll(".PHENOMENON")
    PHENOMENON.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "NEW PHENOMENON <br /> BURGER TASTE"
    })
    let Other = document.querySelectorAll(".Other")
    Other.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "2vw"
        element.innerHTML = "Other <br /> flavors"
    })
    let save_room = document.querySelectorAll(".save_room")
    save_room.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SAVE ROOM. <br /> WE MADE SALATS"
    })
    let poco_store = document.querySelectorAll(".poco_store")
    poco_store.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "2vw"
        element.innerHTML = "Find a Poco <br /> store <br /> near you"
    })
    let contact_us = document.querySelectorAll(".contact_us")
    contact_us.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "CONTACT US"
    })
    let popular_dishes = document.querySelectorAll(".popular_dishes")
    popular_dishes.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Popular dishes"
    })
    let sushi = document.querySelectorAll(".sushi")
    sushi.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SUSHI"
    })
    let salates = document.querySelectorAll(".salates")
    salates.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SALATES"
    })
    let burger = document.querySelectorAll(".burger")
    burger.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "BURGER"
    })
    let hotdog = document.querySelectorAll(".hotdog")
    hotdog.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "7vw"
        element.innerHTML = "HOTDOG"
    })
    let order_now = document.querySelectorAll(".order_now")
    order_now.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "ORDER NOW"
    })
    let always_quality = document.querySelectorAll(".always_quality")
    always_quality.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Always Quality"
    })
    let our_services = document.querySelectorAll(".our_services")
    our_services.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "3.5vw"
        element.innerHTML = "Our Servcies"
    })
    let QUALITY = document.querySelectorAll(".QUALITY")
    QUALITY.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "QUALITY FOODS"
    })
    let RECIPES = document.querySelectorAll(".RECIPES")
    RECIPES.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "ORIGINAL RECIPES"
    })
    let DELIVERY = document.querySelectorAll(".DELIVERY")
    DELIVERY.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "FAST DELIVERY"
    })
    let quickly = document.querySelectorAll(".quickly")
    quickly.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Everything you order will be quickly <br> delivered to your door."
    })
    let restaurants = document.querySelectorAll(".restaurants")
    restaurants.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Poco is an international chain of family restaurants."
    })
    let shipping = document.querySelectorAll(".shipping")
    shipping.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Sign up for updates and get <br> free shipping"
    })
    let chefs = document.querySelectorAll('.chefs')
    chefs.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Our Talented Chefs'
    })
    let reservation = document.querySelectorAll('.reservation')
    reservation.forEach(element => {
        element.style.fontFamily = 'Smooch'
        element.innerHTML = 'Reservation'
    })
    let book = document.querySelectorAll('.book')
    book.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = 'Book Your Table'
    })
    let welcome = document.querySelectorAll('.welcome')
    welcome.forEach(element => {
        element.style.fontFamily = 'smooch'
        element.style.fontSize = '3vw'
        element.innerHTML = 'Wellome!'
    })
    let burger_ideas = document.querySelectorAll('.burger_ideas')
    burger_ideas.forEach(element => {
        element.innerHTML = 'Best burger ideas & traditions from the whole world'
    })
})
ENG1.addEventListener("click" , (e) => {
    e.target.style.boxShadow = "0 0 .6vw"
    ARM1.style.boxShadow = "none"
    let exchange = document.querySelectorAll(".exchange")
    exchange.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Exchange"
    })
    let menu = document.querySelectorAll(".menu")
    menu.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Menu"
    })
    let about = document.querySelectorAll(".about")
    about.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "About"
    })
    let Book_Table = document.querySelectorAll(".Book-Table")
    Book_Table.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Book a Table"
    })
    let contact = document.querySelectorAll(".contact")
    contact.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Contact"
    })
    let call_order = document.querySelector(".call_order").innerHTML = "Call and Order In"
    let close = document.querySelectorAll(".close")
    close.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "CLOSE"
    })
    let favorite = document.querySelectorAll(".favorite")
    favorite.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "FAVORITE"
    })
    let cart = document.querySelectorAll(".cart")
    cart.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SHOPPING CART"
    })
    let search = document.querySelectorAll(".search")
    search.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Search"
    })
    let unlimited = document.querySelectorAll(".unlimited")
    unlimited.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "4vw"
        element.innerHTML = 'UNLIMITED MEDIUM <span class="section1-wrapper-div1-span"> PIZZA </span>'
    })
    let Medium2 = document.querySelectorAll(".Medium2")
    Medium2.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "2vw"
        element.innerHTML = "Medium 2-topping* pizza"
    })
    let Additional = document.querySelectorAll(".Additional")
    Additional.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "*Additional charge for premium toppings. Minimum of 2 required."
    })
    let ORDER = document.querySelectorAll(".ORDER")
    ORDER.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "ORDER NOW"
    })
    let pizza = document.querySelectorAll(".pizza")
    pizza.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "PIZZA"
    })
    let chicken = document.querySelectorAll(".chicken")
    chicken.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "CHICKEN"
    })
    let drinks = document.querySelectorAll(".drinks")
    drinks.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "DRINKS"
    })
    let combo = document.querySelectorAll(".combo")
    combo.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "COMBO"
    })
    let sauces = document.querySelectorAll(".sauces")
    sauces.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SAUCES"
    })
    let kids = document.querySelectorAll(".kids")
    kids.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "KIDS MENUS"
    })
    let day = document.querySelectorAll(".day")
    day.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "7vw"
        element.innerHTML = "Any day offers"
    })
    let PHENOMENON = document.querySelectorAll(".PHENOMENON")
    PHENOMENON.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "NEW PHENOMENON <br /> BURGER TASTE"
    })
    let Other = document.querySelectorAll(".Other")
    Other.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "7vw"
        element.innerHTML = "Other flavors"
    })
    let save_room = document.querySelectorAll(".save_room")
    save_room.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SAVE ROOM. <br /> WE MADE SALATS"
    })
    let poco_store = document.querySelectorAll(".poco_store")
    poco_store.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "7vw"
        element.innerHTML = "Find a Poco  store <br /> near you"
    })
    let contact_us = document.querySelectorAll(".contact_us")
    contact_us.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "CONTACT US"
    })
    let popular_dishes = document.querySelectorAll(".popular_dishes")
    popular_dishes.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Popular dishes"
    })
    let sushi = document.querySelectorAll(".sushi")
    sushi.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SUSHI"
    })
    let salates = document.querySelectorAll(".salates")
    salates.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "SALATES"
    })
    let burger = document.querySelectorAll(".burger")
    burger.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "BURGER"
    })
    let hotdog = document.querySelectorAll(".hotdog")
    hotdog.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "12vw"
        element.innerHTML = "HOTDOG"
    })
    let order_now = document.querySelectorAll(".order_now")
    order_now.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "ORDER NOW"
    })
    let always_quality = document.querySelectorAll(".always_quality")
    always_quality.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Always Quality"
    })
    let our_services = document.querySelectorAll(".our_services")
    our_services.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.style.fontSize = "3.5vw"
        element.innerHTML = "Our Servcies"
    })
    let QUALITY = document.querySelectorAll(".QUALITY")
    QUALITY.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "QUALITY FOODS"
    })
    let RECIPES = document.querySelectorAll(".RECIPES")
    RECIPES.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "ORIGINAL RECIPES"
    })
    let DELIVERY = document.querySelectorAll(".DELIVERY")
    DELIVERY.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "FAST DELIVERY"
    })
    let quickly = document.querySelectorAll(".quickly")
    quickly.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Everything you order will be quickly <br> delivered to your door."
    })
    let restaurants = document.querySelectorAll(".restaurants")
    restaurants.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Poco is an international chain of family restaurants."
    })
    let shipping = document.querySelectorAll(".shipping")
    shipping.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = "Sign up for updates and get <br> free shipping"
    })
    let chefs = document.querySelectorAll('.chefs')
    chefs.forEach(element => {
        element.style.fontFamily = 'arnamu'
        element.innerHTML = 'Our Talented Chefs'
    })
    let reservation = document.querySelectorAll('.reservation')
    reservation.forEach(element => {
        element.style.fontFamily = 'Smooch'
        element.innerHTML = 'Reservation'
    })
    let book = document.querySelectorAll('.book')
    book.forEach(element => {
        element.style.fontFamily = 'Poppins'
        element.innerHTML = 'Book Your Table'
    })
    let welcome = document.querySelectorAll('.welcome')
    welcome.forEach(element => {
        element.style.fontFamily = 'smooch'
        element.style.fontSize = '3vw'
        element.innerHTML = 'Wellome!'
    })
    let burger_ideas = document.querySelectorAll('.burger_ideas')
    burger_ideas.forEach(element => {
        element.innerHTML = 'Best burger ideas & traditions from the whole world'
    })
})