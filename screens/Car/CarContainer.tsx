
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {Button, Icon, Overlay, Rating } from 'react-native-elements';
import Typography from '../../components/base/Typography';
import { height } from '../../styles';
import CarScreen from './CarScreen';

const CarContainer = () => {
    const [visible, setVisible] = useState(false);
    const [isBidPlace, setIsBidPlace] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleBidPlaced = () => {
    setIsBidPlace
  }
  
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

    return (
        <>
            <CarScreen cardData={cardData} toggleOverlay={toggleOverlay} isBidPlace={isBidPlace}/>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={{ alignItems: 'center', height: height / 4, justifyContent: 'space-evenly' }}>
                    {!isBidPlace ? 
                        <>
                            <Typography size={25} fontWeight='bold'>Sure to bid?</Typography>
                            <Typography>
                                {cardData.brand} {cardData.model} {cardData.year} {cardData.color}
                            </Typography>
                            <Typography size={20}>
                                P {cardData.price}
                            </Typography>
                            
                            <View style={{ flexDirection: 'row'}}>
                                <Button 
                                    title='Cancel' 
                                    buttonStyle={{
                                        borderColor: 'rgba(78, 116, 289, 1)',
                                    }}
                                    type="outline"
                                    titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                                    onPress={toggleOverlay}
                                />
                                <Button
                                    title="Ok"
                                    onPress={() => setIsBidPlace(true)}
                                    buttonStyle={{
                                        backgroundColor: 'rgba(199, 43, 98, 1)',
                                        borderColor: 'transparent',
                                        borderWidth: 0,
                                    }}
                                />
                            </View>
                        </>
                    : 
                    <Typography size={25} fontWeight='bold'>Your bid Placed!!</Typography>
                    }
                </View>
            </Overlay>
        </>
    )
}

export default CarContainer;