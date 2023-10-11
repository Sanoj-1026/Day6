class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}


const person1 = new Person("John Doe", 30, "123 Main Street, City");
person1.introduce();
