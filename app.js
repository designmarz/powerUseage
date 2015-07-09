$(document).ready(function() {


	$( "span.ui-slider-handle.ui-state-default.ui-corner-all").mousedown(function() {
		$( "#amount" ).click();
		console.log("amount updated?")
	});

	$(".sorting").click(function(event) {
		$(".sorting").removeClass("active")
		$(".sorting_asc").removeClass("active")
		$(".sorting_dsc").removeClass("active")
		$(this).addClass("active")
	});

	$(".sorting_asc").click(function(event) {
		$(".sorting").removeClass("active")
		$(".sorting_asc").removeClass("active")
		$(".sorting_dsc").removeClass("active")
		$(this).addClass("active")
	});

	$(".sorting_dsc").click(function(event) {
		$(".sorting").removeClass("active")
		$(".sorting_asc").removeClass("active")
		$(".sorting_dsc").removeClass("active")
		$(this).addClass("active")
	});

$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var iMin = parseFloat(document.getElementById('minAmount').innerHTML);
        var iMax = parseFloat(document.getElementById('maxAmount').innerHTML);
        iVersion = parseFloat(aData[8]) == "-" ? 0 : parseFloat(aData[8]);

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
     

    $('span.ui-slider-handle.ui-state-default.ui-corner-all').mouseup( function() { oTable.fnDraw(); } );
    $('span.ui-slider-handle.ui-state-default.ui-corner-all').mousedown( function() { oTable.fnDraw(); } );
  
$(function() {

  $( "#slider-range" ).slider({
    range: true,
    min: 0.0,
    max: 200.0,
    values: [ 0.0, 150.0 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + "kWh - " + ui.values[ 1 ]+ " kWh" );
      $( "#minAmount" ).html( $( "#slider-range" ).slider( "values", 0 ));
      $( "#maxAmount" ).html( $( "#slider-range" ).slider( "values", 1 ));

    }
  });

  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
    " kWh - " + $( "#slider-range" ).slider( "values", 1 ) + " kWh");
  $( "#minAmount" ).html( $( "#slider-range" ).slider( "values", 0 ));
  $( "#maxAmount" ).html( $( "#slider-range" ).slider( "values", 1 ));



});


});

