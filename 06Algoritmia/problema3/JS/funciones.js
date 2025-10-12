        document.getElementById('formDescuento').addEventListener('submit', function(e) {
            e.preventDefault();
            const totalCompra = parseFloat(document.getElementById('totalCompra').value) || 0;
            const descuento = totalCompra * 0.15;
            const pagoFinal = totalCompra - descuento;

            document.getElementById('descuentoTexto').textContent = 
                `Descuento aplicado: $${descuento.toFixed(2)}`;
            document.getElementById('pagoFinalTexto').textContent = 
                `Total a pagar: $${pagoFinal.toFixed(2)}`;
            document.getElementById('resultado').style.display = "block";
        });