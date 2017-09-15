
var to=0;

  $(document).ready(function(){
	
	 to = Cookies.get('totalpay');
	var qt = Cookies.get('totalquantity');
	
	
	document.getElementById("totalamount").innerHTML=to;
	document.getElementById("numberitem").innerHTML=qt;	

		$("#showinfo").onload =$("#showinfo").hide(); 
	 $("#afterselectcard").onload =$("#afterselectcard").hide();
	 
	 $("#cash").onload =$("#cash").hide();
	 $("#100d").onload =$("#100d").hide();
	  $("#50d").onload =$("#50d").hide();
	 $("#selectcard").click=showlable;
	 $("#paypal").click=calcule_cash;
	  
	
 });
 
  var cal_qst=0;
	var  cal_hst=0;
var totalall=0;
 var data1,data2, data3;
 function proceedshow(){
		 
  $("#showinfo").show(); 
  
	cal_qst=to*0.05;
	cal_hst=to*0.09975;
	data3=parseFloat(to);
	totalall=cal_qst + cal_hst + data3;
	document.getElementById("hsttax").innerHTML = Math.round(parseFloat(cal_hst)*100)/100;
	document.getElementById("qsttax").innerHTML =  Math.round(parseFloat(cal_qst)*100)/100;
	totalall=Math.round(parseFloat(totalall)*100)/100;
	
	document.getElementById("totalincludetax").innerHTML = totalall;
	document.getElementById("totalincludetaxprint").value = totalall;

 } 


 
 
 
 function showlable(){		
  $("#afterselectcard").show(); 
 } 
 
 
  function getCookie(cname)
 {
	
 var name = cname + "=";
 var ca = document.cookie.split(';');
 for(var i=0; i<ca.length; i++)
	 { var c = ca[i];
	  while (c.charAt(0)==' ') 
	  c = c.substring(1); 
     if (c.indexOf(name) == 0)
	return c.substring(name.length,c.length);  

	}
    return "";
	
 }
 
 
 function calcule_cash(){
	$("#cash").show();
	$("#100d").show();
	$("#50d").show();
	$("#afterselectcard").hide();
var tot=0, res=0, s100=0, s50=0;
	tot =Cookies.get('totalpay');
	alert('testcal');
	if (parseInt(tot/100) > 0)
	   { s100 =  parseInt(tot/100);
		 res = tot - (s100 * 100);
		$(document).ready(function(){
		  $("#100d").show();
		});
		document.getElementById("100t").innerHTML = s100;
		document.getElementById("100i").src = "../Canada/100.jpg";
		
	   }
	else
	   {res = tot;
		$(document).ready(function(){
		  $("#100d").hide();
		});
	   }
	   
	if (parseInt(res/50) > 0)
	   { s50 =  parseInt(res/50);
		 res = res - (s50 * 50);
		$(document).ready(function(){
		  $("#50d").show();
		});
		document.getElementById("50t").innerHTML = s50;
		document.getElementById("50i").src = "../Canada/50.jpg";
		 alert("50 : " + s50 + " res : " + res);
	   }   
	else
	   {res = res;
		$(document).ready(function(){
		  $("#50d").hide();
		});
	   }
}

function thanks(){
	
	alert("PURCHASE SUCCESSFUL!");
	window.location.href='../gallary/sale.html';
}
  
	 