import React from 'react';
import './Skills.css';
import Figure from '../Figure/Figure';

export default function Skills() {
    return (
        <section className='Skills' id='Skills'>
            <div className='container-skills'>
                <div className='title-skills'>
                    <h1>Minhas</h1> <span>Skills</span>
                </div>
                <div className='main-container-skills'>
                    <div className='box-skills'>
                        <Figure
                            title='HTML/ CSS'
                            description='Os blocos de construção da web. O HTML fornece estrutura, enquanto o CSS aprimora a aparência.'
                        />
                        <Figure
                            title='JavaScript'
                            description='JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet, permitindo uma melhor a experiência do usuário na web.'
                        />
                        <Figure
                            title='ReactJS'
                            description='Uma biblioteca JavaScript para construir componentes de UI reutilizáveis, amplamente utilizada para criar Uls dinâmicos e interativos.'
                        />
                        <Figure
                            title='React Native'
                            description='React Native é uma biblioteca JavaScript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.'
                        />
                        <Figure
                            title='Banco de Dados'
                            description='Bancos de dados ou bases de dados são conjuntos de arquivos relacionados entre si, podendo conter registros sobre pessoas, lugares ou informações em geral.'
                        />
                        <Figure
                            title='MySQL'
                            description='O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.'
                        />
                        <Figure
                            title='MongoDB'
                            description='O MongoDB é um banco de dados orientado a documentos, diferente dos Bancos de dados tradicionais que seguem o modelo relacional. Ou seja, NoSQL .'
                        />
                        <Figure
                            title='C#'
                            description='C# é a linguagem mais popular para desenvolvimento do .NET. Com o .NET, você pode destinar qualquer tipo de aplicativo em execução em qualquer plataforma.'
                        />
                        <Figure
                            title='.NET Core'
                            description='O .NET é uma plataforma gratuita para desenvolvedores, multiplataforma e de software livre, que permite criar vários tipos de aplicativos.'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
