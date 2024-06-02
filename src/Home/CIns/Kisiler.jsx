import React from 'react';
import './CInsStyle/Kisiler.css';
import Images from './image/refereeMen.jpeg'

function Kisiler() {
    return (
        <div>
            <div className='Flex'>
                <div>
                    <h2>Information</h2>
                    <h4>Szymon Marciniak took charge of the FIFA World Cup Round of 16 match between Argentina and Australia, as well as France's group-stage victory over Denmark.</h4>
                    <p>He adds the World Cup final to an impressive list of club and national team assignments which include the 2018 UEFA Super Cup match and the 2015 UEFA European Under-21 Championship final, as well as duty at UEFA EUROs 2016 and 2020 and the 2018 World Cup.

                        When he was selected for the UEFA EURO 2016 team in France, Marciniak was the first CORE graduate to referee at a EURO final tournament.

                        Tomasz Listkiewicz's father Michal Listkiewicz was an international referee who also served as a linesman at the 1990 World Cup final between West Germany and Argentina in Rome.

                        Marciniak has been part of a strong, solid and united European refereeing team at the Qatar World Cup. This continent has provided eleven referees, 20 assistant referees and eleven video assistant referees (VAR) for the tournament.</p>
                </div>
                <img className='ImagesMen' src={Images} alt="" />
            </div>
        </div>
    );
}

export default Kisiler;
