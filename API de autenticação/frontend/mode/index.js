export default function Mode() {
    const dark = document.getElementById('dark');
    const light = document.getElementById('light');
    dark.addEventListener('click',DarkMode);
    light.addEventListener('click',LightMode)
}
function DarkMode() {
    document.body.style.background = '#1a1833';
    dark.style.display = 'none';
    localStorage.dark = true;
    document.body.style.color = 'white'
    light.style.display = 'block'
}
function LightMode() {
    document.body.style.background = '#ffd9f4'
    light.style.display = 'none';
    document.body.style.color = 'black';
    localStorage.dark = false 
    dark.style.display = 'block';
}
window.onload = function() {
    if (localStorage.dark === 'true') DarkMode();
    if (localStorage.dark === 'false') LightMode()
}