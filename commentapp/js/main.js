function clickMe() {
	var username = document.getElementById('username').value
	var	comment = document.getElementById('comment').value
	
	//Adding TextNode to following variables
	var	textUser = document.createTextNode('Username: ' + username)
	var	textComment = document.createTextNode('Message: ' + comment)
	//Creating 'li' element
	var newLi = document.createElement('li')
	newLi.className = "list-group-item"
	//Creating 'h2' element
	var newUserName = document.createElement('h2')
	newUserName.appendChild(textUser)
	//Creating 'p' element
	var message = document.createElement('p')
	message.appendChild(textComment)

	//creating button to hide 'li' tags
	var button = document.createElement('button')
	//button type bootstrap "button"
	button.type = "button"

	button.className = "btn btn-primary btn-md"
	button.setAttribute('id', 'toggleButton')
	buttonText = document.createTextNode('Show/Hide')
	button.appendChild(buttonText)

	//appending variable 'button' to newLi
	newLi.appendChild(button)

	//appending newUsername + message to newLi
	newLi.appendChild(newUserName)
	newLi.appendChild(message)

	document.getElementById('list').appendChild(newLi)
	document.getElementById('list').appendChild(button)


	$(document).ready(function(){
		$('#toggleButton').click(function(){
			$('.list-group-item').toggle()
		})
	})
	

}





