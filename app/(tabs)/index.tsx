import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Check, Plus, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import AddHabitModal from '@/components/AddHabitModal';
import { useHabits } from '@/contexts/HabitsContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function TodayScreen() {
  const { habits, toggleHabit, deleteHabit, addHabit } = useHabits();
  const { isDarkMode } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [hoveredHabitId, setHoveredHabitId] = useState<string | null>(null);

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
    date: {
      fontSize: 16,
      fontFamily: 'Inter_400Regular',
      color: isDarkMode ? '#a3a3a3' : '#6b7280',
    },
    habitList: {
      flex: 1,
      padding: 16,
    },
    habitContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    habitItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isDarkMode ? 0.3 : 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    habitItemCompleted: {
      backgroundColor: isDarkMode ? '#404040' : '#f3f4f6',
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#6366f1',
      marginRight: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxCompleted: {
      backgroundColor: '#6366f1',
      borderColor: '#6366f1',
    },
    habitText: {
      fontSize: 16,
      fontFamily: 'Inter_600SemiBold',
      color: isDarkMode ? '#ffffff' : '#1f2937',
    },
    habitTextCompleted: {
      color: isDarkMode ? '#a3a3a3' : '#9ca3af',
      textDecorationLine: 'line-through',
    },
    deleteButton: {
      padding: 12,
      marginLeft: 8,
      backgroundColor: isDarkMode ? '#450a0a' : '#fee2e2',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6366f1',
      margin: 16,
      padding: 16,
      borderRadius: 12,
    },
    addButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily: 'Inter_600SemiBold',
      marginLeft: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's Habits</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
      </View>

      <ScrollView style={styles.habitList}>
        {habits.map(habit => (
          <View
            key={habit.id}
            style={[styles.habitContainer]}
            onMouseEnter={() => setHoveredHabitId(habit.id)}
            onMouseLeave={() => setHoveredHabitId(null)}
          >
            <TouchableOpacity
              style={[
                styles.habitItem,
                habit.completed && styles.habitItemCompleted
              ]}
              onPress={() => toggleHabit(habit.id)}
            >
              <View style={[styles.checkbox, habit.completed && styles.checkboxCompleted]}>
                {habit.completed && <Check size={16} color="#ffffff" />}
              </View>
              <Text style={[styles.habitText, habit.completed && styles.habitTextCompleted]}>
                {habit.name}
              </Text>
            </TouchableOpacity>
            {Platform.OS === 'web' && hoveredHabitId === habit.id && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteHabit(habit.id)}
              >
                <Trash2 size={20} color={isDarkMode ? '#ef4444' : '#dc2626'} />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Plus size={24} color="#ffffff" />
        <Text style={styles.addButtonText}>Add New Habit</Text>
      </TouchableOpacity>

      <AddHabitModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={addHabit}
      />
    </View>
  );
}