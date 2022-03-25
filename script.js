const mainContainer=document.querySelector('.mainContainer');
const slideBar=document.querySelector('.sliderbar');
const navBar=document.querySelector('.nav-bar');

// Slidebar Controller
const closedMenu = document.querySelector('.closedMenu');
const openedMenu = document.querySelector('.openedMenu');

// Search Icon and Search Bar
const searchIcon=document.querySelector('.search')
const searchBar=document.querySelector('.nav-bar input')
closedMenu.addEventListener('click',()=>{
    
    //make slidebar disappear
    slideBar.style.display='none'

    mainContainer.style.gridTemplateColumns='1fr';

    //display openedMenu Icon
    openedMenu.style.display='inline';
    navBar.style.gridTemplateColumns='repeat(2,auto) 3fr auto 1fr'

})

openedMenu.addEventListener('click',()=>{
    
    //make slidebar appear
    slideBar.style.display='grid';

    mainContainer.style.gridTemplateColumns='minmax(200px,1fr) 5fr';

    //hide openedMenu Icon
    openedMenu.style.display='none';
    navBar.style.gridTemplateColumns='auto 3fr auto 1fr'
})

searchIcon.addEventListener('click',()=>{
    searchBar.style.display='inline';
})

window.addEventListener('click',(e)=>{
    if(document.body.offsetWidth<=420 && 
            e.target !=searchBar &&
            e.target !=navBar &&
            checkIsItClicked(e.target,navBar.childNodes) &&
            e.target.parentElement != searchIcon &&
            e.target.parentElement.parentElement!= searchIcon){
        searchBar.style.display='none';
    }
})

function checkIsItClicked(element, elementList){
     let isTrue;
     elementList.forEach((elementInList)=>{
         if(isTrue==true) return true;
         else if(element==elementInList){
             isTrue=false;
         }
         else{
             isTrue=true;
         }
     })
     return isTrue;
}

window.addEventListener('resize',()=>{
    if(document.body.offsetWidth>=420){
        searchBar.style.display='inline-block'
    }else{
        searchBar.style.display='none'
    }
})