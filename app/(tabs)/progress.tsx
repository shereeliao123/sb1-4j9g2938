import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Trophy } from 'lucide-react-native';
import { useHabits } from '@/contexts/HabitsContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProgressScreen() {
  const { habits, completionRate } = useHabits();
  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f9fafb',
    },
    header: {
      padding: 24,
      paddingTop: 60,
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#404040' : '#e5e7eb',
    },
    title: {
      fontSize: 28,
      fontFamily: 'Inter_700Bold',
      color: isDarkMode ? '#ffffff' : '#111827',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter_400Regular',
      color: isDarkMode ? '#a3a3a3' : '#6b7280',
    },
    content: {
      flex: 1,
      padding: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    statCard: {
      flex: 1,
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      padding: 16,
      borderRadius: 12,
      marginHorizontal: 4,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isDarkMode ? 0.3 : 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    statNumber: {
      fontSize: 24,
      fontFamily: 'Inter_700Bold',
      color: '#6366f1',
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 14,
      fontFamily: 'Inter_400Regular',
      color: isDarkMode ? '#a3a3a3' : '#6b7280',
      textAlign: 'center',
    },
    achievementsSection: {
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      borderRadius: 12,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isDarkMode ? 0.3 : 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: 'Inter_600SemiBold',
      color: isDarkMode ? '#ffffff' : '#111827',
      marginBottom: 16,
    },
    achievement: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#404040' : '#f3f4f6',
      padding: 16,
      borderRadius: 8,
    },
    achievementText: {
      marginLeft: 12,
    },
    achievementTitle: {
      fontSize: 16,
      fontFamily: 'Inter_600SemiBold',
      color: isDarkMode ? '#ffffff' : '#1f2937',
    },
    achievementDesc: {
      fontSize: 14,
      fontFamily: 'Inter_400Regular',
      color: isDarkMode ? '#a3a3a3' : '#6b7280',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.subtitle}>Keep up the great work!</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{completionRate}%</Text>
            <Text style={styles.statLabel}>Completion Rate</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{habits.length}</Text>
            <Text style={styles.statLabel}>Total Habits</Text>
          </View>
        </View>

        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          <View style={styles.achievement}>
            <Trophy size={24} color="#6366f1" />
            <View style={styles.achievementText}>
              <Text style={styles.achievementTitle}>7 Day Streak</Text>
              <Text style={styles.achievementDesc}>Completed all habits for 7 days</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}