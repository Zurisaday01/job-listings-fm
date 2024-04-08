export const generateIdFromString = (inputString: string) => {
	// Convert each character to its Unicode value then split them and join
	const id = inputString
		.split('')
		.map((char: string) => char.charCodeAt(0))
		.join('');

	return id;
};
