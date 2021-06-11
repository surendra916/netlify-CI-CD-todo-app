import React from 'react'
import { Link } from 'react-router-dom'



function AboutComponent() {
    return (
        <div>
            
            <div className="col-lg-8 mx-auto p-3 py-md-5">
                    <header className="d-flex align-items-center pb-3 mb-5 mx-auto border-bottom">
                    <Link to="/about" className="d-flex align-items-center text-dark text-decoration-none">
                        <img alt="Error Loading!!" src="https://img.icons8.com/bubbles/100/000000/about.png"/>
                        <span className="fs-4 mx-auto" style={{
                            fontFamily : 'cursive'
                        }}>About the Technology </span>
                        </Link>
                    </header>

                <main>
                    <h1>Tech Info</h1>
                        <p className="fs-5 col-md-8 display mx-auto" style={{
                            fontFamily : 'cursive'
                        }}>This Todo Application uses Below Technologies</p>
                        
                        <div className="mb-5">
                        <h3 style={{
                            fontFamily : 'cursive'
                        }}>*React as a Front end Framework / Component  Library</h3>
                        <h3 style={{
                            fontFamily : 'cursive'
                        }}>*React Router for Routing</h3>
                        <h3 style={{
                            fontFamily : 'cursive'
                        }}>*Context API for State Management </h3>
                        </div>

                        <hr  />
                </main>

                <footer className="d-flex align-items-center pb-3 mb-5 border-bottom">
                        <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <img alt="Eroro " src="https://img.icons8.com/flat-round/64/000000/back.png"/>
                        <span style={{
                            fontFamily : 'cursive'
                        }} className="fs-4">&nbsp;&nbsp; Back to Home !! </span>
                        </Link>
                </footer>

            </div>



        </div>
    )
}

export default AboutComponent
