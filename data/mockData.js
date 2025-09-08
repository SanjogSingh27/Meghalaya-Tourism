// This file contains all the mock data for the application.
// In a real-world scenario, this data would come from a database or API.

// Data for the "Explore" page gallery, now with an array of images for a slideshow
export const destinations = [
    {
        name: 'Cherrapunji',
        description: 'Known for its living root bridges, stunning waterfalls and lush green abundance.',
        images: [
            'https://gurukshethraholidays.com/cdn/shop/files/cherapunji4_f06719df-56ad-4f4b-85ee-b5059415d261.jpg?v=1723132002',
            'https://mlpqh7z1y0z3.i.optimole.com/cb:asB8.8ca/w:640/h:427/q:mauto/f:best/https://shillongtraveltaxi.in/wp-content/uploads/2024/09/wei-sawdong-falls.jpg',
            'https://www.kajaawa.com/wp-content/uploads/2022/05/Seven-sister-falls-1-kaga.jpg',
        ],
        coords: [25.3006, 91.7323], // [latitude, longitude]
    },
    {
        name: 'Shillong',
        description: 'The vibrant capital, often called the "Scotland of the East".',
        images: [
            'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/06/05101457/Places-to-visit-in-Shillong-FI-1.jpg?tr=w-1200,q-60',
            'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?q=80&w=1974&auto=format&fit=crop',
            'https://static.toiimg.com/photo/51324390.cms',
        ],
        coords: [25.5788, 91.8933],
    },
    {
        name: 'Mawlynnong Village',
        description: 'Famed as one of the cleanest villages in Asia, it is celebrated for its pristine environment and community efforts in maintaining cleanliness.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mawlynnong_-_Cleanest_village_of_Asia.jpg',
            'https://nomadicweekends.com/blog/wp-content/uploads/2019/10/m-3.jpg',
            'https://static.wixstatic.com/media/9b64ce_92580011d1614de08e9bb12cb8f1543c~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9b64ce_92580011d1614de08e9bb12cb8f1543c~mv2.jpg',
        ],
        coords: [25.2075, 91.9136],
    },
    {
        name: 'Dawki',
        description: 'Home of the crystal-clear Umngot River, a truly unique and clean river bordered by lush green hills.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/a/ab/Umngot_river%2C_Dawki.jpg',
            'https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o.jpg',
            'https://assamholidays.com/wp-content/uploads/2023/06/Umgnot-River-Dawki-1.jpg',
        ],
        coords: [25.1856, 92.0152],
    },
    {
        name: 'Nohkalikai Falls',
        description: 'Magnificent waterfalls, often considered the tallest plunge waterfall in India, is a sight to behold.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/7/78/NohKaLikai_Falls_V2_Wiki.jpg',
            'https://www.meghalayatourism.in/wp-content/uploads/2020/07/Noh-Sngithiang-Falls-1.jpg',
            'https://www.savaari.com/blog/wp-content/uploads/2022/12/nohkalikai.jpg',
        ],
        coords: [25.2811, 91.6883],
    },
    {
        name: 'Laitlum Canyons',
        description: 'Dramatic Canyons offering stunning panoramic views of rolling green hills & a deep gorge. The breathtaking vistas, often shrouded in mist, making it a popular spot for photography.',
        images: [
            'https://media1.thrillophilia.com/filestore/pcodcdp0o3e6sdbpsj8nbaun4uup_51636138283_50540c5c58_k.jpg',
            'https://travenjo.com/wp-content/uploads/2019/06/Laitlum-Canyons-Scenic-View.jpg?x58748',
            'https://wanderon-images.gumlet.io/blogs/new/2024/02/1-min.png',
        ],
        coords: [25.5255, 91.9213],
    },
    {
        name: 'Umiam Lake',
        description: 'Large man-made reservoir nestled amidst lush green hills. Visitors can enjoy boating on its serene waters, or simply relax by the lake.',
        images: [
            'https://www.meghalayatourcabs.com/wp-content/uploads/2024/08/0_IlS1XVEjfpQ2K_JG-1.jpg',
            'https://oddessemania.in/wp-content/uploads/2024/02/dl.beatsnoop.com-1706790982.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Umiam_Lake_-_by_Vikramjit_Kakati.png/330px-Umiam_Lake_-_by_Vikramjit_Kakati.png',
        ],
        coords: [25.6664, 91.8953],
    },
    {
        name: 'Mawsmai Cave',
        description: 'A breathtaking limestone cave system offering an adventurous spelunking experience.',
        images: [
            'https://res.cloudinary.com/kmadmin/image/upload/v1725704723/kiomoi/mawsmai_cave_meghalaya_7385.jpg',
            'https://hblimg.mmtcdn.com/content/hubble/img/cherrapunji/mmt/activities/m_activities_cherrapunji_mawsmai_cave_l_400_640.jpg',
            'https://oddessemania.in/wp-content/uploads/2024/07/Mawsmai-Cave-1-1024x683.jpg'
        ],
        coords: [25.2475, 91.7061],
    },
    {
        name: 'Krang Suri Falls',
        description: 'A spectacular waterfall with a crystal clear, deep blue plunge pool.',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSN1h5I0sj6-xcrQ1FRKsBSs8msIHpObmnRg&s',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/62/4e/amazing-place.jpg?w=1200&h=1200&s=1',
            'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/cdbe1aad4fec31e07fee44a5d3fef1d9_1000x1000.jpg'
        ],
        coords: [25.4336, 92.1749],
    },
    {
        name: 'Double Decker Root Bridge',
        description: 'A world-famous, two-tiered living root bridge handmade by the Khasi tribes.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/4/46/Double_Decker_Living_Tree_Root_Bridges%2C_Meghalaya.jpg',
            'https://i0.wp.com/bijitdutta.com/wp-content/uploads/2017/07/Trekking_Root_Bridge-15.jpg?ssl=1',
            'https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-2-attr-hero?qlt=82&ts=1742167901740'
        ],
        coords: [25.2801, 91.6888],
    },
    {
        name: 'Balpakram National Park',
        description: 'A vast park known for its pristine wilderness, canyons, and rich biodiversity.',
        images: [
            'https://travellingslacker.com/wp-content/uploads/2023/01/Balpakram-19.jpeg',
            'https://www.team-bhp.com/forum/attachments/travelogues/2368484d1687010435t-offroad-drive-land-eternal-winds-balpakram-national-park-meghalaya-dsc_0460.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MV7lTPXwUmZbaKLC_VOq5WSCrD5H0eDMqQ&s'
        ],
        coords: [25.2014, 90.8503],
    },
    {
        name: 'Nartiang Monoliths',
        description: 'The largest collection of monoliths in one single area, a site of great cultural importance.',
        images: [
            'https://static.toiimg.com/thumb/94179219/nartiang-monoliths.jpg?width=1200&height=900',
            'https://www.meghalayatourism.in/wp-content/uploads/2020/07/Nartiang.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12GrHT6Ojcl5zX2KWwuB1C3BYPYdUL6kEgg&s'
        ],
        coords: [25.5645, 92.2131],
    },
    {
        name: 'Don Bosco Museum',
        description: 'A major institution showcasing the rich culture of the indigenous people of North East India.',
        images: [
            'https://s7ap1.scene7.com/is/image/incredibleindia/don-bosco-museum-shillong-meghalaya-2-attr-hero?qlt=82&ts=1742155422455',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXjTd4OnxQiX3NG3bRC-ewqcfOfuxzZoqGw&s',
            'https://s7ap1.scene7.com/is/image/incredibleindia/don-bosco-museum-shillong-meghalaya-attr-about?qlt=82&ts=1742159771450'
        ],
        coords: [25.5901, 91.9056],
    },
    {
        name: 'Elephant Falls',
        description: 'A three-tiered cascading waterfall, one of Shillong\'s most popular tourist sites.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Elephant_Falls_Meghalaya.jpg/1200px-Elephant_Falls_Meghalaya.jpg',
            'https://s7ap1.scene7.com/is/image/incredibleindia/elephant-falls-shillong-meghalaya-1-attr-hero?qlt=82&ts=1751460572862',
            'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/18/65f77cd305e62109a2392d19bc2ccac6_1000x1000.jpg'
        ],
        coords: [25.5369, 91.8213],
    },
    {
        name: 'Mawphlang Sacred Forest',
        description: 'An ancient, sacred grove protected by traditional beliefs, with a unique ecosystem.',
        images: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0b/94/c9/sacred-forest.jpg?w=1200&h=-1&s=1',
            'https://s7ap1.scene7.com/is/image/incredibleindia/mawphlang-sacred-grove-cherrapunjee-meghalaya-1-attr-hero?qlt=82&ts=1742178453364',
            'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/30-stades/media/media_files/YMvGbaJlY53ejjDf4KB1.jpg'
        ],
        coords: [25.4984, 91.7533],
    },
];

