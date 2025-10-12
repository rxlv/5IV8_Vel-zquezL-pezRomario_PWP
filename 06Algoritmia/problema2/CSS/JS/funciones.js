ocument.getElementById('formComisiones').addEventListener('submit', function(e) {
            e.preventDefault();
            const sueldoBase = parseFloat(document.getElementById('sueldoBase').value) || 0;
            const venta1 = parseFloat(document.getElementById('venta1').value) || 0;
            const venta2 = parseFloat(document.getElementById('venta2').value) || 0;
            const venta3 = parseFloat(document.getElementById('venta3').value) || 0;

            const comision = (venta1 + venta2 + venta3) * 0.10;
            const total = sueldoBase + comision;

            document.getElementById('comisionTexto').textContent = 
                `Comisión por ventas: $${comision.toFixed(2)}`;
            document.getElementById('totalTexto').textContent = 
                `Total a recibir en el mes: $${total.toFixed(2)}`;
            document.getElementById('resultado').style.display = "block";
        });