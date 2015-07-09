$(document).ready(function() {

	// var fuzzyOptions = {
	// 	searchClass: "fuzzy-search",
	// 	location: 0,
	// 	distance: 1000,
	// 	threshold: 0.9,
	// 	multiSearch: true
	// };


	// var options = {
	// 	searchClass: "fuzzy-search",
	// 	valueNames: [ 'panelName', 'circuit','endUse', 'userLabel', 'load', 'min15', 'hour1', 'hour6', 'hour24' ],
	// 	plugins: [
	// 	ListFuzzySearch()
	// 	]
	// };

	// list = new List('useageData', options);

	$( "span.ui-slider-handle.ui-state-default.ui-corner-all").mousedown(function() {
		$( "#amount" ).click();
		console.log("amount updated?")
	});

	$( ".sort" ).click(function(event) {
		$(".sort").removeClass("active")
		$(this).addClass("active")
	});

// $('#useageData').DataTable();

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#minAmount').val(), 10 );
        var max = parseInt( $('#maxAmount').val(), 10 );
        var age = parseFloat( data[3] ) || 0; // use data for the age column
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && age <= max ) ||
             ( min <= age   && isNaN( max ) ) ||
             ( min <= age   && age <= max ) )
        {
            return true;
        }
        return false;
    }
);


 var table = $('#useageData').DataTable();
     
    // Event listener to the two range filtering inputs to redraw on input
    $('#minAmount, #maxAmount').mouseup( function() {
        table.draw();
    } );



});

