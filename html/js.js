const dropdownToggles = document.querySelectorAll('.dropdown-toggle')
const dropdowns = document.querySelectorAll('.dropdown')
const dropdownMenus = document.querySelectorAll('.dropdown-menu')
const dropdownItems = document.querySelectorAll('.dropdown-item')

//legend 클릭 되면 내용을 보여라

dropdownToggles.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const dropdown = e.currentTarget.parentNode.querySelector('.dropdown');
        dropdown.classList.toggle('show');
        
        const marker = e.currentTarget.querySelector('.marker');
        marker.classList.toggle('hide');
        console.log(marker);
    })
})