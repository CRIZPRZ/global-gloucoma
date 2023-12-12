<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            font-size: 14px;
            font-family: 'Times New Roman';
        }

        td,
        th,
        tr,
        table {
            /*border-top: 1px solid black;*/
            border-collapse: collapse;
        }

        td.producto,
        th.producto {
            width: 150px;
            max-width: 150px;
        }

        td.cantidad,
        th.cantidad {
            width: 80px;
            max-width: 80px;
            word-break: break-all;
        }

        td.precio,
        th.precio {
            width: 80px;
            max-width: 80px;
            word-break: break-all;
        }

        .centrado {
            text-align: center;
            align-content: center;
        }

        .ticket {
            width: 310px;
            max-width: 310px;
        }

        img {
            max-width: inherit;
            width: inherit;
        }
        @media print {
            .oculto-impresion,
            .oculto-impresion * {
                display: none !important;
            }
        }
    </style>
</head>
<body>
<button class="oculto-impresion" onclick="imprimir()">Imprimir</button>

<div class="ticket">

    <p class="centrado">Global Glaucoma
        <br>Mariano Azueta #37
        <br>Ladron de Guevara
        <br>Guadalajara Jalisco (MX) 44600
        <br>{{$sale_order->created_at}}</p>
    <table>
        <thead>
        <tr>
            <th class="cantidad">CANT</th>
            <th class="producto">PRODUCTO</th>
            <th class="precio">$$</th>
        </tr>
        </thead>
        <tbody>
        @foreach($sale_order->lines as $line)
            <tr>
                <td class="cantidad">{{$line->quantity}}</td>
                <td class="producto">{{$line->product_name}}</td>
                <td class="precio">${{number_format($line->amount,2)}}</td>
            </tr>
            @endforeach

        <tr>
            <td></td>
            <td align="right">SUB TOTAL:</td>
            <td>${{number_format($sale_order->subtotal,2)}}</td>
        </tr>
        <tr>
            <td></td>
            <td align="right">IVA:</td>
            <td>${{number_format($sale_order->tax,2)}}</td>
        </tr>
        <tr>
            <td></td>
            <td align="right">TOTAL: </td>
            <td><strong>${{number_format($sale_order->total,2)}}</strong></td>
        </tr>

        </tbody>
    </table>
    <p class="centrado">¡GRACIAS POR SU COMPRA!

</div>
</body>
<script>
    function imprimir() {
        window.print();
    }
</script>
</html>
