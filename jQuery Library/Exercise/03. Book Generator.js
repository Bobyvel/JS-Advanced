function createBook(selector, titleName, authorName, isbn) {

    let bookGenerator =(function () {

        let id = 1;
        return function (selector, titleName, authorName, isbn) {

            let book = $('<div>').attr('id', 'book' + id)
                .append($('<p>').addClass('title').text(titleName))
                .append($('<p>').addClass('author').text(authorName))
                .append($('<p>').addClass('isbn').text(isbn))
                .append($('<button>').text('Select').on('click', selectBook))
                .append($('<button>').text('Deselect').on('click', deselectBook));

            let container = $(selector);
            container.append(book);

            function selectBook() {
                $(this).parent().css('border', '2px solid blue');
            }

            function deselectBook() {
                $(this).parent().css('border', '');
            }

            id++;
        }
    }());
    bookGenerator(selector, titleName, authorName, isbn);
    bookGenerator(selector, titleName, authorName, isbn);
}