const mainContainer=document.querySelector('.mainContainer');
const slideBar=document.querySelector('.sliderbar');
const navBar=document.querySelector('.nav-bar');
// Slidebar Controller
const closedMenu = document.querySelector('.closedMenu');
const openedMenu = document.querySelector('.openedMenu');

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
