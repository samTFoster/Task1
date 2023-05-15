$('#btnRun').click(function() {
    $.ajax({
        url: "libs/php/weatherObvs.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('input').$attr('id=lng').val(),
            lat: $('input').$attr('id=lat').val()
        },
        success: function(result) {

            console.log("Ajax successful")
            console.log(JSON.stringify(result));
// Look Through JSON and convert data
            if (result.status.name == "ok") {
                
                $('#resultTemp').html("The temperature is: " + result['data']['temperature']);
                $('#resultClouds').html("The cloud coverage is: " + result['data']['clouds']);
                $('#resultHum').html("The humidity level is: " + result['data']['humidity']);
                $('#resultWndSpd').html("The Windspeed is: " + result['data']['windspeed']);

            
            }
            else {
                $('#resultTemp').html("Incorrect coordinates please try again.")
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(textStatus + errorThrown);
            
        }
    }); 
})
$('#btnRun2').click(function() {
    $.ajax({
        url: 'libs/php/ocean.php',
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('input').$attr('id=lng2').val(),
            lat: $('input').$attr('id=lat2').val()
        },
        success: function(result){
            console.log(JSON.stringify(result))

            if (result.status.name == "ok"){

                $('#resultOcean').html("The closest ocean to you is: " + result['data']['name'])

            } else {
                $('#resultOcean').html("Incorrect coordinates please try again.")
            }
            
        },
        error: function(jqXHR, testStatus, errorThrown){
            console.log(testStatus + errorThrown);
        }
    });

 });
 $('#btnRun3').click(function() {
    $.ajax({
        url: 'libs/php/cityInfo.php',
        type: 'POST',
        dataType: 'json',
        data: {
            city: $('input').$attr('id=city').val()
        },
        success: function(result){
            console.log(JSON.stringify(result))

            if (result.status.name == "ok"){

                $('#resultCity').html("Summary: " + result['data'][0]['summary'])

            }  else {
                $('#resultCity').html("City not found please try again")
            }
        },
        error: function(jqXHR, testStatus, errorThrown){
            console.log(testStatus + errorThrown);
        }
    });

 });
