// document.write("i am");
const tut = [
    "raja ramanna was born in beginning of 1925 to rukmini and ramanna in tumkur, in the princely state of mysore.",
    "raja ramannahe later attended from madras christian college and resided at st.thomas's hall",
    "hand small chest men habit powers borrow rohan school mohan earns van cutter man zebra",
];
const comp_text = document.getElementById("comp_text");//text which is task to type for user
let quote;
const Random_quote_api_url = "https://api.quotable.io/random";
function getRandomQuote(){
    return fetch(Random_quote_api_url).
    then(response => response.json())
    .then(data => data.content);
}
async function getNextQuote(){
    
    quote= await getRandomQuote();
    comp_text.innerHTML = quote;
    console.log(quote);
}
// console.log(quote);

// console.log(quote);
// console.log("before");
// // console.log(asdasdf);
// console.log("after");

getNextQuote();
const maincontainer = document.getElementById("container");
const user_text = document.getElementById("user_text");//get user typed text
const btn = document.getElementById("btn");// start and done button
const resultSho = document.getElementById("resultSho");
const user_speedResult = document.getElementById("user_speed");
const dateandtime= document.getElementById("timval");
const accuResult= document.getElementById("accuracyResult");
let nowdate= new Date();
curdateandtime =nowdate.getDate() + "-" +nowdate.getMonth() +"-"+ nowdate.getFullYear() +" " + nowdate.getHours() +":" + nowdate.getMinutes() +" ";
dateandtime.innerHTML = curdateandtime;
// console.log(resultSho.innerHTML);
user_text.disabled = true;
let wrong_word;
let user_type_total;

let startTime,endTime;
let ss="Wrong words(correct words) :-";
let corWord;
settut();
document.onkeydown = function (e) {
    
        if (e.keyCode == 13){
            console.log("i am herre");

            if(btn.innerHTML == "Start"){
            console.log(e.keyCode);
            user_text.focus();        
            }
            
            if(maincontainer.style["display"] != "none"){
            checkStatus()
            }
            else{
                document. location. reload();   
            }
        }

}
function settut() {
    corWord = 0;
    wrong_word=0;
    user_type_total=0;
    // let randomnumber = Math.random() * 2;
    // randomnumber = Math.round(randomnumber);
}
btn.addEventListener("click", checkStatus);
function checkStatus() {
    if (btn.innerHTML == "Start") {
        // user_text.setAttribute("autofocus")
        console.log(user_text.focus());
        // resultSho.innerHTML=" ";
        ss="Wrong words(correct words) :-";
        w= new Date();
        startTime = w.getTime();
        btn.innerHTML = "Done";
        user_text.disabled = false;
        user_text.focus();
    }
    else {
        maincontainer.style["display"] = "none";//for showing result only
        document.getElementById("ForBgcolor").style["background-color"] ="cornsilk";
        // body.style["background-color"] ="cornsilk";
        getNextQuote();
        w= new Date();
        endTime=w.getTime();
        btn.innerHTML = "Start";
        user_text.disabled = true;
        checkResult(user_text.value, comp_text.innerHTML);
        // console.log(user_text.value);
        console.log(comp_text.innerHTML);
        settut();
    }
    user_text.value = "";
}
function checkResult(ustr, cstr) {
    ca = cstr.split(" ");
    
    ua = ustr.split(" ");
    ua.forEach((element, index) => {
        
        user_type_total+=1;
        if (element == ca[index]) {
            corWord += 1;
        }
        else {
            wrong_word +=1;
            // console.log("wrong word");
            // console.log(wrong_word);
            ss += element + "(" + ca[index] + ")" + ",";
            
        }
            // console.log("usertyped word");
            // console.log(user_type_total);
    });
    speedKnow();
}
function speedKnow(){
    totalTime= Math.round((endTime-startTime)/1000);
    // console.log(totalTime);
    // console.log("totaltime",totalTime);
    // console.log("corwords",corWord)
    speed=corWord*60/totalTime;
    speed=Math.round(speed);
    speed+=" Words Per minute";
    // console.log(totalTime);
    user_speedResult.innerHTML= speed;
    let accuracycount = Math.floor((wrong_word*100)/user_type_total);
    accuracycount = 100-accuracycount;
    accuracycount += "%";
    accuResult.innerHTML = accuracycount;
    // console.log(speed);
    document.getElementById("userArea").innerHTML = "Your Text :-";
    document.getElementById("comArea").innerHTML = "Computer Text :-";
    document.getElementById("userArea").innerHTML += user_text.value;
    document.getElementById("comArea").innerHTML += comp_text.innerHTML;
    resultSho.innerHTML=ss;
}











// // document.write("i am");
// const tut = [
//     "raja ramanna was born in beginning of 1925 to rukmini and ramanna in tumkur, in the princely state of mysore.",
//     "raja ramannahe later attended from madras christian college and resided at st.thomas's hall",
//     "hand small chest men habit powers borrow rohan school mohan earns van cutter man zebra",
// ];
// let quote;
// const Random_quote_api_url = "https://api.quotable.io/random";
// function getRandomQuote(){
//     return fetch(Random_quote_api_url).
//     then(response => response.json())
//     .then(data => data.content);
// }
// async function getNextQuote(){
//     quote= await getRandomQuote();
//     console.log(quote);
// }
// getNextQuote();
// // console.log(quote);
// // console.log("before");
// // // console.log(asdasdf);
// // console.log("after");


