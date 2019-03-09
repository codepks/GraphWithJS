//var i = 1;                     //  set your counter to 1

// function myLoop () {           //  create a loop function
//    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
//       alert('hello');          //  your code here
//       i++;                     //  increment the counter
//       if (i < 10) {            //  if the counter < 10, call the loop function
//          myLoop();             //  ..  again which will trigger another 
//       }                        //  ..  setTimeout()
//    }, 3000)
// }
 
var val = [0.0, 1.0];
setInterval(function(){
//var val = [0.0, 1.0];
 
var numbers = [1,2,3,4,5];

 //$.each(numbers, function(i, numbers){
//setInterval(function(){
//for (var i = 1; i <= 5; i++) {
    $.ajax({
        url: 'https://api.thingspeak.com/channels/693492/field/1/last.txt',
        type: 'GET',
        beforeSend: function() {
            //console.log("Downloading ");
        },
        async: false,
        complete: function() {
        },
        success: function(data) {
            //console.log("Download Success ");
			var text = data;
			val.push(parseFloat(text));
			
			//  setTimeout(function(){
			//  	console.log("this is iteration")

			//  }, 10000);

			//setInterval(function(){ console.log("hello"); }, 10000);
			console.log("hello");

        }
	});
	//}
//});	
//}, 10000);

 
//window.onload = function (){ 
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "ApplDore chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: val[0] },
			{ y: val[1] },
			{ y: val[2] },
			{ y: val[3] },
			{ y: val[4] },
			{ y: val[5] },
			{ y: val[6] },
			{ y: val[7] },
			{ y: val[8] },
			{ y: val[9] },
			{ y: val[10] },
			{ y: val[11] }
		]
	}]
});
chart.render();

//}
	
}, 10000);
