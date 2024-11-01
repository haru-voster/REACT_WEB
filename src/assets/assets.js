import laptops from './2-jpg.webp'
import logo from './elitebook.jpg'
import header_img from './header.png'
import search_icon from "./search-icon.png"
import basket_icon from './basket-icon.png'
import menu_1 from './menu_1.webp'
import menu_2 from './lap4.jpeg'
import menu_3 from './Dell-Latitude-5320.png'
import menu_4 from './lap3.jpeg'
import menu_5 from './lenovo2.webp'
import menu_6 from './huawei.jpg'


import sale_1 from './lap2.jpeg'
import sale_2 from './pentium.jpg'
import sale_3   from './lenovo2.webp'
import sale_4 from './HDD PRODESK.webp'
import sale_5 from './new.jpeg'
import sale_6 from './storage2.jpeg'

import flash2 from './flash2.jpeg'
import twitter_icon from './about.jpg'
import new_lap from './new.webp'
import hdd from './hddexternal.jpeg'
import flash  from './ssd2.jpg'
import macbook from './apple_macbook.jpg'
import acer from './apple_macbook.jpg'
import mac from './apple_macbook.jpg'
import elitebook from './elitebook.jpg'
import delllatitude from './Dell_Latitude_7320.png'
import printer from './epison printer.jpeg'
import printer2 from './epison printer.jpeg'
import lenovo1 from './lenovo.jpg'
import starts from './rating_starts.jpg'



export const assets = {
    logo,
    laptops,
    header_img,
    search_icon,
    basket_icon,
    menu_2,
    menu_1,
    menu_3,
    menu_4,
    menu_5,
    menu_6,
    sale_1,
    sale_2,
    sale_3,
    sale_4,
    sale_5,
    sale_6,
    flash2,
    flash,
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
        name: "MacBook",
        image: menu_1,
        price: 170000,
        description:"14-core CPU with 10 performance cores and 4 efficiency cores · 32-core GPU",
        category: "macbook acer"
        
    },
    {
        _id: '2',
        name: "",
        image:menu_1,
        price: '23,000',
        description:"dell latitude 7480",
        category: "Dell Latitude"
    },
    {
        _id: '3',
        name: "Dell Latitude",
        image:sale_1,
        price: '37,000',
        description:"Dell Latitude 5320 13,3 Zoll 1920x1080 Full HD Intel Core i5 512GB SSD 16GB Windows 11 Pro Webcam",
        category: "Dell Latitude"
        
    },
    {
        _id: '4',
        name: "HP probook",
        image:menu_4,
        price: '26,000',
        description:"Hp Pro",
        category: "HP pro G830"
    },
    {
        _id: '5',
        name: "Hp Elitebook",
        image: sale_6,
        price: '45,000',
        description:"Hp elite book  with 2HD cameras",
        category: "HP Elitebook 840G"
    },
    {
        _id: '6',
        name: "Huawei Matebook",
        image: sale_5,
        price: '90,000',
        description:"HUAWEI MateBook D 16 2024 K16 Zoll HUAWEI FullView  Intel® Core™ i9 Prozessor der 13. Generation",
        category: "Huawei"
    }
         
        
]