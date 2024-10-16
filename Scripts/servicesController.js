function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
  }
  var stopProjectScroll = false;
  // Get all target div elements
  const targetDivs = document.getElementsByClassName('services-menu-elem');
  
  // Define the custom viewport area (in pixels)
  const viewportTop =100;
  const viewportBottom = 200;
  
  // Function to check if an element is in the custom viewport area
  function isElementInCustomViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const viewportTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const viewportBottom = viewportTop + viewportHeight;
    const elementTop = rect.top + viewportTop;
    const elementBottom = rect.bottom + viewportTop;
    const middleViewport = viewportTop + viewportHeight / 3; // Adjust this value to change the middle threshold (e.g., viewportHeight / 2 for the exact middle)
  
    return elementTop >= middleViewport && elementBottom <= middleViewport + viewportHeight/2;
  }
  var previousElem = null;
  // Function to check if each target div is in the custom viewport area
  var hoverTextStyle={
    color:'#0C0C0C'
  }
  var textStyle = {
    color:'#A9A9A9'
  }
  var hoverContanerStyle={
    background:'#F9F9F9',

  }
  var normalContainerStyle={
    background: 'linear-gradient(#0C0C0C, #0C0C0C) padding-box,linear-gradient(to top,rgba(224,223,222,0) 65%, #A9A9A9 145%) border-box',
  }
  var imageSources = [
    "Images/Arrow_Right.svg",
    "Images/Arrow_Right_Dark.svg"
  ];
  function checkElementsVisibility() {
    if(!stopProjectScroll)
    {
      for (let i = 0; i < targetDivs.length; i++) {
        const targetDiv = targetDivs[i];
        if (isElementInCustomViewport(targetDiv)) { 
            if(!previousElem)
            {
                previousElem = targetDiv;
                Object.assign(targetDiv.style, hoverContanerStyle); 
                targetDiv.children[0].children[0].children[1].classList.remove("service-button-text");
                targetDiv.children[0].children[0].children[1].classList.add("service-button-text-hover");
                targetDiv.children[0].children[0].children[0].src = imageSources[1];
                targetDiv.children[0].children[0].children[0].style.opacity = 1;
                Object.assign(previousElem.children[1].style, {opacity:1});  
            }
            else
            {
              if(previousElem != targetDiv)
              {
              
              Object.assign(previousElem.style, normalContainerStyle); 
                previousElem.children[0].children[0].children[1].classList.remove("service-button-text-hover");
                previousElem.children[0].children[0].children[1].classList.add("service-button-text");
                

                previousElem.children[0].children[0].children[0].src = imageSources[0];
                previousElem.children[0].children[0].children[0].style.opacity = 1;
                Object.assign(previousElem.children[1].style, {opacity:0});    
                previousElem = targetDiv;
              Object.assign(targetDiv.style, hoverContanerStyle);  
                targetDiv.children[0].children[0].children[1].classList.remove("service-button-text");
                targetDiv.children[0].children[0].children[1].classList.add("service-button-text-hover"); 
              
                targetDiv.children[0].children[0].children[0].src = imageSources[1];
                  targetDiv.children[0].children[0].children[0].style.opacity = 1;
                  Object.assign( targetDiv.children[1].style,{opacity:1});         
              }    
            }
            break;
        }
        else
        {
        
          if(previousElem)
          {

            Object.assign(previousElem.style, normalContainerStyle); 
            previousElem.children[0].children[0].children[1].classList.add("service-button-text");
            previousElem.children[0].children[0].children[1].classList.remove("service-button-text-hover");
            
            previousElem.children[0].children[0].children[0].src = imageSources[0];
            previousElem.children[0].children[0].children[0].style.opacity = 1;

            Object.assign(previousElem.children[1].style, {opacity:0});    
            previousElem = null;
          
          }
        }
      }
    }
  }
  function updateFocusedElement(targetDiv, open)
  {
      if(previousElem == null){
        previousElem = targetDiv;
        Object.assign(targetDiv.style, hoverContanerStyle);  
        targetDiv.children[0].children[0].children[1].classList.remove("service-button-text");
        targetDiv.children[0].children[0].children[1].classList.add("service-button-text-hover");
        targetDiv.children[0].children[0].children[0].src = imageSources[1];
        targetDiv.children[0].children[0].children[0].style.opacity = 1;
        Object.assign( targetDiv.children[1].style,{opacity:1});  
      }else if(targetDiv!= previousElem)
      {
        Object.assign(previousElem.style, normalContainerStyle); 
        previousElem.children[0].children[0].children[1].classList.remove("service-button-text-hover");
        previousElem.children[0].children[0].children[1].classList.add("service-button-text");
        

        previousElem.children[0].children[0].children[0].src = imageSources[0];
        previousElem.children[0].children[0].children[0].style.opacity = 1;
        Object.assign(previousElem.children[1].style, {opacity:0});    
        previousElem = targetDiv;
        Object.assign(targetDiv.style, hoverContanerStyle);  
        targetDiv.children[0].children[0].children[1].classList.remove("service-button-text");
        targetDiv.children[0].children[0].children[1].classList.add("service-button-text-hover");

      
        targetDiv.children[0].children[0].children[0].src = imageSources[1];
        targetDiv.children[0].children[0].children[0].style.opacity = 1;
        Object.assign( targetDiv.children[1].style,{opacity:1});  
      }else{
        if(!open)
        {
          Object.assign(previousElem.style, normalContainerStyle); 

          previousElem.children[0].children[0].children[1].classList.add("service-button-text");
          previousElem.children[0].children[0].children[1].classList.remove("service-button-text-hover");
  
            
            previousElem.children[0].children[0].children[0].src = imageSources[0];
            previousElem.children[0].children[0].children[0].style.opacity = 1;
  
            Object.assign(previousElem.children[1].style, {opacity:0});    
            previousElem = null;
        }  
      }
  }

  window.addEventListener('scroll', checkElementsVisibility);
var openedService = null;

function openService(serviceId, container) {
    if (openedService != null)
    {
        if(openedService != serviceId)
        {
            var curr =  document.getElementById(openedService);
            var next = document.getElementById(serviceId);
              curr.classList.remove(container);
              curr.classList.add("service-description-container-hidden");
              curr.style.height = 0;   
              var height = 0;
              for(let i = 0; i<next.children.length; i++)	
              {
                height += next.children[i].clientHeight;
              }
              next.style.height = height;
             
            next.classList.remove("service-description-container-hidden");
            next.classList.add(container);     
            openedService = serviceId;
            stopProjectScroll = true;
            updateFocusedElement(document.getElementById(serviceId).parentElement.children[0],true);
        }
        else{
            var curr =  document.getElementById(openedService);
                curr.classList.remove(container);
                curr.style.height = 0;

            
            
            curr.classList.add("service-description-container-hidden");
            updateFocusedElement(document.getElementById(openedService).parentElement.children[0],false);
            openedService = null;
            stopProjectScroll = false;
        }
    }else{
        var next = document.getElementById(serviceId);

          var height = 0;
          for(let i = 0; i<next.children.length; i++)	
          {
            height += next.children[i].clientHeight;
          }
          next.style.height = height;
        
       
        next.classList.remove("service-description-container-hidden");
        next.classList.add(container);
        openedService = serviceId;    
        updateFocusedElement(document.getElementById(openedService).parentElement.children[0],true);
        stopProjectScroll = true;  
    }
}