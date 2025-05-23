import { expect, test } from "@playwright/test";

test("Users can view all articles", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation").getByText("articles").click();
  await expect(page.getByRole("heading")).toContainText("Articles");
});

test("Users can view all projects", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation").getByText("projects").click();
  await expect(page.getByRole("heading")).toContainText("Projects");
});

test("can view details on a project", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation").getByText("projects").click();
  await page.getByText("Haztrak").click();
  await expect(page.getByRole("main")).toContainText("Haztrak");
});

test("users can view individual articles", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation").getByText("articles").click();
  await page.getByText("My Ultimate Reading List").click();
  await expect(page.getByRole("heading", { name: "Reads Worth Their Weight When" })).toBeVisible();
});
test("dark mode toggles theme", async ({ page }) => {
  await page.goto("/");
  const htmlElement = page.locator("html");

  const initialTheme = await htmlElement.getAttribute("data-theme");
  await page.getByRole("button", { name: "Theme Toggle" }).click();

  const newTheme = await htmlElement.getAttribute("data-theme");
  expect(initialTheme).not.toEqual(newTheme);
});
