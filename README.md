# My Expo App - Modern Cameroon-Inspired Mobile App

Une application mobile moderne construite avec Expo, React Native, et NativeWind (Tailwind CSS), inspirée de la culture et du contexte camerounais.

## 🎨 Fonctionnalités

- **Design Moderne**: Interface utilisateur élégante avec animations fluides
- **Thème Camerounais**: Couleurs inspirées du drapeau camerounais (Vert, Rouge, Jaune)
- **Composants Réutilisables**: Bibliothèque de composants UI stylés et animés
- **Animations**: Utilisation de React Native Reanimated pour des animations performantes
- **TypeScript**: Typage fort pour une meilleure expérience développeur

## 🚀 Structure du Projet

```
my-expo-app/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.tsx      # Bouton avec variantes et animations
│   │       ├── Card.tsx        # Carte avec effet de pression
│   │       ├── Input.tsx       # Champ de saisie animé
│   │       ├── Badge.tsx       # Badge de statut
│   │       └── Avatar.tsx      # Avatar avec indicateur en ligne
│   ├── screens/
│   │   └── HomeScreen.tsx      # Écran d'accueil
│   ├── constants/
│   │   └── theme.ts            # Thème et constantes de design
│   └── utils/
│       └── animations.ts       # Utilitaires d'animation
├── App.tsx                     # Point d'entrée de l'application
└── global.css                  # Styles globaux Tailwind
```

## 🎨 Thème

### Couleurs Principales
- **Vert**: `#009639` - Couleur primaire (drapeau camerounais)
- **Rouge**: `#CE1126` - Couleur secondaire
- **Jaune**: `#FCD116` - Couleur d'accent
- **Orange**: `#FF6B35` - Accent moderne

### Composants UI

#### Button
```tsx
<Button
  title="Explorer"
  onPress={() => {}}
  variant="primary" // primary | secondary | outline | ghost
  size="lg"         // sm | md | lg
  fullWidth
/>
```

#### Card
```tsx
<Card pressable onPress={() => {}}>
  <Text>Contenu de la carte</Text>
</Card>
```

#### Input
```tsx
<Input
  label="Email"
  placeholder="votre@email.com"
  error="Email invalide"
/>
```

#### Badge
```tsx
<Badge
  label="Nouveau"
  variant="success" // success | warning | error | info | primary
  size="sm"         // sm | md
/>
```

#### Avatar
```tsx
<Avatar
  initials="JD"
  size="lg"    // sm | md | lg | xl
  online
/>
```

## 📦 Installation

```bash
# Installer les dépendances
bun install

# Lancer l'application
bun start

# Lancer sur Android
bun run android

# Lancer sur iOS
bun run ios

# Lancer sur Web
bun run web
```

## 🔧 Scripts Disponibles

- `bun start` - Démarre le serveur de développement Expo
- `bun run android` - Lance l'app sur un émulateur/appareil Android
- `bun run ios` - Lance l'app sur un simulateur/appareil iOS
- `bun run web` - Lance l'app dans le navigateur
- `bun run lint` - Vérifie le code avec ESLint et Prettier
- `bun run format` - Formate le code automatiquement

## 🎯 Prochaines Étapes

1. Ajouter la navigation avec React Navigation
2. Implémenter l'authentification
3. Créer plus d'écrans (Profil, Paramètres, etc.)
4. Intégrer une API backend
5. Ajouter des tests unitaires et E2E

## 🇨🇲 Contexte Camerounais

L'application intègre des éléments inspirés du Cameroun:
- Services populaires: Mobile Money, Marketplace locale
- Événements à Yaoundé
- Interface en français
- Design moderne adapté au contexte local

## 📱 Technologies

- **Expo** - Framework React Native
- **React Native** - Framework mobile
- **TypeScript** - Typage statique
- **NativeWind** - Tailwind CSS pour React Native
- **React Native Reanimated** - Animations performantes
- **React Native Safe Area Context** - Gestion des zones sûres

## 📄 Licence

Projet privé - Tous droits réservés
