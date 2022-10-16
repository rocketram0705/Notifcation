const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const workTime = document.getElementById('work1');
const playTime = document.getElementById('play1');
const studyTime = document.getElementById('study1');
const exerciseTime = document.getElementById('excercise1');
const socialTime = document.getElementById('social1');
const selfcareTime = document.getElementById('selfcare1');

const previousWork = document.getElementById('work2');
const previousPlay = document.getElementById('play2');
const previousStudy = document.getElementById('study2');
const previousExcercise = document.getElementById('excercise2');
const previousSocial = document.getElementById('social2');
const previousSelfcare = document.getElementById('selfcare2');

const activityOne = document.getElementById('workId');
const activityTwo = document.getElementById('playId');
const activityThree = document.getElementById('studyId');
const activityFour = document.getElementById('excersiseId');
const activityFive = document.getElementById('socialId');
const activitySix = document.getElementById('selfcareId');

const activityArray =[activityOne,activityTwo,activityThree,activityFour,activityFive,activitySix];
const timeArray = [workTime,playTime,studyTime,exerciseTime,socialTime,selfcareTime];
const previousArray = [previousWork,previousPlay,previousStudy,previousSocial,previousSelfcare];

let currentScale = 'daily';
let myRequest = new Request(data.json)
let extractedData;

function myFunction(scale,request){

    fetch(request).then(function(res){
        return res.json();
    }).then(function(data){
        if(scale == 'daily'){
            for (let i = 0; i < timeArray.length; i++) {
                activityArray[i].textContent = data[i].title;
                timeArray[i].textContent = data[i].timeframes.daily.current + "hrs";
                previousArray[i].textContent="Last Day" + data[i].timeframes.daily.previous + "hrs";
            }
        }
        else if(scale == 'weekly'){
            for (let i = 0; i < timeArray.length; i++) {
                activityArray[i].textContent = data[i].title;
                timeArray[i].textContent = data[i].timeframes.weekly.current + "hrs";
                previousArray[i].textContent="Last Week" + data[i].timeframes.weekly.previous + "hrs";
            }
        }
        else if(scale == 'monthly'){
            for (let i = 0; i < timeArray.length; i++) {
                activityArray[i].textContent = data[i].title;
                timeArray[i].textContent = data[i].timeframes.monthly.current + "hrs";
                previousArray[i].textContent="Last Month" + data[i].timeframes.monthly.previous + "hrs";
            }
        }
    }).catch((error)=>{
        console.log(error);
    })
}

window.onload =()=>{
    myFunction(currentScale,myRequest);
}

btn1.addEventListener('click',() => {
    let showText = btn1.textContent;
    console.log(showText);
    currentScale = 'daily';
    myFunction(currentScale,myRequest);
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
})

btn2.addEventListener('click',() => {
    let showText = btn2.textContent;
    console.log(showText);
    currentScale = 'weekly';
    myFunction(currentScale,myRequest);
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
})

btn3.addEventListener('click',() => {
    let showText = btn3.textContent;
    console.log(showText);
    currentScale = 'monthly';
    myFunction(currentScale,myRequest);
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
})


