"use strict";

const app = require("../app");  //상위폴더(..)의 app을 실행 
const port = 3000;

app.listen(port, () => {
    console.log("서버 가동");
});