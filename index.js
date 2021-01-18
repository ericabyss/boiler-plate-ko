const express = require('express')  //express module을 가져옴
const app = express() //function을 이용하여 새로운 express app을 만들고
const port = 5000 //백서버로 둘 포트
const bodyParser = require('body-parser'); //3. body-parser를 가져와 줌
const { User } = require("./models/User");//1. User 데이터를 가져와 줘야함

//application/x-www-form-urlencoded <-이렇게 된 데이터를 분석하여 가져와 줌. body-parser에 옵션을 줌
app.use(bodyParser.urlencoded({extended: true}));

//application/json <-이런 데이터를 분석하여 가져와줌
app.use(bodyParser.json());


const mongoose = require('mongoose')//mongoose연결
mongoose.connect('mongodb+srv://john:abcd1234@boilerplate.p8jgc.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))//잘 연결이 안되었을때



  app.get('/', (req, res) => res.send('Hello World!')) //루트 디렉토리에서 출력, 간단한 라우트

  app.post('/register', (req, res) => {
    //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
   
    const user = new User(req.body); //2. 인스턴스를 만들어줌. req.body : id, passwd등 정보가 들어있음<-body-parser를 통해서
  
    user.save((err, userInfo)=>{//save<-mongoDB에서 오는 메소드. 정보들이 userModel 에 저장됨. err발생시 json형식으로 반환
        if(err) return res.json({ success: false, err })//json형식으로 에러가 있을 경우 전달
        return res.status(200).json({ //status(200)은 성공했다는 뜻
          success: true
      })
    })//user정보들이 저장됨
  }) 



  app.listen(port, () => console.log(`Example app listening on port ${port}!`))//설정 포트에서 앱을 실행