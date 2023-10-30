import React, { useEffect, useState } from 'react';
import { CardGalleryApp } from './CardApp/CardGalleryApp';
import { CardApp } from './CardApp/CardApp';
import axios from 'axios';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { getIdFromUrl } from './utils/getId';

import logoStarWar from "./img/starwar.png"

import "./style.scss"



export const StarWarApp = () => {
    const [datos, setDatos] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [type, setType] = useState('people');
    const [page, setPage] = useState(1);
    const [cardInfo, setCardInfo] = useState();
    const [home, setHome] = useState(true)


    useEffect(() => {
        axios
            .get(`http://swapi.dev/api/${type}/?page=${page}`)
            .then((res) => {
                setCities(res.data.results3);
                setDatos(res.data);
                setCardInfo(res.data.results[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log('error', err);
            });

    }, [type, page]);

    const handleSelection = (type) => {
        setIsLoading(true)
        setType(type);
        setHome(false)
        setPage(1)
    };

    return (
        <main className='formatMain'>
            <nav className='formatNav gap-5 d-flex justify-content-center align-items-center'>
                <Button className='formatButton'  onClick={() => setHome(true)}>
                    Inicio
                </Button>
                <Button className='formatButton'  onClick={() => handleSelection('people')}>
                    Personajes
                </Button>
                <Button className='formatButton' onClick={() => handleSelection('films')}>
                    Películas
                </Button>
                <Button className='formatButton' onClick={() => handleSelection('planets')}>
                        Planetas
                </Button>
                <Button className='formatButton' onClick={() => handleSelection('species')}>
                    Especies
                </Button>
                <Button className='formatButton' onClick={() => handleSelection('starships')}>
                    Naves
                </Button>
                <Button className='formatButton' onClick={() => handleSelection('vehicles')}>
                    Vehículos
                </Button>
            </nav>
            {!home ? (
                 
                <Container fluid>
                    {isLoading ? (
                        <div className='formatDivSpinner d-flex flex-column justify-content-center align-items-center'>
                            <Spinner animation="border" variant="light" />
                            <h3>Cargando...</h3>
                        </div>
                        
                    ) : (
                        <Row className='formatCol justify-content-center align-items-center'>
                        <Col sm={6} className=' d-flex justify-content-center'>
                            {isLoading && <Spinner animation="border" variant="light" />}
                            {cardInfo && !isLoading && <CardApp cardInfo={cardInfo} type={type} />}
                        </Col>
                        {datos &&
                        <Col className='formatGallery' sm={12}>
                            <Row className='justify-content-center align-items-center'>
                                
                                    <CardGalleryApp 
                                        datos={datos} 
                                        cardInfo={cardInfo}
                                        setCardInfo = {setCardInfo}
                                        type={type}
                                        setPage = {setPage}
                                        page = {page}
                                    />
                                    
                                
                            </Row>
                        </Col>
                        }
                    </Row>
                    )}
                    
                </Container>
            ) : (
                <div className='formDivLogo d-flex justify-content-center align'>
                    <img src={logoStarWar}/>
                </div>
            )}
            
        </main>
    );
};
