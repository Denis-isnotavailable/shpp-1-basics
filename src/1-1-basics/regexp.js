const emailRegexp = /^[a-zA-Z0-9][a-zA-Z0-9-.+]{1,19}@[a-zA-Z0-9.!$%&'*+/=?^_-]{1,14}\.[a-zA-Z]{1,5}$/;
// const phoneRegexp = /^(\+38[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;
const phoneRegexp = /^\+?(\d\d)?(\s|\-)*((\(?[\d]{3}\)?)|(\(?\d{2}\-{1}\d{1}\)))(\s|\-)*\d((\s*\d\-?){6})$/;
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_]{8,}$/;

const Validator = {
    validateEmail(email) {
        return emailRegexp.test(email);
    },

    validatePhone(phone) {
        return phoneRegexp.test(phone) && phone.length <= 25;
    },

    validatePassword(password) {
        return passwordRegexp.test(password);
    }
}

// console.log(Validator.validateEmail('fi@secondpart.end') + ' = valid');
// console.log(Validator.validateEmail('first-part@.se=cond%p.art.end') + ' = valid');
// console.log(Validator.validateEmail('first.part@se=cond%part.r') + ' = valid');
// console.log();
// console.log(Validator.validateEmail('f@secondart.end,') + ' = invalid');
// console.log(Validator.validateEmail('first-part@.se=cond@part.end') + ' = invalid');
// console.log(Validator.validateEmail('-firstpart@.se=cond%.enddeded') + ' = invalid');
// console.log(Validator.validateEmail('firs_tpart@.se.en') + ' = invalid');
// console.log(Validator.validateEmail('firstpart@.se.enddeded') + ' = invalid');

console.log(Validator.validatePhone('+38 (099) 567 8901') + ' = valid');
console.log(Validator.validatePhone('+38 099 5 6 7 8 9  01') + ' = valid');
console.log(Validator.validatePhone('(09-9) 567-890-1') + ' = valid');
console.log(Validator.validatePhone('--  (099) 567 890-1') + ' = valid');
console.log();
console.log(Validator.validatePhone('+38 (099) 567 8901 0') + ' = invalid');
console.log(Validator.validatePhone('+38 099 a0000000') + ' = invalid');
console.log(Validator.validatePhone('+38 (0989) 567 8901') + ' = invalid');
console.log(Validator.validatePhone('+48 (0989) 567 8901') + ' = invalid');
console.log(Validator.validatePhone('+48 (0989) 567 252525252525252525252525225252525252525252525252525') + ' = invalid');

// console.log(Validator.validatePassword("C00l_Pass") + ' = valid');
// console.log(Validator.validatePassword('SupperPas1') + ' = valid');
// console.log();
// console.log(Validator.validatePassword('Cool_pass') + ' = invalid');
// console.log(Validator.validatePassword('C00l') + ' = invalid');