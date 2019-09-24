// Moving Eyes
// Christian Torres
// Date: 9/20/19
// Due: 9/26/19

let img = "Images/forward.png"; //Defines image variable to change later, default is looking forward.

function eyeChange(pos) //Function to change where the eye is looking and re-assign to img, passes through the position of cursor
{
    img = pos; //Re-assigns the image it wants to be to img.
    document.getElementById("eyes").src = img; //Sets image for eyes.
}

function blink() //Function to make eyes blink
{
    setInterval(close, 3000); //Timer to set eyes to close.
}

function close() //Function to make eyes close
{
    document.getElementById("eyes").src = "Images/close.png"; //Closes eyes
    setTimeout(open, 500); //Starts timer for opening eyes.
}

function open() //Function to open eyes
{
    document.getElementById("eyes").src = img; //Opens eyes
}