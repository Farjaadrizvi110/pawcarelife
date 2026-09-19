export type FoodStatus = 'safe' | 'caution' | 'toxic'

export interface Food {
  name: string
  aliases: string[]
  status: FoodStatus
  note: string
}

export const FOODS: Food[] = [
  { name: 'Chicken (cooked)', aliases: ['chicken', 'cooked chicken', 'boiled chicken'], status: 'safe', note: 'Plain, unseasoned, and boneless cooked chicken is an excellent lean protein for dogs.' },
  { name: 'Rice', aliases: ['rice', 'white rice', 'brown rice'], status: 'safe', note: 'Plain cooked rice is gentle on the stomach and often recommended for mild digestive upset.' },
  { name: 'Carrots', aliases: ['carrot', 'carrots'], status: 'safe', note: 'Raw or cooked carrots are a crunchy, low-calorie snack that many dogs love.' },
  { name: 'Apples', aliases: ['apple', 'apples'], status: 'safe', note: 'Remove the seeds and core. Apple slices are a sweet, fiber-rich treat.' },
  { name: 'Bananas', aliases: ['banana', 'bananas'], status: 'safe', note: 'Safe in small amounts — high in sugar, so a few slices is plenty.' },
  { name: 'Blueberries', aliases: ['blueberry', 'blueberries'], status: 'safe', note: 'A superfood for dogs too — full of antioxidants and perfectly sized for training treats.' },
  { name: 'Pumpkin', aliases: ['pumpkin', 'canned pumpkin'], status: 'safe', note: 'Plain cooked or canned pumpkin (not pie filling) is famous for helping digestion.' },
  { name: 'Sweet potato', aliases: ['sweet potato', 'sweet potatoes', 'yam'], status: 'safe', note: 'Cooked and plain. A nutritious, fiber-rich addition in moderate amounts.' },
  { name: 'Watermelon', aliases: ['watermelon', 'melon'], status: 'safe', note: 'Seedless and rind-free only. Wonderfully hydrating in summer.' },
  { name: 'Cucumber', aliases: ['cucumber'], status: 'safe', note: 'Crunchy, hydrating, and almost calorie-free — great for overweight dogs.' },
  { name: 'Green beans', aliases: ['green beans', 'beans'], status: 'safe', note: 'Plain and unseasoned. A filling, low-calorie treat many vets recommend.' },
  { name: 'Oatmeal', aliases: ['oats', 'oatmeal', 'porridge'], status: 'safe', note: 'Cooked plain oats are a good source of fiber, especially for dogs with wheat sensitivity.' },
  { name: 'Eggs (cooked)', aliases: ['egg', 'eggs', 'scrambled eggs', 'boiled egg'], status: 'safe', note: 'Fully cooked eggs are a protein-rich treat. Avoid raw eggs due to salmonella risk.' },
  { name: 'Salmon (cooked)', aliases: ['salmon', 'fish'], status: 'safe', note: 'Cooked, boneless salmon provides omega-3s. Never feed raw salmon — it can carry a dangerous parasite.' },
  { name: 'Peanut butter', aliases: ['peanut butter', 'pb'], status: 'caution', note: 'Only if it is xylitol-free — check the label every time. High in fat, so keep portions small.' },
  { name: 'Cheese', aliases: ['cheese', 'cheddar', 'mozzarella'], status: 'caution', note: 'Small amounts are fine for most dogs, but many are lactose-sensitive. High in fat — go easy.' },
  { name: 'Bread', aliases: ['bread', 'toast'], status: 'caution', note: 'Plain bread in small pieces is harmless but empty calories. Never feed raw dough or raisin bread.' },
  { name: 'Yogurt', aliases: ['yogurt', 'yoghurt', 'greek yogurt'], status: 'caution', note: 'Plain, unsweetened yogurt in small amounts. Avoid anything with xylitol or added sugar.' },
  { name: 'Corn', aliases: ['corn', 'sweetcorn'], status: 'caution', note: 'Kernels are fine — but never the cob, which can cause a life-threatening intestinal blockage.' },
  { name: 'Turkey', aliases: ['turkey'], status: 'caution', note: 'Plain cooked turkey meat is fine. Skip the skin, bones, and seasoned holiday leftovers.' },
  { name: 'Honey', aliases: ['honey'], status: 'caution', note: 'A small lick is safe for adult dogs, but it is pure sugar — rarely and tiny amounts only.' },
  { name: 'Mango', aliases: ['mango'], status: 'caution', note: 'The flesh is safe and vitamin-rich, but remove the pit — it is a choking and blockage hazard.' },
  { name: 'Pineapple', aliases: ['pineapple'], status: 'caution', note: 'Fresh pineapple in small chunks is safe; it is sugary and acidic, so keep it occasional.' },
  { name: 'Potatoes', aliases: ['potato', 'potatoes'], status: 'caution', note: 'Cooked plain potato is fine. Raw potatoes and green skins contain solanine, which is toxic.' },
  { name: 'Chocolate', aliases: ['chocolate', 'cocoa', 'dark chocolate', 'milk chocolate'], status: 'toxic', note: 'Contains theobromine, which dogs cannot process. The darker the chocolate, the more dangerous. Call a vet immediately.' },
  { name: 'Grapes & raisins', aliases: ['grapes', 'grape', 'raisins', 'raisin', 'sultanas'], status: 'toxic', note: 'Can cause sudden kidney failure, even in tiny amounts. Never feed — and treat any ingestion as an emergency.' },
  { name: 'Onions', aliases: ['onion', 'onions', 'onion powder'], status: 'toxic', note: 'Damage red blood cells and can cause anemia — raw, cooked, or powdered. Keep all onion away from dogs.' },
  { name: 'Garlic', aliases: ['garlic', 'garlic powder'], status: 'toxic', note: 'Even more concentrated than onion. All forms are dangerous to dogs.' },
  { name: 'Xylitol', aliases: ['xylitol', 'sugar free gum', 'sugar-free', 'birch sugar', 'chewing gum'], status: 'toxic', note: 'Found in sugar-free gum, candy, and some peanut butters. Causes life-threatening blood-sugar drops. Emergency.' },
  { name: 'Avocado', aliases: ['avocado', 'guacamole'], status: 'toxic', note: 'Contains persin, and the pit is a serious blockage hazard. Best kept off the menu entirely.' },
  { name: 'Macadamia nuts', aliases: ['macadamia', 'macadamia nuts', 'macadamias'], status: 'toxic', note: 'Even a few can cause weakness, vomiting, and tremors. Call your vet if eaten.' },
  { name: 'Alcohol', aliases: ['alcohol', 'beer', 'wine', 'liquor'], status: 'toxic', note: 'Dogs are far more sensitive to alcohol than humans. Even small amounts are dangerous.' },
  { name: 'Caffeine', aliases: ['coffee', 'tea', 'caffeine', 'energy drink', 'espresso'], status: 'toxic', note: 'Coffee, tea, and energy drinks can cause dangerous heart and nervous-system effects.' },
  { name: 'Cooked bones', aliases: ['bones', 'cooked bones', 'chicken bones', 'bone'], status: 'toxic', note: 'Cooked bones splinter and can puncture the digestive tract. Never feed them.' },
  { name: 'Cherries', aliases: ['cherry', 'cherries'], status: 'toxic', note: 'Pits, stems, and leaves contain cyanide. The flesh is not worth the risk — skip them.' },
  { name: 'Nutmeg', aliases: ['nutmeg'], status: 'toxic', note: 'Contains myristicin, which can cause hallucinations, high heart rate, and seizures in dogs.' },
]

export function searchFoods(query: string): Food[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return FOODS.filter(
    (f) =>
      f.name.toLowerCase().includes(q) ||
      f.aliases.some((a) => a.includes(q) || q.includes(a)),
  )
}
