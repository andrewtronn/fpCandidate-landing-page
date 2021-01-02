import React from 'react';

const Card2 = () => {
    return (
        <div className="">
            <div className="card-deck mx-4 py-5">

                <div className="card" style={{ width: "21rem" }}>
                    <img src={'https://i.imgur.com/Rvfn2KM.jpg'} alt="Card Cap" className="card-img-top" />
                    <div className="card-body cardbox">
                        <p className="card-text"><span className="font-weight-bold">Don’t waste your time… Use It Wisely! </span>Apply To 25+ Careers at once with Final Pencil faster than you can drink your morning coffee.</p>
                    </div>
                </div>


                <div className="card" style={{ width: "21em" }}>
                    <img src={'https://i.imgur.com/kdFDSLU.jpg'} alt="Card Cap" className="card-img-top" />
                    <div className="card-body cardbox">
                        <p className="card-text"><span className="font-weight-bold">Set Up Interviews, Talk To Employers, & Even “Laser Target” To Find The EXACT Career You’re Looking For!</span> The time saving tools you just can’t find anywhere else.</p>
                    </div>
                </div>


                <div className="card" style={{ width: "21rem" }}>
                    <img src={'https://i.imgur.com/KnxIlbE.jpg'} alt="Card Cap" className="card-img-top" />
                    <div className="card-body cardbox">
                        <p className="card-text"><span className="font-weight-bold">Increase Your Odds Of “Landing The One” By Applying to TONS of Careers …In a matter of seconds! </span> No more late night headaches filling out super long and draining applications that take HOURS to fill out.</p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Card2;


