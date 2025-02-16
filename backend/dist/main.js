"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.use(cookieParser());
    await app.listen(3007);
    console.log('Server running on http://localhost:3007');
}
bootstrap();
//# sourceMappingURL=main.js.map