import { Router, Request, Response } from 'express'

const pageRouter = Router()

/**
 * @route GET /
 * @param { Request } req - Express request object.
 * @param { Response } req - Express response object.
 * @returns { void } - Responsds with the Home page.
 */
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', {
    title: "Home",
    year: 2025
  })
})

/**
 * @route GET /about
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the About page.
 */
pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', {
    title: "About Us"
  })
})

/**
 * @route GET /contact-us
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with Contact page.
 */
pageRouter.get('/contact-us', (req: Request, res: Response) => {
  res.status(200).render('contact', {
    title: "Contact Us"
  })
})

export default pageRouter