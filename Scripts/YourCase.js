//IMPORTANT NOTE TO SELF: Object Properties MUST be initiated for the script to work!!

//Player object
var Player = {
	Title: "",
	FirstName: "",
	LastName: ""
};

//Guest object objects are just like the player object, only they contain parameters to determine whether they&quot;re the victim or the criminal.
var FirstGuest = {
	Title: "",
	FirstName: "",
	LastName: "",
	Victim: false,
	Criminal: false
};

var SecondGuest = {
	Title: "",
	FirstName: "",
	LastName: "",
	Victim: false,
	Criminal: false
};

var ThirdGuest = {
	Title: "",
	FirstName: "",
	LastName: "",
	Victim: false,
	Criminal: false
};

var FourthGuest = {
	Title: "",
	FirstName: "",
	LastName: "",
	Victim: false,
	Criminal: false
};

var Criminal = {
	Title: "",
	FirstName: "",
	LastName: "",
	Weapon: "",
	Motive: "",
	Story1: "",
	Story2: "",
	Story3: ""
};

var Victim = {
	Title: "",
	FirstName: "",
	LastName: "",
	ModeOfDeath: ""
};

var guestList = [FirstGuest, SecondGuest, ThirdGuest, FourthGuest];
var castOfChars = [Player, FirstGuest, SecondGuest, ThirdGuest, FourthGuest];

//Character/Player names and titles will more than likely be entered into a database later
var charFirstNames = ["Andrew", "Barbara", "Christopher", "Daniela", "Emily", "Freddie", "Giselle", "Harriet", "Isabelle", "Jackie", "Jade", "Kent", "Lucy", "Marcus", "Nathan", "Olivia", "Percy", "Quentin", "Rosie", "Rusty", "Sammy", "Tamara", "Ursula", "Violet", "Walter", "Xavier", "Yancy", "Zoe"];
var charLastNames = ["Nielson", "Oliver", "Cummings", "Scoffield", "Ferguson", "Yankton", "Ubert", "Darwin", "Emerson", "Hawkins", "Louis", "Zimmerman", "Jackson", "Archer", "Tyrian", "Xander", "Quinn", "Kopp", "Graham", "Martin", "Jones", "Peterson", "Rodriguez", "Winston", "Idler", "Sanderson", "Vance", "Blake"];
var charTitles = ["Mr.", "Ms.", "Mr.", "Ms.", "Ms.", "Mr.", "Ms.", "Ms.", "Ms.", "Mr.", "Ms.", "Mr.", "Ms.", "Mr.", "Mr.", "Ms.", "Mr.", "Mr.", "Ms.", "Mr.", "Mr.", "Ms.", "Ms.", "Ms.", "Mr.", "Mr.", "Mr.", "Ms.", ];

//We want to make sure the player is mature enough to play the game because it contains descriptions of violence and will contain images of gore soon.
var myAge = prompt("Please enter your age. We recommend that only people 14 and older play this game due to mature subject matter.");
if (myAge >= 14) {
	confirm("Welcome to YourCase - a Choose Your Own Adventure Game!");
}
else {
	alert("You may play, but we are not responsible for your actions during or after the game, so get your parents permission first, please!");
}
document.write("<h1>YourCase - a Choose Your Own Adventure Game!</h1>");
document.write("<p><b>Welcome to YourCase - a Choose Your Own Adventure Game!</b></p>");

function createPlayer() {
	var playerLabel = document.createElement("label");
	playerLabel.id = "LBL_SelectPlayer";
	playerLabel.innerText = "What's Your Name?";
	playerLabel.htmlFor = "DDL_SelectPlayer";

	//Player chooses a character...
	var playerName = prompt("Who are you? Type 0 for Andrew Nielson, 1 for Barbara Oliver, 2 for Christopher Cummings, 3 for Daniela Scoffield, 4 for Emily Ferguson, 5 for Freddie Yankton, 6 for Giselle Ubert, 7 for Harriet Darwin, 8 for Isabelle Emerson, 9 for Jackie Hawkins, 10 for Jade Louis, 11 for Kent Zimmerman, 12 for Lucy Jackson, 13 for Marcus Archer, 14 for Nathan Tyrian, 15 for Olivia Xander, 16 for Percy Quinn, 17 for Quentin Kopp, 18 for Rosie Graham, 19 for Rusty Martin, 20 for Sammy Jones, 21 for Tamara Peterson, 22 for Ursula Rodriguez, 23 for Violet Winston, 24 for Walter Idler, 25 for Xavier Sanderson, 26 for Yancy Vance, and 27 for Zoe Blake.")
	//First Names, Last Names, and Titles are looped through to make things simpler.
	for (x = 0; x <= charFirstNames.length; x++) {
		for (y = 0; y <= charLastNames.length; y++) {
			for (z = 0; z <= charTitles.length; z++) {
				if (playerName == x && playerName == y && playerName == z) {
					//...Player Character&quot;s First name, Last name, and Title are added to the Player object...
					Player.Title = charTitles[z];
					Player.FirstName = charFirstNames[x];
					Player.LastName = charLastNames[y];

					//...Your Character's full name is output in the next prompt
					document.write("<h2>" + Player.FirstName + " " + Player.LastName + "'s Story</h2>");
					document.write("<p>You are " + Player.Title + " " + Player.FirstName + " " + Player.LastName + ". You are hosting a small, quiet get-together at your mansion. You've given the household staff the weekend off; you'll be the only one cooking, cleaning, and serving for the next few days, and you don't mind at all. You and four other guests of your choosing will talk, have a few drinks, and maybe play some cards. Unfortunately, nothing ever goes as planned for you...</p>");
				}
			}
		}
	}
}

