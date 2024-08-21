// selección de elementos
const botonEncriptar = document.getElementById('idEncriptarTexto');
const textoEncriptar = document.getElementById('textoUsuario');
const avisoInstrucciones = document.querySelector('.texto_instrucciones');
const salida = document.getElementById('textoResultante');
const contenido = document.querySelector('.contenido_imagen');
const botonCopiar = document.getElementById('idCopiarTexto');
const botonDesencriptar = document.getElementById ('idDesencriptarTexto');


// boton de encriptador

botonEncriptar.addEventListener('click', e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g," ");

    if(texto == ''){
        avisoInstrucciones.style.background = '#4ECCA3';
        avisoInstrucciones.style.console = '#EEEEEE';
        avisoInstrucciones.textContent = 'No debe de estar vacío el campo de texto';
        
        setTimeout(()=>{
            avisoInstrucciones.removeAttribute('style');
        },1500);
    }

    else if(texto !==txt){
        avisoInstrucciones.style.background = '#4ECCA3';
        avisoInstrucciones.style.console = '#EEEEEE';
        avisoInstrucciones.textContent = 'No debe contener acentos y carácteres especiales el texto';
        
        setTimeout(()=>{
            avisoInstrucciones.removeAttribute('style');
        },1500);  
    }

    else if(texto !== texto.toLowerCase()){
        avisoInstrucciones.style.background = '#4ECCA3';
        avisoInstrucciones.style.console = '#EEEEEE';
        avisoInstrucciones.textContent = 'Solo debe contener letras en minúscula';
        
        setTimeout(()=>{
            avisoInstrucciones.removeAttribute('style');
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');

        salida.innerHTML = texto;
        botonCopiar.style.visibility ='inherit';
        contenido.remove();
    }

    
});
// programacion boton desencriptar

    botonDesencriptar.addEventListener('click', e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g," ");

    if(texto == ''){
        avisoInstrucciones.style.background = '#4ECCA3';
        avisoInstrucciones.style.console = '#EEEEEE';
        avisoInstrucciones.textContent = 'No debe de estar vacío el campo de texto';
        
        setTimeout(()=>{
            avisoInstrucciones.removeAttribute('style');
        },1500);
    }

    else if(texto !==txt){
        avisoInstrucciones.style.background = '#4ECCA3';
        avisoInstrucciones.style.console = '#EEEEEE';
        avisoInstrucciones.textContent = 'No debe contener acentos y carácteres especiales el texto';
        
        setTimeout(()=>{
            avisoInstrucciones.removeAttribute('style');
        },1500);  
    }

    else if(texto !== texto.toLowerCase()){
        avisoInstrucciones.style.background = '#4ECCA3';
        avisoInstrucciones.style.console = '#EEEEEE';
        avisoInstrucciones.textContent = 'Solo debe contener letras en minúscula';
        
        setTimeout(()=>{
            avisoInstrucciones.removeAttribute('style');
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, 'e');
        texto = texto.replace(/imes/mg, 'i');
        texto = texto.replace(/ai/mg, 'a');
        texto = texto.replace(/ober/mg, 'o');
        texto = texto.replace(/ufat/mg, 'u');

        salida.innerHTML = texto;
        botonCopiar.style.visibility ='inherit';
        contenido.remove();
    }

    
});

// programacion boton copiar

botonCopiar.addEventListener('click', e=>{
    e.preventDefault();

    let copiar = salida;
    copiar.select();
    document.execCommand('copy');
});

function copiarTexto(e) {
    e.preventDefault(); 
    let copiar = salida.value;

    navigator.clipboard.writeText(copiar);
}