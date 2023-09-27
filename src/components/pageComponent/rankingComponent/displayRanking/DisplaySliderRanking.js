import React, {useRef} from 'react';
import { Carousel } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import "./DisplaySliderRanking.scss"

export default function Slider() {
    const ref = useRef();
    return ( 
        <div className="form-mainSlider" >
            <Carousel dots={false} ref={ref}>
                <div> <h3 className="text-dayStyle">Hôm nay, 29/11</h3>
                </div>
                <div> <h3 className="text-dayStyle">Hôm nay, 30/11</h3>
                </div>
                <div> <h3 className="text-dayStyle">Hôm nay, 1/12</h3>
                </div>
                <div> <h3 className="text-dayStyle">Hôm nay, 2/12</h3>
                </div>
            </Carousel>
            <CaretLeftOutlined className="btn-prevSlier" onClick={()=>{ref.current.prev()}}/>
            <CaretRightOutlined className="btn-nextSlier" onClick={()=>{ref.current.next()}}/>
        </div>

    )
}