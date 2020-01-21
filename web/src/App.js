import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

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
			<main>
				<ul>
					<li className={'dev-item'}>
						<header>
							<img
								src={'https://avatars1.githubusercontent.com/u/26713741?s=460&v=4'}
								alt={'Wesley Vicente'}
							/>
							<div className={'user-info'}>
								<strong>Wesley Vicente</strong>
								<span>ReactJS, Java, AdonisJS</span>
							</div>
						</header>
						<p>Fazendo um dente no universo.</p>
						<a href={'https://github.com/wesleyvicen'}>Acessar perfil no Github</a>
					</li>
					<li className={'dev-item'}>
						<header>
							<img
								src={'https://avatars1.githubusercontent.com/u/26713741?s=460&v=4'}
								alt={'Wesley Vicente'}
							/>
							<div className={'user-info'}>
								<strong>Wesley Vicente</strong>
								<span>ReactJS, Java, AdonisJS</span>
							</div>
						</header>
						<p>Fazendo um dente no universo.</p>
						<a href={'https://github.com/wesleyvicen'}>Acessar perfil no Github</a>
					</li>
					<li className={'dev-item'}>
						<header>
							<img
								src={'https://avatars1.githubusercontent.com/u/26713741?s=460&v=4'}
								alt={'Wesley Vicente'}
							/>
							<div className={'user-info'}>
								<strong>Wesley Vicente</strong>
								<span>ReactJS, Java, AdonisJS</span>
							</div>
						</header>
						<p>Fazendo um dente no universo.</p>
						<a href={'https://github.com/wesleyvicen'}>Acessar perfil no Github</a>
					</li>
					<li className={'dev-item'}>
						<header>
							<img
								src={'https://avatars1.githubusercontent.com/u/26713741?s=460&v=4'}
								alt={'Wesley Vicente'}
							/>
							<div className={'user-info'}>
								<strong>Wesley Vicente</strong>
								<span>ReactJS, Java, AdonisJS</span>
							</div>
						</header>
						<p>Fazendo um dente no universo.</p>
						<a href={'https://github.com/wesleyvicen'}>Acessar perfil no Github</a>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
