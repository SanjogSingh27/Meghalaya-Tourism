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
    },
    {
        name: 'Shillong',
        description: 'The vibrant capital, often called the "Scotland of the East".',
        images: [
            'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/06/05101457/Places-to-visit-in-Shillong-FI-1.jpg?tr=w-1200,q-60',
            'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?q=80&w=1974&auto=format&fit=crop',
            'https://static.toiimg.com/photo/51324390.cms',
        ],
    },
    {
        name: 'Mawlynnong Village',
        description: 'Famed as one of the cleanest villages in Asia, it is celebrated for its pristine environment and community efforts in maintaining cleanliness.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mawlynnong_-_Cleanest_village_of_Asia.jpg',
            'https://nomadicweekends.com/blog/wp-content/uploads/2019/10/m-3.jpg',
            'https://static.wixstatic.com/media/9b64ce_92580011d1614de08e9bb12cb8f1543c~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9b64ce_92580011d1614de08e9bb12cb8f1543c~mv2.jpg',
        ],
    },
    {
        name: 'Dawki',
        description: 'Home of the crystal-clear Umngot River, a truly unique and clean river bordered by lush green hills.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/a/ab/Umngot_river%2C_Dawki.jpg',
            'https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o.jpg',
            'https://assamholidays.com/wp-content/uploads/2023/06/Umgnot-River-Dawki-1.jpg',
        ],
    },
    {
        name: 'Nohkalikai Falls',
        description: 'Magnificent waterfalls, often considered the tallest plunge waterfall in India, is a sight to behold.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/7/78/NohKaLikai_Falls_V2_Wiki.jpg',
            'https://www.meghalayatourism.in/wp-content/uploads/2020/07/Noh-Sngithiang-Falls-1.jpg',
            'https://www.savaari.com/blog/wp-content/uploads/2022/12/nohkalikai.jpg',
        ],
    },
    {
        name: 'Laitlum Canyons',
        description: 'Dramatic Canyons offering stunning panoramic views of rolling green hills & a deep gorge. The breathtaking vistas, often shrouded in mist, making it a popular spot for photography.',
        images: [
            'https://media1.thrillophilia.com/filestore/pcodcdp0o3e6sdbpsj8nbaun4uup_51636138283_50540c5c58_k.jpg',
            'https://travenjo.com/wp-content/uploads/2019/06/Laitlum-Canyons-Scenic-View.jpg?x58748',
            'https://wanderon-images.gumlet.io/blogs/new/2024/02/1-min.png',
        ],
    },
    {
        name: 'Umiam Lake',
        description: 'Large man-made reservoir nestled amidst lush green hills. Visitors can enjoy boating on its serene waters, or simply relax by the lake.',
        images: [
            'https://www.meghalayatourcabs.com/wp-content/uploads/2024/08/0_IlS1XVEjfpQ2K_JG-1.jpg',
            'https://oddessemania.in/wp-content/uploads/2024/02/dl.beatsnoop.com-1706790982.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Umiam_Lake_-_by_Vikramjit_Kakati.png/330px-Umiam_Lake_-_by_Vikramjit_Kakati.png',
        ],
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

