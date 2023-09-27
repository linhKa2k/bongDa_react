import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from '../actions'

export const useItem = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.itemCollection.list)
    const totalPage = useSelector(state => state.itemCollection.totalPage)
    const activePage = useSelector(state => state.itemCollection.activePage)
    const skip = useSelector(state => state.itemCollection.skip)
    const textSearch = useSelector(state => state.itemCollection.textSearch)

    const isFetching = useSelector(state => state.itemCollection.isFetching)
    const isError = useSelector(state => state.itemCollection.isError)
    const message = useSelector(state => state.itemCollection.message)

    const handlePagination = (data) => dispatch(ItemAction.paginationListRequest(data))
    const handleCreate = (data) => dispatch(ItemAction.createListRequest(data))
    const handleDelete = (data) => dispatch(ItemAction.deleteListRequest(data))
    const handleUpdate = (data) => dispatch(ItemAction.updateListRequest(data))
    const handleSearch = (data) => dispatch(ItemAction.searchListRequest(data))


    return {
        list,
        isFetching,
        isError,
        message,
        handlePagination,
        handleCreate,
        handleDelete,
        handleUpdate,
        handleSearch,
        totalPage,
        skip,
        activePage,
        textSearch
    }
}