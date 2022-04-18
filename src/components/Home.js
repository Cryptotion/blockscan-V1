import React from 'react'
import img from './1.png'

export const Home = () => {
  return (
    <div>

    <div style={{background: "black", width: "100%", height: "300px"}}>
    <div className="container" style= {{paddingTop: "80px"}}>
      <h4 style={{color: "blueviolet"}}>
        All Chain Explorer
      </h4>
      <div style= {{width: "115px", float: "left"}}>
        <select className="form-select" aria-label="Default select example">
          <option selected>All Filters</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div style= {{width: "70%"}}>
        <form className="d-flex">
          <input className="form-control me-1" type="search" placeholder="Search by Address / Txn Hash / Block / Token"
            aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
    </div>


    <div className="container" style= {{marginTop: "-40px",  background: "white", height: "200px"}}>
    <div style= {{float: "left",  width: "75%" , padding: 0 , background: "white"}}>
        <div className="row row-cols-2 row-cols-md-3 g-4">

        {/* <!-- BNB --> */}
        <div className="col">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">BNB PRICE</h6>
                <p className="card-text">$541.54 @ 0.008758 BTC <span style={{color: "green"}}>(+2.63%)</span></p>
            </div>
            </div>
        </div>

        <div className="col">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">ETH PRICE</h6>
                <p className="card-text">$541.54 @ 0.008758 BTC <span style={{color: "green"}}>(+2.63%)</span></p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">FTM PRICE</h6>
                <p className="card-text">$541.54 @ 0.008758 BTC <span style={{color: "green"}}>(+2.63%)</span></p>
            </div>
            </div>
        </div>

        <div className="col">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">AVAX PRICE</h6>
                <p className="card-text">$541.54 @ 0.008758 BTC <span style={{color: "green"}}>(+2.63%)</span></p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">MATIC PRICE</h6>
                <p className="card-text">$541.54 @ 0.008758 BTC <span style={{color: "green"}}>(+2.63%)</span></p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">ONE PRICE</h6>
                <p className="card-text">$541.54 @ 0.008758 BTC <span style={{color: "green"}}>(+2.63%)</span></p>
            </div>
            </div>
        </div>
        </div>
    </div>



    {/* <!-- charts  --> */}

    <div style= {{float: "left", width: "25%",  marginleft: "5px", marginright: "-5px"}}>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src={img} className="d-block w-100" style={{width:  "90% "}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>First</h5>
                <p></p>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={img} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Second </h5>
                <p></p>
            </div>
            </div>
            <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Third </h5>
                <p></p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    </div>

    <div className="container" style= {{marginTop: "40px"}}>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <h6 className="card-header">BSC Latest Transactions</h6>
            <div className="card-body">
              <a className="card-text anyClass">0x685B1ded8013785d6623CC18D214320b6Bb64759
                <br/>
                0x685B1ded8013785d6623CC18D214320b6Bb64759 </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <h6 className="card-header">FTM Latest Transactions</h6>
            <div className="card-body">
              <a className="card-text anyClass">0x685B1ded8013785d6623CC18D214320b6Bb64759
                <br/>
                0x685B1ded8013785d6623CC18D214320b6Bb64759 </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ETH and AVAX Transactions section  --> */}
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <h6 className="card-header"></h6>
            <div className="card-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseETH" aria-expanded="false" aria-controls="collapseETH">
                  ETH Latest Transactions
                </button>
              </p>
              <div className="collapse" id="collapseETH">
                <div className="card card-body">
                  <p className="card-text anyClass">0x685B1ded8013785d6623CC18D214320b6Bb64759 <br/>
                    0x685B1ded8013785d6623CC18D214320b6Bb64759</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <h6 className="card-header"></h6>
            <div className="card-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAVAX" aria-expanded="false" aria-controls="collapseAVAX">
                  AVAX Latest Transactions
                </button>
              </p>
              <div className="collapse" id="collapseAVAX">
                <div className="card card-body">
                  <p className="card-text anyClass">0x685B1ded8013785d6623CC18D214320b6Bb64759 <br/>
                    0x685B1ded8013785d6623CC18D214320b6Bb64759 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <h6 className="card-header"></h6>
            <div className="card-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMATIC" aria-expanded="false" aria-controls="collapseMATIC">
                  MATIC Latest Transactions
                </button>
              </p>
              <div className="collapse" id="collapseMATIC">
                <div className="card card-body">
                  <p className="card-text anyClass">0x685B1ded8013785d6623CC18D214320b6Bb64759 <br/>
                    0x685B1ded8013785d6623CC18D214320b6Bb64759</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <h6 className="card-header"></h6>
            <div className="card-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseONE" aria-expanded="false" aria-controls="collapseONE">
                  ONE Latest Transactions
                </button>
              </p>
              <div className="collapse" id="collapseONE">
                <div className="card card-body">
                  <p className="card-text anyClass">0x685B1ded8013785d6623CC18D214320b6Bb64759 <br/>
                    0x685B1ded8013785d6623CC18D214320b6Bb64759 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>


    

  )
}
