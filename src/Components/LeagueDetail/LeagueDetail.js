//imported file list
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import male from '../../Images/male.png';
import female from '../../Images/female.png';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol,faMars,faVenus,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitterSquare,faInstagram} from '@fortawesome/free-brands-svg-icons';

const LeagueDetail = () => {
    //getting individual league id for fatching data
    const {leagueId}=useParams();

    //fetching API data for getting individual league logo, caaling by id
    const [league,setLeague]=useState([]);
    useEffect(()=>{
          fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
          .then(res=>res.json())
          .then(data=>setLeague(data.leagues[0]))
    }, [leagueId]);
    // Destructuring object league after fatching API data
    const {strBanner,strBadge,strLeague,dateFirstEvent,strCountry,strSport,strGender,strDescriptionEN,strDescriptionFR}=league;
    
    // conditional renedaring for checking male or female team
    let genderLogo=(strGender==='Male' ? male:female);
    let genderIcon=(strGender==='Male' ? faMars:faVenus);

    return (
        <div id="details-container"> 
            {/* calling header component for LeagueDetail page */}
            <Header leagueBanner={strBanner} leagueLogo={strBadge}></Header>
            {/* details card for targated league */}
            <div id="details-card" className=' row '>
                <div id="details-text" className=" col-md-7">
                    <h5>{strLeague}</h5>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {dateFirstEvent}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={genderIcon} /> Gender: {strGender}</p>
                </div>
                {/* team image based on gender condition rendaring */}
                <div className="col">
                    <img id="gender-img" src={genderLogo} alt=""/>
                </div>
            </div>
            {/* Description area for targate league */}
            <div id="discription-area">
                <h5>Description in English:</h5>
               <p>{strDescriptionEN}</p>
               <br/>
               <h5>Description in French:</h5>
               <p>{strDescriptionFR}</p>
            </div>
            {/* footer with social platform */}
            <footer>
                  <a id="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jubayer.allmhamud/"><FontAwesomeIcon icon={faFacebook}/></a>
                  <a id="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/jubayer_i"><FontAwesomeIcon icon={faTwitterSquare}/></a>
                  <a id="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jubayer.allmhamud/"><FontAwesomeIcon icon={faInstagram}/></a>
            </footer>
        </div>
    );
};

export default LeagueDetail;