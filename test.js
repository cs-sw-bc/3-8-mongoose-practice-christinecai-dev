import './app.js';
import Chef from './models/chef.js';
import Recipe from './models/recipe.js';
import Review from './models/review.js';
import mongoose from 'mongoose';

async function main() {
  // reset data for a clean seed
  await Recipe.deleteMany({});
  await Chef.deleteMany({});
  await Review.deleteMany({});

  const chefs = await Chef.insertMany([
    { name: 'Amelia Rossi', email: 'amelia@example.com', specialtyCuisine: 'Italian', yearsOfExperience: 12 },
    { name: 'Raj Patel', email: 'raj.patel@example.com', specialtyCuisine: 'Indian', yearsOfExperience: 15 },
    { name: 'Sofia Martinez', email: 'sofia.martinez@example.com', specialtyCuisine: 'Mexican', yearsOfExperience: 8 },
    { name: 'Liam Chen', email: 'liam.chen@example.com', specialtyCuisine: 'American', yearsOfExperience: 10 }
  ]);

  const chefByCuisine = chefs.reduce((acc, chef) => {
    acc[chef.specialtyCuisine.toLowerCase()] = chef;
    return acc;
  }, {});

  const recipes = [
    {
      title: 'Margherita Pizza',
      cuisine: 'Italian',
      cookingTime: 25,
      difficulty: 'medium',
      rating: 5,
      isVegetarian: true,
      chef: chefByCuisine['italian']._id,
      ingredients: [
        { ingredientName: 'Pizza dough', quantity: '1 ball', category: 'grain' },
        { ingredientName: 'Tomato sauce', quantity: '1/2 cup', category: 'vegetable' },
        { ingredientName: 'Fresh mozzarella', quantity: '6 oz', category: 'dairy' },
        { ingredientName: 'Fresh basil', quantity: '1/4 cup', category: 'vegetable' }
      ],
      instructions: [
        'Preheat oven to 475°F (245°C).',
        'Stretch dough into a 12-inch round.',
        'Spread tomato sauce thinly over dough.',
        'Add sliced mozzarella evenly.',
        'Bake 10–12 minutes until crust is golden.',
        'Top with fresh basil and a drizzle of olive oil.'
      ]
    },
    {
      title: 'Chickpea Curry',
      cuisine: 'indian',
      cookingTime: 35,
      difficulty: 'medium',
      rating: 4,
      isVegetarian: true,
      chef: chefByCuisine['indian']._id,
      ingredients: [
        { ingredientName: 'Chickpeas', quantity: '2 cups cooked', category: 'protein' },
        { ingredientName: 'Onion', quantity: '1 medium, diced', category: 'vegetable' },
        { ingredientName: 'Garlic', quantity: '3 cloves, minced', category: 'spice' },
        { ingredientName: 'Curry powder', quantity: '2 tbsp', category: 'spice' },
        { ingredientName: 'Coconut milk', quantity: '1 can', category: 'dairy' }
      ],
      instructions: [
        'Sauté onion in oil until soft.',
        'Add garlic and curry powder; cook 1 minute.',
        'Stir in chickpeas and coconut milk.',
        'Simmer 15–20 minutes until thickened.',
        'Season with salt and serve over rice.'
      ]
    },
    {
      title: 'Grilled Salmon with Herbs',
      cuisine: 'american',
      cookingTime: 20,
      difficulty: 'easy',
      rating: 4,
      isVegetarian: false,
      chef: chefByCuisine['american']._id,
      ingredients: [
        { ingredientName: 'Salmon fillets', quantity: '4 pieces', category: 'protein' },
        { ingredientName: 'Lemon', quantity: '1, sliced', category: 'fruit' },
        { ingredientName: 'Olive oil', quantity: '2 tbsp', category: 'fat' },
        { ingredientName: 'Fresh dill', quantity: '2 tbsp, chopped', category: 'herb' },
        { ingredientName: 'Salt', quantity: '1 tsp', category: 'spice' },
        { ingredientName: 'Black pepper', quantity: '1/2 tsp', category: 'spice' }
      ],
      instructions: [
        'Preheat grill to medium-high.',
        'Brush salmon with olive oil and season with salt and pepper.',
        'Place lemon slices and dill on top of each fillet.',
        'Grill 4–5 minutes per side until flaky.',
        'Rest 2 minutes before serving.'
      ]
    },
    {
      title: 'Tacos al Pastor',
      cuisine: 'mexican',
      cookingTime: 30,
      difficulty: 'medium',
      rating: 5,
      isVegetarian: false,
      chef: chefByCuisine['mexican']._id,
      ingredients: [
        { ingredientName: 'Pork shoulder', quantity: '1 lb, sliced', category: 'protein' },
        { ingredientName: 'Pineapple', quantity: '1 cup, diced', category: 'fruit' },
        { ingredientName: 'Corn tortillas', quantity: '8 tortillas', category: 'grain' },
        { ingredientName: 'Onion', quantity: '1/2 cup, diced', category: 'vegetable' },
        { ingredientName: 'Cilantro', quantity: '1/4 cup, chopped', category: 'herb' }
      ],
      instructions: [
        'Marinate pork with spices and pineapple juice for 2 hours.',
        'Heat a skillet and cook marinated pork until browned.',
        'Warm corn tortillas in a pan.',
        'Assemble tacos with pork, pineapple, onion, and cilantro.',
        'Serve with lime wedges.'
      ]
    },
    {
      title: 'Vegetable Stir-Fry',
      cuisine: 'american',
      cookingTime: 18,
      difficulty: 'easy',
      rating: 4,
      isVegetarian: true,
      chef: chefByCuisine['american']._id,
      ingredients: [
        { ingredientName: 'Broccoli florets', quantity: '2 cups', category: 'vegetable' },
        { ingredientName: 'Carrot', quantity: '1 cup, sliced', category: 'vegetable' },
        { ingredientName: 'Bell pepper', quantity: '1 cup, sliced', category: 'vegetable' },
        { ingredientName: 'Soy sauce', quantity: '3 tbsp', category: 'spice' },
        { ingredientName: 'Garlic', quantity: '2 cloves, minced', category: 'spice' }
      ],
      instructions: [
        'Heat oil in a wok over high heat.',
        'Add garlic and stir for 30 seconds.',
        'Add vegetables and stir-fry for 4–5 minutes.',
        'Pour in soy sauce and cook 1 more minute.',
        'Serve over steamed rice.'
      ]
    },
    {
      title: 'Caprese Salad',
      cuisine: 'italian',
      cookingTime: 10,
      difficulty: 'easy',
      rating: 5,
      isVegetarian: true,
      chef: chefByCuisine['italian']._id,
      ingredients: [
        { ingredientName: 'Tomatoes', quantity: '2 large, sliced', category: 'vegetable' },
        { ingredientName: 'Fresh mozzarella', quantity: '8 oz, sliced', category: 'dairy' },
        { ingredientName: 'Fresh basil', quantity: '1/4 cup leaves', category: 'vegetable' },
        { ingredientName: 'Olive oil', quantity: '2 tbsp', category: 'fat' },
        { ingredientName: 'Balsamic glaze', quantity: '1 tbsp', category: 'condiment' }
      ],
      instructions: [
        'Arrange tomato and mozzarella slices alternately on a plate.',
        'Tuck basil leaves between slices.',
        'Drizzle with olive oil and balsamic glaze.',
        'Season with salt and black pepper.',
        'Serve immediately.'
      ]
    }
  ];

  const inserted = await Recipe.insertMany(recipes);
  console.log('Inserted recipes', inserted.map(r => r.title));

  // Sample reviews tied to inserted recipes
  await Review.insertMany([
    {
      recipe: inserted[0]._id,
      reviewerName: 'Test User 1',
      comment: 'Classic and delicious.',
      stars: 5
    },
    {
      recipe: inserted[1]._id,
      reviewerName: 'Test User 2',
      comment: 'Comforting and hearty.',
      stars: 4
    }
  ]);

  //Read

  const all = await Recipe.find(); // return all recipes
  console.log('All recipes', all.map(r => r.title));

  const under30 = await Recipe.find({ cookingTime: { $lt: 30 } });
  console.log('Under 30 mins', under30.map(r => r.title));

  const vegetarian = await Recipe.find({isVegetarian:true});
  console.log('Vegetarian:', vegetarian.map(r=>r.title));

  const withOnion = await Recipe.find({
    "ingredients.ingredientName": {$regex: /onion/i}});
  console.log('Contains onion:', withOnion.map(r => r.title));

  const sortedByCookTime = await Recipe.find().sort({ cookingTime: 1 });
  console.log('Sorted by cooking time (asc):', sortedByCookTime.map(r => `${r.title} (${r.cookingTime}m)`));


  //Update
  const pizza = await Recipe.findOneAndUpdate(
    { title: 'Margherita Pizza' },
    {$set: {cookingTime: 22}},
    {new: true}
  );

  await Recipe.updateOne(
    {_id:pizza._id},
    {$push: {ingredients: {ingredientName: 'Parmesan', quantity: '2 tbsp', category: 'dairy'}}}
  );

  await Recipe.updateOne(
    {_id: pizza._id},
    {$push: {instructions: 'Finish with grated Parmesan before serving'}}
  );

  await Recipe.updateOne(
    {title: 'Margherita Pizza', 'ingredients.ingredientName': 'Fresh mozzarella'},
    {$set:{'ingredients.$.quantity': '8 oz'}}
  );

  await Recipe.updateOne(
    {title: 'Margherita Pizza'},
    {$set: {'instructions.1': "Changed instruction"}}
  );

  //Delete
  await Recipe.updateOne(
    {title: 'Margherita Pizza'},
    {$pull: {ingredients: {ingredientName: 'Fresh mozzarella'}}}
  );

  await Recipe.findOneAndDelete({title: 'Chickpea Curry'});

  await Recipe.deleteMany({cuisine:'american'});

  //Return recipes where any ingredientName contains a certain word.

  const keyward = 'onion';
  const byIngredient = await Recipe.find({
    'ingredients.ingredientName': { $regex: keyward, $options: 'i' }
  });
  console.log('Ingredient matches', byIngredient.map(r=> r.title));

  //Return recipes where any instruction contains a specific keyword.
  const instrKeyword = 'serve';
  const byInstruction = await Recipe.find({
    instructions: {$regex: instrKeyword, $options: 'i'}
  });
  console.log('Instruction matches:', byInstruction.map(r=>r.title));

  //Find recipes that have more than 4 ingredients.
  const gt4Ingredients = await Recipe.find({
    $expr: {$gt: [{$size:'$ingredients'}, 4]}
  });
  console.log('>4 ingredients', gt4Ingredients.map(r=>r.title));

  //Sort by number of instruction steps: Sort ascending and descending.
  const byStepsAsc = await Recipe.aggregate([
    {$project: {title: 1, instructionCount: {$size: {$ifNull: ['$instructions', []]}}, cookingTime: 1}},
    {$sort: {instructionCount: 1, title: 1}}
  ]);
  console.log('Instruction count asc', byStepsAsc.map(r=> `${r.title} (${r.instructionCount} steps)`));

  const byStepsDesc = await Recipe.aggregate([
    {$project: {title: 1, instructionCount: {$size: {$ifNull: ['$instructions', []]}}, cookingTime: 1}},
    {$sort: {instructionCount: -1, title: 1}}
  ]);
  console.log('Instruction count desc', byStepsDesc.map(r=> `${r.title} (${r.instructionCount} steps)`));

  //Count: how many vegetarian recipes exist

  const vegCount = await Recipe.countDocuments({ isVegetarian:true});
  console.log('Vegatarian recipe count', vegCount);

  //how many recipes contain more than 5 steps

  const gt5StepsCount = await Recipe.countDocuments({
    $expr: {$gt: [{$size: '$instructions'}, 5]}
  });
  console.log('Recipes with more than 5 steps', gt5StepsCount);

  

}

main()
    .catch(err => console.error(err))
    .finally(()=> mongoose.connection.close());
