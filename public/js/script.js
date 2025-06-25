function toggleTheme() {
  const thememain = document.getElementById("stylesheetMain");
 

  if (thememain.getAttribute("href") === "/css/style.css") {
    thememain.setAttribute("href", "/css/style2.css");
   
  } else if (thememain.getAttribute("href") === "/css/style2.css") {
    thememain.setAttribute("href", "/css/style.css");
    
  }
}
