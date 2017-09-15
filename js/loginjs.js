
//*************************************** Log IN ***********************

			
	function logon()
			{
									
									var loginuser="admin";
									var loginpass="12345"
									var us= document.getElementById("user").value;	
									var pas= document.getElementById("pass").value;
								
									if(us==loginuser && pas==loginpass)
									{
									
								//	var d= new Date();
								//	d.setTime(d.getTime()+(60*60*1000));
								//	var expires = "expires=" + d.toUTCString();
									//document.cookie = "nameuser=" + us + "; "+ expires;
									var test =Cookies.set('nameuser', us,{expires:60});
									
									
									window.location.href="../gallary/sale.html";

																				
									}
									else
											window.alert('Enter correct username and password!!!')
			}

function checkForm()
{
if(document.getElementById("user").value == "" || document.getElementById("pass").value == "" )
{
alert("Invalid Form: the username or password is empty.");
return false;
}
else
{
alert("The form is valid.");
return true;
}
}	

