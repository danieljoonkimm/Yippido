import React, { Component } from 'react';

import ProductImage from '../Vendor/ProductImage';

import './lookbook.scss';

class LookBook extends Component {
  constructor(props) {
    super(props);

    this.images = [
      { url: 'https://dummyimage.com/400x600/26628a/#fff' },
      { url: 'https://dummyimage.com/400x600/9b192e/#fff' },
      { url: 'https://dummyimage.com/500x600/76cc13/#fff' },
      { url: 'https://dummyimage.com/400x600/6699cc/#fff' },
    ];
  }

  render() {
    const svg = <svg viewBox="0 0 302 204.27155" height="75" width="75" version="1.1" >
      <g>
        <g transform="matrix(21.955 0 0 -21.955 -2043.1 10481)">
          <g clip-path="url(#d)">
            <g transform="translate(105.72 468.11)">
              <path d="m0 0c-0.639 0-1.018 0.327-1.047 0.798h0.611c0-0.157 0.087-0.366 0.465-0.379 0.262 0 0.407 0.157 0.407 0.275-0.029 0.183-0.262 0.196-0.494 0.236-0.262 0.038-0.465 0.091-0.611 0.156-0.203 0.105-0.32 0.328-0.32 0.563 0 0.419 0.35 0.746 0.96 0.746 0.582 0 0.96-0.301 0.988-0.759h-0.581c0 0.117-0.029 0.314-0.378 0.314-0.233 0-0.378-0.039-0.407-0.209 0-0.236 0.494-0.223 0.872-0.314 0.349-0.092 0.582-0.314 0.582-0.629 0-0.576-0.465-0.798-1.047-0.798" />
            </g>
          </g>
        </g>
        <g transform="matrix(21.955 0 0 -21.955 33.537 118.8)">
          <path d="m0 0 2.006 1.165 1.076-1.846h-2.704" />
        </g>
        <g transform="matrix(21.955 0 0 -21.955 126.15 202.12)">
          <path d="m0 0v2.33" stroke="#000" stroke-width="0.587" />
        </g>
        <g transform="matrix(21.955 0 0 -21.955 -2043.1 10481)">
          <g clip-path="url(#c)">
            <g transform="translate(93.655 469.31)">
              <path d="m0 0c0-0.366 0.32-0.667 0.668-0.667 0.379 0 0.669 0.301 0.669 0.667 0 0.353-0.29 0.667-0.669 0.667-0.348 0-0.668-0.314-0.668-0.667m0.639-1.204c-0.639 0-1.191 0.537-1.191 1.204s0.552 1.191 1.191 1.191c0.262 0 0.495-0.066 0.698-0.209v0.183h0.582v-2.316h-0.582v0.144c-0.174-0.131-0.436-0.197-0.698-0.197" />
            </g>
          </g>
        </g>
        <g transform="matrix(21.955 0 0 -21.955 197.59 133.74)">
          <path d="m0 0-2.791 4.868 2.006 1.178 3.489-6.046" />
        </g>
        <g transform="matrix(21.955 0 0 -21.955 -2043.1 10481)">
          <g clip-path="url(#b)">
            <g transform="translate(96.33 469.31)">
              <path d="m0 0c0-0.366 0.291-0.667 0.669-0.667 0.348 0 0.669 0.301 0.669 0.667 0 0.353-0.321 0.667-0.669 0.667-0.378 0-0.669-0.314-0.669-0.667m0.64-1.204c-0.669 0-1.192 0.537-1.192 1.204s0.523 1.191 1.192 1.191c0.261 0 0.494-0.066 0.698-0.209v0.981h0.581v-3.114h-0.581v0.144c-0.204-0.131-0.437-0.197-0.698-0.197" />
            </g>
          </g>
        </g>
        <g transform="matrix(21.955 0 0 -21.955 85.247 73.119)">
          <path d="m0 0 2.035 1.151 2.239-3.912h-2.123v-0.576h-0.581v0.576" />
        </g>
        <g transform="matrix(21.955 0 0 -21.955 -2043.1 10481)">
          <g clip-path="url(#a)">
            <g transform="translate(106.39 470.7)">
              <path d="m0 0c-0.146 0-0.291 0.131-0.291 0.288s0.145 0.288 0.291 0.288c0.174 0 0.291-0.131 0.291-0.288s-0.117-0.288-0.291-0.288m0 0.536c-0.146 0-0.233-0.117-0.233-0.248s0.087-0.249 0.233-0.249c0.145 0 0.232 0.118 0.232 0.249s-0.087 0.248-0.232 0.248" />
            </g>
            <g transform="translate(106.45 470.83)">
              <path d="m0 0-0.058 0.131h-0.058v-0.131h-0.044v0.314h0.131c0.029 0 0.087-0.04 0.087-0.092s-0.029-0.078-0.058-0.091l0.058-0.131m-0.116 0.274h-0.058v-0.104h0.058c0.058 0 0.058 0.013 0.058 0.052 0 0.027 0 0.052-0.058 0.052" />
            </g>
            <g transform="translate(102.55 469.31)">
              <path d="m0 0c0-0.366 0.291-0.667 0.669-0.667 0.349 0 0.668 0.301 0.668 0.667 0 0.353-0.319 0.667-0.668 0.667-0.378 0-0.669-0.314-0.669-0.667m0.639-1.204c-0.668 0-1.191 0.537-1.191 1.204s0.523 1.191 1.191 1.191c0.262 0 0.495-0.066 0.698-0.209v0.183h0.553v-2.316h-0.553v0.144c-0.203-0.131-0.436-0.197-0.698-0.197" />
            </g>
            <g transform="translate(99.877 469.31)">
              <path d="m0 0c0-0.366 0.32-0.667 0.669-0.667 0.378 0 0.669 0.301 0.669 0.667 0 0.353-0.291 0.667-0.669 0.667-0.349 0-0.669-0.314-0.669-0.667m1.338 1.963h0.581v-3.114h-0.581v0.144c-0.175-0.131-0.408-0.197-0.669-0.197-0.669 0-1.221 0.537-1.221 1.204s0.552 1.191 1.221 1.191c0.261 0 0.494-0.066 0.669-0.209v0.981z" />
            </g>
          </g>
        </g>
      </g>
    </svg>

    return (
      <div id="lookBookMain">
        <div style={{ backgroundColor: '#efefef', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-5 col-sm-5 col-md-5">
                <div className="lookbook__content">
                  {svg}

                  <h3>companyName</h3>
                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
              <div className="col-xs-7 col-sm-7 col-md-7">

                <ProductImage
                  className="col-xs-6 col-sm-6 col-md-6"
                  name={'duo'}
                  images={this.images.slice(0, 2)}
                  isViewable={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-7 col-sm-7 col-md-7">
                <div className="row" style={{ backgroundColor: '#fff', borderRadius: '8px', display: 'flex' }}>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ position: 'relative', zIndex: '40' }}>
                    <img src={this.images[ 0 ].url} alt="" className="" style={{ display: 'flex', width: '90%' }} />
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ display: 'flex' }}>
                    <div className="row" style={{ display: 'flex', flexDirection: 'column' }} >
                      <div className="col-xs-10 col-sm-10 col-md-10" style={{ position: 'relative', marginLeft: '50px', zIndex: '10' }} >
                        <img src={this.images[ 3 ].url} alt="" className="" style={{ display: 'flex' }} />

                      </div>
                      <div className="col-xs-9 col-sm-9 col-md-9" style={{ marginLeft: '-80px', marginTop: '-295px', position: 'relative', zIndex: '20' }}>
                        <img src={this.images[ 1 ].url} alt="" className="" style={{ display: 'flex' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-5 col-sm-5 col-md-5">
                <div className="lookbook__content">

                  {svg}

                  <h3>companyName</h3>
                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#efefef', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-5 col-sm-5 col-md-5">
                <div className="lookbook__content">

                  {svg}

                  <h3>companyName</h3>
                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
              <div className="col-xs-7 col-sm-7 col-md-7">
                <div className="row" style={{ backgroundColor: '#fff', borderRadius: '8px', display: 'flex' }}>
                  <div className="col-xs-7 col-sm-7 col-md-7">
                    <img src={this.images[ 2 ].url} alt="" className="" style={{ display: 'flex' }} />
                  </div>
                  <div className="col-xs-5 col-sm-5 col-md-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="row" style={{ display: 'flex' }}>
                      <div className="col-xs-12 col-sm-12 col-md-12" >
                        <img src={this.images[ 1 ].url} alt="" className="" style={{ padding: '30px 20px' }} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '0 20px' }}>
                <ProductImage
                  className="col-xs-6 col-sm-6 col-md-6"
                  name={'duo'}
                  images={this.images.slice(0, 2)}
                  isViewable={false}
                />
                <div className="lookbook__content">
                  {svg}

                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '0 10px' }}>
                <div className="row" style={{ backgroundColor: '#fff', borderRadius: '8px', display: 'flex' }}>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ position: 'relative', zIndex: '40' }}>
                    <img src={this.images[ 0 ].url} alt="" className="" style={{ display: 'flex', width: '97%' }} />
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ display: 'flex' }}>
                    <div className="row" style={{ display: 'flex', flexDirection: 'column' }} >
                      <div className="col-xs-11 col-sm-11 col-md-11" style={{ position: 'relative', marginLeft: '50px', zIndex: '10' }} >
                        <img src={this.images[ 3 ].url} alt="" className="" style={{ display: 'flex' }} />

                      </div>
                      <div className="col-xs-9 col-sm-9 col-md-9" style={{ marginLeft: '-50px', marginTop: '-197px', position: 'relative', zIndex: '19' }}>
                        <img src={this.images[ 1 ].url} alt="" className="" style={{ display: 'flex' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lookbook__content">
                  {svg}

                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '0 20px' }}>
                <ProductImage
                  className="col-xs-6 col-sm-6 col-md-6"
                  name={'duo'}
                  images={this.images.slice(0, 2)}
                  isViewable={false}
                />
                <div className="lookbook__content">
                  {svg}

                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '0 10px' }}>
                <div className="row" style={{ backgroundColor: '#fff', borderRadius: '8px', display: 'flex' }}>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ position: 'relative', zIndex: '40' }}>
                    <img src={this.images[ 0 ].url} alt="" className="" style={{ display: 'flex', width: '97%' }} />
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ display: 'flex' }}>
                    <div className="row" style={{ display: 'flex', flexDirection: 'column' }} >
                      <div className="col-xs-11 col-sm-11 col-md-11" style={{ position: 'relative', marginLeft: '50px', zIndex: '10' }} >
                        <img src={this.images[ 3 ].url} alt="" className="" style={{ display: 'flex' }} />

                      </div>
                      <div className="col-xs-9 col-sm-9 col-md-9" style={{ marginLeft: '-50px', marginTop: '-197px', position: 'relative', zIndex: '19' }}>
                        <img src={this.images[ 1 ].url} alt="" className="" style={{ display: 'flex' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lookbook__content">
                  {svg}

                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '0 20px' }}>
                <ProductImage
                  className="col-xs-6 col-sm-6 col-md-6"
                  name={'duo'}
                  images={this.images.slice(0, 2)}
                  isViewable={false}
                />
                <div className="lookbook__content">
                  {svg}

                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '0 10px' }}>
                <div className="row" style={{ backgroundColor: '#fff', borderRadius: '8px', display: 'flex' }}>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ position: 'relative', zIndex: '40' }}>
                    <img src={this.images[ 0 ].url} alt="" className="" style={{ display: 'flex', width: '97%' }} />
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6" style={{ display: 'flex' }}>
                    <div className="row" style={{ display: 'flex', flexDirection: 'column' }} >
                      <div className="col-xs-11 col-sm-11 col-md-11" style={{ position: 'relative', marginLeft: '50px', zIndex: '10' }} >
                        <img src={this.images[ 3 ].url} alt="" className="" style={{ display: 'flex' }} />

                      </div>
                      <div className="col-xs-9 col-sm-9 col-md-9" style={{ marginLeft: '-50px', marginTop: '-197px', position: 'relative', zIndex: '19' }}>
                        <img src={this.images[ 1 ].url} alt="" className="" style={{ display: 'flex' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lookbook__content">
                  {svg}

                  <h2>Natural Beauty</h2>
                  <div>-----</div>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <div>-----</div>
                  <button>View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LookBook;