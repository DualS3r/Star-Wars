import React, { useRef, useState } from 'react'
import { getIdFromUrl } from '../utils/getId';
import { Card, Col, Row } from 'react-bootstrap';

import "../style.scss"

import flecha from "../img/flecha.png"
import defaultImg from "../img/default.jpg"

const url = "https://starwars-visualguide.com/assets/img"

export const CardGalleryApp = ({datos, cardInfo, setCardInfo, setID, type, page, setPage}) => {
    const {results, previous, next} = datos


    const onNext = () => {
        setPage(page + 1)
    }

    const onStart = () => {
        setPage(1)
    }

    const onPrevious = () => {
        setPage(page - 1)
    }

  return (
    <>
        <Col >
            {previous != null ? (
                 <img onClick={onPrevious} className='flechaDerecha' src={flecha} alt="" />
            ) : (
                <img className='flechaDerecha' src={flecha} alt="" />
            )}

        </Col>

        {results.map((e, i) => {
            return(
                    <Col key={i} className='my-3 d-flex justify-content-center align-items-center'>
                        <Card className='formatGalleryCard d-flex align-items-center'>

                                <Card.Img 
                                    onClick={() => setCardInfo(e)} className='formatImgGallery' 
                                    variant="top"
                                    src={`${url}/${type==="people"?"characters":type}/${getIdFromUrl(e.url)}.jpg`} 
                                    onError={(e) => e.target.src = defaultImg}
                                />
                            
                        </Card>
                    </Col>
            )
            
        })}
        <Col className='d-flex justify-content-end'> 
            {next != null ? (
                <img onClick={onNext}  className='flechaIzq ' src={flecha} alt="" />
            ) : (
                <img onClick={onStart}  className='flechaIzq ' src={flecha} alt="" />
            )}
            
        </Col>
    </>
    
    
  )
}
