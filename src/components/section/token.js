import React from 'react';
import PieChart from './sub/dounuts';
import { TokenBanners } from './sub/token_banners';


export const data = {
  labels: ['PancakeSwap', 'Dev', 'Marketing', 'Advisors'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Token() {
    return (
        
        <div className='container'>
        <p className="bottom-space-sm" />
        <div className='icon-row'>
                            <div className='col'>
                            <a href="https://t.me/doge1_token"><h3><img src="images/web/telegram_icon.png" alt="" style={{margin:'5px'}} /></h3></a>
                            </div>
                            <div className='col'>
                            <a href="https://twitter.com/doge1lol"><h3><img src="images/web/twitter_icon.png" alt="" style={{margin:'5px'}} /></h3></a>
                            </div>
                          </div>
              <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center', letterSpacing: '0.5em'}}>
              <h3 style={{fontSize: '20px', padding: '5px 0px 5px 0px', opacity:1}}>WE ARE READY</h3>
        <a href={'https://twitter.com/elonmusk/status/1391523807148527620'}>
        <img src='images/web/tweet.jpg'  width="350px" alt=''  />
        </a>
          
        </div>
        <p className="bottom-space-sm" />
        <TokenBanners />
        <p className="bottom-space-sm" />

          <div className='token__section'>
            <div className='token__wrapper'>
              <div className="token__container-card">
                <div className="token__container-cardInfo" style={{height:'200px'}}>
                <p className='bottom-space-sm' />
                    <div className='row' style={{flexFlow:'column'}}>
                    <h2 style={{fontSize: '35px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em'}}>
                    LIGHTPAPER
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'5px'}}>
                        ↡
                        </h2>
                    </div>
                    <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
                    <img src='images/web/bsc1.png'  width="125px" alt=''  />
                    <a href={'https://bscscan.com/token/0xA957fA7a10a5b93F363181F7e647aC7Af7c977D8'}>
                      <h3 style={{fontSize: '10px', margin: '5px 0px 0px 0px', opacity:1}}>0xA957fA7a10a5b93F363181F7e647aC7Af7c977D8</h3>
                    </a>
                    <h3 style={{fontSize: '12px', padding: '5px 0px 5px 0px', opacity:1}}>BEP20 standard</h3>
                    </div>
                  </div>
                  <p className='bottom-space-md' />
                   <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                        $DOGE-1 is on a trajectory to bring passive DOGECOIN income to the masses.  
                        Decentralized finance, which utilizes technologies to remove
                        intermediaries, middlemen, and banks from financial markets, 
                        are complicated systems to enter into.
                        $DOGE-1 primary goal is to make it simple to 
                        start earning passive income without having to understand the backend of the DeFi world.
                        The first step towards achieving that goal was 
                        to create the $DOGE-1 token.
                        $DOGE-1 pays dividends in an already established token instead of our own. 
                        Our dividends are paid out in DOGECOIN (BNB PEGGED 1:1).The rate of Crypto adoption in the world is growing, 
                        but the percentage of the world’s population who are users is still very small.

                        We have developed an app that is clean, clear and simple to use. 
                        It will revolutionize the DeFi space and foster adoption of crypto in a safe, secure, 
                        easy and rewarding way.  

                        Once the App is released, we will continue to add features to 
                        further empower people and give them control over their financial situations.
                        <br />
                        </h2>
                        
                    </div>
                  </div>
                  <div className='bottom-space-xsm' />
                  <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '30px', fontWeight: '800', textAlign: 'center'}}>
                    FAIR&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '35px',fontWeight: '500',textAlign: 'center'}}>
                            &emsp;LAUNCH
                    </h2>
                  </div>
                <div className="token__container" style={{flexFlow: 'column', width: '80vw', marginTop:'-10px'}}>
                <div className='row' style={{flexFlow:'column'}}>
                <h2 style={{fontSize: '20px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em'}}>
                    DOGE-1 TOKENOMICS
                        </h2>
                    <h3 style={{fontSize: '18px', textAlign: 'center'}}>15% BUY / 20% SELL
                    <br /> slippage ≥ 15%</h3>
                    </div>
                  </div>
                  <div className='bottom-space-sm' />
                  <div className='token__container'>
                  <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                  <div className='bottom-space-sm' />

                      <h1>5%</h1>
                        <h2 style={{marginTop:'-25px'}}>POOL</h2>
                        <p style={{textAlign:'center'}}>3% of every transaction is allocated to maintaining a stable liquidity pool
                          keeping your investments sustainable. 2% is sent to the DOGE-1 Reserve Pool via the Doge-1 ecosystem</p>
                      </div>
                    </div>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                  <div className='bottom-space-sm' />

                      <h1>6%</h1>
                        <h2 style={{marginTop:'-25px'}}>REWARDS</h2>
                        <p style={{textAlign:'center'}} >6% of every transaction is taken and auto redistributed to all holders. 
                          Hold $DOGE-1 tokens, and keep earning $DOGECOIN forever! 
                          </p>
                      </div>
                    </div>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                  <div className='bottom-space-sm' />

                        <h1>4%</h1>
                        <h2 style={{marginTop:'-25px'}}>ECOSYSTEM</h2>
                        <p style={{textAlign:'center'}} >4% of every transaction is split allocated to Marketing, Development and community fund.  
                          This allows us to fuel our most ambitious projects in service of further rewarding our community.</p>
                      </div>
                    </div>
                    </div>
                  <div className='bottom-space-md' />
                  
                  <img src='images/web/doge_spin.gif' alt='' width="100px"  />

                  <div className='token__wrapper'>
                      <h3 style={{fontSize: '17px', margin: '10px 0px -35px 0px', opacity:1}}>TOTAL SUPPLY</h3>
                  </div>
                  <div className='bottom-space-sm' />
                  
                  <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '30px', fontWeight: '800', textAlign: 'center'}}>
                    100&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '35px',fontWeight: '500',textAlign: 'center'}}>
                            &emsp;BILLION
                    </h2>
                  </div>
                  <div className='mobile-shrink'>
                  <PieChart
                          data={[{ key: "PancakeSwap: 55%", value: 55 }, 
                          { key: "Burned: 35%", value: 35 },
                          { key: "DOGE-1 Listing Reserve: 5%", value: 5 },
                          { key: "Ecosystem/Marketing Fund: 3%", value: 3 },
                          { key: "Development Fund: 2%", value: 2 }]}
                          label="✩ DOGE-1 ALLOCATION ✩"
                        />
                  </div>
                  <div className='bottom-space-md' />
                  <div className='row' style={{flexFlow: 'column', alignItems:'center'}}>
                      <h3 style={{fontSize: '17px', margin: '0px 0px 0px 0px', opacity:1}}>HODL MIN* 2 MILLION $DOGE-1</h3>
                      <h3 style={{fontSize: '15px', margin: '0px 0px 0px 0px', opacity:1}}>*to receive $DOGE rewards</h3>
                  </div>
                  <div className='bottom-space-sm' />
                <div className='row'>
                  <div className="tree">
                    <ul>
                      <li>
                        <a href="/#">
                          <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                          $DOGE-1
                          <br /> Tokenomic
                          <br /> Tax
                          </h3>
                        </a>
                        <ul>
                          <li>
                            <a href="/#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              5% 
                              <br />Pool
                              </h3>
                            </a>  
                            <ul>
                              <li>
                              <a href="/#">
                                <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  3%
                                <br />PancakeSwap 
                                <br />LP
                                <br />
                                </h3>
                              </a>  
                              </li>
                              <li>
                              <a href="/#">
                                <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  2% 
                                  <br />Reserve 
                                  <br />Pool
                                  <br />
                                </h3>
                              </a>  
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              7% 
                              <br />Reflections
                              </h3>
                            </a>  
                            <ul>
                              <li>
                                <a href="/#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  6% 
                                  <br />DOGE
                                  <br />Reflections
                                  </h3>
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  1% 
                                  <br />EcoCommunity
                                  <br />Drops
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              3% 
                              <br />Marketing
                              </h3>
                            </a>  
                            <ul>
                            <li>
                                <a href="/#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  2% 
                                  <br />Marketing
                                  <br />Fund
                                  </h3>
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  1% 
                                  <br />Development
                                  <br />Fund
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>    
                
                <p className="bottom-space-sm" />

                    <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '500', textAlign: 'center', letterSpacing:'8px'}}>
                      WHY CHOOSE DOGE-1
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'-10px'}}>
                        ✰ WE'RE PROGRAMMED TO HIT $1 ✰
                        <br />HERE'S HOW WE SHINE A BRIGHTER FUTURE
                        </h2>
                    </div>
                    <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      Dividends: 6% of every buy/sell is taken and redistributed to our holders. Hold $DOGE-1 tokens and earn DOGECOIN (BNB PEGGED) forever. 
                      A Minimum of 20 MILLION tokens is required in order to receive rewards.
                      <br /><br />
                      Buy Back / Marketing Wallet: 
                      In the time when our token price drops our team will use the buyback wallet in addition to manual burns to raise and maintain the currency on an upward trend  
                      When is no need for buyback, the funds are being used for marketing.
                      <br /><br />
                      Auto Pay: You don’t need to claim your earned DOGECOIN. 
                      It’s automatically sent to your wallet. 
                      Note: in periods of lower volume this may take longer, but you always receive your DOGECOIN.
                      <br /><br />
                      Secured: The automatic liquidity system helps create a price floor (stability).
                      Initial Liquidity Provided is locked with DXLock.
                      The smart contract and it's forks being audited by TechRate, and currently onboarding for Certik Audit with 12 months of SkyNet. 
                      Our expereinced crypto team and code dogenauts will ensure the continuos growth of this project
                        <br />
                        </h2>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                        
                    </div>

                  </div>
                  <div className='bottom-space-sm' />

              </div>
            </div>
          </div>
          <p className="bottom-space-sm" />
                <TokenBanners />
        </div>
    );
}