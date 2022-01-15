import React from 'react'
import '../styles/about.scss'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <h2 className='col'>About Me</h2>
                    <br />
                    <h5 className='row'>
                        <span className='year col-2 me-2'>27years</span>
                        <span className='location col-2 mx-2'>Tehran</span>
                        <span className='single col-2 mx-2'>single</span>
                    </h5>
                </div>
                <br />
                <br />
                <p>
                    I'm a front end developer.
                    I really enjoy creating new sites with up-to-date capabilities.
                    I took a step towards becoming a senior fronEnd Developer,
                    And on this path, which is about 2 years old
                    I can study undergraduate web programming at the undergraduate level
                    Obtaining a degree in Sematek training courses
                    And learn a lot to point out through the Internet.
                    <br />
                    I can also work with HTML , Css ,Js ,React etc to create a Professional site.
                </p>
            </div>
        </div>
    )
}
export default About;