const express = require('express')  //express module을 가져옴
const app = express() //function을 이용하여 새로운 express app을 만들고
const port = 5000 //백서버로 둘 포트

const mongoose = require('mongoose')//mongoose연결
mongoose.connect('mongodb+srv://john:<abcd1234>@boilerplate.p8jgc.mongodb.net/<boilerplate>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))//잘 연결이 안되었을때



  app.get('/', (req, res) => res.send('Hello World!')) //루트 디렉토리에서 출력, 간단한 라우트

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))//설정 포트에서 앱을 실행