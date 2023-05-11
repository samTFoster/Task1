$('#btnRun').click(function() {
    $.ajax({
        url: "libs/php/weatherObvs.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#lng').val(),
            lat: $('#lat').val()
        },
        success: function(result) {

            console.log("Ajax successful")
            console.log(JSON.stringify(result));
// Look Through JSON and convert data
            if (result.status.name == "ok") {
                $('#divResults').remove();
                $('#resultTemp').html("The temperature is: " + result['data']['temperature']);
                $('#resultClouds').html("The cloud coverage is: " + result['data']['clouds']);
                $('#resultHum').html("The humidity level is: " + result['data']['humidity']);
                $('#resultWndSpd').html("The Windspeed is: " + result['data']['windspeed']);

            
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
            lng: $('#lng2').val(),
            lat: $('#lat2').val()
        },
        success: function(result){
            console.log(JSON.stringify(result))

            if (result.status.name == "ok"){

                $('#resultOcean').html("The closest ocean to you is: " + result['data']['name'])

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
            city: $('input').val()
        },
        success: function(result){
            console.log(JSON.stringify(result))

            if (result.status.name == "ok"){

                $('#resultCity').html("Summary: " + result['data'][0]['summary'])

            }
        },
        error: function(jqXHR, testStatus, errorThrown){
            console.log(testStatus + errorThrown);
        }
    });

 });
