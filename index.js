document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const msgInput = document.querySelector('#message-input');
    const encrypted = btoa(msgInput.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});