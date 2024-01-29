export default function Mode() {
    const dark = document.getElementById('dark');
    const light = document.getElementById('light');
    dark.addEventListener('click',DarkMode);
    light.addEventListener('click',LightMode)
}
function DarkMode() {
    document.body.style.background = '#340f14';
    dark.style.display = 'none';
    sessionStorage.dark = true;
    document.body.style.color = 'white'
    light.style.display = 'block'
}
function LightMode() {
    document.body.style.background = '#ffd9f4'
    light.style.display = 'none';
    document.body.style.color = 'black';
    sessionStorage.dark = false 
    dark.style.display = 'block';
}
window.onload = function() {
    if (sessionStorage.dark === 'true') DarkMode();
    if (sessionStorage.dark === 'false') LightMode()
}