import { colors } from './../../styles/global';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';
import {
    FaFacebookF as Facebook,
    FaYoutube as Youtube,
    FaTwitter as Twitter,
    FaWhatsapp as Whatsapp,
    FaInstagram as Instagram,
    FaLinkedin as Linkedin
  } from 'react-icons/fa'

export interface IOption{
    name:string, 
    color:string,
    icon: IconType
}
export const currentOptions:IOption[] = [
    {
        name:'facebook', 
        color:'#1877f2',
        icon: Facebook
    },
    {
        name: 'youtube',
        color:'#ff0000',
        icon: Youtube
    },
    {
        name: 'twitter',
        color:'#1da1f2',
        icon: Twitter
    },
    {
        name: 'instagram',
        color:'#c32aa3',
        icon: Instagram
    },
    {
        name: 'whatsapp',
        color:'#25d366',
        icon: Whatsapp
    },
    {
        name: 'linkedin',
        color: '#0e76a8',
        icon: Linkedin
    }
]

interface IProp{
    color: string,
    hidden?:boolean,
    circle?:boolean
}
export const StySocialMediaIcon = styled.div<IProp>`
    position: relative;
    width: 5rem;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        z-index: 10000;
        transform: scale(0.75);
        .icon-link{
            font-size: 3rem;
            filter: drop-shadow(0 0 1rem ${p=>p.color})
                    drop-shadow(0 0 2rem ${p=>p.color})
                    drop-shadow(0 0 3rem ${p=>p.color});
        }

        &::before{
            inset: 0px;
            ${p=>
                p.circle && 'border-radius: 50%;'
            }

        }
    }

    &::before{
        content: '';
        position: absolute;
        inset: 30px;
        ${p=>
                (p.hidden && 'border-radius: 8px;' ) || (p.circle && 'border-radius: 50%;')
        }
        box-shadow: 0 0 0 10px ${p=>p.color},
                    0 0 0 20px ${colors.bg},
                    0 0 0 22px ${p=>p.color};
        transition: .5s;
        
    }

    &::after{
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${colors.bg};
        transform: rotate(45deg);
    }


    .icon-link{
        position: relative;
        text-decoration: none;
        color: ${p=>p.color};
        z-index: 10;
        font-size: 2rem;
        transition: .5s;
        
    }
`