// const comp_text = document.getElementById("comp_text");//text which is task to type for user
// const user_text = document.getElementById("user_text");//get user typed text
// const btn = document.getElementById("btn");// start and done button
// const resultSho = document.getElementById("resultSho");
// const user_speedResult = document.getElementById("user_speed");
// const dateandtime= document.getElementById("timval");
// const accuResult= document.getElementById("accuracyResult");
// let nowdate= new Date();
// curdateandtime =nowdate.getDate() + "-" +nowdate.getMonth() +"-"+ nowdate.getFullYear() +" " + nowdate.getHours() +":" + nowdate.getMinutes() +" ";
// dateandtime.innerHTML = curdateandtime;
// // console.log(resultSho.innerHTML);
// user_text.disabled = true;
// let wrong_word;
// let user_type_total;

// let startTime,endTime;
// let ss="";
// let corWord;
// settut();
// function settut() {
//     corWord = 0;
//     wrong_word=0;
//     user_type_total=0;
//     let randomnumber = Math.random() * 2;
//     randomnumber = Math.round(randomnumber);
//     comp_text.innerHTML = tut[randomnumber];
// }
// btn.addEventListener("click", checkStatus);
// function checkStatus() {
//     if (btn.innerHTML == "Start") {
//         resultSho.innerHTML=" ";
//         ss="";
//         w= new Date();
//         startTime = w.getTime();
//         btn.innerHTML = "Done";
//         user_text.disabled = false;
//     }
//     else {
//         w= new Date();
//         endTime=w.getTime();
//         btn.innerHTML = "Start";
//         user_text.disabled = true;
//         checkResult(user_text.value, comp_text.innerHTML);
//         // console.log(user_text.value);
//         // console.log(comp_text.innerHTML);
//         settut();
//     }
//     user_text.value = "";
// }
// function checkResult(ustr, cstr) {
//     ca = cstr.split(" ");
    
//     ua = ustr.split(" ");
//     ua.forEach((element, index) => {
        
//         user_type_total+=1;
//         if (element == ca[index]) {
//             corWord += 1;
//         }
//         else {
//             wrong_word +=1;
//             // console.log("wrong word");
//             // console.log(wrong_word);
//             ss += element + "(" + ca[index] + ")" + ",";
            
//         }
//             // console.log("usertyped word");
//             // console.log(user_type_total);
//     });
//     resultSho.innerHTML=ss;
//     speedKnow();
// }
// function speedKnow(){
//     totalTime= Math.round((endTime-startTime)/1000);
//     // console.log(totalTime);
//     // console.log("totaltime",totalTime);
//     // console.log("corwords",corWord)
//     speed=corWord*60/totalTime;
//     speed=Math.round(speed);
//     speed+=" Words Per minute";
//     // console.log(totalTime);
//     user_speedResult.innerHTML= speed;
//     let accuracycount = Math.floor((wrong_word*100)/user_type_total);
//     accuracycount = 100-accuracycount;
//     accuracycount += "%";
//     accuResult.innerHTML = accuracycount;
//     // console.log(speed);
// }




























































// console.log("hello");

// console.log(user_speedResult.innerHTML);    









//copy safty purpose
// //document.write("i am");
// const tut = [
    //     "raja ramanna was born in beginning of 1925 to rukmini and ramanna in tumkur, in the princely state of mysore.",
//     "raja ramannahe later attended from madras christian college and resided at st.thomas's hall",
//     "hand small chest men habit powers borrow rohan school mohan earns van cutter man zebra",
// ];

// const comp_text = document.getElementById("comp_text");
// const user_text = document.getElementById("user_text");
// const btn = document.getElementById("btn");
// const resultSho = document.getElementById("resultSho");
// user_text.disabled = true;

// let startTime,endTime;
// let ss;
// let corWord = 0;
// settut();
// function settut() {
    //     let randomnumber = Math.random() * 2;
//     randomnumber = Math.round(randomnumber);

//     // console.log(randomnumber);
//     // console.log(tut[randomnumber]);
//     comp_text.innerHTML = tut[randomnumber];
// }
// btn.addEventListener("click", checkStatus);
// function checkStatus() {
//     if (btn.innerHTML == "Start") {
//         w= new Date();
//         startTime = w.getTime();
//     //    console.log(startTime);
// //  console.log(w.getTime());
//         btn.innerHTML = "Done";
//         user_text.disabled = false;
//     }
//     else {
//         settut();
//         w= new Date();
//         endTime=w.getTime();
//         // console.log(endTime);
//         // console.log(w.getTime());
        
//         // console.log(endTime-startTime);
//         btn.innerHTML = "Start";
//         user_text.disabled = true;
//         checkResult(user_text.value, comp_text.innerHTML);
//     }
//     // console.log(user_text.value)
//     user_text.value = "";
// }
// function checkResult(ustr, cstr) {
//     ca = cstr.split(" ");
//     // console.log(cstr);
//     ua = ustr.split(" ");
//     ua.forEach((element, index) => {
//         // console.log("element");
//         // console.log(element);
//         // console.log(index);
//         // console.log(element,ca[index]);
//         if (element == ca[index]) {
//             corWord += 1;
//             // console.log(corWord);
//         }
//         else {
//             ss += element + "(" + ca[index] + ")" + ",";
//             // console.log(corWord);
//             // console.log("incorrect");
//             // console.log(ss);
//         }
//     });
//     resultSho.innerHTML=ss;
//     speedKnow();
// }
// function speedKnow(){
//     totalTime= Math.round((endTime-startTime)/1000);
//         // console.log(totalTime);
//         console.log("totaltime",totalTime);
//         console.log("corwords",corWord)
//         speed=corWord*60/totalTime;
//         speed=Math.round(speed);
//         // console.log(totalTime);
//         console.log(speed);
// }