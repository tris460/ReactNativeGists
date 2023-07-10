import React, { useContext, useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import Title from '../component/Title';
import ButtonComponent from '../component/ButtonComponent';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Title 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Title 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Title 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const {width:screenWidth} = Dimensions.get('window')

const SlidesScreen = () => {
    const {theme: {colors}} = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();
    
    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.background,
                padding: 10,
                justifyContent: 'center',
            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'contain'
                    }} />
                    <Text style={{...styles.subtitle, color: colors.text}}>
                        {item.title}
                    </Text>
                    <Text style={{...styles.switchText, color: colors.text}}>
                        {item.desc}
                    </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Title text='Slides' />
            <Carousel
                data={items}
                renderItem={({item}: any) => renderItem(item)}
                sliderWidth={screenWidth - 40}
                itemWidth={screenWidth - 40}
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                }}
                />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Pagination 
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotColor='#f9c'
                    inactiveDotColor='#c9c' />
                    
                {activeIndex == items.length -1 ? 
                    <ButtonComponent onPress={() => navigation.navigate('Home' as never)} title='Enter' icon='chevron-forward-outline' />
                    : <></> }
            </View>
        </View>
    )
}

export default SlidesScreen
