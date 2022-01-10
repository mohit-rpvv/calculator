function insert(num)

{

    var inp = document.form1.output1;

    inp.value += num;

}

function clearall()

{

    var inp = document.form1.output1;

    var out = document.form2.output2;

    inp.value = '';

    out.value ='';

}

function evaluation()

{

    var inp = document.form1.output1;

    var out = document.form2.output2;

    if(inp.value != "")

    {

    out.value = inp.value;

    inp.value =  eval(inp.value);

    }

}

function percentage()

{

    var inp = document.form1.output1

    inp.value = eval(inp.value)/100.0;

    insert('*');

}

function backspace()

{

    var exp = document.form1.output1.value;

    document.form1.output1.value = exp.substring(0,exp.length-1);

}

window.onload = function() {



//create canvas and append it

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

const wh = window.innerHeight;

const ww = window.innerWidth;

canvas.width = ww;

canvas.height= wh;





// variables for parameters for arc

let rh =0;

let rw = 0;

let rx=0;

let ry=0;

let xcord = 0;

let ycord = 0;

let radius = 0;

const startAngle = 0;

const endAngle = Math.PI * 2;//360

const iscounterclock = false;//default condition





//random positions and drawing



function randomDrawCircle() {

    context.beginPath();

    xcord = Math.random()*ww; 

    ycord = Math.random()*wh;

    radius = Math.random()*25;

    //main lines

    context.arc(xcord,ycord,radius,startAngle,endAngle,iscounterclock);

    context.lineWidth = Math.random()*10;

    context.fillStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

    

    context.fill();

    context.strokeStyle=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

    context.stroke();



}

function randomDrawRectangle(){

    context.beginPath();

    rh = Math.random()*80;

    rw = Math.random()*80;

    rx = Math.random()*ww;

    ry = Math.random()*wh;

    context.rect(rx,ry,rh,rw);

    context.lineWidth = Math.random()*10;

    context.fillStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

    context.fill();

    context.strokeStyle=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

    context.stroke();

}



randomDrawCircle(); //calling one time

randomDrawRectangle();

// now interval for calling again



setInterval(randomDrawCircle,400)

setInterval(randomDrawRectangle,300)



}
