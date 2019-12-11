$("#shoot").click(function(){
    let UserWord = $("#input").val();
        $("#userChoice").text(UserWord);
    let RandomNum = Math.floor((Math.random() * 3) + 0);
    let CompChoices = ["scissors", "rock", "paper"];    
    let compInput = CompChoices[RandomNum];
        $("#computerChoice").text(compInput);
debugger;
    if
        ((UserWord === "scissors") && compInput === "rock"){
        $("#result").text("Computer Wins!");
        $("body").css("background", "#ff0000");
        }else if
        ((UserWord === "scissors") && compInput === "scissors"){
        $("#result").text("No One Wins...");
        $("body").css("background", "#849181");
        }else if 
        ((UserWord === "scissors") && compInput === "paper"){
        $("#result").text("You Win!");
        $("body").css("background", "#2bff00");
        }else if 
        ((UserWord === "rock") && compInput === "paper"){
        $("#result").text("Computer Wins!");
        $("body").css("background", "#ff0000");
        }else if 
        ((UserWord === "rock") && compInput === "rock"){
        $("#result").text("No One Wins...");
        $("body").css("background", "#849181");
        }else if 
        ((UserWord === "rock") && compInput === "scissors"){
        $("#result").text("You Win!");
        $("body").css("background", "#2bff00");
        }else if 
        ((UserWord === "paper") && compInput === "scissors"){
        $("#result").text("Computer Wins!");
        $("body").css("background", "#ff0000");
        }else if 
        ((UserWord === "paper") && compInput === "paper"){
        $("#result").text("No One Wins...");
        $("body").css("background", "#849181");
        }else if
        ((UserWord === "paper") && compInput === "rock"){
        $("#result").text("You Win!");
        $("body").css("background", "#2bff00");
        }

});
