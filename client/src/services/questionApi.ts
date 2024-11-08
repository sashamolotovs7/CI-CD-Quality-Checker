import type { Question } from '../models/Question.js';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    console.log("Calling /api/questions/random...");
    const response = await fetch('/api/questions/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    throw error;
  }
};   
