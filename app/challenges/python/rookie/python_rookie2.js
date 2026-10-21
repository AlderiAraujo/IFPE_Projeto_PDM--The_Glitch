import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChallengeCard from '../../../components/ChallengeCard';

export default function ChallengeScreen() {
  const { language, level } = useLocalSearchParams();
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const challenges = {
    python: {
      2: {
        question: "Qual será a saída?\n\nprint(len([1,2,3]))",
        options: ["2", "3", "Error", "None"],
        correct: "3"
      }
    }
  };

  const challenge = challenges[language]?.[level];

  if (!challenge) {
    return <Text>Desafio não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Linguagem: {language} | Nível: {level}
      </Text>
      <Text style={styles.timer}>⏳ Tempo restante: {timeLeft}s</Text>
      <ChallengeCard challenge={challenge} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  header: { fontSize:18, fontWeight:'bold', marginBottom:10 },
  timer: { fontSize:16, marginBottom:20 }
});
