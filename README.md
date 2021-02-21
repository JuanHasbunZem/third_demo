# Mr. Roboger's Neighborhood (Third Demo)

#### A web applipication page that prompts the user to enter a number, which is then taken by the app and looks through it, replacing any instances of 1, 2, or 3, with a different phrase before outputting a count from 0 to the user inputted number.

#### Created by: Juan Hasbun

### Last updated: 2/20/2021

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

Additionally, the artwork used was taken from koyote974 of deviantart, at https://www.deviantart.com/koyote974/art/AGDQ2014-Chrono-Trigger-Robo-426389384

## Setup/Installation Requirements

Using your Github account, go to your Gitbash terminal and use the: $git clone https://github.com/JuanHasZem/third_demo command to download a copy of the files used for this project. Then open the file labeled index.html to open the website and test the page out.

Alternatively, follow this link: [Third Demo](https://github.com/JuanHasbunZem/third_demo)


## Known Bugs

* <s>isThree loop only works up to a user Input of 40. Any numbers beyond do not get sorted (i.e - 42 doesnt get replaced with Boop!). 
  * Possible solution: May need to use a .replace regex, or maybe trying toying with the .split command to split each element and test from there.</s>

  As of 2/20/2021, the known bug was fixed with changes made to the makeArray() function that combines the previous functions makeArray and isThree.

## License

Copyright 2021 Juan Hasbun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

Email at: <zemenareq@hotmail.com>

## Plan

Initial "blueprint" before creating tests (changes may/will occur):

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

Describe: makeArray()
  Test: "Will create an Array with length = to user input."
  Expect(makeArray(5) === [0,1,2,3,4,5]);

*Following Test was originally part of the now commented out isThree function, but incorporated into makeArray().*

  Test: "It will return true if user input is a 3."
  Expect(makeArray(3).toEqual(true);

  Test: "If true, will replace element with "Won't you be my neighbor?""
  Expect: makeArray(3).toEqual("0, Beep!, Boop!, Won't you be my neighbor?");

  Test: "If false, move on to next check"
  *Not sure how to write the Expectation for this.

    Test: "It will return true if user input is a 2."
    Expect(makeArray(2).toEqual(true));

    Test: "Will replace instances of 2 with " Boop!"
    makeArray(2).toEqual("0, Beep!, Boop!");

    Test: "If false, move on to next check"

      Test: "It will return true if user input is a 1"
      Expect(makeArray(1).toEqual(true));

      Test: "It will replace instaces of 1 with a " Beep!"
      makeArray(1).toEqual("0, Beep!");

      Test: "If false, keeps current number the same"
      makeArray(4).toEqual("0, Beep!, Boop!, Won't you be my neighbor?, 4");
```