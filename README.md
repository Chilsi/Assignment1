To run:

1. The first time run `npm install`
2. Press ctrl-f5 while your focus is in index.js.
3. Type anything to start running, for example: Hi
4. Then menu will display as follows
      ********* Menu *********
      Menu1: Dosa -Plain or Masala Price:$15
      Menu2: Naan -Plain or Butter Naan Price:$15
      Curries: Sambar,Chutney,Daal,Chicken Price:$5
      Sweets:Rasgulla,Kheer  Price:$5
      Drinks:Coffee,Pepsi  Price:$5
      ********* End *********
      Then user needs to select menu1 or menu2, if any other response then get an error msg and ask to reenter the input.
5. If menu1 is user input, do the following
   a. A msg will display to choose either plain or masala dosa, respose should be either plain or masala.
      Otherwise get a error msg and ask to reenter the input.
   b. if the input is correct it will ask for choose the curry, either sambar or chutney. 
      If we give anything else, error msg will come and ask to give valid input either sambar or chutney.
   c. Last will ask for drinks, if the input is "no" the order will close and payment receipt will generate.
      Otherwise need to give input either coffee or pepsi and will lead to payment receipt.
      If the input is non of the above then error msg will get and ask for reenter input any one of the above.
6. If menu2 is user input, do the following
   a. A msg will display to choose either plain or masala naan, respose should be either plain or masala.
      Otherwise get a error msg and ask to reenter the input.
   b. if the input is correct it will ask for choose the curry, either daal or chicken. 
      If we give any other input rather than this, error msg will come and ask to give valid input either sambar or chutney.
   c. Last will ask for sweets, if the input is "no" the order will close and payment receipt will generate.
      Otherwise need to give input either rasgulla or kheer and will lead to payment receipt.
      If the input is non of the above then error msg will get and ask for reenter input any one of the above.

