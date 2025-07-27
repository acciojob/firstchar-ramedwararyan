function firstChar(text) {
  // your code here
	 text = text.trim();

  // If the trimmed string is empty, return an empty string
  if (text.length === 0) return '';

  // Return the first character
  return text[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
