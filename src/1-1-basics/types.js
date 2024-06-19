function Product(
    ID,
    name,
    description,
    price,
    brand,
    sizes,
    activeSize,
    quantity,
    date,
    reviews,
    images
) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;

    // getters & setters

    this.getProductID = function () {
        return this.ID;
    };

    this.setProductID = function (newID) {
        this.ID = newID;
    };

    this.getProductName = function () {
        return this.name;
    };

    this.setProductName = function (newName) {
        this.name = newName;
    };

    this.getProductDescription = function () {
        return this.description;
    };

    this.setProductDescription = function (newDescription) {
        this.description = newDescription;
    };

    this.getProductPrice = function () {
        return this.price;
    };

    this.setProductPrice = function (newPrice) {
        this.price = newPrice;
    };

    this.getProductBrand = function () {
        return this.brand;
    };

    this.setProductBrand = function (newBrand) {
        this.brand = newBrand;
    };

    this.getProductSizes = function () {
        return this.sizes;
    };

    this.setProductSizes = function (newSizes) {
        this.sizes = newSizes;
    };

    this.getProductActiveSize = function () {
        return this.activeSize;
    };

    this.setProductActiveSize = function (newActiveSize) {
        this.activeSize = newActiveSize;
    };

    this.getProductQuantity = function () {
        return this.Quantity;
    };

    this.setProductQuantity = function (newQuantity) {
        this.Quantity = newQuantity;
    };

    this.getProductDate = function () {
        const [datePart, timePart] = this.date.toLocaleString().split(', ');
        const [day, month, year] = datePart.split('.');

        return `${year}-${month}-${day} ${timePart}`;
    }

    this.setProductDate = function (newDate) {
        this.date = new Date(Date(newDate));
    }

    this.getProductReviews = function () {
        return this.reviews;
    }
    this.setProductReviews = function (newReviews) {
        this.reviews = newReviews;
    }

    this.getProductImages = function () {
        return this.images;
    }
    this.setProductImages = function (newImages) {
        this.images = newImages;
    }

    // additional methods

    this.getReviewByID = function (reviewID) {
        return this.reviews.find(({ ID }) => ID === reviewID) || 'no such a review';
    }

    this.getImage = function (imgIndex) {
        return this.images[imgIndex] || images[0];
    }

    this.addSize = function (newSize) {
        this.sizes.push(newSize);
        return this.sizes;
    }

    this.deleteSize = function (sizeToDelete) {
        const index = this.sizes.indexOf(sizeToDelete);
        if (index !== -1) this.sizes.splice(index, 1);

        return index !== -1 ? this.sizes : 'no such a size';
    }

    this.addReview = function (newReview) {
        this.reviews.push(newReview);
        return this.reviews;
    }

    this.deleteReview = function (IdToDelete) {
        const index = this.reviews.findIndex(({ ID }) => ID === IdToDelete);
        if (index !== -1) this.reviews.splice(index, 1);

        return index !== -1 ? this.reviews : 'no such a review';
    }

    this.getAverageRating = function () {
        const resultRating = { service: 0, price: 0, value: 0, quality: 0 }

        this.reviews.map(({ rating }) => {
            for (const rate in rating) {
                resultRating[rate] += rating[rate]
            }
        });

        for (const rate in resultRating) {
            resultRating[rate] = Math.round(resultRating[rate] / this.reviews.length * 100) / 100;
        }

        return resultRating;
    }
}

function review(
    ID,
    author,
    date,
    comment,
    rating
) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = {
        service: rating[0],
        price: rating[1],
        value: rating[2],
        quality: rating[3],
    };

    this.getReviewID = function () {
        return this.ID;
    }
    this.setReviewID = function (newRevID) {
        this.ID = newRevID;
    }
    this.getReviewAuthor = function () {
        return this.author;
    }
    this.setReviewAutor = function (newAuthor) {
        this.author = newAuthor;
    }
    this.getReviewDate = function () {
        return this.date;
    }
    this.setReviewDate = function (newRevDate) {
        this.date = newRevDate;
    }
    this.getReviewComment = function () {
        return this.comment
    }
    this.setReviewComment = function (newComment) {
        this.comment = newComment;
    }
    this.getReviewRating = function () {
        return this.rating;
    }
    this.setReviewRating = function (newRating) {
        this.rating = {
            service: newRating[0],
            price: newRating[1],
            value: newRating[2],
            quality: newRating[3],
        };
    }
}

const review1 = new review(
    "01",
    "Author1",
    new Date(),
    "comment1",
    [7, 8, 9, 10]
);
const review2 = new review(
    "02",
    "Author2",
    new Date(),
    "comment2",
    [1, 2, 3, 4]
);

const review3 = new review(
    "03",
    "Author3",
    new Date(),
    "comment3",
    [5, 6, 7, 8]
);

const review4 = new review(
    "04",
    "Author4",
    new Date(),
    "comment4",
    [7, 6, 7, 8]
);

const product1 = new Product(
    "07",
    "name1",
    "description1 search t-shirt",
    333,
    "brand1",
    ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    'XS',
    1,
    new Date(),
    [review1, review2, review3],
    ["img1", "img2", "img3"]
);

const product2 = new Product(
    "02",
    "aname2",
    "description2 for search jacket",
    123,
    "brand2",
    ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    'XS',
    2,
    new Date(),
    [review1, review2, review3],
    ["img1", "img2", "img3", "img4"]
);

const product3 = new Product(
    "03",
    "bname3",
    "description3 for local search jeans",
    252,
    "brand3",
    ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    'XS',
    3,
    new Date(),
    [review1, review2, review3],
    ["img1", "img2", "img3", "img4", "img5"]
);

// console.log(review1);
// console.log(review1.rating["price"]);
// console.log(product1.getProductID());
// console.log(product1.getProductDate());
// console.log(product1.getReviewByID('01'));
// console.log(product1.getReviewByID('04'));
// console.log(product1.getImage('1'));
// console.log(product1.getImage('4'));

// console.log(product1.addSize('NEW'));
// console.log(product1.deleteSize('XXL'));
// console.log(product1.deleteSize('FF'));

// console.log(product1.addReview(review4));
// console.log(product1.deleteReview('01'));
// console.log(product1.deleteReview('101'));

// console.log(product1.getAverageRating());

const products = [product1, product2, product3];

const searchProduct = (products, search) => {
    return products.filter(({ name, description }) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase()));
}

const sortProduct = (products, sortRule) => {
    if (sortRule.toLowerCase() === 'id') return [...products].sort((first, second) => first.ID.localeCompare(second.ID))
    else if (sortRule.toLowerCase() === 'name') return [...products].sort((first, second) => first.name.localeCompare(second.name))
    else if (sortRule.toLowerCase() === 'price') return [...products].sort((first, second) => first.price - second.price)
    else { return 'wrong sortRule' }
}

// console.log(searchProduct(products, 'for'));
// console.log(sortProduct(products, 'price'));
