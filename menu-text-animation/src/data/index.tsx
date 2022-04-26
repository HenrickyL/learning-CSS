export interface IMenu{
    title: string
    to: string
    color?: string
}

export const data : IMenu[] = [
    {
        title: "Home",
        to: "/",
        color: '#00ade1'
    },
    {
        title: "About",
        to: "/about",
        color: '#ff6493'

    },
    {
        title: "Services",
        to: "/services",
        color: '#ffdd1c'

    },
    {
        title: "Team",
        to: "/team",
        color: '#00dc82'

    },
    {
        title: "Contact",
        to: "/contact",
        color: '#dc00d4'

    }
]