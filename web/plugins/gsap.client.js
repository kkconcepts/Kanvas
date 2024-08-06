import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from 'gsap/SplitText';

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase, SplitText);
    }

    return {
        provide: {
            gsap,
            ScrollTrigger,
            CustomEase,
            SplitText,
        },
    };
});