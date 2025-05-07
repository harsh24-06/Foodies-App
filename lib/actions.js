"use server";
export async function shareMeal(formData) {
  //In Next.js, the "use server" directive allows you to define functions that execute on the server, even when they're written within a component file.
  //This is a powerful feature that enables you to handle form submissions, database interactions, and other server-side logic directly within your Next.js application, rather than needing a separate API.
  //Server-Side Logic: Inside the shareMeal function, you can now perform any server-side operations you need, such as:

  //Validating the form data.

  //Saving the data to a database (as you would do to save the meal).

  //Sending emails.

  //Interacting with other APIs.

  //Generating a response (e.g., redirecting the user to a success page).
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);
}
