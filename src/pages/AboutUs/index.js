import React from 'react';
import NavSidebar from '../../components/NavSidebar';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Footer from '../../components/Footer';
import background from '../../assets/aboutUs.png';
import BtnScrollToTop from '../../components/BtnScrollToTop';
import './index.scss'

const AboutUsPage = () => {
  const hero = {
    titleP1: 'CONOCE NUESTRO',
    titleP2: 'EQUIPO',
    subtitle: '',
    img: [String(background)],
  };

  return (
    <>
      <NavSidebar hero={hero} />
      <div className="aboutUsContainer">
      <h1 className="titleAboutUs text-center">
        ¿Quiénes dan mantenimiento y soporte a Pueblos Mágicos?
      </h1>
      <div className="supportTable">
        <Table responsive className="justify-content-start">
          <tbody className="mx-auto text-center">
            <tr>
              <th>Kevin Henry López Vázquez</th>
              <th>Paulina Valeria Quintero Mucito</th>
              <th>Jesrig Soid Pineda Salinas</th>
              <th>Laura Raquel Vazquez Sanchez</th>
            </tr>
            <tr>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png"
                  rounded
                />
              </td>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/girl.png"
                  rounded
                />
              </td>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png"
                  rounded
                />
              </td>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/girl.png"
                  rounded
                />
              </td>
            </tr>
            <tr>
              <td>kevin.kyervnienh@gmail.com</td>
              <td>paulina.mucito@gmail.com</td>
              <td>Js.pineda.sa@gmail.com</td>
              <td>raquelskrats@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <BtnScrollToTop />
      <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
