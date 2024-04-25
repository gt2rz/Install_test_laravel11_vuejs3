// Sidebar.spec.js
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Sidebar from "./Sidebar.vue";

import { links, Link, SidebarSection } from "../../../links.ts";

import router from "../../../../router/index.ts";

// const routes = [
//     // Define your routes here
// ];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

describe("Sidebar.vue", () => {
    it("renders section titles - uppercase", async () => {
        const wrapper = mount(Sidebar, {
            global: {
                plugins: [router],
            },
        });

        await nextTick();

        const sections = wrapper.findAll(".sidebar__section_title");

        links.forEach((section: SidebarSection, index: number) => {
            expect(sections[index].text()).toBe(section.title.toUpperCase());
        });
    });

    it("render icons", async () => {
        const wrapper = mount(Sidebar, {
            global: {
                plugins: [router],
            },
        });

        await nextTick();

        const icons = wrapper.findAll(".sidebar__section_icon");

        links.forEach((section: SidebarSection, index: number) => {
            section.links.forEach((link: Link, linkIndex: number) => {
                expect(icons[linkIndex].html()).toContain(link.icon);
            });
        });
    });

    it("render links", async () => {
        const wrapper = mount(Sidebar, {
            global: {
                plugins: [router],
            },
        });

        await nextTick();

        const wrappedLinks = wrapper.findAll(".sidebar__section_link");

        let numberOfLinksInSection = 0;
        links.forEach((section: SidebarSection, index: number) => {
            section.links.forEach((link: Link, linkIndex: number) => {
                expect(wrappedLinks[numberOfLinksInSection].text()).toBe(
                    link.title,
                );
                numberOfLinksInSection++;
            });
        });
    });

    // it("navigate to the link", async () => {
    //     const wrapper = mount(Sidebar, {
    //         global: {
    //             plugins: [router],
    //         },
    //     });

    //     await nextTick();

    //     const wrappedLinks = wrapper.findAll(".sidebar__section_link");

    //     await router.isReady();

    //     await router.push("/");

    //     await nextTick();

    //     let numberOfLinksInSection = 0;
    //     links.forEach((section: SidebarSection, index: number) => {
    //         section.links.forEach(async (link: Link, linkIndex: number) => {
    //             await wrappedLinks[numberOfLinksInSection].trigger("click");
    //             await nextTick();
    //             //
    //             await new Promise((resolve) => setTimeout(resolve, 100)); // Add a delay after triggering the click event
    //             console.log(router.currentRoute.value.path);

    //             expect(router.currentRoute.value.path).toBe(link.path);
    //             numberOfLinksInSection++;
    //         });
    //     });
    // });
});
