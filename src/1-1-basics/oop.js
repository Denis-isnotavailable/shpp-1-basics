class AbstractProduct {
    constructor(
        ID,
        name,
        description,
        price,
        brand,
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
        this.quantity = quantity;
        this.date = date;
        this.reviews = reviews;
        this.images = images;
    }

    getID() { return this.ID };
    setID(id) { this.ID = id; };
    setName(name) { this.name = name };
    getName() { return this.name };
    getDescription() { return this.description };
    setDescription(description) { this.description = description; };
    getPrice() { return this.price };
    setPrice(price) { this.price = price };
    getBrand() { return this.brand };
    setBrand(brand) { this.brand = brand; };
    getQuantity() { return this.quantity };
    setQuantity(quantity) { this.quantity = quantity };
    getDate() { return this.date };
    setDate(date) { this.date = date };
    getReviews() { return this.reviews };
    setReviews(reviews) { this.reviews = reviews; };
    getImages() { return this.images };
    setImages(images) { this.quantimagesty = images };

    // additional methods

    getReviewByID(reviewID) {
        return this.reviews.find(({ ID }) => ID === reviewID) || 'no such a review';
    }

    getImage(imgIndex) {
        return this.images[imgIndex] || images[0];
    }

    addReview(newReview) {
        this.reviews.push(newReview);
        return this.reviews;
    }

    deleteReview(IdToDelete) {
        const index = this.reviews.findIndex(({ ID }) => ID === IdToDelete);
        if (index !== -1) this.reviews.splice(index, 1);

        return index !== -1 ? this.reviews : 'no such a review';
    }

    getAverageRating() {
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

    getFullInformation() {
        return `
            ID: ${this.ID},
            name: ${this.name},
            description: ${this.description},
            price: ${this.price},
            brand: ${this.brand},
            quantity: ${this.quantity},
            date: ${this.date},
            reviews: ${this.reviews},
            images: ${this.images}
        `;
    }

    getPriceForQuantity(int) {
        return `$ ${this.price * int}`
    }
    getterMulti(fieldName) {
        switch (fieldName.toLowerCase()) {
            case 'id':
                return this.ID;
            case 'name':
                return this.name;
            case 'description':
                return this.description;
            case 'price':
                return this.price;
            case 'brand':
                return this.brand;
            case 'quantity':
                return this.quantity;
            case 'date':
                return this.date;
            case 'reviews':
                return this.reviews;
            case 'images':
                return this.images;

            default:
                return 'no such a field';
        }
    }

    setterMulti(fieldName, value) {
        switch (fieldName.toLowerCase()) {
            case 'id':
                this.ID = value;
                break;
            case 'name':
                this.name = value;
                break;
            case 'description':
                this.description = value;
                break;
            case 'price':
                this.price = value;
                break;
            case 'brand':
                this.brand = value;
                break;
            case 'quantity':
                this.quantity = value;
                break;
            case 'date':
                this.date = value;
                break;
            case 'reviews':
                this.reviews = value;
                break;
            case 'images':
                this.images = value;
                break;

            default:
                return 'no such a field';
        }
    }
}

class Clothes extends AbstractProduct {
    constructor(
        ID,
        name,
        description,
        price,
        brand,
        quantity,
        date,
        reviews,
        images,
        material,
        color
    ) {
        super(
            ID,
            name,
            description,
            price,
            brand,
            quantity,
            date,
            reviews,
            images
        );
        this.material = material;
        this.color = color;
    }

    getMaterial() { return this.material };
    setMaterial(material) { this.material = material };
    getColor() { return this.color }
    setColor(color) { this.color = color };
}

class Electronics extends AbstractProduct {
    constructor(
        ID,
        name,
        description,
        price,
        brand,
        quantity,
        date,
        reviews,
        images,
        warranty,
        power
    ) {
        super(
            ID,
            name,
            description,
            price,
            brand,
            quantity,
            date,
            reviews,
            images
        );
        this.warranty = warranty;
        this.power = power;
    }

    getWarranty() { return this.warranty };
    setWarranty(warranty) { this.warranty = warranty };
    getPower() { return this.power }
    setPower(power) { this.power = power };
}

class Review {
    constructor(
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
    }

    getReviewID() { return this.ID; };
    setReviewID(newRevID) { this.ID = newRevID; };
    getReviewAuthor() { return this.author; };
    setReviewAutor(newAuthor) { this.author = newAuthor; };
    getReviewDate() { return this.date; };
    setReviewDate(newRevDate) { this.date = newRevDate; };
    getReviewComment() { return this.comment; };
    setReviewComment(newComment) { this.comment = newComment; };
    getReviewRating() { return this.rating; };
    setReviewRating(newRating) {
        this.rating = {
            service: newRating[0],
            price: newRating[1],
            value: newRating[2],
            quality: newRating[3],
        };
    };
}


const review1 = new Review(
    "01",
    "Author1",
    new Date(),
    "comment1",
    [7, 8, 9, 10]
);
const review2 = new Review(
    "02",
    "Author2",
    new Date(),
    "comment2",
    [1, 2, 3, 4]
);

const review3 = new Review(
    "03",
    "Author3",
    new Date(),
    "comment3",
    [5, 6, 7, 8]
);

const review4 = new Review(
    "04",
    "Author4",
    new Date(),
    "comment4",
    [7, 6, 7, 8]
);

const product1 = new Clothes(
    "07",
    "name1",
    "description1 search t-shirt",
    333,
    "brand1",
    1,
    new Date(),
    [review1, review2, review3, review4],
    ["img1", "img2", "img3"],
    'leather',
    'black'
);

const product2 = new Clothes(
    "02",
    "aname2",
    "description2 for search jacket",
    123,
    "brand2",
    2,
    new Date(),
    [review1, review2, review3],
    ["img1", "img2", "img3", "img4"],
    'leather',
    'black'
);

const product3 = new Clothes(
    "03",
    "bname3",
    "description3 for local search jeans",
    252,
    "brand3",
    3,
    new Date(),
    [review1, review2, review3],
    ["img1", "img2", "img3", "img4", "img5"],
    'leather',
    'black'
);

// console.log(product1.getterMulti('id') + ' is equal ' + product1.getID());
// product1.setterMulti('id', '00000003');
// console.log(product1.getID());
// console.log(product1.getAverageRating());
// console.log(product1.getMaterial());
console.log(product1.getFullInformation());
console.log(product1.getPriceForQuantity(2));


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