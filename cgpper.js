var target=document.getElementById('bt');
target.addEventListener('click',function(){

    var one=document.getElementById('per').value;

    var totc=(one-0.75)*10;
    var tot=totc.toFixed(2);
  
    document.getElementById('text').innerHTML=(tot+"%");

})
