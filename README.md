To run:

1. Sign up for paypal developer sandbox and get a client id
2. The first time run `npm install`
3. `SB_CLIENT_ID=<put_in_your_client_id> npm start` or Press ctrl-f5 while your focus is on index.js.
4. Type anything to start running, for example: Hi
5. Then user need to give name, instead of name user gave any digits an error message will display and ask us 
   to provide valid firstname.
6. Then the menu will display as follows
      ********* Menu *********
      Menu1: Dosa -Plain or Masala Price:$15
      Menu2: Naan -Plain or Butter Naan Price:$15
      Curries: Sambar, Chutney, Daal, Chicken Price:$5
      Sweets: Rasgulla, Kheer  Price:$5
      Drinks: Coffee, Pepsi  Price:$5
      ********* End *********
      Then the user needs to select menu1 or menu2. If any other response gets an error message and asks to re-enter the input.
7. If menu1 is user input, do the following
   a. A msg will display to choose either plain or masala dosa,Price:$15. The response should be either plain or masala.
       Otherwise, get an error msg and ask to re-enter the input.
   b. If the input is correct, it will ask to choose the curry, either sambar or chutney, Price:$5. 
       If we give anything else, an error message will ask us to provide valid input, either sambar or chutney.
   c. Last, will ask for drinks with Price:$5. If the input is "no," the order will close, and a payment receipt will generate.
      Otherwise need to give input to either coffee or pepsi, which will lead to a payment receipt.
      If the input is non of the above, then an error msg will get and ask for re-enter input of any of the above.
8. If menu2 is user input, do the following
   a. A msg will display to choose either plain or butter naan,Price:$15. The response should be either plain or butter.
      Otherwise, get an error msg and ask to re-enter the input.
   b. If the input is correct, it will ask to choose the curry, either daal or chicken,Price:$5. 
      If we give any input other than this, an error message will come and ask us to provide valid input, either daal or chicken.
   c. Last, will ask for sweets with Price:$5. If the input is "no," the order will close, and a payment receipt will generate.
      Otherwise need to give input to either rasgulla or kheer, which will lead to a payment receipt.
      If the input is non of the above, then an error msg will get and ask for re-enter input of any of the above.
9. Payment link will be available click that will lead to payment page where user can pay either through Paypal or 
   Debit/Credit cards.
10. User need to fill al, the requirement fields then click the pay button.
11. Once payment is over user will get delivery message.

