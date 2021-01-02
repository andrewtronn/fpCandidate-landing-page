import React from 'react';

const Section1 = () => {
    return (


        <div className="bg-light text-dark pt-5">
            <div className="container">
                <div className="display-4 text-center" id="header_content1">
                    So… What’s Final Pencil?
                </div>
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={'https://i.imgur.com/Gcu5oym.jpg'} alt="section" className="img-fluid rounded mb-3" />

                    </div>
                    <div className="col-md-6">
                        <div className="d-flex">
                            <div className="p-2 align-self-start">
                                <i className="fas fa-check fa-sm"></i>
                            </div>
                            <div className="p-2 align-self-end">
                                <span className="font-weight-bold">The Best Automotive Career Platform: </span> Final Pencil is an all-in-one automotive hiring platform where dealerships & candidates meet. We cut out the time consuming effort it takes to Interview, Filter Opportunities, & Apply so you can do more of what matters and get paid sooner.
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2 align-self-start">
                                <i className="fas fa-check fa-sm"></i>
                            </div>
                            <div className="p-2 align-self-end">
                                <span className="font-weight-bold">Smart Apply Tech = Less Hassle & More Interviews:</span> Use Our 6-Step Smart Apply System To Practically Automate Your Career Hunt! Get your name our there quicker to hundreds of dealers in just a few clicks.
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2 align-self-start">
                                <i className="fas fa-check fa-sm"></i>
                            </div>
                            <div className="p-2 align-self-end">
                                <span className="font-weight-bold">Designed By Automotive Experts: </span>Years of Car Dealership Experience all combined to achieve one goal… Get you as many interviews as possible with the least amount of time or hassle.
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
}

export default Section1;


