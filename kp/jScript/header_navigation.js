// Header Top Left
function dateTimeDisplay()
{
	// Date 
	var mydate = new Date();
	var year = mydate.getYear();
		if(year < 1000)
		{
			year += 1900;
		}
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
		if(daym < 10)
		{
			daym = "0"+daym;
		}
	var dayarray = new Array("Sun,","Mon,","Tue,","Wed,","Thur,","Fri,","Sat,");
	var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	// Time
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var period = "AM";
		if( h == 24)
		{
			h=0;
			period = "AM";
		}
		else if (h > 12)
		{
			h = h - 12;
			period = "PM";
		}

		if(h < 10)
		{
			h = "0"+h;
		}

		if(m < 10)
		{
			m = "0"+m;
		}

		if(s < 10)
		{
			s = "0"+s;
		}
		// Display On Screen
		var myClock = document.getElementById("clock_display");
		myClock.textContent = ""+ dayarray[day]+" "+montharray[month]+" "+daym+", "+year+" | "+h+":"+m+" "+period;
		myClock.innerText =   ""+ dayarray[day]+" "+montharray[month]+" "+daym+", "+year+" | "+h+":"+m+" "+period;
		var funct = "dateTimeDisplay()";
		setTimeout(funct, 1000);
}
dateTimeDisplay();

// Header Bottom

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function sec_items()
{
	document.getElementById("section_btn_items").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

window.onclick = function(event)
{
	if (!event.target.matches('.Section_Button'))
	{
		var dropdowns = document.getElementsByClassName("Section_Div-Content");
		var i;
		for (i = 0; i < dropdowns.length; i++)
		{
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show'))
			{
				openDropdown.classList.remove('show');
			}
		}
	}
}

// Navigation Bar

function click_Sec_btn()
{
	document.getElementById("all").addEventListener("dblclick",s());
	alert("Hello cli");
}
function s()
{
	document.getElementById("section_Button").click();alert("Hello dblcli");
}