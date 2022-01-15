import React from "react"

const Contact = () => {
    const listStyle = {
        "listStyleType": "none",
        "cursor": "pointer",
        "justifyContent": "center",
    }
    return (
        <div className="container">
            <h2>Contact</h2>
            <br />
            <br />
            <div className="container h-100">
                <ul className="row " style={{ justifyContent: "center" }} >
                    <li style={listStyle} className="col-6 d-flex" >
                        <div className="row">
                            <i className="far fa-envelope fa-3x d-flex" style={{ "color": "#E53935", "justifyContent": "center" }} ></i>
                            <strong style={listStyle} className="d-flex">f.keshir25@gmail.com</strong>
                        </div>

                    </li>
                    <li style={listStyle} className="col-6 d-flex">
                        <div className="row">
                            <i className="fas fa-map-marker-alt fa-3x  " style={{ "color": "#E53935", "justifyContent": "center" }}></i>
                            <strong style={listStyle} className="d-flex">Tehran,tehran</strong>
                        </div>

                    </li>
                    <li style={listStyle} className="col d-flex mt-5">
                        <div className="row">
                            <i className="fas fa-phone fa-3x d-flex" style={{ "color": "#E53935", "justifyContent": "center" }}></i>
                            <strong style={listStyle} className="d-flex">+989034478425</strong>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Contact;