import express from 'express'
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
const app = express();
import { AppRouter } from './AppRouter';
import './controllers/LoginController'
app.use(express.json());
app.use(cookieSession({keys: ['test']}))
app.use(express.urlencoded({
  extended: true
}));

app.use(router)
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('listening on port 3000')
} )
