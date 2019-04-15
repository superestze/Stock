"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票', ['1', '2', '3']),
    new Stock(2, '第二只股票', 2.0, 4, '这是第二只股票', ['4', '5', '6']),
    new Stock(3, '第三只股票', 3.0, 5, '这是第三只股票', ['4', '3', '2']),
    new Stock(4, '第四只股票', 4.12, 1, '这是第四只股票', ['9', '2', '5']),
    new Stock(5, '第五只股票', 5.67, 3, '这是第五只股票', ['7', '3', '6']),
    new Stock(6, '第六只股票', 9.78, 7, '这是第六只股票', ['1', '6', '7']),
    new Stock(7, '第七只股票', 0.15, 5, '这是第七只股票', ['8', '5', '8']),
    new Stock(7, '第七只股票', 0.15, 5, '这是第七只股票', ['8', '5', '8'])
];
var app = express();
app.use(cors());
app.get('', function (request, response) {
    response.send('这里是首页!!!!!');
});
app.get('/api/stock', function (request, response) {
    response.json(stocks);
});
app.get('/api/stock/:id', function (request, response) {
    response.json(stocks.filter(function (stock) { return stock.id == request.params.id; }));
    // response.send('1111');
});
var server = app.listen(8080, 'localhost', function () {
    console.log('服务以及启动');
});
