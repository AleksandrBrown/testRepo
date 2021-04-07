const subscribe_block = document.querySelector('.subscribe-block')
const subscribe_block_close = document.querySelector('.subscribe-block__close-btn')
const cart_value = document.querySelector('#cart-value')
const cart_count = document.querySelector('#cart-count')
const wrapper = document.querySelector('.wrapper__container')
const nav = document.querySelector('.navigation')
const nav_btn = document.querySelector('.navigation__container__btn__button')
const cart = document.querySelector('.cart-block')
const cart_btn = document.querySelector('.cart-block__btn')
const main_container = document.querySelector('.main-container')
const logo_to_main = document.querySelector('.header__logo-icon')
//
const nav_menu = document.querySelector('.navigation__container__menu__navigation')
const catalog_page = document.querySelector('.catalog-template')
const catalog_container = document.querySelector('.catalog-template__container')
const breadcrumbs_link = document.querySelector('.breadcrumbs__link')
const cart_container = document.querySelector('.cart-block__cart-info__cart-container__cart')
//
//item-page
const item_page_container = document.querySelector('.item-page')
const btn_add_item_page = document.querySelector('.item-page__filters__navbtns__addbtn')
const btn_favorite_item_page = document.querySelector('.item-page__filters__navbtns__favoritebtn')
const btn_download_item_page = document.querySelector('.item-page__filters__navbtns__downloadbtn')
const btn_close_item_page = document.querySelector('.item-page__filters__navbtns__closebtn')

//breadcrumbs
let item_page_section_bread = document.querySelector('.item-page__descr__breadcrumbs__section')
let item_page_product_bread = document.querySelector('.item-page__descr__breadcrumbs__nameofitem')

//photos
let item_page_gallery_post_1 = document.querySelector('#post-1')
let item_page_gallery_post_2 = document.querySelector('#post-2')
let item_page_gallery_post_3 = document.querySelector('#post-3')
let item_page_gallery_post_4 = document.querySelector('#post-4')

//main describe
let item_page_descr_text = document.querySelector('.item-page__descr__text')


//colors
let item_page_color_container_firstcolor = document.querySelector('.item-page__filters__choosecolor__color-container__firstcolor')
let item_page_color_container_secondcolor = document.querySelector('.item-page__filters__choosecolor__color-container__secondcolor')
let item_page_color_container_thirdcolor = document.querySelector('.item-page__filters__choosecolor__color-container__thirdcolor')

//title
let item_page_title_of_item = document.querySelector('.item-page__filters__title__name')
let item_page_id_of_item = document.querySelector('.item-page__filters__title__id')

//structure
let item_page_structure_of_item = document.querySelector('.item-page__filters__structure__list')

//sizes
let item_page_size_list = document.querySelector('.item-page__filters__size__list')

//clean
let item_page_clean_recom = document.querySelector('.item-page__filters__clean__describes')

//cost
let item_page_cost = document.querySelector('.item-page__filters__cost__value')

//
let count = 0
let cartSum = 0
cart_value.innerText = count
cart_count.innerText = cartSum

nav_btn.addEventListener('click', () => {   // меню
    if(nav.classList.contains('hide_nav')) {
        nav_btn.classList.add('active_nav_btn')
        nav.classList.add('active_nav')
        nav.classList.remove('hide_nav')
        main_container.style.filter = 'blur(100px)'
    } else {
        nav_btn.classList.remove('active_nav_btn')
        nav.classList.remove('active_nav')
        nav.classList.add('hide_nav')
        main_container.style.filter = 'blur(0)'
    }
})
cart_btn.addEventListener('click', () => {  // блок с корзиной
    if(cart.classList.contains('cart_hide')) {
        cart.classList.add('cart_active')
        cart.classList.remove('cart_hide')
        main_container.style.filter = 'blur(100px)'
    } else {
        cart.classList.remove('cart_active')
        cart.classList.add('cart_hide')
        main_container.style.filter = 'blur(0)'
    }
})

window.onload = () => {
    subscribe_block.style.display = 'flex'
    main_container.style.filter = 'blur(100px)'
    subscribe_block_close.addEventListener('click', () => {
        subscribe_block.style.display = 'none'
        main_container.style.filter = 'blur(0px)'
    })

}


//catalog fnc

