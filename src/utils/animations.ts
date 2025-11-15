import { withSpring, withTiming, withSequence, withRepeat, Easing } from 'react-native-reanimated';

export const spring = (toValue: number) =>
  withSpring(toValue, {
    damping: 15,
    stiffness: 150,
  });

export const timing = (toValue: number, duration = 300) =>
  withTiming(toValue, {
    duration,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

export const bounce = (toValue: number) =>
  withSequence(withTiming(toValue * 1.1, { duration: 150 }), withSpring(toValue));

export const pulse = (scale = 1.05) =>
  withRepeat(
    withSequence(withTiming(scale, { duration: 800 }), withTiming(1, { duration: 800 })),
    -1,
    true
  );

export const fadeIn = (duration = 300) =>
  withTiming(1, {
    duration,
    easing: Easing.ease,
  });

export const fadeOut = (duration = 300) =>
  withTiming(0, {
    duration,
    easing: Easing.ease,
  });

export const slideIn = (fromValue: number, toValue: number, duration = 300) =>
  withTiming(toValue, {
    duration,
    easing: Easing.out(Easing.cubic),
  });
