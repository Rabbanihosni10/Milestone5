//option1:  directly set on the html element  ( not Always recomended)
console.log("This is seperate js file!");
//option 2 : add onclick function  (Always recomended)
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}

//option3(not Always recomended)

const makeOrangeBtn=document.getElementById('make-orange');
console.log(makeOrangeBtn);
makeOrangeBtn.onclick=makeBlue1;

function makeBlue1(){
    document.body.style.backgroundColor='orange';
}