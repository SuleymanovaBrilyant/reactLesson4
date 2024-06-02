import React from 'react';
import './CInsStyle/Qadinlar.css';
import Images from './image/refereeWomen.avif'

function Kisiler() {
    return (
        <div>
            <div className='Flex'>
                <div>
                    <h2>Information</h2>
                    <h4>Welch has regularly appeared in the Women’s Super League and officiated three games at the Women’s World Cup this summer</h4>
                    <p>“I played football and didn’t even think about refereeing until one of my really good friends, who is a referee, refereed us,” she said in an interview. “I spent the whole game telling her how to do her job! Her response was, ‘If you think it’s that easy, give it a go’. That’s how it happened and 10 years later here I am.”

                        She qualified as an official through the Durham County FA and began refereeing in university football and in Sunday leagues in Sunderland. She began her refereeing career in 2010, combining the role with an administrative job in the NHS, before going full-time in 2019.</p>
                </div>
                <img className='ImagesMen' src={Images} alt="" />
            </div>
        </div>
    );
}

export default Kisiler;
