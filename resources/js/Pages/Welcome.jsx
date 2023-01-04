import { Link, Head } from "@inertiajs/inertia-react";
import Banner from "@/Components/Banner";import { Footer } from "../Components/Footer/Footer";

import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Header user={props}></Header>
            <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                {props.auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>

            <Banner></Banner>
            {/* Componentes */}
            <Footer />
        </>
    );
}
