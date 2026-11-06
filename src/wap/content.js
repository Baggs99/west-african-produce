// West African Produce copy. Source: westafricanproduce.com (current site), wording lightly edited.
// Edit here to change text across the storefront.

export const brand = {
  name: 'West African Produce',
  short: 'W',
  tagline: 'Experience the taste of Africa',
  // The live site lists this address. Its domain is westafricanproduce.com, so confirm it before launch.
  email: 'sales@westafricaproduce.com',
  address: ['1530 W Sam Houston Pkwy North', 'Houston, Texas 77043'],
  instagram: 'https://instagram.com/westafricanproduce',
  facebook: 'https://www.facebook.com/profile.php?id=100093987900154',
}

export const pillars = [
  {
    title: 'Small-farm fruit',
    body: 'Our red palm oil starts with fruit from small farms in Sierra Leone.',
  },
  {
    title: 'Filtered for the kitchen',
    body: 'The oil is mechanically filtered so it keeps its color and flavor without tasting heavy.',
  },
  {
    title: 'Bottles and cases',
    body: 'Buy one bottle for home, or order cases for restaurants, caterers, and small retailers.',
  },
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'palm-oil', label: 'Palm Oil' },
  { id: 'smoked-fish', label: 'Smoked Fish', comingSoon: true },
  { id: 'frozen-vegetables', label: 'Frozen Vegetables', comingSoon: true },
  { id: 'spices', label: 'Spices', comingSoon: true },
]

export const wholesale = {
  intro:
    'Need more than a few bottles? Tell us what you need, where it is going, and when you need it.',
  palletNote: 'We can quote palm oil by the case or pallet and discuss private labels for larger buyers.',
  interests: ['Palm oil pallet', 'Smoked fish', 'Frozen vegetables', 'Spices', 'Private label', 'Other'],
}

export const productFamilies = [
  {
    title: 'Red palm oil',
    eyebrow: 'Available now',
    body:
      'Natural red palm oil from Sierra Leone, bottled in four sizes and sold by the bottle or case.',
    items: ['Natural Red Palm Oil', '16 oz', '32 oz', '1/2 gal', '1 gal'],
  },
  {
    title: 'Smoked fish',
    eyebrow: 'Coming soon',
    body: 'We plan to add smoked fish once products, prices, and shipping details are ready.',
    items: ['Kuta / Barracuda', 'Kinnie / Baby Barracuda', 'Catfish', 'Grouper', 'Skit', 'Baby Shark'],
    comingSoon: true,
  },
  {
    title: 'Frozen vegetables',
    eyebrow: 'Coming soon',
    body: 'Frozen greens are planned, but they are not available for online ordering yet.',
    items: ['Potato Leaves', 'Cassava Leaves', 'Crain Crain / Jute Leaves'],
    comingSoon: true,
  },
  {
    title: 'Spices',
    eyebrow: 'Coming soon',
    body: 'Spices are on the roadmap. Palm oil is the live product for now.',
    items: ['Curry Powder', 'Pure Ground Ginger', 'Ground Black Pepper', 'All in One Seasoning', 'Thyme', 'Cayenne Pepper'],
    comingSoon: true,
  },
]

// Retail palm oil sizes shown in the hero and shop. Live API prices overlay these when present.
export const palmVolumes = [
  {
    id: '16oz',
    label: '16 oz',
    unit: '16 ounce jar',
    bottleLabel: '16 OZ',
    sku: 'palm-oil-16oz',
    price_cents: 800,
    caseSku: 'palm-oil-16oz-case',
    caseCount: 12,
    casePriceCents: 8000,
    caseUnit: 'case of 12 · 16 oz',
  },
  {
    id: '32oz',
    label: '32 oz',
    unit: '32 ounce jar',
    bottleLabel: '32 OZ',
    sku: 'palm-oil-32oz',
    price_cents: 1400,
    caseSku: 'palm-oil-32oz-case',
    caseCount: 12,
    casePriceCents: 14000,
    caseUnit: 'case of 12 · 32 oz',
  },
  {
    id: 'half',
    label: '1/2 gal',
    unit: '1/2 gallon',
    bottleLabel: '1/2 GALLON',
    sku: 'palm-oil-half',
    price_cents: 1800,
    caseSku: 'palm-oil-half-case',
    caseCount: 6,
    casePriceCents: 9000,
    caseUnit: 'case of 6 · 1/2 gal',
  },
  {
    id: '1gal',
    label: '1 gal',
    unit: '1 gallon',
    bottleLabel: '1 GALLON',
    sku: 'palm-oil-1gal',
    price_cents: 3000,
    caseSku: 'palm-oil-case',
    caseCount: 4,
    casePriceCents: 10000,
    caseUnit: 'case of 4 gallons',
  },
]

const PALM_DESCRIPTION =
  'Natural red palm oil from Sierra Leone. Use it for stews, soups, sauces, frying, and rice dishes.'

export const palmCatalogProducts = palmVolumes.flatMap((volume, index) => [
  {
    sku: volume.sku,
    name: 'Organic Red Palm Oil',
    category: 'palm-oil',
    description: PALM_DESCRIPTION,
    unit: volume.unit,
    price_cents: volume.price_cents,
    availability: 'in_stock',
    sort_order: index * 2 + 1,
  },
  {
    sku: volume.caseSku,
    name: `Organic Red Palm Oil, Case of ${volume.caseCount}`,
    category: 'palm-oil',
    description: `One case: ${volume.caseCount} ${volume.unit} containers for kitchens, caterers, and small retailers.`,
    unit: volume.caseUnit,
    price_cents: volume.casePriceCents,
    availability: 'in_stock',
    sort_order: index * 2 + 2,
  },
])

export const priceGuides = [
  {
    title: 'Natural Red Palm Oil',
    note: 'Bottle and case program',
    rows: [
      ['5 Gallon', '1/case', '$55', '$48'],
      ['1 Gallon', '4/case', '$16', '$14.50'],
      ['1/2 Gallon', '6/case', '$9', '$7.99'],
      ['32 Ounce', '12/case', '$6', '$4.50'],
      ['16 Ounce', '12/case', '$3', '$2'],
    ],
  },
  {
    title: 'Smoked Fish',
    note: 'Price per pound',
    rows: [
      ['Kuta', '30 lb case', '$12', '$10.50'],
      ['Kuta', '50 lb case', '$7.25', '$6.50'],
      ['Kinnie', '30 lb case', '$7', '$6.50'],
      ['Catfish', '30 lb case', '$7', '$6'],
      ['Herring', '30 lb case', '$6.75', '$5.50'],
    ],
  },
  {
    title: 'Spices',
    note: 'Bottle and bag program',
    rows: [
      ['Black Pepper 16 oz', '24/case', '$3.50', '$3'],
      ['Black Pepper 32 oz', '12/case', '$6.99', '$5.99'],
      ['Curry 16 oz', '24/case', '$2.25', '$1.99'],
      ['Curry 5 lb bag', '4/case', '$13.99', '$11.99'],
      ['Ginger 5 lb bag', '4/case', '$24', '$23'],
    ],
  },
]

export const recipes = [
  {
    title: 'Palm oil rice',
    body: 'A simple red rice base with onions, tomato, pepper, and a spoonful of palm oil for color and depth.',
    ingredients: ['Red palm oil', 'Rice', 'Tomato', 'Onion'],
  },
  {
    title: 'Beans with palm oil',
    body: 'Finish cooked beans with palm oil, onion, and pepper for a rich, everyday bowl.',
    ingredients: ['Red palm oil', 'Beans', 'Onion', 'Hot pepper'],
  },
]
