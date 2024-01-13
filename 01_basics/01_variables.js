const accountId = 144553 // Can't be changed
let accountEmail = "yashveer@gmail.com" // Can be changed
var accountPassword = "12345" // Not used because var had no block and functional scope (var ignores code blocks)
accountCity = "Gwalior" // Global variable
let accountState // Undefined by default

// accountId = 2 // Not allowed : Assignment to constant variable

accountEmail = "yv@gmail.com"
accountPassword = "54321"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])