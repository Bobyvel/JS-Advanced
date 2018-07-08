function focus() {
    let inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(box => { box.addEventListener('focus', (event) => {
        event.target.parentNode.className = 'focused';
    });

        box.addEventListener('blur', (event) => {
            event.target.parentNode.removeAttribute('class');
        });
    });
}