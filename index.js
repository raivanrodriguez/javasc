document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("ingresar").addEventListener("click", function () {
    
       
        let email = document.getElementById("name").value
        let contra = document.getElementById("contra").value
        let alert = document.getElementById("warning")
        let warning = ""
        let cumpleCon = true;
        
        alert.innerHTML = ""
        if (email == "" ) {
    
            
            warning += `Type user <br>`;
            cumpleCon = false;
            
            
        }
    
        if (contra == "" ) {
            
            cumpleCon = false;
            warning += `Type pasword `
        }
    
        if (cumpleCon){
            window.location.replace("Home.html")
            
            
            
        }
        else {
            
            alert.innerHTML= warning
        }
         
          
        
    
        
        
    
    })
    document.getElementById("ingresar").addEventListener("click", function () {
    
    let datos_ingresados = {
        
        dato1: document.getElementById("email").value
    };
    
    let dato_guardado = JSON.stringify(datos_ingresados);
    
    localStorage.setItem("datos_ingresados", dato_guardado);
    
    
    })
    
    
    
    
    
    
        
    })