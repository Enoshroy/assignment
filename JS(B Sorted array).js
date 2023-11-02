function sortArray() {
    const inputArray = document.getElementById('inputArray').value;
    const resultElement = document.getElementById('result');
    const array = inputArray.split(',').map(Number); // Convert comma-separated input to an array

    if (array.length > 1) {
      array.sort(function(a, b) {
        return b - a;
      });

      resultElement.textContent = 'Sorted Array (Descending): ' + array.join(', ');
    } else {
      resultElement.textContent = 'Please enter a valid array (at least two elements).';
    }
  }

  function resetArray() {
    document.getElementById('inputArray').value = '';
    document.getElementById('result').textContent = '';
  }