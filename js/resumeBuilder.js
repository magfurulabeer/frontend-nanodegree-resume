/////// Resume Section Objects ///////

var bio = {
		"name": "Magfurul Abeer",
		"role": "Web Developer",
		"contacts": {
			"mobile": "(917) 412 - 6697",
			"email": "magfurulabeer@gmail.com",
			"github": "https://github.com/magfurulabeer",
			"twitter": "doesnotexist.null/undefined",
			"location": "176 Wheeler Ave, Staten Island NY 10314"},
		"picture": "images/1.jpg",
		"message": "I'm a Front End Ninja",
		"skills": ["HTML5", "CSS3", "Javascript", "Ruby", "Rails"]
	}

var projects = [
	{
		"title": "Wright Anything Agency Website",
		"date": "May 2015",
		"url": "images/wright.png",
		"description": "A dummy legal firm website made entirely in custom HTML & CSS for the fictional attorney Phoenix Wright from the popular Ace Attorney videogame series."
	},
	{
		"title": "NYTimes Page Clone",
		"date": "April 2015",
		"url": "images/times.png",
		"description": "A static clone of an NYTimes article made entirely in HTML & CSS"
	},
	{
		"title": "Mint.com Register Page Clone",
		"date": "April 2015",
		"url": "images/mint.png",
		"description": "A static clone of Mint.com's Registration Form made entirely in HTML & CSS"
	},
	{
		"title": "YouTube Page Clone",
		"date": "April 2015",
		"url": "images/youtube.png",
		"description": "A static clone of a YouTube video made entirely in HTML & CSS"
	},
	{
		"title": "Google Homepage Clone",
		"date": "April 2015",
		"url": "images/google.png",
		"description": "A static clone of the Google Homepage made entirely in HTML & CSS"
	}
];



var work = [
		{
			"position": "Junior Front End Developer",
			"employer": "Enova Creations",
			"dates": "April 2014 - February 2015",
			"url": "http://enovacreations.com/index.html",
			"location": "Brooklyn, NY",
			"description": "Designed Wireframes and Mockups as well as various graphics work. Focus on Front End Development, primarily Responsive Design."
		},
		{
			"position": "Intern",
			"employer": "MCG Repairs",
			"dates": "October 2013 - March 2014",
			"url": "#",
			"location": "Staten Island, NY",
			"description": "Fixed software issues. Constructes custom desktop builds. Performed maintenance and upgrades."
		}
];

var education = [
		{
			"name":	"Brooklyn Technical High School",
			"graduation": 2009,
			"major": "Computer Science",
			"city": "Brooklyn, NY",
			"url": "http://www.bths.edu/",
			"degree": ""
		},
		{
			"name": "Hunter College of the City University of New York",
			"graduation": "--",
			"major": "Psychology",
			"city": "New York, NY",
			"url": "http://www.hunter.cuny.edu/main/",
			"degree": "BA"
		}
];

/////// Display Functions ///////

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	// This next line removes the twitter portion since I don't have a twitter but it's kept for future use
	formattedTwitter = HTMLtwitter.replace("flex-item", "hidden");
	$("#header").append(formattedTwitter);


	$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.message));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[2]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[3]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[4]));
	};
}

work.display = function() {
	// for in loop returns an extra job with only undefined values
	//for(var job in work) {
	for(var job = 0; job < work.length; job++) {
		var employer = HTMLworkEmployer.replace("#", work[job].url);
		employer = employer.replace("%data%", work[job].employer);
		var title = HTMLworkTitle.replace("%data%", work[job].position);
		var dates = HTMLworkDates.replace("%data%", work[job].dates);
		// For whatever reason, naming the variable "location" made the page unable to render
		var area = HTMLworkLocation.replace("%data%", work[job].location);
		var desc = HTMLworkDescription.replace("%data%", work[job].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(employer + title);
		$(".work-entry:last").append(dates);
		$(".work-entry:last").append(area);
		$(".work-entry:last").append(desc);	
	}
};

projects.display = function() {
	//for(var p in projects) {
	// For whatever reason, the for in returns a 6th project
	// with all attributes as undefined, so I had to replace it
	for(var p = 0; p < projects.length; p++) {
		var title = HTMLprojectTitle.replace("%data%", projects[p].title);
		var dates = HTMLprojectDates.replace("%data%", projects[p].date);
		var desc = HTMLprojectDescription.replace("%data%", projects[p].description);
		var img = HTMLprojectImage.replace("%data%", projects[p].url);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(title);
		$(".project-entry:last").append(dates);
		$(".project-entry:last").append(desc);
		$(".project-entry:last").append(img);
	}
}

education.display = function() {
	for(var e = 0; e < education.length; e++) {
		var name = HTMLschoolName.replace("%data%", education[e].name);
		name = name.replace("#", education[e].url)
		var date = HTMLschoolDates.replace("%data%", education[e].graduation);
		var location = HTMLschoolLocation.replace("%data%", education[e].city);
		var major = HTMLschoolMajor.replace("%data%", education[e].major);

		if(education[e].degree === "") {
			var degree = HTMLschoolDegree.replace(" -- %data%", education[e].degree);
		} else {
			var degree = HTMLschoolDegree.replace("%data%", education[e].degree);
		}

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(name + degree);
		$(".education-entry:last").append(date);
		$(".education-entry:last").append(location);
		$(".education-entry:last").append(major);
	}
}

/////// Calling Display Functions ///////
bio.display();
work.display();
projects.display();
education.display();


/////// Map ///////

$("mapDiv").append(googleMap);


/////// Misc ///////

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

