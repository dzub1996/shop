var cart = {};
function loadCart() {
    if (localStorage.getItem('cart')) {
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
        $.post(
            "admin/core.php",
            {
                "action":"loadGoods"
            },
            goodsOut
        )
    }
}
function goodsOut(data) {
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
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function isEmpty(object) {
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
