
import React  from 'react';

export function Footer() {

  return (
<div className='footer'>
    <p className='bottom-space' />
    <div className='row'>
    <div className='col'>
                        <img src="images/web/doge_spin.gif" width="45px" alt="" style={{margin:'-15px'}} />
                </div>
    </div>
    <div className="token__container">
                    <div className='token__container-section'>
                    <p style={{display: 'flex',fontSize: '10px', textAlign: 'center'}}>Any information contained on this website is provided as general market commentary, and does not constitute investment advice. 
          The ƉOGE-1 TOKEN team and its affiliates will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. 
          All opinions expressed on this site are owned by the respective writer and should never be considered as advice in any form.
          The ƉOGE-1 TOKEN team and its affiliates makes no representation or warranties as to the accuracy and or timelines of the information contained herein. 
        </p>
                        
                    </div>
                  </div>
    <div className='row' style={{flexFlow:'column'}}>
        <div className='col'>
            <p style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © ƉOGE-1 TOKEN -  All Rights Reserved.</p>
        </div>
    </div>
  </div>
  );
}