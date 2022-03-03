import { useEffect, useState } from 'react';
import axios from 'axios';

import CarsScreen from './CarsScreen';
import { getAllAuctions } from '../../api';

47737042
const CarsContainer = ({ navigation }) => {
    const [carList, setCarList] = useState([]);
    useEffect(() => {
        getData();
    }, []);


    const getData = async() => {
        try {
            const res = await getAllAuctions();
            setCarList(res)
        } catch (error) {
            console.log(error)
        }
    }

    // const carList = [
    //     {
    //         id: 1,
    //         brand: 'Toyota',
    //         model: 'Vios 1.5E',
    //         year: '2016',
    //         mileage: '58,000',
    //         image: 'https://carsnow.s3.amazonaws.com/assets/images/full/cars_20385_toyota_vios_2016_20385_1.JPG',
    //         date: '02-21-2022',
    //         price: '420,000.00'
    //     },
    //     {
    //         id: 2,
    //         brand: 'Toyota',
    //         model: 'Vios 1.5E',
    //         year: '2016',
    //         mileage: '58,000',
    //         image: 'https://img.philkotse.com/crop/600x338/2021/07/07/20210707163257-ccde.jpg',
    //         date: '02-21-2022',
    //         price: '420,000.00'
    //     },
    //     {
    //         id: 3,
    //         brand: 'Toyota',
    //         model: 'Vios 1.5E',
    //         year: '2016',
    //         mileage: '58,000',
    //         image: 'https://img.philkotse.com/crop/480x390/2020/04/11/20200411110010-0a26.jpg',
    //         date: '02-21-2022',
    //         price: '420,000.00'
    //     },
    //     {
    //         id: 4,
    //         brand: 'Toyota',
    //         model: 'Vios 1.5E',
    //         year: '2016',
    //         mileage: '58,000',
    //         image: 'https://img.philkotse.com/crop/600x338/2021/06/07/20210607222719-f22c.jpg',
    //         date: '02-21-2022',
    //         price: '420,000.00'
    //     },
    // ]
    

    const handleGotoCarInfo = (id: string) => {
        navigation.navigate('Car', {
            id: id
        });
    }

    return <CarsScreen carList={carList} handleGotoCarInfo={handleGotoCarInfo}/>
}

export default CarsContainer;