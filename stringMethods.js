let inputString = " Welcome to the Coding Bootcamp! Learn JavaScript today. ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding");
let startsWithWelcome = inputString.trim().startsWith("Welcome");
let endsWithToday = inputString.trim().endsWith("today.");

// 2. Transforming
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let trimmedString = inputString.trim();
let replacedString = inputString.replace("JavaScript", "coding");

// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0);
let extractedBootcamp = inputString.slice(
  inputString.indexOf("Bootcamp"),
  inputString.indexOf("Bootcamp") + "Bootcamp".length
);

// ✅ Log all results
console.log("hasJavaScript:", hasJavaScript);               // true
console.log("codingPosition:", codingPosition);             // 15
console.log("startsWithWelcome:", startsWithWelcome);       // true
console.log("endsWithToday:", endsWithToday);               // true
console.log("lowercaseString:", lowercaseString);
console.log("uppercaseString:", uppercaseString);
console.log("trimmedString:", trimmedString);
console.log("replacedString:", replacedString);
console.log("wordsArray:", wordsArray);
console.log("firstCharacter:", firstCharacter);             // 'W'
console.log("extractedBootcamp:", extractedBootcamp);       // 'Bootcamp'
