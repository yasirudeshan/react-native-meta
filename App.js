import {View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style ={{flex : 1, justifyContent: 'flex-start', padding : 45 }}>
      <LittleLemonHeader />
      <Footer />
    </View>
  );
}

