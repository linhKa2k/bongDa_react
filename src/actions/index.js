import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../container";
export const ItemAction = {
  paginationListRequest: createAction(
    actionTypes.ItemTypes.PAGINATION_ITEM_REQUEST
  ),
  paginationListSuccess: createAction(
    actionTypes.ItemTypes.PAGINATION_ITEM_SUCCESS
  ),
  paginationListFailure: createAction(
    actionTypes.ItemTypes.PAGINATION_ITEM_FAILURE
  ),

  createListRequest: createAction(actionTypes.ItemTypes.CREATE_ITEM_REQUEST),
  createListSuccess: createAction(actionTypes.ItemTypes.CREATE_ITEM_SUCCESS),
  createListFailure: createAction(actionTypes.ItemTypes.CREATE_ITEM_FAILURE),

  deleteListRequest: createAction(actionTypes.ItemTypes.DELETE_ITEM_REQUEST),
  deleteListSuccess: createAction(actionTypes.ItemTypes.DELETE_ITEM_SUCCESS),
  deleteListFailure: createAction(actionTypes.ItemTypes.DELETE_ITEM_FAILURE),

  updateListRequest: createAction(actionTypes.ItemTypes.UPDATE_ITEM_REQUEST),
  updateListSuccess: createAction(actionTypes.ItemTypes.UPDATE_ITEM_SUCCESS),
  updateListFailure: createAction(actionTypes.ItemTypes.UPDATE_ITEM_FAILURE),

  searchListRequest: createAction(actionTypes.ItemTypes.SEARCH_ITEM_REQUEST),
  searchListSuccess: createAction(actionTypes.ItemTypes.SEARCH_ITEM_SUCCESS),
  searchListFailure: createAction(actionTypes.ItemTypes.SEARCH_ITEM_FAILURE),
};
