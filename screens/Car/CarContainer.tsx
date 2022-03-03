
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {Button, Icon, Overlay, Rating, Text, Input } from 'react-native-elements';
import { getVehicle, getBid, postBid, getUser } from '../../api';
import Typography from '../../components/base/Typography';
import formatMoney from '../../lib/formatMoney';
import { height } from '../../styles';
import CarScreen from './CarScreen';

const CarContainer = ({ route }) => {
    const [visible, setVisible] = useState(false);
    const [isBidPlace, setIsBidPlace] = useState(false);
    const [isBidAcceptable, setIsBidAcceptable] = useState(false);
    const [carData, setCarData] = useState({});
    const [bidData, setBidData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [bidAmount, setBidAmount] = useState('');

    useEffect(() => {
        getVehicleData();
        getBidData();
    }, []);

    const getVehicleData = async() => {
        setIsLoading(true);
        try {
            const res = await getVehicle(route.params.id)
            setCarData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const getBidData = async() => {
        try {
            const res = await getBid(route.params.id)
            setBidData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    };

    const getUserData = async(id: string) => {
        try {
            const res = await getUser(id)
            console.log('user', res.data[0].username)
            return res.data[0].username
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = async() => {
        const data = {
            bidPrice: bidAmount,
            vehicleId: route.params.id,
            bidder: '621ff69cec754c80c0747860'
        };
        try {
            const res = await postBid(data);
            console.log(res)
            setIsBidPlace(true)
        } catch (error) {
            console.log(error)
        }
    };

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const handleBidAmount = (amount: any) => {
        const parsedAmount = parseInt(amount);

        if (!bidData.length) {
            setIsBidAcceptable(true)
            setBidAmount(amount)
        } else {
            if(parsedAmount < bidData[0].bidPrice || !amount) {
                setIsBidAcceptable(false)
                return;
            }  else {
                setIsBidAcceptable(true)
                setBidAmount(amount)
            }
        }

        
    }

    if(isLoading) {
        return <Text>loading...</Text>
    }
    return (
        <>
            <CarScreen 
                carData={carData} 
                isLoading={isLoading} 
                toggleOverlay={toggleOverlay} 
                isBidPlace={isBidPlace}
                bidData={bidData}
                getUserData={getUserData}
            />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={{ alignItems: 'center', height: height / 4, justifyContent: 'space-evenly' }}>
                    {!isBidPlace ? 
                        <>
                            <Typography size={25} fontWeight='bold'>Sure to bid?</Typography>
                            {/* <Typography>
                                {cardData.brand} {cardData.model} {cardData.year} {cardData.color}
                            </Typography> */}
                            {bidData[0]?.bidPrice ? 
                            <>
                                <Typography size={10}>Price must be higher than the current price</Typography>
                                <Typography size={10} style={{ color: '#d10000' }}>Current Price: {formatMoney(bidData[0]?.bidPrice)} </Typography>
                            </>
                            : null}
                            <Input onChangeText={value => handleBidAmount(value)} keyboardType='numeric' />

                            
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
                                    disabled={!isBidAcceptable}
                                    onPress={handleSubmit}
                                    buttonStyle={{
                                        backgroundColor: '#d10000',
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