import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meal, Created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose Your Fav Recipe to cook yourself. It is easy and Fun.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Fav Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals For You.....</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

// import Link from "next/link";
// import classes from "./page.module.css";
// import MealsGrid from "@/components/meals/meals-grid";
// import { getMeals } from "@/lib/meals";
// export default async function MealPage() {
//     const meals=await getMeals();
//   return (
//     <>
//       <header className={classes.header}>
//         <h1>
//           Delicious Meal, Created{" "}
//           <span className={classes.highlight}>by you</span>
//         </h1>
//         <p>Choose Your Fav Recipe to cook yourself. It is easy and Fun.</p>
//         <p className={classes.cta}>
//           <Link href="/meals/share">Share Your Fav Recipe</Link>
//         </p>
//       </header>
//       <main className={classes.main}>
//         <div className={classes.mealsGridWrapper}> {/* Added Wrapper Div */}
//           <MealsGrid meals={meals} />
//         </div>
//       </main>
//     </>
//   );
// }
// pages/meals/index.js