// Data for the "Book Hotel" page
export const hotels = {
    cherrapunji: [
        { name: 'Polo Orchid Resort', price: 12000 },
        { name: 'Jiva Resort', price: 9500 },
        { name: 'Sohra Plaza Homestay', price: 3500 },
    ],
    shillong: [
        { name: 'Hotel Polo Towers', price: 8000 },
        { name: 'Roinam Retreat', price: 6500 },
        { name: 'The Heritage Club - Tripura Castle', price: 11000 },
    ],
    'mawlynnong village': [
        { name: 'Hala Rympei Homestay', price: 2500 },
        { name: 'Saj I Tat Homestay', price: 3000 },
    ],
    dawki: [
        { name: 'Lamin Guest House', price: 2800 },
        { name: 'Betelnut Resort', price: 4500 },
    ],
    'nohkalikai falls': [
        { name: 'Saimika Resort', price: 1100 },
        { name: 'Lumkynjai Cottages', price: 2100 },
    ],
    'laitlum canyons': [
        { name: 'Sila Homestay', price: 3700 },
        { name: 'Silver Brook Resort', price: 2800 },
    ],
    'umiam lake': [
        { name: 'La Nicholas Lake View', price: 2630 },
        { name: 'Ri Kynjai Serenity', price: 2200 },
    ],
};

