// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    constructor(name, breed) {
        this.name = name,
            this.breed = breed,
            this.species = 'cat',
            this.tiredness = 0,
            this.hunger = 0,
            this.loneliness = 0,
            this.happiness = 0
    }
    sleep = (hours) => {
        this.tiredness -= (hours * 5);
        this.happiness += (hours);
    }

    eat = (kibbles) => {
        this.hunger -= (kibbles / 5);
        this.happiness += (kibbles * 2)
    }

    play = (min) => {
        this.loneliness -= (min * 3);
        this.happiness += (min * 3);
    }

    wait = (min) => {
        this.hunger += (min * 2);
        this.tiredness += (min * 10);
        this.loneliness += (min / 2);
        this.happiness -= (min * 4);
    }
}

let boots = new Cat('boots', 'siamese');
boots.wait(20);

console.log(boots);
