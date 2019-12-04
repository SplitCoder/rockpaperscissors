$("#shoot").click(function(){
    let UserWord = $("#input").val();
        $("#userChoice").text(UserWord);
    let RandomNum = Math.floor((Math.random() * 3) + 0);
    let CompChoices = ["scissors", "rock", "paper"];    
    let compInput = CompChoices[RandomNum];
        $("#computerChoice").text(compInput);

    if
        ((UserWord === "scissors") && compInput === "rock"){
        $("#result").text("Computer Wins!");
        }else if
        ((UserWord === "scissors") && compInput === "scissors"){
        $("#result").text("No One Wins...");
        }else if 
        ((UserWord === "scissors") && compInput === "paper"){
        $("#result").text("You Win!");
        }









































});
