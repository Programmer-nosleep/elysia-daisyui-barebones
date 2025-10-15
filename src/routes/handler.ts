import Elysia from "elysia";
import home from "./home";
import contact from "./contact";
import project from "./project";

export default new Elysia().use(home).use(contact).use(project);
