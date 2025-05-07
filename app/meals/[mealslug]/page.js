import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDefaultPage({ params }) {
  // Defines a Next.js page component called MealDefaultPage, which receives route parameters as props.
  const meal = getMeal(params.mealslug);
  // Fetches a single meal from the database using the getMeal function, passing the 'mealslug' parameter from the URL.  This parameter corresponds to the meal's unique slug.
  if (!meal) {
    notFound();
  }
  // Checks if the meal was found. If not (meaning the slug doesn't match any meal), it calls the notFound() function, which throws a 404 error and displays Next.js's 404 page.
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  // Replaces newline characters (\n) in the meal's instructions with HTML line breaks (<br/>).  This is necessary to display multi-line instructions correctly in the browser.
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
          //// Displays the meal's instructions.  dangerouslySetInnerHTML is used because the instructions contain HTML (<br/> tags) that were added in the line above.
        ></p>
      </main>
    </>
  );
}
