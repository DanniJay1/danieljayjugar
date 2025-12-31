let count = localStorage.getItem("visitCount");
if(!count) localStorage.setItem("visitCount",1);
else localStorage.setItem("visitCount",parseInt(count)+1);
document.getElementById("visitorCount").innerText = localStorage.getItem("visitCount");


const themeSwitch = document.querySelector('.theme-switch__checkbox');

const videoLight = document.createElement('video');
videoLight.src = 'vid1.mp4';
videoLight.id = 'video-light';
videoLight.autoplay = true;
videoLight.loop = true;
videoLight.muted = true;
videoLight.style.position = 'fixed';
videoLight.style.top = '0';
videoLight.style.left = '0';
videoLight.style.width = '100%';
videoLight.style.height = '100%';
videoLight.style.objectFit = 'cover';
videoLight.style.zIndex = '-1';
videoLight.style.opacity = '1';
videoLight.style.transition = 'opacity 1s ease';
document.body.appendChild(videoLight);

const videoDark = document.createElement('video');
videoDark.src = 'vid.mp4';
videoDark.id = 'video-dark';
videoDark.autoplay = true;
videoDark.loop = true;
videoDark.muted = true;
videoDark.style.position = 'fixed';
videoDark.style.top = '0';
videoDark.style.left = '0';
videoDark.style.width = '100%';
videoDark.style.height = '100%';
videoDark.style.objectFit = 'cover';
videoDark.style.zIndex = '-1';
videoDark.style.opacity = '0';
videoDark.style.transition = 'opacity 1s ease';
document.body.appendChild(videoDark);


themeSwitch.addEventListener('change', function() {
  if(this.checked){
    
    videoLight.style.opacity = '0';
    videoDark.style.opacity = '1';
  } else {
    
    videoDark.style.opacity = '0';
    videoLight.style.opacity = '1';
  }
});





