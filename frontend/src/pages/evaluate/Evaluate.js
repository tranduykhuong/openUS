import React, { useEffect, useState } from 'react';
import classes from './Evaluate.module.css';
import axios from 'axios';

const items = [
    { id: 1, name: 'Công nghệ thông tin' },
    { id: 2, name: 'HTML: Kiến thức về cấu trúc và cách sử dụng các thẻ HTML để xây dựng trang web.' },
    { id: 3, name: 'CSS: Kiến thức về cách sử dụng CSS để thiết kế và tạo kiểu cho các thành phần trên trang web.' },
    {
        id: 4,
        name: 'Frameworks: Kiến thức về các framework phổ biến trong lập trình frontend như React, Vue.js hoặc Angular để phát triển các ứng dụng web phức tạp hơn.',
    },
    { id: 5, name: 'Testing và debugging: Kiến thức về kiểm thử và gỡ lỗi trong quá trình phát triển trang web.' },
    {
        id: 6,
        name: 'Version control: Kiến thức về hệ thống quản lý phiên bản, ví dụ như Git để quản lý mã nguồn và làm việc với nhóm.',
    },
];

const Evaluate = () => {
    const [evaluate, setEvaluate] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/v1/interview/64319cd7c64f0e54243ab499').then((res) => {
            console.log(res.data.data.reviews);
            setEvaluate(res.data.data.reviews);
        });
    }, []);
    return (
        <div className={classes.formDetail}>
            <h3 className={classes.titleDetail}>
                Những kiến thức cần thiết cho vị trí Intern Frontend Developer bao gồm:
            </h3>
            <div className={classes.detailConent}>
                <div style={{ height: 500, overflow: 'auto' }}>
                    <ul className="list-group text-center" style={{ maxHeight: '300px', overflow: 'auto' }}>
                        {evaluate.map((item, index) => (
                            <li key={index} className="list-group-item">
                                {item.feedback}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Evaluate;
