import {useParams} from 'react-router-dom';
import { Header } from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Details = ()=>{
    //Line Code berikur merupakan fungsi untuk menerima parameter dari URL
    const {isbn} = useParams()

    const [data,setData] = useState([])
    const [element,setElement] = useState(false)

    const fetchAPI = async()=>{
        await axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
        .then(response=>{
            setData(response.data)
    })
}
    useEffect(()=>{
        fetchAPI()
    },[])

    useEffect(()=>{
        if(data){
            setElement(true)
            console.log("success")
            console.log(data)
        }
    },[data])

    //Silakan edit code berikut supaya dapat menampilkan buku sesuai dengan parameter ISBN di URL
    return(
        <>
        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                {/*Berikut ini merupakan template untuk informasi buku */}
                <div className="card flex-row flex-wrap" style={{width:"50rem",marginTop:"50px"}}>
                    <div className="card-header border-0">
                        <img src={data.image} alt="Buku.jpg" width="250" height="270" className="px-4"/>
                    </div>
                    <div className="card-block p-4" style={{width:"58%"}}>
                        <h4 className="card-title">{data.title}</h4>
                        <p className="card-text">{data.subtitle}</p>
                        <p className="card-text">{data.authors}</p>
                        <p className="card-text">{data.publisher}</p>
                        <p className="card-text">{data.desc}</p>
                        <h6 className='card-text'>For more information </h6>
                        <a href={data.url}>Clik Here!</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}