// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Governança de software ISTEO",

            sidebar: [
                {
                    label: "Inicio",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Inicio", slug: "start" },
                    ],
                },
                {
                    label: "Guias",
                    items: [
                        {
                            label: "Integração Time de Software",
                            slug: "guides/integration",
                        },
                        {
                            label: "Integração Frontend",
                            slug: "guides/integration-frontend",
                        },
                        {
                            label: "Integração Backend",
                            slug: "guides/integration-backend",
                        },
                    ],
                },
                // {
                //     label: "Reference",
                //     autogenerate: { directory: "reference" },
                // },
            ],
        }),
    ],
});
