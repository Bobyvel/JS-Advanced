function initializeTable() {
    $('#createLink').on('click', createCountry);


    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');
    fixRowLinks();

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        addCountry(country, capital, true);

        $('#newCountryText').val("");
        $('#newCapitalText').val("");
        fixRowLinks();
    }

    function addCountry(country, capital) {
        let inputRow = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').on('click', moveUp))
                .append($('<a href="#">[Down]</a>').on('click', moveDown))
                .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));
        inputRow.css('display','none');
        inputRow.appendTo($('#countriesTable'));
        inputRow.fadeIn();
    }

    function deleteRow() {
        $(this).parent().parent().fadeOut(function () {
            $(this).remove();
        });
        fixRowLinks();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.prev().before(row);
            row.fadeIn();
            fixRowLinks();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.next().after(row);
            row.fadeIn();
            fixRowLinks();
        });
    }

    function fixRowLinks() {
        // Show all links in the table
        $('#countriesTable a').css('display', 'inline');

        // Hide [Up] link in first table data row
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none');

        // Hide the [Down] link in the last table row
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css('display', 'none');
    }

}