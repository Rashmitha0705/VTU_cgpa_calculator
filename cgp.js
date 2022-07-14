var target=document.getElementById('bt');
const semcredits1=20;
const semcredits2=24;
const semcredits3=25;
const semcredits4=26;
const semcredits5=18;
target.addEventListener('click',function(){

      var total,final,tc=177,temp;
      var mark1=document.getElementById('one').value;
      var mark2=document.getElementById('two').value;
      var mark3=document.getElementById('three').value;
      var mark4=document.getElementById('four').value;
      var mark5=document.getElementById('five').value;
      var mark6=document.getElementById('six').value;
      var mark7=document.getElementById('seven').value;
      var mark8=document.getElementById('eight').value;
      function aler() {
       alert("Please enter values between 0 to 10");
     }
     if(mark1 == "")
     {
       mark1=0;
       tc=tc-20;
   
     }
      if(mark2 == "")
      {
        mark2=0;
        tc=tc-20;
      }
      if(mark3 == "")
      {
        mark3=0;
        tc=tc-24;
   
      }
      if(mark4 == "")
      {
        mark4=0;
        tc=tc-24;
   
      }
      if(mark5 == "")
      {
        mark5=0;
        tc=tc-25;
   
      }
      if(mark6 == "")
      {
        mark6=0;
        tc=tc-26;
      }
      if(mark7 == "")
      {
        mark7=0;
        tc=tc-20;
      }
      if(mark8 == "")
      {
         mark8=0;
         tc=tc-18;
      }
   
      if ((mark1>10||mark1<0)||(mark2>10||mark2<0)||(mark3>10||mark3<0)||(mark4>10||mark4<0)||(mark5>10||mark5<0)||(mark6>10||mark6<0)||(mark7>10||mark7<0)||(mark8>10||mark8<0))
      {
        aler();
      }
      else{
       marks1=mark1* semcredits1;
       marks2=mark2* semcredits1;
       marks3=mark3* semcredits2;
       marks4=mark4* semcredits2;
       marks5=mark5* semcredits3;
       marks6=mark6* semcredits4;
       marks7=mark7* semcredits1;
       marks8=mark8* semcredits5;
       total=parseFloat(marks1)+parseFloat(marks2)+parseFloat(marks3)+parseFloat(marks4)+parseFloat(marks5)+parseFloat(marks6)+parseFloat(marks7)+parseFloat(marks8);
       final=total/tc;
       var tot=final.toFixed(2);
       //alert(tot);
   
       document.getElementById('text').innerHTML=("Your cgpa is "+tot+ " out of 10.0");
      }
       
    
      if(tot>=9)
      {
         alert("Excellent!!!")
      }
      else if(tot>=8)
      {
        alert("Very good :)");
      }
      else  if(tot>=7)
      {
        alert("Good >>>>");
      }
      else  if(tot>=6)
      {
          alert("Above average**");
      }
      else if(tot>=5)
      {
         alert("Average <<<");
      }
      else if(tot<=4)
      {
          alert("Fail :(   Work hard...");
      }
      
})
