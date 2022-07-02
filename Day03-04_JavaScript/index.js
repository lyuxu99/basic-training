// Q1 Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
function reverseNumber(input){
    input += ''; //transfer input to a String
	return input.split('').reverse().join(''); 
    //transfer input to an array split with '', use reverse function reverse the array, use join function to transfer array to a String
}
console.log('Question 1, Input: 32243, Output: ' + reverseNumber(32243));
// Q2 Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checkPalindrome(input){
    let convertInput = input.toLowerCase().replace(/\s*/g,'');
    let inputArr = input.toLowerCase().replace(/\s*/g,'').split('').reverse().join('');
    if(inputArr == convertInput){
        return console.log('Question 2: (Input: ' + convertInput+' Reversed: '+ inputArr + ') input string is a palindrome');
    }else{
        return console.log('Question 2: (Input: ' + convertInput+' Reversed: '+ inputArr + ') input string is NOT a palindrome');
    }
}
checkPalindrome('nurses run');

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
function checkCombinations(input) {
    let combinationsArr = [];
    for (let i=0;i<input.length;i++) {
        for (let j=i;j<input.length+1;j++) {
            combinationsArr.push(input.slice(i, j));
        }
    }
    let output = combinationsArr.filter((a) => a);;
    return output.join(',');
}
console.log('Question 3, Input: dog, Output: '+checkCombinations('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphaOrder(input){
    return input.split('').sort().join('');
}
console.log('Question 4, Input: webmaster, Output: '+alphaOrder('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function convertToUpper(input){
    let inputArr = input.split(' ');//input string to array
    let output = [];
    for(let i=0;i<inputArr.length;i++){
       output.push(inputArr[i].charAt(0).toUpperCase()+inputArr[i].slice(1));
       //set the 1st charater of input[i] to uppercase then add to the output array, remove the 1st character and add the remaining characters to output array
    }
    return output.join(' ');//array to string
}
console.log('Question 5, Input: the quick brown fox, Output: '+convertToUpper('the quick brown fox'));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function findLongest(input){
    let inputArr = input.split(' ');// string to arrat
    let count = 0;
    let output = null;
    for(let i=0;i<inputArr.length;i++){
        if(count<inputArr[i].length){
            count = inputArr[i].length;
        }
        if(inputArr[i].length == count){
            output = inputArr[i];
        }
    }
    return output;
}
console.log('Question 6, Input: Web Development Tutorial, Output: '+findLongest('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function findVowels(input){
    let count = 0;
    let vowel = 'aeiouAEIOU';
    for(let i=0;i<input.length;i++){
        if(vowel.indexOf(input[i]) !== -1){
            count++;
            //console.log(count);
        }
    }
    return count;
}
console.log('Question 7, Input: The quick brown fox, Output: '+findVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(input){
    if (input === 1) {
        return 'Input: '+input+' is NOT prime';
      }else if (input === 2) {
        return 'Input: '+input+' is prime';
      }else {
        for (let i = 2; i < input; i++) {
         if (input%i === 0) {
           return 'Input: '+input+' is NOT prime'
         }
        }
        return 'Input '+input+' is prime';
      }
}
console.log('Question 8, '+isPrime(23));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function checkType(input){
    return typeof(input)
}
console.log('Question 9: Input: 111(number) Output: '+checkType(111));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function checkRowCol(input){
    let rows = input.length;
    let columns = 0;
    for(let i=0;i<input.length;i++){
        columns = input[i].length;
    }
    console.log('Question 10, Input array: [[1,5,6,9,1],[4,22,1,4,5],[2,3,1,1,1]] Rows: '+rows+' Columns: '+columns);
}
a = [[1,5,6,9,1],[4,22,1,4,5],[2,3,1,1,1]];
console.log();
checkRowCol(a);
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function secondLowestGreatest(input) {
  input.sort();
  let arr = [input[0]];
  let result = [];
  for(let i=1; i<input.length; i++){
    if(input[i-1] !== input[i]){
      arr.push(input[i]);
    }
  }
  result.push(arr[1],arr[arr.length-2]);
  return result.join(',');
}

console.log('Question 11, Input array:[4,5,3,1,2], Output: '+secondLowestGreatest([4,5,3,1,2]));


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function ifPerfect(input){
    let temp = 0;
    for(let i=1;i<=input/2;i++){
         if(input%i === 0){
            temp += i;
        }
    }
    if(temp === input && temp !== 0){
        return 'Input: '+ input + ' is a perfect number';
    }else{
        return 'Input: '+ input + ' is NOT a perfect number';
    }   
}
console.log('Question 12, '+ifPerfect(6));

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factor(input){
    let factorsArr = [];
    for (let i=1; i<= Math.floor(Math.sqrt(input)); i+=1){
        if (input % i === 0){
        factorsArr.push(i);
        }
        if (input / i !== i){
        factorsArr.push(input / i);
        }
    }
    return factorsArr.join(',');
}
console.log('Question 13, Input: 12, Output: '+factor(12));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function amountTocoins(amount, coins){
    if (amount === 0) {
       return [];
     } else{
       if (amount>=coins[0]) {
          left = (amount-coins[0]);
          return [coins[0]].concat(amountTocoins(left, coins));
          } else {
           coins.shift();
           return amountTocoins(amount, coins);
          }
      }
}
console.log('Question 14, Output: '+amountTocoins(46, [25, 10, 5, 2,1]));
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function compute(b,n){
    let result = 1;
    for(let i=0;i<n;i++){
        result = b * result;
    }
    return result;
}
console.log('Question 15, b=2, n=6, Output: '+compute(2,6));
// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function findUnique(input){
    let result = '';
    for(let i=0;i<input.length;i++){
        if(result.indexOf(input.charAt(i))==-1){
            result += input[i];
        }
    }
    return result;
}
console.log('Question 16, Output: '+findUnique('thequickbrownfoxjumpsoverthelazydog'));
// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function getStrNum(str, n){
    let x = str.indexOf(n);
    let count = 0;
    while(x !== -1){
        count++;
        x = str.indexOf(n, x+1);
    }
    return count;
}
console.log('Question 17, Input: Good Morning, find the number of o, Output: '+getStrNum('Good Morning', 'o'));
// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(inputArr, num) {
    var mid = Math.floor(inputArr.length / 2);
    if (inputArr[mid] === num){
       return mid;
    } else if (inputArr.length === 1){
       return null;
    } else if (inputArr[mid] < num) {
       var arr = inputArr.slice(mid + 1);
       var res = binarySearch(arr, num);
       if (res === null){
          return null;
       } else {
          return mid + 1 + res;
       }
    }else {
       let arr1 = inputArr.slice(0, mid);
       return binarySearch(arr1, num);
    }
 }
console.log('Question 18, Input:[1,2,8,4,3,7], find 7, Output: '+binarySearch([1,2,8,4,3,7], 7));
// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerElements(input) {
    return function (value, index, array) {
      return value >= input;
    };
  }
  let result = [85, 66, 85, 50, 12, 40, 22, 100, 52, 10].filter(largerElements(30));
  console.log('Question 19, Output: '+result);
// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function idGenerator(input){
    let id = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0;i<input;i++){  
        id += charList.charAt(Math.floor(Math.random()*charList.length));
    }
    return id;
}
console.log('Question 20, Output: '+idGenerator(10));
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function subset(arra, arra_size) {
    var result_set = [],
      result;
    for (var x = 0; x < Math.pow(2, arra.length); x++) {
      result = [];
      i = arra.length - 1;
      do {
        if ((x & (1 << i)) !== 0) {
          result.push(arra[i]);
        }
      } while (i--);
  
      if (result.length >= arra_size) {
        result_set.push(result);
      }
    }
    return result_set;
  }
  console.log('Question 21, Output: '+subset([2,3,4],2));
  
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function count(Str, letter){
    let arr = Str.split('');
    //console.log(arr);
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == letter){
            count+=1;
        }
    }
    return 'Question 22, Input: ('+Str+', '+letter+') Output: '+count;
}
console.log(count('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function notRepeated(input){
    let strs = [];
    let num = 0;
    for (let i=0;i<input.length;i++) {
	strs.push(input.slice(i, i + 1));
    }
    for (let j =0;j<input.length;j++){
	    for (let k=0;k<input.length;k++) {
		if (j!=k) {
			if (strs[j]!=strs[k]) {
				num++;
			}
		}
	}
	if (num == input.length - 1) {
		return strs[j];
	}
	num = 0;
}
}
console.log('Question 23, Input: abacddbec, Output: '+notRepeated('abacddbec'));
// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    for (let j=0; j<arr.length-1;j++) {
      for (let i=0; i<arr.length-1-j;i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr.reverse();
  }

  console.log('Question 24, Output: '+bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
  
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestName(input) {
  return input.reduce(function(lname, country){
    if(lname.length > country.length){
        return lname;
    }else{
        return country;
    }
  }, 
"");
}
console.log('Quention 25: Output: '+longestName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function findLongestSubstring(input) {
    var chars = input.split("");
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
      curr_char = chars[i];
      if (!hash[chars[i]]) {
        str += curr_char;
        hash[chars[i]] = { index: i };
      } else {
        if (longest_string.length <= str.length) {
          longest_string = str;
        }
        var prev_dupeIndex = hash[curr_char].index;
        var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
        str = str_FromPrevDupe + curr_char;
        hash = {};
        for (var j = prev_dupeIndex + 1; j <= i; j++) {
          hash[input.charAt(j)] = { index: j };
        }
      }
    }
    return longest_string.length > str.length ? longest_string : str;
  }
  console.log('Question 26, Output: '+findLongestSubstring("google.com"));
  
// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function toPalindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
  }
  function longestPalindrome(str1) {
    var max_length = 0,
      maxp = "";
    for (var i = 0; i < str1.length; i++) {
      var subs = str1.substr(i, str1.length);
      for (var j = subs.length; j >= 0; j--) {
        var sub_subs_str = subs.substr(0, j);
        if (sub_subs_str.length <= 1) continue;
        if (toPalindrome(sub_subs_str)) {
          if (sub_subs_str.length > max_length) {
            max_length = sub_subs_str.length;
            maxp = sub_subs_str;
          }
        }
      }
    }
    return maxp;
  }
  console.log('Question 27, Input: mmadama, Output: '+ longestPalindrome("mmadama"));
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function hello(content){
    console.log('Question 28, '+content);
}
function say(func, content){
    func(content);
}
say(hello, "hello")

// 29. Write a JavaScript function to get the function name. 
function getFuncName(input){
    return input.name;
}
console.log('Question 29, Input function count(), Output: '+getFuncName(count));

//myReduce
Array.prototype.myReduce = function (f, value) {
    let prev;
    if (typeof value === 'undefined') {
        prev = this[0]
        this.slice(1).forEach((element, index, arr) => {
            prev = f(prev,element, index, arr)
        })
    } else {
        prev = value;
        this.forEach((element, index, arr) => {
            prev = f(prev, element, index, arr)
        })
    }
    return prev;
 }
 const myArr = [1, 2, 3, 4];
 const initialValue = 0;
 let sumWithInitial = myArr.myReduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );  
console.log('Question, myReduce function, Output: '+ sumWithInitial);