// Data for the "Rent Vehicle" page
export const vehicles = [
    {
        name: 'Maruti Suzuki Swift',
        type: 'Car',
        price: 3000,
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/Maruti-Suzuki-New-Swift-Left-Front-Three-Quarter-88877_1.jpeg?size=690:388',
    },
    {
        name: 'Tata Sumo Gold',
        type: 'Car',
        price: 3500,
        image: 'https://imgd-ct.aeplcdn.com/664x415/cw/ec/10752/Tata-Sumo-Gold-Exterior-151198.jpg?wm=0&q=80',
    },
    {
        name: 'Mahindra Thar',
        type: 'Jeep',
        price: 4500,
        image: 'https://images.91wheels.com/assets/b_images/main/models/profile/profile1723456356.jpg?w=420&q=80',
    },
    {
        name: 'Toyota Innova Crysta',
        type: 'SUV',
        price: 3800,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80',
    },
    {
        name: 'Force Traveller 4020 Super',
        type: 'Tempo Bus',
        price: 5000,
        image: 'https://www.cmv360.com/_next/image?url=https%3A%2F%2Fd1odgbsvvxl2qd.cloudfront.net%2Fsmall_force_traveller_4020_super_ee65f011fe.jpg&w=3840&q=100',
    },
    {
        name: 'Royal Enfield Classic 350',
        type: 'Bike',
        price: 1800,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/183389/classic-350-right-front-three-quarter-2.jpeg?isig=0&q=80',
    },
    {
        name: 'TVS Ntorq 125',
        type: 'Scooter',
        price: 800,
        image: 'https://etimg.etb2bimg.com/photo/84752490.cms',
    },
    {
        name: 'Bajaj Pulsar NS200',
        type: 'Bike',
        price: 1300,
        image: 'https://cdn.bikedekho.com/processedimages/bajaj/bajaj-pulsar-200-ns/source/bajaj-pulsar-200-ns68552a2c91fc3.jpg?imwidth=412&impolicy=resize',
    },
];

