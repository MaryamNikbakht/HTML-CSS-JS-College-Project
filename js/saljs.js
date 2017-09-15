



//===============================================================

  $(document).ready(function(){
	
	var users = Cookies.get('nameuser');
	
	//alert(users);

	 document.getElementById("userwelcome").innerHTML=users;
	
 });





//***************************** cookis ***************************************
/*
function setCookiesale(totalsetname, totalset, totalsetQtyname,totalsetQty,exdays)
	{
		var d= new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = totalsetname+"=" + totalset + "; "+ expires;
		document.cookie = totalsetQtyname+"=" + totalsetQty + "; "+ expires;
	}
*/
//===============get cookie============
	/*				
					 function readCookie(cname)
						 { var name = cname + "=";
						 var ca = document.cookie.split(";");
						 for(var i=0; i<ca.length; i++)
							 { var c = ca[i];
							  while (c.charAt(0)==' ') 
							  c = c.substring(1); 
							 if (c.indexOf(name) == 0)
							return c.substring(name.length,c.length);  

							}
						
							return "";
						 }	
						
	
			
	*/


//================================================================================	

/*	
function checkCookie() 
	{
		var users = getCookie("user"); 
		document.getElementById("userwelcome").innerHTML=users;
		if (users != "") 
			{
				alert("Welcome " + users);
			} 
		else
			{ 
				users = prompt("Please enter your name:", ""); 
				document.getElementById("userwelcome").innerHTML=users;
				if (users != "" && users != null)
					{ 
						setCookie("user", users, 365);
					} 
			} 
	}
	

	
	
function deleteCookie() 
{
 var users = getCookie("user");
 if (users == "") 
  { alert("Cookie username doesn’t exist "); }
 else 
  {
    if (users != "" && users != null) 
	  { setCookie("username", users, -3); 
	    alert("Cookie deleted.");} 
  }
}
*/
// ************************************* Calculation ********************


 var total=0;

 //for sale pic=painting1
 function calcTotal(){
	 
	 var sum, totalQty, price1=0, price2=0,price3=0,price4=0,price5=0,price6=0,price7=0,price8=0;
	 
	 var sel1, sel2 , sel3 , sel4 , sel5, sel6 , sel7 , sel8;
	 var qty1=0, qty2=0, qty3=0, qty4=0, qty5=0, qty6=0, qty7=0, qty8=0;
	var subtotal1=0,subtotal2=0, subtotal3=0,subtotal4=0,subtotal5=0,subtotal6=0,subtotal7=0,subtotal8=0;
	
	var price9=0, price10=0,price11=0,price12=0,price13=0,price14=0,price15=0,price16=0;
	 
	 var sel9, sel10 , sel11 , sel12 , sel13, sel14 , sel15 , sel16;
	 var qty9=0, qty10=0, qty11=0, qty12=0, qty13=0, qty14=0, qty15=0, qty16=0;
	var subtotal9=0,subtotal10=0, subtotal11=0,subtotal12=0,subtotal13=0,subtotal14=0,subtotal15=0,subtotal16=0;
	
		
	if(document.getElementById("painting1").checked)
		{
			price1=500;
			sel1=document.getElementById("sale_paint1");
			qty1=parseInt(sel1.options[sel1.selectedIndex].value);
			document.getElementById("painting1").innerHTML=price1;
			subtotal1=price1*qty1;
		
		}
		
		if(document.getElementById("painting2").checked)
		{
			price2=500;
			sel2=document.getElementById("sale_paint2");
			qty2=parseInt(sel2.options[sel2.selectedIndex].value);
			document.getElementById("painting2").innerHTML=price3;
			subtotal2=price2*qty2;
		}
		
		if(document.getElementById("painting3").checked)
		{
			price3=1000;
			sel3=document.getElementById("sale_paint3");
			qty3=parseInt(sel3.options[sel3.selectedIndex].value);
			document.getElementById("painting3").innerHTML=price3;
			subtotal3=price3*qty3;
		}
		
		if(document.getElementById("painting4").checked)
		{
			price4=600;
			sel4=document.getElementById("sale_paint4");
			qty4=parseInt(sel4.options[sel4.selectedIndex].value);
			document.getElementById("painting4").innerHTML=price4;
			subtotal4=price4*qty4;
		}
		
		if(document.getElementById("painting5").checked)
		{
			price5=500;
			sel5=document.getElementById("sale_paint5");
			qty5=parseInt(sel5.options[sel5.selectedIndex].value);
			document.getElementById("painting5").innerHTML=price5;
			subtotal5=price5*qty5;
		}
		
		if(document.getElementById("painting6").checked)
		{
			price6=500;
			sel6=document.getElementById("sale_paint6");
			qty6=parseInt(sel6.options[sel6.selectedIndex].value);
			document.getElementById("painting6").innerHTML=price6;
			subtotal6=price6*qty6;
		}
		
		if(document.getElementById("painting7").checked)
		{
			price7=1000;
			sel7=document.getElementById("sale_paint7");
			qty7=parseInt(sel7.options[sel7.selectedIndex].value);
			document.getElementById("painting7").innerHTML=price7;
			subtotal7=price7*qty7;
		}
		
		if(document.getElementById("painting8").checked)
		{
			price8=800;
			sel8=document.getElementById("sale_paint8");
			qty8=parseInt(sel8.options[sel8.selectedIndex].value);
			document.getElementById("painting8").innerHTML=price8;
			subtotal8=price8*qty8;
		}
		
		 
	
		
	if(document.getElementById("patina1").checked)
		{
			price9=100;
			sel9=document.getElementById("sale_pat1");
			qty9=parseInt(sel9.options[sel9.selectedIndex].value);
			document.getElementById("patina1").innerHTML=price9;
			subtotal9=price9*qty9;
		
		}
		
		if(document.getElementById("patina2").checked)
		{
			price10=100;
			sel10=document.getElementById("sale_pat2");
			qty10=parseInt(sel10.options[sel10.selectedIndex].value);
			document.getElementById("patina2").innerHTML=price10;
			subtotal10=price10*qty10;
		}
		
		if(document.getElementById("patina3").checked)
		{
			price11=100;
			sel11=document.getElementById("sale_pat3");
			qty11=parseInt(sel11.options[sel11.selectedIndex].value);
			document.getElementById("patina3").innerHTML=price11;
			subtotal11=price11*qty11;
		}
		
		if(document.getElementById("patina4").checked)
		{
			price12=100;
			sel12=document.getElementById("sale_pat4");
			qty12=parseInt(sel12.options[sel12.selectedIndex].value);
			document.getElementById("patina4").innerHTML=price12;
			subtotal12=price12*qty12;
		}
		
		if(document.getElementById("patina5").checked)
		{
			price13=100;
			sel13=document.getElementById("sale_pat5");
			qty13=parseInt(sel13.options[sel13.selectedIndex].value);
			document.getElementById("patina5").innerHTML=price13;
			subtotal13=price13*qty13;
		}
		
		if(document.getElementById("patina6").checked)
		{
			price14=100;
			sel14=document.getElementById("sale_pat6");
			qty14=parseInt(sel14.options[sel14.selectedIndex].value);
			document.getElementById("patina6").innerHTML=price14;
			subtotal14=price14*qty14;
		}
		
		if(document.getElementById("patina7").checked)
		{
			price15=100;
			sel15=document.getElementById("sale_pat7");
			qty15=parseInt(sel15.options[sel15.selectedIndex].value);
			document.getElementById("patina7").innerHTML=price15;
			subtotal15=price15*qty15;
		}
		
		if(document.getElementById("patina8").checked)
		{
			price16=100;
			sel16=document.getElementById("sale_pat8");
			qty16=parseInt(sel16.options[sel16.selectedIndex].value);
			document.getElementById("patina8").innerHTML=price16;
			subtotal16=price16*qty16;
		}
		
		sum = subtotal1 +subtotal2 + subtotal3 + subtotal4 + subtotal5 + subtotal6 + subtotal7 + subtotal8
			+subtotal9 +subtotal10 + subtotal11 + subtotal12 + subtotal13 + subtotal14 + subtotal15 + subtotal16;
		totalQty= qty1 + qty2+ qty3 + qty4+ qty5 + qty6 + qty7 + qty8 + qty9 + qty10 + qty11 + qty12 + qty13 + qty14 + qty15 + qty16;
		total = sum;
		alert('Your total purchase is '+ total+'\n'+'Your total quantity is '+totalQty);
		
	//	document.getElementById("total").innerHTML = total;
	//	document.getElementById("quantitytotal").innerHTML = totalQty;
		
	//*********************** Set cookie

		var test2 =Cookies.set('totalpay', total,{expires:60});
		var test3 =Cookies.set('totalquantity', totalQty,{expires:60});
		alert(test3);
		alert(test2);
		//setCookiesale('totalpay',total,'totalquantity',totalQty,1);
		//document.cookie = "total=" + total +"totalQty=" + totalQty+ "; " + expires;
		
	
		window.location.href='../login/clientpage.html';
		
	
 }
 
 
//============================== get cookie ==========================

	 
	 /*
	 if(document.cookie.length != 0)
	 {
	 
	 var coockiearr = document.cookie.split("; ");
	 for(var i=0; i<coockiearr.length; i++)
	 {
		 var namevaluearray = coockiearr[i].split("=");
		 
		 if(namevaluearray[0] == "totalpay")
		 {
			document.getElementById("totalamount").innerHTML=namevaluearray[1]; 
		 }
		  if(namevaluearray[0] == "totalquantity")
		 {
			document.getElementById("numberitem").innerHTML=namevaluearray[1]; 
		 }
		  if(namevaluearray[0] == "nameuser")
		 {
			document.getElementById("userwelcome").innerHTML=namevaluearray[1]; 
		 }
		 
	 }
		 
	 }
	 else{
		 alert("Coockies not found!");
	 }
	 
*/

 

 //============================================ 
// $(document).ready(function(){
					
					
				//	});
					

/*


 */
 //================================================================
 

 
 
 
//*******************************************************************************

 


  
  function hideIcon(self) {
    self.style.backgroundImage = 'none';
}