import styled from 'styled-components';

export const HeaderStyles = styled.div`
    display: flex;
    justify-content: end;
    padding: 20px 40px;
    box-shadow: 0px 0px 50px rgba(95, 99, 104, 0.15);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    margin-bottom: 30px;

    .right-wrap {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;
        & .date-wrap {
            display: flex;
            gap: 5px;
        }
    }
`