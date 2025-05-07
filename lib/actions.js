"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
export async function shareMeal(formData) {
  //   This function is triggered when the form on the "Share Meal" page is submitted.
  //   It's marked with "use server", so it runs on the server.
  //   It receives the form data as a FormData object.
  //   It extracts the meal data (title, summary, etc.) from the FormData.
  //   Crucially, it calls the saveMeal function to handle the actual saving process.
  //   Finally, it redirects the user to the "/meals" page after the meal is saved.
  //   In Next.js, the "use server" directive allows you to define functions that execute on the server, even when they're written within a component file.
  //   This is a powerful feature that enables you to handle form submissions, database interactions, and other server-side logic directly within your Next.js application, rather than needing a separate API.
  //   Server-Side Logic: Inside the shareMeal function, you can now perform any server-side operations you need, such as:

  //   Validating the form data.

  //   Saving the data to a database (as you would do to save the meal).

  //   Sending emails.

  //   Interacting with other APIs.

  //   Generating a response (e.g., redirecting the user to a success page).
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  //   console.log(meal);
  //This function does the heavy lifting of saving the meal data.
  //It receives the meal object (extracted from the form data).
  await saveMeal(meal);
  redirect("/meals");
}
