document.addEventListener('DOMContentLoaded', () => {
	const inputElement = document.getElementById('input');
	const outputElement = document.getElementById('output');

	const encrypt = () => {
			const input = inputElement.value;
			const output = input
					.replace(/e/g, 'enter')
					.replace(/i/g, 'imes')
					.replace(/a/g, 'ai')
					.replace(/o/g, 'ober')
					.replace(/u/g, 'ufat');
			outputElement.value = output;
	};

	const decrypt = () => {
			const input = inputElement.value;
			const output = input
					.replace(/enter/g, 'e')
					.replace(/imes/g, 'i')
					.replace(/ai/g, 'a')
					.replace(/ober/g, 'o')
					.replace(/ufat/g, 'u');
			outputElement.value = output;
	};

	const copyToClipboard = () => {
			const output = outputElement.value;
			navigator.clipboard.writeText(output)
					.then(() => alert('Texto copiado para a área de transferência!'))
					.catch(err => alert('Falha ao copiar texto: ', err));
	};

	document.getElementById('encryptBtn').addEventListener('click', encrypt);
	document.getElementById('decryptBtn').addEventListener('click', decrypt);
	document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
});

