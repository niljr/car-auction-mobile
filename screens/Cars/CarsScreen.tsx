import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, View } from "react-native"
import { Rating } from 'react-native-elements';
import Card from "../../components/base/Card";
import Typography from "../../components/base/Typography";
import Colors from "../../constants/Colors";
import formatMoney from "../../lib/formatMoney";
import styles from './carsStyle';

type Props = {
    carList: any,
    handleGotoCarInfo: any
}

type CarProps = {
    _id: string,
    brand: string,
    model: string,
    year: string,
    mileage: string,
    suggestedPrice: number,
    date: Date
}

const CarsSCreen = ({ carList, handleGotoCarInfo }: Props) => {
    return (
       <View style={styles.container}>
            <View style={styles.filterContainer}>
                <FontAwesome name="search" size={25} /> 
                <FontAwesome name="sort-amount-desc" size={25}  /> 
            </View>

           <Typography size={25} style={styles.title} fontWeight='bold'>Cars for auction</Typography>

            <Typography size={12}>150 cars for next auction</Typography>
            <ScrollView>
                <View style={styles.list}>
                        {carList?.vehicles?.length > 0 ?  carList.vehicles.map((car: CarProps) => (
                            <Card style={{ flexDirection: 'row',widht: '100%', marginVertical: 5 }} key={car._id} onPress={() => handleGotoCarInfo(car._id)}>
                                <Image source={{ uri:'http://ford.prodealerwebsites.com.au/specials/default.png' }} style={styles.carImage} resizeMode='contain'/>
                                <View style={{ width: '73%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Typography>{car.brand} | {car.model}</Typography>
                                        <Rating 
                                            imageSize={20}
                                            startingValue={1}
                                            ratingCount={1}
                                        />
                                    </View>
                                        <Typography color='mediumGray'>{car.year}</Typography>
                                        <Typography color='mediumGray'>{car.mileage} km</Typography>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Typography style={{ paddingRight: 10 }}>{formatMoney(car.suggestedPrice)}</Typography>
                                        <Typography>{car.date}</Typography>
                                    </View>
                                </View>
                            </Card>
                        ))
                        :
                        <Typography>Loading...</Typography>
                    }
                    </View>
            </ScrollView>
       </View>
    )
}

export default CarsSCreen;