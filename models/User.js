const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true, //잘라줌
        unique: 1 //중복 방지
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {//관리자, 유저
        type: Number,
        default: 0
    },
    image: String, //이렇게도 타입 지정 가능
    token:{ //유효성
        type: String

    },
    tokenExp: {//토큰 사용기간
        type: Number
    }

})

const User = mongoose.model('User',userSchema)//스키마를 모델로 감싸줌 , 모델의 이름 : User

module.exports = { User } //이 모델을 다른곳에서도 쓸 수 있게
