window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function(){
			windowObj = window.open("https://meetingnew.zoho.com/meeting/presenter.do?key=1092839932");
			windowObj.onload = () => {				
				alert('hi');
				
			};
			setTimeout(() => {
  				windowObj.close();
			}, 1000);
	$(window).scroll(function () {
		    if ($(this).scrollTop() > 550) {
		       $('#nav').css("position", "fixed");
		       $('#nav').css("top", "0");
		    }
		    
		  	else{
		  		$('#nav').css("position", "absolute");
		  		$('#nav').css("top", "60%");
		  	}

	});
	$(window).scroll(function () {
    if ($(this).scrollTop() >  1330 && $(this).scrollTop() < 1340){
			  var elem = document.getElementById("htmlnav");  
			  var width = 10;
			  var id = setInterval(frame, 12);
			  function frame() {
			    if (width >= 80) {
			      clearInterval(id);
			    } else {
			      width++; 
			      elem.style.width = width + '%'; 
			      //document.getElementById("label").innerHTML = width * 1  + '%';
			      frame2();
			    }
			    
			  }
			  var elem2 = document.getElementById("cssnav"); 
			  var width2 = 10;
			  var id2 = setInterval(frame2,12);
			  function frame2() {
			    if (width2 >= 60) {
			      clearInterval(id2);
			    } else {
			      width2++; 
			      elem2.style.width = width2 + '%'; 
			      //document.getElementById("label").innerHTML = width * 1  + '%';
			    }
			  }
			  var elem3 = document.getElementById("jsnav"); 
			  var width3 = 10;
			  var id3 = setInterval(frame3,12);
			  function frame3() {
			    if (width3 >= 40) {
			      clearInterval(id3);
			    } else {
			      width3++; 
			      elem3.style.width = width3 + '%'; 
			      //document.getElementById("label").innerHTML = width * 1  + '%';
			    }
			  }
			  var elem4 = document.getElementById("javanav"); 
			  var width4 = 10;
			  var id4 = setInterval(frame4,12);
			  function frame4() {
			    if (width4 >= 25) {
			      clearInterval(id4);
			    } else {
			      width4++; 
			      elem4.style.width = width4 + '%'; 
			      //document.getElementById("label").innerHTML = width * 1  + '%';
			    }
			  }
			  var elem5 = document.getElementById("pythonnav"); 
			  var width5 = 10;
			  var id5 = setInterval(frame5,12);
			  function frame5() {
			    if (width5 >= 30) {
			      clearInterval(id5);
			    } else {
			      width5++; 
			      elem5.style.width = width5 + '%'; 
			      //document.getElementById("label").innerHTML = width * 1  + '%';
			    }
			  }
		}
		else{
		  		$('#htmlnav').css("width", "80%");
		  		$('#cssnav').css("width", "60%");
		  		$('#jsnav').css("width", "40%");
		  		$('#javanav').css("width", "25%");
		  		$('#pythonnav').css("width", "30%");
		  		
		  	}
	});
	$("#li1").click(function (){                
		$('html, body').animate({                    
			scrollTop: $("#container").offset().top                
		}, 1000);            
	});
	$("#aboutMe").click(function (){                
		$('html, body').animate({                    
			scrollTop: $("#about").offset().top                
		}, 1000);            
	});
	$("#skillsMy").click(function (){                
			$('html, body').animate({                    
				scrollTop: $("#skills").offset().top                
			}, 1000);            
		});
	$("#port").click(function (){                
			$('html, body').animate({                    
				scrollTop: $("#python").offset().top                
			}, 1000);            
		});
	$("#workMy").click(function (){                
			$('html, body').animate({                    
				scrollTop: $("#work").offset().top                
			}, 1000);            
		});
	$("#contactMy").click(function (){                
			$('html, body').animate({                    
				scrollTop: $("#contact").offset().top                
			}, 1000);            
		});


});
