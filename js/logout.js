
 function logout(){
	
	deleteCookie();
		
	 alert('Thank You!');
	
	window.location.href="../final.index.html";
 }

 function alertblog(){
	 
	 alert("This weblog is only in Persian language!!! ");
 }

  function deleteCookie()
 { var deluser = Cookies.get('nameuser');
 if (deluser == "")
	 { alert("Cookie username doesn`t exist "); }
 else { 
		 if (deluser != "" && deluser != null)
			 { Cookies.set('nameuser', deluser,{expires:-60}); }
	  } 
 }


