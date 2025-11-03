"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const page_routes_1 = __importDefault(require("./routes/page.routes"));
// Create server
const app = (0, express_1.default)();
// Set view engine to EJS
app.set('view engine', 'EJS');
app.set('views', path_1.default.join(__dirname, '../src/views')); // Tell Express where to look for the EJS pages
// Middleware
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'))); // Set the public directory
// Routes
app.use('/', page_routes_1.default);
// Fallback / 404
app.use((req, res, next) => {
    res.status(404).send("Invalid route!");
});
// Start server
const PORT = process.env.PORT;
if (!PORT) {
    throw new Error("Missing port!");
}
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
