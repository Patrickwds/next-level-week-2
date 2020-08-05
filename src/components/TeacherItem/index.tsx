import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/955151?s=460&u=23afb87b2b0db99b933db60450a33383227dcd6b&v=4" alt="Patrick Menezes"/>
                <div>
                    <strong>Patrick Menezes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br />Veniam consectetur delectus recusandae exercitationem quo cumque, in asperiores perspiciatis beatae ipsam minus, at quas soluta. Porro animi reiciendis quos inventore omnis?
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;