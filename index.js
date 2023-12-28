import express from "express";
const app = express();
const port = 3000;

var day = new Date();day=day.getDay();
const workk = day ==6 || day==0?"Enjoy,move out,hang out with friends ,chill out relax !" : "work even harder today so as to get promotion ,no other way only this->way!"
switch(day){
    case 1 : day="Monday";break;
    case 2 : day="Tuesday";break;
    case 3 : day= "Wednesday";break;
    case 4 : day = "Thursday";break;
    case 5 :day = "Friday";break;
    case 6 : day ="Saturday";break;
    case 0 : day = "Sunday";break;
}
app.get('/',(req,res)=>{
    res.render('index.ejs',{work : workk,wordDay : day})
})
app.listen(port,()=>{
    console.log(`Started Listening to Port No. :${port}`)
})