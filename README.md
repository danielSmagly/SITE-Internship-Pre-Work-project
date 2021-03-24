# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **DANIEL SMAGLY**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/bush-fragrant-failing)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Level counter shows player the current level being played each turn

## Video Walkthrough

Gameplay with sucessful completion of each turn
![ProjectRecording1](https://user-images.githubusercontent.com/77174573/112263106-00838100-8c2c-11eb-89c4-2bdb770bb2a6.gif)
Gameplay with incorrect option selected twice ![ProjectRecording2](https://user-images.githubusercontent.com/77174573/112263194-23ae3080-8c2c-11eb-93c4-f3ee77aead89.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- W3schools.com
- https://javascript.info/settimeout-setinterval
- https://www.tutorialsteacher.com/javascript/javascript-variable
- https://www.google.com/search?q=color+picker
- https://fonts.google.com
- Stackoverflow.com
- https://developer.mozilla.org/en-US/docs/Web/JavaScript






2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The most challenging part of this project was understanding how to correctly format and implement the setInterval and clearInterval functions into my project. 

In order to understand how setInterval worked, and would be implemented in my program, I researched a few examples of the implementation of setInterval, as well as reading the documentation from Mozillas developer site. The first few iterations of my gameTimer() function ended the game at random points, and in order to call the function at the right time I used the debugger in Mozilla to find each moment my function was being called. I realized that my timer was being called after each button press, and reset after each consecutive button press. I understood that the most efficient way for me to debug my code was to follow its progression each time, and noting the exact point at which the code began to fail or give incorrect output. My solution was to start a 5 minute timer when the player started the game, and clear that timer once the player stoped the game by calling the clearInterval method. 

This project helped me gain valuable skills in debugging and tracing back my code, Ive learned that setting checkpoints and following the progression of my code has made me a more productive and efficient developer. 






3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

This project has left me with a lot of questions about backend web-development, having only had some experience with html and css, the javascript portion of this project helped challenge my existing programming skills. 

I want to know more about the general development timeline that goes into a website project consisting of both back-end and front-end features. 

Im also interested in learning more about frameworks like React and Bootstrap, Ive noticed these coming up a lot and see a lot of potential these frameworks in terms of saving time and adding new features easily to my project. I would like to know when its best to use them and when pure css/javascript is better off. 




4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I think with a few more hours I would continue adding more javascript features to add to the difficulty and enjoyment of the game. I think it would be useful to add an option to play back the pattern displayed by the computer, or give the user to set the speed of playback on their own. Implementing a database that would show the user who the best players are or best scores would also be good step towards making the game more functional. I would also like to add an accessibility toggle that would make the colors easier to see for those who are colorblind.

In addition to new features, I also think it would be beneficial to add more comments and documentation to my code, which would be necessary if this were to be a group project or a long term project that needs to be updated constantly. 
