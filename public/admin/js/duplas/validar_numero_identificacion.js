const validar_chile = (dni) => {
    let result;
    let nombre = "RUT";
    dni = dni.replaceAll('.','');
    dni = dni.replaceAll('-','');
    dni = dni.trim();
    let cuerpo = dni.slice(0,-1);
    let dv = dni.slice(-1).toUpperCase();
    if(cuerpo.length < 7) return {"status": false, "numero_identificacion": dni, nombre};
    suma = 0;
    multiplo = 2;
    for(i=1;i<=cuerpo.length;i++) {
        index = multiplo * dni.charAt(cuerpo.length - i);
        suma = suma + index;
        if(multiplo < 7) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }
    }
    dvEsperado = 11 - (suma % 11);
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;
    if(dvEsperado != dv) return {"status": false, "numero_identificacion": dni, nombre};
    dv = (dv == 10) ? 'K' : dv;
    dv = (dv == 11) ? 0 : dv;
    result = true;
    let numero_identificacion = `${cuerpo}-${dv}`;
    return {
        "status": result,
        numero_identificacion,
        nombre
    };
}

const validar_peru = (dni) => {
    let result;
    let nombre = "DNI";
    dni = dni.replaceAll('.','');
    dni = dni.replaceAll('-','');
    dni = dni.trim();
    let cuerpo = dni.slice(0,-1);
    let dv = dni.slice(-1).toUpperCase();
    const numberKeys = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
    const charKeys = ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const factors = [3, 2, 7, 6, 5, 4, 3, 2];
    const dniDigits = cuerpo.trim().split('').map(x => parseInt(x, 10));
    const sum = dniDigits.reduce((sum, x, i) => {
        sum += factors[i] * x;
        return sum;
    }, 0);
    let keyIndex = 11 - (sum % 11);
    keyIndex = keyIndex === 11 ? 0 : keyIndex;
    const control = parseInt(dv, 10) || dv.toUpperCase();
    if (isNaN(control)) {
        result = control == charKeys[keyIndex];
    } else {
        result = control == numberKeys[keyIndex];
    }
    let numero_identificacion = `${cuerpo}-${dv}`;
    return {
        "status": result,
        numero_identificacion,
        nombre
    };
}

const validar_brasil = (dni) => {
    let result;
    let nombre = "CPF";
    let suma;
    let resto;
    dni = dni.replaceAll('.','');
    dni = dni.replaceAll('-','');
    dni = dni.trim();
    let cuerpo = dni.slice(0,-2);
    let dv = dni.slice(-2).toUpperCase();
    if (dni == "00000000000") return {"status": false, "numero_identificacion": dni, nombre};;
    suma = 0;
    for (i=1; i<=9; i++) suma = suma + parseInt(dni.substring(i-1, i)) * (11 - i);
    resto = (suma * 10) % 11;
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(dni.substring(9, 10)) ) return {"status": false, "numero_identificacion": dni, nombre};;
    suma = 0;
    for (i = 1; i <= 10; i++) suma = suma + parseInt(dni.substring(i-1, i)) * (12 - i);
    resto = (suma * 10) % 11;
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(dni.substring(10, 11) ) ) return {"status": false, "numero_identificacion": dni, nombre};;
    result = true;
    let numero_identificacion = `${cuerpo}-${dv}`;
    return {
        "status": result,
        numero_identificacion,
        nombre
    };
}

