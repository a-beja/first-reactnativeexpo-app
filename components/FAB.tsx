import { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    position?: 'left' | 'right' | 'center';

    // Methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({ label, position = 'center', onPress, onLongPress }: Props) {

    const [count, setCount] = useState(10);

    const positionStyles = {
      left: styles.positionLeft,
      right: styles.positionRight,
      center: null,
    }

  return (
    <Pressable
      style={ ({ pressed }) => [ 
        styles.floatingButton, 
        positionStyles[position],
        pressed ? { opacity: 0.5 } : { opacity: 1 }
      ]}
      onPress={ () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        onPress?.()
      }}
      onLongPress={ () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        onLongPress?.()
      }}
    >
      <Text style={{ color: 'white', fontSize: 20 }}> { label } </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    },
    
    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    }
     
});