'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, setModal}) {

    return (
        <div className="bg-black  ">
            <div className="md:containerc mx-auto  ">
            <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p className="sm:hidden md:block">Design & Development</p>
        </div>
        </div>
        </div>
        
        
    )
}