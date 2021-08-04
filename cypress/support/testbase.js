export const domain = Cypress.config().baseUrl;

const obj = {
    mobile: {
        viewportHeight: 812,
        viewportWidth: 375,
    },
}

export const viewportsObj = Object.values(obj)
