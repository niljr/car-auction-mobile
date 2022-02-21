import CarScreen from './CarScreen';

const CarContainer = () => {

    const cardData = {
            id: 1,
            brand: 'Toyota',
            model: 'Vios 1.5E',
            year: '2016',
            mileage: '58,000',
            image: 'https://carsnow.s3.amazonaws.com/assets/images/full/cars_20385_toyota_vios_2016_20385_1.JPG',
            date: '02-21-2022',
            color: 'White',
            transmission: 'Manual',
            plateNo: 'xxx8, NCR',
            price: '420,000.00'
    }

    return <CarScreen cardData={cardData}/>
}

export default CarContainer;