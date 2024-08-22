import { Component } from '@angular/core';
import { ChatbotService } from '../Services/chatbot.service';

interface Message {
  sender: 'client' | 'chatbot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    const message: Message = { sender: 'client', text: this.newMessage };
    this.messages.push(message);

    this.chatbotService.getAnswer(this.newMessage).subscribe(response => {
      const botMessage: Message = { sender: 'chatbot', text: response };
      this.messages.push(botMessage);
    });

    this.newMessage = '';
  }
}
