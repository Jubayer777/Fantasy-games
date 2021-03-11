//imported file list
import { Image } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    // Destructuring object leagueLogo comming from LeagueDetail component
    const {leagueBanner,leagueLogo}=props;

    // style LeagueDetail page banner for individual league banner image
    const detailBanner={
    backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6)),url(${leagueBanner})`
    }       
    
    return (
           <div>
               {
                leagueLogo 
                ?<div>
                    {
                      leagueBanner!=null 
                      ?<div style={detailBanner} className="banner">
                            <div>
                                <Image id="banner-logo" src={leagueLogo} fluid />
                            </div>
                      </div>
                      :<div id="detail-banner-optional" className="banner">
                           <div>
                               <Image id="banner-logo" src={leagueLogo} fluid />
                           </div>
                      </div>
                    }
                 </div>
                :<div id="home-banner" className="banner">
                    <div>
                        <h3 id="banner-text">Fantasy Games-2021</h3>
                    </div>
                </div>
               }
           </div>
    );
};

export default Header;