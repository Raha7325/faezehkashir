import React from "react"
import '../styles/contact.scss'

const Contact = () => {
    const listStyle = {
        "listStyleType": "none",
        "justifyContent": "center",
        
    }
    const iconStyle={
        "justifyContent": "center",
        "cursor":"pointer"
        
    }
    return (
        <div className="container">
            <h2>Contact Me</h2>
            <br />
            <br />
            <div className="container h-100 mt-4">
                <ul className="row " style={{ justifyContent: "center" }} >
                    <li style={listStyle} className="col-6 d-flex" >
                        <div className="row">
                            <i className="far fa-envelope fa-3x d-flex mb-3" style={iconStyle} ></i>
                            <strong style={iconStyle} className="d-flex mb-5">f.keshir25@gmail.com</strong>
                        </div>

                    </li>
                    <li style={listStyle} className="col-6 d-flex">
                        <div className="row">
                            <i className="fas fa-map-marker-alt fa-3x d-flex mb-3" style={iconStyle}></i>
                            <strong style={iconStyle} className="d-flex mb-5">Tehran,tehran</strong>
                        </div>

                    </li>
                    <li style={listStyle} className="col d-flex mt-5">
                        <div className="row">
                            <i className="fas fa-phone fa-3x d-flex mb-3" style={iconStyle}></i>
                            <strong style={iconStyle} className="d-flex">+989034478425</strong>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Contact;