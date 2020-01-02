const Cat = require('../models/cat');

// get all cats
exports.getCats = async function (req, res, next) {
    try {
        const cats = await Cat.find()
        res.json({ cats });
    } catch (err) {
        next(err);
    }
}

// create new cat
exports.createCat = async function (req, res, next) {
    try {
        const cat = new Cat(req.body);
        const newCat = await cat.save()
        res.status(201).json(newCat)
    } catch (err) {
        next(err);
    }
}

// update cat
exports.updateCat = async function (req, res, next) {
    try {
        // update the fields that came from request
        if (req.body.name != null) {
            res.cat.name = req.body.name;
        }
        if (req.body.age != null) {
            res.cat.age = req.body.age;
        }
        if (req.body.status != null) {
            res.cat.status = req.body.status;
        }

        const updatedCat = await res.cat.save()
        res.json(updatedCat)
    } catch (err) {
        next(err);
    }
}

// delete cat
exports.deleteCat = async function (req, res, next) {
    try {
        await res.cat.remove()
        res.json({ message: 'Deleted' })
    } catch (err) {
        next(err);
    }
}

// Middleware function for gettig object by ID
exports.getCat = async function (req, res, next) {
    try {
        cat = await Cat.findById(req.params.id);
        if (cat == null) {
            let err = new Error("Not found");
            err.statusCode = 404;
            next(err);
        }
        res.cat = cat;
        next();
    } catch (err) {
        next(err);
    }
}