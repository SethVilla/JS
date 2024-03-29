import Router, {NextFunction, Request, Response} from 'express'

interface RequestWithBody extends Request {
body: {[key: string] : string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction) : void {

  if (req.session && req.session.loggedIn){
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted')

}
const router = Router();

router.get('/login', (req, res) => {
  res.send(`
  <form method="POST">
    <div>
    <label>Email</label>
    <input name="email" />
    </div>
    <div>
    <label>Password</label>
    <input name="password" type="password"/>
    </div>
    <button type="submit">submit</button>
  </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body;

 if (email && password && email === 'hi@hi.com' && password === 'password') {
  req.session = {loggedIn: true}
  res.redirect('/')
 } else {
   res.send('Invalid credentials')
 }

})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
      <div> You are logged in </div>
      <a href="/logout"> logout </a>
      </div>
    `)
  } else {
    res.send(`
      <div>
      <div> You are not logged in </div>
      <a href="/login"> logout </a>
      </div>
    `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route logged in user')
})



export {router}
