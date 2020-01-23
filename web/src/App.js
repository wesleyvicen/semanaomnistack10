import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

import DevItem from './components/DevItem'

function App() {
  const [ devs, setDevs] = useState([])
	const [ github_username, setGithubUsername ] = useState('');
	const [ techs, setTechs ] = useState('');
	const [ latitude, setLatitude ] = useState('');
	const [ longitude, setLongitude ] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.log(err);
			},
			{ timeout: 30000 }
		);
  }, []);
  
  useEffect(() =>{
async function loadDevS(){
  const response = await api.get('/devs');
  setDevs(response.data)
}
loadDevS();
  }, [])

	async function handleAddDev(e) {
    e.preventDefault();
    
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
 setGithubUsername('')
 setTechs('')
 setDevs([...devs, response.data])
	}
	return (
		<div id={'app'}>
			<aside>
				<strong>Cadastrar</strong>
				<form onSubmit={handleAddDev}>
					<div className={'input-block'}>
						<label htmlFor={'github_username'}>Usuário do Github</label>
						<input
							className={'github_username'}
							id={'github_username'}
							value={github_username}
							onChange={(e) => setGithubUsername(e.target.value)}
							required
						/>
					</div>
					<div className={'input-block'}>
						<label htmlFor={'techs'}>Tecnologia</label>
						<input
							className={'techs'}
							id={'techs'}
							value={techs}
							onChange={(e) => setTechs(e.target.value)}
							required
						/>
					</div>

					<div className={'input-group'}>
						<div className={'input-block'}>
							<label htmlFor={'latitude'}>Latitude</label>
							<input
								type={'Number'}
								className={'latitude'}
								id={'latitude'}
								value={latitude}
								onChange={(e) => setLatitude(e.target.value)}
								required
							/>
						</div>

						<div className={'input-block'}>
							<label htmlFor={'longitude'}>Longitude</label>
							<input
								type={'Number'}
								className={'longitude'}
								id={'longitude'}
								value={longitude}
								onChange={(e) => setLongitude(e.target.value)}
								required
							/>
						</div>
					</div>
					<button type={'submit'}>Salvar</button>
				</form>
			</aside>
			<main>
				<ul>
          {devs.map(dev => (
          <DevItem key={dev._id} dev={dev}/>
          ))}
					
				</ul>
			</main>
		</div>
	);
}

export default App;
