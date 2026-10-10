export interface Suite {
  id: string;
  name: string;
  category: string;
  pricePerNight: string;
  size: string;
  capacity: string;
  bedType: string;
  view: string;
  image: string;
  description: string;
  highlight: string;
  amenities: string[];
  architecturalDetails: string;
}

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'banarasi' | 'continental';
  subcategory: string;
  price: string;
  description: string;
  isChefSpecial?: boolean;
  isSattvic?: boolean;
  isVegan?: boolean;
  ingredients: string;
  image?: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  timing: string;
  features: string[];
  image: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  stayType: string;
  roomStayed: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const HOTEL_DETAILS = {
  name: 'BrijRama Palace, Varanasi - By the Ganges',
  tagline: 'A 210-Year-Old Maratha Heritage Citadel on Darbhanga Ghat',
  address: 'Darbhanga Ghat, Dashashwamedh, Varanasi, Uttar Pradesh 221001',
  phone: '+91 91155 55000',
  email: 'reservations@brijrama.com',
  rating: 4.8,
  totalReviews: '3,300+',
  established: 1812,
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Brijrama+Palace,+Darbhanga+Ghat,+Dashashwamedh,+Varanasi&t=&z=16&ie=UTF8&iwloc=&output=embed',
  coordinates: {
    lat: 25.3056,
    lng: 83.0108,
  },
};

