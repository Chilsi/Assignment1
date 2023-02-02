
const Order = require("./order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    TYPE:   Symbol("type"),
    CURRY:   Symbol("curries"),
    TOPPINGS:   Symbol("toppings"),
    DRINKS:  Symbol("drinks")
});

module.exports = class DosaOrder extends Order{
    constructor(){
        super();
        this.stateCur = OrderState.WELCOMING;
        this.sType = "";
        this.sCurries = "";
        this.sToppings = "";
        this.sDrinks = "";
        this.sItem = "dosa";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.TYPE;
                aReturn.push("Menu1: Plain Dosa or Masala Dosa Price:$15");
                //aReturn.push("Menu2: Naan Price:$15");
                aReturn.push("All curries Price:$15")
                aReturn.push("Drinks:Tea,Pepsi Price:$5");
                aReturn.push("what do you like- Plain or Masala");
                //aReturn.push("Please choose menu- Menu1 or Menu2?");  
                break;
            case OrderState.TYPE:
                this.sType = sInput;            
                if(this.sType.toLowerCase() != "plain" && this.sType.toLowerCase() != "masala")
                    aReturn.push("Please enter valid input- Plain or Masala");  
                else
                {
                    this.rate += 10;
                    this.stateCur = OrderState.CURRY;
                    aReturn.push("What you like- Sambar or Chutney ?");
                }
                break;
            case OrderState.CURRY:
                this.sCurries = sInput;  
                if(this.sCurries.toLowerCase() != "sambar" && this.sCurries.toLowerCase() != "chutney")
                    aReturn.push("Please enter valid input- Sambar or Chutney");  
                else
                {
                    this.rate += 5;
                    this.stateCur = OrderState.DRINKS;
                    aReturn.push("Would you like drinks with that?");
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
                        this.rate += 5;
                    }
                    aReturn.push(`Total Price: $ ${this.rate}`);
                    let dt = new Date(); 
                    dt.setMinutes(dt.getMinutes() + 20);
                    aReturn.push(`Please pick it up at ${dt.toTimeString()}`);
                    break; 
        }
        return aReturn;
    }
}