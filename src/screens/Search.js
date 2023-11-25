import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import {Images, Play} from '../themes/Theme';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.header}>
            <Ionic
              name="search"
              size={25}
              style={{color: 'gray', paddingLeft: 10}}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="grey"
              style={styles.textinput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.exploreContainer}>
          <View style={styles.postGrid}>
            <View style={styles.grid}>
              <Image source={Images.image7} style={styles.saveImage6} />
              <Image source={Images.image8} style={styles.saveImage6} />
            </View>
            <Video
              source={Play.video1}
              style={styles.video}
              resizeMode="cover"
              repeat
              paused={false}
              muted={true}
            />
            <View style={styles.grid}>
              <Image source={Images.image6} style={styles.saveImage6} />
              <Image source={Images.image7} style={styles.saveImage6} />
            </View>
          </View>
        </View>
        <View style={styles.explore2Container}>
          <Video
            source={Play.video2}
            style={styles.video}
            resizeMode="cover"
            repeat
            paused={false}
            muted={true}
          />
          <Image source={Images.image6} style={styles.saveImage2} />
        </View>
        <View style={styles.explore2Container}>
          <Video
            source={Play.video5}
            style={styles.video}
            resizeMode="cover"
            repeat
            paused={false}
            muted={true}
          />
          <View style={styles.postGrid}>
            <View style={styles.grid}>
              <View style={styles.collage}>
                <Image source={Images.image7} style={styles.saveImage6} />
                <Image source={Images.image8} style={styles.saveImage6} />
              </View>
              <View style={styles.collage}>
                <Image source={Images.image8} style={styles.saveImage6} />
                <Image source={Images.image6} style={styles.saveImage6} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.explore2Container}>
          <View style={styles.postGrid}>
            <View style={styles.grid}>
              <View style={styles.collage}>
                <Image source={Images.image1} style={styles.saveImage} />
                <Image source={Images.image7} style={styles.saveImage6} />
              </View>
              <View style={styles.collage}>
                <Image source={Images.image6} style={styles.saveImage6} />
                <Image source={Images.image8} style={styles.saveImage6} />
              </View>
            </View>
            <Video
                  source={Play.video4}
                  style={styles.video5}
                  resizeMode="cover"
                  repeat
                  paused={false}
                  muted={true}
                />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: '15%',
  },
  header: {
    width: '90%',
    paddingVertical: 3,
    marginHorizontal: 20,
    backgroundColor: 'rgba(55, 55, 55, 0.40)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  textinput: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
  },
  exploreContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  explore2Container: {
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  saveImage: {
    resizeMode: 'contain',
    margin:1,
  },
  saveImage2: {
    resizeMode: 'contain',
    width: 260,
    height: 250,
  },
  saveImage6: {
    resizeMode: 'contain',
    width: 130,
    height: 125,
    margin:1,
  },
  postGrid: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'column',
  },
  collage: {
    flexDirection: 'row',
  },
  video: {
    width: 130,
    height: 250,
    margin:1,
  },
  video5: {
    width: 130,
    height: 255,
  },
});

export default Search;