export const SUITES_DATA: Suite[] = [
  {
    id: 'mayur-mahal',
    name: 'Mayur Mahal Room',
    category: 'Heritage Classic',
    pricePerNight: '₹28,500',
    size: '380 sq.ft',
    capacity: '2 Adults · 1 Child',
    bedType: 'Royal King Bed',
    view: 'Heritage Central Courtyard View',
    image: '/assets/images/brijrama_mayur_mahal_1791545926244.jpg',
    description:
      'Elegant heritage sanctuary adorned with hand-carved Maratha stone arches, peacock motifs, and antique Burma teak furnishings, overlooking the palace central atrium.',
    highlight: 'Classic Maratha architecture with courtyard light and pure silk drapes',
    amenities: [
      'High-Speed Wi-Fi',
      'Artisan Teak Work Desk',
      'Pillow Menu & Egyptian Cottons',
      'Marble En-suite Bath',
      'Forest Essentials Toiletries',
      'Handcrafted Tea Service',
    ],
    architecturalDetails:
      'Features carved sandstone brackets and fresco borders reminiscent of the early 19th-century Maratha court at Varanasi.',
  },
  {
    id: 'varuna-palace',
    name: 'Varuna Palace Room',
    category: 'River Facing Heritage',
    pricePerNight: '₹38,000',
    size: '460 sq.ft',
    capacity: '2 Adults · 1 Child',
    bedType: 'Royal King Bed',
    view: 'Direct Panoramic River Ganges View',
    image: '/assets/images/varuna_river_suite_1791545789857.jpg',
    description:
      'Spacious river-facing sanctuary with an authentic arched Jharokha framing dawn over the sacred Ganges, accompanied by luxury linens and royal bath amenities.',
    highlight: 'Direct sunrise view over the river ghats from the private seating niche',
    amenities: [
      'Arched Jharokha Window Seat',
      'Ganges Sunrise Vista',
      'Artisanal Minibar (Alcohol-Free)',
      'Espresso & Organic Leaf Teas',
      'Soaking Clawfoot Bathtub',
      'Nightly Turndown Ritual',
    ],
    architecturalDetails:
      'Named after the sacred Varuna River, featuring original 18th-century stone lattice work (jaali) that filters the golden river sunlight.',
  },
  {
    id: 'maharaja-suite',
    name: 'Maharaja Suite',
    category: 'Grand Heritage Suite',
    pricePerNight: '₹58,000',
    size: '680 sq.ft',
    capacity: '3 Adults or 2 Adults + 2 Children',
    bedType: 'Four-Poster Royal Canopy Bed',
    view: 'Ganges Riverfront & Darbhanga Bastion',
    image: '/assets/images/maharaja_suite_palace_1791545804315.jpg',
    description:
      'The crown jewel of palace hospitality with a private royal reception salon, gilded coffered ceilings, antique crystal chandeliers, and dedicated personal butler service.',
    highlight: 'Separate royal living salon with 24/7 personalized butler service',
    amenities: [
      'Dedicated 24/7 Royal Butler',
      'Private Living & Dining Salon',
      'Four-Poster Antique Bed',
      'Walk-in Dressing & Vanity',
      'Deep Marble Jacuzzi Bath',
      'Complimentary Royal High Tea',
    ],
    architecturalDetails:
      'Restored using ancestral teak woodwork, gold foil borders, and historic portraits of the Darbhanga royals who held court here.',
  },
  {
    id: 'royal-ganges',
    name: 'Royal Ganges Suite',
    category: 'Premier River Suite',
    pricePerNight: '₹72,000',
    size: '790 sq.ft',
    capacity: '3 Adults or 2 Adults + 2 Children',
    bedType: 'Emperor Sized Silk Canopy Bed',
    view: 'Panoramic Balcony over Ganges & Evening Aarti',
    image: '/assets/images/brijrama_palace_hero_1791545779534.jpg',
    description:
      'Top-tier palace luxury commanding supreme riverfront heights, featuring an expansive private balcony overlooking Dashashwamedh Ghat and priority palace dining privileges.',
    highlight: 'Private panoramic terrace with front-row view of the holy Ganga Aarti',
    amenities: [
      'Private Riverfront Terrace Balcony',
      'Front-Row Ganga Aarti View',
      'Priority Darbhanga Dining Reservations',
      'Private Bajra Sunset Boat Ride',
      'Ayurvedic Foot Cleansing on Arrival',
      'Curated Banarasi Silk Welcome Robe',
    ],
    architecturalDetails:
      'Situated on the highest rampart of Darbhanga Ghat, engineered with 12-foot sandstone ceiling arches and handcrafted brass chandeliers.',
  },
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'boat-transfer',
    title: 'Heritage Boat Transfers',
    subtitle: 'Private Bajra Riverfront Arrival',
    description:
      'Because Varanasi’s historic ghats are free of vehicular traffic, every guest journey begins with a royal wooden boat cruise gliding across the sacred Ganges right to Darbhanga Ghat.',
    timing: '6:00 AM – 10:00 PM (Round the Clock on Demand)',
    features: [
      'Luggage portered directly from car drop-off point to boat',
      'Chilled herbal infusions & sandalwood towels aboard',
      'Private dawn & dusk river excursions available',
      'Historic commentary by seasoned local navigators',
    ],
    image: '/assets/images/brijrama_boat_ghat_arrival_1791545938114.jpg',
    badge: 'Signature Experience',
  },
  {
    id: 'kamalya-spa',
    title: 'Kamalya Spa & Wellness',
    subtitle: 'Ayurvedic Therapies & Riverfront Yoga',
    description:
      'Rooted in ancient Vedic healing, Kamalya offers warm herbal poultice therapies, Abhyanga rituals, and sunrise Hatha yoga on the palace terrace overlooking the holy river.',
    timing: '7:00 AM – 8:30 PM Daily',
    features: [
      'Classical Abhyanga & Shirodhara treatments',
      'Certified Ayurvedic wellness consultations',
      'Dawn pranayama & meditation on the terrace',
      'Organic cold-pressed oils & botanical compresses',
    ],
    image: '/assets/images/varuna_river_suite_1791545789857.jpg',
    badge: 'Holistic Rejuvenation',
  },
  {
    id: 'classical-music-aarti',
    title: 'Live Classical Music & Ganga Aarti',
    subtitle: 'Evening Sitar & Rooftop Aarti Viewing',
    description:
      'As dusk falls across the river, the palace courtyard resonates with soulful live sitar and flute melodies. Guests enjoy elevated, serene views of the sacred Maha Aarti at Dashashwamedh Ghat.',
    timing: '6:30 PM – 8:00 PM Every Evening',
    features: [
      'Accomplished Banaras Gharana sitar maestros',
      'Private rooftop vantage away from Ghat crowds',
      'Fresh flower offering & diya floating ritual',
      'Complimentary royal masala chai & crisp snacks',
    ],
    image: '/assets/images/brijrama_palace_hero_1791545779534.jpg',
    badge: 'Spiritual Immersion',
  },
  {
    id: 'butler-concierge',
    title: '24/7 Butler & Royal Concierge',
    subtitle: 'Uncompromising Heritage Hospitality',
    description:
      'From curating silk-weaving explorations in the ancient galis to arranging priority temple blessings at Kashi Vishwanath, your personal royal concierge caters to every wish.',
    timing: '24 Hours Uninterrupted',
    features: [
      'Personalized temple tour & escorted gali walks',
      'Unpacking, wardrobe pressing & bath preparation',
      'Customized sattvic or dietary dining arrangements',
      'Varanasi airport luxury car coordination',
    ],
    image: '/assets/images/maharaja_suite_palace_1791545804315.jpg',
    badge: 'Round-The-Clock Care',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Banarasi & Indian Traditional
  {
    id: 'm1',
    name: 'Banarasi Tamatar Chaat',
    hindiName: 'बनारसी टमाटर चाट',
    category: 'banarasi',
    subcategory: 'Appetizers & Chaat',
    price: '₹750',
    description:
      'Slow-braised plum tomatoes seasoned with hing, roasted cumin, crunchy cashew bits, namak pare, and light sugar syrup, served in an earthen clay kulhad.',
    isChefSpecial: true,
    isSattvic: true,
    ingredients: 'Varanasi vine tomatoes, desi ghee, roasted cumin, cashews, earthen glaze',
    image: '/assets/images/banarasi_tamatar_chaat_1791548691349.jpg',
  },
  {
    id: 'm2',
    name: 'Darbhanga Royal Thali',
    hindiName: 'दरभंगा शाही थाली',
    category: 'banarasi',
    subcategory: 'Royal Feasts',
    price: '₹2,650',
    description:
      'The quintessential palace feast featuring Paneer Khas, Dal BrijRama, seasonal Subz, Saffron Biryani, Missi Roti, Laccha Naan, curd, and artisanal Banarasi sweets.',
    isChefSpecial: true,
    isSattvic: true,
    ingredients: 'Paneer, heirloom lentils, seasonal organic vegetables, basmati, saffron, malaiyo',
    image: '/assets/images/darbhanga_royal_thali_1791548703333.jpg',
  },
  {
    id: 'm3',
    name: 'Paneer Khas BrijRama',
    hindiName: 'पनीर ख़ास ब्रिजरामा',
    category: 'banarasi',
    subcategory: 'Mains',
    price: '₹1,150',
    description:
      'House-churned cottage cheese medallions stuffed with crushed pistachios, dates, and mawa, simmered gently in a fragrant Kashmiri saffron and cashew gravy.',
    isChefSpecial: true,
    ingredients: 'Malai paneer, Kashmiri saffron, cashew paste, green cardamom, dry fruits',
    image: '/assets/images/paneer_khas_brijrama_1791548714656.jpg',
  },
  {
    id: 'm4',
    name: 'Dal BrijRama',
    hindiName: 'दाल ब्रिजरामा',
    category: 'banarasi',
    subcategory: 'Mains',
    price: '₹850',
    description:
      'Heritage black lentils simmered overnight over slow charcoal embers with vine tomatoes, churned white makhan, and gentle whole spices.',
    isChefSpecial: true,
    ingredients: 'Organic urad dal, slow-churned butter, vine tomatoes, ginger, mild aromatics',
    image: '/assets/images/dal_brijrama_1791548726062.jpg',
  },
  {
    id: 'm5',
    name: 'Shahi Subz Dum Biryani',
    hindiName: 'शाही दम बिरयानी (Shahi Dum Biryani)',
    category: 'banarasi',
    subcategory: 'Rice & Handi Dum Biryani',
    price: '₹1,050',
    description:
      'Fragrant aged Basmati rice layered with garden vegetables, fresh mint, rose water, and pure Kashmiri saffron, slow-cooked in a sealed earthen clay handi (Purvanchali Dum Biryani tradition).',
    isChefSpecial: true,
    isSattvic: true,
    ingredients: 'Aged basmati, baby carrots, beans, cottage cheese, saffron strands, rose petals, handi spices',
    image: '/assets/images/shahi_dum_biryani_1791548738424.jpg',
  },
  {
    id: 'm6',
    name: 'Artisan Tandoori Bread Basket',
    hindiName: 'तंदूरी रोटी टोकरी',
    category: 'banarasi',
    subcategory: 'Breads',
    price: '₹600',
    description:
      'Assortment of freshly baked Missi Roti with ajwain, Chur-Chur butter Naan, and layered Pudina Paratha straight from our charcoal clay ovens.',
    ingredients: 'Stone-ground whole wheat, gram flour, crushed ajwain, mint, cow ghee',
    image: '/assets/images/darbhanga_royal_thali_1791548703333.jpg',
  },
  {
    id: 'm7',
    name: 'Banarasi Saffron Malaiyo',
    hindiName: 'बनारसी मलइयो',
    category: 'banarasi',
    subcategory: 'Royal Desserts',
    price: '₹650',
    description:
      'Varanasi’s fabled winter dessert—ethereal cloud of dew-whipped milk foam infused with pure saffron, green cardamom, and slivered pistachios.',
    isChefSpecial: true,
    isSattvic: true,
    ingredients: 'Organic milk foam, saffron, green cardamom, roasted pistachio slivers',
    image: '/assets/images/banarasi_malaiyo_dessert_1791551080470.jpg',
  },
  {
    id: 'm8',
    name: 'Kashmiri Kahwa & Rabri Jamun',
    hindiName: 'रबड़ी गुलाब जामुन',
    category: 'banarasi',
    subcategory: 'Royal Desserts',
    price: '₹600',
    description:
      'Warm khoya dumplings steeped in rose cardamom syrup, served resting on a bed of thick, slow-reduced artisanal rabri.',
    ingredients: 'Mawa, desi ghee, buffalo milk rabri, rose essence, silver leaf',
    image: '/assets/images/darbhanga_royal_thali_1791548703333.jpg',
  },

  // Continental & Global Classics
  {
    id: 'm9',
    name: 'Creamy Wild Mushroom & Truffle Soup',
    category: 'continental',
    subcategory: 'Soups & Starters',
    price: '₹750',
    description:
      'Velvety broth of sauteed Himalayan morels, porcini, and field mushrooms, finished with aromatic white truffle oil and toasted artisanal sourdough croutes.',
    isChefSpecial: true,
    ingredients: 'Porcini, morels, fresh thyme, light cream, white truffle oil, sourdough',
    image: '/assets/images/truffle_mushroom_soup_1791550896005.jpg',
  },
  {
    id: 'm10',
    name: 'Burrata Caprese with Basil Pesto',
    category: 'continental',
    subcategory: 'Salads & Antipasti',
    price: '₹950',
    description:
      'Fresh artisanal burrata cheese paired with heritage vine tomatoes, pine-nut basil pesto, aged balsamic reduction, and extra-virgin olive oil.',
    isSattvic: true,
    ingredients: 'Artisanal burrata, heritage tomatoes, toasted pine nuts, sweet basil, aged balsamic',
    image: '/assets/images/burrata_caprese_salad_1791550930665.jpg',
  },
  {
    id: 'm11',
    name: 'Handcrafted Truffle Fettuccine',
    category: 'continental',
    subcategory: 'Pastas & Mains',
    price: '₹1,250',
    description:
      'House-made ribbon pasta tossed in a delicate parmesan-butter emulsion with wild forest mushrooms, baby asparagus tips, and freshly shaved black winter truffles.',
    isChefSpecial: true,
    ingredients: 'Semolina pasta ribbons, black truffle paste, cultured butter, shaved parmesan',
    image: '/assets/images/truffle_fettuccine_1791550912630.jpg',
  },
  {
    id: 'm12',
    name: 'Grilled Herb Paneer & Garden Sizzler',
    category: 'continental',
    subcategory: 'Pastas & Mains',
    price: '₹1,350',
    description:
      'Rosemary and thyme basted cottage cheese steak served on a smoking iron platter with grilled baby zucchini, bell peppers, buttered parsley rice, and pepper jus.',
    ingredients: 'Fresh paneer steak, rosemary, asparagus, sweet peppers, seasoned jasmine rice',
    image: '/assets/images/paneer_garden_sizzler_1791550946563.jpg',
  },
  {
    id: 'm13',
    name: 'Wood-Fired Truffle & Bocconcini Flatbread',
    category: 'continental',
    subcategory: 'Flatbreads',
    price: '₹1,100',
    description:
      'Ultra-thin fermented crust baked over river-stone tiles with San Marzano tomato sauce, fresh bocconcini pearls, wild mushrooms, and arugula greens.',
    ingredients: '00 flour crust, San Marzano reduction, bocconcini, rocket leaves, truffle drizzle',
    image: '/assets/images/burrata_caprese_salad_1791550930665.jpg',
  },
  {
    id: 'm14',
    name: 'Royal Heritage Breakfast Platter',
    category: 'continental',
    subcategory: 'Breakfast Classics',
    price: '₹1,200',
    description:
      'Golden buttermilk pancakes or crisp Belgian waffles served with maple syrup, organic river valley fruit medley, and a signature eggless herb-stuffed omelette.',
    ingredients: 'Fluffy pancake stack, pure organic maple syrup, berries, eggless chickpea-herb crepe',
    image: '/assets/images/breakfast_pancakes_waffles_1791551065449.jpg',
  },
];

