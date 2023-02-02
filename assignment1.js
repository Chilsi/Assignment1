
const Order = require("./order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    TYPE:   Symbol("type"),
    CURRY:   Symbol("curries"),
    TOPPINGS:   Symbol("toppings"),
    DRINKS:  Symbol("drinks")
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
        this.sDrinks1 = "";
        this.sItem = "dosa";
        this.sItem1 = "naan";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur)
        {
            case OrderState.WELCOMING:
                    aReturn.push("Welcome to Food Cort.");
                    aReturn.push("********* Menu *********");
                    aReturn.push("Menu1: Plain Dosa or Masala Dosa Price:$15");
                    aReturn.push("Menu2: Naan Price:$15");
                    aReturn.push("All curries Price:$15")
                    aReturn.push("Drinks:Tea,Pepsi,7up,Cocacola Price:$5");
                    aReturn.push("Please choose menu- Menu1 or Menu2?");  
                    this.stateCur = OrderState.MENU;           
                break;
            case OrderState.MENU:    
                    this.sMenu = sInput; 
                    if(this.sMenu.toLowerCase() == "menu1")
                    {
                        aReturn.push("What you like- Plain Dosa or Masala Dosa?");
                        this.stateCur = OrderState.MENU1;    
                    }
                    if(this.sMenu.toLowerCase() == "menu2")
                    {
                        this.stateCur = OrderState.MENU2;
                        aReturn.push("What you like- Plain Naan or Butter Naan?");      
                    }
                    /*if(this.sMenu.toLowerCase() != "menu1" && this.sMenu.toLowerCase() != "menu2")
                    {
                        aReturn.push("Please enter valid input- Menu1 or Menu2");   
                    } */     
                break;
            case OrderState.MENU1:
                    this.sType = sInput;            
                    if(this.sType.toLowerCase() != "plain" && this.sType.toLowerCase() != "masala")
                    {
                        aReturn.push("Invalid Input");
                        aReturn.push("Please enter valid input- Plain or Masala");  
                    } 
                    else
                    { 
                        aReturn.push("What you like- Sambar or Chutney ?");
                        this.stateCur = OrderState.CURRY;
                    }
                break;
            case OrderState.CURRY:
                    this.sCurries = sInput;
                    if(this.sCurries.toLowerCase() != "sambar" && this.sCurries.toLowerCase() != "chutney")
                    {
                        aReturn.push("Invalid Input");
                        aReturn.push("Please enter valid input- Sambar or Chutney");  
                    } 
                    else
                    {
                        aReturn.push("Would you like drinks with that?");
                        this.stateCur = OrderState.DRINKS;
                    }
                break;
            case OrderState.DRINKS:
                    this.isDone(true);
                    if(sInput.toLowerCase() != "no")
                    {
                        this.sDrinks = sInput;
                    }
                    aReturn.push("Thank-you for your order of");
                    aReturn.push(`${this.sType} ${this.sItem} with ${this.sCurries} `);
                    if(this.sDrinks)
                    {
                        aReturn.push(`Drinks: ${this.sDrinks}`);
                    }
                    aReturn.push(`Total Price: $ ${total}`);
                    let d = new Date(); 
                    d.setMinutes(d.getMinutes() + 20);
                    aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
                case OrderState.MENU2:
                    this.sType1 = sInput;            
                    if(this.sType1.toLowerCase() != "plain" && this.sType1.toLowerCase() != "butter")
                    {
                        aReturn.push("Invalid Input");
                        aReturn.push("Please enter valid input- Plain or Butter");  
                    } 
                    else
                    { 
                        aReturn.push("What you like- Veg or Chicken ?");
                        this.stateCur = OrderState.CURRY1;
                    }
                    break;
                case OrderState.CURRY1:
                    this.sCurries1 = sInput;
                    if(this.sCurries1.toLowerCase() != "veg" && this.sCurries1.toLowerCase() != "chicken")
                    {
                        aReturn.push("Invalid Input");
                        aReturn.push("Please enter valid input- Veg or Chicken");  
                    } 
                    else
                    {
                        aReturn.push("Would you like drinks with that?");
                        this.stateCur = OrderState.DRINKS1;
                    }
                    break;
                case OrderState.DRINKS1:
                    this.isDone(true);
                    if(sInput.toLowerCase() != "no")
                    {
                        this.sDrinks1 = sInput;
                    
                    }
                    aReturn.push("Thank-you for your order of");
                    aReturn.push(`${this.sType1} ${this.sItem1} with ${this.sCurries1} `);
                    if(this.sDrinks1)
                    {
                        aReturn.push(`Drinks: ${this.sDrinks1}`);
                    }
                    //aReturn.push(`Total Price: $ ${total}`);
                    let dt = new Date(); 
                    dt.setMinutes(dt.getMinutes() + 20);
                    aReturn.push(`Please pick it up at ${dt.toTimeString()}`);
                    break; 
        }
        return aReturn;
    }
}