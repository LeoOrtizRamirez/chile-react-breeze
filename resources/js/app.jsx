import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Licitaciones en Chile";

createInertiaApp({
    /* title: (title) => `${title} - ${appName}`, */
    title: (title) => `${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});

InertiaProgress.init(
    {
        color: "rgb(0, 161, 201)" ,
        delay: 250,
      
        // Whether to include the default NProgress styles.
        includeCSS: true,
      
        // Whether the NProgress spinner will be shown.
        showSpinner: true,
    }
);