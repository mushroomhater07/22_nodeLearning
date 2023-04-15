

$(document).ready(function(){
    // window.alert("hi");
    // console.log('123');
    $("button").click(function(){
        $.get("test.txt", function(data, status){
            $("#get_result").html(data);
            console.log(status);
        });
    });


    $("#post").keyup(function(){
        var key = $("#post").val();
        $.post("suggest.php", {suggest : key}, function(data, status){
            $("#postoutput").html(data);
            console.log("logged", status);
        });  //uri, dictionary, function
    });

    //$.ajax
    $("#ajax").keyup(function(){
        console.log("HI");
        $.ajax({ type: "POST", url: "suggest.php",
            data: {"suggest" : $("#ajax").val()},
            success: function(data){
                $("#ajaxoutput").html(data);
            }
        })
    });

// $('td[name="tcol1"]')   // Matches exactly 'tcol1'
// $('td[name^="tcol"]' )  // Matches those that begin with 'tcol'
// $('td[name$="tcol"]' )  // Matches those that end with 'tcol'
// $('td[name*="tcol"]' )  // Matches those that contain 'tcol'
    //xml
    $(`input[name="xmlname"]`).keyup(function(){  //if in html <input onkeyup="func(this.value)">
        var key2 = $(`input[name="xmlname"]`).val();
        console.log(key2);
        if (key2 != 0){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200){
                    document.getElementById("output").innerHTML = this.responseText;
                }
            }
            xmlhttp.open("GET", "sug.php?q=" +key2, true);
            xmlhttp.send();
        }
    });

    document.getElementById("href").innerHTML = '<a id="pointer" href="localhost">hi</a>';
    document.getElementById("pointer").href = "https://www.google.com";
});