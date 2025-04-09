import React, { useState, useEffect, useRef } from 'react';
import './Blog.css'
export default function Blog() {
    const [isHovered, setIsHovered] = useState(false);
    const list = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const items = [
        { id: '2a1dc6c1-5e8b-c81d-d164-4dd092e348bb', imgUrl: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png' },
        { id: '2a1dc6c1-5e8b-c81d-d164-4dd092e348bb1', imgUrl: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png' },
        { id: '2a1dc6c1-5e8b-c81d-d164-4dd092e348bb2', imgUrl: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png' },
    ];
    return (
        <>
            <div className="container-2 w-100">
                <div className="container-inner">
                    <div className="works_wrapper">
                        <div id="w-node-_2a1dc6c1-5e8b-c81d-d164-4dd092e348b5-344c309f" className="works_cms">
                            <h1 className="heading-12 okay">Trending now</h1>
                            <div data-w-id="2a1dc6c1-5e8b-c81d-d164-4dd092e348b8" className="projects_container">
                                <div fs-cmsfilter-element="list" id="w-node-_2a1dc6c1-5e8b-c81d-d164-4dd092e348b9-344c309f"
                                    className="w-dyn-list">
                                    <div role="list" className="w-dyn-items" ref={list}>
                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                data-w-id="2a1dc6c1-5e8b-c81d-d164-4dd092e348bb"
                                                role="listitem"
                                                className="project w-dyn-item"
                                                style={{ opacity: 1 }}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <div className="content">
                                                    <a
                                                        cursor-text="View Trending Story"
                                                        href="/post/the-future-trajectory-of-marketing-to-drive-positive-brand-growth"
                                                        className="indivisual-project fsfe w-inline-block"
                                                        >
                                                        <div className="left-2">
                                                            <div className="text-size-large-3 newchange ok1">
                                                            The Future Trajectory of Marketing to Drive Positive Brand Growth
                                                            </div>
                                                            <div className="text-size-regular-2 bold mobmins">4 minutes</div>
                                                        </div>
                                                        <div className="right-2">
                                                            <div className="text-size-regular-2 bold blog-categories">Blogs</div>
                                                            <div className="text-size-regular-2 bold mobtime1">4 minutes</div>
                                                            <div className="div-block-5 n1 n21">
                                                            <div className="arrow_wapper n1">
                                                                <div className="left-3">
                                                                <img
                                                                    src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/642ec7cce672167e826194fa_Rside.svg"
                                                                    loading="lazy"
                                                                    alt=""
                                                                    className="image n5 n6"
                                                                />
                                                                </div>
                                                                <div
                                                                className="left-3 newarrow"
                                                                style={{
                                                                    transform:
                                                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                                    transformStyle: "preserve-3d"
                                                                }}
                                                                >
                                                                <img
                                                                    src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/642ec7cce672167e826194fa_Rside.svg"
                                                                    loading="lazy"
                                                                    alt=""
                                                                    className="image n6"
                                                                />
                                                                </div>
                                                            </div>
                                                            <div className="div-block-2">
                                                                <div
                                                                className="text-block-27 div-block-2 n3"
                                                                style={{
                                                                    transform:
                                                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                                    transformStyle: "preserve-3d"
                                                                }}
                                                                >
                                                                Read Now
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <img
                                                            src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png"
                                                            loading="lazy"
                                                            alt=""
                                                            sizes="(max-width: 479px) 95vw, 100vw"
                                                            srcSet="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-500.png 500w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-800.png 800w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-1080.png 1080w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-1600.png 1600w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png 1920w"
                                                            className="image-76"
                                                            />
                                                        </div>
                                                        <div className="underline" />
                                                        <div
                                                            className="underline newline"
                                                            style={{
                                                            transform:
                                                                "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transformStyle: "preserve-3d"
                                                            }}
                                                        />
                                                    </a>
                                                </div>

                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    style={{
                                                    transform:
                                                        "translate3d(0px, 8em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    opacity: 0,
                                                    transformStyle: "preserve-3d"
                                                    }}
                                                    src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png"
                                                    sizes="(max-width: 991px) 100vw, 25vw"
                                                    srcSet="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-500.png 500w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-800.png 800w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-1080.png 1080w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3-p-1600.png 1600w, https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/67441912e113661ceef10d84_Tech%20Thumb_3.png 1920w"
                                                    className="image-5"
                                                />

                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_2a1dc6c1-5e8b-c81d-d164-4dd092e348bf-344c309f" className="works_image"></div>
                    </div>
                </div>
            </div>
        </>
    )
}