<?php
    $exist = array("hi", "wtf", "rutherford");
    $getti = $_REQUEST['q'];  // sug.php?q= 
    
    // if(isset($_POST["suggest"])){   //post solution
    //     $getti = $_POST["suggest"];

    if (!empty($getti)){
        foreach($exist as $haha) {
            if(strpos($haha, $getti ) !== false) {
                echo $haha;
                echo "<br>";
    }    }    }
    // }
?>