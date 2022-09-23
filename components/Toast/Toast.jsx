import React, { useEffect } from 'react'

const Toast = ({visible, setVisible, text}) => {
    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 5000);
    }, [visible]);
  return (
    <div className={`z-10 toast toast-top toast-start duration-300 ease-in-out ${!visible ? "hidden" : ""}`}>
    <div className="alert alert-info">
      <div>
        <span>{text}</span>
      </div>
    </div>

  </div>
  )
}

export default Toast