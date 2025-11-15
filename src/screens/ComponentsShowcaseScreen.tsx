import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Button, Card, Badge, Avatar, Input } from '@/components/ui';
import { Colors } from '@/constants/theme';

export const ComponentsShowcaseScreen: React.FC = () => {
  return (
    <View className="flex-1" style={{ backgroundColor: Colors.background.light }}>
      <ScrollView className="flex-1 px-4">
        <View className="pb-6 pt-12">
          <Text className="text-3xl font-bold" style={{ color: Colors.text.primary }}>
            Composants UI
          </Text>
          <Text className="mt-1 text-base" style={{ color: Colors.text.secondary }}>
            Bibliothèque de composants réutilisables
          </Text>
        </View>

        <Animated.View entering={FadeInRight.delay(100).springify()} className="mb-6">
          <Text className="mb-3 text-lg font-semibold" style={{ color: Colors.text.primary }}>
            Boutons
          </Text>
          <Card>
            <View className="gap-3">
              <Button title="Bouton Primary" onPress={() => {}} variant="primary" />
              <Button title="Bouton Secondary" onPress={() => {}} variant="secondary" />
              <Button title="Bouton Outline" onPress={() => {}} variant="outline" />
              <Button title="Bouton Ghost" onPress={() => {}} variant="ghost" />
              <Button title="Bouton Loading" onPress={() => {}} loading />
            </View>
          </Card>
        </Animated.View>

        <Animated.View entering={FadeInRight.delay(200).springify()} className="mb-6">
          <Text className="mb-3 text-lg font-semibold" style={{ color: Colors.text.primary }}>
            Avatars
          </Text>
          <Card>
            <View className="flex-row items-center gap-4">
              <Avatar initials="SM" size="sm" />
              <Avatar initials="MD" size="md" online />
              <Avatar initials="LG" size="lg" />
              <Avatar initials="XL" size="xl" online />
            </View>
          </Card>
        </Animated.View>

        <Animated.View entering={FadeInRight.delay(300).springify()} className="mb-6">
          <Text className="mb-3 text-lg font-semibold" style={{ color: Colors.text.primary }}>
            Badges
          </Text>
          <Card>
            <View className="flex-row flex-wrap gap-2">
              <Badge label="Succès" variant="success" />
              <Badge label="Avertissement" variant="warning" />
              <Badge label="Erreur" variant="error" />
              <Badge label="Info" variant="info" />
              <Badge label="Primary" variant="primary" />
            </View>
          </Card>
        </Animated.View>

        <Animated.View entering={FadeInRight.delay(400).springify()} className="mb-6">
          <Text className="mb-3 text-lg font-semibold" style={{ color: Colors.text.primary }}>
            Inputs
          </Text>
          <Card>
            <Input label="Nom complet" placeholder="Entrez votre nom" />
            <Input label="Email" placeholder="votre@email.com" />
            <Input label="Mot de passe" placeholder="••••••••" secureTextEntry />
            <Input label="Téléphone" placeholder="+237 6XX XXX XXX" error="Numéro invalide" />
          </Card>
        </Animated.View>
      </ScrollView>
    </View>
  );
};
