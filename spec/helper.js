var assert = {
  isTrue: function(textToCheck) {
    if (!textToCheck) {
      throw new Error("Adding note failed: " + textToCheck + " is not correct");
    }
    else {
      console.log('Passed');
    }
  }
};
