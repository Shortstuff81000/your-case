# your-case
__An HTML/JS choose your own adventure game based on Clue__

YourCase is a choose your own adventure game based on Clue, only with a lot more charactes and different locations. Each character has his/her own biography, mannerisms, motives, and weapons of choice. All of which will impact the story.

## GAME FLOW
1. Select your character from an array of over 20. I used checkboxes and turned them into a buttonlist using jQuery UI.
	- When you click on a character's name, a jQuery UI dialog pops up containing a biography.
	- Click the OK button in the dialog to select that character as your "avatar".
2. Choose a place (a setting) to host a small get-together. Places have not been determined yet.
	- Settings have three different areas for you to search for clues, not including a Main area.
	- Settings can have the Victim, a Suspect to interview, a clue, or a Weapon.
3. Choose 4 "friends" to invite to the party. Your avatar's name should be excluded from the list.
	- When you click on a character's name, a jQuery UI dialog pops up containing a biography.
	- Click the OK button in the dialog to select that character as one of your "guests".
4. You and your friends greet each other and start talking.
	- The conversation could potentially give a clue to why or how one of your guests was killed.
5. One friend gets killed. Whatever your bio, you used to be a detective, so you decide to investigate. Since it was a small party of five, you have only three "suspects".
6. __The Investigation Cycle__
	- _Check the Body_
		- Head/Hair
		- Arms/Hands
		- Torso
		- Legs/Feet
	- _Search for Evidence_
		- You will more than likely have to check each area multiple times, because the first or seond search will probably not reveal anything.
		- You will find three clues and ask each suspect three questions before you're through.
	- _Inspecting the Clues_
		- Fingerprints
		- DNA
		- Fiber or Other Material Identification
	- _Questioning the Suspects_
		- If you come across a suspect while checking a room for clues for the first time, you will be able to talk to them and ask a "precursory" question. (i.e. a "Just curious, but..." question. The question could probably be about the clue(s) you have so far, if any). You should ask each suspect one of these questions.
		- If you come across a suspect a second time, you will be able to talk to them and ask a more in-depth question. (i.e. a "Did you know..." question. The question will more than likely be about the clues you have so far). You should ask each suspect one of these questions.
		- The third question is the clincher; it will start eliminating suspets because you are asking them about all of the evidence you've found. When you have your suspect, the game will move on to the **Confrontation** stage.
	- **__Confronting the Culprit__**
		- You confront the Criminal with all of the evidence you've collected, both material and verbal.
		- The Criminal confesses and tells you his/her motives in detail.
		- **You've won the game!**

## GRAPHICS
If you've checked out my XML, you're probably wondering "What the heck are all of these emotion elements wrapped in image elements for?" and "Why are there so many of them?". That's a good question. The answer is because it goes toward my goal of telling a semi-realistic story. If a sentence is upsetting, an angry or sad image will be loaded; if a sentence is exciting or the person speaking is happy, an excited or happy image will be displayed. There are three different image categories in the game:

	- Character - Character images are laid over Setting images, and will appear at a random X position.
	- Setting - Images for the setting and its four areas.
	- Weapon/Clue - Clues and weapons will be laid over the center of the Setting image, but their position will be fixed to the exact center of the Setting image.

## GOALS
- To create a dynamic, data-driven game using text and graphics
- To tell an exciting, semi-realistic story
- To eventually turn it into a full-blown HTML5 game using Phaser or other framework