export interface ExperientialPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  inclusions: string[];
  idealFor: string;
  badge: string;
}

export const EXPERIENTIAL_PACKAGES: ExperientialPackage[] = [
  {
    id: 'royal-heritage-stay',
    title: 'Royal Heritage Stay & Ghat Pilgrimage',
    tagline: '210-Year-Old Palace Sanctum Experience',
    duration: '3 Nights · 4 Days',
    price: '₹1,12,000',
    description:
      'An immersive royal living sojourn starting with a private Bajra boat river greeting, escorted temple darshan at Kashi Vishwanath, and high tea in the Darbhanga courtyard.',
    image: '/assets/images/maharaja_suite_palace_1791545804315.jpg',
    inclusions: [
      'Private Bajra river transfers from Rajghat port',
      'Daily royal buffet breakfast & Darbhanga thali dinner',
      'VIP escorted Kashi Vishwanath corridor blessings',
      'Historical palace architectural tour by resident historian',
      'Evening sitar & flute courtyard recital seating',
    ],
    idealFor: 'Heritage Connoisseurs & Families',
    badge: 'Signature Journey',
  },
  {
    id: 'culinary-journey-darbhanga',
    title: 'Culinary Journey at Darbhanga',
    tagline: 'Authentic Banarasi Court Feasts & Chef Masterclass',
    duration: '2 Nights · 3 Days',
    price: '₹84,000',
    description:
      'A masterclass in 100% pure vegetarian royal dining. Experience heirloom Banarasi chaat tasting, saffron Malaiyo preparation, and private silver-service candlelight dining.',
    image: '/assets/images/darbhanga_royal_thali_1791548703333.jpg',
    inclusions: [
      'Seven-course Darbhanga Maharaja silver thali feast',
      'Spice trail gali excursion with the Executive Chef',
      'Private candlelight riverview terrace table',
      'Chef’s signature Sattvic & Truffle cooking session',
      'Welcome Banarasi silk stole & silver sweet box',
    ],
    idealFor: 'Gourmet Travelers & Couples',
    badge: 'Epicurean Retreat',
  },
  {
    id: 'kamalya-spa-wellness',
    title: 'Kamalya & Jiva Spa Wellness Retreat',
    tagline: 'Vedic Healing & Sunrise Ganga Yoga',
    duration: '3 Nights · 4 Days',
    price: '₹98,000',
    description:
      'Realign your mind and spirit through bespoke Ayurvedic therapies, daily dawn Pranayama on the palace bastion overlooking the Ganges, and restorative herbal hydrotherapies.',
    image: '/assets/images/varuna_river_suite_1791545789857.jpg',
    inclusions: [
      'Personalized pulse analysis & Ayurvedic consultation',
      'Two 90-minute classical Abhyanga & Shirodhara therapies',
      'Daily sunrise terrace yoga & river meditation',
      'Holistic Sattvic detox meal curation',
      'Herbal bath preparations in suite clawfoot tub',
    ],
    idealFor: 'Wellness Seekers & Rejuvenation',
    badge: 'Holistic Vedic Retreat',
  },
  {
    id: 'sacred-aarti-bajra-cruise',
    title: 'Sacred Ganges Dawn Bajra Cruise & Aarti Sojourn',
    tagline: 'Front-Row Spiritual Reverence',
    duration: '2 Nights · 3 Days',
    price: '₹76,000',
    description:
      'Witness the timeless cycle of life along the 84 ghats from our private wooden bajra boat at sunrise, capped with elevated rooftop viewing of the sacred Dashashwamedh Maha Aarti.',
    image: '/assets/images/brijrama_boat_ghat_arrival_1791545938114.jpg',
    inclusions: [
      'Private dawn Bajra cruise past 84 historical ghats',
      'Floating diya & Vedic chant ceremony with palace pandit',
      'Rooftop Maha Aarti terrace viewing with royal chai',
      'Priority Varuna Palace river-facing suite upgrade',
      'Complimentary airport luxury car coordination',
    ],
    idealFor: 'Spiritual Explorers & Photographers',
    badge: 'Spiritual Wonder',
  },
];


