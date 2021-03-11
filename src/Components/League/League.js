//imported file list
import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const League = (props) => {
    // Destructuring object league comming from Home component
    const{strLeague,strSport,idLeague}=props.league;

    //managing explore button for clicking individual league
    const history=useHistory();
    const handleClick=(leagueId)=>{
        history.push(`/league/${leagueId}`)
    }

    //fetching API data for getting individual league logo, caaling by id
    const [logo,setLogo]=useState([]);
    useEffect(()=>{
          fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
          .then(res=>res.json())
          .then(data=>setLogo(data.leagues[0]))
    }, [idLeague])
    // Destructuring object logo after fatching API data
    const{strBadge}=logo;

    return (   
           <div className="d-flex justify-content-center col ">
                {/* individual card for each league */}
                <Card id="league-card" >
                       <Card.Img variant="top" id="card-img"  src={strBadge} /> 
                        <Card.Body>
                            <Card.Title>{strLeague}</Card.Title>
                            <p>Sports Type: {strSport}</p>
                            <Button id="explore-btn" onClick={()=>handleClick(idLeague)} >Explore <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Card.Body>
                </Card>
           </div>
    );
};

export default League;