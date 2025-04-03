import {
  gamingLaptop,
  gamingLaptopThum1,
  gamingLaptopThum2,
  gamingLaptopThum3,
  gamingMonitor,
  gamingMonitorThum1,
  gamingMonitorThum2,
  gamingMonitorThum3,
  usbGamepad,
  usbGamepadThum1,
  usbGamepadThum2,
  usbGamepadThum3,
  wiredKeyboard,
  wiredKeyboardThum1,
  wiredKeyboardThum2,
  wiredKeyboardThum3,
} from "src/Assets/Products/ProductImgs";
import { setAfterDiscountKey, setFormattedPrice } from "src/Functions/helper";
import image1 from '../Assets/product/prodcut10-removebg-preview.png'
import image2 from '../Assets/product/prodcut11-removebg-preview.png'
import image3 from '../Assets/product/prodcut13-removebg-preview.png'
import image4 from '../Assets/product/prodcut15-removebg-preview.png'
import image5 from '../Assets/product/prodcut6-removebg-preview.png'
import image6 from '../Assets/product/prodcut8-removebg-preview.png'
import image7 from '../Assets/product/prodcut9-removebg-preview.png'
import image8 from '../Assets/product/product1-removebg-preview.png'
import image9 from '../Assets/product/product12-removebg-preview.png'
import image10 from '../Assets/product/product2-removebg-preview-removebg-preview.png'
import image11 from '../Assets/product/product2-removebg-preview.png'
import image12 from '../Assets/product/product3-removebg-preview.png'
import image13 from '../Assets/product/product4-removebg-preview.png'
import image14 from '../Assets/product/product6-removebg-preview.png'
import image15 from '../Assets/product/product5-removebg-preview.png'
import image16 from '../Assets/product/dc-ac-power-inverter-1-removebg-preview.png'
import image32 from '../Assets/product/st1_azyp-v8-removebg-preview.png.avif'
import image33 from '../Assets/product/batterycharger.png'
import image34 from '../Assets/product/lithium-pillar-electrode-mfg-iStock-1402359102-removebg-preview.png'
import image35 from '../Assets/product/hedphone.avif'
import image36 from '../Assets/product/movse.avif'
import image37 from '../Assets/product/movse2.avif'
import image38 from '../Assets/product/watch1.avif'
import image39 from '../Assets/product/watch2.avif'
import image40 from '../Assets/product/watch3.avif'



