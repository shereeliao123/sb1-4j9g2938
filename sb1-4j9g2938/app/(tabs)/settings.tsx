import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Bell, Moon, Sun } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your experience</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Bell size={24} color="#6366f1" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Notifications</Text>
                <Text style={styles.settingDesc}>Get daily reminders</Text>
              </View>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={notifications ? '#6366f1' : '#f3f4f6'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              {darkMode ? (
                <Moon size={24} color="#6366f1" />
              ) : (
                <Sun size={24} color="#6366f1" />
              )}
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingDesc}>Toggle dark theme</Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={darkMode ? '#6366f1' : '#f3f4f6'}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.dangerButton}>
          <Text style={styles.dangerButtonText}>Reset All Habits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#6b7280',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 12,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1f2937',
  },
  settingDesc: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#6b7280',
  },
  dangerButton: {
    backgroundColor: '#fee2e2',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  dangerButtonText: {
    color: '#dc2626',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});