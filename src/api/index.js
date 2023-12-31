import { Helpers } from '../utils'
import ApiScheme from './scheme'

export const authApi = {
    login: Helpers.createApi(ApiScheme.AUTHEN.LOGIN),
    logout: Helpers.createApi(ApiScheme.AUTHEN.LOGOUT),
    validateToken: Helpers.createApi(ApiScheme.AUTHEN.VALIDATE_TOKEN)
}

export const itemApi = {
    paginationList: Helpers.createApi(ApiScheme.ITEMS.PAGINATION_LIST),
    createList: Helpers.createApi(ApiScheme.ITEMS.CREATE),
    deleteList: Helpers.createApi(ApiScheme.ITEMS.DELETE),
    updateList: Helpers.createApi(ApiScheme.ITEMS.UPDATE),
    searchList: Helpers.createApi(ApiScheme.ITEMS.SEARCH)
}