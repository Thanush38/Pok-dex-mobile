import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedLineChart = Animated.createAnimatedComponent(LineChart);

const RadarChart = ({ data }) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(1, { duration: 1000, easing: Easing.linear });
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedLineChart
        data={{
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
          datasets: [{ data }]
        }}
        width={300}
        height={300}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default RadarChart;
