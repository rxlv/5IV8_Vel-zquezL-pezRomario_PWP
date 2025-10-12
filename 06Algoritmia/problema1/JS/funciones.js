  document.getElementById('formInteres').addEventListener('submit', function(e) {
            e.preventDefault();
            const cantidad = parseFloat(document.getElementById('cantidad').value) || 0;
            const meses = parseInt(document.getElementById('meses').value) || 0;
            const tasaMensual = 0.02;

            // Interés compuesto mensual
            const montoFinal = cantidad * Math.pow(1 + tasaMensual, meses);
            const ganancia = montoFinal - cantidad;

            document.getElementById('gananciaTexto').textContent = 
                `Después de ${meses} meses, ganarás $${ganancia.toFixed(2)} y tendrás un total de $${montoFinal.toFixed(2)}.`;
            document.getElementById('resultado').style.display = "block";
        });