<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
       {{-- @dd(request())--}}
    <title>Ventas diarias por concepto</title>

    <style type="text/css">
        * {
            font-family: Verdana, Arial, sans-serif;
        }
        table{
            font-size: x-small;
        }
        tfoot tr td{
            font-weight: bold;
            font-size: x-small;
        }
        .gray {
            background-color: lightgray
        }
    </style>

</head>
<body>

<table width="100%">
    <tr>

        <td><h2>Ventas diarias por concepto</h2></td>
        <td align="right">
            <h3>Global Glaucoma</h3>
            <pre>

                <strong>Fecha Inicial: </strong>{{$start_date}}
                <strong>Fecha Final: </strong>{{$finish_date}}

            </pre>
        </td>
    </tr>

</table>

<table width="100%">


</table>

<br/>


<br />
<div align="center"> <h3>Detalle</h3> </div>

<table width="100%">
    <thead style="background-color: lightgray;">
    <tr>

        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Descuentos</th>
        <th>Impuestos</th>
        <th>Importe</th>
        <th>Total</th>
    </tr>
    </thead>
    <tbody>
    @foreach($sales as $sale)
        <tr>

            <td align="left">{{$sale->product->name}}</td>
            <td align="left">{{$sale->quantity}}</td>
            <td align="right">{{number_format($sale->price,2)}}</td>
            <td align="right">{{number_format($sale->discount,2)}}</td>
            <td align="right">{{number_format($sale->tax,2)}}</td>
            <td align="right">{{number_format($sale->amount,2)}}</td>
            <td align="right">{{number_format($sale->amount + $sale->tax,2)}}</td>
        </tr>
    @endforeach

    <tr>
        <td align="right"><strong>Totales:</strong></td>
        <td align="left"><strong>{{$sales->sum('quantity')}}</strong></td>
        <td align="right"><strong>{{number_format($sales->sum('price'),2)}}</strong></td>
        <td align="right"><strong>{{number_format($sales->sum('discount'),2)}}</strong></td>
        <td align="right"><strong>{{number_format($sales->sum('tax'),2)}}</strong></td>
        <td align="right"><strong>{{number_format($sales->sum('amount'),2)}}</strong></td>
        <td align="right"><strong>{{number_format($sales->sum('amount') + $sales->sum('tax'),2)}}</strong></td>
    </tr>




</body>
</html>

