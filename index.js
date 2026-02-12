const user ={
    name: "David",
    lastname: "Mesa",
    age: 20,
    address:{
        country: "Ecuador",
        city: "quito",
        street: "calle 117 # 7-70"
    },
    friends: ["Estefany", "jose",],
    ative: true,
    sendMall(){
        return "sending email...";
    },
}; 

console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMall());

