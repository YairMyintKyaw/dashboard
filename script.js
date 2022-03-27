const mainContainer=document.querySelector('.mainContainer');
const slideBar=document.querySelector('.sliderbar');
const navBar=document.querySelector('.nav-bar');

// Slidebar Controller
const closedMenu = document.querySelector('.closedMenu');
const openedMenu = document.querySelector('.openedMenu');

// Search Icon and Search Bar
const searchIcon=document.querySelector('.search')
const searchBar=document.querySelector('.searchbox')
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

    mainContainer.style.gridTemplateColumns='minmax(200px,1fr) 5fr'
    //hide openedMenu Icon
    openedMenu.style.display='none';
})

searchIcon.addEventListener('click',()=>{
    if(getComputedStyle(searchBar).display =='flex') return ;
    searchBar.style.display='flex';
    backIcon.style.display='flex';

    //hide every element except backIcon and search bar
    displayOrHideElemnts('none');
})



backIcon.addEventListener('click',()=>{
    searchBar.style.display='none';
    backIcon.style.display='none';

    //display every element except backIcon and search bar
    displayOrHideElemnts('flex')
})

function displayOrHideElemnts(displayValue){
    for(let i=0; i<navBar.childElementCount; i++){
        let element = navBar.children[i];
        if(element==searchBar || element==backIcon) continue;
        else{
            element.style.display=displayValue;
        }
    }
}


window.addEventListener('resize',()=>{
    // window.reload();
    if(document.body.offsetWidth>=420){
        searchBar.style.display='flex';
        backIcon.style.display='none';
        displayOrHideElemnts('flex');
    }else if(document.body.offsetWidth<=420 && 
                getComputedStyle(backIcon).display != 'flex'){
        searchBar.style.display='none';
        backIcon.style.display='none';
    }
    
    if(getComputedStyle(slideBar).display!='none'){
        openedMenu.style.display='none';
    }
})