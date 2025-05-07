import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error('Loading Meals Failed..')
  return db.prepare("SELECT * FROM meals").all();
}
export function getMeal(slug) {
  return db.prepare("Select * FROM meals WHERE slug = ?").get(slug);
}
export async function saveMeal(meal) {
  //Generate Slug: It creates a URL-friendly slug from the meal title using the slugify library (e.g., "Delicious Pizza" becomes "delicious-pizza"). This slug is used for the meal's URL.
  meal.slug = slugify(meal.title, { lower: true });
  //Sanatize Instructions: It uses the xss library to prevent cross-site scripting (XSS) attacks. This is very important for security, as it removes any potentially harmful HTML or JavaScript code from the user-provided instructions.
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop(); //.jpg .png
  const fileName = `${meal.slug}.${extension}`; //append extension with slug
  const stream = fs.createWriteStream(`public/images/${fileName}`); //It creates a write stream to save the image file to the public/images/ directory.
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image Failed");
    }
  });
  //t updates the meal.image property to store the path to the saved image (e.g., /images/delicious-pizza.jpg). This path will be stored in the database, not the raw image data
  meal.image = `/images/${fileName}`;
  db.prepare(
    `INSERT INTO meals (title,summary,instructions,creator,creator_email,image,slug)
      VALUES(  
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
          )
      `
  ).run(meal);
}
