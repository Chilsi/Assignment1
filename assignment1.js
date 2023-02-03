
const Order = require("./order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    MENU: Symbol("menu"),
    MENU1: Symbol("menu1"),
    MENU2: Symbol("Menu2"), 
    TYPE:   Symbol("type"),
    CURRY:   Symbol("curries"),
    TYPE1:   Symbol("type1"),
    CURRY1:   Symbol("curries1"),
    DRINKS:  Symbol("drinks"),
    SWEETS:  Symbol("sweets"),
    PAYMENT: Symbol("payment"),
});

module.exports = class FoodOrder extends Order{
    constructor(){
        super();
        this.stateCur = OrderState.WELCOMING;
        this.sMenu = "";
        this.sType = "";
        this.sType1 = "";
        this.sCurries = "";
        this.sCurries1 = "";
        this.sDrinks = "";
        this.sSweets = "";
        this.sItem = "Dosa";
        this.sItem1 = "Naan";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur)
        {
            case OrderState.WELCOMING:
                    aReturn.push("Welcome to Mix-Match Foodie");
                    aReturn.push("********* Menu *********");
                    aReturn.push("Menu1: Dosa -Plain or Masala Price:$15");
                    aReturn.push("Menu2: Naan -Plain or Butter Naan Price:$15");
                    aReturn.push("All curries Price:$5");
                    aReturn.push("Sweets:Rasgulla,Kheer  Price:$5");
                    aReturn.push("Drinks:Coffee,Pepsi  Price:$5");
                    aReturn.push("Please choose menu- Menu1 or Menu2");  
                    this.stateCur = OrderState.MENU;           
                    break;

            case OrderState.MENU:    
                    this.sMenu = sInput; 
                    if(this.sMenu.toLowerCase() == "menu1")
                    {
                        aReturn.push("What you like: Dosa -Plain or Masala?");
                        this.stateCur = OrderState.MENU1;    
                    }
                    if(this.sMenu.toLowerCase() == "menu2")
                    {
                        this.stateCur = OrderState.MENU2;
                        aReturn.push("What you like: Naan -Plain or Butter?");      
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
                        aReturn.push("What you like- Sambar or Chutney ?");
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
                        aReturn.push("Would you like drinks(Coffee or Pepsi) with that?");
                        this.stateCur = OrderState.DRINKS;
                    }
                    break;

            case OrderState.DRINKS: 
                    this.isDone(true);
                    this.sDrinks = sInput;   
                    if(this.sDrinks.toLowerCase() == "no")
                    {
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                        let dt = new Date(); 
                        dt.setMinutes(dt.getMinutes() + 20);
                        aReturn.push(`Please pick it up at ${dt.toTimeString()}`);
                    }
                    else if(this.sDrinks.toLowerCase() == "coffee")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                        let dt = new Date(); 
                        dt.setMinutes(dt.getMinutes() + 20);
                        aReturn.push(`Please pick it up at ${dt.toTimeString()}`);    
                    }
                    else if(this.sDrinks.toLowerCase() == "pepsi")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                        let dt = new Date(); 
                        dt.setMinutes(dt.getMinutes() + 20);
                        aReturn.push(`Please pick it up at ${dt.toTimeString()}`);    
                    }
                    else
                        aReturn.push("Please enter valid input- Coffee or Pepsi"); 
                    break; 

            case OrderState.MENU2:
                    this.sType1 = sInput;            
                    if(this.sType1.toLowerCase() != "plain" && this.sType1.toLowerCase() != "butter")
                        aReturn.push("Please enter valid input- Plain or Butter");  
                    else
                    { 
                        this.rate += 15;
                        aReturn.push("What you like- Daal or Chicken?");
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
                        aReturn.push("Would you like sweets(Rasgulla, Kheer) with that?");
                        this.stateCur = OrderState.SWEETS;
                    }
                    break;

                case OrderState.SWEETS: 
                    this.isDone(true);
                    this.sSweets = sInput;   
                    if(sInput.toLowerCase() == "no")
                    {
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                        aReturn.push(`Sweets: ${this.sSweets}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                        let dt = new Date(); 
                        dt.setMinutes(dt.getMinutes() + 20);
                        aReturn.push(`Please pick it up at ${dt.toTimeString()}`);
                    }
                    else if(sInput.toLowerCase() == "rasgulla")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                        aReturn.push(`Sweets: ${this.sSweets}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                        let dt = new Date(); 
                        dt.setMinutes(dt.getMinutes() + 20);
                        aReturn.push(`Please pick it up at ${dt.toTimeString()}`);   
                    }
                    else if(sInput.toLowerCase() == "kheer")
                    {
                        this.rate += 5;
                        aReturn.push("Thank-you for your order of");
                        aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                        aReturn.push(`Sweets: ${this.sSweets}`);
                        aReturn.push(`Total price: $ ${this.rate}`);
                        let dt = new Date(); 
                        dt.setMinutes(dt.getMinutes() + 20);
                        aReturn.push(`Please pick it up at ${dt.toTimeString()}`);    
                    }                    
                    break;    
        }
        return aReturn;
    }
}