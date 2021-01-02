import React from 'react';

const Header = () => {
    return (
        <section>
            <div>
                <div className="home-section img-fluid">
                    <div className="dark-overlay pt-3 ">
                        <img src={'https://i.imgur.com/kMU7XSV.png'} alt="logo" className="logo img-fluid" />
                        <div className="home-inner container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="display-4 mt-4 pad-top" id="header_content">
                                    There’s Auto-Careers Waiting For Your Skills 
                            </div>
                                    <div className="h3 mt-4 d-none d-sm-block">
                                    There’s Auto-Careers Waiting For Your Skills  
                            </div>
                                    {/* <div className="h3 mt-4">
                                    Apply To 25+ Automotive Careers Faster Than You Can Drink Your Morning Coffee...
                            </div> */}

                                    <div className="my-5 center-b">
                                        <button type="button" className="btn btn-success"><a href={'http://google.com'}>Step Into A New Auto Career</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Header;


