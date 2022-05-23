import React, {useState} from 'react';
import {styleSheet} from './style';
import {
  View,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IMAGE_API} from '../../state-management/configs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import colors from '../../assets/colors/colors';

export default function DroppDownSearch({searchResult, navigation}) {
  // const [ref, setRef] = useState(null);
  const likedList = useSelector(state => state.likedList);

  const RenderItem = ({item}) => {
    // console.log(item);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={styleSheet.ItemView}>
        <Image
          source={{uri: IMAGE_API + item.backdrop_path}}
          style={styleSheet.searchItemImage}
          imageStyle={styleSheet.searchImage}
        />
        <View style={styleSheet.inputItemTitle}>
          <Text style={styleSheet.inputItemText}>{item.original_title}</Text>
          {likedList.includes(item.id) && (
            <AntDesign
              name="heart"
              size={20}
              style={{
                color: colors.orange,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // const FlatList_Header = () => {
  //   return (
  //     <View style={styleSheet.headerStyle}>
  //       <Button
  //         title="Authoscroll"
  //         onPress={() => {
  //           ref.scrollToOffset({
  //             offset: 240,
  //             animated: true,
  //           });
  //         }}
  //       />
  //     </View>
  //   );
  // };

  return (
    <View style={styleSheet.modalHeight}>
      <FlatList
        data={searchResult}
        // ref={refs => {
        //   setRef(refs);
        // }}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        // ListHeaderComponent={FlatList_Header}
        nestedScrollEnabled={true}
      />
    </View>
  );
}
