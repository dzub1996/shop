var cart = {};

function init() {
    $.post(
        "admin/core.php",
        {
            "action":"loadGoods"
        },
        goodsOut
    );
}

function goodsOut(data) {
    data=JSON.parse(data);
    console.log(data);
    var out='';
    var out2='';
    out2 +=`<button class="search">6ГБ видеопамяти</button>`;
    out2 +=`<button class="search2">8ГБ видеопамяти</button>`;
    out2 +=`<button class="search3">NVIDIA</button>`;
    out2 +=`<button class="search4">AMD</button>`;
    $('.goods-out2').html(out2);
    $('.search').on('click', search);
    $('.search2').on('click', search2);
    $('.search3').on('click', search3);
    $('.search4').on('click', search4);
    for (var key in data) {
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price">${data[key].price}</div>`;
        out +=`<button class="add-to-cart" data-id="${data[key].name}">Купить</button>`;
        out +='</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function search() {
    $.post(
        "admin/core.php",
        {
            "action":"getGoods"
        },
        search6gb
    );
}

function search2() {
    $.post(
        "admin/core.php",
        {
            "action":"getGoods2"
        },
        search8gb
    );
}

function search3() {
    $.post(
        "admin/core.php",
        {
            "action":"getGoods3"
        },
        searchNVIDIA
    );
}

function search4() {
    $.post(
        "admin/core.php",
        {
            "action":"getGoods4"
        },
        searchAMD
    );
}

function search6gb(data) {
    data=JSON.parse(data);
    console.log(data);
    var out='';
    var out2='';
    out2 +=`<button class="search">6ГБ видеопамяти</button>`;
    out2 +=`<button class="search2">8ГБ видеопамяти</button>`;
    out2 +=`<button class="search3">NVIDIA</button>`;
    out2 +=`<button class="search4">AMD</button>`;
    $('.goods-out2').html(out2);
    $('.search').on('click', search);
    $('.search2').on('click', search2);
    $('.search3').on('click', search3);
    $('.search4').on('click', search4);
    for (var key in data) {
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price">${data[key].price}</div>`;
        out +=`<button class="add-to-cart" data-id="${data[key].name}">Купить</button>`;
        out +='</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function search8gb(data) {
    data=JSON.parse(data);
    console.log(data);
    var out='';
    var out2='';
    out2 +=`<button class="search">6ГБ видеопамяти</button>`;
    out2 +=`<button class="search2">8ГБ видеопамяти</button>`;
    out2 +=`<button class="search3">NVIDIA</button>`;
    out2 +=`<button class="search4">AMD</button>`;
    $('.goods-out2').html(out2);
    $('.search').on('click', search);
    $('.search2').on('click', search2);
    $('.search3').on('click', search3);
    $('.search4').on('click', search4);
    for (var key in data) {
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price">${data[key].price}</div>`;
        out +=`<button class="add-to-cart" data-id="${data[key].name}">Купить</button>`;
        out +='</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function searchNVIDIA(data) {
    data=JSON.parse(data);
    console.log(data);
    var out='';
    var out2='';
    out2 +=`<button class="search">6ГБ видеопамяти</button>`;
    out2 +=`<button class="search2">8ГБ видеопамяти</button>`;
    out2 +=`<button class="search3">NVIDIA</button>`;
    out2 +=`<button class="search4">AMD</button>`;
    $('.goods-out2').html(out2);
    $('.search').on('click', search);
    $('.search2').on('click', search2);
    $('.search3').on('click', search3);
    $('.search4').on('click', search4);
    for (var key in data) {
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price">${data[key].price}</div>`;
        out +=`<button class="add-to-cart" data-id="${data[key].name}">Купить</button>`;
        out +='</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function searchAMD(data) {
    data=JSON.parse(data);
    console.log(data);
    var out='';
    var out2='';
    out2 +=`<button class="search">6ГБ видеопамяти</button>`;
    out2 +=`<button class="search2">8ГБ видеопамяти</button>`;
    out2 +=`<button class="search3">NVIDIA</button>`;
    out2 +=`<button class="search4">AMD</button>`;
    $('.goods-out2').html(out2);
    $('.search').on('click', search);
    $('.search2').on('click', search2);
    $('.search3').on('click', search3);
    $('.search4').on('click', search4);
    for (var key in data) {
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price">${data[key].price}</div>`;
        out +=`<button class="add-to-cart" data-id="${data[key].name}">Купить</button>`;
        out +='</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    var id = $(this).attr('data-id');
    if (cart[id]==undefined) {
        cart[id] = 1; //если в корзине нет товара - делаем равным 1
    }
    else {
        cart[id]++; //если такой товар есть - увеличиваю на единицу
    }
    showMiniCart();
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function showMiniCart() {
    var out="";
    for (var key in cart) {
        out += key +' --- '+ cart[key]+'<br>';
    }
    $('.mini-cart').html(out);
}

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function () {
    init();
    loadCart();
});
