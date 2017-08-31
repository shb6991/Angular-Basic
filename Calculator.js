var module = angular.module("myCalculator",[]);

module.controller("calculatorControl", calculate);

function calculate(){
    this.result = 0;
    
    this.buttonAction = function(button){
        this.buttonClicked = button;
    }
    
    this.computeResult = function(){
        var num1=parseFloat(this.input1);
        var num2=parseFloat(this.input2);
        
            if(this.buttonClicked === '+'){
            this.result=num1 + num2;
        }
        
            else if(this.buttonClicked === '-'){
            this.result=num1 - num2;
        }

            else if(this.buttonClicked === '*'){
            this.result=num1 * num2;
        }

            else if(this.buttonClicked === '/'){
            this.result=num1 / num2;
        }

    }
}