# Mr. Roboger's Neighborhood (Third Demo)

#### A web applipication page that prompts the user to enter a number, which is then taken by the app and looks through it, replacing any instances of 1, 2, or 3, with a different phrase before outputting a count from 0 to the user inputted number.

#### Created by: Juan Hasbun

## Technologies Used

* Github
* Gitbash
* Virtual Studio Code
* HTML
* Markdown
* Jquery
* Javascript
* Bootstrap
* CSS

## Description

This program will first prompt the user to enter a number (outputting an error if not an actual number), stores it into an array, the array will then go through a function to add more elements into it starting from 0 counting up to the users number. It will then go through another function that looks for instances of 1, 2, or 3, and replaces that element of the array with a "Beep!", "Boop!", "Won't you be my neighbor?". And finally it will out put the entire new array for the user to see.

## Setup/Installation Requirements

Using your Github account, go to your Gitbash terminal and use the: $git clone https://github.com/JuanHasZem/third_demo command to download a copy of the files used for this project. Then open the file labeled index.html to open the website and test the page out.

Alternatively, follow this link: [Third Demo](https://github.com/JuanHasbunZem/third_demo)


## Known Bugs

* None at this time.

## License

Copyright 2021 Juan Hasbun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

Email at: <zemenareq@hotmail.com>

## Plan

Initial "blueprint" before creating tests:

* Prompt user for a number.
  * _I may need to add an initializer here so I can have an empty array each time the user inputs a number - to avoid refreshing the page._
  * Check if input is a number, else display error message.
* Create an array from 0 to X, using a for loop with X as counter, X being users number.
* Loop through array, checking for following conditions (in priority order):
  * If a 3, replace with "Won't you be my neighbor?"
  * If a 2, replace with "Boop!"
  * If a 1, replace with "Beep!"
* Outputs entire array.

## Tests
```
Describe: isNumber()
  Test: "It will return true if user input is a number."
  Expect(isNumber(5)).toEqual(true);

  Test: "It will return false if user input is not a number."
  Expect(isNumber('string').toEqual(false);

Describe: isThree()
  Test: "It will return true if user input is a 3."
  Expect(isThree(3).toEqual(true);

  Test: "If true, will replace element with "Won't you be my neighbor?""
  Expect(array.push(isThree(true)));

  Test: "It will return false if user input is not a 3."
  Expect(isThree(2).toEqual(false);
    Test: "If false, will call next loop."
    Expect(isThree(2).toEqual(false)).call(isTwo());

Describe: isTwo()
  Test: "It will return true if user input is a 2."
  Expect(isTwo(2).toEqual(true);

  Test: "If true, will replace element with "Boop!""
  Expect(array.push(isTwo(true)));

  Test: "It will return false if user input is not a 2."
  Expect(isTwo(3).toEqual(false);
    Test: "If false, will call next loop."
    Expect(isTwo(1).toEqual(false)).call(isOne());

Describe: isOne()
  Test: "It will return true if user input is a 1."
  Expect(isOne(1).toEqual(true);

  Test: "If true, will replace element with "Beep!""
  Expect(array.push(isOne(true)));

  Test: "It will return false if user input is not a 1."
  Expect(isOne(5).toEqual(false);
    Test: "If false, will proceed to next element"
    _# Not sure how to write this one out #_
```