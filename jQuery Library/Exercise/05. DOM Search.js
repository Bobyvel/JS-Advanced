function domSearch(selector, isCaseSensitive) {

    $(selector)
        .append($('<div>').addClass('add-controls')
            .append($('<label>').text("Enter text: ")
                .append($('<input>')))
            .append($('<a>').addClass('button').text('Add').on('click', addItem)));

    $(selector)
        .append($('<div>').addClass('search-controls')
            .append($('<label>').text("Search:")
                .append($('<input>').on('input', search))));

    $(selector)
        .append($('<div>').addClass('result-controls')
            .append($('<ul>').addClass('items-list')));

    function addItem() {
        let text = $('.add-controls label input');
        $('.items-list')
            .append($('<li>').addClass('list-item')
                .append($('<a>').addClass('button').text('X').on('click', deleteItem))
                .append($('<strong>').text(text.val())));
        text.val("");
    }

    function deleteItem() {
        $(this).parent().remove();
    }

    function search() {
        let text = $(this).val();

        $('.list-item').each((index, li) => matches(li, text))
    }

    function matches(li, text) {
        $(li).css('display', 'block');
        if (isCaseSensitive) {
            if ($(li).find('strong').text().indexOf(text) == -1) {
                $(li).css('display', 'none');
            }
        } else {
            if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) == -1) {
                $(li).css('display', 'none');
            }
        }
    }
}