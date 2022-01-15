import React from "react"
import '../styles/contact.scss'

const Contact = () => {
    
    return (
        <div className="container-fluid contact">
            <section className="title">
                <h2>Contact Me</h2>
            </section>
            <br />
            <br />
            <section className="container h-100 mt-4 content">
                <ul className="row " >
                    <li className="col-6 d-flex" >
                        <div className="row">
                            <i className="far fa-envelope fa-3x d-flex mb-3"  ></i>
                            <strong className="d-flex mb-5">f.keshir25@gmail.com</strong>
                        </div>

                    </li>
                    <li className="col-6 d-flex">
                        <div className="row">
                            <i className="fas fa-map-marker-alt fa-3x d-flex mb-3" ></i>
                            <strong className="d-flex mb-5">Tehran,tehran</strong>
                        </div>

                    </li>
                    <li className="col-6 d-flex mt-5">
                        <div className="row">
                            <i className="fas fa-phone fa-3x d-flex mb-3" ></i>
                            <strong className="d-flex">+989034478425</strong>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}
export default Contact;