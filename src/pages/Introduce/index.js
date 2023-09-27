import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useNavigate } from "react-router-dom";

import "./StyleIntroduce.scss"

export default function IntroducePage() {
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/cho-tot/lineup', { replace: true })
    }
    useEffect(() => {
        setLoading(true)
        const timeLoading = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timeLoading)
    }, [])
    return (
        <div className='introduce-page'>
            <div className='header-introduce'>Chợ chuyển nhượng World Cup 2022</div>
            <div className='info-introduce'>
                {Loading
                    ? <Spin spinning={Loading} size="large" />
                    : <div className='text-info' onClick={handleContinue}>Chạm vào màn hình để tiếp tục...</div>
                }
            </div>
        </div>
    )
}