let arr_items = [
    {
        name_of_section: 'Водолазка',
        number_of_products: '6',
        products: [
            {
                main_img: './assets/img/item-imgs/8939560-1.svg',
                imgs:[
                    './assets/img/item-page-temp-photo/8939560-1.svg',
                    './assets/img/item-page-temp-photo/8939560-2.svg',
                    './assets/img/item-page-temp-photo/8939560-3.svg',
                    './assets/img/item-page-temp-photo/8939560-4.svg'
                
                ],
                name: 'Водолазка',
                name_of_product: 'гольф',
                id: 1,
                cost: 1200,
                color: 'белый',
                colors: ['#fff','#000','red'],
                sizes: ['S','M','L'],
                title: '',
                product_id: 2749127,
                structure: ['50% шерсть','50% акрил'],
                clean: '30’; 400',
                text: `Стильная и удобная водолазка (гольф) отличный выбор для создания 
                спортивного и классического образа. Прилегающий силуэт, приятное качество. 
                Водолазка - гольф отлично подойдет для базовой вещи, которая сочетается с брюками, 
                джинсами, лосинами, юбками, пиджаками, подходит для сочетания с любой обувью. 
                Безупречно смотрится под меховую жилетку и пальто.`,
            },
            {
                main_img: './assets/img/item-imgs/9794796-2.svg',
                name: 'Водолазка',
                id: 2,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/10799296-1.svg',
                name: 'Водолазка',
                id: 3,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/8939560-1.svg',
                name: 'Водолазка',
                id: 4,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/9794796-2.svg',
                name: 'Водолазка',
                id: 5,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/10799296-1.svg',
                name: 'Водолазка',
                id: 6,
                cost: 1200,
                color: 'белый'
            },
        ]
    }
]

function create_catalog() {
    nav_menu.addEventListener('click', evt => {
        console.log(evt.target)
        let name_section = evt.target.dataset.name
        arr_items.forEach((item)=>{
            if(item.name_of_section.indexOf(name_section) != -1){
                catalog_page.style.display = 'flex'
                wrapper.style.background = '#fff'
                item.products.forEach(i => {
                    create_item(i)
                    breadcrumbs_link.innerText = name_section
                    // console.log(create_item(i))
                    catalog_container.insertAdjacentHTML('beforeend',create_item(i))
                })
                catalogBtns ()
                logo_to_main.addEventListener('click',() => {
                    catalog_page.style.display = 'none'
                    item_page_container.style.display = 'none'
                    wrapper.style.background = '#E6E6E4'
                })
            }
        
        })
        sizeTab()
        nav_btn.classList.remove('active_nav_btn')
        nav.classList.remove('active_nav')
        nav.classList.add('hide_nav')
        main_container.style.filter = 'blur(0)' 
    })
}
function create_item(item) {
    return `
        <div class="catalog-item-block">
            <img class="catalog-item-block__item-img" src="${item.main_img}" data-id="${item.id}">
            <div class="catalog-item">
                <div class="catalog-item__name"><p>${item.name}</p></div>
                <div class="catalog-item__btns">
                    <button class="catalog-item__btns__addtofavorite"><img src="../assets/img/icons/addtofavorite.svg" ></button>
                    <button class="catalog-item__btns__addtocart" data-id="${item.id}">+</button>
                </div>
            </div>
            <p>${item.color}</p>
            <p>${item.cost}</p>
        </div>
    `
}
create_catalog ()
function catalogBtns () {
    let btn_to_item_page = document.querySelector('.catalog-template__container')
    btn_to_item_page.addEventListener('click', evt => {
        if(evt.target.classList.contains('catalog-item-block__item-img') != -1 && (evt.target.dataset.id != undefined)){
            console.log(evt.target.dataset.id)
            arr_items[0].products.forEach(item => {
                if(evt.target.dataset.id == item.id){
                    item_page_container.style.display = 'flex'
                    item_page_section_bread.innerText = item.name
                    item_page_product_bread.innerText = item.name_of_product
                    item_page_gallery_post_1.src = item.imgs[0]
                    item_page_gallery_post_2.src = item.imgs[1]
                    item_page_gallery_post_3.src = item.imgs[2]
                    item_page_gallery_post_4.src = item.imgs[3]
                    item_page_descr_text.innerText = item.text
                    item_page_color_container_firstcolor.style.background =  item.colors[0]
                    item_page_color_container_secondcolor.style.background = item.colors[1]
                    item_page_color_container_thirdcolor.style.background = item.colors[2]
                    item_page_title_of_item.innerText = item.name
                    item_page_id_of_item.innerText = item.product_id
                    item.structure.forEach(i=>{
                        let n = document.createElement('li')
                        n.innerText = i
                        item_page_structure_of_item.appendChild(n)
                    })
                    item.sizes.forEach(i=>{
                        let n = document.createElement('button')
                        n.classList.add('size_btn')
                        n.innerText = i
                        item_page_size_list.appendChild(n)
                    })
                    item_page_clean_recom.innerText = item.clean
                    item_page_cost.innerText = item.cost
                }
            })
            btn_close_item_page.addEventListener('click', () => {
                item_page_container.style.display = 'none'
            })
        }
    })
}


