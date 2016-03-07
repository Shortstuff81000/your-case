//IMPORTANT NOTE TO SELF: Object Properties MUST be initiated for the script to work!!

//Player object
//var Player = {
//	Title: "",
//	FirstName: "",
//	LastName: ""
//};

//Guest object objects are just like the player object, only they contain parameters to determine whether they&quot;re the victim or the criminal.
var Character = {
	Title: '',
	FirstName: '',
	MiddleName: '',
	LastName: '',
	IsPlayer: false,
	IsVictim: false,
	IsCriminal: false
};

//Player object & others start out as an empty variable
var objPlayer = '';
var obj1stGuest = '';
var obj2ndGuest = '';
var obj3rdGuest = '';
var obj4thGuest = '';

//Character/Player names and titles will more than likely be entered into a database later
var charFirstNames = ['Andrew', 'Barbara', 'Christopher', 'Daniela', 'Esmerelda', 'Freddie', 'Giselle', 'Harriet', 'Isabelle', 'Jackie', 'Jade', 'Kent', 'Lucy', 'Marcus', 'Nathan', 'Olivia', 'Percy', 'Quentin', 'Rosie', 'Rusty', 'Sammy', 'Tamara', 'Ursula', 'Violet', 'Walter', 'Xavier', 'Yancy', 'Zoe'];
var charLastNames = ['Nielson', 'Oliver', 'Cummings', 'Scoffield', 'Ferguson', 'Yankton', 'Ubert', 'Darwin', 'Emerson', 'Hawkins', 'Louis', 'Zimmerman', 'Jackson', 'Archer', 'Tyrian', 'Xander', 'Quinn', 'Kopp', 'Graham', 'Martin', 'Jones', 'Peterson', 'Rodriguez', 'Winston', 'Idler', 'Sanderson', 'Vance', 'Blake'];
var charTitles = ['Mr.', 'Ms.', 'Mr.', 'Ms.', 'Ms.', 'Mr.', 'Ms.', 'Ms.', 'Ms.', 'Mr.', 'Ms.', 'Mr.', 'Ms.', 'Mr.', 'Mr.', 'Ms.', 'Mr.', 'Mr.', 'Ms.', 'Mr.', 'Mr.', 'Ms.', 'Ms.', 'Ms.', 'Mr.', 'Mr.', 'Mr.', 'Ms.'];

//Guest creation elements
//var lbl2ndGuest = '';
//var ddl2ndGuest = '';
//var btn2ndGuest = '';

//var lbl3rdGuest = '';
//var ddl3rdGuest = '';
//var btn3rdGuest = '';

//var lbl4thGuest = '';
//var ddl4thGuest = '';
//var btn4thGuest = '';

function startGame(divName) {
	//The UI
	//The story div
	var myDiv = '';
	//Create and append player label
	var lblPlayer = '';
	//Create and append select list
	var ddlPlayer = '';
	//Create the default, invalid choice
	var defOpt = '';
	//Create the "Choose this character" button
	var btnPlayer = '';

	myDiv = document.getElementById('story');

	lblPlayer = document.createElement('label');
	lblPlayer.id = 'LBL_Player';
	lblPlayer.htmlFor = 'DDL_PlayerChar';
	lblPlayer.innerHTML = 'Please select a character. ';
	myDiv.appendChild(lblPlayer);

	ddlPlayer = document.createElement('select');
	ddlPlayer.id = 'DDL_PlayerChar';
	myDiv.appendChild(ddlPlayer);

	defOpt = document.createElement("option");
	defOpt.value = 0;
	defOpt.text = 'Select...';
	ddlPlayer.appendChild(defOpt);

	//Create and append the options
	for (var i = 0; i < charFirstNames.length; i++) {
		var option = document.createElement("option");
		option.value = charFirstNames[i] + '_' + charLastNames[i];
		option.text = charFirstNames[i] + ' ' + charLastNames[i];
		ddlPlayer.appendChild(option);
	}

	btnPlayer = document.createElement('button');
	btnPlayer.id = 'BTN_Player';
	btnPlayer.type = 'button';
	var attrib = document.createAttribute('onClick');
	attrib.value = 'welcomePlayer()';
	btnPlayer.setAttributeNode(attrib);
	//btnPlayer.onclick = welcomePlayer;
	btnPlayer.innerHTML = 'Select This Character!';
	myDiv.appendChild(btnPlayer);

	document.getElementById('BTN_Start').hidden = true;
}

function welcomePlayer() {
	var lbl1stGuest = '';
	var ddl1stGuest = '';
	var defObt = '';
	var btn1stGuest = '';

	//Use the selected index of the player dropdown list to assign title, first name, and last name to a new character object called Player
	if (ddlPlayer.options[ddlPlayer.selectedIndex].value != '0') {
		objPlayer = new Character();
		objPlayer.Title = charTitles[ddlPlayer.options[ddlPlayer.selectedIndex].text];
		objPlayer.FirstName = charFirstNames[ddlPlayer.options[ddlPlayer.selectedIndex].text];
		objPlayer.LastName = charLastNames[ddlPlayer.options[ddlPlayer.selectedIndex].text];
		objPlayer.IsPlayer = true;
	}
	//Find the div again to "invite" the first guest and remove player creation UI
	myDiv = document.getElementById('story');
	//Test the Player object
	//myDiv.innerHTML = '<p>Hello, ' + objPlayer.Title + ' ' + objPlayer.LastName + '!';

	//Remove the player creation UI
	lblPlayer.hidden = true;
	ddlPlayer.hidden = true;
	btnPlayer.hidden = true;

	lbl1stGuest = document.createElement('label');
	lbl1stGuest.id = 'LBL_1stGuest';
	lbl1stGuest.htmlFor = 'DDL_1stGuest';
	lbl1stGuest.innerHTML = 'Who would you like to invite first?';
	myDiv.appendChild(lbl1stGuest);

	ddl1stGuest = document.createElement('select');
	ddl1stGuest.id = 'DDL_1stGuest';
	myDiv.appendChild(ddl1stGuest);

	defOpt = document.createElement("option");
	defOpt.value = 0;
	defOpt.text = 'Select...';
	ddl1stGuest.appendChild(defOpt);

	//Create and append the options
	for (var i = 0; i < charFirstNames.length; i++) {
		var guestList = [];
		guestList.push(charFirstNames[i]);
		if (objPlayer.FirstName === guestList[i]) {
			guestList.splice(i);
		}

		for (var j = 0; j < guestList.length; j++) {
			for (var k = guestList[j]; k = charFirstNames[j]; k++) {
				var option = document.createElement("option");
				option.value = charFirstNames[i] + '_' + charLastNames[i];
				option.text = charFirstNames[i] + ' ' + charLastNames[i];
				ddl1stGuest.appendChild(option);
			}
		}
	}

	btn1stGuest = document.createElement('button');
	btn1stGuest.id = 'BTN_1stGuest';
	btn1stGuest.type = 'button';
	btn1stGuest.innerHTML = 'Select This Character!';
	myDiv.appendChild(btn1stGuest);
}
