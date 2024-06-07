// nav closer
let openbt = document.querySelector('#open_nav');
let mobile_nav = document.querySelector('.nav-slide');
let closebt = document.querySelector('.closer');

openbt.addEventListener('click', open_nav)
closebt.addEventListener('click', close_nav)

function open_nav(){
    mobile_nav.style.display = "block";
}

function close_nav(){
    mobile_nav.style.display = "none"
}

// .........
function filter(category){
    let items = document.querySelectorAll('.days-sch');
    let container = document.querySelector('.section-34');

    items.forEach(function(item) {
        if (item.getAttribute('data-category') === category) {
          container.prepend(item);
        }
      });
}