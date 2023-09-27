import { actionTypes } from '../../container'

const { ItemTypes } = actionTypes
const INITIAL_STATE = {
    list: [],
    totalPage: '',
    skip: '',
    activePage: '',
    textSearch: '',
    isFetching: false,
    isError: false,
    message: ''
}

export default function itemCollectionReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ItemTypes.PAGINATION_ITEM_REQUEST:
        case ItemTypes.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case ItemTypes.PAGINATION_ITEM_SUCCESS:

            return {
                ...state,
                isFetching: false,
                list: payload.list,
                totalPage: payload.totalPage,
                skip: payload.skip,
                activePage: payload.activePage,
                isError: false
            }
        case ItemTypes.PAGINATION_ITEM_FAILURE:
        case ItemTypes.SEARCH_ITEM_FAILURE:

            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        case ItemTypes.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: payload.list,
                totalPage: payload.totalPage,
                skip: payload.skip,
                activePage: payload.activePage,
                textSearch: payload.textSearch,
                isError: false
            }
        default:
            return state
    }
}