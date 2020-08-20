
$(".btn").click(function()
{   
   var x =['A','B','C','D','E','F'];
   var ra = Math.floor(Math.random()*50+10);   
   var u = Math.floor(Math.random()*50+10);  
   var y = Math.floor(Math.random()*6);  
   var i = Math.floor(Math.random()*6); 
   var color = '#'; 
   color+=x[i]; 
   color += ra; 
   color +=x[y];
   color +=u; 
   $("body").css("background-color",color);
   $("h1").text("Background Color : "+color);
});