export type UserType = "AI" | "Human";

export interface Message {
  id: string;
  chatId: string;
  sender: UserType;
  text: string;
  timestamp: number;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  isAI: boolean;
} 