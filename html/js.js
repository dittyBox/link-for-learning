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

// 실수로 a테그에 target을 지정을 안하였다.
// dropdown안의 a테그에 전부 target 지정을 해보자.


var atage = document.querySelectorAll('.dropdown a');
atage.forEach(function (item) {
    item.setAttribute('target', '_blank');
})
