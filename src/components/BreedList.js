import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import CatIcon from '../assets/CatIcon';
import FlagIcon from '../assets/FlagIcon';
import PowerIcon from '../assets/PowerIcon';
import PowIcon from '../assets/PowIcon';

const BreedList = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleOnPress = () => {
    setOpen((o) => !o);
  };

  const handleToWikipediaLink = () => {
    Linking.openURL(item?.wikipedia_url);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={styles.listButton}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri:
                  item?.image?.url ||
                  `https://cdn2.thecatapi.com/images/${item?.reference_image_id}.jpg`,
              }}
            />
          </View>
          <Text style={styles.fadingText}>{item?.name}</Text>
        </View>
      </TouchableWithoutFeedback>
      {open && (
        <View style={styles.detailContainer}>
          <View collapsable>
            <View style={styles.trivia}>
              <View style={styles.triviaBox}>
                <View style={styles.iconContainer}>
                  <FlagIcon />
                  <Text style={styles.iconText}>Country: {item?.origin}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <CatIcon />
                  <Text style={styles.iconText}>
                    vocalisation: {item?.vocalisation}
                  </Text>
                </View>
              </View>
              <View style={styles.triviaBox}>
                <View style={styles.iconContainer}>
                  <PowIcon />
                  <Text style={styles.iconText}>
                    Shedding: {item?.shedding_level}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <PowerIcon />
                  <Text style={styles.iconText}>
                    Life Span: {item?.life_span}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.title}>Personality</Text>
            <Text style={styles.temperament}>{item?.temperament}</Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.description}>{item?.description}</Text>
              <TouchableWithoutFeedback
                style={styles.sourceLink}
                onPress={handleToWikipediaLink}
              >
                <Text style={styles.sourceLinkTitle}>More on Wikipedia</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default BreedList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#100720',
    marginTop: 8,
    borderRadius: 4,
  },
  listButton: {
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  title: {
    fontWeight: '600',
    color: '#F7D716',
    marginTop: 8,
    marginBottom: 4,
  },
  description: {
    color: 'white',
  },
  sourceLinkTitle: {
    color: '#EC9B3B',
    marginTop: 10,
  },
  temperament: {
    color: 'white',
    fontStyle: 'italic',
    marginVertical: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  trivia: {
    flexDirection: 'row',
  },
  triviaBox: {
    width: '50%',
  },
  iconText: {
    flex: 1,
    marginStart: 8,
    color: 'white',
  },
  detailContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  fadingText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  buttonRow: {
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  imageContainer: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F7D716',
    borderRadius: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
});
