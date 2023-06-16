import Express from 'express';
import Next from 'next';

const dev = process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handle = app.getRequestHandler()

// Your app will get the Azure port from the process.enc.PORT
const port = process.env.PORT || "8080";

app
    .prepare()
    .then(() => {
        const server = Express()

        server.get('*', (req: Express.Request, res: Express.Response) => {
            return handle(req, res)
        })

        server.listen((_port: String, err: Error) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + port)
        })
    })
    .catch((err: Error) => {
        console.error(err.stack)
        process.exit(1)
    })