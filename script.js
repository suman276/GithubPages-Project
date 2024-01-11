const buttonHeight = 100;
const buttonWidth = 40;
//add constant dimension

const maxWidth =400;//window.innerWidth-buttonWidth;
const maxHeight = 200;//window.innerHeight-buttonHeight;
const NoColor = ["#FF7F50", "#FFBF00", "#DE3163", "#CCCCFF","#40E0D0", "#00FF00", "#0000FF", "#FF0000", "#898989"]; 

//var top;
//var left;
//html elements 
var label = document.getElementById('fname');
var field = document.getElementById('labelName');
const button = document.getElementById('button');
const button1 = document.getElementById('button1');
//funtion Definitions

var count=0;
function gifChange(){
    //alert('GIF change');

    //button Clicked Again
    if(count==1){
        var textFetch = document.getElementById('fname').value;
        if(textFetch == ""){
            alert('Please give a name i will make a special invite');
            count--;
    } 
    else{
        button1.style.visibility="hidden";
        label.style.display = 'none';
        field.style.display = 'none';
    document.getElementById('line').innerHTML = 'Hey '+ textFetch +' you have a Good job!';
    }
    }
    //count is 0
    if(count==0){
    document.getElementById('giphy').src = "Happybear.gif";
    label.style.display = 'inline-block';
    field.style.display = 'inline-block';
    button.style.visibility ='hidden';
    document.getElementById('button1').innerHTML = 'Enter';
    count=count+1;
}    
}




button1.addEventListener('click', gifChange);

//Code for the Moving Button
button.addEventListener('mouseover', () => {
    console.log('You hovered me');
    //we are trying to add color to the Button after every mouseover
    button.style.position = 'absolute';
    //button1.style.alignItems = 'left';
    button.style.backgroundColor = NoColor[(Math.floor(Math.random() * NoColor.length))];
     button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
     button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
});