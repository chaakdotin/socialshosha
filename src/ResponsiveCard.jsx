import { div } from 'framer-motion/client'
import React from 'react'

export default function ResponsiveCard() {
    return (
        <div className="row p-2">
            <div className="col-lg-5 ">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-300">
                            <img src="https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/67c51d401b2cdc6c975d3092_Sonatine_Thumbnail_03-p-2000.webp" alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-300">
                            <div className='text-center'>
                                <div className="cell_eyebrow mx-auto"><div className="eyebrow_14-4"><strong>FEATURED</strong></div></div>
                                <div className="cell_h4 mx-auto"><h4 className="h-h4 is-big">OUT<br />Now</h4></div>
                                <div className="cell_text-2 mx-auto"><div className="body_17">'Falling Out Of Time | True'<br /><br />Available on all streaming platforms. </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <div className="card-300">
                            <img src="https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/67c507e1ec9198f05a211112_MilasMike_Pressshots_DeclanBlackallPhotography280124_0005%20(2).webp" alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className='w-100 h-100 radius'>
                    <div className="card-100 mx-auto" >
                        <div className="cell_desc-wrap">
                            <div className="cell_desc-eyebrow">
                                <div className="eyebrow_22-5">The Introduction</div>
                            </div>
                            <div className="cell_desc-row">
                                <div className="cell_slant">
                                    <div className="slant-7">the</div>
                                </div>
                                <div className="cell_des">
                                    <h2 className="h-h2">Sound<br/></h2>
                                </div>
                                <div className="cell_slant is-right">
                                    <div className="slant-7">of</div>
                                </div>
                            </div>
                            <div className="cell_desc-row">
                                <div className="cell_desc-row">
                                    <h2 className="h-h2">Sonar Music</h2>
                                </div>
                            </div>
                        </div>
                        <div className="cell_desc-text-2"><h6 className="h-h6">Sonar Music is a renowned music and sound studio based in Sydney, Australia that houses the nation's most distinguished composers and sound designers. A haven of sonic innovation, Sonar has become synonymous with premium original composition and sound design across Film, TV, Advertising and new media. Our approach is rooted in a deep understanding of the cinematic landscape, allowing us to seamlessly integrate music and sound to enhance the storytelling experience, while bringing a wealth of technical brilliance and artistic finesse to every project.</h6></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
