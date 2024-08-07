import styled from "styled-components";

const Main = () => {

    const H1 = styled.div `
        font-size: ${props => props.fontSize || '5rem'};
        color: ${props => props.color || 'red'};
    `
    
    return (
        <>
            <H1>hello, world!</H1>
        </>
    )
}

export default Main;