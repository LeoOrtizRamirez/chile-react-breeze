import { useState, useEffect } from "react";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Navbar, MobileNav, Typography, Button, IconButton, } from "@material-tailwind/react";
import "../../css/estilos-header-publica.css";


export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="menu-header"
            >
                <a href="#" className="flex items-center ">
                    Funcionalidades
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="menu-header"
            >
                <a href="#" className="flex items-center ">
                    Planes
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="menu-header"
            >
                <a href="#" className="flex items-center ">
                    Nosotros
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="menu-header"
            >
                <a href="#" className="flex items-center ">
                    Contáctanos
                </a>
            </Typography>
            <div className="Botonoes-derecha">

                <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className=" grid grid-cols-4 gap-2 menu-header items-center"
                >

                    <div>
                        <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                    </div>
                    <div className="items-center">Chile</div>
                    

                </Typography>

            </div>
        </ul>
    );

    return (
        <Navbar className="w-full py-2 lg:py-4 bg-#00000029 ">
            <div className="container mx-6 flex items-center">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-16 cursor-pointer py-1.5 font-normal"
                >
                    <ApplicationLogoLici />

                </Typography>
                <div className="hidden lg:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Buy Now</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}