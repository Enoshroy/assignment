
function reverseWordsInSentence() {
    const inputSentence = document.getElementById('inputSentence').value;
    const reversedSentence = inputSentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    document.getElementById('output').innerText = "Reversed sentence: " + reversedSentence;
}

function resetFields() {
    document.getElementById('inputSentence').value = '';
    document.getElementById('output').innerText = '';
}


