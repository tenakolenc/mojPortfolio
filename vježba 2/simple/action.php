<?php
if(isset($_REQUEST["confirm"])){
    $confirm = $_REQUEST["confirm"];
    if($confirm == 'yes'){
        if(isset($_REQUEST["browser"])){
            $browser = $_REQUEST["browser"];
            echo "Your Favorite Web Browser Is - <span style='text-transform:capitalize;font-weight:bold;'>". $browser ."</span>";
            echo "<br />";
        }
        if(isset($_REQUEST["search-engine"])){
            $searchEngine = $_REQUEST["search-engine"];
            echo "Your Favorite Search Engine Is - <span style='text-transform:capitalize;font-weight:bold;'>". $searchEngine ."</span>";
        }
    }
    else{
        echo "<p>Please confirm your selection.</p>";
    }    
}
?>