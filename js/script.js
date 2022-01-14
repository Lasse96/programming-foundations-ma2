// 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (let i = 0; i < pets.length; i++) {
    if (pets[i].age >= 4) {
        console.log(pets[i].type);
    }
};

// 2

function value(a) {
    if (typeof a == "boolean") {
        console.log(a);
    }
    else console.log("Please pass a boolean value in");
};

value(true);

// 3

function farge(h) {
    const blue = document.querySelector(h)
    blue.style.color = "blue";
    blue.innerHTML = "Updated subheading";
}
