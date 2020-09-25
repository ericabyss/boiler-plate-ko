const express = require('express')  //express module을 가져옴
const app = express() //function을 이용하여 새로운 express app을 만들고
const port = 5000 //백서버로 둘 포트


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://john:abcd1234@boilerplate.p8jgc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connnected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!SSSSSUUUUUKYOUNG')  //루트 디렉토리에서 출력
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})