function invite1stGuest() {
	//Player "Invites" the First Guest...
	var FirstGuestName = prompt("Who would you like to be your first? Choose any other name except your own. Remember, type 0 for Andrew Nielson, 1 for Barbara Oliver, 2 for Christopher Cummings, 3 for Daniela Scoffield, 4 for Emily Ferguson, 5 for Freddie Yankton, 6 for Giselle Ubert, 7 for Harriet Darwin, 8 for Isabelle Emerson, 9 for Jackie Hawkins, 10 for Jade Louis, 11 for Kent Zimmerman, 12 for Lucy Jackson, 13 for Marcus Archer, 14 for Nathan Tyrian, 15 for Olivia Xander, 16 for Percy Quinn, 17 for Quentin Kopp, 18 for Rosie Graham, 19 for Rusty Martin, 20 for Sammy Jones, 21 for Tamara Peterson, 22 for Ursula Rodriguez, 23 for Violet Winston, 24 for Walter Idler, 25 for Xavier Sanderson, 26 for Yancy Vance, and 27 for Zoe Blake.");
	//First Names, Last Names, and Titles are looped through again to make creating the first guest easier.
	for (x = 0; x <= charFirstNames.length; x++) {
		for (y = 0; y <= charLastNames.length; y++) {
			for (z = 0; z <= charTitles.length; z++) {
				if (FirstGuestName == x && FirstGuestName == y && FirstGuestName == z) {
					//...First Guest's First name, Last name, and Title are added to the Player object...
					FirstGuest.Title = charTitles[z];
					FirstGuest.FirstName = charFirstNames[x];
					FirstGuest.LastName = charLastNames[y];

					//Your Conversation with the First Guest...
					document.write("<p>A few minutes later, the doorbell rings! You rush to the door and fling it open to see " + FirstGuest.FirstName + " " + FirstGuest.LastName + "'s smiling face.</p>");
					document.write("<p>&quot;Welcome, " + FirstGuest.FirstName + "! It&quot;s so nice to see you again!&quot; you exclaim!</p>");
					document.write("&quot;Likewise, " + Player.FirstName + ".&quot;, " + FirstGuest.Title + " " + FirstGuest.LastName + " replies, shaking your hand.</p>");
				}
			}
		}
	}
}

function invite2ndGuest() {
	//Player "Invites" the Second Guest...
	var SecondGuestName = prompt("Who would you like to invite as your second guest? Choose any other name except your own and your first Guest's. Here are the speed dial numbers for all of your contacts: 0 for Andrew Nielson, 1 for Barbara Oliver, 2 for Christopher Cummings, 3 for Daniela Scoffield, 4 for Emily Ferguson, 5 for Freddie Yankton, 6 for Giselle Ubert, 7 for Harriet Darwin, 8 for Isabelle Emerson, 9 for Jackie Hawkins, 10 for Jade Louis, 11 for Kent Zimmerman, 12 for Lucy Jackson, 13 for Marcus Archer, 14 for Nathan Tyrian, 15 for Olivia Xander, 16 for Percy Quinn, 17 for Quentin Kopp, 18 for Rosie Graham, 19 for Rusty Martin, 20 for Sammy Jones, 21 for Tamara Peterson, 22 for Ursula Rodriguez, 23 for Violet Winston, 24 for Walter Idler, 25 for Xavier Sanderson, 26 for Yancy Vance, and 27 for Zoe Blake.");
	//First Names, Last Names, and Titles are looped through again to make creating the second guest easier.
	for (x = 0; x <= charFirstNames.length; x++) {
		for (y = 0; y <= charLastNames.length; y++) {
			for (z = 0; z <= charTitles.length; z++) {
				if (SecondGuestName == x && SecondGuestName == y && SecondGuestName == z) {
					//...Second Guest's First name, Last name, and Title are added to the Player object...
					SecondGuest.Title = charTitles[z];
					SecondGuest.FirstName = charFirstNames[x];
					SecondGuest.LastName = charLastNames[y];

					//Your Conversation with the Next Guest...
					document.write("<p>" + SecondGuest.FirstName + " arrives just as " + FirstGuest.FirstName + " lets the door swing slowly closed. Fortunately " + FirstGuest.Title + " " + FirstGuest.LastName + " sees " + SecondGuest.Title + " " + SecondGuest.LastName + "&quot;s car pull into the driveway and hurriedly pulls it open again.</p>");
				}
			}
		}
	}
}

