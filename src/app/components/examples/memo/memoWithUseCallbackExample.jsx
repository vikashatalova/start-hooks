import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary mx-2" onClick={onLogOut}>LogOut</button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemoizedOutButton = React.memo(LogOutButton, areEqual);
    // (prevProps, nextProps) => {
    //     if (prevProps === nextProps) return true;
    //     return false;
    // }

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button className="btn btn-primary" onClick={() => setState(!state)}>initate rerender</button>
            <MemoizedOutButton onLogOut={handleLogOut}/>
        </>
    );
};

export default MemoWithUseCallbackExample;
