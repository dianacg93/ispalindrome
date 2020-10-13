function isPalindrome(){
    let word = document.getElementById("userWord").value;
    document.getElementById("userWord").value="";
    let result = document.getElementById("result");
    if(word.split("").reverse().join("") === word){
        result.textContent = `${word} is a Palindrome!`
    }else {
        result.textContent = `${word} is not a Palindrome!`
    }
}