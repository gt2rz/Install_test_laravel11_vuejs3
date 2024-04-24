import { render, RenderResult } from "@testing-library/vue";
import Welcome from "./Welcome.vue";

test("it should work", () => {
    const { getByText } = render(Welcome);

    getByText("Hello world!");
});

test("it should work with props", () => {
    const { getByText } = render(Welcome, {
        props: {
            title: "This is a title",
            subtitle: "Subtitle",
        },
    });

    getByText("This is a title");
    getByText("Subtitle");
});



