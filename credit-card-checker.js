// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// 3.
const validateCred = creditCardNum => {
  let checkDigit = creditCardNum.pop();
  let reversedCardNum = creditCardNum.reverse();
  let creditCardNumLength = reversedCardNum.length - 1;
  let sumOfDigits = 0;
  for (let currentIndex = 0; currentIndex <= creditCardNumLength; currentIndex++) {
    if (currentIndex % 2 === 0) {
      let doubledNumber = reversedCardNum[currentIndex] * 2;
      if (doubledNumber > 9) {
        doubledNumber = doubledNumber - 9;
      }
    sumOfDigits = sumOfDigits + doubledNumber;
    } else {
      sumOfDigits = sumOfDigits + (reversedCardNum[currentIndex]);
    };
  }
  sumOfDigits = sumOfDigits + checkDigit;
  if (sumOfDigits % 10 === 0) {
  creditCardNum.reverse();
  creditCardNum.push(checkDigit);
  return true;
  } else {
  creditCardNum.reverse();
  creditCardNum.push(checkDigit);
  return false;
  }
};
// 4.
const findInvalidCards = cardNumbers => {
  invalidCards = [];
  for (let indexPos = 0; indexPos < cardNumbers.length; indexPos++) {
    let cardNum = cardNumbers[indexPos];
    if (validateCred(cardNum) === false) {
      invalidCards.push(cardNumbers[indexPos]);
    }
  }
  return invalidCards;
};
// 5.
const idInvalidCardCompanies = invalidNumbers => {
  let companies = [];
  let invalidCount = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }
  for (let ccNum = 0; ccNum <= batch.length -1; ccNum++) {
    invalidNumbers[ccNum][0];
    invalidCount[invalidNumbers[ccNum][0]] = invalidCount[invalidNumbers[ccNum][0]] + 1;
  }
  if (invalidCount[3] > 0) {
    companies.push('Amex');
  }
  if (invalidCount[4] > 0) {
    companies.push('Visa');
  }
  if (invalidCount[5] > 0) {
    companies.push('Mastercard');
  }
  if (invalidCount[6] > 0) {
    companies.push('Discover');
  }
for (let key = 0; key <= 9; key++) {
  if (key != 3 && key != 4 && key != 5 && key != 6) {
    if (invalidCount[key] > 0) {
      companies.push('Company not found.');
      break;
    }
  }
}
return companies;
};
idInvalidCardCompanies(batch);
