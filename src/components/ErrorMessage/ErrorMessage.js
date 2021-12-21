import React from 'react';

const ErrorMessage = ({children}) => {
    return (
        <div
        style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: "orangered",
            textAlign: "center",
            color: "white"
        }}
        >
           {children} 
        </div>
    );
};

export default ErrorMessage;