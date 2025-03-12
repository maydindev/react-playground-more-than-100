import React from 'react'
import Accordion from './Accordion'
import styles from "./page.module.css";

const SSS = () => {

    const accordionData = [
        {
            title: "Ürün kaliteli mi?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores nulla tempore voluptatem dolorum doloribus aspernatur blanditiis ut! Magni accusantium alias esse nemo minus ipsa unde magnam sint laudantium beatae."
        },
        {
            title: "Fiyatı ne kadar?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores nulla tempore voluptatem dolorum doloribus aspernatur blanditiis ut! Magni accusantium alias esse nemo minus ipsa unde magnam sint laudantium beatae."
        },
        {
            title: "Ne zaman ulaşır?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores nulla tempore voluptatem dolorum doloribus aspernatur blanditiis ut! Magni accusantium alias esse nemo minus ipsa unde magnam sint laudantium beatae."
        }
    ]


  return (
    <>
        {accordionData.map((item,index) => {
            return <div className={styles.accordionCard}>
                <Accordion key={index} title={item.title} content={item.content}/>
                </div>
            //return ekleme unutulmamalı!!!
        })}
    </>
  )
}

export default SSS