import { test, expect } from '@playwright/test';

test("API TESTING", async ({ request }) => {
  const response = await request.get("https://restful-booker.herokuapp.com/booking");
  const statusCode = response.status();
  
  console.log(statusCode);
  expect(statusCode).toBe(200);

  const body = await response.json();
  console.log(body);
});



test("Post Method", async ({ request }) => {
  const postResponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        firstname: "Abdul",
        lastname: "Rahaman",
        totalprice: 1004,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-01-02",
          checkout: "2026-01-03",
        },
        additionalneeds: "Breakfast",
      },
    }
  );

  console.log(postResponse.status());
  console.log(postResponse.statusText());
  const payload = await postResponse.json();
  console.log(payload);
  expect(payload).toHaveProperty("bookingid");
  expect(payload).toHaveProperty("booking");
});