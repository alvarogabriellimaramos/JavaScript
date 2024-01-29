export function Night(moon,sun){
    const lua = document.getElementById(moon)
    const sol = document.getElementById(sun)
    lua.addEventListener('click',function(){
        lua.style.display = 'none'
        sol.style.display = 'inline'
        document.body.style.background = '#120711'
        localStorage.setItem('night','true')
    })
}
export function Day(sun,moon){
    const sol = document.getElementById(sun)
    const lua = document.getElementById(moon)
    sol.addEventListener('click',function(){
        sol.style.display = 'none'
        lua.style.display = 'inline'
        document.body.style.background = 'white'
        localStorage.night = 'false'
    })
}
export function ONLOAD(moon,sun){
    window.onload = function(){
        if (localStorage.getItem('night') === 'true'){
            const lua = document.getElementById(moon)
            const sol = document.getElementById(sun)
            document.body.style.background = '#120711'
            lua.style.display = 'none'
            sol.style.display = 'inline'
        }
        if (localStorage.getItem('night') === 'false'){
            const lua = document.getElementById(moon)
            const sol = document.getElementById(sun)
            document.body.style.background = 'white'
            lua.style.display = 'inline'
            sol.style.display = 'none'
        }
    }
}