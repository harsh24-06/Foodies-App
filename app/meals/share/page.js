import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
export default function ShareMealPage() {
  //When the user submits the form (by clicking the "Share Meal" button), Next.js intercepts the form submission
  //and sends the form data to the shareMeal function on the server.The browser does not perform a full page reload.
  async function shareMeal(formData) {
    //In Next.js, the "use server" directive allows you to define functions that execute on the server, even when they're written within a component file.
    //This is a powerful feature that enables you to handle form submissions, database interactions, and other server-side logic directly within your Next.js application, rather than needing a separate API.
    //Server-Side Logic: Inside the shareMeal function, you can now perform any server-side operations you need, such as:

    //Validating the form data.

    //Saving the data to a database (as you would do to save the meal).

    //Sending emails.

    //Interacting with other APIs.

    //Generating a response (e.g., redirecting the user to a success page).
    "use server";
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
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image is" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
