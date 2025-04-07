import React from 'react'
import './LetsTalk.css'
import { div } from 'framer-motion/client'
export default function LetsTalk() {
    return (
        <div className='bg-white'>
            <div className='container bg-white'>
                <div className='row col-12'>
                    <div className='col-12'>
                        <div className='lets-talk'>
                            <h2 className=''>Let's talk.</h2>
                        </div>
                    </div>
                    <div className='d-flex video-container '>
                        <div className='col-2 f d-flex justify-content-end'>
                            <ul className='d-flex flex-column'>
                                <li className='d-flex justify-content-start'><a href="#">Linkedln</a></li>
                                <li className='d-flex justify-content-start'><a href="#">Twitter</a></li>
                                <li className='d-flex justify-content-start'><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                        <div className='col-5 d-flex justify-content-space-between videos'>
                            <div className='video-box'>
                                <video src="https://cdn.sanity.io/files/y63jgrcb/production/652489ddcd735831f9c6949b5c2482766dc34cd3.mp4"></video>
                                <video src="https://cdn.sanity.io/files/y63jgrcb/production/652489ddcd735831f9c6949b5c2482766dc34cd3.mp4"></video>
                                <video src="https://cdn.sanity.io/files/y63jgrcb/production/652489ddcd735831f9c6949b5c2482766dc34cd3.mp4"></video>  
                            </div>

                        </div>
                        <div className="col-2">
                            <button className='btn btn-light' style={{borderRadius:"30px", fontSize:"20px"}}>Hire our team</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
