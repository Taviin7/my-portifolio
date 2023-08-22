import React from 'react';
import './Home.css';
import Astronauta from './imgs/astrounata.png'

export default function Home() {

    return (
        <section className='Home' id='Home'>

            {/* Animation */}
            <div class="area" >
                


                {/* Header */}
                <header id="header">
                    <nav>
                        <ul className='navigation-bar'>
                            <a href='#Home' className='ancora'>Home</a>
                            <a href='#Projetos' className='ancora'>Projetos</a>
                            <a href='#Skills' className='ancora'>Skills</a>
                            <a href='#About' className='ancora'>Contato</a>
                        </ul>
                    </nav>
                </header>

                {/* Container */}
                <div className='container'>
                    <div class="home-content">
                        <h1>Olá, eu sou o Otavio Lago!</h1>
                        <h3>Desenvolvedor Full-Stack.</h3>
                        <p>Sou Técnico em Informática com ênfase em Desenvolvimento de Sistemas, e estou constantemente buscando ampliar mais meus conhecimentos sobre programação.
                            Tenho como objetivo evoluir tanto pessoalmente, como profissionalmente, aproveitando ao máximo cada oportunidade que surgir em minha carreira, e, claro, esforço e dedicação é o quê não falta!</p>

                    </div>
                    <div className='container-astronauta'>
                        <img src={Astronauta} />
                    </div>
                </div>
            </div>
            <div className='white-blur'></div>
        </section >
    )
}
