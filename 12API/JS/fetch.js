        async function getCatFact() {
            try {
                const response = await fetch('https://catfact.ninja/fact');
                const data = await response.json();
                document.getElementById('factText').textContent = data.fact;
            } catch (error) {
                document.getElementById('factText').textContent = 'Oops! No pude obtener el dato. ¡Inténtalo de nuevo!';
            }
        }

        async function getCatImage() {
            try {
                const img = document.getElementById('catImage');
                img.src = `https://cataas.com/cat?t=${new Date().getTime()}`;
            } catch (error) {
                document.getElementById('imageContainer').innerHTML = 'Oops! No pude obtener la imagen. ¡Inténtalo de nuevo!';
            }
        }
        async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const englishFact = data.fact;

        const translateResponse = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=' + encodeURIComponent(englishFact));
        const translatedData = await translateResponse.json();
        const spanishFact = translatedData[0][0][0];

        document.getElementById('factText').textContent = spanishFact;
    } catch (error) {
        document.getElementById('factText').textContent = '¡Ups! No pude obtener el dato. ¡Inténtalo de nuevo!';
    }
}