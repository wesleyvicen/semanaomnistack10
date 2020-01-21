import React, { useState } from 'react';
import Header from './Header';
// Componentes: Bloco isolado de codigo HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que o componente pai passa para os filhos
// Estado: Informações mantidas pelos componentes (Lembrar: Imutabilidade)
function App() {
	const [ counter, setCounter ] = useState(0);
	function incrementCounter() {
		setCounter(counter + 1);
	}
	return (
		<div>
			<h1>Contador: {counter}</h1>
			<button onClick={incrementCounter}>Incrementar</button>
		</div>
	);
}

export default App;
