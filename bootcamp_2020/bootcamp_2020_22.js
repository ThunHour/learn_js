function grade(number){
    if (number<=100 && number>89){
        console.log(`You are Grade A`);
    }
    else if(number>79 && number<90){
        console.log("You are grade B");
    }
    else if(number>69 && number<80){
        console.log("You are grade C");
    }
    else if (number>59 && number<70){
        console.log("You are grade D");
    }
    else if (number>=0 && number<60){
        console.log("You are grade F");
    }
}

grade(100)
grade(91)
grade(89)
grade(80) 
grade(75) 
grade(66) 
grade(59) 
grade(1) 