//  a validator class User - with private methods (validateAge, validateUsername, validatePassword, validateEmail).
//  a public checker function (validateUser) - that would check each parameters of an object created from the class.

"use strict";

class User {
  // private properties
  #username;
  #password;
  #email;
  #age;

  constructor(username, password, email, age) {
    this.#username = username;
    this.#password = password;
    this.#email = email;
    this.#age = age;
  }

  //  age must be between 18 to 100 years old
  #validateAge() {
    if (this.#age >= 18 && this.#age <= 100)
      console.log(`Valid Age: ${this.#age}`);
    else console.log(`INVALID AGE`);
  }

  //	username must not be empty
  //	username must be exactly 8 characters long
  //	username may include (lowercase, uppercase, digit, special characters (underscore))
  #validateUsername() {
    // const usernameRegex = /[A-Za-z\d@$!%*?&]{8,}$/;
    // const usernameRegex = /[A-Za-z\d@$!%*?&_]/;
    const usernameRegex = /[A-Za-z\d_]/;

    // console.log(usernameRegex.test(this.username))
    // console.log(this.username.length)

    if (
      !(this.#username === "") &&
      this.#username.length === 8 &&
      usernameRegex.test(this.#username)
    )
      console.log(`Valid Username: ${this.#username}`);
    else console.log(`INVALID USERNAME!`);
  }

  //  password must be atleast 1 lowercase, 1 uppercase, 1 digit, 1 special character and atleast 8 to 10 characters long
  #validatePassword() {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,10}$/;

    if (passwordRegex.test(this.#password))
      console.log(`Valid Password: ${this.#password}`);
    else console.log(`INVALID PASSWORD!`);
  }

  //  this will be check only the anatomy of an email address.
  #validateEmail() {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(this.#email))
      console.log(`Valid Email: ${this.#email}`);
    else console.log(`INVALID EMAIL!`);
  }

  //  validator function
  //  order of checking: age, username, password, email
  validateUser() {
    this.#validateAge();
    this.#validateUsername();
    this.#validatePassword();
    this.#validateEmail();
  }
}

//  object
const acer = new User("Ace_reds", "Pa$$w0rdyst", "acer@gmail.com", -1);
acer.validateUser();
// console.log(acer.#username)
