import styled from "styled-components";

export const Overlay = styled.div`

    background - color: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    height: 100vh;

    @media screen and(min - width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        background - color: rgba(0, 0, 0, 0.25);
        z - index: 10;
    }
`
export const Modal = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    border - radius: 0;

    @media screen and(min - width: 768px) {
        position: absolute;
        top: 50 %;
        left: 50 %;
        transform: translate(-50 %, -50 %);
        width: 540px;
        z - index: 1;

        border - radius: 20px;
        box - shadow: 0px 2px 1px - 1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }
`