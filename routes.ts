import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, addUsers } from "./controller.ts";

const router = new Router();
router.get("/users", getUsers).post("/users", addUsers);

export default router;
