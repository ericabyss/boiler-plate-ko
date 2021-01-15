const express = require('express')  //express module을 가져옴
const app = express() //function을 이용하여 새로운 express app을 만들고
const port = 5000 //백서버로 둘 포트

const { User } = require("./models/User");

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://john:abcd1234@boilerplate.p8jgc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connnected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!')) //루트 디렉토리에서 출력, 간단한 라우트 만듦

app.post('/register', (req, res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.



})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}!`))
