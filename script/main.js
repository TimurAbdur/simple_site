const menuBtn = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click',()=>{
    menu.classList.add('menu--active')
})

menuBtnClose.addEventListener('click',()=>{
    menu.classList.remove('menu--active')
})

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('anim--active');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim');

  for (let elm of elements) {
    observer.observe(elm);
  }


