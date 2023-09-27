import { takeLatest, put,takeEvery } from 'redux-saga/effects'
import { ItemAction } from '../actions'
import { actionTypes } from '../container'
import { itemApi } from '../api'
import { Gift } from "../dataMockup/listGift"

function* handlePaginationListItems() {
    try {
        yield itemApi.paginationList()
        yield put(ItemAction.paginationListSuccess({
            Gift
        }))
    } catch (error) {
        yield put(ItemAction.paginationListFailure({
            message: error.message
        }))
    }
}


function* handleCreateItem({ payload }) {
    try {
        yield itemApi.createList(null, null, payload)
        yield put(ItemAction.createListSuccess())
        yield put (ItemAction.paginationListRequest(1))
    } catch (error) {
        yield put(ItemAction.createListFailure({
            message: error.message
        }))
    }
}

function* handleDeleteItem({ payload }) {
    try {
        yield itemApi.deleteList(null, null, payload)
        yield put(ItemAction.deleteListSuccess())
        yield put (ItemAction.paginationListRequest(1))
    } catch (error) {
        yield put(ItemAction.deleteListFailure({
            message: error.message
        }))
    }
}


function* handleUpdateItem({ payload }) {
    try {
        yield itemApi.updateList(null, null, payload)
        yield put(ItemAction.updateListSuccess())
        yield put (ItemAction.paginationListRequest(1))
    } catch (error) {
        yield put(ItemAction.updateListFailure({
            message: error.message
        }))
    }
}

function* handleSearchItem({ payload }) {
    try {
        const res = yield itemApi.searchList(null,  {activePage:`${payload.activePage}&limit=2&name=${payload.textSearch}`}, null)
        yield put(ItemAction.searchListSuccess({
            list : res.data,
            totalPage: res.totalPage,
            skip: res.skip,
            activePage: res.activePage,
            textSearch: res.textSearch
        }))
    } catch (error) {
        yield put(ItemAction.searchListFailure({
            message: error.message
        }))
    }
}
const itemSaga = [
    takeLatest(actionTypes.ItemTypes.PAGINATION_ITEM_REQUEST, handlePaginationListItems),
    takeLatest(actionTypes.ItemTypes.CREATE_ITEM_REQUEST, handleCreateItem),
    takeLatest(actionTypes.ItemTypes.DELETE_ITEM_REQUEST, handleDeleteItem),
    takeLatest(actionTypes.ItemTypes.UPDATE_ITEM_REQUEST, handleUpdateItem),
    takeEvery(actionTypes.ItemTypes.SEARCH_ITEM_REQUEST, handleSearchItem),
]

export default itemSaga;