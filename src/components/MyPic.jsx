import React from "react"
import Picture from '../img/image.jpg';


const MyPic = () => {
    let linkdin = "https://www.linkedin.com/in/faezehkeshir"
    let github = "https://github.com/Raha7325"

    return (
        <>
            <img
                className="w-100 h-100 "
                style={{ 'objectFit': 'cover' }}
                src={Picture}
                alt="my_picture"
            />
            <ul className="d-flex" style={{ "position": "absolute", "bottom": "3%" }}>
                <li className="px-2" style={{ "listStyleType": "none" }}>
                    <a href={linkdin} target="_blank">
                        <i className="fab fa-linkedin fa-2x text-white  "></i>
                    </a>
                </li>
                <li className="px-2" style={{ "listStyleType": "none" }}>
                    <a href={github} target="_blank">
                        <i className="fab fa-github fa-2x text-white  "></i>
                    </a>
                </li>
            </ul>
        </>
    )
}
export default MyPic;