export const travelPackages = [
    {
        name: "Meghalaya Adventure Trail",
        duration: "5 Days / 4 Nights",
        price: 25000,
        image: "https://thegypsychiring.com/wp-content/uploads/2021/04/Mawryngkhang-Trek-Bamboo-Trail-Meghalaya-The-Gypsy-Chiring.jpg",
        description: "For the thrill-seekers, this package covers trekking to the Double Decker Root Bridge, caving in Mawsmai, and cliff jumping in Dawki.",
        highlights: ["Double Decker Bridge Trek", "Mawsmai Cave Exploration", "Dawki Cliff Jumping", "Shnongpdeng River Sports"],
        benefits: ["Expert Local Guide", "All Activity Permits", "Standard Accommodations", "Private 4x4 Vehicle"]
    },
    {
        name: "Romantic Waterfalls Getaway",
        duration: "4 Days / 3 Nights",
        price: 30000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcg9ifHa0x4_kqbxH8sv-cjgT-nmBjthrsg&s",
        description: "A luxurious and romantic tour focused on Meghalaya's most majestic waterfalls, including Nohkalikai, Seven Sisters, and Elephant Falls.",
        highlights: ["Nohkalikai Falls View", "Seven Sisters Falls", "Elephant Falls, Shillong", "Umiam Lake Sunset"],
        benefits: ["Boutique Resort Stays", "Couples' Spa Session", "Private Sedan Car", "Daily Breakfast & Dinner"]
    },
    {
        name: "Cultural Heritage Tour",
        duration: "6 Days / 5 Nights",
        price: 28000,
        image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/11/Meghalaya-set-up-museum-for-Garo-tribe-to-attract-tourists.jpg?fit=1024%2C690&ssl=1",
        description: "Immerse yourself in the rich Khasi culture. Visit Asia's cleanest village, interact with locals, and explore ancient monoliths.",
        highlights: ["Mawlynnong Village Walk", "Nartiang Monoliths", "Don Bosco Museum", "Local Khasi Cuisine Experience"],
        benefits: ["Homestay Experiences", "Cultural Guide", "All Museum Entry Fees", "Comfortable SUV"]
    },
    {
        name: "Family Fun Expedition",
        duration: "5 Days / 4 Nights",
        price: 35000,
        image: "https://internationalyouthclub.org/wp-content/uploads/2025/02/Meghalaya-Tour-Package-%E2%80%93-Magical-Meghalaya2-1.jpeg",
        description: "A package designed for all ages, featuring easy-to-access viewpoints, boat rides, eco-parks, and comfortable family-friendly stays.",
        highlights: ["Umiam Lake Boating", "Ward's Lake, Shillong", "Mawkdok Dympep Valley View", "Dawki River Boating"],
        benefits: ["Family-friendly Hotels", "Spacious Innova/Ertiga", "Picnic Lunches", "Flexible Itinerary"]
    },
    {
        name: "Backpacker's Budget Trip",
        duration: "7 Days / 6 Nights",
        price: 15000,
        image: "https://www.emaglobal.com.sg/wp-content/uploads/2022/04/backpacking-discover-the-best-way-to-travel-on-a-budget.jpg",
        description: "An affordable journey for solo travelers and groups. Utilizes shared transport and backpacker hostels to cover major sights on a budget.",
        highlights: ["Shared Sumo to Cherrapunji", "Hostel Stays in Shillong", "Community Kitchen Meals", "Public Transport Exploration"],
        benefits: ["Budget Hostel Stays", "Guidance on Shared Transport", "Group Trekking Options", "Cost-effective Itinerary"]
    },
    {
        name: "The Ultimate Meghalaya",
        duration: "10 Days / 9 Nights",
        price: 60000,
        image: "https://www.nomadictribes.in/wp-content/uploads/Meghalaya-Blog.jpg",
        description: "A comprehensive, all-inclusive luxury tour covering every major destination from the Garo Hills to the Jaintia Hills in comfort and style.",
        highlights: ["All Major Waterfalls & Caves", "Tura Peak Expedition", "Living Root Bridges", "Exclusive Riverside Camping"],
        benefits: ["Luxury Accommodations", "All-inclusive Meals", "Dedicated SUV & Driver", "All Permits and Fees Covered"]
    }
];

