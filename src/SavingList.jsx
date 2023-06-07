import React, { useState, useEffect } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, query, where, Timestamp, } from 'firebase/firestore';
import { db } from './firebase';

import './cal.css'






export default function SavingList() {

    const [savingList , setSavingLing] = useState('');

    // useEffect(() =>{
    //     getData();
    // },[])

    // // 비동기 함수로 작성하여 값 가져옴
    // async function getData() {
    //     const querySnapshot = await getDocs(collection(db, "money"))

    //     let dataArray = [];

    //     querySnapshot.forEach((doc) => {
    //         dataArray.push({
    //             id : doc.id,
    //             ...doc.data()
    //         });
    //         // doc.data() 객체 확인 > timestamp는 toDate를 통해 Date
    //     })
    //     setSavingLing(dataArray);
    // }
    // console.log(savingList)



    return (
        <div>
            <div>
                <h2>제목</h2>
                <div className='saving-bord'>
                    <div className='period-bord'>기간</div>
                    <p>매월{'얼마'}</p>
                    <p>Total</p>
                </div>

                {savingList}
            </div>
        </div>
    )
}
