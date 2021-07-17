const tabs=document.querySelectorAll('[data-tab-target]')
const tabContents=document.querySelectorAll('[data-tab-content]')
const tv=document.querySelectorAll('tv')
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
        tabContent.classList.remove('active')
})
target.classList.add('active')
})
})
tv.forEach((item)=>{
    item.addEventListener('click',()=>
    {
        let el=document.getElementById(item.getAttribute('tv'));
        el.scrollIntoView();

    })
})