$(document).ready(function() {

	var fuzzyOptions = {
		searchClass: "fuzzy-search",
		location: 0,
		distance: 1000,
		threshold: 0.9,
		multiSearch: true
	};


	var options = {
		searchClass: "fuzzy-search",
		valueNames: [ 'panelName', 'circuit','endUse', 'userLabel', 'load', 'min15', 'hour1', 'hour6', 'hour24' ],
		plugins: [
		ListFuzzySearch()
		]
	};

	list = new List('useageData', options);

	$( "span.ui-slider-handle.ui-state-default.ui-corner-all").mousedown(function() {
		$( "#amount" ).click();
		console.log("amount updated?")
	});

	$( ".sort" ).click(function(event) {
		$(".sort").removeClass("active")
		$(this).addClass("active")
	});



});

