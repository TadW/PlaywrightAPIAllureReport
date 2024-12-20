import { test, expect } from "@playwright/test";

test.describe("Get api status", { tag: ["@apiStatus, @smoke"] }, () => {
  test("status request", async ({ request }) => {
    const response = await request.get("https://gorest.co.in/");
      expect(response.status()).toBe(200);

  });
});

test.describe(
  "Get users details",
  { tag: ["@usersDetails, @integration"] },
  () => {
    test.beforeEach("status api", async ({ request }) => {
      const response = await request.get("https://gorest.co.in/");

      expect(response.status()).toBe(200);
    });

    test("get users details", async ({ request }) => {
      const response = await request.get(
        "https://gorest.co.in/public/v2/users",
        {
          headers: {
            authorization:
              "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
          },
        }
      );

      const textStatus = response.statusText().toString();
      const url = response.url();
      console.log(textStatus);
      console.log(url);

      expect(response.status()).toBe(200);
      expect(response.ok()).toBeTruthy();
      expect(textStatus).toEqual("OK");
      console.log(await response.json());
    });
  }
  
);