export const TESTIMONIALS_DATA: Testimonial[] = [
  // 9 verified reviews for 3x3 layout
  {
    id: 't1',
    name: 'Lord & Lady Alistair Kensington',
    location: 'London, United Kingdom',
    stayType: 'Verified Heritage Stay',
    roomStayed: 'Royal Ganges Suite',
    rating: 5,
    date: 'February 2026',
    comment:
      'Arriving at BrijRama Palace by private boat at twilight as the temple bells echoed was nothing short of cinematic. The palace’s architecture and staff hospitality rival the finest grand hotels of Europe.',
    verified: true,
  },
  {
    id: 't2',
    name: 'Ambassador Rajiv & Meenakshi Sen',
    location: 'New Delhi, India',
    stayType: 'Verified Diplomatic Stay',
    roomStayed: 'Maharaja Suite',
    rating: 5,
    date: 'January 2026',
    comment:
      'The Maharaja Suite is breathtaking—the antique woodwork and direct view of Darbhanga Ghat transported us to another era. The private butler and pure sattvic Banarasi thali were impeccable.',
    verified: true,
  },
  {
    id: 't3',
    name: 'Claire & Julien Moreau',
    location: 'Paris, France',
    stayType: 'Couples Retreat',
    roomStayed: 'Varuna Palace Room',
    rating: 5,
    date: 'March 2026',
    comment:
      'Waking up to the golden sunrise over Mother Ganga through our arched window was the most spiritual moment of our journey. The evening sitar concerts in the central courtyard were pure poetry.',
    verified: true,
  },
  {
    id: 't4',
    name: 'Dr. Siddharth & Poonam Singhania',
    location: 'Mumbai, India',
    stayType: 'Family Pilgrimage',
    roomStayed: 'Royal Ganges Suite',
    rating: 5,
    date: 'December 2025',
    comment:
      'The proximity to Dashashwamedh Ghat without any street chaos or noise is unmatched. The rooftop view of the evening Ganga Aarti made our pilgrimage truly unforgettable for our elders.',
    verified: true,
  },
  {
    id: 't5',
    name: 'Sophia Van Der Bilt',
    location: 'Amsterdam, Netherlands',
    stayType: 'Solo Cultural Traveler',
    roomStayed: 'Mayur Mahal Room',
    rating: 5,
    date: 'January 2026',
    comment:
      'As a preservation architect, I was astonished by the restoration quality. The elevator—one of India’s first—combined with modern eco-friendly operations on the riverbank is remarkable.',
    verified: true,
  },
  {
    id: 't6',
    name: 'Vikram & Ananya Rathore',
    location: 'Jaipur, India',
    stayType: 'Anniversary Stay',
    roomStayed: 'Varuna Palace Room',
    rating: 5,
    date: 'February 2026',
    comment:
      'The pure vegetarian cuisine at Darbhanga restaurant is of Michelin standard. The Banarasi Tamatar Chaat and Malaiyo served in silver service set a new benchmark for Indian luxury dining.',
    verified: true,
  },
  {
    id: 't7',
    name: 'Evelyn & Marcus Wright',
    location: 'Melbourne, Australia',
    stayType: 'Heritage Explorer',
    roomStayed: 'Maharaja Suite',
    rating: 5,
    date: 'November 2025',
    comment:
      'From the moment the boat picked us up at the ghat to the farewell rose-water blessing, every gesture was genuine. Kamalya Spa’s Ayurvedic Abhyanga massage was world-class.',
    verified: true,
  },
  {
    id: 't8',
    name: 'Harish Chandra Agarwal',
    location: 'Kolkata, India',
    stayType: 'Heritage Enthusiast',
    roomStayed: 'Mayur Mahal Room',
    rating: 4.8,
    date: 'October 2025',
    comment:
      'Pure luxury steeped in sacred sanctity. The staff arranged VIP boat access to Manikarnika and Dashashwamedh Ghats with our private pandit. Truly an extraordinary royal sanctuary.',
    verified: true,
  },
  {
    id: 't9',
    name: 'Koji & Hiroko Tanaka',
    location: 'Kyoto, Japan',
    stayType: 'International Traveler',
    roomStayed: 'Royal Ganges Suite',
    rating: 5,
    date: 'February 2026',
    comment:
      'A sacred palace of peace. The balance of ancient stone textures, silence over the water, and pristine cleanliness in the heart of chaotic Varanasi is an extraordinary achievement.',
    verified: true,
  },
];

