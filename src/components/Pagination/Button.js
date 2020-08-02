
import styled from 'styled-components'
 
const getStyle = type => {
    if(type === "primary"){
        return `
            background: #0099FF;
            color: #FDFDFD;
        `
    }
    if(type === "error"){
        return `
            background: #FF8080;
            color: #FDFDFD;
        `
    }
    if(type === "success"){
        return `
            background: #00CC;
            color: #FDFDFD;
        `
    }
    if(type === "warning"){
        return `
            background: #FFFF00;
            color: #FDFDFD;
        `
    }
    return `
        background: #FDFDFD;
        border: 1px solid #DCDCDC
        color: #333333;
    `
}

const Button = styled.button`
    border: none;
    cursor: pointer;
    ${({ type }) => getStyle(type) } 
`

export default Button