// btn_add_item_page.addEventListener('click',evt => {

// })
// Authorization 
const authorization_user_btn = document.querySelector('.header__subnav-block__user-btn')
const authorization_block = document.querySelector('.authorization_block')
const sign_in_btn = document.querySelector('.authorization_block__title__container__title-btn__sign')
const regestration_btn = document.querySelector('.authorization_block__title__container__title-btn__reg')
const authorization_block_close_btn = document.querySelector('.authorization_block__close-btn')
const registration_block = document.querySelector('.authorization_block__container__content__registration')
const sign_in_block = document.querySelector('.authorization_block__container__content__sign-in')

authorization_user_btn.addEventListener('click', () => {
    authorization_block.style.display = 'flex'
    main_container.style.filter = 'blur(100px)'
    authorizationLogic()
})

function authorizationLogic () {
    sign_in_btn.addEventListener('click', () => {
        sign_in_btn.classList.add('isActivAuthorization')
        regestration_btn.classList.remove('isActivAuthorization')
        sign_in_block.style.display = 'flex'
        registration_block.style.display = 'none'
    })
    regestration_btn.addEventListener('click', () => {
        regestration_btn.classList.add('isActivAuthorization')
        sign_in_btn.classList.remove('isActivAuthorization')
        sign_in_block.style.display = 'none'
        registration_block.style.display = 'flex'
    })
    authorization_block_close_btn.addEventListener('click', () => {
        authorization_block.style.display = 'none'
        main_container.style.filter = 'blur(0px)'
        if(sign_in_btn.classList.contains('isActivAuthorization') == false) {
            sign_in_btn.classList.add('isActivAuthorization')
            regestration_btn.classList.remove('isActivAuthorization')
        }
    })
}

//size-tab
let size_btns = document.querySelector('.size-btn-tab')
const size_tab_close_btn = document.querySelector('.size-tab__close-btn')
const size_tab_container = document.querySelector('.size-tab')
function sizeTab () {
    main_container.addEventListener('click', evt => {
        if(evt.target.classList.contains('size-btn-tab') != 0){
            size_tab_container.style.display = 'flex'
            main_container.style.filter = 'blur(100px)'
            closeSizeTab()
        }
    })
    function closeSizeTab () {
        size_tab_close_btn.addEventListener('click', () => {
            size_tab_container.style.display = 'none'
            main_container.style.filter = 'blur(0px)'
        })
    }
}

// let n_a = document.querySelector('.catalog-item-block')

function cartProductAdd () {
    catalog_container.addEventListener('click', evt => {
        console.log(evt.target)
        if(evt.target.classList.contains('catalog-item__btns__addtocart') != -1) {
            let item_id = evt.target.dataset.id
            arr_items[0].products.forEach(item => {
                if(item_id == item.id){
                    count += 1
                    cart_value.innerText = count
                    cartSum += item.cost
                    cart_count.innerHTML = cartSum
                    cart_container.insertAdjacentHTML('beforeend',cartItemTemp(item))
                }
            })
        }
    })
}
function cartItemTemp (item) {
    return `
        <div class="cartItemIn">
            <div class="cartItemIn__photo">
                <img src="${item.main_img}" alt="item-photot">
            </div>
            <div class="cartItemIn__descr">
                <div class="cartItemIn__descr__title">
                    ${item.name}
                </div>
                <div class="cartItemIn__descr__color">${item.color}</div>
                <div class="cartItemIn__descr__size">${item.sizes}</div>
                <div class="cartItemIn__descr__btns">
                    <button class="cartItemIn__descr__btns__remove">-</button>
                    <span class="cartItemIn__descr__btns__count">1</span>
                    <button class="cartItemIn__descr__btns__add">+</button>
                </div>
                <div class="cartItemIn__descr__cost">
                    ${item.cost}
                </div>
            </div>
        </div>
    `
}
cartProductAdd()