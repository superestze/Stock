import * as express from 'express'
import * as cors from 'cors'

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

const stocks: Stock[] = [
  new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票', ['1', '2', '3']),
  new Stock(2, '第二只股票', 2.0, 4, '这是第二只股票', ['4', '5', '6']),
  new Stock(3, '第三只股票', 3.0, 5, '这是第三只股票', ['4', '3', '2']),
  new Stock(4, '第四只股票', 4.12, 1, '这是第四只股票', ['9', '2', '5']),
  new Stock(5, '第五只股票', 5.67, 3, '这是第五只股票', ['7', '3', '6']),
  new Stock(6, '第六只股票', 9.78, 7, '这是第六只股票', ['1', '6', '7']),
  new Stock(7, '第七只股票', 0.15, 5, '这是第七只股票', ['8', '5', '8']),
  new Stock(7, '第七只股票', 0.15, 5, '这是第七只股票', ['8', '5', '8'])
]

const app = express()
app.use(cors())

app.get('', (request, response) => {
  response.send('这里是首页!!!!!')
})

app.get('/api/stock', (request, response) => {
  response.json(stocks)
})

app.get('/api/stock/:id', (request, response) => {
  response.json(stocks.filter((stock: Stock) => stock.id == request.params.id))
  // response.send('1111');
})

const server = app.listen(8080, 'localhost', () => {
  console.log('服务以及启动')
})
