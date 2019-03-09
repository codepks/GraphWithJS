
var val = [];

//Time interval of 30 seconds is set between each reading
//as Thingsspeak take 30 seconds of interval for each reading
setInterval(function(){
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
		
		//For debugging on console
		console.log("Value of temp is" + " " + text);

	}
});


//Chart rendering
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
			{ y: val[11] },
			{ y: val[12] },
			{ y: val[13] },
			{ y: val[14] },
			{ y: val[15] },
			{ y: val[16] },
			{ y: val[17] },
			{ y: val[18] },
			{ y: val[19] },
			{ y: val[20] },
			{ y: val[21] },
			{ y: val[22] },
			{ y: val[23] },
			{ y: val[24] },
			{ y: val[25] },
			{ y: val[26] },
			{ y: val[27] },
			{ y: val[28] },
			{ y: val[29] },
			{ y: val[30] },
			{ y: val[31] },
			{ y: val[32] },
			{ y: val[33] },
			{ y: val[34] },
			{ y: val[35] },
			{ y: val[36] },
			{ y: val[37] }
		]
	}]
});
chart.render();


//flushing out the val array to re-regenerate the graph
if(val.length > 37)
{
	for(var j = 0; j < 37; j++)
		{
			val.pop()
		}
}
	
}, 30000);
