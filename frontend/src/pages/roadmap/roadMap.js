import React from 'react';
import classes from './roadMap.module.css';
import { useNavigate } from 'react-router';

const RoadMap = () => {
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossorigin="anonymous"
  />;
  
  const navigate = useNavigate();
    return (
        <div className="my-5">
            <div className={classes.layoutRoadMap}>
                <div className="col-xl-3 col-lg-6" onClick={() => navigate('detail')}>
                    <div className={`${classes.card} ${classes['l-bg-cherry']}`}>
                        <div className="card-statistic-3 p-4">
                            <div className={`${classes['card-icon']} ${'card-icon-large'}`}>
                                <i className="fas fa-shopping-cart" />
                            </div>
                            <div className="mb-4">
                                <h4 className="card-title mb-0">FrontEnd</h4>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8">
                                    <h2 className="align-items-center mb-0">
                                        3,243 <h6 className="mb-0 pb-0">số lượng tham khảo</h6>
                                    </h2>
                                </div>
                            </div>
                            <div className="progress mt-1 " data-height={8} style={{ height: 8 }}>
                                <div
                                    className="progress-bar l-bg-cyan"
                                    role="progressbar"
                                    data-width="25%"
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: '25%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6" onClick={() => navigate('detail')}>
                    <div className={`${classes.card} ${classes['l-bg-blue-dark']}`}>
                        <div className="card-statistic-3 p-4">
                            <div className={`${classes['card-icon']} ${'card-icon-large'}`}>
                                <i className="fas fa-shopping-cart" />
                            </div>
                            <div className="mb-4">
                                <h4 className="card-title mb-0">BackEnd</h4>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8">
                                    <h2 className="align-items-center mb-0">
                                        1,452 <h6 className="mb-0 pb-0">số lượng tham khảo</h6>
                                    </h2>
                                </div>
                            </div>
                            <div className="progress mt-1 " data-height={8} style={{ height: 8 }}>
                                <div
                                    className="progress-bar l-bg-cyan"
                                    role="progressbar"
                                    data-width="15%"
                                    aria-valuenow={15}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: '15%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
