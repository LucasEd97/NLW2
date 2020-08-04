import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fmgf1-2.fna.fbcdn.net/v/t31.0-8/27173330_1538427306270363_5920429175203815476_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEtceqrHAe9yECPwN8f9TbQjdD0l19nehON0PSXX2d6EztiQNU7aO04aS31JZ3SYngMHQSCwtDVs3qBmt3lMJrz&_nc_ohc=v23m2ZCzA6AAX8O_Dhs&_nc_ht=scontent.fmgf1-2.fna&oh=b8924a260410558f5ec7b69517639815&oe=5F4D5E1F" alt="Isadora Prado"/>
            <div>
                <strong>Isadora Prado</strong>
                <span>Medicina Veterinária</span>
            </div>
        </header>
        <p>
            ISADORA ISADORA 
            <br/>  <br/>
            RABU CRISTINA
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 150,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;