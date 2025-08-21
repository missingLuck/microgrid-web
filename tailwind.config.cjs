/** @type {import('tailwindcss').Config} */
import { isFunction } from "lodash";
function valueBy(keys = [], processor) {
    return keys.reduce((result, key) => {
        result[key] = isFunction(processor) ? processor(key) : key;
        return result;
    }, {});
}

module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            zIndex: {
                "-1": -1,
                1: 1,
            },

            minWidth: (theme) => theme("spacing"),

            minHeight: (theme) => theme("spacing"),

            maxWidth: (theme) => theme("spacing"),

            maxHeight: (theme) => theme("spacing"),
        },
        spacing: valueBy(
            [
                4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 104, 128, 168, 208, 272, 336, 440, 552,
                720, 896, 1152, 1440, 1920,
            ],
            (value) => `${value}px`,
        ),
        colors: {
            primiry: "#007bff",
            secondary: "#6c757d",
            success: "#28a745",
            info: "#17a2b8",
            warning: "#ffc107",
            danger: "#dc3545",
            light: "#f8f9fa",
            dark: "#343a40",
            gray: {
                100: "#f7fafc",
                900: "#1a202c",
            },
        },
        round: {},
    },
    plugins: [],
};
