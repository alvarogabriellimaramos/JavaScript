// exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(){
    console.log('O evento ocorreu!!')
} // esse evento irá ser disparado quando o usuario clica no body,corpo html,quando o body ser clicando o a callback será ativada,isso prova que as callback são so ativadas ou retornadas depois de uma operação ou evento especifico ocorre