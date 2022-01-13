import styled from "styled-components";
import {IconType} from 'react-icons'



const Icon = styled.i`
`

export const StyActionMenu = styled.div`
    display: flex;
    gap: 6px;
`

export const StyAMUser = styled.div`
    position: relative;
    background: #fff;
    height: 70px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    gap:10px;
    transition: 0.5s;

    .imgBx{
        position: relative;
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 6px;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }

    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3{
            font-weight: 600;
            line-height: 1.1em;
        }
        p{
            font-weight: 500;
            font-size: 0.8em;
            color: rgba(0,0,0,0.8);
        }
    }
`

export const StyAMNavigation = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    cursor:pointer;
    transition: 0.5s;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        width: 6px;
        height: 6px;
        background: #222327;
        border-radius: 50%;
        transition: 0.5s;
        font-size: 1.25em;
        i{
            visibility: hidden;
            opacity: 0;
        }
        
        &:nth-child(1){
            transform: translateY(-12px);
        }
        &:nth-child(2){
            transform: translateY(12px);
        }

    }

    &.active{
        display: flex;
        flex-direction: row;
        width: 200px;
        span{
            color: #fff;
            width: 50px;
            height: 50px;
            border: 3px solid #222327;

            i{

                visibility: visible !important;
                opacity: 1;
            }

            &:hover{
                background: #29fd53;
                color: black;
            }

            &:active{
                transform: scale(0.95);
                color:red;
            }


            &:nth-child(1),
            &:nth-child(2){
                transform: translateY(0);
            }
            &:nth-child(1){
                transform: translateX(-60px);
            }
            &:nth-child(2){
                transform: translateX(60px);
            }

        }
        
    }
`