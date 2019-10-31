import createError from 'http-errors';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose'; //This helps us to connect to our MongoDB database
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';
// import { validateUserSession } from './joi_schema/utils';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
// import 'firebase/auth';
// import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyB71-SIL8Yw5JPhNM_UYTvLvRsqhmZB2PY',
//   authDomain: 'apartmentpro-f6a90.firebaseapp.com',
//   databaseURL: 'https://apartmentpro-f6a90.firebaseio.com',
//   projectId: 'apartmentpro-f6a90',
//   storageBucket: '',
//   messagingSenderId: '662806052056',
//   appId: '1:662806052056:web:5ae938d9ef184c5d',
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const app = express();

// Setup Request logging
const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

app.use(
  morgan(logFormat, {
    skip: function(_req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr,
  }),
);

app.use(
  morgan(logFormat, {
    skip: function(_req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout,
  }),
);

app.disable('x-powered-by');
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// const uri = process.env.ATLAS_URI!;
const localUrl = 'mongodb://localhost/ApartmentPro';
mongoose.connect(localUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});
// app.use(validateUserSession.bind(this, firebase));
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

// catch 404 and forward to error handler
app.use(function(
  _req: express.Request,
  _res: express.Response,
  next: express.NextFunction,
) {
  next(createError(404));
});

// catch 400 and forward to error handler
app.use(function(
  _req: express.Request,
  _res: express.Response,
  next: express.NextFunction,
) {
  next(createError(400));
});

// error handler
app.use(function(err: any, req: express.Request, res: express.Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error =
    req.app.get('env') === 'development' ? err : { Error: 'Error' };

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
