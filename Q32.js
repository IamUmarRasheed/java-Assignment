let current_user = ["umar", "abubakar", "asad", "fazal"];
let new_user = ["sajawal", "Umar", "haider", "Asad"];
for (let i = 0; i < current_user.length; i++) {
  for (let j = 0; j < new_user.length; j++) {
    if (
      current_user[i] == new_user[j] ||
      current_user[i].toUpperCase == new_user[j.toUpperCase] ||
      current_user[i].toLowerCase == new_user[j].toLowerCase
    ) {
      console.log("person will enter a new user name");
      break;
    } else {
      console.log("the user name available");
    }
  }
}
