To run:

1. The first time run `npm install`
2. Press ctrl-f5 while your focus is on index.js.
3. Type anything to start running, for example: Hi
4. Then the menu will display as follows
      ********* Menu *********
      Menu1: Dosa -Plain or Masala Price:$15
      Menu2: Naan -Plain or Butter Naan Price:$15
      Curries: Sambar, Chutney, Daal, Chicken Price:$5
      Sweets: Rasgulla, Kheer  Price:$5
      Drinks: Coffee, Pepsi  Price:$5
      ********* End *********
      Then the user needs to select menu1 or menu2. If any other response gets an error message and asks to re-enter the input.
5. If menu1 is user input, do the following
   a. A msg will display to choose either plain or masala dosa. The response should be either plain or masala.
       Otherwise, get an error msg and ask to re-enter the input.
   b. If the input is correct, it will ask to choose the curry, either sambar or chutney. 
       If we give anything else, an error message will ask us to provide valid input, either sambar or chutney.
   c. Last, will ask for drinks. If the input is "no," the order will close, and a payment receipt will generate.
      Otherwise need to give input to either coffee or pepsi, which will lead to a payment receipt.
      If the input is non of the above, then an error msg will get and ask for re-enter input of any of the above.
6. If menu2 is user input, do the following
   a. A msg will display to choose either plain or masala naan. The response should be either plain or masala.
      Otherwise, get an error msg and ask to re-enter the input.
   b. If the input is correct, it will ask to choose the curry, either daal or chicken. 
      If we give any input other than this, an error message will come and ask us to provide valid input, either daal or chicken.
   c. Last, will ask for sweets. If the input is "no," the order will close, and a payment receipt will generate.
      Otherwise need to give input to either rasgulla or kheer, which will lead to a payment receipt.
      If the input is non of the above, then an error msg will get and ask for re-enter input of any of the above.


