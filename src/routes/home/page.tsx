import { Html } from "@elysiajs/html";
import DefaultLayout from "../../components/layout/default";
import { Context } from "elysia";

export default async (context: Context) => {
  return (
    <DefaultLayout>
      <h1>Hello World</h1>
    </DefaultLayout>
  );
};
