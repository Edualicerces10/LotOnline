import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        },
        orange: {
            "900": "#f95702",
            "800": "#FF6D00",
            "700": "#FF7900",
            "600": "#FF8500",
            "500": "#FF9100",
            "400": "#FF9E00",
            "50": "#ffb749",
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: '#f5f5f4',
                color: '#22223b',
            }
        }
    },  
    defaultProps: {
        variant: "smooth",
      },
})