import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenuContent, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function UserNav() {
    

    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">

                        <AvatarFallback>Jan</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Aman Velp</p>
                        <p className=" text-neutral-600 text-xs">velpmail@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        TestItem
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        TestItem
                    </DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        <LogoutLink>Log Out</LogoutLink>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    )

}