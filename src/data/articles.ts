export type Category =
  | 'Dog Care'
  | 'Cat Care'
  | 'Pet Health'
  | 'Street Animals'
  | 'Donkey Welfare'

export interface CategoryMeta {
  name: Category
  color: string
  soft: string
  blurb: string
  icon: 'dog' | 'cat' | 'health' | 'street' | 'donkey'
}

export const CATEGORIES: CategoryMeta[] = [
  {
    name: 'Dog Care',
    color: '#c45c3e',
    soft: '#f7e3db',
    blurb: 'Practical, vet-aware guides for dog owners everywhere.',
    icon: 'dog',
  },
  {
    name: 'Cat Care',
    color: '#e89b50',
    soft: '#fbeed9',
    blurb: 'Understand your cat — health, behavior, and happiness.',
    icon: 'cat',
  },
  {
    name: 'Pet Health',
    color: '#4a7a5c',
    soft: '#e2ede5',
    blurb: 'Spot problems early and know when to see a vet.',
    icon: 'health',
  },
  {
    name: 'Street Animals',
    color: '#5b7f95',
    soft: '#e3ebf0',
    blurb: 'Real rescues, real shelters, real ways to help strays.',
    icon: 'street',
  },
  {
    name: 'Donkey Welfare',
    color: '#1a3d2e',
    soft: '#dfe8e2',
    blurb: 'The stories of working animals the world ignores.',
    icon: 'donkey',
  },
]

export interface ArticleSection {
  heading: string
  /** Lightweight markup: "- " bullet, "# " numbered step, "### " sub-heading, "> " callout, "! " warning list item, "| " table row (cells split by " | ") */
  body: string[]
}

export interface Article {
  slug: string
  title: string
  category: Category
  excerpt: string
  readTime: number
  keyword: string
  featured?: boolean
  health?: boolean
  image?: string
  imageAlt?: string
  intro: string[]
  sections: ArticleSection[]
  faq: { q: string; a: string }[]
  related: string[]
}

export const VET_DISCLAIMER =
  'This article is for informational purposes only and is not a substitute for professional veterinary advice. Always consult a qualified veterinarian.'

