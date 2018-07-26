import geocases from '../api/index.json'

export const initializeGeoCases = () => ({
    type: 'INIT_GEO_CASES',
    geocases
});