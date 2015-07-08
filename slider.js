$(function() {

    $( "#slider-range" ).slider({
      range: true,
      min: 0.0,
      max: 1000.0,
      values: [ 0.0, 96.0 ],
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