import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Carousel, {Pagination} from 'react-native-snap-carousel';

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
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
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
                    <Text style={styles.subtitle}>
                        {item.title}
                    </Text>
                    <Text style={styles.switchText}>
                        {item.desc}
                    </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Slides
            </Text>
            <Carousel
                data={items}
                renderItem={({item}: any) => renderItem(item)}
                sliderWidth={screenWidth - 40}
                itemWidth={screenWidth - 40}
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                }}
                />
            <Pagination 
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                dotColor='#000'
                inactiveDotColor='#777' />
        </View>
    )
}

export default SlidesScreen
