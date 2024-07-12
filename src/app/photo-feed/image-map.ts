import { StaticImageData } from 'next/image'
import image1 from '../../_assets/images/9s9_ATCO.jpg'
import image2 from '../../_assets/images/Alabama-LittleRiverCanyon-GettyImages.webp'
import image3 from '../../_assets/images/Maranhenses-National-Park-marcreation.webp'
import image4 from '../../_assets/images/Marble-caves.jpg'
import image5 from '../../_assets/images/Nevada-LakeTahoe-GettyImages.webp'
import image6 from '../../_assets/images/iguazu-falls-argentina-brazil.jpg'
import image7 from '../../_assets/images/istockphoto.webp'

export type WonderImage = {
    id: string
    name: string
    src: StaticImageData
    photographer: string
    description: string // a short description of the wonder
    location: string
}


const wonderImages: WonderImage[] = [
    {
        id: '1',
        name: 'Atacama Desert',
        src: image1,
        photographer: '9s9_ATCO',
        description: 'The Atacama Desert is a plateau in South America, covering a 1,000-kilometre (600 mi) strip of land on the Pacific coast, west of the Andes mountains.',
        location: 'Chile'
    },
    {
        id: '2',
        name: 'Little River Canyon',
        src: image2,
        photographer: 'Alabama',
        description: 'Little River Canyon National Preserve is a United States national preserve located on top of Lookout Mountain near Fort Payne, Alabama, and DeSoto State Park.',
        location: 'Alabama, USA'
    },
    {
        id: '3',
        name: 'Lençóis Maranhenses National Park',
        src: image3,
        photographer: 'marcreation',
        description: 'Lençóis Maranhenses National Park is a national park located in Maranhão state, in northeastern Brazil.',
        location: 'Brazil'
    },
    {
        id: '4',
        name: 'Marble Caves',
        src: image4,
        photographer: 'Unknown',
        description: 'The Marble Caves are a series of unusual caverns, columns, and tunnels formed in monoliths of marble and limestone by wave action over the last 6,200 years.',
        location: 'Chile'
    },
    {
        id: '5',
        name: 'Lake Tahoe',
        src: image5,
        photographer: 'GettyImages',
        description: 'Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains, straddling the border of California and Nevada.',
        location: 'Nevada, USA'
    },
    {
        id: '6',
        name: 'Iguazu Falls',
        src: image6,
        photographer: 'Unknown',
        description: 'Iguazú Falls, Iguassu Falls, or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná.',
        location: 'Argentina, Brazil'
    },
    {
        id: '7',
        name: 'Antelope Canyon',
        src: image7,
        photographer: 'iStockPhoto',
        description: 'Antelope Canyon is a slot canyon in the American Southwest. It is on Navajo land east of Page, Arizona.',
        location: 'Arizona, USA'
    }
]

export default wonderImages