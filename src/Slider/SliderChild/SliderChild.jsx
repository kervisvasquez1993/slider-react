import React, { useState, useEffect } from "react";
import style from "./style.module.css";
const SliderChild = ({ title, content, background = "" }) => {
    const [titleSize, setTitleSize] = useState(null);
    // TODO: Remover esta variable y traer los datos del backend
    const backgroundImage = `../../../public/hero/${background}`;

    useEffect(() => {
        const titleElement = document.querySelector(`.${style.titleSlider}`);
        const { width, height } = titleElement.getBoundingClientRect();
        setTitleSize({ width, height });
    }, []);
    console.log(titleSize, "titleSize");
    return (
        <>
            <div
                style={{
                    background: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className={style.containerSliderChild}
            >
                <section className={style.wrapContent}>
                    <section>
                        <h2 className={style.titleSlider}>{title}</h2>
                        <div
                            className={style.subrayado}
                            style={{ width: `${titleSize}px` }}
                        ></div>
                    </section>

                    <p className={style.contentSlider}>{content}</p>
                </section>
            </div>
        </>
    );
};

export default SliderChild;
