var clock,plus ;
var database
var num
function preload(){
    clock =loadImage("clock 1.png")
    plus =loadImage("plus.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)
database=firebase.database( )
database.ref("/rnum").on("value",(data)=>{
    console.log(data.val())
    num=data.val()
})
}




function draw(){
background("turquoise")
var title =createElement("h1");

title.html("Reminder App");
title.position(windowWidth/2-99,50)
imageMode(CENTER) 
push()
tint(255,100)
image(clock,windowWidth/2,windowHeight/2,500,500) ;
pop()

image(plus,windowWidth-80,80,70,70) ;
var addbutton=createButton("ADD")
addbutton.position(windowWidth-100,65)
//addbutton.hide()
addbutton.style.visibility="hidden"
addbutton.mousePressed(function(){

 var reminderName =createInput("Reminder Name")
reminderName.position(windowWidth/2-100,windowHeight/2-150)
 reminderName.style('width','200px')
 reminderName.style('height','30px')
var year =createSelect()
year.position(windowWidth/2-100,windowHeight/2-100)
year.style('width','50px')
var currentyear= new Date().getYear()+1900
year.option('Year')
year.option(currentyear)
year.option(currentyear+1)
year.option(currentyear+2)
year.option(currentyear+3)
year.option(currentyear+4)
console.log (currentyear)
 var hour =createSelect()
 hour.position(windowWidth/2-100,windowHeight/2-70)
hour.style('width','60px')
hour.option('Hour')
hour.option('00')
hour.option('01')
hour.option('02')
hour.option('03')
hour.option('04')
hour.option('05')
hour.option('06')
hour.option('07')
hour.option('08')
hour.option('09')
hour.option('10') 
hour.option('11')
hour.option('12')
hour.option('13')
hour.option('14') 
hour.option('15') 
hour.option('16') 
hour.option('17') 
hour.option('18')
hour.option('19') 
hour.option('20') 
hour.option('21') 
hour.option('22') 
hour.option('23') 
 var min  =createSelect("1")
min.position(windowWidth/2,windowHeight/2-70)
min.style('width','70px')
min.option('Minute')
min.option('00')
min.option('01')
min.option('02')
min.option('03')
min.option('04')
min.option('05')
min.option('06')
min.option('07')
min.option('08')
min.option('09')
min.option('10')
min.option('11')
min.option('12')
min.option('13')
min.option('14')
min.option('15')
min.option('16')
min.option('17')
min.option('18')
min.option('19')
min.option('20')
min.option('21')
min.option('22')
min.option('23')
min.option('24')
min.option('25')
min.option('26')
min.option('27')
min.option('28')
min.option('29')
min.option('30')
min.option('31')
min.option('32')
min.option('33')
min.option('34')
min.option('35')
min.option('36')
min.option('37')
min.option('38')
min.option('39')
min.option('40')
min.option('41')
min.option('42')
min.option('43')
min.option('44')
min.option('45')
min.option('46')
min.option('47')
min.option('48')
min.option('49')
min.option('50')
min.option('51')
min.option('52')
min.option('53')
min.option('54')
min.option('55')
min.option('56')
min.option('57')
min.option('58')
min.option('59')


 var date =createSelect("DATE")
 date.position(windowWidth/2+50,windowHeight/2-100)
date.option('Date')
date.option('01')
date.option('02')
date.option('03')
date.option('04')
date.option('05')
date.option('06')
date.option('07')
date.option('08')
date.option('09')
date.option('10')
date.option('11')
date.option('12')
date.option('13')
date.option('14')
date.option('15')
date.option('16')
date.option('00')
date.option('17')
date.option('18')
date.option('19')
date.option('20')
date.option('21')
date.option('22')
date.option('23')
date.option('24')
date.option('25')
date.option('26')
date.option('27')
date.option('28')
date.option('29')
date.option('30')
date.option('31')

var month =createSelect("Month")
month.position(windowWidth/2-30,windowHeight/2-100)
month.option('Month')
month.option('JAN')
month.option('FEB')
month.option('MAR')
month.option('APR')
month.option('MAY')
month.option('JUN')
month.option('JUL')
month.option('AUG')
month.option('SEP')
month.option('OCT')
month.option('NOV')
month.option('DEC')

 var set =createButton("SET")
 set.position(windowWidth/2-100,windowHeight/2-40)


 var cancel =createButton("CANCEL")
cancel.position(windowWidth/2,windowHeight/2-40)
set.mousePressed(()=>{
    console.log(reminderName.value())
    console.log(month.value())
    console.log(year.value())
    console.log(date.value())
    console.log(min.value())
    console.log(hour.value())

console.log(num)
database.ref("/reminder"+num).set({
    name:reminderName.value(),
    month:month.value(),
    year:year.value(),
    date:date.value(),
    hour:hour.value(),
    min:min.value(),

})
database.ref("/rnum").set({
    rnum:num
})


})
 
})

}