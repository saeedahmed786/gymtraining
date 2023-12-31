import React from 'react'
import LoadingIcon from "../../assets/loading.gif"

const Loading = () => {
    return (
        <div className="loading">
            <img src={LoadingIcon} alt="Spinning Tom Nook Loading Icon" width="68" />
        </div>
    )
}

export default Loading;
