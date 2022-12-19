import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowCircleLeft, faArrowCircleRight, faDotCircle } from "@fortawesome/free-solid-svg-icons";
const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderStyle = {
        height: "100%",
        position: "relative",
    }

    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrow = {
        position: "absolute",
        transform: "translate(0, -50%)",
        fontSize: "30px",
        cursor: "pointer",
        zIndex: 2,
        color: "#fff",
        top: "50%",
        left: "40px",

    }

    const rightArrow = {
        position: "absolute",
        transform: "translate(0, -50%)",
        fontSize: "30px",
        cursor: "pointer",
        zIndex: 2,
        color: "#fff",
        top: "50%",
        right: "40px",

    }

    const dotWrapper = {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
        fontSize: "1.6rem",
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    const Previous = () => {
        const first = currentIndex === 0;
        const next = first ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(next)
    }

    const Next = () => {
        const last = currentIndex === slides.length - 1;
        const next = last ? 0 : currentIndex + 1;
        setCurrentIndex(next)
    }

    return (
        <div style={sliderStyle}>
            <div style={leftArrow}>
                <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    onClick={Previous} />
            </div>
            <div style={rightArrow}>
                <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    onClick={Next} />

            </div>

            <div style={slideStyle}></div>
            <div style={dotWrapper} >
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}>
                        ☻
                    </div>

                ))}

            </div>

        </div>
    )
}

export default ImageSlider