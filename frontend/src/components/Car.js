//import { useState } from 'react';
//import Modal from './Modal';

function Car({ data }) {
    //console.log(data);
    //let [modal, setModal] = useState(false);
    let selected = "1";
    let cn = "box";

    if (data.estimatedate === undefined || data.estimatedate === "") {
        selected = "0";
    } else {
        cn += " setBlue";
    }

    function selectOption(e) {
        let id = document.getElementById('box-' + e.target.id);
        //console.log(e);
        //console.log(e.target.value);
        
        if (e.target.value === "1") {
            id.style.borderColor = "rgb(102, 153, 204)";
            //showModal();
        } else {
            id.style.borderColor = 'gray';
        }
    }

    /*
    function showModal() {
        setModal(true);
    }

    function hideModal() {
        setModal(false);
    }
    */

    return (
        <div className={ cn } id={ `box-${ data.id}` }>
            {/*<img src={ data.image } />*/}
            <img src={ data.img } alt={ data.model } width={ 280 } height={ 160 } />
            <p>ID: { data.id }</p>
            <p>Marca: { data.make }</p>
            <p>Modelo: { data.model }</p>
            <p>Fecha estimada: { data.estimatedate }</p>
            <p>Descripcion: { data.description }</p>
            <p>Mantenimiento: <select id={ data.id } defaultValue={ selected } onChange={ selectOption }><option value="1">Si</option><option value="0">No</option></select></p>
        </div>
    )
};

export default Car;