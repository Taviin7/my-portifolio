import React from 'react';
import './Projetos.css';
import Card from '../Card/Card';
import Proveit from './Imgs/logo-proveit.png';
import QuickJobs from './Imgs/logo-quickJobs.png';
import Anagrama from './Imgs/logo-anagrama.png'


export default function Projetos() {
    return (
        <section className='Projetos' id='Projetos'>
            <div className='container-projetos'>
                <div className='title-projetos'>
                    <h1>Projetos</h1> <span>Recentes</span>
                </div>
                <h4>Meus projetos mais recentes</h4>
                <div className='main-container-projetos'>
                    <div className='Box-Card'>
                        <Card
                            Img={Proveit}
                            Name="Proveit"
                            Desciption="App desenvolvido em React Native e C#. O objetivo desse app culinário é auxiliar o usuário com sua alimentação em seu ambiente doméstico. O diferencial do ProveIt se baseia em suas features."
                            More="https://proveit-one.vercel.app"
                        />
                        <Card
                            Img={QuickJobs}
                            Name="QuickJobs"
                            Desciption="Mockup feito em ReactJS. O objetivo deste projeto foi desenvolver um website para os usuários que estão em busca de um novo emprego."
                            More="https://github.com/Taviin7/quickjobs"
                        />
                        <Card
                            Img={Anagrama}
                            Name="Anagrama"
                            Desciption="App para desktop em C#. O projeto é basicamente um mini-game onde o jogador deverá formar palavras com as letras que o sistema mostrar, com o objetivo de completar cada fase proposta."
                            More="https://github.com/Taviin7/anagrama"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}