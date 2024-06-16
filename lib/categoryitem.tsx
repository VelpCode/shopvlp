import { ChefHat, Globe, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {

    name: string;
    title: string;
    image: ReactNode;
    description: string;
    id: number;

}

export const categoryItems: iAppProps[] = [
    {
        id:0,
        name: 'template',
        title: 'Template',
        image: <Globe />,
        description: 'brooo'
    },
    {
        id:1,
        name: 'template2',
        title: 'Template',
        image: <ChefHat />,
        description: 'dude'
    },
    {
        id: 2,
        name: 'icon',
        title: "Icon",
        image: <PartyPopper />,
        description: 'mannn'
    }

];