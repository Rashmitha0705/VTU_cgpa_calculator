var target=document.getElementById('bt');
target.addEventListener('click',function(){

    var one=document.getElementById('per').value;

    var totc=(one/10)+0.75;
    var tot=totc.toFixed(2);
    //alert(tot);

    document.getElementById('text').innerHTML=(tot);

})
