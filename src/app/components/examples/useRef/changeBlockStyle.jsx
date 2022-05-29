import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const ChangeBlockStyle = () => {
    const divRef = useRef();
    const handleClick = () => {
        divRef.current.style.width = "150px";
        divRef.current.style.height = "150px";
        divRef.current.textContent = "secondary";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">Пример</SmallTitle>
            <Divider/>
            <div ref={divRef} className="p-3 mb-2 bg-primary text-white">primary</div>
            <button
                className="btn btn-secondary m-2"
                onClick={handleClick}
            >
                Изменить свойства блока
            </button>
        </CardWrapper>
     );
};

export default ChangeBlockStyle;
