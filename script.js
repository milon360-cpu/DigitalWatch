
function timeCount()
{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let timeFormat  = 'AM';
    if(hour===0)
    {
        hour = 12;
    }
    if(hour>12)
    {
        hour = hour-12;
        timeFormat  = 'PM'
    }
    hour = hour<10 ? '0' + hour : hour;
    min = min<10 ? '0' + min : min;
    second = second<10 ? '0' + second : second;

    const finalTime = `${hour} : ${min} : ${second}   ${timeFormat}`;
    const watchTime = document.getElementById('watch');
    watchTime.innerText = finalTime;
    setInterval(timeCount,1000);

}

timeCount();



    document.getElementById('color-bubble').addEventListener('click',function(event)
    {
    
        
        const redColor = document.getElementById("red").checked;
        const  blueColor = document.getElementById("blue").checked;
        const yellowColor = document.getElementById("Yellow").checked;
        const greenColor = document.getElementById("green").checked;
        const tomatoColor = document.getElementById("Tomato").checked;
        const defaultColor = document.getElementById("default").checked;

    
        if(redColor==true)
        {
            document.getElementById('watch-body').style.backgroundColor = "red";
        }
        else if(blueColor==true)
        {
            document.getElementById('watch-body').style.backgroundColor = "blue";
        }
        else if(yellowColor==true)
        {
            document.getElementById('watch-body').style.backgroundColor = "gray";
        }
        else if(greenColor==true)
        {
            document.getElementById('watch-body').style.backgroundColor = "green";
        }
        else if(tomatoColor==true)
        {
            document.getElementById('watch-body').style.backgroundColor = "tomato";
        }
        else if(defaultColor==true)
        {
            document.getElementById('watch-body').style.backgroundColor = "#242526";
        }
    
    });

