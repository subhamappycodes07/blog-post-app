import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../context/AuthContext';
const AlertBox = ({ bgcolor, color, message }) => {
    const [show, setShow] = useState('flex')
    const { setLoginError, setSignUpFieldErr, setLogInFieldErr, setPassReq, setEmailReq, setLengthError } = useAuth()
    const handleShow = () => {
        setShow('none')
        setSignUpFieldErr(false)
        setLoginError(false)
        setLogInFieldErr(false)
        setPassReq(false)
        setEmailReq(false)
        setLengthError(false)

    }
    return (
        <>
            <div style={{
                display: show,
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
                backgroundColor: bgcolor,
                color: color,
                padding: '10px',
                borderRadius: '5px',
                transition: 'display 0.5s',
                marginTop: '15px',
                width: '21%'
            }}>
                <p>{message}</p>
                <CloseIcon style={{ cursor: 'pointer' }} onClick={handleShow} />
            </div>
        </>
    )
}

export default AlertBox