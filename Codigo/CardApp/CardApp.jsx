import React, { useEffect, useRef, useState } from 'react'
import { getIdFromUrl } from '../utils/getId';

import "../style.scss"

import defaultImg from "../img/default2.jpg"

const url = "https://starwars-visualguide.com/assets/img"

export const CardApp = ({cardInfo, type}) => {

  const imgRef = useRef()

  const urlImg = `${url}/${type==="people"?"characters":type}/${getIdFromUrl(cardInfo.url)}.jpg`

  const imgDefaultError = () => {
    imgRef.current.src = defaultImg
  }


  return (
    <div className='cardInfo my-5'>
        <h2 className='mb-5'>{cardInfo.name? cardInfo.name : cardInfo.title}</h2>
        <div className='d-flex justify-content-center'>
          <div className='me-5'>
            <img 
              src={urlImg} 
              alt=""
              onError={imgDefaultError}
              ref={imgRef}
            />
          </div>
          {type == "people" ? (
            <div className=''>
              <p><span className='formatSpanTitle'>Mide:</span> {`${cardInfo.height} cm`}</p>
              <p><span className='formatSpanTitle'>Pesa:</span> {`${cardInfo.mass} kg`}</p>
              <p><span className='formatSpanTitle'>Color de pelo:</span> {cardInfo.hair_color}</p>
              <p><span className='formatSpanTitle'>Color de ojos:</span> {cardInfo.eye_color}</p>
              <p><span className='formatSpanTitle'>Genero:</span> {cardInfo.gender}</p>
          </div>
          ):
          type == "films" ? (
            <div className=''>
              <p><span className='formatSpanTitle'>Director:</span> {cardInfo.director}</p>
              <p><span className='formatSpanTitle'>Fecha:</span> {cardInfo.release_date} </p>
              <p><span className='formatSpanTitle'>Episode:</span> {cardInfo.episode_id} </p>
            </div>
          ) :
          type == "planets" ? (
            <div className=''>
              <p><span className='formatSpanTitle'>Clima:</span> {cardInfo.climate}</p>
              <p><span className='formatSpanTitle'>Tipo de terreno:</span> {cardInfo.terrain}</p>
              <p><span className='formatSpanTitle'>Diametro:</span> {`${cardInfo.diameter} km`} </p>
              <p><span className='formatSpanTitle'>Gravedad:</span> {cardInfo.gravity}</p>
              <p><span className='formatSpanTitle'>Periodo en orbita:</span> {`${cardInfo.orbital_period} dias`}</p>
              <p><span className='formatSpanTitle'>Periodo de rotación:</span> {`${cardInfo.rotation_period} dias`}</p>
            </div>
          ) :
          type == "species" ? (
            <div className=''>
              <p><span className='formatSpanTitle'>Especie:</span> {`${cardInfo.name}`}</p>
              <p><span className='formatSpanTitle'>Media de estatura:</span> {`${cardInfo.average_height} m`}</p>
              <p><span className='formatSpanTitle'>Colores de ojos:</span> {cardInfo.eye_colors == "n/a" ? "none" : cardInfo.eye_colors}</p>
              <p><span className='formatSpanTitle'>Colores de pelo:</span> {cardInfo.hair_colors == "n/a" ? "none" : cardInfo.hair_colors}</p>
              <p><span className='formatSpanTitle'>Colores de piel:</span> {cardInfo.skin_colors == "n/a" ? "none" : cardInfo.skin_colors}</p>
              <p><span className='formatSpanTitle'>Lenguaje:</span> {cardInfo.language}</p>
            </div>
          ) :
          type == "starships" ? (
            <div className=''>
              <p><span className='formatSpanTitle'>Capacidad de carga:</span> {`${cardInfo.cargo_capacity} kg`}</p>
              <p><span className='formatSpanTitle'>Precio:</span> {`${cardInfo.cost_in_credits}$`}</p>
              <p><span className='formatSpanTitle'>Anchura:</span> {`${cardInfo.length} m`}</p>
              <p><span className='formatSpanTitle'>Creadores:</span> {cardInfo.manufacturer}</p>
              <p><span className='formatSpanTitle'>Velocidad:</span> {`${cardInfo.max_atmosphering_speed} km/h`}</p>
            </div>
          ) :
          type == "vehicles"&&(
            <div className=''>
              <p><span className='formatSpanTitle'>Modelo:</span> {cardInfo.model}</p>
              <p><span className='formatSpanTitle'>Capacidad de pasajeros:</span> {cardInfo.passengers}</p>
              <p><span className='formatSpanTitle'>Capacidad de carga:</span> {`${cardInfo.cargo_capacity} kg`}</p>
              <p><span className='formatSpanTitle'>Precio:</span> {`${cardInfo.cost_in_credits}$`}</p>
              <p><span className='formatSpanTitle'>Anchura:</span> {`${cardInfo.length} m`}</p>
              <p><span className='formatSpanTitle'>Creadores:</span> {cardInfo.manufacturer}</p>
              <p><span className='formatSpanTitle'>Velocidad:</span> {`${cardInfo.max_atmosphering_speed} km/h`}</p>
              <p><span className='formatSpanTitle'>Tipo de vehiculo:</span> {cardInfo.vehicle_class}</p>
            </div>
          )
          }

        </div>
        
    </div>
  )
}
