# Cryptosquare

#### _Encryption using square code, 04/22/2020_

#### By _**Tristen Everett**_

## Description

This program will take an input from the user and remove all non-english characters, then encrypt the remaining input by following the specs listed below. When the input has been encrypted it will then output the encrypted phrase back to the page under the input for the user to see.

|specs|example input|example output|
|-|-|-|
|Change all letters from the input into lowercase|Hello, hOw’re yoU?|hello, how’re you?|
|Convert input into single character array|hello, how’re you?|array[18]|
|Add only english letters from original array to a new array (removing punctuation, spaces, and numbers)|array[18]|arrayNew[13]|
|Find square root of array length rounded up|arrayNew[13]|4|
|create a number of arrays equal to the last output and store them in an array called arrayBox|4|[[], [], [], []]|
|Store individual letters one at a time in the arrayBox|[[], [], [], []] |[[h, o, r, u], [e, h, e], [l, o, y], [l, w, o]]|
|Read the letters from the arrayBox one array at a time.|[[h, o, r, u], [e, h, e], [l, o, y], [l, w, o]]|horueheloylwo|
|Put a space after every 5 letters|horueheloylwo|horue heloy lwo|
|Print the new phrase to the page|horue heloy lwo|-|

## Setup/Installation Requirements

1. Click the "Clone or download" button.
2. Select the "Download ZIP" option.
3. Select "save as" and save file to your desktop.
4. Go to desktop and right-click the downloaded file and tell it to extract all.
5. Open the newly extracted file and launch the index.html file with your prefered browser.

## Technologies Used

* HTML
* CSS + Bootstrap 3.3.7
* JavaScript + JQuery 3.4.1

### License

This software is licensed under the MIT license

Copyright (c) 2020 **_Tristen Everett_**