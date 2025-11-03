"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
/**
 * @route GET /
 * @param { Request } req - Express request object.
 * @param { Response } req - Express response object.
 * @returns { void } - Responsds with the Home page.
 */
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', {
        title: "Home",
        year: 2025
    });
});
/**
 * @route GET /about
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the About page.
 */
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: "About Us"
    });
});
/**
 * @route GET /contact-us
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with Contact page.
 */
pageRouter.get('/contact-us', (req, res) => {
    res.status(200).render('contact', {
        title: "Contact Us"
    });
});
exports.default = pageRouter;
