const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    butInstall.addEventListener('click', async () => {
    event.prompt();
});
});

// TODO: Implement a click event handler on the `butInstall` element


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = "Installed!"
  butInstall.setAttribute('diabled', true);
  console.log('👍', 'appinstalled', event);
});