export const ARTICLES: Article[] = [
  {
    slug: 'why-does-my-dog-eat-grass',
    title: 'Why Does My Dog Eat Grass? 7 Vet-Approved Reasons',
    category: 'Dog Care',
    excerpt:
      "Wondering why your dog eats grass? Learn 7 common reasons, when it's harmless, when to worry, and when to call a vet — explained simply.",
    readTime: 7,
    keyword: 'why does my dog eat grass',
    featured: true,
    health: true,
    image: 'dog-grass',
    imageAlt: 'dog eating grass in park — why does my dog eat grass',
    intro: [
      "You're out for a walk, everything is normal — and suddenly your dog drops their head and starts munching grass like a tiny cow. If you've ever wondered why does my dog eat grass, you're not alone. It's one of the most common questions dog owners ask, and the good news is: in most cases, it's completely normal.",
      "In this guide, we'll walk through the real reasons behind grass-eating, when it's harmless, the few warning signs to watch for, and simple things you can do at home. Let's dig in.",
    ],
    sections: [
      {
        heading: 'Is It Normal for Dogs to Eat Grass?',
        body: [
          "Yes — and it's far more common than most owners think. Studies and veterinary surveys suggest that the majority of dogs eat grass or plants at some point in their lives. Vets even have a name for it: pica, the tendency to eat things that aren't food.",
          'Wild dogs and wolves eat plants too, so this behavior is likely something your dog inherited from their ancestors. It\'s built into their instincts — not a sign that something is "wrong" with your specific dog.',
          'That said, why they do it can vary. Here are the seven most common reasons.',
        ],
      },
      {
        heading: '7 Reasons Dogs Eat Grass',
        body: [
          '### 1. They simply like the taste',
          "It sounds too simple, but it's true. Many dogs genuinely enjoy the taste and texture of fresh, young grass — especially in spring when the blades are soft and sweet. If your dog grazes calmly and happily, this is probably your answer.",
          '### 2. An inherited instinct from wild ancestors',
          'Wild canines ate the entire prey animal — including the plant material in its stomach. Eating grass may be a leftover survival instinct that helped their ancestors get fiber and nutrients from whatever was available.',
          '### 3. They need more fiber',
          "Grass is full of fiber. If your dog's diet is low in fiber, they may instinctively seek it out. Fiber helps with digestion and keeps bowel movements regular — so occasional grazing can actually serve a purpose.",
          '> Quick check: Is your dog on a complete, balanced diet? If not, a food upgrade may reduce the grass-snacking.',
          '### 4. Boredom',
          "A bored dog finds entertainment wherever they can — and sometimes that entertainment is your lawn. Dogs left alone in the yard for long periods with nothing to do often graze out of pure boredom, the way humans snack when they're not really hungry.",
          '> Fix: more walks, play sessions, puzzle toys, and mental stimulation.',
          '### 5. An upset stomach (sometimes)',
          "This is the most famous theory: dogs eat grass to make themselves vomit and relieve nausea. Here's the interesting part — research suggests this is actually less common than people believe. Most grass-eating dogs don't vomit afterward and weren't showing signs of illness before.",
          'But it does happen. If your dog suddenly eats grass frantically and then vomits, their stomach was probably already upset — the grass was the attempt at self-medication, not the cause.',
          '### 6. Anxiety or stress',
          "Just like some people bite their nails, some dogs graze when they're anxious. If grass-eating spikes during stressful events (thunderstorms, being left alone, changes at home), stress may be the root cause.",
          '### 7. Attention-seeking',
          'Dogs are brilliant students of human behavior. If eating grass once earned a big reaction from you — "No! Stop that!" — your dog may have learned it\'s a reliable way to get your attention.',
        ],
      },
      {
        heading: 'Is Grass Bad for Dogs? When to Worry',
        body: [
          'For most dogs, plain grass is harmless. But there are three real risks to know about:',
          '| Risk | What to do',
          '| Pesticides & chemicals | Never let your dog eat grass from treated lawns, parks, or roadsides. Herbicides and fertilizers can be toxic.',
          "| Parasites | Grass in public areas can carry parasite eggs from other animals' droppings. Keep deworming up to date.",
          '| Toxic plants nearby | Many common garden plants mixed in with grass (like azaleas, lilies, foxglove) are dangerous to dogs.',
          'Call your vet if you notice:',
          '! Eating grass frantically or compulsively, every single day',
          '! Vomiting frequently after eating grass (more than occasionally)',
          '! Additional symptoms: diarrhea, lethargy, loss of appetite, or weight loss',
          '! Sudden behavior change in a dog who never ate grass before',
          'A single vomit after grazing is usually nothing. A pattern is worth a vet visit.',
        ],
      },
      {
        heading: 'How to Stop Your Dog from Eating Grass (If You Want To)',
        body: [
          'If the habit bothers you — or your dog keeps grazing on chemically treated grass — try these gentle steps:',
          '# Upgrade the diet. Ask your vet whether a higher-fiber food suits your dog.',
          '# Add safe greens. Some owners offer dog-safe veggies like cucumber, carrots, or lettuce as an alternative "crunch."',
          '# Increase exercise and play. A tired, mentally stimulated dog grazes far less.',
          '# Train a "leave it" command. Reward heavily when your dog ignores grass on walks.',
          '# Grow a pet-safe grass pot. A small tray of untreated wheatgrass at home gives your dog a safe outlet for the instinct.',
          "Never punish grass-eating — it's a natural behavior, and punishment only creates anxiety (which, ironically, can cause more grazing).",
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          "So, why does your dog eat grass? Most likely because they're a dog. It's an ancient, instinctive, usually harmless behavior driven by taste, curiosity, boredom, or a little extra fiber-seeking.",
          'Keep them away from chemically treated grass, stay current on parasite prevention, and mention it at your next vet visit if it becomes obsessive.',
          "Your dog isn't broken. They're just... a tiny cow sometimes.",
        ],
      },
    ],
    faq: [
      {
        q: 'Is it OK to let my dog eat grass?',
        a: "Yes, as long as the grass hasn't been treated with pesticides, herbicides, or fertilizers, and your dog is up to date on parasite prevention. Plain, untreated grass is generally safe.",
      },
      {
        q: 'Do dogs eat grass to make themselves sick?',
        a: "Sometimes, but it's less common than people think. Research shows most dogs don't vomit after eating grass and weren't ill beforehand. Frantic grass-eating followed by vomiting usually means the stomach was already upset.",
      },
      {
        q: 'Should I stop my dog from eating grass?',
        a: "Usually there's no need. If it's excessive or the grass may be chemically treated, redirect with training, more exercise, and dog-safe vegetables instead.",
      },
      {
        q: 'Can eating grass be a sign of illness?',
        a: 'Occasionally. If grass-eating comes with frequent vomiting, diarrhea, lethargy, or appetite loss, see your veterinarian to rule out digestive issues.',
      },
      {
        q: 'What can I give my dog instead of grass?',
        a: 'Dog-safe crunchy vegetables like carrots, cucumber, and lettuce, or a home-grown pot of untreated wheatgrass, can satisfy the same urge safely.',
      },
    ],
    related: ['signs-of-dehydration-in-dogs', 'human-foods-dogs-can-cant-eat', 'when-to-take-pet-to-vet'],
  },
  {
    slug: 'how-often-should-you-bathe-a-dog',
    title: 'How Often Should You Bathe a Dog? A Simple Guide',
    category: 'Dog Care',
    excerpt:
      'How often should you bathe a dog? It depends on coat, lifestyle, and skin. Here is a simple bathing schedule that keeps your dog clean and healthy.',
    readTime: 6,
    keyword: 'how often should you bathe a dog',
    health: true,
    intro: [
      'Some dogs seem to find every mud puddle in the neighborhood. Others stay spotless for weeks. So how often should you bathe a dog, really? The honest answer: it depends — but there are simple rules that work for almost every dog.',
      "Bathe too rarely and you get odor, dirt, and skin problems. Bathe too often and you strip the natural oils that keep your dog's coat healthy. Here's how to find the sweet spot.",
    ],
    sections: [
      {
        heading: 'The Short Answer',
        body: [
          'Most healthy dogs do well with a bath every 4 to 8 weeks. That is the baseline. From there, adjust for coat type, lifestyle, and skin health:',
          '- Short, smooth coats (Beagles, Boxers): every 6–8 weeks',
          '- Double coats (Huskies, Golden Retrievers): every 6–10 weeks, with regular brushing between baths',
          '- Long or silky coats (Shih Tzus, Yorkies): every 3–4 weeks',
          '- Hairless or oily-skinned breeds: may need weekly baths, as your vet advises',
          '- Dogs with skin conditions: follow your vet\'s medicated-bath schedule exactly',
        ],
      },
      {
        heading: 'Signs Your Dog Needs a Bath Now',
        body: [
          'Forget the calendar for a moment. Your nose and eyes are better guides:',
          '- A noticeable "dog smell" that lingers in the room',
          '- Visible dirt, dust, or a greasy feel to the coat',
          '- Scratching from built-up allergens like pollen or dust',
          '- They rolled in something unforgettable (it happens to everyone)',
        ],
      },
      {
        heading: 'How to Bathe a Dog, Step by Step',
        body: [
          'A calm bath starts before the water runs. Set everything out first — shampoo, towels, and treats.',
          '# Brush first. Remove loose hair and tangles so water and shampoo reach the skin.',
          '# Use lukewarm water. Test it on your wrist, like you would for a baby.',
          '# Use dog shampoo only. Human shampoo has the wrong pH and can irritate canine skin.',
          '# Wet, lather, rinse — twice. Rinsing is the step most people rush. Leftover shampoo causes itching.',
          '# Dry thoroughly. Towel-dry well; use a low-heat dryer setting if your dog tolerates it.',
          '# Reward generously. Treats and praise teach your dog that bath time predicts good things.',
        ],
      },
      {
        heading: "Puppy's First Bath",
        body: [
          'Puppies can usually have their first gentle bath at around 8 weeks old, once they are settled at home. Keep it short, warm, and positive — a sink or small tub works better than a big bath.',
          'The goal of a first bath is not a perfect clean. It is teaching your puppy that water is safe. End early, dry them warmly, and celebrate.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'How often should you bathe a dog? For most dogs, every month or two — adjusted for coat, adventures, and skin. Watch your dog, not just the calendar, and always use products made for dogs.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I bathe my dog once a week?',
        a: 'Weekly baths are fine for some oily-coated or allergy-prone dogs using a gentle, vet-approved shampoo. For most dogs, weekly bathing dries out the skin — every 4–8 weeks is better.',
      },
      {
        q: 'Can I use human shampoo on my dog?',
        a: 'No. Human shampoo is formulated for human skin pH and can strip your dog\'s protective oils, causing dryness and irritation. Always use a shampoo made for dogs.',
      },
      {
        q: 'What if my dog hates baths?',
        a: 'Go slow: non-slip mats, lukewarm water, treats throughout, and short sessions. Many dogs learn to tolerate — even enjoy — baths with patient, positive training.',
      },
      {
        q: 'Is it OK to bathe a dog in winter?',
        a: 'Yes, but bathe them indoors with warm water and dry them completely before they go outside. A damp dog in cold weather can get chilled quickly.',
      },
    ],
    related: ['how-to-trim-dog-nails', 'common-skin-problems-dogs-cats', 'why-does-my-dog-eat-grass'],
  },
  {
    slug: 'human-foods-dogs-can-cant-eat',
    title: "15 Human Foods Dogs Can and Can't Eat",
    category: 'Dog Care',
    excerpt:
      'What foods can dogs eat? From rice and carrots to chocolate and grapes — here are 15 human foods clearly sorted into safe, cautious, and toxic.',
    readTime: 8,
    keyword: 'what foods can dogs eat',
    health: true,
    intro: [
      "Those big eyes under the dinner table are hard to resist. But before you share your plate, it's worth knowing what foods can dogs eat safely — because some everyday human foods are genuinely dangerous for dogs.",
      "Here are 15 common foods, sorted into three simple groups: safe to share, okay with caution, and never feed. Bookmark this one — it's the list every dog owner needs sooner or later.",
    ],
    sections: [
      {
        heading: 'Safe to Share (in Moderation)',
        body: [
          'These foods are generally safe for healthy dogs. "Moderation" means treats of any kind should stay under 10% of daily calories.',
          '- Cooked rice — plain, white or brown. Gentle on upset stomachs.',
          '- Carrots — raw or cooked. Crunchy, low-calorie, and good for teeth.',
          '- Cooked chicken — plain, unseasoned, no bones.',
          '- Pumpkin — plain cooked or canned (not pie filling). Great for digestion.',
          '- Apples — sliced, seeds and core removed. A sweet, fiber-rich snack.',
          '- Peanut butter — xylitol-free only. Check the label every time.',
        ],
      },
      {
        heading: 'Okay With Caution',
        body: [
          'These are not toxic, but they come with rules:',
          '- Cheese — small amounts; many dogs are lactose-sensitive',
          '- Bread — plain and small pieces; no raisins, no raw dough',
          '- Eggs — fully cooked only; raw eggs carry salmonella risk',
          '- Bananas — safe but sugary; a few slices, not a whole fruit',
          '- Watermelon — seedless, rind removed; hydrating in summer',
        ],
      },
      {
        heading: 'Never Feed — Toxic to Dogs',
        body: [
          'These foods can cause real harm, even in small amounts. If your dog eats any of them, call your vet or a poison helpline right away.',
          '! Chocolate — the darker, the more dangerous. Contains theobromine, which dogs cannot process.',
          '! Grapes and raisins — can cause sudden kidney failure, even in tiny amounts.',
          '! Onions and garlic — damage red blood cells; cooked, raw, and powdered all count.',
          '! Xylitol (birch sugar) — found in sugar-free gum, candy, and some peanut butters. Causes life-threatening blood-sugar drops.',
          '! Alcohol, caffeine, macadamia nuts, cooked bones — all dangerous; keep them out of reach.',
        ],
      },
      {
        heading: 'What to Do If Your Dog Eats Something Toxic',
        body: [
          '# Note what and how much they ate, and when.',
          '# Call your vet or an animal poison line immediately — do not wait for symptoms.',
          '# Do not induce vomiting unless a professional tells you to.',
          'Quick action saves lives. Most dogs recover fully when treated early.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'What foods can dogs eat? More than you might fear — but fewer than your dog hopes. Stick to the safe list, respect the toxic list, and when in doubt, check before you share.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can dogs eat rice every day?',
        a: 'Plain cooked rice is safe daily as part of a balanced diet, but it should not replace complete dog food. Rice alone lacks the protein and nutrients dogs need.',
      },
      {
        q: 'Is peanut butter safe for dogs?',
        a: 'Only if it is xylitol-free. Xylitol is extremely toxic to dogs, so read the ingredient label carefully before sharing any peanut butter.',
      },
      {
        q: 'What fruits are safe for dogs?',
        a: 'Apples (no seeds), bananas, blueberries, and seedless watermelon are safe in moderation. Grapes and raisins are never safe.',
      },
      {
        q: 'My dog ate chocolate — what now?',
        a: 'Call your vet or a poison helpline immediately with your dog\'s weight, the type of chocolate, and the amount eaten. Do not wait for symptoms to appear.',
      },
    ],
    related: ['puppy-feeding-schedule-by-age', 'when-to-take-pet-to-vet', 'why-does-my-dog-eat-grass'],
  },
  {
    slug: 'puppy-feeding-schedule-by-age',
    title: 'Puppy Feeding Schedule by Age (Chart Included)',
    category: 'Dog Care',
    excerpt:
      'How much to feed a puppy and when? This age-by-age puppy feeding schedule and chart takes the guesswork out of raising a healthy pup.',
    readTime: 7,
    keyword: 'puppy feeding schedule',
    health: true,
    intro: [
      'A puppy grows faster in one year than a human child does in ten. Feeding that growth correctly is one of the most important things you will ever do for your dog — and a simple puppy feeding schedule makes it easy.',
      'Below you will find exactly how often to feed at each age, how much to feed a puppy, and when puppies switch to solid food.',
    ],
    sections: [
      {
        heading: 'Puppy Feeding Chart by Age',
        body: [
          '| Age | Meals per day | Notes',
          '| 6–12 weeks | 4 meals | Puppy food moistened with warm water at first',
          '| 3–6 months | 3 meals | Fully on solid puppy food; watch body condition',
          '| 6–12 months | 2 meals | Most puppies move to adult portions by 12 months',
          '| 12+ months | 2 meals | Adult feeding routine begins',
          'Large and giant breeds grow more slowly — they may stay on puppy food until 18–24 months. Ask your vet about the right switch time for your breed.',
        ],
      },
      {
        heading: 'How Much to Feed a Puppy',
        body: [
          'Portion size depends on your puppy\'s expected adult weight, and every food is different. Start with the feeding guide on your puppy food bag, then adjust using body condition:',
          '- You should feel ribs easily under a thin layer of fat',
          '- Your puppy should have a visible waist when viewed from above',
          '- A round, barrel-shaped puppy is being overfed — trim portions slightly',
          '> Weigh your puppy weekly for the first 6 months. Steady growth is the goal, not maximum growth.',
        ],
      },
      {
        heading: 'When Do Puppies Eat Solid Food?',
        body: [
          'Puppies begin weaning onto solid food at around 3–4 weeks old, starting with puppy food soaked into a soft gruel. By 7–8 weeks, most puppies eat solid puppy food confidently.',
          'If you are raising an orphaned puppy younger than 4 weeks, they need puppy milk replacer — never cow\'s milk — and a vet\'s guidance.',
        ],
      },
      {
        heading: 'Feeding Tips That Prevent Problems',
        body: [
          '# Feed at the same times every day. Routine aids house-training and digestion.',
          '# Pick the bowl up after 15–20 minutes. Grazing all day creates picky eaters.',
          '# Always provide fresh water alongside meals.',
          '# Choose a food labeled for growth — ideally one matched to your puppy\'s expected adult size.',
          '# Avoid sudden food changes. Transition over 7–10 days, mixing old and new.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'A good puppy feeding schedule is simple: four meals for young pups, three through the middle months, two from about six months on. Feed for steady growth, keep fresh water down, and let your vet confirm portions at each checkup.',
        ],
      },
    ],
    faq: [
      {
        q: 'How do I know if I am feeding my puppy enough?',
        a: 'Check body condition weekly: ribs easy to feel but not visible, a clear waist from above, and steady weight gain. Your vet can confirm at vaccination visits.',
      },
      {
        q: 'Should puppies eat wet or dry food?',
        a: 'Both are fine if labeled complete for growth. Dry kibble is convenient and helps teeth; wet food is palatable and hydrating. Many owners mix the two.',
      },
      {
        q: 'When should I switch my puppy to adult food?',
        a: 'Small breeds around 9–12 months, medium breeds around 12 months, and large or giant breeds at 18–24 months. Switch gradually over 7–10 days.',
      },
      {
        q: 'Can puppies eat treats during training?',
        a: 'Yes — tiny, soft treats work best. Keep all treats under 10% of daily calories and count them as part of the daily food allowance.',
      },
    ],
    related: ['human-foods-dogs-can-cant-eat', 'how-often-should-you-bathe-a-dog', 'when-to-take-pet-to-vet'],
  },
  {
    slug: 'why-is-my-dog-panting-so-much',
    title: 'Why Is My Dog Panting So Much? 7 Common Causes',
    category: 'Dog Care',
    excerpt:
      'Why is my dog panting so much? From heat and excitement to pain and illness — 7 common causes of heavy breathing, and when panting means a vet visit.',
    readTime: 7,
    keyword: 'why is my dog panting',
    health: true,
    intro: [
      "Dogs can't sweat the way we do — panting is their air-conditioning system. So a panting dog is usually just a cooling dog. But sometimes heavy breathing is your dog's way of telling you something is wrong.",
      "If you've been asking yourself why is my dog panting so much, here are the seven most common causes, from completely normal to call-the-vet.",
    ],
    sections: [
      {
        heading: 'When Panting Is Perfectly Normal',
        body: [
          'Panting is normal after exercise, in warm weather, during excitement, and in the car. Normal panting is rhythmic, your dog seems otherwise happy, and it settles within 10–30 minutes of rest in a cool place.',
          'Flat-faced breeds (Pugs, Bulldogs, Boxers) pant more because their airways are shorter — but they also overheat faster, so they need extra care in summer.',
        ],
      },
      {
        heading: '7 Common Causes of Heavy Panting',
        body: [
          '# Heat. The number one cause. Hot weather, hot cars, hot walks. Heat exhaustion is an emergency — move your dog to shade, offer cool (not ice-cold) water, and call a vet if they don\'t improve fast.',
          '# Exercise or excitement. A good game of fetch or the doorbell can both trigger happy panting. It passes quickly.',
          '# Stress and fear. Thunderstorms, fireworks, vet visits, and car rides cause anxious panting, often with pacing, whining, or tucked tails.',
          '# Pain. Dogs hide pain well, but panting at rest — especially at night — can be a pain signal. Look for limping, stiffness, or reluctance to jump.',
          '# Weight. Overweight dogs work harder to move and cool down, so they pant more. A healthy diet genuinely helps them breathe easier.',
          '# Medication. Steroids like prednisone commonly cause increased panting. If it started with a new medication, mention it to your vet.',
          '# Illness. Heart disease, lung problems, Cushing\'s disease, anemia, and fever can all cause heavy breathing. This is why persistent, unexplained panting deserves a checkup.',
        ],
      },
      {
        heading: 'Dog Panting at Night — What It Means',
        body: [
          'Night panting worries owners most, and rightly so. Common causes include a too-warm room, pain (especially joint pain in older dogs), anxiety, and heart or respiratory disease.',
          'Try cooling the sleeping area first. If your dog still pants heavily at rest in a cool room — particularly an older dog — book a vet visit.',
        ],
      },
      {
        heading: 'When to Worry About Panting',
        body: [
          'Call a vet promptly if panting comes with any of these:',
          '! Bright red, pale, blue, or purple gums or tongue',
          '! Panting at rest in a cool environment that doesn\'t settle',
          '! Collapse, weakness, drooling, vomiting, or glassy eyes (heatstroke signs)',
          '! A distended or hard belly — especially in large, deep-chested breeds',
          '! Coughing, or obvious effort with each breath',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Why is your dog panting? Usually heat, fun, or feelings — all normal. But panting that is heavy, unexplained, or paired with other symptoms is your cue to call the vet. When in doubt, trust your instincts: you know your dog\'s normal better than anyone.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why is my dog panting while resting?',
        a: 'Resting panting in a cool room can signal pain, anxiety, medication effects, or illness. If it happens repeatedly without an obvious cause, schedule a vet check.',
      },
      {
        q: 'How do I cool down a panting dog?',
        a: 'Move them to shade or air-conditioning, offer cool water, wet their paws and belly with cool (not icy) water, and use a fan. Seek vet care if they don\'t improve within minutes.',
      },
      {
        q: 'Is it normal for old dogs to pant more?',
        a: 'Some increase is common with age, weight gain, and reduced fitness — but a sudden change in an older dog\'s panting pattern warrants a vet visit to rule out pain or heart disease.',
      },
      {
        q: 'Can anxiety cause panting in dogs?',
        a: 'Yes. Fear and anxiety are leading causes of panting, often with pacing, trembling, or hiding. Calming routines, safe spaces, and — for severe cases — vet-guided treatment all help.',
      },
    ],
    related: ['signs-of-dehydration-in-dogs', 'when-to-take-pet-to-vet', 'why-does-my-dog-eat-grass'],
  },
  {
    slug: 'how-to-trim-dog-nails',
    title: 'How to Trim Dog Nails at Home (Without Stress)',
    category: 'Dog Care',
    excerpt:
      'Learn how to trim dog nails at home without stress — the right tools, the right angle, how often to cut, and exactly what to do if a nail bleeds.',
    readTime: 6,
    keyword: 'how to trim dog nails',
    intro: [
      'If the sound of nail clippers sends your dog hiding under the bed, you are not alone. Nail trims are one of the most dreaded chores in dog ownership — for both of you.',
      "But here's the good news: learning how to trim dog nails calmly is a skill, not a talent. With the right setup and a little patience, most dogs learn to accept — even ignore — the whole process.",
    ],
    sections: [
      {
        heading: 'Why Nail Trims Matter',
        body: [
          'Overgrown nails are more than a clicking sound on the floor. They push toes into unnatural positions, change how your dog walks, and can contribute to joint pain over time. Long nails also snag and tear — a painful injury.',
          'The rule of thumb: if you can hear nails clicking on hard floors, they are too long.',
        ],
      },
      {
        heading: 'What You Need',
        body: [
          '- Dog nail clippers (guillotine or scissor style) or a nail grinder',
          '- Styptic powder or cornstarch — in case of bleeding',
          '- High-value treats, cut small',
          '- Good lighting and a non-slip surface',
        ],
      },
      {
        heading: 'How to Trim Dog Nails, Step by Step',
        body: [
          '# Get your dog comfortable first. For a few days, just handle their paws and reward. No clippers yet.',
          '# Introduce the tool. Let your dog sniff the clippers. Touch them to each paw. Treat, treat, treat.',
          '# Find the quick. The quick is the blood vessel inside the nail. On light nails it is the pink core — trim only the white tip beyond it. On dark nails, trim tiny slivers and watch the cut surface: stop when you see a small dark dot in the center.',
          '# Trim at a 45-degree angle, taking small amounts. Little and often beats one big cut.',
          '# Do one nail, then reward. Build up slowly — even one nail per session is progress.',
          '# Don\'t forget the dewclaws on the inner legs; they never touch the ground and never wear down.',
        ],
      },
      {
        heading: 'How Often to Cut Dog Nails',
        body: [
          'Most dogs need a trim every 3–4 weeks. Dogs who walk mostly on pavement may need fewer trims; dogs on grass and soft ground need more. Regular small trims also keep the quick shorter, making future trims easier.',
        ],
      },
      {
        heading: 'Dog Nail Bleeding? Don\'t Panic',
        body: [
          'Cutting the quick happens to everyone eventually. It looks dramatic but is rarely serious:',
          '# Apply styptic powder (or cornstarch) directly to the nail tip with gentle pressure.',
          '# Keep your dog calm and still for a few minutes until bleeding stops.',
          '# Skip the walk for an hour, and make the next session extra easy and rewarding.',
          'If bleeding doesn\'t stop after 10 minutes of pressure, call your vet.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'How to trim dog nails without stress comes down to three things: go slow, take tiny amounts, and make it pay (in treats). A calm five-minute trim every few weeks protects your dog\'s comfort for life.',
        ],
      },
    ],
    faq: [
      {
        q: 'What if my dog has black nails?',
        a: 'Trim very small slivers at a time and examine the cut surface after each snip. When you see a chalky white ring with a small dark dot in the center, you are near the quick — stop there.',
      },
      {
        q: 'Are nail grinders better than clippers?',
        a: 'Grinders give more control and smooth edges, and many owners find them safer for dark nails. Some dogs dislike the vibration and sound, so introduce them gradually.',
      },
      {
        q: 'How short should dog nails be?',
        a: 'Nails should not touch the ground when your dog stands. If you hear clicking on hard floors, they are due for a trim.',
      },
      {
        q: 'My dog panics at the sight of clippers. What now?',
        a: 'Restart with desensitization: clippers visible at mealtimes, paw handling with treats, then one nail at a time over days. Severe fear may need a vet or groomer\'s help — that is completely fine.',
      },
    ],
    related: ['how-often-should-you-bathe-a-dog', 'common-skin-problems-dogs-cats', 'when-to-take-pet-to-vet'],
  },
  {
    slug: 'why-is-my-cat-not-eating',
    title: 'Why Is My Cat Not Eating? Causes & When to See a Vet',
    category: 'Cat Care',
    excerpt:
      'Why is my cat not eating? From picky habits to hidden illness — the common causes of feline appetite loss and exactly when it becomes an emergency.',
    readTime: 7,
    keyword: 'why is my cat not eating',
    health: true,
    intro: [
      'Cats have a reputation for being fussy eaters. But a cat who stops eating is never something to shrug off — cats can develop a dangerous liver condition (hepatic lipidosis) after just a few days without food.',
      "So if you're asking why is my cat not eating, let's walk through the likely causes — and the point where waiting becomes risky.",
    ],
    sections: [
      {
        heading: 'First: How Long Has It Been?',
        body: [
          'Time matters more than anything else here:',
          '- Under 24 hours, otherwise acting normal: monitor closely, try the tips below',
          '- 24–48 hours without food: call your vet for advice',
          '- Over 48 hours, or any refusal plus other symptoms: vet visit, promptly',
          '- Kittens, seniors, and cats with diabetes: don\'t wait — call sooner',
        ],
      },
      {
        heading: 'Common Causes of Appetite Loss in Cats',
        body: [
          '# Stress and change. New home, new pet, new furniture arrangement, a moved food bowl — cats are creatures of routine, and stress suppresses appetite fast.',
          '# Food boredom or a food change. A sudden switch in brand or flavor can trigger a refusal. Transition foods gradually over a week.',
          '# Dental pain. A sore tooth or inflamed gums makes eating hurt. Watch for dropping food, chewing on one side, or bad breath.',
          '# Hairballs or mild stomach upset. Usually short-lived; appetite returns within a day.',
          '# Recent vaccination. A day of low appetite after shots is common and usually passes.',
          '# Underlying illness. Kidney disease, infections, pancreatitis, and many other conditions announce themselves first as a cat not eating. This is why persistent refusal always deserves a checkup.',
        ],
      },
      {
        heading: 'Cat Not Eating But Drinking Water?',
        body: [
          'A cat who drinks but won\'t eat may be dealing with nausea, dental pain, or early illness. Drinking is good — dehydration is the immediate danger — but more than 24 hours of food refusal still needs a vet call, even if water intake seems normal.',
        ],
      },
      {
        heading: 'Gentle Ways to Tempt a Picky Cat',
        body: [
          '# Warm the food slightly — body-temperature food smells stronger and more appealing.',
          '# Offer strong-smelling options: plain cooked chicken, or a little tuna water (not the whole can).',
          '# Try a different bowl — wide, shallow dishes avoid "whisker fatigue."',
          '# Feed in a quiet, low-traffic spot away from the litter box.',
          '# Sit with them. Many cats eat better with calm company.',
          'Never force-feed without veterinary guidance, and never let "waiting it out" stretch past 48 hours.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Why is your cat not eating? Sometimes it is stress or pickiness — but in cats, appetite loss is also one of the earliest signs of illness. Try gentle tempting for a day, watch water intake, and let the 48-hour rule be your line in the sand.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long can a cat go without eating?',
        a: 'Cats should never go more than 24–48 hours without food. Beyond that, the risk of hepatic lipidosis — a serious liver condition — rises sharply, especially in overweight cats.',
      },
      {
        q: 'Why is my cat not eating but acting normal?',
        a: 'Early appetite loss often appears before any other symptom. Stress, food boredom, or dental discomfort are common causes — but if it lasts past 24 hours, call your vet even if your cat seems fine.',
      },
      {
        q: 'Should I change my cat\'s food if they stop eating?',
        a: 'You can offer a different flavor to tempt them, but avoid sudden permanent switches. Once appetite returns, transition foods gradually over 7–10 days.',
      },
      {
        q: 'When is a cat not eating an emergency?',
        a: 'No food for 48 hours, refusal plus vomiting or lethargy, signs of pain, or any appetite loss in a kitten, senior, or diabetic cat — all warrant prompt veterinary care.',
      },
    ],
    related: ['signs-your-cat-is-sick', 'when-to-take-pet-to-vet', 'how-to-care-for-a-stray-cat'],
  },
  {
    slug: 'signs-your-cat-is-sick',
    title: 'How to Tell If Your Cat Is Sick: 10 Early Signs',
    category: 'Cat Care',
    excerpt:
      'Cats hide illness brilliantly. Learn the 10 early signs your cat is sick — subtle behavior changes and symptoms most owners miss until it is serious.',
    readTime: 7,
    keyword: 'signs your cat is sick',
    health: true,
    intro: [
      'In the wild, showing weakness makes an animal a target. Your pampered house cat still carries that instinct — which means cats are world-class experts at hiding illness until they simply can\'t anymore.',
      'That\'s why the early signs your cat is sick are usually behavioral, not dramatic. Here are the ten changes worth paying attention to.',
    ],
    sections: [
      {
        heading: '10 Early Signs Your Cat May Be Sick',
        body: [
          '# Hiding more than usual. A social cat who starts spending days under the bed is telling you something.',
          '# Changes in appetite. Eating much less — or suddenly much more — both matter.',
          '# Drinking more water. Increased thirst is a classic early sign of kidney disease and diabetes.',
          '# Litter box changes. Going more, less, straining, crying, or missing the box entirely.',
          '# Weight loss. Gradual loss is easy to miss under fur. Feel along the spine and ribs monthly.',
          '# A dull, greasy, or matted coat. Sick cats stop grooming — or over-groom one painful spot bald.',
          '# Vomiting that repeats. An occasional hairball is normal; vomiting more than once a month is worth a check.',
          '# Changes in voice. New yowling, especially at night, can signal pain, hypertension, or cognitive decline in seniors.',
          '# Bad breath. Not just unpleasant — it points to dental disease or kidney problems.',
          '# Sleeping differently. Far more sleep, restlessness, or sleeping in odd new places.',
        ],
      },
      {
        heading: 'The Power of "Different"',
        body: [
          'No single sign proves illness. The real skill is noticing different: your cat\'s normal routine, appetite, and behavior shifting without an obvious reason.',
          '> Keep a simple note on your phone when you spot changes. Dates and details help your vet enormously.',
        ],
      },
      {
        heading: 'Which Signs Are Emergencies?',
        body: [
          'Skip the waiting and go straight to a vet if you see:',
          '! Straining in the litter box with no urine produced — especially in male cats (a blocked bladder is life-threatening within hours)',
          '! Difficulty breathing or open-mouth breathing',
          '! Collapse, seizures, or sudden paralysis of the back legs',
          '! Refusing all food for more than 24–48 hours',
          '! Pale, blue, or bright yellow gums',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Your cat won\'t tell you they feel sick — but their behavior will. Learn their normal, watch for "different," and act early. Cats treated at the first whisper of illness almost always do better than those treated at the shout.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why do cats hide when they are sick?',
        a: 'It is an ancient survival instinct — weak animals hide from predators. A normally social cat who starts hiding for long stretches deserves a vet check.',
      },
      {
        q: 'Is vomiting normal for cats?',
        a: 'An occasional hairball is, but regular vomiting is not "just a cat thing." Vomiting more than once or twice a month should be discussed with your vet.',
      },
      {
        q: 'How often should I take my cat to the vet?',
        a: 'Healthy adult cats need a checkup at least once a year; seniors (7+) benefit from visits every six months. Cats hide illness, so exams catch what eyes miss.',
      },
      {
        q: 'My cat is eating but losing weight. Is that serious?',
        a: 'Yes — eating well while losing weight is a classic sign of hyperthyroidism or diabetes in older cats. It is very treatable when caught early, so book a blood test.',
      },
    ],
    related: ['why-is-my-cat-not-eating', 'when-to-take-pet-to-vet', 'indoor-vs-outdoor-cats'],
  },
  {
    slug: 'indoor-vs-outdoor-cats',
    title: "Indoor vs Outdoor Cats: What's Actually Better?",
    category: 'Cat Care',
    excerpt:
      'Should cats go outside? Compare indoor vs outdoor cats honestly — lifespan, health, happiness, and the middle-ground options that give you both.',
    readTime: 6,
    keyword: 'indoor vs outdoor cats',
    intro: [
      'Few pet debates get as heated as this one. Some people insist cats must roam free to be happy. Others keep cats indoors for their entire lives and swear their cats are thriving.',
      'So indoor vs outdoor cats — what\'s actually better? The honest answer involves trading freedom for safety, and there are smart ways to get more of both.',
    ],
    sections: [
      {
        heading: 'The Case for Indoor Life',
        body: [
          'The numbers are hard to argue with. Indoor cats commonly live 12–18 years; outdoor cats average closer to 2–7 years in many areas. The outdoors carries real risks:',
          '- Traffic — the leading cause of early death in outdoor cats',
          '- Fights and infectious diseases (FIV, FeLV)',
          '- Parasites, poisons, and getting lost or stolen',
          '- Predators and cruel humans',
          'Indoor cats also hunt far fewer birds and small wildlife — a genuine conservation benefit.',
        ],
      },
      {
        heading: 'The Case for Outdoor Life',
        body: [
          'Outdoor life offers what four walls cannot: climbing, hunting, sunbathing, exploring — a rich sensory world. Outdoor cats get more natural exercise and mental stimulation, and some cats (especially former strays) find indoor confinement genuinely stressful.',
          'The behavioral benefits are real. The question is whether they can be provided safely.',
        ],
      },
      {
        heading: 'The Middle Ground (Best of Both)',
        body: [
          'You don\'t have to choose between "free" and "safe." Cat owners increasingly pick supervised or enclosed outdoor time:',
          '# A catio — an enclosed patio or window box with shelves and shade',
          '# Harness and leash walks — yes, many cats learn; start young and go slow',
          '# Enclosed gardens with cat-proof fencing or roller toppers',
          '# Supervised yard time at quiet hours, with your cat microchipped and wearing a breakaway collar',
        ],
      },
      {
        heading: 'Keeping an Indoor Cat Genuinely Happy',
        body: [
          'An indoor cat\'s quality of life is your design project:',
          '- Vertical territory: cat trees, shelves, window perches',
          '- Daily play-hunts: 10–15 minutes with a wand toy, twice a day',
          '- Puzzle feeders that make meals a challenge',
          '- Window views of bird feeders — feline television',
          '- Rotation of toys so novelty never runs out',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Indoor vs outdoor cats isn\'t really a debate about indoors or outdoors — it\'s about safety versus stimulation. Indoors wins on lifespan and health; enrichment wins on happiness. Give your cat a safe indoor life with adventure built in, and you genuinely get the best of both.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do indoor cats live longer?',
        a: 'Yes, significantly. Indoor cats commonly reach 12–18 years, while outdoor cats face traffic, disease, and predator risks that cut average lifespan dramatically.',
      },
      {
        q: 'Is it cruel to keep a cat indoors?',
        a: 'Not if their environment is enriched. An indoor cat with climbing spaces, daily play, puzzle feeders, and window views can live a full, contented life.',
      },
      {
        q: 'Can I walk my cat on a leash?',
        a: 'Many cats can learn, especially if started young with a well-fitted harness. Introduce the harness indoors first, keep early outings short, and let the cat set the pace.',
      },
      {
        q: 'Should a former stray cat be kept indoors?',
        a: 'Usually yes, with patience. Former street cats may take weeks or months to adjust. Vertical space, hiding spots, and routine help — and a catio can ease the transition.',
      },
    ],
    related: ['why-do-cats-purr', 'how-to-care-for-a-stray-cat', 'signs-your-cat-is-sick'],
  },
  {
    slug: 'why-do-cats-purr',
    title: 'Why Do Cats Purr? The Science Explained Simply',
    category: 'Cat Care',
    excerpt:
      'Why do cats purr? It is not just happiness. The simple science behind purring — communication, comfort, and even healing — explained in plain English.',
    readTime: 5,
    keyword: 'why do cats purr',
    intro: [
      'A purring cat on your lap is one of life\'s small perfect moments. But that rumbling engine is more mysterious than it seems — cats purr when they\'re happy, yes, but also when they\'re frightened, in pain, and even when giving birth.',
      'So why do cats purr, really? The science is surprisingly beautiful.',
    ],
    sections: [
      {
        heading: 'How Purring Actually Works',
        body: [
          'Cats purr by rapidly twitching the muscles of their larynx (voice box) — about 25 to 150 times per second. As they breathe in and out, air passes over these vibrating muscles and produces that continuous rumble.',
          'Unlike a meow, a purr happens on both the inhale and the exhale, which is why it sounds endless. Kittens can purr within days of birth — before their eyes even open.',
        ],
      },
      {
        heading: 'The Main Reasons Cats Purr',
        body: [
          '# Contentment. The classic reason. A relaxed cat, warm lap, slow blinks — this purr means "life is good."',
          '# Communication. Mother cats purr to guide newborn kittens, who are born blind and deaf. Adult cats keep a special "solicitation purr" — mixed with a cry frequency — that humans find almost impossible to ignore at breakfast time.',
          '# Self-soothing. Cats purr when stressed, frightened, or at the vet. Researchers believe purring calms the cat itself, the way deep breathing calms us.',
          '# Healing. This is the remarkable part: purr frequencies (roughly 25–50 Hz) overlap with frequencies shown to promote bone density and tissue repair. Purring may literally help cats heal — which may explain why cats often recover from injuries faster than dogs.',
        ],
      },
      {
        heading: 'Do Cats Purr When They\'re Sick?',
        body: [
          'Yes — and this surprises many owners. Sick, injured, or dying cats often purr. It is not a sign that everything is fine; it is likely self-comfort and an attempt at self-healing.',
          'This is why purring should never be used as proof of health. A purring cat who is also hiding, not eating, or acting differently still needs a vet.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Why do cats purr? To say "I\'m happy," to ask for things, to calm themselves, and possibly to heal their own bodies. It is one of nature\'s most versatile sounds — and one more reason your cat is far more extraordinary than they let on.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does purring always mean a cat is happy?',
        a: 'No. Cats also purr when stressed, frightened, in pain, or unwell. Context matters — a purring cat with tense body language or appetite changes may need attention, not cuddles.',
      },
      {
        q: 'Why does my cat purr so loudly?',
        a: 'Loudness varies by individual and breed. Some cats simply have a bigger "engine." Many cats also purr louder when they want something — the solicitation purr is designed to be hard to ignore.',
      },
      {
        q: 'Can cats purr and meow at the same time?',
        a: 'Almost — the solicitation purr embeds a meow-like cry inside the purr. Humans perceive it as especially urgent and unpleasant to ignore, which is exactly the point.',
      },
      {
        q: 'Do big cats like lions purr?',
        a: 'Cats that can roar (lions, tigers) generally cannot purr continuously, and cats that purr (domestic cats, cheetahs) cannot roar. The throat anatomy allows one talent or the other.',
      },
    ],
    related: ['signs-your-cat-is-sick', 'indoor-vs-outdoor-cats', 'why-is-my-cat-not-eating'],
  },
  {
    slug: 'signs-of-dehydration-in-dogs',
    title: 'Signs of Dehydration in Dogs (Summer Guide)',
    category: 'Pet Health',
    excerpt:
      'Is your dog drinking enough? Learn the signs of dehydration in dogs, simple home checks, how to hydrate a dog safely, and when heat becomes an emergency.',
    readTime: 6,
    keyword: 'signs of dehydration in dogs',
    health: true,
    intro: [
      'Summer is wonderful for dogs — longer walks, beach trips, garden naps. But heat is also the season of dehydration and heat exhaustion, and dogs can go from "fine" to "emergency" faster than most owners expect.',
      'Knowing the signs of dehydration in dogs takes five minutes and could genuinely save your dog\'s life. Here\'s what to watch for.',
    ],
    sections: [
      {
        heading: 'Early Signs of Dehydration',
        body: [
          '- Loss of skin elasticity — gently lift the skin between the shoulders; it should snap back instantly. Slow return means dehydration.',
          '- Dry, sticky gums — healthy gums are wet and slick. Run a finger along them.',
          '- Thick, ropey saliva instead of normal thin drool',
          '- Sunken, dull-looking eyes',
          '- Lethargy — a dog who flops down and won\'t engage',
          '- Loss of appetite',
        ],
      },
      {
        heading: 'The 3-Second Home Checks',
        body: [
          '# Skin tent test: lift, release, watch. Instant snap-back = hydrated. A slow "tent" = trouble.',
          '# Gum press test: press a finger on the gum until it turns white, then release. Color should return in under 2 seconds.',
          '# Nose and energy check: a dry nose alone proves nothing, but a dry nose plus low energy plus hot weather is a pattern worth acting on.',
        ],
      },
      {
        heading: 'How to Hydrate a Dog Safely',
        body: [
          '# Move them to shade or a cool room immediately.',
          '# Offer small amounts of cool (not ice-cold) water frequently — gulping huge volumes can cause vomiting.',
          '# Add water to food, or offer ice cubes to lick for reluctant drinkers.',
          '# Try unseasoned, low-sodium chicken broth or pet electrolyte solutions for extra encouragement.',
          '# Wet their paws, belly, and ears with cool water while they drink.',
        ],
      },
      {
        heading: 'Heat Exhaustion: The Emergency Signs',
        body: [
          'Dehydration and heatstroke travel together. Get to a vet immediately if you see:',
          '! Frantic, heavy panting that doesn\'t settle in the shade',
          '! Bright red or very pale gums',
          '! Vomiting, diarrhea, wobbliness, or collapse',
          '! Glazed eyes or confusion',
          'While traveling to the vet: cool water on the body, air conditioning on, and no ice baths — cooling too fast is dangerous too.',
        ],
      },
      {
        heading: 'Prevention: Summer Water Habits',
        body: [
          '- Carry water and a collapsible bowl on every walk',
          '- Walk early morning or after sunset; test pavement with your palm — 5 seconds or it\'s too hot for paws',
          '- Refresh water bowls twice daily; many dogs drink more from clean, cool water',
          '- Never, ever leave a dog in a parked car — not for "five minutes," not with windows cracked',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'The signs of dehydration in dogs are easy to check and easy to miss: sticky gums, slow skin snap-back, low energy. Keep water close, walk smart in the heat, and treat heavy panting with respect. Your dog depends on you to be their weatherman.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much water should a dog drink per day?',
        a: 'A general guide is about 1 ounce of water per pound of body weight daily (50–60 ml per kg), more in hot weather or after exercise. A 45 lb (20 kg) dog needs roughly 4–5 cups (1–1.2 liters) a day.',
      },
      {
        q: 'Why is my dog not drinking water?',
        a: 'Common causes include stale or warm water, a dirty bowl, stress, or illness. Refresh the bowl, move it to a quiet spot, and call your vet if refusal lasts more than a day.',
      },
      {
        q: 'Can I give my dog ice water?',
        a: 'Cool water is best for rehydration. Ice cubes as occasional treats are fine for most dogs, but after overheating, avoid ice-cold water — it can cool the body too quickly.',
      },
      {
        q: 'Are some dogs more at risk of dehydration?',
        a: 'Yes — flat-faced breeds, puppies, seniors, overweight dogs, and dogs with heart or kidney disease dehydrate faster and need extra summer care.',
      },
    ],
    related: ['why-is-my-dog-panting-so-much', 'when-to-take-pet-to-vet', 'why-does-my-dog-eat-grass'],
  },
  {
    slug: 'common-skin-problems-dogs-cats',
    title: 'Common Skin Problems in Dogs and Cats',
    category: 'Pet Health',
    excerpt:
      'Itchy skin, dandruff, hot spots, and ear scratching — the most common dog and cat skin problems, what causes them, and when a vet visit is due.',
    readTime: 7,
    keyword: 'dog skin problems',
    health: true,
    intro: [
      'Scratching, licking, flaking, nibbling — skin problems are among the most common reasons pets visit the vet, and among the most frustrating for owners. The itch-scratch cycle can make everyone miserable.',
      'The good news: most dog skin problems (and cat skin conditions too) come from a short list of causes. Here\'s how to recognize them.',
    ],
    sections: [
      {
        heading: 'The Usual Suspects',
        body: [
          '# Fleas and mites. The number one cause of itchy skin worldwide. Flea allergy dermatitis can make a single bite trigger weeks of scratching — especially around the tail base.',
          '# Allergies. Food allergies (often to proteins like chicken or beef) and environmental allergies (pollen, dust mites) cause year-round or seasonal itching, ear infections, and paw licking.',
          '# Hot spots. Sudden, red, moist, painful patches — usually self-inflicted by licking. They spread fast and need prompt treatment.',
          '# Dry skin and dandruff. Flakes in the coat often point to dry air, poor diet, too-frequent bathing, or an underlying issue like hypothyroidism.',
          '# Ringworm. Despite the name, it\'s a fungus — circular patches of hair loss, and it can spread to humans. Handle with care and see a vet.',
          '# Ear problems. Head shaking and ear scratching usually mean ear mites or infection, not a skin issue — but they look similar from the sofa.',
        ],
      },
      {
        heading: 'Itchy Dog, Itchy Cat: Spot the Pattern',
        body: [
          'Where your pet itches tells a story:',
          '- Tail base and lower back → think fleas first',
          '- Paws, belly, ears, face → think allergies',
          '- Ears only → mites or infection',
          '- Circular bald patches → possible ringworm',
          '- Dandruff without much itching → diet, dry air, or bathing routine',
        ],
      },
      {
        heading: 'What You Can Do at Home',
        body: [
          '# Stay current on vet-recommended flea prevention — this alone prevents most itchy-skin cases.',
          '# Feed a complete, quality diet; skin is built from nutrition.',
          '# Bathe with pet-formulated shampoo only, and not too often.',
          '# Brush regularly to spread natural oils and spot problems early.',
          '# Use an e-collar to break the lick-scratch cycle while you arrange a vet visit.',
        ],
      },
      {
        heading: 'When to See the Vet',
        body: [
          '! Itching that keeps your pet awake or creates wounds',
          '! Hot spots, oozing, odor, or pus',
          '! Hair loss that spreads',
          '! Ear scratching with head shaking or dark discharge',
          '! Any skin problem lasting more than a week despite home care',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Most pet skin problems trace back to fleas, allergies, or infections — all very treatable once identified. Start with flea control and a good diet, watch the itch pattern, and let your vet handle anything that persists. Comfortable skin means a comfortable pet.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why is my dog so itchy but has no fleas?',
        a: 'Environmental or food allergies are the most likely cause of flea-free itching. Your vet can help identify triggers through diet trials or allergy testing.',
      },
      {
        q: 'Can I use human dandruff shampoo on my pet?',
        a: 'No. Human shampoos have the wrong pH for pet skin and can worsen dryness and irritation. Use a vet-recommended pet shampoo instead.',
      },
      {
        q: 'Is pet dandruff serious?',
        a: 'Mild flaking is often just dry skin, but dandruff with itching, odor, or hair loss can signal allergies, parasites, or hormonal disease — worth a vet check.',
      },
      {
        q: 'Can my cat catch skin problems from my dog?',
        a: 'Some conditions pass between pets — fleas, mites, and ringworm especially. If one pet is diagnosed, ask your vet whether the others need checking too.',
      },
    ],
    related: ['how-often-should-you-bathe-a-dog', 'signs-your-cat-is-sick', 'when-to-take-pet-to-vet'],
  },
  {
    slug: 'when-to-take-pet-to-vet',
    title: 'When to Take Your Pet to the Vet: A Simple Checklist',
    category: 'Pet Health',
    excerpt:
      'Emergency vet signs every owner should know: a simple checklist that separates "watch and wait" from "go now" — plus how to prepare for the visit.',
    readTime: 6,
    keyword: 'when to take dog to vet',
    health: true,
    intro: [
      'Every pet owner knows the 2 a.m. dilemma: is this an emergency, or am I overreacting? Go too often and vet bills pile up; wait too long and small problems become big ones.',
      'This checklist won\'t replace your vet\'s judgment — but it will help you decide, calmly, when to take your pet to the vet and when watching at home is reasonable.',
    ],
    sections: [
      {
        heading: 'Go Immediately — True Emergencies',
        body: [
          '! Difficulty breathing, choking, or blue/pale gums',
          '! Collapse, seizures, or inability to stand',
          '! Straining to urinate with nothing coming out (especially male cats)',
          '! A hard, swollen, painful belly — particularly in large dogs (bloat risk)',
          '! Known poisoning: chocolate, xylitol, grapes, rat poison, lilies (cats)',
          '! Severe trauma: hit by car, falls, deep wounds, uncontrolled bleeding',
          '! Heatstroke signs: frantic panting, drooling, wobbliness in hot weather',
          '! Eye injuries or sudden blindness',
        ],
      },
      {
        heading: 'Book a Visit Within 24–48 Hours',
        body: [
          '- Vomiting or diarrhea lasting more than a day, or with blood',
          '- Not eating for 24 hours (cats) or 48 hours (dogs)',
          '- Limping that doesn\'t improve overnight',
          '- Ear scratching, head shaking, or smelly ears',
          '- Skin problems spreading or breaking the skin',
          '- Coughing, sneezing, or eye discharge that persists',
          '- Lumps that are new, growing, or changing',
        ],
      },
      {
        heading: 'Usually Fine to Watch at Home',
        body: [
          '- A single vomit in an otherwise bright, hungry pet',
          '- One skipped meal with normal energy',
          '- Mild sneezing after dust or excitement',
          '- A small superficial scrape you can clean',
          'Watch means watch: check appetite, energy, water intake, and bathroom habits twice daily. Any worsening moves your pet up a category.',
        ],
      },
      {
        heading: 'The Routine Schedule That Prevents Emergencies',
        body: [
          '- Puppies and kittens: vet visits every 3–4 weeks until about 16 weeks old',
          '- Healthy adults: a wellness exam once a year',
          '- Seniors (7+ years): every six months, with bloodwork',
          '- Keep vaccinations, deworming, and flea prevention on schedule',
        ],
      },
      {
        heading: 'Be Ready Before You Need It',
        body: [
          '# Save your vet\'s number and the nearest 24-hour emergency clinic in your phone now.',
          '# Keep a pet first-aid kit: gauze, styptic powder, saline, tweezers, e-collar.',
          '# Know your pet\'s normal: resting breathing rate, gum color, appetite, and weight.',
          '# Consider pet insurance or an emergency fund before the emergency.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'When to take your pet to the vet comes down to three questions: Can they breathe? Are they conscious and responsive? Are they eating, drinking, and toileting? A "no" to any of these means professional help. And remember — vets would always rather see a false alarm than a too-late arrival.',
        ],
      },
    ],
    faq: [
      {
        q: 'Should I call the vet before going in an emergency?',
        a: 'Yes, if possible — a quick call lets the clinic prepare for your arrival and give you first-aid instructions for the journey. But never let calling delay treatment of severe bleeding, choking, or collapse.',
      },
      {
        q: 'Is one episode of vomiting an emergency?',
        a: 'Usually not, if your pet is otherwise bright, drinking, and behaving normally. Repeated vomiting, blood, lethargy, or a swollen belly changes the answer — seek care.',
      },
      {
        q: 'How do I know if my pet is in pain?',
        a: 'Look for panting at rest, hiding, reluctance to move or be touched, changes in posture, loss of appetite, and unusual aggression or clinginess. Pets rarely cry out from chronic pain.',
      },
      {
        q: 'Are online vet consultations worth it?',
        a: 'They are useful for triage — helping you decide how urgent something is — and for minor issues. Anything involving breathing, consciousness, severe pain, or poisoning needs hands-on care.',
      },
    ],
    related: ['signs-your-cat-is-sick', 'signs-of-dehydration-in-dogs', 'why-is-my-cat-not-eating'],
  },
  {
    slug: 'how-to-help-a-stray-dog',
    title: 'How to Help a Stray Dog: A Step-by-Step Guide',
    category: 'Street Animals',
    excerpt:
      'Found a stray dog and not sure what to do? A calm, safe, step-by-step guide to helping — from first approach to food, safety, and finding long-term help.',
    readTime: 7,
    keyword: 'how to help a stray dog',
    intro: [
      'You see them on the roadside, outside shops, sleeping on footpaths — and something in you wants to help. That instinct is one of the best things about being human.',
      'But helping a stray dog well takes more than good intentions. Done calmly and safely, one person genuinely can change a street dog\'s life. Here\'s how to help a stray dog, step by step.',
    ],
    sections: [
      {
        heading: 'Step 1: Stay Calm and Assess',
        body: [
          'Most street dogs are wary, not aggressive. Fear, though, can make any dog defensive. Before approaching:',
          '- Is the dog injured, sick, or with puppies? (Keep more distance and call a local rescue.)',
          '- Is the body language loose or stiff? Averting eyes, tucked tail, and retreating mean fear — go slower.',
          '- Is it safe where you\'re standing? Don\'t create a traffic risk for yourself or the dog.',
        ],
      },
      {
        heading: 'Step 2: Approach the Right Way',
        body: [
          '# Don\'t stare directly — avert your eyes and turn slightly sideways.',
          '# Crouch to appear smaller, and let the dog close the distance.',
          '# Speak softly and move slowly. Never corner or chase.',
          '# Offer the back of your hand to sniff if the dog comes close.',
          'If the dog growls, freezes, or shows teeth: slowly back away. Helping is still possible — from a distance, with food, or through a rescue organization.',
        ],
      },
      {
        heading: 'Step 3: Feeding Stray Dogs Safely',
        body: [
          'Food is the kindest first gift — and the simplest:',
          '- Offer plain cooked rice, chicken, or dog food; fresh water matters even more than food',
          '- Place the food a few steps away and step back so the dog can eat without pressure',
          '- Feed at the same time and place daily — routine builds trust faster than anything',
          '- Avoid chocolate, onions, cooked bones, and heavily spiced leftovers',
        ],
      },
      {
        heading: 'Step 4: Get Help for the Bigger Problems',
        body: [
          'You don\'t have to do everything yourself. For injuries, illness, or aggressive behavior:',
          '# Contact local animal rescue groups or shelters — search for ones active in your city.',
          '# Ask about TNVR programs (trap-neuter-vaccinate-return) — the proven way to help whole street populations.',
          '# Post in local animal welfare groups online; rescuers often respond fast with advice or volunteers.',
          '# If you can, contribute to the vet costs — even small amounts move rescues forward.',
        ],
      },
      {
        heading: 'Step 5: Think Long-Term',
        body: [
          'The deepest help goes beyond one meal:',
          '- Sponsoring a spay/neuter surgery prevents generations of suffering',
          '- A simple shelter box protects street dogs from rain and summer heat',
          '- Adoption or fostering changes one life completely — adult street dogs often become astonishingly loyal companions',
          '- Sharing their story raises the awareness that funds all of the above',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'How to help a stray dog isn\'t complicated: approach calmly, feed consistently, connect with local rescuers, and support sterilization. You can\'t help every dog — but for the one in front of you, you can be everything.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is it safe to approach a stray dog?',
        a: 'Often yes, with calm body language — no staring, slow movements, letting the dog come to you. If the dog shows fear or aggression, help from a distance with food and contact a local rescue instead.',
      },
      {
        q: 'What should I feed a stray dog?',
        a: 'Plain cooked rice, unseasoned chicken, or dog food are ideal. Fresh water is just as important. Avoid chocolate, onions, cooked bones, and spicy leftovers.',
      },
      {
        q: 'Should I take a stray dog home?',
        a: 'Only after careful thought. A vet check, quarantine from other pets, and a decompression period are essential. Fostering through a rescue is a great supported alternative.',
      },
      {
        q: 'What if the stray dog is injured?',
        a: 'Don\'t attempt to treat wounds yourself — injured animals may bite from pain. Contain the dog gently if safe (a box or leash), and call a local rescue or vet immediately.',
      },
    ],
    related: ['what-is-tnvr', 'animal-welfare-pakistan', 'how-to-care-for-a-stray-cat'],
  },
  {
    slug: 'what-is-tnvr',
    title: 'What Is TNVR? How Trap-Neuter-Vaccinate-Return Saves Street Animals',
    category: 'Street Animals',
    excerpt:
      'What is TNVR? Discover how trap-neuter-vaccinate-return programs humanely reduce street dog and cat populations — and why it works better than anything else.',
    readTime: 6,
    keyword: 'what is TNVR',
    intro: [
      'Every street animal lover eventually asks the same question: feeding helps one animal today — but how do we help all of them, forever? The answer, proven in cities around the world, is TNVR.',
      'TNVR stands for Trap-Neuter-Vaccinate-Return. It is the most humane and effective strategy we have for street animal populations — and understanding it will change how you see every street dog and cat.',
    ],
    sections: [
      {
        heading: 'How TNVR Works, Step by Step',
        body: [
          '# Trap. Street animals are humanely trapped using baited box traps — no chasing, no nets, no stress beyond the necessary.',
          '# Neuter. A veterinarian spays or neuters the animal under anesthesia. One surgery ends an entire line of future litters.',
          '# Vaccinate. While under anesthesia, the animal receives rabies and core vaccinations — protecting both animals and the humans around them.',
          '# Return. After recovery, the animal returns to its home territory — the streets it knows, where it can no longer reproduce but can live out its life in health.',
          'A small ear-tip (a painless notch made during surgery) marks the animal as done, so it isn\'t trapped twice.',
        ],
      },
      {
        heading: 'Why TNVR Works When Nothing Else Does',
        body: [
          'Removing or culling street animals never works for long: new animals simply move into the emptied territory and breed — scientists call this the "vacuum effect." Populations bounce back within months.',
          'TNVR breaks the cycle at its source. Neutered animals stay in their territory, keep newcomers out, stop producing litters, and gradually the population shrinks — humanely, permanently. Rabies vaccination along the way makes entire neighborhoods safer.',
        ],
      },
      {
        heading: 'The Numbers Behind One Surgery',
        body: [
          '- One unspayed female dog and her offspring can produce dozens of puppies within a few years',
          '- For cats, the math is even steeper — a single pair can lead to thousands of descendants over several breeding seasons',
          '- Every neuter surgery is, quite literally, generations of suffering prevented',
        ],
      },
      {
        heading: 'How You Can Support TNVR',
        body: [
          '# Sponsor a surgery. In many countries, one spay/neuter costs less than a restaurant meal — donors abroad can fund several a month.',
          '# Volunteer locally. Trapping, transport, and post-op care all need hands.',
          '# Advocate. Ask your local officials to support TNVR instead of culling.',
          '# Share. Most people have never heard of TNVR. Explaining it once can redirect real money toward what works.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'What is TNVR? It is the difference between helping one animal today and helping every generation after. Trap, neuter, vaccinate, return — four words that add up to the kindest long-term answer street animals have ever had.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is TNVR humane?',
        a: 'Yes. It is endorsed by major animal welfare organizations worldwide. Surgery is performed under anesthesia by vets, and animals return to familiar territory — no killing, no displacement.',
      },
      {
        q: 'Why return the animals instead of rehoming them?',
        a: 'Most adult street animals are not socialized to humans and cannot adapt to home life. Returning them to their territory lets them live safely while ending the breeding cycle.',
      },
      {
        q: 'Does TNVR help with rabies?',
        a: 'Yes — vaccination is built into every TNVR program. Vaccinated, stable street populations are one of the most effective rabies-control strategies available.',
      },
      {
        q: 'How much does one TNVR surgery cost?',
        a: 'Costs vary by country, but in places like Pakistan a single surgery can cost as little as $10–25 — making donor support extraordinarily high-impact.',
      },
    ],
    related: ['how-to-help-a-stray-dog', 'animal-welfare-pakistan', 'how-to-care-for-a-stray-cat'],
  },
  {
    slug: 'working-donkey-welfare',
    title: 'The Lives of Working Donkeys: Why Their Welfare Matters',
    category: 'Donkey Welfare',
    excerpt:
      'Millions of working donkeys labor in brick kilns and streets worldwide. Their welfare matters — and small acts of care change their entire lives.',
    readTime: 6,
    keyword: 'working donkey welfare',
    image: 'donkey',
    imageAlt: 'working donkey being cared for — donkey welfare at a brick kiln',
    intro: [
      'Before engines, there were donkeys. And in much of the world — including the brick kilns and streets of Pakistan — there still are. An estimated 50 million working donkeys, horses, and mules support the livelihoods of some of the world\'s poorest families.',
      'They are the silent workforce: carrying bricks, water, and goods through heat and dust, day after day. Working donkey welfare is one of the most overlooked causes in animal care — and one where small help goes incredibly far.',
    ],
    sections: [
      {
        heading: 'A Day in the Life of a Brick Kiln Donkey',
        body: [
          'At Pakistan\'s brick kilns, donkeys haul loads of unfired bricks from dawn to dusk. A single donkey may carry several tons of bricks in a day, in temperatures that regularly cross 40°C (104°F).',
          'These animals are not unloved — the families who own them depend on them completely, and many owners care deeply. But poverty means veterinary care, proper harnesses, rest, and even water are often out of reach. Injuries that a simple treatment could fix go untreated, and animals work through pain.',
        ],
      },
      {
        heading: 'The Most Common Welfare Problems',
        body: [
          '- Ill-fitting harnesses that rub wounds into shoulders and backs',
          '- Overloading beyond what a donkey\'s frame can carry',
          '- Dehydration and heat stress during kiln work',
          '- Hoof problems from rough ground and no farrier care',
          '- Wounds treated late or never, due to cost and distance from vets',
        ],
      },
      {
        heading: 'Why Donkey Welfare Matters More Than You Think',
        body: [
          'Helping a working donkey helps a whole family. These animals are the engines of household income — when a donkey falls ill, children\'s school fees and family meals disappear with it. Healthy donkeys mean stable livelihoods.',
          'And on the animal\'s side: donkeys are intelligent, social, and emotionally rich animals. They form deep bonds, remember kind treatment for years, and feel pain exactly as any horse does. They simply have no voice to ask for better.',
        ],
      },
      {
        heading: 'What Actually Helps',
        body: [
          '# Mobile vet clinics. Organizations send veterinary teams directly to kilns and markets — treating wounds, fitting padded harnesses, and trimming hooves on the spot.',
          '# Owner education. Teaching harness fitting, load limits, rest schedules, and water breaks transforms daily life for thousands of animals.',
          '# Shade and water stations. Simple infrastructure at work sites prevents heat stress.',
          '# Emergency funds. Covering one vet bill can save both an animal and a family\'s income.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Working donkeys ask for so little: a harness that fits, water in the heat, rest when injured, and treatment when sick. Working donkey welfare is not about ending their work — it is about making that work humane. Few causes return so much relief for so little cost.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many working donkeys are there in the world?',
        a: 'An estimated 50 million donkeys, horses, and mules work worldwide, supporting the livelihoods of hundreds of millions of people — many in the world\'s poorest communities.',
      },
      {
        q: 'What is a brick kiln donkey?',
        a: 'A donkey working at a brick-making kiln, hauling loads of unfired bricks between work areas. Kiln donkeys in South Asia often work long hours in extreme heat with limited access to veterinary care.',
      },
      {
        q: 'Do donkeys feel pain like other animals?',
        a: 'Yes. Donkeys are highly intelligent and sensitive, but they are stoic — they hide pain rather than show it. This is why their suffering so often goes unnoticed and untreated.',
      },
      {
        q: 'How can I help working donkeys from abroad?',
        a: 'Support equine charities running mobile vet clinics and owner-education programs, sponsor veterinary treatments, and raise awareness. Small donations fund remarkably large improvements.',
      },
    ],
    related: ['animal-welfare-pakistan', 'how-to-help-a-stray-dog', 'what-is-tnvr'],
  },
  {
    slug: 'animal-welfare-pakistan',
    title: 'Animal Welfare in Pakistan: The Reality and How You Can Help',
    category: 'Street Animals',
    excerpt:
      'The reality of animal welfare in Pakistan — street dogs, stray cats, and working donkeys — and the practical ways anyone, anywhere, can help today.',
    readTime: 7,
    keyword: 'animal welfare Pakistan',
    intro: [
      'Pakistan is home to over 220 million people — and, quietly, to millions of forgotten animals. Street dogs sleeping on footpaths. Cats living entire lifetimes without a single vet visit. Donkeys carrying loads under a burning sun.',
      'Animal welfare in Pakistan faces challenges most of the world never sees. But it also has something powerful: a growing community of rescuers, vets, and ordinary people doing extraordinary work. Here is the honest picture — and exactly how you can help.',
    ],
    sections: [
      {
        heading: 'The Reality on the Ground',
        body: [
          'Street dogs are often feared instead of helped, largely due to rabies concerns — yet culling campaigns continue despite TNVR being the proven, humane alternative. Stray cats blend into the background of city life, unseen. Working donkeys labor at brick kilns with injuries that basic care could fix.',
          'There is no national shelter system. What exists instead is something more personal: small, independent rescues and shelters run almost entirely on donations and the stubborn kindness of individuals.',
        ],
      },
      {
        heading: 'The People Doing the Work',
        body: [
          'Across Karachi, Lahore, Islamabad, and smaller cities, rescue groups and shelters do the hardest work on the ground:',
          '- Running TNVR programs that humanely control street populations',
          '- Treating injured street animals and finding them homes — locally and abroad',
          '- Sending mobile vet teams to brick kilns for working donkeys',
          '- Educating communities that compassion and safety go together',
          'These organizations run on shoestring budgets. A single month of a shelter\'s food supply can cost less than a family dinner out in London or New York.',
        ],
      },
      {
        heading: 'How You Can Help — From Anywhere',
        body: [
          '# Donate to verified local rescues. Even $10–25 can fund a spay surgery, a week of food, or a donkey\'s vet treatment.',
          '# Sponsor a TNVR surgery. It is the single highest-impact gift in street animal welfare.',
          '# Adopt or help with adoptions. Pakistani street dogs ("desi dogs") make remarkable, resilient companions and are adopted worldwide.',
          '# Share their stories. Awareness travels further than money — every share puts these animals in front of someone new who can help.',
          '# Read and support this site. This website itself is part of the mission: a portion of everything it earns goes directly to food, TNVR drives, and shelter support in Pakistan.',
        ],
      },
      {
        heading: 'Why Your Help Reaches Further Here',
        body: [
          'In countries with strong currencies, donors sometimes wonder if small gifts matter. In Pakistan, they matter enormously. Exchange rates mean a modest donation stretches into surgeries, sacks of food, and weeks of medicine.',
          'Small actions, multiplied by many readers, become real change: a dog in Karachi vaccinated, a cat in Lahore fed through winter, a donkey at a brick kiln finally treated.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'Animal welfare in Pakistan is a story of great need met by great-hearted people with very small budgets. You don\'t need to be there to be part of it. Donate a little, share a lot, and never underestimate what awareness builds.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many street animals are in Pakistan?',
        a: 'Exact counts don\'t exist, but estimates suggest millions of street dogs and cats live in Pakistan\'s cities, alongside hundreds of thousands of working donkeys in industries like brick kilns.',
      },
      {
        q: 'Are there animal shelters in Pakistan?',
        a: 'Yes — independent, donation-funded shelters and rescue groups operate in major cities including Karachi, Lahore, and Islamabad. They rely almost entirely on public support.',
      },
      {
        q: 'Can I adopt a street dog from Pakistan?',
        a: 'Yes. Several rescue organizations arrange international adoptions of "desi dogs," handling vaccination, paperwork, and transport. These dogs are known for resilience and loyalty.',
      },
      {
        q: 'What is the most effective way to help?',
        a: 'Funding TNVR surgeries offers the highest long-term impact per dollar, followed by supporting shelters\' food and medical costs. Sharing rescue stories costs nothing and multiplies all of it.',
      },
    ],
    related: ['what-is-tnvr', 'working-donkey-welfare', 'how-to-help-a-stray-dog'],
  },
  {
    slug: 'how-to-care-for-a-stray-cat',
    title: "How to Care for a Stray Cat (Beginner's Guide)",
    category: 'Street Animals',
    excerpt:
      'Found a stray cat? This beginner\'s guide covers feeding stray cats safely, building trust, simple shelter, vet care, and when TNVR is the kindest step.',
    readTime: 6,
    keyword: 'how to care for a stray cat',
    intro: [
      'A thin cat appears at your door one evening. Then again the next. Soon you\'re leaving food out — and wondering what comes next. Congratulations: you\'ve been adopted by a stray.',
      'Learning how to care for a stray cat is simpler than most people think. This beginner\'s guide walks you through feeding, trust, shelter, and the one step that helps most of all.',
    ],
    sections: [
      {
        heading: 'First: Stray, Feral, or Someone\'s Pet?',
        body: [
          '- Stray cats were once socialized to humans — they may approach, meow, and make eye contact. They can often be rehomed.',
          '- Feral cats were born wild and avoid humans entirely. They belong outdoors, cared for in place.',
          '- A friendly, healthy-looking cat might be a lost pet — check for a collar, ask neighbors, and have a vet scan for a microchip before assuming.',
        ],
      },
      {
        heading: 'Feeding Stray Cats the Right Way',
        body: [
          '# Feed at consistent times, once or twice daily — routine builds trust and keeps cats healthy.',
          '# Offer cat food if possible; plain cooked chicken or fish works too. Avoid milk (most adult cats are lactose intolerant), onions, garlic, and seasoned food.',
          '# Always provide fresh water — especially in summer.',
          '# Pick up uneaten food after 30 minutes to avoid attracting pests.',
          '# Feed in a quiet, safe spot away from roads and dogs.',
        ],
      },
      {
        heading: 'Building Trust, Slowly',
        body: [
          'Let the cat set the pace. Sit quietly nearby during meals, at a distance the cat chooses. Avoid reaching, grabbing, or sudden movements. Over days and weeks, most strays close the gap themselves — a blink, a head-bump, a cautious rub against your leg.',
          'Never force contact. Trust earned slowly is trust that lasts.',
        ],
      },
      {
        heading: 'Simple Shelter and Safety',
        body: [
          'A basic shelter changes a street cat\'s life, especially in rain and winter:',
          '- A sturdy plastic crate or wooden box, raised off the ground',
          '- Straw inside (not blankets — straw stays dry and warm)',
          '- An entrance small enough to keep dogs out, facing away from wind',
          '- A quiet placement: behind bushes, under stairs, beside a wall',
        ],
      },
      {
        heading: 'The Kindest Step: Vet Care and TNVR',
        body: [
          'Feeding keeps one cat alive; neutering protects the whole neighborhood. An unneutered female can produce litter after litter — and kittens born on the street face hard odds.',
          'Ask local vets or rescues about TNVR (trap-neuter-vaccinate-return). Many offer low-cost street cat surgeries. One neutered, vaccinated cat — ear-tipped and returned to your care — is a success story that keeps giving.',
        ],
      },
      {
        heading: 'The Bottom Line',
        body: [
          'How to care for a stray cat comes down to four things: regular food and water, patient trust-building, simple shelter, and a TNVR appointment. Do those, and you haven\'t just fed a cat — you\'ve changed a life.',
        ],
      },
    ],
    faq: [
      {
        q: 'Should I give milk to a stray cat?',
        a: 'No — most adult cats are lactose intolerant, and milk causes stomach upset. Fresh water and cat food (or plain cooked meat) are far better.',
      },
      {
        q: 'How do I tell a stray cat from a feral one?',
        a: 'Strays may approach, meow, and make eye contact; ferals keep their distance and stay silent. Strays can often be rehomed; ferals are best cared for outdoors through feeding and TNVR.',
      },
      {
        q: 'Can I bring a stray cat into my home?',
        a: 'Yes, with preparation: a vet check first, quarantine from other pets for 1–2 weeks, and a slow introduction to indoor life. Many strays become wonderful house cats.',
      },
      {
        q: 'What if I can only do one thing for a stray cat?',
        a: 'Arrange a neuter surgery through a local TNVR program. It prevents generations of suffering and is the single most impactful act for street cat welfare.',
      },
    ],
    related: ['what-is-tnvr', 'how-to-help-a-stray-dog', 'indoor-vs-outdoor-cats'],
  },
]

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getRelated(article: Article) {
  return article.related
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is Article => Boolean(a))
}

export function categoryMeta(name: Category) {
  return CATEGORIES.find((c) => c.name === name)!
}
