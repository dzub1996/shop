<?php
// Объявляем нужные константы
// define('DB_HOST', 'localhost');
// define('DB_USER', 'root');
// define('DB_PASSWORD', '');
// define('DB_NAME', 'goods');
 
// Подключаемся к базе данных
function connectDB() {
    $errorMessage = 'Невозможно подключиться к серверу базы данных';
    $conn = new mysqli("localhos", "root", "", "goods");
    if (!$conn)
        throw new Exception($errorMessage);
    else {
        $query = $conn->query('set names utf8');
        if (!$query)
            throw new Exception($errorMessage);
        else
            return $conn;
    }
}

// Получение данных из массива _GET
function getOptions() {
    // Категория и цены
    $categoryId = (isset($_GET['category'])) ? (int)$_GET['category'] : 0;
    $minPrice = (isset($_GET['min_price'])) ? (int)$_GET['min_price'] : 0;
    $maxPrice = (isset($_GET['max_price'])) ? (int)$_GET['max_price'] : 1000000;
 
    // Бренды
    $brands = (isset($_GET['brands'])) ? implode($_GET['brands'], ',') : null;
 
    // Сортировка
    $sort = (isset($_GET['sort'])) ? $_GET['sort'] : 'price_asc';
    $sort = explode('_', $sort);
    $sortBy = $sort[0];
    $sortDir = $sort[1];
 
    return array(
        'brands' => $brands,
        'category_id' => $categoryId,
        'min_price' => $minPrice,
        'max_price' => $maxPrice,
        'sort_by' => $sortBy,
        'sort_dir' => $sortDir
    );
}
 
function getGoods($options, $conn) {
    // Обязательные параметры
    $minPrice = $options['min_price'];
    $maxPrice = $options['max_price'];
    $sortBy = $options['sort_by'];
    $sortDir = $options['sort_dir'];
 
    // Необязательные параметры
    $categoryId = $options['category_id'];
    $categoryWhere =
        ($categoryId !== 0)
            ? " g.category_id = $categoryId and "
            : '';
 
    $brands = $options['brands'];
    $brandsWhere =
        ($brands !== null)
            ? " g.brand_id in ($brands) and "
            : '';
 
    $query = "
        select
            g.id as good_id,
            g.good as good,
            b.brand as brand,
            g.price as price,
            g.rating as rating,
            g.photo as photo
        from
            goods as g,
            brands as b
        where
            $categoryWhere
            $brandsWhere
            g.brand_id = b.id and
            (g.price between $minPrice and $maxPrice)
        order by $sortBy $sortDir
    ";
 
    $data = $conn->query($query);
    return $data->fetch_all(MYSQLI_ASSOC);
}
 
try {
// Подключаемся к базе данных
$conn = connectDB();
 
// Получаем данные от клиента
$options = getOptions();
 
// Получаем товары
$goods = getGoods($options, $conn);
 
// Возвращаем клиенту успешный ответ
echo json_encode(array(
    'code' => 'success',
    'options' => $options,
    'goods' => $goods
));
}
catch (Exception $e) {
    // Возвращаем клиенту ответ с ошибкой
    echo json_encode(array(
        'code' => 'error',
        'message' => $e->getMessage()
    ));
}