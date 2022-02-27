import React, {useRef, useState} from 'react';
import {Button} from "react-bootstrap";
const Exercise_1 = () => {
    let UserMassive = useRef()
    let NewMassive = useState([])
    let [result,setResult] = useState(0);
    useState(()=>{
        alternative_reduce()
    },[result,setResult])
    function click(){
        NewMassive = UserMassive.current.value.split(',');
        return alternative_reduce(0,NewMassive)
    }
    function alternative_reduce(temp,massive){
        var i = 0
        if(massive!=null){
           for(i = 0;i < massive.length;i++){
               massive[i] = parseInt(massive[i]);
               temp += massive[i]
               setResult(temp)
           }
        }
    }
    return (
        <div className={'d-flex flex-column w-50 align-content-center'}>
            <input ref={UserMassive} className={'m-5 p-3'} placeholder={"Введите элементы массива через запятую и нажмите ОК"}/>
            <Button onClick={()=>click()} className={'m-5'} variant={'success'}>OK</Button>
            <div className={'text-white m-5'}><h5>Результат:</h5></div>
            <input disabled={true} className={'m-5 p-3 text-white'} value={result}/>
        </div>
    );
};

export default Exercise_1;
