const div1 = document.querySelector('.div-1')//PEGA O SELETOR DA DIV 1 QUE ESTÁ COM STYLE DISPLAY NONE E SO APARECE DEPOIS DO CARREGAMENTO DA PAGINA
const div2 = document.querySelector('.div-2')// PEGA O SELETOR DA DIV-2 (LOADING) 


window.addEventListener('load', () => { //FICA ESCUTANDO O EVENTO LOAD DA PAGINA A TRÁVES DO DOM
    if(document.readyState === 'complete'){// VERIFICA SE O A PAGINA FOI CARREGADA COMPLETAMENTE

        setTimeout( () => { //COMO  NAO TEMOS MUITO CONTEÚDO PARA CARREGAR INSERIMOS UM TIMEOUT PARA FORÇAR A DEMORA NO CARREGAMENTO (5 segundos)
            div2.style.display = 'none'
            div1.style.display = 'block'
        console.log('PAGINA CARREGOU')
        }, 5000)
        
    }
})


