import React, {useRef, useState} from 'react';
import {Button} from "react-bootstrap";
const Exercise_2 = () => {
    let UserMassive = useRef()
    let NewMassive = useState([])
    let resultMassive = useState([])
    let [result,setResult] = useState([]);
    useState(()=>{
        count_words()
    },[result,setResult])
    function click(){
        NewMassive = UserMassive.current.value.split(',');
        return count_words(0,NewMassive)
    }
    function count_words(temp,massive){
        var i = 0
        if(massive!=null){
           for(i = 0;i < massive.length;i++){
               resultMassive[i] = massive[i].split(" ").length
               setResult(resultMassive)
               console.log(resultMassive)
           }
        }
    }
    return (
        <div className={'d-flex flex-column w-50 align-content-center'}>
            <input ref={UserMassive} className={'m-5 p-3'} placeholder={"Введите предложения через запятую и нажмите ОК"}/>
            <Button onClick={()=>click()} className={'m-5'} variant={'success'}>OK</Button>
            <div className={'text-white m-5'}><h5>Результат:</h5></div>
            <input disabled={true} className={'m-5 p-3 text-white'} value={result}/>
        </div>
    );
};

export default Exercise_2;
