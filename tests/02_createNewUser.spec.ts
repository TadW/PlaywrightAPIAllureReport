import { test, expect } from "@playwright/test";
import { createUsera } from "../api-data/api.data";

test.describe(
  "Create a new user ",
  { tag: ["@newUser, @integration"] },
  () => {
    test("get users details", async ({ request }) => {
      const response = await request.get(
        "https://gorest.co.in/public/v2/users"
      );

      const resHeader = response.headers();
      const textStatus = response.statusText().toString();
      const url = response.url();
      console.log(resHeader);
      console.log(textStatus);
      console.log(url);

      let apiData: any;
      apiData = await response.json();
      console.log(apiData);

      expect(response.status()).toBe(200);

      expect(textStatus).toEqual("OK");
      console.log(await response.json());
    });

    test("create new user", async ({ request }) => {
      const response = await request.post(
        "https://gorest.co.in/public/v2/users",
        {
          headers: {
            authorization:
              "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
          },
          data: {
            name: "name",
            email: "email@email.com",
            gender: "female",
            status: "active",
          },
        }
      );

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(201);
    });
  }
  
);
