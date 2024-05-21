var firstName = prompt("Enter your First Name")
var lastName = prompt("Enter your Last Name")
var fullName = alert(" Hello Your Full Name is " + firstName +" "+lastName ) 




document.write("<br> <br> <br>")


var favMobile = prompt("Enter Your Favourite Mobile Name")

for (var i = 0 ; i <= favMobile.length; i++) {
    alert(`My Favourite Mobile is ${favMobile} & Length of String : ${favMobile.length}`)
    break
}

document.write("<br> <br> <br>")


var pakistan = ('Pakistani');

var index = pakistan.indexOf("n")



for (var i = 0 ; i <= pakistan.length; i++) {
    if (pakistan[i] == "n") {
        document.write(`String : ${pakistan} <br> index of ${pakistan[i]} is: ${index}`)
    }
}



document.write("<br> <br> <br>")

var hello = ("Hello World")

var index1 = hello.lastIndexOf("l") 

for (var i = 0 ; i <= hello.length ; i++){

    if (hello[i] == "l"){
        document.write(`String : ${hello} <br> last index of ${hello[i]} is: ${index1}`)
        break
    }


}


document.write("<br> <br> <br>")

var strpk = "pakistani" 

var charat = strpk.charAt(3)


for (var i = 0 ; i  <= strpk.length; i++ ){
    document.write(`String : ${strpk} <br> Character at index 3 is ${charat} `)
    break
}

document.write("<br> <br> <br>")




var word = "Hyderabad";


var replacedWord = word.replace("Hyder", "Islam");

document.write(`City : ${word} <br> After Replacement : ${replacedWord}`);

document.write("<br> <br> <br>")

var message = "Ali and Sami are best friends. They play cricket and football together"


       var replaceMessage =  message.replace("and", "&")

       document.write(`${message} <br> ${replaceMessage}`)
   



       document.write("<br> <br> <br>")

       var strnum = "472"

       console.log(typeof strnum)

       var num = Number(strnum)
       console.log(typeof num)


       document.write("<br> <br> <br>")

            
       
       var userinput = prompt("enter a text for convert to UpperCase")


       var upCase = userinput.toUpperCase();

       document.write(`Userinput : ${userinput} <br> Uppercaser : ${upCase}`)   


       var decNum = 35.26

       var strnumint = decNum.toString().replace(".","")
       
       document.write(`Number : ${decNum} <br> Result : ${strnumint}`)    


var userName = prompt("Enter a userName")

if (userName.includes('@') || userName.includes('.') || userName.includes('!') || userName.includes(',')){
          alert('Correct UserName')
} else {
    alert ('enter a valid username For character codes of [@ . , !')
}








var university = "University of Karachi";

var universityArray = university.split(" ");



for (var i = 0; i <= universityArray.length; i++){
    var worrd = universityArray[i] 
    for (j = 0 ; j <= worrd.length; j++){
        document.write(worrd[j] + "<br>")
    }

}

var userLast = prompt ("Enter Your Name for Last Character") 

var lastcharac = userLast.charAt(userLast.length -1) 

alert (`THE LAST User Character is "${lastcharac}"`)
 

var sentence = "The quick brown fox jumps over the lazy dog".toLocaleLowerCase();


var wordToCount = "the".toLocaleLowerCase();

var count = 0

for (var i = 0; i <= sentence.length; i++){
        if (sentence[i] === wordToCount[0]){
            var match = true
            for (var j = 1; j <= wordToCount.length; j++){
                if (sentence[i + j] !== wordToCount[j])
                match = false
                 break
            }
        }


        if (match){
            count++;
        }
}

document.write(`Number of occurrences of ' ${wordToCount} ' in the string: ${count}`);

