
const Order = require("./order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    BEGIN:   Symbol("begin"),
    MENU: Symbol("menu"),
    MENU1: Symbol("menu1"),
    MENU2: Symbol("menu2"), 
    TYPE:   Symbol("type"),
    CURRY:   Symbol("curries"),
    TYPE1:   Symbol("type1"),
    CURRY1:   Symbol("curries1"),
    DRINKS:  Symbol("drinks"),
    SWEETS:  Symbol("sweets"),
    PAYMENT: Symbol("payment")
});

module.exports = class FoodOrder extends Order{
    constructor(sNumber, sUrl){
        super(sNumber, sUrl);
        this.stateCur = OrderState.WELCOMING;
        this.rate = 0;
        this.contactName="";
        this.sMenu = "";
        this.sType = "";
        this.sType1 = "";
        this.sCurries = "";
        this.sCurries1 = "";
        this.sDrinks = "";
        this.sSweets = "";
        this.sItem = "";
        this.sItem1 = "";
    }
    handleInput(sInput){
        let aReturn = []; 
        switch(this.stateCur)
        {
            case OrderState.WELCOMING:
                    this.stateCur = OrderState.BEGIN;
                    aReturn.push("Welcome to Mix-Match Foodie");
                    aReturn.push("Please enter your name");
                    break;
          
            case OrderState.BEGIN:   
                    this.contactName = sInput; 
                    var regName = /^[a-zA-Z]+$/;
                    if(!regName.test(this.contactName))
                            aReturn.push("Please enter valid name: firstname");
                    else
                    {
                            aReturn.push("********* Menu *********");
                            aReturn.push("Menu1: Dosa -Plain or Masala Price:$15");
                            aReturn.push("Menu2: Naan -Plain or Butter Naan Price:$15");
                            aReturn.push("Curries: Sambar,Chutney,Daal,Chicken Price:$5");
                            aReturn.push("Sweets: Rasgulla,Kheer  Price:$5");
                            aReturn.push("Drinks: Coffee,Pepsi  Price:$5");
                            aReturn.push("********* End *********");
                            aReturn.push("Please choose menu- Menu1 or Menu2"); 
                            this.stateCur = OrderState.MENU;
                    }        
                    break;

            case OrderState.MENU:    
                    this.sMenu = sInput; 
                    if(this.sMenu.toLowerCase() == "menu1")
                    {
                        this.sItem = "Dosa";
                        aReturn.push("What you like: Dosa -Plain or Masala, Price:$15?");
                        this.stateCur = OrderState.MENU1;    
                    }
                    if(this.sMenu.toLowerCase() == "menu2")
                    {
                      this.sItem1 = "Naan";
                      this.stateCur = OrderState.MENU2;
                      aReturn.push("What you like: Naan -Plain or Butter, Price:$15?");      
                    }
                    if(this.sMenu.toLowerCase() != "menu1" && this.sMenu.toLowerCase() != "menu2")
                        aReturn.push("Please enter valid input- Menu1 or Menu2");       
                    break;

            case OrderState.MENU1:
                    this.sType = sInput;            
                    if(this.sType.toLowerCase() != "plain" && this.sType.toLowerCase() != "masala")
                        aReturn.push("Please enter valid input- Plain or Masala");  
                    else
                    { 
                        this.rate += 15;
                        aReturn.push("What you like- Sambar or Chutney, Price:$5 ?");
                        this.stateCur = OrderState.CURRY;
                    }
                    break;

            case OrderState.CURRY:
                    this.sCurries = sInput;
                    if(this.sCurries.toLowerCase() != "sambar" && this.sCurries.toLowerCase() != "chutney")
                        aReturn.push("Please enter valid input- Sambar or Chutney");  
                    else
                    {
                        this.rate += 5;
                        aReturn.push("Would you like drinks(Coffee or Pepsi) with that, Price:$5?");
                        this.stateCur = OrderState.DRINKS;
                    }
                    break;

            case OrderState.DRINKS:
                    this.stateCur = OrderState.PAYMENT; 
                    this.sDrinks = sInput;   
                    if(this.sDrinks.toLowerCase() == "no")
                    {
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                    }
                    else if(this.sDrinks.toLowerCase() == "coffee")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                        aReturn.push(`Total price: $ ${this.rate}`);  
                    }
                    else if(this.sDrinks.toLowerCase() == "pepsi")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                        aReturn.push(`Total price: $ ${this.rate}`);  
                    }
                    else
                    {
                        aReturn.push("Please enter valid input- Coffee or Pepsi"); 
                    }
                    aReturn.push(`Please pay for your order here`);
                    aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);  
                    break; 

            case OrderState.MENU2:
                    this.sType1 = sInput;            
                    if(this.sType1.toLowerCase() != "plain" && this.sType1.toLowerCase() != "butter")
                        aReturn.push("Please enter valid input- Plain or Butter");  
                    else
                    { 
                        this.rate += 15;
                        aReturn.push("What you like- Daal or Chicken, Price:$5?");
                        this.stateCur = OrderState.CURRY1;
                    }
                    break;
                    
                case OrderState.CURRY1:
                    this.sCurries1 = sInput;
                    if(this.sCurries1.toLowerCase() != "daal" && this.sCurries1.toLowerCase() != "chicken")
                        aReturn.push("Please enter valid input- Daal or Chicken");  
                    else
                    {
                        this.rate += 5;
                        aReturn.push("Would you like sweets(Rasgulla, Kheer) with that, Price:$5?");
                        this.stateCur = OrderState.SWEETS;
                    }
                    break;

                case OrderState.SWEETS: 
                    this.stateCur = OrderState.PAYMENT;
                    this.sSweets = sInput;   
                    if(sInput.toLowerCase() == "no")
                    {
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                        aReturn.push(`Sweets: ${this.sSweets}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                    }
                    else if(sInput.toLowerCase() == "rasgulla")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                        aReturn.push(`Sweets: ${this.sSweets}`);
                        aReturn.push(`Total price: $ ${this.rate}`);   
                    }
                    else if(sInput.toLowerCase() == "kheer")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                        aReturn.push(`Sweets: ${this.sSweets}`);
                        aReturn.push(`Total price: $ ${this.rate}`);   
                    }
                    else
                    {    
                      aReturn.push("Please enter valid input- Rasgulla or Kheer"); 
                    }
                    aReturn.push(`Please pay for your order here`);
                    aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);                    
                    break;

                case OrderState.PAYMENT:
                    console.log(sInput);
                    this.isDone(true);
                    let d = new Date();
                    d.setMinutes(d.getMinutes() + 20);
                    aReturn.push(`Your order will be delivered at ${d.toTimeString()} in the address`);
                    break;
               
        }
        return aReturn;
    }
    renderForm(sTitle = "-1", sAmount = "-1"){
        // your client id should be kept private
        if(sTitle != "-1"){
          this.sItem = sTitle;
        }
        if(sAmount != "-1"){
          this.nOrder = this.rate;
        }
        const sClientID = process.env.SB_CLIENT_ID || 'AWKtq5vDTT_fN23jvkp7HJRv-3eKuY7YoHokWY0k2mFuQfFAG8AHQSuOLj-WayJ4M1zkY0GgVe4sn-fw'
        return(`
        <!DOCTYPE html>
    
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Ensures optimal rendering on mobile devices. -->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!-- Optimal Internet Explorer compatibility -->
        </head>
        
        <body>
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script
            src="https://www.paypal.com/sdk/js?client-id=${sClientID}"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
          </script>
          Thank you ${this.contactName} for your ${this.sItem}${this.sItem1} order of $${this.rate}.
          <div id="paypal-button-container"></div>
    
          <script>
            paypal.Buttons({
                createOrder: function(data, actions) {
                  // This function sets up the details of the transaction, including the amount and line item details.
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: '${this.rate}'
                      }
                    }]
                  });
                },
                onApprove: function(data, actions) {
                  // This function captures the funds from the transaction.
                  return actions.order.capture().then(function(details) {
                    // This function shows a transaction success message to your buyer.
                    $.post(".", details, ()=>{
                      window.open("", "_self");
                      window.close(); 
                    });
                  });
                }
            
              }).render('#paypal-button-container');
            // This function displays Smart Payment Buttons on your web page.
          </script>
        
        </body>
            
        `);
    
      }
  }
