



function randID(length){
    return Math.floor(Math.random() * length)
}

function funnyComment(){
    return comments[randID(5)]
}


function buttonActive(){
    let snd = new Audio("click-234708.mp3")
    snd.play()
    const commentUsed = funnyComment()
    document.getElementById("Button").innerHTML = commentUsed;
    
}



const comments = [
    "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
    "I went to buy some camo pants but couldn't find any.",
    "I failed math so many times at school, I can't even count.",
    "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
    "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels."
]




