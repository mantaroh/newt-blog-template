import { createClient  } from 'newt-client-js'

export const newtApiClient = createClient({
    spaceUid: import.meta.env.SPACE_UID,
    token: import.meta.env.NEWT_TOKEN,
    apiType: import.meta.env.API_TYPE
})