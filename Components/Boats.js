import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({title, description, icon_name, poster})=> {
    return (
        <View>
            <Text>
                <Icon name={icon_name} size={35} color="#808080" />
                {title}
                {'\n'}{description}
            </Text>
            <Image source={poster} style={{width:400, height:200}}/>
        </View>
    );
};

const AllBoats =() => {
    return (
        <ScrollView>
            <Text>{'\n'}{'\n'}</Text>
            <Text>Get A Boat - For Sale</Text>
            <Boats title="SEA RAY 500 SUNDANCER" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" poster={require('../img/sea_ray.jpg')}/>
            <Boats title="FOUR WINNS HORIZON 180" description="A sporty look and refined details truly set the Horizon 180 above all others." icon_name="sailboat" poster={require('../img/four_winns.jpg')}/>
            <Boats title="FLIPPER 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="sailboat" poster={require('../img/flipper.jpg')}/>
            <Boats title="PRINCESS V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." icon_name="sailboat" poster={require('../img/princess.jpg')}/>
            <Boats title="BAYLINER 175 BOWRIDER" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="sailboat" poster={require('../img/bayliner.jpg')}/>
            <Boats title="FAIRLINE TARGA 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." icon_name="sailboat" poster={require('../img/fairline.jpg')}/>
        </ScrollView>
    );
};


export default AllBoats;
