import React from 'react';
import Table from 'react-bootstrap/Table';
import './index.scss';

const InfoAttraction = (
    {
        attractionName = 'Cascadas Velo de Novia',
        info = 'Sigue el sonido del agua que hace eco en una región de vegetación frondosa para llegar a la cascada Velo de Novia. Relaja tu mente mientras contemplas el bello paisaje de este lugar. La cascada Velo de Novia mide 35 metros (115 ft) de altura y su nombre se debe a que se parece a ese famoso artículo nupcial. La cascada está ubicada en una reserva natural y su agua fluye hacia el lago Avándaro, que está en los alrededores.',
        img = 'https://www.sinpostal.com/wp-content/uploads/2019/03/Chiflon_SinPostal-8.jpg',
        cost = '$85',
        distance = '10 kilómetros (6 mi) al suroeste',
        type = 'Cascadas',

    }
    ) => {
    return (
        <div className="table">
            <Table responsive>
                <tbody>
                   <tr>
                       <td>
                           <h2 className="titleAtraction">{attractionName}</h2>
                           <p className="textDescription">{info}</p>
                       </td>
                       <td>
                           <img src={img} alt={attractionName} className="imgStyle"></img>
                       </td>
                   </tr>
                   <tr>
                       <td>
                           <h5 className="textDescription">Costo: {cost}</h5>
                           <h5 className="textDescription">Distancia desde el centro del pueblo: {distance}</h5>
                           <h5 className="textDescription">Tipo de atracción: {type}</h5>
                       </td>
                   </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default InfoAttraction;