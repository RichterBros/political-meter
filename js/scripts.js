$(document).ready(function() {
  $("form#test").submit(function(event){
    event.preventDefault();
        
    const gun = parseInt($('input[name="gun"]:checked').val());
    const health = parseInt($('input[name="health"]:checked').val());
    const taxes = parseInt($('input[name="taxes"]:checked').val());

    console.log(gun);
    console.log(health);
    console.log(taxes);
    const total = gun + health + taxes;
    console.log(total);
    
    if (total <= 3) {
      $("#liberal").show();
    }
    
    else if (total > 3 && total < 7) {
      $("#moderate").show();
    }
    
    else if (total >= 7) {
      $("#conservative").show();
    }
});
});



//parseInt($("#add2").val());