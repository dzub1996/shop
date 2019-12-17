var cart = {};
function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
    else {
        $('.main-cart').html('Корзина пуста!');
    }
}

function showCart() {
    //вывод корзины
    if (!isEmpty(cart)) {
        $('.main-cart').html('Корзина пуста!');
    }
    else {
        // cart=JSON.parse(cart);
        // console.log(cart);
        // var out='';
        // for (var id in cart) {
        //             out += `<button data-id="${id}" class="del-goods">x</button>`;
        //             out += `<img src="images\\${cart[id].img}">`;
        //             out += ` ${cart[id].name  }`;
        //             out += `  <button data-id="${cart[key].name}" class="minus-goods">-</button>  `;
        //             out += ` ${cart[key].name}  `;
        //             out += `  <button data-id="${cart[key].name}" class="plus-goods">+</button>  `;
        //             out += cart[key].name*cart[key].price;
        //             out += '<br>';
        //         }
        //     $('.main-cart').html(out);
        //     $('.del-goods').on('click', delGoods);
        //     $('.plus-goods').on('click', plusGoods);
        //     $('.minus-goods').on('click', minusGoods);
        $.post(
            "admin/core.php",
            {
                "action":"loadGoods"
            },
            goodsOut
        )
        
        // $.getJSON('goods.json', function (data) {
        //     var goods = data;
        //     var out = '';
        //     for (var id in cart) {
        //         out += `<button data-id="${id}" class="del-goods">x</button>`;
        //         out += `<img src="images\\${goods[id].img}">`;
        //         out += ` ${goods[id].name  }`;
        //         out += `  <button data-id="${id}" class="minus-goods">-</button>  `;
        //         out += ` ${cart[id]}  `;
        //         out += `  <button data-id="${id}" class="plus-goods">+</button>  `;
        //         out += cart[id]*goods[id].cost;
        //         out += '<br>';
        //     }
        // $('.main-cart').html(out);
        // $('.del-goods').on('click', delGoods);
        // $('.plus-goods').on('click', plusGoods);
        // $('.minus-goods').on('click', minusGoods);
        //  });
    }
}
function goodsOut(data) {
            // вывод на страницу
            // cart=JSON.parse(cart);
            data=JSON.parse(data)
            console.log(cart);
            var out='';
            for (var id in cart) {
                        out += `<button data-id="${id}" class="del-goods">x</button>`;
                        // out += `<img src="images\\${cart[key].img}">`;
                        out += ` ${id  }`;
                        out += `  <button data-id="${id}" class="minus-goods">-</button>  `;
                        out += ` ${cart[id]}  `;
                        out += `  <button data-id="${id}" class="plus-goods">+</button>  `;
                        for (var key in data){
                            if (data[key].name==id)
                                out += data[key].price*cart[id] + 'рублей.';
                        }
                        // out += cart[name]*cart[price];
                        out += '<br>';
                    }
            $('.main-cart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
        }
function delGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function plusGoods() {
    //добавляет товар в корзине
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}
function minusGoods() {
    //уменьшаем товар в корзине
    var id = $(this).attr('data-id');
    if (cart[id]==1) {
        delete cart[id];
    }
    else {
        cart[id]--;
    }
    saveCart();
    showCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

function sendEmail() {
    var ename = $('#ename').val();
    var email = $('#email').val();
    var ephone = $('#ephone').val();
    if (ename!='' && email!='' && ephone!='') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php",
                {
                    "ename" : ename,
                    "email" : email,
                    "ephone" : ephone,
                    "cart" : cart
                },
                function(data){
                    if (data==1) {
                        alert('Заказ отправлен');
                    }
                    else {
                        alert('Повторите заказ');
                    }
                }
            );
        }
        else {
            alert('Корзина пуста');
        }
    }
    else {
        alert('Заполните поля');
    }

}


$(document).ready(function () {
   loadCart();
   $('.send-email').on('click', sendEmail); // отправить письмо с заказом
});