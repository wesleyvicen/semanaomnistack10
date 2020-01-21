import React from 'react';
import './global.css';
import './app.css';

function App() {
	return (
		<div id={'app'}>
			<aside>
				<strong>Cadastrar</strong>
				<form>
					<div className={'input-block'}>
						<label htmlFor={'github_username'}>Usuário do Github</label>
						<input className={'github_username'} id={'github_username'} required />
					</div>
					<div className={'input-block'}>
						<label htmlFor={'techs'}>Tecnologia</label>
						<input className={'techs'} id={'techs'} required />
					</div>

					<div className={'input-group'}>
						<div className={'input-block'}>
							<label htmlFor={'latitude'}>Latitude</label>
							<input className={'latitude'} id={'latitude'} required />
						</div>

						<div className={'input-block'}>
							<label htmlFor={'longitude'}>Longitude</label>
							<input className={'longitude'} id={'longitude'} required />
						</div>
					</div>
					<button type={'submit'}>Salvar</button>
				</form>
			</aside>
			<main />
		</div>
	);
}

export default App;
