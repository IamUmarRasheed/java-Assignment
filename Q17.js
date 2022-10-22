//"task shrinking guest list 
// more guest
var dinner_invite = ["jeri", "dure", "haider"];
console.log("its invitation of dinner to " + dinner_invite[0]);
console.log("its invitation of dinner to " + dinner_invite[1]);
console.log("its invitation of dinner to " + dinner_invite[2]);
console.log("\n");
//tsak 15 changing guest list
console.log(dinner_invite[1] + " does not come ");
console.log(dinner_invite[2] + " does not come ");
dinner_invite.splice(1, 2, "umar", "zukhraf");
console.log("its pleasure to invite you at dinner " + dinner_invite[0]);
console.log("its pleasure to invite you at dinner " + dinner_invite[1]);
console.log("its pleasure to invite you at dinner " + dinner_invite[2]);
console.log("\n");
//task 16 more guest
console.log("im found a bigger dinner table ");
dinner_invite.unshift("Asad");
dinner_invite.splice(3, 0, "talha");
dinner_invite.push("abubakar");
console.log("my pleasure to invite you at dinner " + dinner_invite[0]);
console.log("my pleasure to invite you at dinner " + dinner_invite[1]);
console.log("my pleasure to invite you at dinner " + dinner_invite[2]);
console.log("my pleasure to invite you at dinner " + dinner_invite[3]);
console.log("my pleasure to invite you at dinner " + dinner_invite[4]);
console.log("my pleasure to invite you at dinner " + dinner_invite[5]);
console.log(dinner_invite);

// task 17
console.log("\n");
console.log("i can invite only two people at dinner ");
console.log(dinner_invite[5] + " sorry you can't invite to dinter ");
dinner_invite.pop();
console.log(dinner_invite);
console.log(dinner_invite[4] + " sorry you can't invite to dinter ");
dinner_invite.pop();
console.log(dinner_invite);
console.log(dinner_invite[3] + " sorry you can't invite to dinter ");
dinner_invite.pop();
console.log(dinner_invite);
console.log(dinner_invite[2] + " sorry you can't invite to dinter ");
dinner_invite.pop();
console.log(dinner_invite);
console.log("you are still invite you at dinner " + dinner_invite[0]);
console.log("you are still invite you at dinner " + dinner_invite[1]);
dinner_invite.shift();
dinner_invite.shift();

console.log(dinner_invite);
