

const percOne = 90;
const percTwo = 70;
const percThree = 40;


var dataDiagram = {
  name: "Schädelfraktur bei 90G",
  values: [
    value = {
      name: "720",
      percentage: percOne,
    },
    value = {
      name: "Konkurrenz",
      percentage: percTwo,
    },
    value = {
      name: "EN Norm",
      percentage: percThree,
    }
  ]
}



/*  not sure if needed    */
for(var i = 0; i < dataDiagram.values.length; i++ ) {

   

  if(i == 0) {
    var PerOne = console.log("doei")
  };
  if(i == 1) {
    var PerOne = console.log("lala")
  };
  if(i == 2) {
    var PerOne = console.log("323333333")
  };

}
/*      */



/* Timing tryout  */
var staggerTime = 0;

if(percOne > 49 ) {
    var staggerTime = 0;
} else {
    var staggerTime = 1;
}
/* end  */




/*
colors = ['color1', 'color2', 'color3']

for(var i = 0; i < dataDiagram.values.length; i++ ) {

  if(i % 3 == 0) console.log("index: " + i + " color: " + colors[0]);
  
}



var startTime = 2.5;
var staggerTime = 0.5;


TweenMax.to(line, startTime += staggerTime, { */

var line0 = document.querySelectorAll("#line0");
var line1 = document.querySelectorAll("#line1");
var line2 = document.querySelectorAll("#line2");
    
TweenMax.set([line0, line1, line2,], {
    borderColor: 'transparent', 
});
    

var startTime = 2.5;

TweenMax.to(line0, startTime + staggerTime, {
  scaleY: 1,
  height: percOne + '%',
  opacity:"100",
  ease:Expo.easeInOut,
  fontSize: '35',
  color: '#EACD65', 
  borderColor: '#EACD65',       
});

TweenMax.to(line1, 3, {
  scaleY: 1,
  height: percTwo + '%',
  opacity:"100",
  ease:Expo.easeInOut,
  fontSize: '35',
  color: '#A6A8A6', 
  borderColor: '#A6A8A6',       
});

TweenMax.to(line2, 3.5, {
  scaleY: 1,
  height: percThree + '%',
  opacity:"100",
  ease:Expo.easeInOut,
  fontSize: '35',
  color: '#6F706F', 
  borderColor: '#6F706F',       
});


var subject = document.querySelectorAll("#chartsubject");
    
TweenMax.to(subject, 1, {
    opacity:"100",
    ease:Expo.easeInOut,
    fontSize: '0.8em',
    color: '#fff',   
});



/* COUNTER */

var counter = { seventwenty: 0, concurr1: 0, concurr2: 0, norm: 0, };
var tal = document.getElementById("count0");
var tal2 = document.getElementById("count1");
var tal3 = document.getElementById("count2");
    
 TweenMax.to(counter, 2.3, {
      seventwenty: percOne,
      onUpdate: function () {
          tal.innerHTML = Math.ceil(counter.seventwenty);

      },
      ease:Cubic.easeInOut

  });

  TweenMax.to(counter, 2.6, {
      concurr1: 5,
      concurr2: percTwo,
      onUpdate: function () {
          tal2.innerHTML = Math.ceil(counter.concurr1) + "-" + Math.ceil(counter.concurr2);
      },
      ease:Cubic.easeInOut

  });

  TweenMax.to(counter, 2.7, {
      norm: percThree,
      onUpdate: function () {
          tal3.innerHTML = Math.ceil(counter.norm);
      },
      ease:Cubic.easeInOut

  });

  /* END COUNTER */