export const productsData = [
  {
    shortName: "Acer Wireless Mouse | White and Green",
    name: "Acer Wireless Mouse | White and Green",
    category: "Mouse",
    contact: 'contact me',
    discount: 0,
    description: `
    1600 DPI Sensor
    Fast Scroll Wireless Mouse
    10 m Working Distance
    Equipped with 2.4 GHz Frequency
    Nano Receiver`,
    addedDate: "2024/2/2",
    img: image36,
    otherImages: [
      image36,
      image37,

    ],
    rate: 5,
    votes:28,
    quantity: 1,
    sold: 105,
    id: 1,
  },
  {
    shortName: "AX_ON",
    name: "AX_ON",
    category: "Battery",
    price: 30000,
    discount:0,
    description: `
    Type: 3.6V Lithium AA battery with axial leads.
    Capacity: 2600mAh.
    Features: Designed for high-energy applications, offering optimized conductivity and impact resistance.
    Applications: Commonly used in industrial settings, including PLCs (Programmable Logic Controllers).
    Dimensions: Diameter of 0.575 inches (14.62 mm) and a length of 1.98 inches (50.28 mm).
    Weight: Approximately 0.037 lbs (17 grams).
    Additional Information: This battery is known for its long shelf life and reliability in extreme temperatures.`,
    addedDate: "2024/2/2",
    img: image1,
    otherImages: [
      image1,

    ],
    rate: 5,
    votes: 88,
    quantity: 1,
    sold: 105,
    id: 1,
  },
  {
    shortName: "IMPEX Kettle",
    name: "IMPEX Kettle",
    category: "",
    price: 1000,
    discount: 0,
    description: `
    Impex believe in making a positive difference in our customers lives with technological innovations. Every product goes through stringent quality checks before it reaches the customers. The philosophy of putting customers first has helped us scale greater heights during the past decades and has won the trust of discerning customers all over the world.
    The Impex STEAMER-1801 Electric kettle eliminates all your worries about boiling water on the gas, allowing you to save time and effort. This electric kettle gives you boiled water within a short span of time. It comes in a sleek stainless steel and aluminium die cast body that is sturdily built. With its plastic handle, you get a firm grip over this kettle, and it won't slip from your hands.`,
    addedDate: "2025/3/18",
    img: image32,
    otherImages: [
      image32,

    ],
    rate: 5,
    votes: 50,
    quantity: 1,
    sold: 105,
    id: 201,
  },

  {
    shortName: "Red Inverter",
    name: "Red Inverter",
    category: "Inverter",
    price: 10000,
    discount: 0,
    description: `
     Red Rhino Inverter Generator 7.5kW: This generator provides a maximum power output 
     of 7.5kW, suitable for various applications from outdoor events to job sites. It 
     features advanced inverter technology for stable power, fuel efficiency for extended 
     run times, and a compact design for easy transport.`,
    addedDate: "2024/2/7",
    img: image2,
    otherImages: [
      image2,

    ],
    rate: 4,
    votes: 75,
    quantity: 1,
    sold: 210,
    id: 2,
  },

  {
    shortName: "Sayok Ax-On",
    name: "Sayok Ax-On",
    category: "Battery",
    price:30000,
    discount: 0,
    description: `
    Type: 3.6V Lithium AA battery with axial leads.
    Capacity: 2600mAh.
    Features: Designed for high-energy applications, offering optimized conductivity and impact resistance.
    Applications: Commonly used in industrial settings, including PLCs (Programmable Logic Controllers).
    Dimensions: Diameter of 0.575 inches (14.62 mm) and a length of 1.98 inches (50.28 mm).
    Weight: Approximately 0.037 lbs (17 grams).
    Additional Information: This battery is known for its long shelf life and reliability in extreme temperatures.`,
    addedDate: "2024/3/15",
    img: image3,
    otherImages: [
      image3,

    ],
    rate: 5,
    quantity: 1,
    votes: 99,
    sold: 463,
    id: 3,
  },

  {
    shortName: "X-Tra Power",
    name: "X-Tra Power",
    category: "Battery",
    price: 30000,
    discount: 0,
    description: `
   High Capacity: With a capacity of 3,700 mAh, the X-tra battery offers approximately 
   twice the charge of standard batteries like Canon’s LP-E6, reducing the need for 
   frequent battery changes during shoots. Integrated Charge Level Indicator: A built-in 
   charge level indicator allows photographers to quickly assess the remaining power 
   without inserting the battery into the camera, minimizing unexpected power losses.`,
    addedDate: "2024/1/1",
    img: image4,
    otherImages: [
      image4,

    ],
    rate: 4.5,
    votes: 99,
    quantity: 1,
    sold: 211,
    id: 4,
  },
  {
    shortName: "Battery charger hybrid CATCHER BC200",
    name: "Battery charger hybrid CATCHER BC200",
    category: "Battery",
    price: 2500,
    discount: 4,
    description: `
    *BATTERY REVERSE POLARITY PROTECTION
    *COMPATIBLE FOR LITHIUM TUBULAR AUTOMOTIVE BATTERY
    *CV,CC CHARGING PROTOCOL
    *93% EFFICIENCY WITH 200W
    *3 MODE CHARGING AMPERE AND VOLTAGE
    *CYCLE BY CYCLE CURRENT LIMIT IMPROVES PROTECTION
    *SHORT CIRCUIT PROTECTION
    *TEMPERATURE CONTROLLED COOLING FAN`,
    addedDate: "2025/3/15",
    img:image33,
    otherImages: [
      image33,

    ],
    rate: 5,
    quantity: 1,
    votes: 70,
    sold: 163,
    id: 203,
  },

  {
    shortName: "Sayok Inverter",
    name: "Sayok Inverter",
    category: "Inverter",
    price: 10000,
    discount: 0,
    description: `
    Sayok Inverter Generator 7.5kW: This generator provides a maximum power output 
    of 7.5kW, suitable for various applications from outdoor events to job sites. It 
    features advanced inverter technology for stable power, fuel efficiency for extended 
    run times, and a compact design for easy transport.`,
    addedDate: "2024/2/7",
    addedDate: "2024/3/7",
    img: image5,
    otherImages: [image5,],
    rate: 5,
    votes: 65,
    quantity: 1,
    sold: 1405,
    id: 5,
  },

  {
    shortName: "Sayok Tubular",
    name: "Sayok Tubular",
    category: "Battery",
    price:30000,
    discount: 0,
    description: `
    Positive Plate Design: Constructed with high-pressure spines to ensure deep cycling capabilities and extended battery life.
    Negative Plate Design: Optimized for effective active material utilization, enhancing overall performance.
    Specially Formulated Paste: Utilizes a unique active material paste to increase capacity and improve charge acceptance.
    Advanced Separator: Incorporates advanced polyethylene (PE) separators to eliminate internal short circuits.
    Durable PPCP Container: Features a robust polypropylene copolymer (PPCP) container that provides excellent mechanical strength and better heat dissipation.`,
    addedDate: "2022/9/15",
    img: image6,
    otherImages: [image6],
    rate: 3.5,
    votes: 159,
    quantity: 1,
    sold: 1533,
    id: 6,
  },
  {
    shortName: "Apple AirPods 4 | True Wireless | Bluetooth | White",
    name: "Apple AirPods 4 | True Wireless | Bluetooth | White",
    category: "AirPods",
    price: 12900,
    discount:5,
    description: `
    Orientation Type: In Ear
    Connectivity: Bluetooth, Version 5.3
    Battery Life: 30 Hours
    Fast Charging: Yes
    Noise Cancellation: No`,
    addedDate: "2025/3/15",
    img: image35,
    otherImages: [image35],
    rate: 3.5,
    votes: 159,
    quantity: 1,
    sold: 1533,
    id: 206,
  },

  {
    shortName: "X-Tra Power",
    name: "X-Tra Power",
    category: "Battery",
    price: 30000,
    discount: 0,
    description: `
   High Capacity: With a capacity of 3,700 mAh, the X-tra battery offers approximately 
   twice the charge of standard batteries like Canon’s LP-E6, reducing the need for 
   frequent battery changes during shoots. Integrated Charge Level Indicator: A built-in 
   charge level indicator allows photographers to quickly assess the remaining power 
   without inserting the battery into the camera, minimizing unexpected power losses.`,
    addedDate: "2024/1/1",
    img: image7,
    otherImages: [
      image7,

    ],
    rate: 4.5,
    votes: 99,
    quantity: 1,
    sold: 211,
    id: 7,
  },
  {
    shortName: "Lithium-ion Batteries",
    name: "Lithium-ion Batteries",
    category: "Battery",
    price: 250,
    discount:0,
    description: `
    When the battery is providing power, the lithium ions move from the anode to the cathode, 
    creating a flow of electricity that provides power. When charging the battery, the ions 
    move back to the anode, getting ready to provide power again. This back-and-forth movement 
    of ions is what makes the lithium-ion battery reusable and powerful. The following animation 
    depicts how a lithium-ion battery works is courtesy of the U.S. Department of Energy.`,
    addedDate: "2025/3/7",
    img:image34,
    otherImages: [image34,],
    rate: 5,
    votes: 75,
    quantity: 1,
    sold: 105,
    id: 205,
  },

  {
    shortName: "SAYOK Zero Drop Solar Charge Controller",
    name: "SAYOK Zero Drop Solar Charge Controller",
    category: "",
    price: 9000,
    discount: 10,
    description: `
    While specific information about a "SAYOK Zero Drop Solar Charge Controller"
     is limited, Sayok Solar Technology Co., Ltd. is a Chinese company specializing 
     in solar components, including mounting systems and related accessories. Their 
     expertise lies in providing solutions for solar installations, although detailed 
     information about their charge controller offerings is not readily available.`,
    addedDate: "2023/12/22",
    img: image8,
    otherImages: [image8,],
    rate: 5,
    votes: 201,
    quantity: 1,
    sold: 1602,
    id: 8,
  },

  {
    shortName: "Delta Forze",
    name: "Delta Forze",
    category: "Battery",
    price: 30000,
    discount: 0,
    description: `
    High Capacity: Designed with 100Ah capacity cells, providing substantial energy storage in a compact 3U, 19-inch rack-mounted chassis.
    Advanced Battery Management System (BMS): Equipped with a built-in BMS that offers automatic protection and cell balancing, ensuring safe and efficient operation.
    Communication Capabilities: Features RS485 communication for seamless integration and monitoring within energy systems.`,
    addedDate: "2024/3/7",
    img: image9,
    otherImages: [image9,],
    rate: 3,
    votes: 35,
    quantity: 1,
    sold: 59,
    id: 9,
  },

  {
    shortName: "Powersaff Inverter",
    name: "Powersaff Inverter",
    category: "Inverter",
    price: 10000,
    discount: 0,
    description: `
    Powersaff Inverter Inverter Generator 7.5kW: This generator provides a maximum power output 
    of 7.5kW, suitable for various applications from outdoor events to job sites. It 
    features advanced inverter technology for stable power, fuel efficiency for extended 
    run times, and a compact design for easy transport.`,
    addedDate: "2024/2/7",
    addedDate: "2024/3/7",
    img: image10,
    otherImages: [
      image10,
    ],
    rate: 4,
    votes: 94,
    quantity: 1,
    sold: 83,
    id: 10,
  },

  {
    shortName: "CPU Model Inverter",
    name: "CPU Model Inverter",
    category: "Inverter",
    price: 15500,
    discount: 10,
    description: `
   CPU Model Inverter Generator 7.5kW: This generator provides a maximum power output 
    of 7.5kW, suitable for various applications from outdoor events to job sites. It 
    features advanced inverter technology for stable power, fuel efficiency for extended 
    run times, and a compact design for easy transport.`,
    addedDate: "2024/3/7",
    img: image14,
    otherImages: [
      image14,
    ],
    rate: 4.5,
    votes: 1049,
    quantity: 1,
    sold: 1792,
    id: 11,
  },

  {
    shortName: "Powersaff Inverter",
    name: "Powersaff Inverter",
    category: "Inverter",
    price: 10000,
    discount: 0,
    description: `
    Powersaff Inverter Inverter Generator 7.5kW: This generator provides a maximum power output 
    of 7.5kW, suitable for various applications from outdoor events to job sites. It 
    features advanced inverter technology for stable power, fuel efficiency for extended 
    run times, and a compact design for easy transport.`,
    addedDate: "2024/2/7",
    addedDate: "2024/3/7",
    img: image11,
    otherImages: [
      image11,
    ],
    rate: 4,
    votes: 94,
    quantity: 1,
    sold: 83,
    id: 12,
  },

  {
    shortName: "Sayok CPU",
    name: "Sayok CPU",
    category: "Inverter",
    price: 10000,
    discount: 0,
    description: `
    Sayok CPU Inverter Inverter Generator 7.5kW: This generator provides a maximum power output 
    of 7.5kW, suitable for various applications from outdoor events to job sites. It 
    features advanced inverter technology for stable power, fuel efficiency for extended 
    run times, and a compact design for easy transport.`,
    addedDate: "2024/3/7",
    img: image15,
    otherImages: [image15],
    rate: 3,
    votes: 22,
    quantity: 1,
    sold: 100,
    id: 13,
  },

  {
    shortName: "Sayok MPPT",
    name: "Sayok MPPT",
    category: "",
    price: 8000,
    discount: 0,
    description: `
    Enhanced Charging Efficiency: MPPT technology optimizes the match between the solar array (PV panels) and the battery bank, ensuring efficient energy conversion and reducing power loss.
    High Current Capacity: For instance, the Sayok MPPT Solar Charge Controller is available in a 50Amp model, suitable for medium to large solar installations. `,
    addedDate: "2024/3/7",
    img: image12,
    otherImages: [
      image12,
    ],
    rate: 4,
    votes: 145,
    quantity: 1,
    sold: 100,
    id: 14,
  },

  {
    shortName: "Solar Charge Controller",
    name: "Solar Charge Controller",
    category: "",
    price: 7000,
    discount: 0,
    description: `
  Battery Protection: Prevents overcharging, deep discharge, and short circuits
  Load Control: Manages power distribution to connected devices
  Temperature Compensation: Adjusts charging based on battery temperature for better performance
  LCD Display & Monitoring: Some models offer real-time tracking of energy input, battery status, and load conditions
  Multiple Voltage Compatibility: Works with 12V, 24V, and sometimes 48V battery systems.`,
    addedDate: "2024/3/7",
    img: image13,
    otherImages: [
      image13
    ],
    rate: 5,
    votes: 64,
    quantity: 1,
    sold: 100,
    id: 15,
  },

  {
    shortName: "Electric Power Inverter",
    name: "Electric Power Inverter",
    category: "Inverter",
    price: 3000,
    discount: 0,
    description: `
    Pure Sine Wave Inverter
    Produces smooth and stable AC power, similar to grid electricity
    Suitable for sensitive electronics, medical devices, and high-efficiency appliances
    Modified Sine Wave Inverter
    More affordable but produces a stepped waveform instead of a smooth sine wave
    Suitable for less-sensitive devices like lights, fans, and simple tools`,
    addedDate: "2024/3/7",
    img: image16,
    otherImages: [
      image16,
    ],
    rate: 4.5,
    votes: 55,
    quantity: 1,
    sold: 100,
    id: 16,
  },
  {
    shortName: "AK-9000 Keyboard",
    name: "AK-900 Wired Keyboard",
    category: "gaming",
    price: 11000,
    discount: 10,
    description: `
    Elevate your gaming experience with the AK-900 Wired Keyboard. Designed for
    precision and durability, this keyboard boasts high responsiveness and tactile
    feedback. Its sleek design and customizable RGB lighting make it a stylish
    addition to any gaming setup. Whether you're gaming competitively or typing
    up reports, the AK-900 ensures peak performance with every keystroke.`,
    addedDate: "2024/2/7",
    img: wiredKeyboard,
    otherImages: [
      wiredKeyboard,
      wiredKeyboardThum1,
      wiredKeyboardThum2,
      wiredKeyboardThum3,
    ],
    rate: 4,
    votes: 75,
    quantity: 1,
    sold: 210,
    id: 17,
  },

  {
    shortName: "boAt Wave Astra 3 Smart Watch | 1.83 Inch | Flat Dial ",
    name: "boAt Wave Astra 3 Smart Watch | 1.83 Inch | Flat Dial ",
    category: "Watch",
    price: 1900,
    discount: 15,
    description: `
    230 mAh
    Bluetooth V5.2
    HD Display
    Bluetooth calling
    Fitness Tracking
    IP67 Dust, Sweat & Splash `,
    addedDate: "2024/2/7",
    img: image38,
    otherImages: [
      image38,
      image39,
      image40,
    ],
    rate: 4.5,
    votes: 75,
    quantity: 1,
    sold: 210,
    id: 207,
  },
  {
    shortName: "GP11 Gamepad",
    name: "GP11 Shooter USB Gamepad",
    category: "gaming",
    price: 5000,
    discount: 0,
    description: `
    Dominate the competition with the GP11 Shooter USB Gamepad. Designed for precision and comfort, this gamepad
    delivers an immersive gaming experience with every press and swipe. Whether you're battling enemies or racing
    against the clock, its ergonomic design and responsive controls give you the competitive edge you need to come
    out on top. Say goodbye to laggy inputs and hello to smooth, seamless gameplay with the GP11 Shooter USB Gamepad.`,
    addedDate: "2024/3/7",
    img: usbGamepad,
    otherImages: [
      usbGamepad,
      usbGamepadThum1,
      usbGamepadThum2,
      usbGamepadThum3,
    ],
    rate: 5,
    votes: 64,
    quantity: 1,
    sold: 100,
    id: 18,
  },
  {
    shortName: "FHD Laptop",
    name: "ASUS FHD Gaming Laptop",
    category: "computers",
    price: 50000,
    discount: 10,
    description: `
    Experience unparalleled gaming performance with the ASUS FHD Gaming Laptop. Powered by cutting-edge hardware and
    featuring a stunning Full HD display, this laptop is built to handle even the most demanding games with ease.
    Its sleek design and lightweight construction make it the perfect companion for gaming on the go. Say goodbye
    to lag and hello to smooth gameplay with the ASUS FHD Gaming Laptop.`,
    addedDate: "2024/3/7",
    img: gamingLaptop,
    otherImages: [
      gamingLaptop,
      gamingLaptopThum1,
      gamingLaptopThum2,
      gamingLaptopThum3,
    ],
    rate: 4.5,
    votes: 1049,
    quantity: 1,
    sold: 1792,
    id: 19,
  },
  {
    shortName: "LCD Monitor",
    name: "IPS LCD Gaming Monitor",
    category: "gaming",
    price: 15000,
    discount:3,
    description: `
    Immerse yourself in the world of gaming with the IPS LCD Gaming Monitor. Featuring
    stunning visuals and ultra-smooth gameplay, this monitor delivers an unparalleled
    gaming experience. With its high refresh rate and low input lag, you'll never miss
    a frame. Whether you're battling foes or exploring vast worlds, the IPS LCD Gaming
    Monitor brings every detail to life with vibrant colors and crisp clarity.`,
    addedDate: "2024/3/15",
    img: gamingMonitor,
    otherImages: [
      gamingMonitor,
      gamingMonitorThum1,
      gamingMonitorThum2,
      gamingMonitorThum3,
    ],
    rate: 5,
    quantity: 1,
    votes: 99,
    sold: 463,
    id: 29,
  },

];

productsData.forEach((product) => {
  setAfterDiscountKey(product);
  setFormattedPrice(product);
});