function invite3rdGuest() {
	//Player "Invites" the Third Guest...
	var thirdName = prompt("Who would you like to be your third? Choose any other name except your own and your first two Guests'. Type 0 for Andrew Nielson, 1 for Barbara Oliver, 2 for Christopher Cummings, 3 for Daniela Scoffield, 4 for Emily Ferguson, 5 for Freddie Yankton, 6 for Giselle Ubert, 7 for Harriet Darwin, 8 for Isabelle Emerson, 9 for Jackie Hawkins, 10 for Jade Louis, 11 for Kent Zimmerman, 12 for Lucy Jackson, 13 for Marcus Archer, 14 for Nathan Tyrian, 15 for Olivia Xander, 16 for Percy Quinn, 17 for Quentin Kopp, 18 for Rosie Graham, 19 for Rusty Martin, 20 for Sammy Jones, 21 for Tamara Peterson, 22 for Ursula Rodriguez, 23 for Violet Winston, 24 for Walter Idler, 25 for Xavier Sanderson, 26 for Yancy Vance, and 27 for Zoe Blake.");
	//First Names, Last Names, and Titles are looped through again to make creating the third guest easier.
	for (x = 0; x <= charFirstNames.length; x++) {
		for (y = 0; y <= charLastNames.length; y++) {
			for (z = 0; z <= charTitles.length; z++) {
				if (thirdName == x && thirdName == y && thirdName == z) {
					//...Third Guest's First name, Last name, and Title are added to the ThirdGuest object...
					ThirdGuest.Title = charTitles[z];
					ThirdGuest.FirstName = charFirstNames[x];
					ThirdGuest.LastName = charLastNames[y];

					//Your Conversation with the Third Guest...
					document.write("<p>" + Player.FirstName + " says &quot;Hello, " + ThirdGuest.Title + " " + ThirdGuest.LastName + "! Enjoy the party.&quot;</p>");
				}
			}
		}
	}
}

function invite4thGuest() {
	//Player "Invites" the Fourth Guest...
	var fourthName = prompt("Who would you like to be your last? Choose any other name except your own and your other Guests'. Type 0 for Andrew Nielson, 1 for Barbara Oliver, 2 for Christopher Cummings, 3 for Daniela Scoffield, 4 for Emily Ferguson, 5 for Freddie Yankton, 6 for Giselle Ubert, 7 for Harriet Darwin, 8 for Isabelle Emerson, 9 for Jackie Hawkins, 10 for Jade Louis, 11 for Kent Zimmerman, 12 for Lucy Jackson, 13 for Marcus Archer, 14 for Nathan Tyrian, 15 for Olivia Xander, 16 for Percy Quinn, 17 for Quentin Kopp, 18 for Rosie Graham, 19 for Rusty Martin, 20 for Sammy Jones, 21 for Tamara Peterson, 22 for Ursula Rodriguez, 23 for Violet Winston, 24 for Walter Idler, 25 for Xavier Sanderson, 26 for Yancy Vance, and 27 for Zoe Blake.");
	//First Names, Last Names, and Titles are looped through again to make creating the final guest easier.
	for (x = 0; x <= charFirstNames.length; x++) {
		for (y = 0; y <= charLastNames.length; y++) {
			for (z = 0; z <= charTitles.length; z++) {
				if (fourthName == x && fourthName == y && fourthName == z) {
					//...Fourth Guest's First name, Last name, and Title are added to the FourthGuest object.
					FourthGuest.Title = charTitles[z];
					FourthGuest.FirstName = charFirstNames[x];
					FourthGuest.LastName = charLastNames[y];

					//Your Conversation with the Final Guest...
					document.write("<p>" + Player.FirstName + " says &quot;Long time no see, " + FourthGuest.Title + " " + FourthGuest.LastName + "!&quot;</p>");
				}
			}
		}
	}
}

function beginPartying() {
	document.write("<p>Now that your guests have arrived, the party can officially begin! Music plays softly in the background, old friendships are rekindled. All is well.</p>");
	document.write("<p>While serving the appetizers, you notice that one of the guests is missing. You are about to make inquiries when you hear someone scream!</p>");
}
