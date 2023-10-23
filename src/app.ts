import "dotenv/config" //ayuda a gestionar las variables de entorno
import express from 'express';
import cors from 'cors'; // Permite a los endPoints consumirse de diferentes orgigenes

import { router } from "./routes/index";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`Listen on PORT: ${PORT}`));
