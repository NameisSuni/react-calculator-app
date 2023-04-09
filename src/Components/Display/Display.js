import React, { useEffect, useRef } from "react";
import './Display.css';

function Display(props) {
    const resultRef = useRef();
    const expressionRef = useRef();

    useEffect(()=>{
        resultRef.current.scrollIntoView();
    }, [props.history]);

    useEffect(()=>{
        expressionRef.current.scrollLeft=expressionRef.current.scrollWidth;
    },[props.expression]);


    return (
        <div className="display custom-scroll">
            <div className="display_history">
                {props.history && props.history?.map((item) =>(
                    <p key={item +""+ Math.random() * 44}>{item}</p>
                ))}
            </div>
            <br />
            <div ref={expressionRef} className="display_expression custom-scroll">
                <p>{props.expression}</p>
            </div>
            <p ref={resultRef} className="display_result">{props.result}</p>
        </div>

    );
}

export default Display;