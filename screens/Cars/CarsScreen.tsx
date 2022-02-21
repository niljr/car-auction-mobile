import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, View } from "react-native"
import { Rating } from 'react-native-elements';
import Card from "../../components/base/Card";
import Typography from "../../components/base/Typography";
import Colors from "../../constants/Colors";
import styles from './carsStyle';

type Props = {
    carList: any,
    handleGotoCarInfo: () => null
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
                        {carList.map((car: any) => (
                            <Card style={{ flexDirection: 'row',widht: '100%', marginVertical: 5 }} key={car.id} onPress={handleGotoCarInfo}>
                                <Image source={{ uri:car.image }} style={styles.carImage}/>
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
                                        <Typography style={{ paddingRight: 10 }}>₱ {car.price}</Typography>
                                        <Typography>{car.date}</Typography>
                                    </View>
                                </View>
                            </Card>
                        ))}
                    </View>
            </ScrollView>
       </View>
    )
}

export default CarsSCreen;