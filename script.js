let lists = document.querySelectorAll('.list img')
let img = document.querySelector('.img')
let wrapper = document.querySelector('.wrapper')
lists.forEach(el => {
    el.addEventListener('click', function () {
        let attribute = this.getAttribute('src')
        img.setAttribute('src', attribute)
        wrapper.style.display = 'flex'
    })
})

wrapper.addEventListener('dblclick', function () {
    wrapper.style.display = 'none'
})