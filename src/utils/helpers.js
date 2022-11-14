const checkStringHasSpecialChars = (string) => {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return format.test(string);
}

module.exports = Object.freeze({
  checkStringHasSpecialChars
});