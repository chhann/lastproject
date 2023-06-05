import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, query, where, Timestamp, } from 'firebase/firestore';

import { db } from './firebase';

import './cal.css'

export default function Saving() {
    const [value, onChange] = useState(new Date());
    
    // (저금예정일 선택)달력 클릭하면 true 값으로 바뀌며 달력 뜸
    const [isCheck, setCheck] = useState(false);
    // (기간)시작날짜
    const [ischeck2, setCheck2] = useState(false);
    // (기간) 끝난 날짜
    const [ischeck3, setCheck3] = useState(false);

    // (저금예정일 선택)클릭한 날짜
    const [clickday, setClickday] = useState('---- : -- : --');
    // (기간)시작날짜
    const [clickday2, setClickday2] = useState('---- : -- : --');    
    // (기간) 끝난 날짜
    const [clickday3, setClickday3] = useState('---- : -- : --');

    const [amount, setAmount] = useState('');

    // 제목
    const [title, setTitle] = useState('');
    // 메모 
    const [memo, setMemo] = useState('');

    const [test, setTest] = useState('');
    const [test2, setTest2] = useState('');

    
    

    

    // (저금예정일 선택)클릭한 날짜
    function gu (i) {
        let year = i.getFullYear()
        let month =  ('0' + (i.getMonth() + 1)).slice(-2);
        let day = ('0' + (i.getDate())).slice(-2);
        // 누른 날짜 yyyy-mm-dd 로 변환하기
        let when = `${year}-${month}-${day}`

        setClickday(when)
        setCheck(false)
    }

    // (기간)시작날짜 
    function startperiod (i) {
        let year = i.getFullYear()
        let month =  ('0' + (i.getMonth() + 1)).slice(-2);
        let day = ('0' + (i.getDate())).slice(-2);
        // 누른 날짜 yyyy-mm-dd 로 변환하기
        let when = `${year}-${month}-${day}`

    
        setClickday2(when)
        setCheck2(false)
    }
    // (기간)끝 날짜
    function endperiod (i) {
        let year = i.getFullYear()
        let month =  ('0' + (i.getMonth() + 1)).slice(-2);
        let day = ('0' + (i.getDate())).slice(-2);
        // 누른 날짜 yyyy-mm-dd 로 변환하기
        let when = `${year}-${month}-${day}`

    
        setClickday3(when)
        setCheck3(false)
    }

    // 금액 ,표시 ex1,000,000
    const handleHyphen = (event) => {
        const value = event.target.value.replace(/[^\d]/g, ''); // 숫자 이외의 문자 제거
        const formattedValue = new Intl.NumberFormat().format(value); // 숫자 형식으로 변환
        event.target.value = formattedValue;


        // event.target.value = event.target.value
        // .toString()
        // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        // .replace(/[^0-9]/g, '')
        // .replace(/^(\d{0,3})(\d{0,3})(\d{0,3})$/g, "$1,$2,$3")
        // .replace(/(\,{1,2})$/g, "");
    };

    // 데이터 베이스에 값 추가 함
    const addDocData = async (e) => {
        e.preventDefault();

        // if(clickday === '---- : -- : --'){
        //     alert('날짜를 선택하세요')
        // }

        try {
            // 서버에 연결해서 사용하는 것은 비동기 함수로 작성
            const docRef = await addDoc(collection(db, "money"), {
            done : false, // 고정
            clickday,
            clickday2,
            clickday3,
            amount,
            title,
            memo,
            startDate : Timestamp.fromDate(new Date()), // 고정
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setClickday('---- : -- : --');
        setClickday2('---- : -- : --');
        setClickday3('---- : -- : --');
        setAmount();
        setTitle();
        setMemo();
    }

    

    

    return (
        <div>
            <form
                onSubmit={addDocData}
                oninvalid="this.setCustomValidity('asdfsadf')"
            >
            <h2>저금예정일</h2>
                <div>{clickday}
                    <button
                        onClick={() => {setCheck((e) => !e);}}
                    >
                    {isCheck ? "닫힘" : "열림"}
                    </button>
                    {isCheck && (
                        <div className='modal-cal modal-cal2'>
                            <Calendar 
                                onChange={onChange} 
                                value={value}
                                onClickDay={(value, event) => gu(value)}
                            />
                        </div>
                    )}
                </div>

            <br />
            <h2>기간</h2>
                {/* test 인풋값으로 기간선택 2*/}
                <div>
                    <input 
                        required
                        type="date" 
                        onChange={e => setTest(e.target.value)}
                    /> 
                    
                    ~
                    <input 
                        required
                        type="date" 
                        onChange={e => setTest2(e.target.value)}
                        min = {test}    
                    /> 
                    <br />
                    {test}~{test2}
                </div>

<hr />
                {/* test 라이브러리로 기간선택 */}
                <div>
                    {clickday2}
                    <button
                        onClick={() => {setCheck2((e) => !e);}}
                    >
                    달력
                    </button>
                    {ischeck2 && (
                        <div className='modal-cal'>
                            <Calendar 
                                onChange={onChange} 
                                value={value}
                                onClickDay={(value, event) => startperiod(value)}
                            />
                        </div>
                    )}

                    ~ 
                    {clickday3}
                    <button
                        onClick={() => {setCheck3((e) => !e);}}
                    >
                        달력
                    </button>
                    {ischeck3 && (
                        <div className='modal-cal'>
                            <Calendar 
                                onChange={onChange} 
                                value={value}
                                onClickDay={(value, event) => endperiod(value)}
                            />
                        </div>
                    )}
                </div>
                

            <br />            
            <h2>금액</h2>
                <div>
                    <input 
                        // maxLength={11}
                        required
                        
                        onInput={handleHyphen} 
                        type="text"
                        onChange={e => setAmount(e.target.value)}
                    
                    />
                    
                    
                    
                </div>

            <br />
            <h2>제목</h2>
                <div>
                    <input
                        type='text'
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                

            <br />
            <h2>메모</h2>
                <div>
                    <textarea
                        type='text'
                        
                        value={memo}
                        onChange={e => setMemo(e.target.value)}
                    />

                    
                </div>
            

            <br />
            <button type='sumbit' >입력</button><br />
            
            
            {clickday}<br />                
            {clickday2}<br />
            {clickday3}<br />
            {amount}<br />
            {title}<br />
            {memo}
            </form>


        </div>
    )
}