const validar_ecuador = (dni) => {
    let total = 0;
    let longitud = dni.length;
    let longcheck = longitud - 1;
    let result;
    let nombre = "RUC";
    dni = dni.replaceAll('.','');
    dni = dni.replaceAll('-','');
    dni = dni.trim();
    let cuerpo = dni.slice(0,-1);
    let dv = dni.slice(-1).toUpperCase();
    if (dni !== "" && longitud === 10){
        for(i = 0; i < longcheck; i++){
            if (i%2 === 0) {
                let aux = dni.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(dni.charAt(i));
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        result = dni.charAt(longitud-1) == total;
    } else {
        return {"status": false, "numero_identificacion": dni, nombre};;
    }
    let numero_identificacion = `${cuerpo}-${dv}`;
    return {
        "status": result,
        numero_identificacion,
        nombre
    };
}

document.addEventListener("input", (e) => {
    if (e.target.matches("#dni_1")) {
        let $mensaje_dni_1 = document.getElementById("mensaje_dni_1");
        let $tipoDocumentoIdentidad = document.getElementById("id_tipo_documento_identidad_1");
        let tipoDocumentoIdentidad;
        let res;
        let text = $tipoDocumentoIdentidad.options[$tipoDocumentoIdentidad.selectedIndex].textContent;
        if (text == "RUT") {
            tipoDocumentoIdentidad = text;
        } else {
            tipoDocumentoIdentidad = $tipoDocumentoIdentidad.value;
        }
        if (tipoDocumentoIdentidad in VALIDACIONES) {
            let validacionTipoDocumento = eval(VALIDACIONES[tipoDocumentoIdentidad]);
            res = validacionTipoDocumento(e.target.value);
        } else {
            res = {
                "status": true,
                "numero_identificacion": e.target.value
            }
        }
        if (!res.status) {
            e.target.value = res.numero_identificacion;
            $mensaje_dni_1.classList.add("invalid-feedback");
            $mensaje_dni_1.classList.add("d-block");
            $mensaje_dni_1.textContent = `Ingrese un ${res.nombre} válido`;
        } else {
            e.target.value = res.numero_identificacion;
            $mensaje_dni_1.classList.remove("invalid-feedback");
            $mensaje_dni_1.classList.remove("d-block");
            $mensaje_dni_1.textContent = "";
        }
    }

    if (e.target.matches("#dni_2")) {
        let $mensaje_dni_2 = document.getElementById("mensaje_dni_2");
        let $tipoDocumentoIdentidad = document.getElementById("id_tipo_documento_identidad_2");
        let tipoDocumentoIdentidad;
        let res;
        let text = $tipoDocumentoIdentidad.options[$tipoDocumentoIdentidad.selectedIndex].textContent;
        if (text == "RUT") {
            tipoDocumentoIdentidad = text;
        } else {
            tipoDocumentoIdentidad = $tipoDocumentoIdentidad.value;
        }
        if (tipoDocumentoIdentidad in VALIDACIONES) {
            let validacionTipoDocumento = eval(VALIDACIONES[tipoDocumentoIdentidad]);
            res = validacionTipoDocumento(e.target.value);
        } else {
            res = {
                "status": true,
                "numero_identificacion": e.target.value
            }
        }
        if (!res.status) {
            e.target.value = res.numero_identificacion;
            $mensaje_dni_2.classList.add("invalid-feedback");
            $mensaje_dni_2.classList.add("d-block");
            $mensaje_dni_2.textContent = `Ingrese un ${res.nombre} válido`;
        } else {
            e.target.value = res.numero_identificacion;
            $mensaje_dni_2.classList.remove("invalid-feedback");
            $mensaje_dni_2.classList.remove("d-block");
            $mensaje_dni_2.textContent = "";
        }
    }
});

document.addEventListener("submit", (e) => {
    if (e.target.id === "form-store-dupla") {
        let $dni_1 = document.getElementById("dni_1");
        let $mensaje_dni_1 = document.getElementById("mensaje_dni_1");
        let $dni_2 = document.getElementById("dni_2");
        let $mensaje_dni_2 = document.getElementById("mensaje_dni_2");

        if ($mensaje_dni_1.classList.contains("invalid-feedback")) {
            e.preventDefault();
            $dni_1.focus();
        }

        if ($mensaje_dni_2.classList.contains("invalid-feedback")) {
            e.preventDefault();
            $dni_2.focus();
        }
    }
});
