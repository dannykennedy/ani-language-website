

	//tabbed panels

	// declare globals to hold all the links and all the panel elements

	var tabLinks;
	var tabPanels;

	//i.e. when the page loads, do everything in this function
	window.onload = function() {
		// set initial panel state
		//listen for clicks on tabs

		//when page loads, grab the li elements
		//tablinks becomes an array
		tabLinks = document.getElementById("tabs").getElementsByTagName("li");
		// now get all the tab panel container divs
		tabPanels = document.getElementById("containers").getElementsByTagName("div");

		// activate the first one
		displayPanel(tabLinks[0]);

		// attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link. We want every tab to listen for a click, hence the loop. (?)


		for (var i = 0; i<tabLinks.length; i++) {

			tabLinks[i].onclick = function() {
				// this refers to the i "references the object that called the function"
				displayPanel(this);
				return false; // disable the link that was clicked
			}
			//onfocus is things other than mouse
			tabLinks[i].onfocus = function() {

				displayPanel(this);
				return false;
			}
		}
	}

	// we made up "tabtoactivate"
	function displayPanel(tabToActivate) {
		// respond to tab clicks
		// change panel display and activate tabs

		// go through all the <li> elements
		for (var i = 0; i<tabLinks.length; i++) {
			if (tabLinks[i] == tabToActivate) {
				//if it's the one to activate, change its class
				tabLinks[i].classList.add("active");
				//and display the corresponding panel. Block shows it, none hides it. We're using javaScript to write css directly on the element. 
				tabPanels[i].style.display = "block";
			}
			else {
				// remove the active class on the link
				tabLinks[i].classList.remove("active");
				// hide the panel
				tabPanels[i].style.display = "none";
			}
		}
	}


