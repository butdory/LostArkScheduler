import React from "react";
import styled from 'styled-components';

import SignIn from "../function/SignIn";
import SignUp from "../function/SignUp";

const HeaderStyle = styled.div`

`

const Header = () => {
    return(
        <HeaderStyle>
            <div className="Semantic_Header_Div_Left">
                
            </div>
            <div className="Semantic_Header_Div_Right">
                <SignIn />
                <SignUp />
            </div>
        </HeaderStyle>
    )
}

export default Header;