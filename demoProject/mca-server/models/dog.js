// const dogData = [{ name: 'Masha', age: 9 }, { name: 'Clifford', age: 14 }]
const db = require('../initdb')

class Dog {
  constructor(data) {
    this.id = data._id
    this.name = data.name;
    this.age = data.age;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {

        const results = await db.query("SELECT * FROM dogs")
        const dogs = results.rows.map(dog => new Dog(dog))

        if (!dogs.length) { throw new Error('No doggos here!') }
        resolve(dogs);
      } catch (err) {
        reject(`Error retrieving dogs: ${err.message}`)
      }
    })
  }
}

module.exports = Dog;
