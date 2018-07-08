function ticketsBase(arr, sortOrder) {
    let tickets = [];
    class Ticket{
       constructor(destination, price, status) {
           this.destination = destination;
           this.price = +price;
           this.status = status;
       }
    }

    for (let arrElement of arr) {
        [destin, pr, stat] = arrElement.split('|');
        let ticket = new Ticket(destin, pr, stat);
        tickets.push(ticket)
    }

    tickets.sort((a, b) => a[sortOrder] > b[sortOrder]);
    // switch (sortOrder) {
    //     case 'price':
    //         tickets.sort((a, b) => a.price - b.price);
    //         break;
    //     case 'destination':
    //         tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    //         break;
    //     case 'status':
    //         tickets.sort((a, b) => a.status.localeCompare(b.status));
    //         break;
    // }

    return tickets;
}

console.log(ticketsBase(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));