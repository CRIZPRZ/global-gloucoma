function ordenamiento(table) {
    table.on( 'row-reorder',async function (e, diff) {
        let duplas = {};
        for (let i = 0; i < diff.length; i++) {
            let dupla = table.row( diff[i].node ).data();
            let orden_cabeza_serie = diff[i].newData;
            let orden_cabeza_serie_prev = diff[i].oldData;

            if (!duplas[i]) {
                duplas[i] = [];
            }
            duplas[i].push({ orden_cabeza_serie, orden_cabeza_serie_prev, dupla });
        }
        console.log(duplas);
        try {
            let res = await fetch(`/ajax/duplas/ordenamiento`, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({duplas, _id})
            });
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            let json = await res.json();
            table.ajax.reload(null, false);
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            Swal.fire({
                icon: 'error',
                text: `Error ${err.status}: ${message}`,
            });
            console.log(`Error ${err.status}: ${message}`);
        }
    });
}
