import React from "react";
import  "../css/cropRecomendation.css"
import Lottie from "lottie-react";
import bg from "../lottie/89980-background-polygon.json";
import { useState ,useEffect} from "react";
import FormInfoCrop from "../components/FormInfoCrop.jsx"
import LoadingAnimation from '../components/LoadingAnimation';
import axios from 'axios';


export default function CropRecomendation() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {

        setTimeout(()=>{
            setLoading(false);
        },1500)
    });

    const [btnloding, setbtnloding] = useState(false);



    const [values, setValues] = useState({
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        temperature: "",
        humidity: "",
        ph: "",
        rainfall: "",
      });

      const inputs = [
        {
          id: 1,
          name: "nitrogen",
          type: "number",
          placeholder: "Nitrogen",
          label: "Nitrogen"
        },
        {
          id: 2,
          name: "phosphorus",
          type: "number",
          placeholder: "Phosphorus",
          label: "Phosphorus"
        },
        {
          id: 3,
          name: "potassium",
          type: "number",
          placeholder: "Potassium",
          label: "Potassium"
        },
        {
          id: 4,
          name: "temperature",
          type: "number",
          placeholder: "Temperature",
          label: "Temperature"
        },
        {
          id: 5,
          name: "humidity",
          type: "number",
          placeholder: "Humidity",
          label: "Humidity"
        },
        {
          id: 6,
          name: "ph",
          type: "number",
          placeholder: "Ph",
          label: "Ph"
        },
        {
          id: 7,
          name: "rainfall",
          type: "number",
          placeholder: "Rainfall",
          label: "Rainfall"
        }
      ]

      const FormComponet = () => {
        return (
          <div className='body'>
            <form onSubmit={handleSubmit}>
              <h1>Crop Recomendation</h1>
              {inputs.map((input) => (
                <FormInfoCrop key={input.id} {...input} value={values[input.name]} onChange={onChange} />
              ))}
              <button>{btnloding?"Loading...":"Submit"}</button>
            </form>
          </div>)
      }

      const handleSubmit = async (event) => {

        event.preventDefault();
        setbtnloding(true)
        const { data } = await axios.post(`https://crop-prediction-s82v.onrender.com/predict`, { nitrogen: Number(values.nitrogen), phosphorus: Number(values.phosphorus), potassium: Number(values.potassium), temperature: Number(values.temperature), humidity: Number(values.humidity), ph: Number(values.ph), rainfall: Number(values.rainfall) })
        setbtnloding(false)
        alert(`You should plant ${data.result} in your field`);
      }

      const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
      }


    return(
        <>
        {loading&&<LoadingAnimation/>}
        {
            !loading &&
        <div className="crop-container">
            <Lottie animationData={bg} loop={true} className="crop-container-bg"/>
            <Lottie animationData={bg} loop={true} className="crop-container-bg2"/>
            <div className="form-container">
                {FormComponet()}
            </div>
        </div>
}
        </>
    );
}