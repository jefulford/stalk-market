var last_week = $("#last_week")[0];
var buy_price = $("#buy_price")[0];
var mon_AM = $("#mon_AM")[0];
var tues_AM = $("#tues_AM")[0];
var wed_AM = $("#wed_AM")[0];
var this_week;
var probability;
var alternative;

function start() {
	buy_price = buy_price.value;
	findTrend();
}
function findTrend() {
	if (buy_price < 90 || buy_price > 110) {
		alert("Error! Buy Price has to be within 90 and 110 Bells per turnip.");
	}
	mon_AM = mon_AM.value;
	tues_AM = tues_AM.value;
	wed_AM = wed_AM.value;

	// what's the trend?
	
	if (mon_AM > buy_price && tues_AM > buy_price) {
		if (wed_AM > 300) {
			this_week = "High Spike";
		}
		else if (wed_AM < 300) {
			this_week = "Low Spike";
		}
	} else if (mon_AM > 100 || mon_AM > buy_price) {
		this_week = "Random";
	} else if (mon_AM < 100) {
		this_week = "Declining";
	} else {
		this_week = "Refresh the page and make sure you inputted correct data."
	}
	
	console.log(this_week);
	$("#this-week-trend").text(this_week);
}