function firstChar(str) {
  // your code here
	 str = str.trim();

  // If the trimmed string is empty, return an empty string
  if (str.length === 0) return '';

  // Return the first character
  return str[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
