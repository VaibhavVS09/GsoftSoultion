//Navbar Scrolling Function
function userScroll()
{
  //Navbar Selector
  const navbar=document.querySelector('.navbar');
  //Arrow Selector
  const toTopBtn=document.querySelector('#to-top');

  window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
      navbar.classList.add('navbar-sticky');
        //Arrow Button
      toTopBtn.classList.add('show');
    }
    else{
      navbar.classList.remove('navbar-sticky');
        //Arrow Button
      toTopBtn.classList.remove('show');
    }
  });
}  


//Scrolling Function
function scrollToTop(){

  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}

//Stats Counter Function
function incrementStats(){
   const counters=document.querySelectorAll('.counter');
    
   //ForEach Function For Each Counter 
   counters.forEach((counter)=>{
   counter.innerText=0;
  
    //Target Updating
    const updateCounter=()=>{
      //+ for converting the string on to int
      const target=+counter.getAttribute('data-target');
      const c=+counter.innerText;


    // Increment Counter
    const increment = target/200;

    //Checking Counter
    if(c<target)
    {
      counter.innerText = Math.ceil(c + increment);
      setTimeout(updateCounter, 1);
    }else{
      counter.innnerText = target;
    }
    };
    //calling
    updateCounter();
   });
}



//Event Listener
document.addEventListener('DOMContentLoaded',userScroll);
document.addEventListener('DOMContentLoaded',incrementStats);
document.querySelector('#to-top').addEventListener('click',scrollToTop);


// Video Model
const videoBtn=document.querySelector('.video-btn')
const videoModal=document.querySelector('#videoModal')
const video=document.querySelector('#video')

// video source link variable
let videoSrc;

//Video Btn checking
if(videoBtn!==null){
  videoBtn.addEventListener('click',()=>{

    //copy the videobtn video src to videoSrc
    videoSrc=videoBtn.getAttribute('data-bs-src');
  })
}

//Checking Video Modal
if(videoModal!==null){
  videoModal.addEventListener('shown.bs.modal',()=>{
    video.setAttribute('src',videoSrc+'?autoplay=1;modestbranding=1;showInfo=0');
  });
 
  videoModal.addEventListener('hide.bs.modal',()=>{
    video.setAttribute('src',videoSrc)
  })
}

