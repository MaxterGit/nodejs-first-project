import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Primer sitio con NODE'}))

router.get('/about', (req, res) => res.render('about', { title: 'Este es el about'}))

router.get('./views/contact', (req, res) => res.render('contact'))

export default router