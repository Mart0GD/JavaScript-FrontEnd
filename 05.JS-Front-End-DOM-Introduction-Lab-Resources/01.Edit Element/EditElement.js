function editElement(ref, match, replacer) {

    const text = ref.textContent;
    const regex = new RegExp(match, 'g')
    let changedText = text.replace(regex, replacer);
    ref.textContent = changedText;
    
}


