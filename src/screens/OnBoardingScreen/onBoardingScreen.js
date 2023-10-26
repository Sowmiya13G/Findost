import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

import {onboardingData} from '../../constants/onBoardingData/onBoardingData';
import {styles} from './styles';
import {Background} from '../../components/Background';

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const {width} = Dimensions.get('window');
  const flatListRef = useRef(null);

  const handleNextSlide = () => {
    if (currentPage < onboardingData.length - 1 && flatListRef.current) {
      setCurrentPage(currentPage + 1);
      flatListRef.current.scrollToIndex({index: currentPage + 1});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFD7B4" barStyle="dark-content" />
      <Background />
      {currentPage < onboardingData.length && (
        <TouchableOpacity onPress={handleNextSlide} style={styles.skipView}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      )}
      <View style={styles.data}>
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={{width, height: '100%'}}>
              <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          onMomentumScrollEnd={event => {
            const indexOfNextScreen = Math.floor(
              event.nativeEvent.contentOffset.x / width,
            );
            setCurrentPage(indexOfNextScreen);
          }}
        />
        {currentPage < onboardingData.length && (
          <View style={styles.pagination}>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentPage ? styles.paginationDotActive : null,
                ]}
              />
            ))}
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNextSlide}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
