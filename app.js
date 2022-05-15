var nav_btn = document.querySelector('.android-btn')
var nav_bar = document.querySelector('.android-nav')

var nav_items = document.querySelectorAll('.android-nav li a')

nav_btn.addEventListener('click',()=>{
    console.log('yeah')
    // nav_bar.classList.add('appear')

    if(nav_bar.classList.contains('appear'))
    {
        nav_bar.classList.remove('appear')
        nav_bar.classList.add('disappear')
    }
    else{
        nav_bar.classList.remove('disappear')
        nav_bar.classList.add('appear')
    }
})

document.addEventListener('click',(e)=>{
   let nav_items_clicked = false;
   let clicked_item = e.target;
   console.log(clicked_item)

   nav_items.forEach(item=>{
       if(item === clicked_item)
       {
           nav_items_clicked = true
          
       }
   })

   if(clicked_item === nav_bar || clicked_item === nav_btn || nav_items_clicked){
       
   }
   else{
       nav_bar.classList.remove('appear')
       nav_bar.classList.add('disapper')
     
   }


})