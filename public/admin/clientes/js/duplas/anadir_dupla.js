document.addEventListener("click", async (e) => {
    let $btn_anadir = document.getElementById("anadir-dupla");
    if (e.target === $btn_anadir) {
        e.preventDefault();
        let url = `/ajax/duplas/validacion/cantidad`;
        let options = {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_fecha_maestra: _id,
                id_division: division,
                id_categoria: categoria,
            })
        }
        try {
            let res = await fetch(url, options),
            json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };

            if (json.anadir) {
                window.location.replace($btn_anadir.href);
            } else {
                Swal.fire({
                    icon: 'warning',
                    text: `¡Límite alcanzado! No es posible agregar más parejas en ${json.division}/${json.categoria}`,
                });
            }

        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.error(`Error ${err.status}: ${message}`);
        }

    }
});
