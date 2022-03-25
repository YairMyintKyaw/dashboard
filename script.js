const mainContainer=document.querySelector('.mainContainer');
const slideBar=document.querySelector('.sliderbar');
const navBar=document.querySelector('.nav-bar');

// Slidebar Controller
const closedMenu = document.querySelector('.closedMenu');
const openedMenu = document.querySelector('.openedMenu');

// Search Icon and Search Bar
const searchIcon=document.querySelector('.search')
const searchBar=document.querySelector('.nav-bar input')
const backIcon=document.querySelector('.backIcon')

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
    backIcon.style.display='flex'
    backIcon.style.right=`${searchBar.offsetLeft}px`

    //hide every element except backIcon and search bar
    displayOrHideElemnts(0);
})

backIcon.addEventListener('click',()=>{
    searchBar.style.display='none';
    backIcon.style.display='none'

    //display every element except backIcon and search bar
    displayOrHideElemnts(1)
})

function displayOrHideElemnts(opacity){
    for(let i=0; i<navBar.childElementCount; i++){
        let element = navBar.children[i];
        if(element==searchBar || element==backIcon) continue;
        else{
            element.style.opacity=opacity;
        }
    }
}


window.addEventListener('resize',()=>{
    if(document.body.offsetWidth>=420){
        searchBar.style.display='inline-block'
    }else{
        searchBar.style.display='none'
    }
})