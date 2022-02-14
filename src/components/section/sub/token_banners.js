import React from 'react';

export function TokenBanners() {
  return (
      <div className='container'>
          <div className='row'>
                <div to='' className='banner__wrapper'>
                  <div to='' className='banner__container'>
                     <div className='banner__container-card'>
                        <a href='https://pancakeswap.finance/swap?outputCurrency=0xA957fA7a10a5b93F363181F7e647aC7Af7c977D8'>
                          <img src='images/web/pancakeswap.png'  width="125px" alt=''  />
                        </a>
                      </div>
                      <div className='banner__container-card'>
                        <a href='https://bscscan.com/token/0xA957fA7a10a5b93F363181F7e647aC7Af7c977D8'>
                          <img src='images/web/bsc.png'  width="125px" alt=''  />
                        </a>
                      </div>
                      <div className='banner__container-card'>
                        <a href='https://www.dextools.io/app/bsc/pair-explorer/0xA957fA7a10a5b93F363181F7e647aC7Af7c977D8'>
                          <img src='images/web/dext.png'  width="125px" alt=''  />
                        </a>
                      </div>

                      <div className='banner__container-card'>
                        <a href='https://poocoin.app/tokens/0xA957fA7a10a5b93F363181F7e647aC7Af7c977D8'>
                          <img src='images/web/poocoin.png' width="125px" alt=''  />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
  );
}