export const BOAT_TRANSFER_INFO = {
  title: 'Royal Ganges River Transfer Protocol',
  subtitle: 'Arriving at Varanasi’s Only Vehicular-Free Heritage Bastion',
  overview:
    'Because Darbhanga Ghat sits along the historic pedestrian ghat corridor of Varanasi, road vehicles cannot reach the palace entrance. All arrivals and departures are gracefully conducted across the sacred river Ganges by our private royal fleet of wooden bajra boats.',
  steps: [
    {
      step: '01',
      title: 'Valet Car Drop-Off',
      desc: 'Our palace chauffeur meets you at Rajghat or Bhainsasur Ghat car port. Your luggage is safely tagged and portered by palace valets.',
    },
    {
      step: '02',
      title: 'Royal Boat Embarkation',
      desc: 'Step aboard our private wooden bajra boat. Enjoy chilled jasmine water, organic sandalwood face mist, and panoramic vistas of Varanasi’s historic skyline.',
    },
    {
      step: '03',
      title: 'Direct Ghat Entrance',
      desc: 'Glide gently up to the private stone landing at Darbhanga Ghat, where palace attendants welcome you with a traditional aarti, vermilion tilak, and shehnai notes.',
    },
    {
      step: '04',
      title: 'Historical Lift Ascent',
      desc: 'Ascend to your suite via BrijRama’s historic heritage elevator—the first internal lift ever installed in Varanasi (1918) alongside the stone bastions.',
    },
  ],
  importantNotes: [
    'Boat transfers operate continuously from 6:00 AM to 10:00 PM for all arriving and departing guests.',
    'Late night arrivals (after 10:00 PM) are pre-arranged with dedicated private night escorts.',
    'High monsoon season: Alternative guided private ghat passages are manned by palace porters.',
    'Luggage weight or count is fully accommodated by our dedicated cargo boats at no charge.',
  ],
};
