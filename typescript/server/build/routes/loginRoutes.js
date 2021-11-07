"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = (0, express_1.default)();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n  <form method=\"POST\">\n    <div>\n    <label>Email</label>\n    <input name=\"email\" />\n    </div>\n    <div>\n    <label>Password</label>\n    <input name=\"password\" type=\"password\"/>\n    </div>\n    <button type=\"submit\">submit</button>\n  </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid credentials');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n      <div> You are logged in </div>\n      <a href=\"/logout\"> logout </a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n      <div> You are not logged in </div>\n      <a href=\"/login\"> logout </a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route logged in user');
});
