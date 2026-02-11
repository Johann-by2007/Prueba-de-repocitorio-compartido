const user ={
    name: "johann",
    lastname: "bohorquez",
    age: 30,
    address:{
        country: "colombia",
        city: "Ibague",
        street: "calle 117 # 7-70"
    },
    friends: ["maria", "pedro",],
    ative: true,
    sendMall(){
        return "sending email...";
    },
}; 

console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMall());
