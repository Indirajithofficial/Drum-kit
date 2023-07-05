//drum kit using jquery....

//detect click..
$(".btn").click(function(){
    var id = $(this).attr("id");
   execute(id);  
   ani(a); 
});

//detect keypress..
$(document).keypress(function(event){
    execute(event.key);
    ani(a);
})

function execute(word){

    var audio = new Audio("./sounds/"+word+".mp3");
    audio.play();
    
//animation
 $("#"+word).addClass("animate");
    setTimeout(function(){$("#"+word).removeClass("animate")
    },70)
     }

 
