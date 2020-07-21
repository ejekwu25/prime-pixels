

//------------ex1------------------//
// let price=4;
// if(price<10);{
//     console.log();
// }
// if(price>10){
//     console.log('true')
// }
// else{
//     console.log('false');
// }
//------------ex2-?---------------//
// let price='Gold';
// let taxPercent;
// if(price==='Gold'){
//     taxPercent=true;
// }
// else if(price==='Silver'){
//     taxPercent=false;
// }
// console.log(taxPercent);

// //-----------ex3--------------//
// function bringMessage(alphbet){
//     document.getElementById('clear-grid').innerHTML=alphabet;
// }
// let a=3;
// let b=2;
// if(a===b){
//     console.log("equal entity");
// }
// else{
//     console.log("not equal entity");
// }
// let clear = document.getElementById('clear-grid');
// let see = 0;
// clear.addEventListener('click',function(){
//     see+=1;
//     if(see%2===1){
//         clear.innerHTML = 'Thanks';
//     }
//     else{
//         clear.innerHTML = 'Clear grid';
//     }
// });

//---------------ex4-?------------//
// function showMessage(things){
//     document.getElementById('picker').innerText=things;
// }
// let goods=80;
// if(goods>30){
//     showMessage('Favourite Colours!');
// }
// else if(goods>81){
//     showMessage('greaterthan 25');
// }
// else if(goods<10){
//     showMessage('lessthan 10');
// }

// let coolPicker = document.getElementById('picker');
// let cool=0;
// coolPicker.addEventListener('click', function(){
//     cool+=1;
//     if(cool%2===1){
//         coolPicker.innerHTML='The Royal Colours';
//     }
//     else{
//         coolPicker.innerHTML= 'Color Picker';
//     }
// });
//-------------ex5-------------//

// let headerT = document.getElementById("h2");
// let count= 0;
// headerT.addEventListener('click', function() {
//     count+=1;

//     if(count%2 === 1){
//         headerT.innerHTML = `Happy viewing`;
//     }
//     else {
//         headerT.innerHTML = `CHOOSE GRID SIZE`;
//     }

// });

//-----------------ex6-?-----------//
// let h3Cap = document.getElementById('h3');
// let read = 0;
// h3Cap.addEventListener('click', function(){
//     read+=1;
//     if(read%2===1){
//         h3Cap.innerHTML=`'I Like-Grid-pixels'`;
//     }
//     else{
//         h3Cap.innerHTML='Design Pixel';
//     }
// });

//---------------ex7--------------//

    
    // let write = 0;
        //  write+=1;
    //  if(write%2===1){
    //      submitButton.innerHTML=height;
    //  }
    //  else{
    //     submitButton.innerHTML = 'width';
    //  }
    // console.log(submit);


let tb = document.createElement("tbody");
let table =  document.getElementById("grid-boxes");

document.getElementById('submit').addEventListener('click', function(){
    clearTable();
    createTable();
});


function createTable(){
    document.getElementById("grid-boxes").appendChild(tb).setAttribute("id", "tbody");
    let tbody = document.getElementById("tbody");

    let height = document.getElementById("height").value;
    let width = document.getElementById("width").value;

    let tr_list = document.getElementsByTagName("tr");

    for(let i=0; i<height; i++){
        tbody.appendChild(document.createElement("tr"));
    };

    for(item of tr_list){
        for(let k=0; k<width; k++){
            item.appendChild(document.createElement("td"));
        }
    }
}
function clearTable(){
    document.getElementById("tbody").remove();
}


document.getElementsById('clear-grid').addEventListener('click',function(){
    clearTable();
});