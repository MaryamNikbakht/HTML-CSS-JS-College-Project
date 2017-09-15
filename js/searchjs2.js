function checkSearch2(){
	alert("hiu");
}
function checkSearch()
	{
		
		
	  var arrNames = new Array ("painting","painting7","patina", "painting2", "painting4","painting5","painting8","photo");
	  var arrPrice = new Array("500$","1000$", "100$", "500$", "600$","500$","800$","NOT FOR SALE");
	  var arrDiscrib = new Array("Portrait1- Pastel Painting - 50*70",
	                      "Portrait-Collag - Oil Painting - 100*70",
	                      "Sculpture 20*10cm" , "Portrait2- Pastel Painting - 50*70", "Jesus- Pastel Painting - 50*70",
						  "Oil Painting - 50*70","Shahname - Pastel Painting - 50*70","Yazd_Iran");
	  var arrImgs = new Array("../img/painting/inside1.jpg", "../img/painting/paint3.jpg", "../img/scul/sofal2.jpg", "../img/painting/paint1.jpg",
	  "../img/painting/paint4.png","../img/painting/paint2.jpg", "../img/painting/6.jpg","../img/pic/yazd1.jpg");
	  
     var ysearch, price , desc , imageresult;
	  ysearch = document.getElementById("search").value.toLowerCase();
	  
	  var index = -1;
	  
	  for (var i = 0; i < 8; i++)
	  {
	    if (arrNames[i] == ysearch)
		{
       		index=i;
			ysearch=arrNames[index].toUpperCase();
			price = arrPrice[index];
			desc = arrDiscrib[index];
			imageresult = arrImgs[index];
		  
		}
	  }
	  
	  if (index == -1)
	  {
		ysearch ="NOT FOUND. Please Try Again!";
		price = "";
		desc = "";
		imageresult = "";
		
		
	  }
	  
			document.getElementById('p1').innerHTML= ysearch;
			document.getElementById('p2').innerHTML=desc;
			document.getElementById('p3').innerHTML=price;
			document.getElementById('p4').src=imageresult;
			  
	}