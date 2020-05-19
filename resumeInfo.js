'use strict';

angular.module('resumeApp', [])
  .controller('ResumeController', function($http, $scope) {
    var resumeApp = this;

	var techSkills = new Array();
	techSkills['proficient'] = ['HTML', 'CSS/SCSS', 'TypeScript/JavaScript', 'React', 'Git'];
	techSkills['comfortable'] = ['jQuery', 'AngularJS', 'C', 'Ruby on Rails', 'Bash', 'Java', 'Azure Data Explorer', 'Microsoft PowerBI'];
	techSkills['exposure'] = ['Python', 'C#', 'R', 'SML', 'SVN', 'MySQL', 'Google Cloud Platform'];
	this.techSkills = techSkills;

	
	this.experiences = new Array();
	this.experiences[0] = new Experience('Brandfolder', 'Denver, CO', 'Full Stack Developer',
		'November 2019', 'Present',
		[]
	);
	this.experiences[1] = new Experience('Microsoft', 'Redmond, WA', 'Software Engineer',
		'August 2018', 'November 2019',
	    ["Developed reporting features across Microsoft's Azure DevOps product by writing and reviewing code as a member of one of its only horizontal teams",
	    "Collaborated closely with product managers and other engineers from start to finish on features - including spec reviews, development design, development, and post-deployment telemetry to measure success and adoption",
		"Shared knowledge with teammates about experimental methodology and design as well as early experience with Jest and the Enzyme library",
		"Adapted to work in both the product's legacy codebase (JavaScript, jQuery) and modern codebase (TypeScript, React, Jest)",
		"Contributed to a performance effort that resulted in a 50% Apdex improvement in the team's main feature area",
		"Served as feature lead for displaying work rollup progress on Azure DevOps backlogs",
	    "Monitored live sight health, managed and tuned automated alerts, facilitated daily stand-up, and worked to resolve bugs and customer issues during on-call engineer rotations"]
	);
	this.experiences[2] = new Experience('Square', 'San Francisco, CA', 'Software Engineer Intern',
		'June 2017', 'September 2017',
		['Wrote and deployed industry-standard code in a fast-paced, agile development workflow',
		'Implemented an interactive widget as a tool for Square\'s API documentation website using Ruby on Rails, JavaScript, HTML, Sass, and Square\'s e-commerce Rails SDK']);
	this.experiences[3] = new Experience('Google', 'Seattle, WA', 'Engineering Practicum Intern',
		'June 2016', 'September 2016',
		["Built a guided flow that allows Cloud Launcher solution partners to control the configuration options available to the customers deploying these solutions",
		"Used HTML, CSS, JavaScript, and AngularJS to build the front-end structure of the configuration editor according to UX mocks as well as implement dynamic use of back-end data about the solution configuration"]);
	this.experiences[4] = new Experience('Google', 'Mountain View, CA', 'Engineering Practicum Intern',
		'June 2015', 'September 2015',
		["Enhanced code that displays knowledge graph facts to support subscripts and superscripts across multiple platforms by enriching protocol buffers as well as updating templates through a template-rendering engine",
		"Implemented a Java handler for electron shell configuration and chemical formula knowledge graph facts to add and render the appropriate subscript/superscript information"]);

	this.activities = new Array();
	this.activities[0] = new Activity("The Communication and Learning Lab,", "Chicago, IL", "Honors Thesis Researcher", "Winter 2017 - Spring 2018", "http://callab.uchicago.edu/");
	this.activities[1] = new Activity("Grace Hopper Celebration of Women in Technology", "", "Google Grant Recipient", "October 2015, 2016", "http://ghc.anitaborg.org/");
	this.activities[2] = new Activity("The Infant Learning and Development Lab,", "Chicago, IL", "Research Assistant", "Fall 2015 - Fall 2016", "http://woodwardlab.uchicago.edu/");
	this.activities[3] = new Activity("Computer Science Summer Institute,", "Google, Seattle, WA", "Participant", "July - August 2014", "https://www.google.com/edu/resources/programs/computer-science-summer-institute/");

	this.projects = new Array();
	this.projects.push(new Project(
		"Parent Response Times as Negative Evidence for Grammar Learning",
		"",
		"CALLab, The University of Chicago",
		"Spring 2017 - Summer 2018",
		["Psychology B.A. honors thesis project - Python, HTML/CSS/JavaScript, R, Amazon Mechanical Turk",
		"Used Python to process XML data from three large natural language corpora to perform statistical analyses on parent-child speech interactions",
		"Designed and implemented a remote, online self-paced reading experiment to investigate mental processing of ungrammatical utterances",
		"Received Outstanding Poster award at the 2018 Midwest Cognitive Science Conference"]
	));
	this.projects.push(new Project(
		'Intern Hack Week - Achievement Badges',
		"",
		"Square",
		"Summer 2017",
		["Teamed up with two fellow interns to display automated and custom visual achievement badges on user pages in Square's internal corporate directory - Ruby on Rails, MySQL, Slim, HTML, SCSS ",
		"Awarded third place in Intern Hack Week"]
	));
	this.projects.push(new Project(
		'UC Cheer Website',
		"http://emrusso.github.io/uccheer/index.html",
		"" /* location */,
		'Spring 2017',
		["An updated look for the UChicago Cheerleading team's website - HTML/CSS, AngularJS"]
	));
	this.projects.push(new Project(
		'Life of the Mind',
		"http://devpost.com/software/life-of-the-mind",
		"Uncommon Hacks",
		'Spring 2016',
		["Game controlled by Muse headband speedometer and EEG data - Unity game engine, C#, Muse",
		'Awarded "Most UChicago" prize']
	));
	this.projects.push(new Project(
		'Telephone',
		"http://telephone-cssi2014.appspot.com",
		'Computer Science Summer Institute',
		'August 2014',
		['Online game of Telephone - HTML/CSS/JavaScript, Python, jinja2, Google App Engine (Python)']
	));


	$scope.techSkillsAsString = function(arr) {
		var str = arr[0];
		for(var i = 1; i < arr.length; i++) {
			str = str + ", " + arr[i];
		}
		return str;
	}

	window.mobilecheck = function() {
            var check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        this.isMobile = window.mobilecheck();
})


var Experience = function(company, location, position, startDate, endDate, bullets) {
  this.company = company;
  this.location = location;
  this.position = position;
  this.startDate = startDate;
  this.endDate = endDate;
  this.bullets = bullets;
}

var Activity = function(name, location, position, date, link) {
	this.name = name;
	this.location = location;
	this.position = position;
	this.date = date;
	this.link = link;
}

var Project = function(title, link, location, date, details) {
	this.title = title;
	this.link = link;
	this.location = location;
	this.date = date;
	this.details = details;
}
