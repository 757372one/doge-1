import React from 'react';
import { TokenBanners } from './sub/token_banners';

export function Team() {



  return (
      <div className='container'>
          <p className="bottom-space-md" />
            <div className='team__wrapper'>
            <div className='row' style={{alignItems: 'center', flexFlow:'column'}}>
                  <img src="images/web/doge1-badge_32.png" width="50px" alt="" style={{marginTop:'-5px'}} />
                
              </div>
            <div className="row" style={{display:'flex', flexFlow:'column'}}>
            <h2 style={{fontSize: '35px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.75em'}}>
                    JOIN US
                        </h2>
                        <h3>We are developing blockchain platform to make the world fun and happy.
                        <br />DOGE-1 TOKEN waits for creative and fun people to join us.
                        <br />Anyone who can contribute is welcome.</h3>
                        <h3>contact @ doge-1.lol</h3>

                </div>
                <div className='row' style={{alignItems: 'center', flexFlow:'column'}}>
                
                          <div className='flip'>
                          
                            <img src="images/web/doge_dance.gif" width="50px" alt="" style={{marginTop:'-5px'}} />
                            
                            </div>
                          
                        </div>
                <div className='team__container'>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='images/web/doge_team.png' alt='' width="125px" className='home__hero-img' />
                      <p style={{textAlign: 'center'}}>Business Team</p>
                      <div className='icon-row2'>
                      <div className='col'>
                            <a href="https://t.me/jessmnt"><h3><img src="images/web/telegram_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://twitter.com/doge1lol"><h3><img src="images/web/twitter_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            
                          </div>
                      </div>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                        <img src='images/web/you.png' alt='' width="125px" className='home__hero-img' />
                        <p>Community Pack</p>
                        <div className='icon-row2'>
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
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='images/web/doge_team1.png' alt='' width="125px" className='home__hero-img' />
                      <p style={{textAlign: 'center'}}>Astro Devs</p>
                      <div className='icon-row2'>
                            <div className='col'>
                            <a href="https://twitter.com/doge1lol"><h3><img src="images/web/twitter_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://t.me/doge1lol"><h3><img src="images/web/telegram_icon.png" alt="" style={{margin:'-5px'}} /></h3></a>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__container'>

              </div>
          <p className="bottom-space-md" />

              <TokenBanners />
      </div>
      
      
  );
}