function encodeAndDecodeMessages() {
    const encodeText = document.querySelector('div:nth-of-type(1) textarea');
    const decodeText = document.querySelector('div:nth-of-type(2) textarea');

    document.querySelector('div:nth-of-type(1) button').addEventListener('click', (e) => {
        let textToEncode = encodeText.value;

        let encodedText = '';
        for(let i = 0; i < textToEncode.length; i++){
            encodedText += String.fromCharCode(textToEncode.charCodeAt(i) + 1)
        }

        encodeText.value = '';
        decodeText.value = encodedText;
    });
    document.querySelector('div:nth-of-type(2) button').addEventListener('click', (e) => {
        let textToDeocde = decodeText.value;

        let decodedText = '';
        for(let i = 0; i < textToDeocde.length; i++){
            decodedText += String.fromCharCode(textToDeocde.charCodeAt(i) - 1)
        }

        decodeText.value = decodedText;
    });
}