import Elysia from "elysia";
import page from "./page";

export default new Elysia().get("/contact", page);