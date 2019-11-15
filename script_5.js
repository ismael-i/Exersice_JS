const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function are_all_borrowed_once() {
    books.forEach(booksContent => {
        if (booksContent.rented <= 0) {
            return false;
        };
    });
    return true;
};
console.log("Have all the books been borrowed at least once?")
console.log(are_all_borrowed_once());

function the_most_borrowed() {
    let rent = [];
    books.forEach(booksContent => {
        rent.push(booksContent.rented);
    });
    let max_rented = Math.max(...rent);

    let most_borrowed = [];
    books.forEach(booksContent => {
        if (booksContent.rented == max_rented) {
            most_borrowed.push(booksContent);
        }
    });
    console.log(most_borrowed);
};
console.log("What is the most borrowed book?");
the_most_borrowed()

function the_least_borrowed() {
    let rent = [];
    books.forEach(booksContent => {
        rent.push(booksContent.rented);
    });
    let min_rented = Math.min(...rent);

    let least_borrowed = [];
    books.forEach(booksContent => {
        if (booksContent.rented == min_rented) {
            least_borrowed.push(booksContent);
        }
    });
    console.log(least_borrowed);
};
console.log("What is the least borrowed book?");
the_least_borrowed()

function find_by_id(index) {
    let bookByid = [];
    books.forEach(booksContent => {
        if (booksContent.id == index) {
            bookByid.push(booksContent);
        };
    });
    console.log(bookByid);
};

console.log("Find the book by ID");
find_by_id(873495);

function erase_and_stock(index) {
    let bookByid = [];
    books.forEach(booksContent => {
        if (booksContent.id != index) {
            bookByid.push(booksContent);
        };
    });
    console.log(bookByid);
};

console.log("Erase the book by ID");
erase_and_stock(133712);

function ordered_book() {
    let bookByid = [];
    let index = 133712;
    books.forEach(booksContent => {
        if (booksContent.id != index) {
            bookByid.push(booksContent);
        };
    });

    let TitleList = [];

    bookByid.forEach(booksContent => {
        TitleList.push(booksContent.title);
        ordered_by_Title = TitleList.sort();
    });

    let allOrdered = [];
    ordered_by_Title.forEach(Title => {
        bookByid.forEach(booksContent => {
            if (Title == booksContent.title) {
                allOrdered.push(booksContent);
            };
        });
    });
    console.log(allOrdered);
};

console.log("Book ordered by Title")
ordered_book()