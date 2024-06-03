import { test, expect } from "@playwright/test";
import { getIdByName, updateUser } from "../api-data/api.data";

test.describe("Update user details", { tag: ["@updateUser", "@integration"] }, () => {
  test("update user details", async ({ request }) => {
    const responseGet = await request.get(
      "https://gorest.co.in/public/v2/users",
      {
        headers: {
          authorization:
            "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
        },
      }
    );

    let apiData: any;
    apiData = await responseGet.json();
    const userName = "name";
    const userId = getIdByName(userName, apiData);
    console.log(`ID user ${userName}: ${userId}`);

    const response = await request.put(
      "https://gorest.co.in/public/v2/users/" + userId,
      {
        headers: {
          authorization:
            "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
        },
        data: {
          name: "nameUpdate",
          email: "emailUpdate@gmail.com",
          gender: "female",
          status: "active",
        },
      }
    );
    
    const textStatus = response.statusText().toString();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});
