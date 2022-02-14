import React from 'react';

export function Team() {
    return (
        
      <div className='container'>
        <p className="bottom-space" />
          <div className='row' style={{display:'flex', flexFlow:'column'}}>

            <div className="row" style={{display:'flex', flexFlow:'column'}}>
            <h2 style={{fontSize: '35px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.75em'}}>
                    JOIN US
                        </h2>
                        <h3>We are developing blockchain platform to make the world fun and happy.
                        <br />DOGE-1 TOKEN waits for creative and fun people to join us.
                        <br />Anyone who can contribute is welcome.</h3>

                </div>
                <div className='row' style={{alignItems: 'center', flexFlow:'column'}}>
                          <div className='flip'>
                            <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'5px'}}>
                            <img src="images/web/doge_dance.gif" width="50px" alt="" style={{marginTop:'-5px'}} />
                            
                            </h2>
                          </div>
                        </div>
            <p className='bottom-space-sm' />
                  <div className='token__container'>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                        <h2>ECONOMICS</h2>
                        <h2 style={{marginTop:'5px'}}>
                            <img src="images/web/doge_team.png" alt="" style={{margin:'-15px'}} />
                        </h2>
                        <div className='icon-row'>
                        <div className='col'>
                            <a href="contact@doge-1.lol"><h3><img src="images/web/email_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://twitter.com/doge1lol"><h3><img src="images/web/twitter_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://discord.gg/DJKmu3gZ88"><h3><img src="images/web/discord_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                          </div>
                          
                      </div>
                    </div>
                    <div className='info__container-card'>
                    <div className='info__container-cardInfo'>
                        <h2>COMMUNITY</h2>
                        <h2 style={{marginTop:'5px'}}>
                            <img src="images/web/you.png" width="100px" alt="" style={{margin:'-15px'}} />
                        </h2>
                        <p style={{textAlign:'center'}} >💎</p>
                          <div className='icon-row'>
                            <div className='col'>
                            <a href="https://t.me/doge1_token"><h3><img src="images/web/telegram_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://twitter.com/doge1lol"><h3><img src="images/web/twitter_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://discord.gg/DJKmu3gZ88"><h3><img src="images/web/discord_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                          </div>
                          
                      </div>
                    </div>
                    <div className='info__container-card'>
                    <div className='info__container-cardInfo'>
                        <h2>DEVELOPMENT</h2>
                        <h2 style={{marginTop:'5px'}}>
                            <img src="images/web/doge_team1.png" alt="" style={{margin:'-5px'}} />
                        </h2>
                        <div className='icon-row'>
                        <div className='col'>
                            <a href="contact@doge-1.lol"><h3><img src="images/web/email_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://twitter.com/doge1lol"><h3><img src="images/web/twitter_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://discord.gg/DJKmu3gZ88"><h3><img src="images/web/discord_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
        <p className="bottom-space-sm" />
      </div>
    );
}