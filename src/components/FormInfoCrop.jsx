import React from "react";
import "../css/formInfoCrop.css"

export default function FormInfoCrop(props){
    const{label,onChange,id,...inputProp} = props
    return (
        <div className='cropFormInput'>
            <label>{label}</label>
            <input {...inputProp} onChange={onChange}/>
        </div>
    )
}