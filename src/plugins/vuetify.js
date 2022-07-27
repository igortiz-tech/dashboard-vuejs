import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    theme: {
        themes: {
            light: {
                primary: "#1887B4",
                secondary: "#673ab7",
                accent: "#3f51b5",
                error: "#f44336",
                warning: "#ffc107",
                info: "#00bcd4",
                success: "#4caf50",
            },
        },
        options: {
            customProperties: true,
        },
    },
})
