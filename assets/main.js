$(document).ready(function(){
    
    setInterval(() => {
         $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }, 1000);

    // <i class="fas fa-lock"></i>

});
