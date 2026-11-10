
// image JS

    function changeimage(){
    document.getElementById('myimg').src ="img2.jpg";
}

// counter JS

let counter=0;
function decrease(){
    if (counter>0){
    counter--;
    document.getElementById('counter').innerHTML=counter;
    }
}

function increase(){
    counter++;
    document.getElementById('counter').innerHTML=counter;
}

function reset(){
    counter=0;
    document.getElementById('counter').innerHTML=counter;
}

// add and remove JS

function addOpinion(){
   let v = document.getElementById('opinionInput').value;
   document.getElementById('container').innerHTML += "<div>" + v + "</div>";
   }

   function removeOpinion(){
    let c = document.getElementById('container');
   if(c.lastElementChild){
    c.lastElementChild.remove();
   }
   }
