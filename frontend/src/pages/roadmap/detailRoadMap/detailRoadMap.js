import React from 'react';
import classes from './detailRoadMap.module.css';

const DetailRoadMap = () => {
    return (
        <div className={classes.formDetail}>
            <h3 className={classes.titleDetail}>
                Những kiến thức cần thiết cho vị trí Intern Frontend Developer bao gồm:
            </h3>
            <div className={classes.detailConent}>
                <p>HTML: Kiến thức về cấu trúc và cách sử dụng các thẻ HTML để xây dựng trang web.</p>
                <p>CSS: Kiến thức về cách sử dụng CSS để thiết kế và tạo kiểu cho các thành phần trên trang web.</p>
                <p>
                    JavaScript: Kiến thức về ngôn ngữ lập trình JavaScript để tạo các hiệu ứng, tương tác và tính năng
                    động trên trang web.
                </p>
                <p>
                    Frameworks: Kiến thức về các framework phổ biến trong lập trình frontend như React, Vue.js hoặc
                    Angular để phát triển các ứng dụng web phức tạp hơn.
                </p>
                <p>
                    Responsive design: Kiến thức về thiết kế đáp ứng (responsive design) để tối ưu hóa trải nghiệm người
                    dùng trên các thiết bị khác nhau.
                </p>
                <p>Testing và debugging: Kiến thức về kiểm thử và gỡ lỗi trong quá trình phát triển trang web.</p>
                <p>
                    Version control: Kiến thức về hệ thống quản lý phiên bản, ví dụ như Git để quản lý mã nguồn và làm
                    việc với nhóm.
                </p>
            </div>
        </div>
    );
};

export default DetailRoadMap;
