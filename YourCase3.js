//The YourCase Character object
var YCharacter = function (Title, FirstName, MiddleName, LastName, IsCriminal, IsPlayer, IsVictim) {
	this.Title = Title;
	this.FirstName = FirstName;
	this.MiddleName = MiddleName;
	this.LastName = LastName;
	this.IsCriminal = IsCriminal;
	this.IsPlayer = IsPlayer;
	this.IsVictim = isVictim;
}

//Player object & others start out as a blank YCharacter (Your Case Character) objects
var objPlayer = new YCharacter();
var obj1stGuest = new YCharacter();
var obj2ndGuest = new YCharacter();
var obj3rdGuest = new YCharacter();
var obj4thGuest = new YCharacter();

$(document).ready(function () {
	$('#Setting').hide();
	$('#Friends').hide();
	$("#BTN_Player").click(function () {
		$("#ChoosePlayer").html("Please wait...");
		$.ajax({
			url: "Character.xml",
			type: "GET",
			dataType: "xml",
			success: OnSuccess,
			error: OnError
		});
	});
});

function OnSuccess(xml) {
	//var tableContent = '<table>' +
	//	'<tr>' +
	//	'<th>&nbsp;</th>' +
	//	'<th>Title</th>' +
	//	'<th>First Name</th>' +
	//	'<th>Middle Name</th>' +
	//	'<th>Last Name</th>' +
	//	'<th>Nominative <br />Pronoun</th>' +
	//	'<th>Objective <br />Pronoun</th>' +
	//	'<th>Posessive <br />Pronoun</th>'
	//'</tr>';
	//$(xml).find('Character').each(function () {
	//	tableContent += '<tr>' +
	//						'<th style="text-align:left;">' + $(this).attr('ID') + '.</th>' +
	//						'<td>' + $(this).attr('Title') + '</td>' +
	//						'<td>' + $(this).attr('First') + '</td>' +
	//						'<td>' + $(this).attr('Middle') + '</td>' +
	//						'<td>' + $(this).attr('Last') + '</td>' +
	//						'<td>' + $(this).find('Pronouns').attr('Nominative') + '</td>' +
	//						'<td>' + $(this).find('Pronouns').attr('Objective') + '</td>' +
	//						'<td>' + $(this).find('Pronouns').attr('Posessive') + '</td>' +
	//						'<td>' + $(this).find('Bio').text() + '</td>'
	//	'</tr>';
	//});
	//tableContent += '</tr></table>';
	//$('#Wrapper').html(tableContent);

	//Store character names and biographies to break out of the character.each function
	var charTitles = new Array();
	var fNames = new Array();
	var mNames = new Array();
	var lNames = new Array();
	var allBios = new Array();

	//var listContent = '<ul id="PlayerPicker">';
	var listContent = '<div id="PlayerPicker">';
	$(xml).find('Character').each(function () {
		//listContent += '<li class="ui-widget-content"><div class="selecTitle">' + $(this).attr('Title') + ' ' + $(this).attr('First') + ' ' + $(this).attr('Middle').charAt(0) + '. ' + $(this).attr('Last') + '</div><div class="scroller">' + $(this).find('Bio').text() + '</div>';
		listContent += '<input type="radio" id="RB_' + $(this).attr('First') + $(this).attr('Last') + '" name="player" class="ui-button-text" style="background-color: transparent;"><label for="RB_' + $(this).attr('First') + $(this).attr('Last') + '">' + $(this).attr('Title') + ' ' + $(this).attr('First') + ' ' + $(this).attr('Middle').charAt(0) + '. ' + $(this).attr('Last') + '</label>';
		charTitles.push($(this).attr('Title'));
		fNames.push($(this).attr('First'));
		mNames.push($(this).attr('Middle'));
		lNames.push($(this).attr('Last'));
		allBios.push($(this).find('Bio').text());
	});
	//listContent += '</ul>';
	listContent += '</div>';
	$('#ChoosePlayer').html(listContent);
	//$('#PlayerPicker').selectable();
	$('#PlayerPicker').buttonset();
}

function OnError(data) {
	$("#ChoosePlayer").html("Error! Please try again.");
}