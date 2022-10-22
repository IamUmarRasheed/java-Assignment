//more guest 
var dinner_invite=["jeri", "dure","haider",]
console.log("its invitation of dinner to "+dinner_invite[0])
console.log("its invitation of dinner to "+dinner_invite[1])
console.log("its invitation of dinner to "+dinner_invite[2])

console.log(dinner_invite[1]+ " can't make it ")
console.log(dinner_invite[2]+ " can't make it ")
dinner_invite.splice(1,2,"umar","zukhraf")
console.log("its pleasure to invite you at dinner "+dinner_invite[0])
console.log("its pleasure to invite you at dinner "+dinner_invite[1])
console.log("its pleasure to invite you at dinner "+dinner_invite[2])

console.log("im found a bigger dinner table ")
dinner_invite.unshift("Asad")
dinner_invite.splice(3,0,"talha")
dinner_invite.push("abubakar")
console.log("my pleasure to invite you at dinner "+dinner_invite[0])
console.log("my pleasure to invite you at dinner "+dinner_invite[1])
console.log("my pleasure to invite you at dinner "+dinner_invite[2])
console.log("mypleasure to invite you at dinner "+dinner_invite[3])
console.log("my pleasure to invite you at dinner "+dinner_invite[4])
console.log("mypleasure to invite you at dinner "+dinner_invite[5])

