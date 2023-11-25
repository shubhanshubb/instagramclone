import {Dimensions, Platform} from 'react-native';
// import { assets } from '../../react-native.config';
const {height, width} = Dimensions.get('screen');
export const sizes = {height, width};

export const Images = {
    image1: require('../assets/images/savedPhoto1.png'),
    image2: require('../assets/images/savedPhoto2.png'),
    image3: require('../assets/images/savedPhoto3.png'),
    image4: require('../assets/images/savedPhoto4.png'),
    image5: require('../assets/images/savedPhoto5.png'),
    image6: require('../assets/images/savedImage6.jpg'),
    image7: require('../assets/images/savedPhoto7.jpg'),
    image8: require('../assets/images/savedPhoto8.jpg'),
}

export const Play = {
    video1: require('../assets/videos/video1.mp4'),
    video2: require('../assets/videos/video2.mp4'),
    video3: require('../assets/videos/video3.mp4'),
    video4: require('../assets/videos/video4.mp4'),
    video5: require('../assets/videos/video5.mp4')
}