import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 15px;
`;

export const Button = styled.button`
    font-size: 14px;
    width: 70px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: skyblue;
    }
`;