import styled,{keyframes} from 'styled-components'









export const Option = styled.div``
export const Options =styled.div``

const _len = 1;


//------------------------------------------------------------
export const Dropdown = styled.div`
    position: relative;
    margin-top: 100px;
    width: 300px;

    input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 2rem;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid transparent;
        outline: none;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        padding: 12px 20px;
        border-radius: 10px;
        transition:0.3;
        font-size:15px;
        &:hover{
            border: 1px solid #d0d0d0;

        }
    }

    &::before{
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border:2px solid #333;
        border-top: none;
        border-left: none;
        transform: rotateZ(${props=>props.active? "-135deg": "45deg"});
    
        right: 20px;
        top: 0.5rem;
        z-index: 5;
        transition: 0.1s;
        pointer-events: none;
        
    }
    &:active::before{
        transform: rotateZ(45deg) scale(0.9)  ;


    }
    
    ${Options}{
        ${props => !props.active && "visibility:hidden;"}
        position: absolute;
        top:${2+_len}rem;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 30px 30px rgba(0,0,0,0.05);
        border-radius: 10px;
        
        

        ${Option}{
            padding: 12px 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            overflow: hidden;
            border-radius: 10px;
            transition: .2s;

            span{
                margin-left: 5px;
                color: #444;

            }

            &:hover{
                border-left: 5px solid green;
                padding-left:35px;
                font-weight: bold;
                background: rgba(0,0,0,0.1);
                span{
                    color:black;
                }
            }
        }
        &::after{
            content: "";
            position:absolute;
            top: calc(${-_len*0.95}rem);
            right:${_len*0.7}rem;
            
            width: 0; 
            height: 0; 
            border-left: 1rem solid transparent;
            border-right: 1rem solid transparent;
            
            border-bottom: 1rem solid #fff;
            transform: scaleX(0.7);
        }
    }
    
    

`











