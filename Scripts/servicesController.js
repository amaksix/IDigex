function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
  }
  
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
  var previousElem = null;
  // Function to check if each target div is in the custom viewport area
  /*var hoverStyle = {
    //transition: '0.9s',
    width: '214px',
    gap: '36px'
  };*/
  var hoverTextStyle={
   //transition: '0.9s',
    color:'#0C0C0C'
  }
  var textStyle = {
    //transition: '0.9s',
    color:'#A9A9A9'
  }
  var textDissablesStyle = {
    color:'#777777'
  }
  /*var normalStyle = {
    gap: '22px',
    width: '250px',
  }*/
  var hoverContanerStyle={
    background:'#F9F9F9',
    //transition: '0.9s',
  }
  var normalContainerStyle={
    background: 'linear-gradient(#0C0C0C, #0C0C0C) padding-box,linear-gradient(to top,rgba(224,223,222,0) 65%, #A9A9A9 145%) border-box',
   // transition: '0.9s',
  }
  var imageSources = [
    "Images/Arrow_Right.svg",
    "Images/Arrow_Right_Dark.svg"
  ];
  
  function checkElementsVisibility() {
      for (let i = 0; i < targetDivs.length; i++) {
        const targetDiv = targetDivs[i];
        if (isElementInCustomViewport(targetDiv)) { 
            if(!previousElem)
            {
                previousElem = targetDiv;
                Object.assign(targetDiv.style, hoverContanerStyle); 
                //Object.assign(targetDiv.children[0].children[0].style, hoverStyle); 
                Object.assign(targetDiv.children[0].children[0].children[1].style, hoverTextStyle); 
                targetDiv.children[0].children[0].children[0].src = imageSources[1];
                  targetDiv.children[0].children[0].children[0].style.opacity = 1;
                  Object.assign(previousElem.children[1].style, {opacity:1});    
            }
            else
            {
              if(previousElem != targetDiv)
              {
              
              Object.assign(previousElem.style, normalContainerStyle); 
                //Object.assign(previousElem.children[0].children[0].style, normalStyle); 
                if(previousElem.children[0].children[0].children[1].dataset.dissabled == "false")
                {
                  Object.assign(previousElem.children[0].children[0].children[1].style, textStyle);
                }
                else
                {
                  Object.assign(previousElem.children[0].children[0].children[1].style, textDissablesStyle);
                }
                //Object.assign(previousElem.children[0].children[0].children[1].style, textStyle); 
                previousElem.children[0].children[0].children[0].src = imageSources[0];
                previousElem.children[0].children[0].children[0].style.opacity = 1;
                Object.assign(previousElem.children[1].style, {opacity:0});    
                previousElem = targetDiv;
              // childElem = document.querySelector(targetDiv.children[0].children[0].class);
              Object.assign(targetDiv.style, hoverContanerStyle); 
                //Object.assign(targetDiv.children[0].children[0].style, hoverStyle);    
                Object.assign(targetDiv.children[0].children[0].children[1].style, hoverTextStyle);   
              
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
          //  Object.assign(previousElem.children[0].children[0].style, normalStyle); 
            if(previousElem.children[0].children[0].children[1].dataset.dissabled == "false")
            {
              Object.assign(previousElem.children[0].children[0].children[1].style, textStyle);
            }
            else
            {
              Object.assign(previousElem.children[0].children[0].children[1].style, textDissablesStyle);
            }
           // Object.assign(previousElem.children[0].children[0].children[1].style, textStyle); 
            
            previousElem.children[0].children[0].children[0].src = imageSources[0];
            previousElem.children[0].children[0].children[0].style.opacity = 1;
            Object.assign(previousElem.children[1].style, {opacity:0});    
            previousElem = null;
          }
        }
      }
  }
  window.addEventListener('scroll', checkElementsVisibility);