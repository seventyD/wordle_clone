function open_help()
{
    const help_window = document.getElementById("help_popup");
    help_window.style.display = "block";  
}

function close_help()
{
    const help_window = document.getElementById("help_popup");
    help_window.style.display = "none";
}

function open_stats()
{
    const help_window = document.getElementById("stats_popup");
    help_window.style.display = "block";  
}

function close_stats()
{
    const help_window = document.getElementById("stats_popup");
    help_window.style.display = "none";
}


function init_game()
{
    const goal_word = "CRANE";
    turn_number = 0;

}


function guess_word()
{
    
    var guess = document.getElementById('Guess');
    if (guess.value.length != 5)   {alert("MUST BE 5 LETTERS")}
    else
    {
       
        add_word(guess.value.toUpperCase(), 1);

    }
    guess.innerHTML = "";
}

function add_word(guess, turn_number)
{
    const goal_word = "CRANE";
    const used = document.getElementById("used_letters");
    const letter1 = document.getElementById("L11");
    const letter2 = document.getElementById("L12");
    const letter3 = document.getElementById("L13");
    const letter4 = document.getElementById("L14");
    const letter5 = document.getElementById("L15");

    const letters = [letter1, letter2, letter3, letter4, letter5];


    for (let i = 0; i < 5; i++) 
    {
        letters[i].innerHTML += guess[i];
        
        if(guess[i] == goal_word[0] || guess[i] == goal_word[1] || guess[i] == goal_word[2] || guess[i] == goal_word[3] || guess[i] == goal_word[4])
        {letters[i].style.backgroundColor = "#b59f3b";}
        if(guess[i] == goal_word[0])
        {letters[i].style.backgroundColor = "#538d4e";}
    }

    used.innerHTML += guess;
    


}

function check_word()
{

    


    var letters = document.getElementsByClassName("letter")
    word = "";
    for (let i = 0; i < letters.length; i++) {
        word += letters[i].innerText.toUpperCase();

      } 

    if(word == "CRANE") {alert('WIN');}
      
}