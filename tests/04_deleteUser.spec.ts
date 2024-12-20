import { test, expect } from "@playwright/test";
import { getIdByName } from "../api-data/api.data";

test.describe("Delete user", { tag: ["@deleteUser, @integration"] }, () => {
  test("delete-user", async ({ request }) => {
    const response = await request.get("https://gorest.co.in/public/v2/users", {
      headers: {
        authorization:
          "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
      },
    });
    console.log(await response.json());

    let apiData: any;
    apiData = await response.json();
    const userName = "nameUpdate";
    const userId = getIdByName(userName, apiData);
    console.log(`ID użytkownika ${userName}: ${userId}`);

    const responsetoDelete = await request.delete(
      "https://gorest.co.in/public/v2/users/" + userId,
      {
        headers: {
          authorization:
            "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
        },
      }
    );
    expect(responsetoDelete.status()).toBe(204);

    const textStatus = response.statusText().toString();

    const responseAfterDeleted = await request.get(
      "https://gorest.co.in/public/v2/users/" + userId,
      {
        headers: {
          authorization:
            "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
        },
      }
    );
    expect(responseAfterDeleted.status()).toBe(404);
  });
  
});
