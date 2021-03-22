import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

import restRouters from "./interfaces/rest/router";
import createMongooseConnection from "./services/database";

createMongooseConnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-k0epto-i.eu.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'https://ram/api',
    issuer: `https://dev-k0epto-i.eu.auth0.com/`,
    algorithms: ['RS256']
});

app.use(checkJwt);

app.use("/api/v1", restRouters);

export { app };
