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

	$(".sorting").click(function(event) {
		$(".sorting").removeClass("active")
		$(".sorting_asc").removeClass("active")
		$(".sorting_dsc").removeClass("active")
		console.log("toggle class?")
		console.log(this)
		$(this).addClass("active")
	});

// $('#useageData').DataTable();

// $.fn.dataTable.ext.search.push(
//     function( settings, data, dataIndex ) {
//         var min = parseInt( $('#minAmount').val(), 10 );
//         var max = parseInt( $('#maxAmount').val(), 10 );
//         var age = parseFloat( data[3] ) || 0; // use data for the age column
 
//         if ( ( isNaN( min ) && isNaN( max ) ) ||
//              ( isNaN( min ) && age <= max ) ||
//              ( min <= age   && isNaN( max ) ) ||
//              ( min <= age   && age <= max ) )
//         {
//             return true;
//         }
//         return false;
//     }
// );


$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var iMin = parseFloat(document.getElementById('minAmount').innerHTML);
        var iMax = parseFloat(document.getElementById('maxAmount').innerHTML);
        iVersion = parseFloat(aData[8]) == "-" ? 0 : parseFloat(aData[8]);
        // console.log(iVersion);
        console.log(aData);
        console.log(parseFloat(aData[8]));
        if ( iMin == "" && iMax == "" )
        {
            return true;
        }
        else if ( iMin == "" && iVersion < iMax )
        {
            return true;
        }
        else if ( iMin < iVersion && "" == iMax )
        {
            return true;
        }
        else if ( iMin < iVersion && iVersion < iMax )
        {
            return true;
        }
        return false;
    }
);


 // var table = $('#useageData').DataTable();
     
/* Initialise datatables */
    var oTable = $('#useageData').dataTable(
    	{
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bSort": true,
        "bInfo": true,
        "bAutoWidth": false
    }
    	);
     
    /* Add event listeners to the two range filtering inputs */
    $('ui-slider-handle').mouseup( function() { oTable.fnDraw(); } );
    // $('#maxAmount').mouseup( function() { oTable.fnDraw(); } );


    // Event listener to the two range filtering inputs to redraw on input
    // $('#minAmount, #maxAmount').mouseup( function() {
        // oTable.fnDraw();
    // } );



});

