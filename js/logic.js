$('.hero-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})

    $('.brand-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1024:{
                items:4
            }
        }
    })


$('.customNextBtn-brand').click(function() {
    $('.brand-carousel').trigger('next.owl.carousel');
})

$('.customPrevBtn-brand').click(function() {
    $('.brand-carousel').trigger('prev.owl.carousel');
})



$('.service-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.customNextBtn-services').click(function() {
    $('.service-carousel').trigger('next.owl.carousel');
})

$('.customPrevBtn-services').click(function() {
    $('.service-carousel').trigger('prev.owl.carousel');
})



$('.blog-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        568:{
            items:2
        },
        1024:{
            items:3
        }
    }
})
$('.customNextBtn-blog').click(function() {
    $('.blog-carousel').trigger('next.owl.carousel');
})

$('.customPrevBtn-blog').click(function() {
    $('.blog-carousel').trigger('prev.owl.carousel');
})

var darkLayer = document.querySelector(".rs_layer");

let categoryDrawer = () => {
    let categories = document.querySelector(".category-drawer");
    if(!categories.classList.contains("category-drawerOpen")) {
        categories.classList.add("category-drawerOpen");
        darkLayer.classList.add("rs_layerOpen")
    }
    else{
        categories.classList.remove("category-drawerOpen")
        darkLayer.classList.remove("rs_layerOpen")
    }
}
darkLayer.addEventListener("click", categoryDrawer)


var darkLayer1 = document.querySelector(".rs_layer1");

let navDrawer = () => {
    let navbar = document.querySelector(".sideNar");
    if(!navbar.classList.contains("category-drawerOpen")) {
        navbar.classList.add("category-drawerOpen");
        darkLayer1.classList.add("rs_layerOpen")
    }
    else{
        navbar.classList.remove("category-drawerOpen")
        darkLayer1.classList.remove("rs_layerOpen")
    }
}
darkLayer1.addEventListener("click", navDrawer)