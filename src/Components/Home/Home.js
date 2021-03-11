//imported file list
import React, { useEffect, useState } from 'react';
import League from '../League/League';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    //fetch API data for all leagues
    const [leagues,setLeagues]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res=>res.json())
        .then(data=>setLeagues(data.leagues))
    }, [])
    //slicing 21 leagues for displaying
    const targatedLeagues=leagues.slice(0,21);
    return (
        <div id="home-container">
                {/* calling header component for home page */}
                <Header></Header>
                {/* displaying all leagues in home page body by mapping all targated leagues*/}
                <div  className="row d-flex justify-content-center mt-5" >
                    {
                        targatedLeagues.map(league=><League key={league.idLeague} league={league}></League>)
                    }
                </div>
         </div>
    );
};

export default Home;