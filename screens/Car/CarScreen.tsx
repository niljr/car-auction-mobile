import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, ScrollView, View } from "react-native"
import { Button, ButtonGroup } from 'react-native-elements';
import moment from 'moment';

import Card from "../../components/base/Card";
import Typography from "../../components/base/Typography";
import Colors from "../../constants/Colors";
import { height } from "../../styles";
import styles from './carStyle';
import formatMoney from "../../lib/formatMoney";

type Props = {
    carData: carDataType,
    toggleOverlay: any,
    isBidPlace: boolean,
    isLoading: boolean,
    bidData: any,
    getUserData: any
}

type carDataType = {
    id: number,
    brand: string,
    model: string
    year: string
    mileage: string
    image: string
    date: string
    price: string
    color: string
    transmission: string
    plateNumber: string
}

const CarScreen = ({ carData, toggleOverlay, isBidPlace, isLoading, bidData, getUserData }: Props) => {
    const { brand, model, year, mileage, transmission, plateNumber, color } = carData;
    return (
        isLoading ? <Typography>Loading</Typography> : 
       <View style={styles.container}>
           <Typography size={25} style={styles.title} fontWeight='bold'>{`${brand} ${model} ${year} `}</Typography>

           <View style={styles.carDataContainer}>
               <Card style={styles.cardData}>
                    <View>
                        <Image source={{uri: carData.image ? carData.image : 'http://ford.prodealerwebsites.com.au/specials/default.png'}} resizeMode='contain' style={styles.carImage}/>
                        <ButtonGroup
                                disabled
                                buttons={['On Bid', 'Next', 'Done']}
                                selectedIndex={0}
                                onPress={(value) => {
                                    setSelectedIndex(value);
                                }}
                                containerStyle={{ width: '100%', marginLeft: -5 }}
                            />
                    </View>

                    <View>
                        <View style={styles.infoText}>
                            <Typography>Mileage</Typography>
                            <Typography>{mileage}</Typography>
                        </View>
                        <View style={styles.infoText}>
                            <Typography>Color</Typography>
                            <Typography>{color}</Typography>
                        </View>
                        <View style={styles.infoText}>
                            <Typography>T/M</Typography>
                            <Typography>{transmission}</Typography>
                        </View>
                        <View style={styles.infoText}>
                            <Typography>Plate No.</Typography>
                            <Typography>{plateNumber}</Typography>
                        </View>
                        <Button title='1 Week Documents' buttonStyle={{ backgroundColor: 'green', marginVertical: 10 }}/>
                        <Button title='BID NOW' buttonStyle={{ backgroundColor: '#d10000' }} onPress={toggleOverlay} disabled={isBidPlace}/>
                    </View>
               </Card>
           </View>

           <Card style={styles.wonContainer}>
               <Typography>This will be won the price at</Typography>
               <Typography>410K to 440K</Typography>
           </Card>

           <Card style={styles.finishContainer}>
               <Typography>
                   <FontAwesome name="star" size={15}/> Like
                </Typography>
               <Typography>
                    <FontAwesome name="money" size={15}/> 34 Bid
                </Typography>
               <Typography>Finish in:</Typography>
               <Typography>1d 23h 15m</Typography>
           </Card>

           <Card style={{ borderColor: 'black', borderWidth: 1, marginTop: 20, height: height / 4 }}>
               <ScrollView>
                    {bidData.map((bid: any) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}key={bid._id}>
                            <Typography>{moment(bid.createdAt) .format("MMM DD h:mm A")}</Typography>
                            {/* <Typography>{getUserData(bid.bidder)}</Typography> */}
                            <Typography>{formatMoney(bid.bidPrice)}</Typography>
                        </View>
                    ))}
               </ScrollView>
           </Card>

           <Typography size={14} style={{ marginVertical: 20 }}><FontAwesome name="map-marker" size={15}/> xxx Bank xx., Quezon city, Manila(Mon-wed 9:00-17:00)</Typography>
                            
           <Button title={isBidPlace ? 'You\'re currently leading the bid' : 'Bid now'} buttonStyle={{ backgroundColor: '#d10000' }} onPress={toggleOverlay} disabled={isBidPlace}/>
       </View>
    )
}


export default CarScreen;