export const historicalBookings = [
  { destination: 'shillong', totalCost: 16000, guests: 2, bookedAt: new Date('2024-10-15T09:00:00') },
  { destination: 'cherrapunji', totalCost: 24000, guests: 2, bookedAt: new Date('2024-10-20T11:30:00') },
  { destination: 'dawki', totalCost: 9000, guests: 2, bookedAt: new Date('2024-11-05T14:00:00') },
  { destination: 'shillong', totalCost: 24000, guests: 3, bookedAt: new Date('2024-11-18T18:45:00') },
  { destination: 'mawlynnong village', totalCost: 5000, guests: 2, bookedAt: new Date('2024-12-01T08:20:00') },
  { destination: 'cherrapunji', totalCost: 38000, guests: 4, bookedAt: new Date('2024-12-22T12:00:00') },
  { destination: 'tura', totalCost: 15000, guests: 2, bookedAt: new Date('2025-01-08T16:10:00') },
  { destination: 'jowai', totalCost: 8000, guests: 2, bookedAt: new Date('2025-01-15T10:00:00') },
  { destination: 'shillong', totalCost: 33000, guests: 3, bookedAt: new Date('2025-02-02T13:00:00') },
  { destination: 'cherrapunji', totalCost: 19000, guests: 2, bookedAt: new Date('2025-02-14T11:00:00') },
  { destination: 'dawki', totalCost: 5600, guests: 2, bookedAt: new Date('2025-03-01T09:30:00') },
  { destination: 'nongpoh', totalCost: 12000, guests: 2, bookedAt: new Date('2025-03-10T15:00:00') },
  { destination: 'shillong', totalCost: 16000, guests: 2, bookedAt: new Date('2025-04-05T19:00:00') },
  { destination: 'laitlum canyon', totalCost: 6400, guests: 2, bookedAt: new Date('2025-04-12T07:00:00') },
  { destination: 'cherrapunji', totalCost: 36000, guests: 3, bookedAt: new Date('2025-05-19T14:20:00') },
  { destination: 'shillong', totalCost: 8000, guests: 1, bookedAt: new Date('2025-05-25T18:00:00') },
  { destination: 'dawki', totalCost: 13500, guests: 3, bookedAt: new Date('2025-06-08T11:45:00') },
  { destination: 'mawlynnong village', totalCost: 6000, guests: 2, bookedAt: new Date('2025-06-15T10:15:00') },
  { destination: 'cherrapunji', totalCost: 28500, guests: 3, bookedAt: new Date('2025-07-02T12:30:00') },
  { destination: 'tura', totalCost: 5600, guests: 2, bookedAt: new Date('2025-07-11T17:00:00') },
  { destination: 'jowai', totalCost: 11000, guests: 2, bookedAt: new Date('2025-07-20T09:00:00') },
  { destination: 'shillong', totalCost: 22000, guests: 2, bookedAt: new Date('2025-08-03T14:50:00') },
  { destination: 'cherrapunji', totalCost: 12000, guests: 1, bookedAt: new Date('2025-08-18T16:00:00') },
  { destination: 'laitlum canyon', totalCost: 9600, guests: 2, bookedAt: new Date('2025-09-01T10:00:00') },
  { destination: 'nongpoh', totalCost: 6000, guests: 2, bookedAt: new Date('2025-09-05T13:20:00') },
];

