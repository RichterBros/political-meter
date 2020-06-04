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
    });
if 

});


//parseInt($("#add2").val());