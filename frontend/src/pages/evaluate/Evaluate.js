import React, { useEffect, useState } from 'react';
import classes from './Evaluate.module.css';
import axios from 'axios';

const Evaluate = ({evaluate}) => {
    // const [evaluate, setEvaluate] = useState([]);
    console.log(evaluate);

    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:5000/api/v1/interview/${items}`).then((res) => {
    //         console.log(res.data.data.reviews);
    //         setEvaluate(res.data.data.reviews);
    //     });
    // }, []);
    return (
        <div className={classes.formDetail}>
            <h3 className={classes.titleDetail}>
                Những kiến thức cần thiết cho vị trí Intern Frontend Developer bao gồm:
            </h3>
            <div className={classes.detailConent}>
                <div style={{ height: 500, overflow: 'auto' }}>
                    <ul className="list-group text-center px-4 py-3" style={{ maxHeight: '300px', overflow: 'auto' }}>
                        {evaluate.map((item, index) => {
                            if (index > 0) {
                                return (
                                    <li key={index} className="list-group-item p-4">
                                        {item.feedback}
                                    </li>
                                )
                            }
                            
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Evaluate;
