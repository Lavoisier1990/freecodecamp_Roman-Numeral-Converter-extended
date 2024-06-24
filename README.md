# freecodecamp_Roman-Numeral-Converter-extended

This is an adaptation of a short project with the FreeCodeCamp JavaScript Algorithms and Data Structures (Beta) track. It is a small project that converts Arabic numerals (conventional numerals) into Roman Numerals. The actual project required conversion until 3 999 and but I will however attempt to allow conversion to 3 999 999. The notation for large numbers in the Roman numeral system diverges. The route I have chosen incoporates the "vinculum" or overline to designate a given symbol multiplied by 1000, e.g  V̅ would mean 5000 and X̅ for 10 000 and so on. After 3 999 999 the pattern continues with two vincula, see https://commons.wikimedia.org/wiki/File:Roman_numerals!.png, and https://commons.wikimedia.org/wiki/Category:Roman_numeral_signs_with_vinculum with an additional vinculum to denote every order of a thousand. I opted to give it some attractive styling to make it fun. This was the initial submission, however, I intend on "cleaning" up the code, and adding functionality to it as I learn more.

**User Stories:**
1. You should have an input element with an id of "number".
2. You should have a button element with an id of "convert-btn".
3. You should have a div element with an id of output.
4. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number".
5. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
6. When the #number element contains a non-integer and the #convert-btn element is clicked, the #output element should contain the text "Please enter a valid integer".
6. When the #number element contains the number 4 000 000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3 999 999".
7. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
8. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
9. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
10. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
11. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
12. When the #number element contains the number 4000 and the #convert-btn element is clicked, the #output element should contain the text "I̅V̅".
13.When the #number element contains the number 51 000 and the #convert-btn element is clicked, the #output element should contain the text "L̅I̅".
14.When the #number element contains the number 99 999 and the #convert-btn element is clicked, the #output element should contain the text "X̅C̅I̅X̅CMXCIX".
15.When the #number element contains the number 999 999 and the #convert-btn element is clicked, the #output element should contain the text "C̅M̅X̅C̅I̅X̅CMXCIX".
16. When the #number element contains the number 3 999 999 and the #convert-btn element is clicked, the #output element should contain the text "M̅M̅M̅C̅M̅X̅C̅I̅X̅CMXCIX".

 M̅
 D̅
 C̅
 L̅
 X̅
 V̅
 I̅

**Image credits**
Photo by Tom D'Arby from Pexels: https://www.pexels.com/photo/ancient-roman-architecture-6220444/
Image by <a href="https://pixabay.com/users/darkmoon_art-1664300/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561710">Dorothe</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561710">Pixabay</a>
