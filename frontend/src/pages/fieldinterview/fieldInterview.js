import React, { useState } from 'react';
import classes from './fieldInterview.module.css';
import { useNavigate } from 'react-router';

const fields = [
    { id: 1, name: 'Công nghệ thông tin' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'Quản trị kinh doanh' },
    { id: 4, name: 'Du lịch lữ hành' },
    { id: 5, name: 'Designer' },
    { id: 6, name: 'Đồ họa' },
    { id: 7, name: 'Kiến trúc' },
];

const items = {
    'Công nghệ thông tin': [
        { id: 1, name: 'Phỏng vấn FrontEnd ReactJS' },
        { id: 2, name: 'Phỏng vấn BackEnd NodeJS' },
        { id: 3, name: 'Phỏng vấn Java Mobile App' },
        { id: 4, name: 'Phỏng vấn Kotlin' },
        { id: 5, name: 'Phỏng vấn Flutter' },
        { id: 6, name: 'Phỏng vấn React Native' },
        { id: 7, name: 'Phỏng vấn Angular' },
    ],
    'Marketing': [
        { id: 1, name: 'Chuyên viên marketing' },
        { id: 2, name: 'Nghiên cứu thị trường' },
        { id: 3, name: 'Quảng bá sản phẩm' },
    ],
};

const FieldInterview = () => {
    const [step, setStep] = useState(1);
    const [field, setField] = useState('');

    const navigate = useNavigate();
    const handlePage = (field) => {
        setStep(2);
        setField(field.name);
  };
  
  const handleRoutes = () => {
    if (step === 2) {
      setStep(1);
    }
    else {
      navigate('/home')
    }
  }

  const handleMockInterview = () => {
    navigate('/mockinter');
  }

    return (
        <div className={`${classes.mockInterview}`}>
            <div className={`${classes.mockInterviewContent}`}>
                <div className={classes.iconBackMockInter}>
                    <svg
                        onClick={() => handleRoutes()}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_915_610)">
                            <path
                                d="M9.11602 1.03746e-06L10.8848 1.83588L3.01914 10L10.8848 18.1641L9.11601 20L0.366014 10.9179C-0.121486 10.4119 -0.121486 9.59131 0.366014 9.08206L9.11602 1.03746e-06Z"
                                fill="black"
                            />
                            <path d="M1.25 11.2974L20 11.2974L20 8.70256L1.25 8.70256L1.25 11.2974Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_915_610">
                                <rect width="20" height="20" fill="white" transform="translate(20 20) rotate(-180)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={classes.dropdownmock}>
                    {step === 1 && <h5 className="text-primary">Chọn lĩnh vực!</h5>}
                    {step === 2 && <h5 className="text-primary">Chọn chuyên nghành muốn phỏng vấn!</h5>}
                </div>
                <div className={classes.detailContent}>
                    <div style={{ height: 300, overflow: 'auto' }}>
                        <ul className="list-group text-center">
                            {step === 1 &&
                                fields.map((item) => (
                                    <li
                                        key={item.id}
                                        className="list-group-item"
                                        onClick={() => handlePage(item)}
                                    >
                                        {console.log(step)}
                                        {item.name}
                                    </li>
                                ))}
                            {step === 2 &&
                                items[field].map((item) => (
                                    <li
                                        key={item.id}
                                        className="list-group-item"
                                        onClick={() => handleMockInterview()}
                                    >
                                        {item.name}
                                    </li>
                                ))};
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldInterview;
