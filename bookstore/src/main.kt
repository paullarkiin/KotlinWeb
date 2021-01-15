val API_URL = js("getApiUrl()") as String

fun main(array: Array<String>){
    val bookStorePresenter = BookStorePresenter()
    val bookStorePage = BookStorePage(bookStorePresenter)
    bookStorePage.show()


}