/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import '../Cart/Cart';

const Home = () => {

    const [allActors, setAllActors] = useState([]);

    const[selectedActors, setSelectedActors] = useState([]);

     useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then((data) => setAllActors(data))

     },[]);

     const handleSelectActor=(actor) =>{

        // console.log(actor)
        setSelectedActors([...selectedActors,actor]);

     }
     console.log(selectedActors);

    return (
        <div className='container'>
            <div className="home-container">
                
                <div className="card-container">
               {
                allActors.map((actor) =>(
                    <div key={actor.id} className='card'>
                    <div className='card-img'>
                    <img className='photo' src="https://i.ibb.co/J5bfPrZ/16926.jpg" alt="" />
                    </div>
                    <br />
 
                    <h2>{actor.name}</h2>
 
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ab.</small></p>
                    <div className="info">
                        <p>Salary:{actor.salary}</p>
 
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={() => handleSelectActor(actor)} className='card-btn'>select</button>
 
                </div>
                ))
               }

               
                </div>

                <div className="cart">
                    <h1>this is cart</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Home;