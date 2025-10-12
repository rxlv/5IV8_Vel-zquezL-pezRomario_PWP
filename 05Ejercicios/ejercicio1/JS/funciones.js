        document.getElementById('formInvertir').addEventListener('submit', function(e) {
            e.preventDefault();
            const texto = document.getElementById('palabras').value.trim();
            if (texto.length === 0) {
                document.getElementById('resultado').textContent = "Por favor ingresa palabras.";
                return;
            }
            const palabras = texto.split(' ');
            const invertidas = palabras.reverse().join(' ');
            document.getElementById('resultado').textContent = invertidas;
        });