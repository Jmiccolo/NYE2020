    const title = document.getElementById("title");
    title.style.opacity = 0;
    const videos = ["TGoDtqI34nM", "Ms7capx4Cb8", "HjStytKZ6jU"];
    let nextVideo = videos[0];
    const videoTimes = [];
    for(let i = 0; i < 60; i++){
        videoTimes.push(i);
    }
    setTimeout(function(){
        const current = new Date();
        let midnight = new Date()
        const offset = new Date().getTimezoneOffset();
        midnight.setHours(0, 0, 0, 0);
        midnight.setDate(1);
        midnight.setMonth(0);
        midnight.setFullYear(midnight.getFullYear() + 1);
        midnight = midnight.getTime();
        const ifDays = Math.floor((midnight-current.getTime()+offset*60000)/86400000);
        let days = "";
        if(ifDays !== 0){
            days = `${ifDays}:`.padStart(3,"0");
        }
        const countdown = new Date(midnight - current.getTime() + (offset*60000));
        title.innerHTML = `${days}${countdown.toLocaleTimeString("it-IT")}`;
        title.style.opacity = 1;
        setInterval(function(){
            const newCurrent = new Date();
            const newCountdown = new Date(midnight - newCurrent.getTime() + (offset*60*1000));
            title.innerHTML = `${days}${newCountdown.toLocaleTimeString("it-IT")}`;
            if(newCurrent.getSeconds() === 0 && (videoTimes.includes(newCurrent.getMinutes()))){
                confettiThrow();
            }
            if(newCountdown.getSeconds() === 0 && newCountdown.getMinutes()===0 && newCountdown.getHours() === 0){
                confettiThrow();
            }
            if(newCurrent.getSeconds() === 0 && (videoTimes.includes(newCurrent.getMinutes())) && (newCountdown.getHours() !== 0 && newCountdown.getMinutes() !== 0)){
            const video = document.querySelector(".Video");
            const iframe = document.createElement("iframe");
            iframe.setAttribute("src", `https://www.youtube.com/embed/${nextVideo}?autoplay=1&loop=1&controls=1`);
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("frameborder", "0");
            video.appendChild(iframe);
            video.classList.remove("hidden");
            setTimeout(() => {
                    const video = document.querySelector(".Video");
                    const iframe = document.querySelector("iframe");
                    video.classList.add("hidden");
                    video.addEventListener("transitionend", function(){
                        video.removeChild(iframe);
                    })
                    setNextVideo();
                }, 45000);
            }
        }, 1000);
        
    }, 4000)

    function setNextVideo(){
        const currentVideoIndex = videos.indexOf(nextVideo);
        if(currentVideoIndex === videos.length-1){
            nextVideo = videos[0]
        }
        else{
        nextVideo = videos[currentVideoIndex + 1];
        }
    }

    function confettiThrow(){
        for(let i = 0;  i <  100; i++){
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            if(i % 2 === 0){
                confetti.classList.add("silver")
            }
            else{
                confetti.classList.add("gold");
            }
            document.querySelector("body").appendChild(confetti);
            const x = 150-Math.floor(Math.random()*300);
            const y = Math.floor(Math.random()*200);
            const rotation = Math.floor(Math.random()*360);
            setTimeout(function(){
                confetti.style.transform = `translate(${x}vw, -${y}vh) rotate(${rotation}deg)`;
            }, 400);
            
            setTimeout(function(){
                const newX = 150-Math.floor(Math.random()*300);
                const newRotation = Math.floor(Math.random()*360);
                confetti.style.transform = `translate(${newX}vw, 150vh) rotate(${newRotation}deg)`;
            }, 1400)
            }
        }   

        document.querySelector('button').addEventListener("click", function(e){
            e.target.classList.add("hidden");
        })