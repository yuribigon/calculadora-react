import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #0080ff;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    @font-face {
        font-family: 'CalculatorFont';
        src: url('./Calculator.ttf') format('truetype');
    }
    input {
        width: 100%;
        height: 75px;
        background-color: #0080ff;
        text-align: right;
        border: 0;
        display: flex;
        padding: 0 10px;
        font-size: 40px;
        font-family: 'CalculatorFont', monospace;
        color: #000;
    }
`