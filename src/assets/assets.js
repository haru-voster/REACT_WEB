import laptops from './2-jpg.webp'
import logo from './elitebook.jpg'
import header_img from './header.png'
import search_icon from "./search-icon.jpg"
import basket_icon from './basket-icon.png'
import whatsapp_icon from './whatsapp_icon.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.jpg'
import email_icon from './email_icon.jpg'
import app_store from './app_store.png'
import play_store from './play_store.png'
import cross_icon from './cross_icon.jpg'

import menu_1 from './Apple.jpg'
import menu_2 from './lap4.jpeg'
import menu_3 from './Dell-Latitude-5320.png'
import menu_4 from './lap3.jpeg'
import menu_5 from './lap2.jpg'
import menu_6 from './huawei.jpg'


import sale_1 from './Apple.jpg'
import sale_2 from './apple mackbook.jpg'
import sale_3   from './hp 840G5.jpg'
import sale_4 from './hpprobook.webp'
import sale_5 from './lenovo T460s.webp'
import sale_6 from './LENOVO1.jpg'
import sale_7 from './dell.webp'
import sale_8 from './dell-7440.webp'
import sale_9 from './notebook.jpg'
import sale_10 from "./hp14.jpg"
import sale_11 from './hp spectre.webp'
import sale_12 from "./hp14.jpg"

//accessories
import flash2 from './flash2.jpeg'
import flash3 from './flash3.jpeg'

import twitter_icon from './about.jpg'
import new_lap from './new.jpg'
import hdd from './hddexternal.jpeg'
import flash  from './flash3.jpeg'
import macbook from './apple_macbook.jpg'
import acer from './apple_macbook.jpg'
import mac from './apple_macbook.jpg'
import elitebook from './elitebook.jpg'
import delllatitude from './dell.webp'
import printer from './epison printer.jpeg'
import printer2 from './epison printer.jpeg'
import lenovo1 from './lenovo.jpg'
import starts from './rating_starts.png'
import add_icon from './add_item.png'
import remove_icon from './remove_icon.png'
import add_icon2 from './add_icon2.png'



export const assets = {
    logo,
    laptops,
    header_img,
    search_icon,
    basket_icon,
    whatsapp_icon,
    facebook_icon,
    linkedin_icon,
    email_icon,
    app_store,
    play_store,
    cross_icon,
    menu_2,
    menu_1,
    menu_3,
    menu_4,
    menu_5,
    menu_6,
    //laptops
    sale_1,
    sale_2,
    sale_3,
    sale_4,
    sale_5,
    sale_6,
    sale_7,
    sale_8,
    sale_9,
    sale_10,
    sale_11,
    sale_12,
    //accessories
    flash2,
    flash,
    flash3,
    //others
    twitter_icon,
    new_lap,
    hdd,
    mac,
    macbook,
    acer,
    elitebook,
    delllatitude,
    printer,
    printer2,
    lenovo1,
    starts,
    add_icon,
    add_icon2,
    remove_icon,

}

export const menu_list = [
    {
        menu_name: "Mac book acer",
        menu_image: menu_1
    },
    {
        menu_name: "Dell Latitude Optiplex",
        menu_image: menu_2
    },
    {
        menu_name: "Dell Latitude 5320",
        menu_image: menu_3
    },
    {
        menu_name: "Hp probook",
        menu_image: menu_4
    },
    {
        menu_name: "hp elitebook",
        menu_image: menu_5
    },
    {
        menu_name: "Huawei Matebook",
        menu_image: menu_6
    }

]
export const sale_list =[
    {
        _id: '1',
        name: "MacBook Pro",
        image: sale_1,
        price: 130000,
        description:"Apple MacBook Air MGN63LL/A with M1 Chip 8GB 256SSD 13.3 Inch Display(Grey) Mac OS",
        category: "Apple"
        
    },
    {
        _id: '2',
        name: "Apple",
        image:sale_2,
        price: 90000,
        description:"2019 Apple MacBook Pro with 1.4GHz Intel Core i5 (13 inch, 8GB RAM, 256GB SSD) – Space Gray",
        category: "Apple"
    },
    {
        _id: '3',
        name: "HP Elite ",
        image:sale_3,
        price: 45000,
        description:"HP ELITEBOOK 830 G7 13.3″ 60Hz 16GB RAM, 512GB PCIe SSD, Webcam, Win11P), touchscreen",
        category: "Hp"
        
    },
    {
        _id: '4',
        name: "HP-Probook",
        image:sale_4,
        price: 25000,
        description:"Probook Revolve 830 G5 8thGen 8GB, 256GB SSD 11.6 Inches, Touchscreen ",
        category: "HP"
    },
    {
        _id: '5',
        name: "Lenovo T460S",
        image: sale_5,
        price: 25000,
        description:"Lenovo T460s 6th Gen Intel Core i5-6300UÂ 8GB RAM 256GB SSD 14″ Touchscreen",
        category: "Lenovo"
    },
    {
        _id: '6', 
        name: "Lenovo Thinkpad",
        image: sale_6,
        price: 28000,
        description:"Lenovo Thinkpad T470s – intel Core i7- 7th Gen 4GB-500GB Lenovo Thinkpad T470s, win11pro, ",
        category: "lenovo"
    },
    {
        _id: '7', 
        name: "Dell Latitude 7420",
        image: sale_7,
        price: 44000,
        description:"DELL 7420 Core i5 16GB RAM 512GB SSD 12th GEN, Backlight Keyboard Non-Touch, win11pro",
        category: "Dell"
    },
    {
        _id: '8', 
        name: "Dell-7440",
        image: sale_8,
        price: 19500,
        description:"Dell Latitude 7440 Intel Core i7 8GB RAM 256 GB SSD, Backlight keyboard win11Pro, Non-touch",
        category: "Dell"
    },
    {
        _id: '9', 
        name: " Hp Notebook-245 G8",
        image: sale_9,
        price: 28000,
        description:"HUAWEI MateBook D 16 2024 K16 Zoll HUAWEI FullView  Intel® Core™ i9 Prozessor der 13. Generation",
        category: "HP"
    },
    {
        _id: '10', 
        name: "Hp Elitebook",
        image: sale_10,
        price: 18500,
        description:"Newest HP 14inch HD Laptop, Win. 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 4GB RAM, 128GB SSD, Webcam",
        category: "Hp"
    },
    {
        _id: '11', 
        name: "Hp Spectre",
        image: sale_11,
        price: 60000,
        description:"HP Spectre x360 2-in-1 Laptop  Intel Core i7 13th Gen 16GB RAM 1TBB SSD 13.5 Inch, win11 Touchscreen",
        category: "Hp"
    },
    {
        _id: '12', 
        name: "Hp Elitebook",
        image: sale_12,
        price: 48500,
        description:"HP EliteBook X360 1030 G3 Intel Core i7 8th Gen 16GB RAM 512GB SSD 13.3inch FHD Touchscreen Display+Backlight, win11pro",
        category: "Hp"
    }
   
]
//accessories added
export const accessories_list=[
    {
        _id: '13',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '14',
        name: "Monitor",
        image: flash,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '15',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '16',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '17',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '18',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '19',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '20',
        name: "Monitor",
        image: flash,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '21',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '22',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '23',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '24',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '25',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '26',
        name: "Monitor",
        image: flash,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '27',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '28',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '29',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '30',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '31',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '32',
        name: "Monitor",
        image: flash,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '33',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '34',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '35',
        name: "Monitor",
        image: flash2,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },
    {
        _id: '36',
        name: "Monitor",
        image: flash3,
        price: 130000,
        description:"monitor",
        category: "Monitor"
    },

]