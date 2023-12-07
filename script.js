

let leftElement = document.querySelector('.left');
let rightElement = document.querySelector('.right'); 
let topElement = document.querySelector('.top'); 
let main = document.querySelector('main')
let thank = document.querySelector('.thank-you')
let input= document.getElementById('input')
let err = document.getElementById('error')
function handleonChange(){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(input.value)){
        err.style.display="none"
        input.style.border=" solid 1px green"
        input.style.backgroundColor='#fff'
    }else{
        err.style.display="flex"
        input.style.border=" solid 1px red"
        input.style.backgroundColor='#e3606030'
    }
 }
 function handleonSubmit(event){
    event.preventDefault() 

    if (leftElement && rightElement) {
        leftElement.style.display = 'none';
        rightElement.style.display = 'none';
        main.style.display='none';
        thank.style.display='flex';
    } 
 }

 function handleondismiss() {
    if (thank) {
        input.value = "";

        if (window.matchMedia('(min-width: 100px) and (max-width: 375px)').matches) {
            // Code specific to mobile screen
            leftElement.style.display = 'flex';
            rightElement.style.display = 'none';  // Adjust this based on your requirement
            main.style.display = 'flex';
            thank.style.display = 'none';
        } else {
            // Code for screens larger than 375px
            leftElement.style.display = 'flex';
            rightElement.style.display = 'flex';
            main.style.display = 'flex';
            thank.style.display = 'none';
        }
    }
}
