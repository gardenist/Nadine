// USER 테이블에서 데이터를 조회하는 역할
// ID - PASSWORD - NAME - NICKNAME
//하위 소스는 MySQL 대체 => 모양새는 동일 어디다 저장하는지만 다름 = 데이터소스
const users = {
    "nhkim556" : {
        id: "nhkim556",
        pw: "12341234",
        name: "김나현",
        nickname: "nhk"
    },
    // ...
}


function login(id, pw){
    let user = users[id]
    //id 와 pw가 일치하면 데이터를 반환
    if(user){

        if(user.pw === pw){
            return user
        }
    }
    // 아니면  undefined 반환

}


exports.login = login ;