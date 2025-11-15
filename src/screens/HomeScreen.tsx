import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Button, Card, Badge, Avatar } from '@/components/ui';
import { Colors } from '@/constants/theme';

const stats = [
  { label: 'Utilisateurs', value: '2.5M', trend: '+12%', color: Colors.primary.green },
  { label: 'Commandes', value: '45K', trend: '+8%', color: Colors.accent.orange },
  { label: 'Revenus', value: '850M', trend: '+15%', color: Colors.accent.purple },
];

const features = [
  {
    title: 'Mobile Money',
    description: "Envoyez et recevez de l'argent facilement",
    icon: '💰',
    badge: 'Populaire',
  },
  {
    title: 'Marketplace',
    description: 'Achetez et vendez localement',
    icon: '🛍️',
    badge: 'Nouveau',
  },
  {
    title: 'Livraison',
    description: 'Commandez vos repas favoris',
    icon: '🚀',
    badge: 'Rapide',
  },
  {
    title: 'Événements',
    description: 'Découvrez les événements à Yaoundé',
    icon: '🎉',
    badge: 'Tendance',
  },
];

export const HomeScreen: React.FC = () => {
  return (
    <View className="flex-1">
      <ScrollView className="px-4">
        <Animated.View entering={FadeInDown.delay(100).springify()} className="pb-6 pt-12">
          <View className="mb-2 flex-row items-center justify-between">
            <View>
              <Text className="text-primary text-3xl font-bold">Bienvenue! 👋</Text>
              <Text className="text-secondary mt-1 text-base">
                Découvrez ce qui se passe au Cameroun
              </Text>
            </View>
            <Avatar initials="JD" size="lg" online />
          </View>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200).springify()} className="mb-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-4 flex-row px-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                style={{
                  marginRight: 12,
                  minWidth: 140,
                  borderLeftWidth: 4,
                  borderLeftColor: stat.color,
                }}>
                <Text className="text-sm font-medium" style={{ color: Colors.text.secondary }}>
                  {stat.label}
                </Text>
                <Text className="mt-1 text-2xl font-bold" style={{ color: Colors.text.primary }}>
                  {stat.value}
                </Text>
                <View className="mt-2 flex-row items-center">
                  <Text className="text-sm font-semibold" style={{ color: Colors.status.success }}>
                    {stat.trend}
                  </Text>
                  <Text className="ml-1 text-xs" style={{ color: Colors.text.light }}>
                    ce mois
                  </Text>
                </View>
              </Card>
            ))}
          </ScrollView>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300).springify()} className="mb-6">
          <Text className="mb-4 text-xl font-bold" style={{ color: Colors.text.primary }}>
            Services Populaires
          </Text>
          <View className="gap-4">
            {features.map((feature, index) => (
              <Pressable key={index}>
                <Card pressable>
                  <View className="flex-row items-center">
                    <View className="bg-primary-green/15 bg-primary/15 mr-4 h-14 w-14 items-center justify-center rounded-2xl">
                      <Text className="text-3xl">{feature.icon}</Text>
                    </View>
                    <View className="flex-1">
                      <View className="mb-1 flex-row items-center">
                        <Text className="text-primary mr-2 text-lg font-bold">{feature.title}</Text>
                        <Badge
                          label={feature.badge}
                          variant={index === 1 ? 'info' : 'success'}
                          size="sm"
                        />
                      </View>
                      <Text className="text-secondary text-sm">{feature.description}</Text>
                    </View>
                    <Text className="text-nonary text-2xl">›</Text>
                  </View>
                </Card>
              </Pressable>
            ))}
          </View>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(400).springify()} className="mb-8">
          <Button
            title="Explorer Plus de Services"
            onPress={() => console.log('Explorer')}
            variant="primary"
            size="lg"
            fullWidth
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};
