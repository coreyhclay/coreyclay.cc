function swap() {

    var x = document.body.style.background;

    if (x === 'white') {
        document.getElementById("daybutton").style.display = "none";
        document.getElementById("daytext").style.display = "none";
        document.body.style.background = 'black';
        document.getElementById("nightbutton").style.display = "block";
        document.getElementById("nighttext").style.display = "block";
        document.getElementById("nighttext").style.borderLeft = "2px solid rgba(255, 255, 255, 0.2)";
        
        

    } else {
        document.getElementById("nightbutton").style.display = "none";
        document.getElementById("nighttext").style.display = "none";
        document.body.style.background = 'white';
        document.getElementById("daybutton").style.display = "block";
        document.getElementById("daytext").style.display = "block";
    }
}