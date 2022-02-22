import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, View } from "react-native"
import { Button, ButtonGroup } from 'react-native-elements';
import Card from "../../components/base/Card";
import Typography from "../../components/base/Typography";
import Colors from "../../constants/Colors";
import { height } from "../../styles";
import styles from './carStyle';

type Props = {
    cardData: cardDataType,
    toggleOverlay: any,
    isBidPlace: boolean
}

type cardDataType = {
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
    plateNo: string
}

const CarScreen = ({ cardData, toggleOverlay, isBidPlace }: Props) => {

    const { brand, model, year, mileage, transmission, plateNo, color } = cardData;

    return (
       <View style={styles.container}>
           <Typography size={25} style={styles.title} fontWeight='bold'>{`${cardData.brand} ${cardData.model} ${cardData.year} `}</Typography>

           <View style={styles.carDataContainer}>
               <Card style={styles.cardData}>
                    <View>
                        <Image source={{uri: cardData.image}} style={styles.carImage}/>
                        <ButtonGroup
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
                            <Typography>{plateNo}</Typography>
                        </View>
                        <Button title='1 Week Documents' buttonStyle={{ backgroundColor: 'green', marginVertical: 10 }}/>
                        <Button title='BID NOW' buttonStyle={{ backgroundColor: 'red' }} onPress={toggleOverlay} disabled={isBidPlace}/>
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
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}>
                    <Typography>27th May</Typography>
                    <Typography>13:35</Typography>
                    <Typography>P420,000</Typography>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}>
                    <Typography>27th May</Typography>
                    <Typography>13:35</Typography>
                    <Typography>P420,000</Typography>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}>
                    <Typography>27th May</Typography>
                    <Typography>13:35</Typography>
                    <Typography>P420,000</Typography>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}>
                    <Typography>27th May</Typography>
                    <Typography>13:35</Typography>
                    <Typography>P420,000</Typography>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}>
                    <Typography>27th May</Typography>
                    <Typography>13:35</Typography>
                    <Typography>P420,000</Typography>
               </View>
               
               </ScrollView>
           </Card>

           <Typography size={14} style={{ marginVertical: 20 }}><FontAwesome name="map-marker" size={15}/> xxx Bank xx., Quezon city, Manila(Mon-wed 9:00-17:00)</Typography>
                            
           <Button title={isBidPlace ? 'You\'re currently leading the bid' : 'Bid now'} buttonStyle={{ backgroundColor: 'red' }} onPress={toggleOverlay} disabled={isBidPlace}/>
       </View>
    )
}


export default CarScreen;