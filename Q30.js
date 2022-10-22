let username = ["asad", "umar", "haider", "admin","Ali"];
for ( let i = 0; i < username.length; i++) {
if ( username[i]== "admin")  {
    console.log("Hello Admin, would you lke to see a status report?");
  } 
  else {
    console.log("hello " + username[i] + " thank you for logging in again");
    
  }
}