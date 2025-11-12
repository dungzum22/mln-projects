'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowLeft, Send, Bot, User, Sparkles, BookOpen, Wand2, Zap, Brain, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateSystemPrompt } from '@/lib/knowledge-base';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Khởi tạo Gemini AI với API key từ environment variable
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'AIzaSyCoa4Nk9o7VRzsNeWnGbB-OTCJqB-3Zj5M';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// System prompt được tạo động từ knowledge base
const SYSTEM_PROMPT = generateSystemPrompt();


export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Xin chào! 👋 

Tôi là **trợ lý AI chuyên về Hội nhập kinh tế quốc tế của Việt Nam**.

Tôi có thể giúp bạn tìm hiểu về:
- 📖 Khái niệm và nội dung hội nhập
- 🎯 Tác động tích cực và tiêu cực
- ⭐ Giải pháp hội nhập
- 🤝 Thực trạng Việt Nam và biên giới mềm
- ⚖️ Các quy luật kinh tế

Hãy đặt câu hỏi cho tôi nhé!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    const question = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      // Gọi trực tiếp Gemini API
      const prompt = `${SYSTEM_PROMPT}\n\n**Câu hỏi:** ${question}\n\n**Câu trả lời:**`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: text || 'Xin lỗi, tôi không thể tạo câu trả lời. Vui lòng thử lại.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: '⚠️ Lỗi kết nối với Gemini AI. Vui lòng thử lại sau.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    { icon: Brain, text: 'Hội nhập kinh tế quốc tế là gì?', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, text: 'Tác động của hội nhập kinh tế quốc tế?', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, text: 'Giải pháp hội nhập của Việt Nam?', color: 'from-orange-500 to-red-500' },
    { icon: Wand2, text: 'Biên giới mềm là gì?', color: 'from-green-500 to-emerald-500' },
  ];

  const handleSuggestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 px-4 shadow-2xl sticky top-0 z-20"
      >
        <div className="container mx-auto max-w-5xl">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/30">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </motion.div>
            </motion.div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-black flex items-center gap-3 mb-2"
              >
                Chat với AI
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/90 font-medium text-lg"
              >
                Trợ lý AI chuyên về Hội nhập kinh tế quốc tế của Việt Nam
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-8 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl space-y-6">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring' }}
                    className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                  >
                    <Bot size={24} />
                  </motion.div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`max-w-[85%] md:max-w-[75%] rounded-3xl p-6 shadow-xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white'
                      : 'glass-effect-strong border-2 border-white/50'
                  }`}
                >
                  <div className="prose prose-sm max-w-none">
                    {message.content.split('\n').map((line, i) => {
                      // Render markdown-like formatting
                      if (line.startsWith('###')) {
                        return (
                          <h3 key={i} className={`text-lg font-bold mt-4 mb-2 ${
                            message.role === 'user' ? 'text-white' : 'text-indigo-700'
                          }`}>
                            {line.replace('###', '').trim()}
                          </h3>
                        );
                      }
                      if (line.startsWith('##')) {
                        return (
                          <h2 key={i} className={`text-xl font-bold mt-4 mb-3 ${
                            message.role === 'user' ? 'text-white' : 'text-indigo-700'
                          }`}>
                            {line.replace('##', '').trim()}
                          </h2>
                        );
                      }
                      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
                        const content = line.trim().substring(2);
                        return (
                          <li key={i} className={`ml-4 mb-2 ${
                            message.role === 'user' ? 'text-white/90' : 'text-gray-700'
                          }`}>
                            {content.split('**').map((part, j) => 
                              j % 2 === 1 ? (
                                <strong key={j} className={`font-bold ${
                                  message.role === 'user' ? 'text-white' : 'text-indigo-600'
                                }`}>
                                  {part}
                                </strong>
                              ) : part
                            )}
                          </li>
                        );
                      }
                      if (line.match(/^[0-9]+\./)) {
                        const content = line.replace(/^[0-9]+\./, '').trim();
                        return (
                          <li key={i} className={`ml-4 font-semibold mb-2 ${
                            message.role === 'user' ? 'text-white/90' : 'text-gray-700'
                          }`}>
                            {content.split('**').map((part, j) => 
                              j % 2 === 1 ? (
                                <strong key={j} className={`font-bold ${
                                  message.role === 'user' ? 'text-white' : 'text-indigo-600'
                                }`}>
                                  {part}
                                </strong>
                              ) : part
                            )}
                          </li>
                        );
                      }
                      if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <p key={i} className={`mb-2 ${
                            message.role === 'user' ? 'text-white' : 'text-gray-700'
                          }`}>
                            {parts.map((part, j) => 
                              j % 2 === 1 ? (
                                <strong key={j} className={`font-bold ${
                                  message.role === 'user' ? 'text-white' : 'text-indigo-600'
                                }`}>
                                  {part}
                                </strong>
                              ) : part
                            )}
                          </p>
                        );
                      }
                      if (line.trim()) {
                        return (
                          <p key={i} className={`mb-2 leading-relaxed ${
                            message.role === 'user' ? 'text-white' : 'text-gray-700'
                          }`}>
                            {line}
                          </p>
                        );
                      }
                      return <br key={i} />;
                    })}
                  </div>
                </motion.div>

                {message.role === 'user' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring' }}
                    className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                  >
                    <User size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Bot size={24} />
              </div>
              <div className="glass-effect-strong rounded-3xl p-6 border-2 border-white/50">
                <div className="flex gap-2">
                  <motion.div
                    className="w-3 h-3 bg-indigo-500 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-purple-500 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-pink-500 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="px-4 pb-4 relative z-10"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold">
              <BookOpen size={20} className="text-indigo-600" />
              <span className="text-lg">Gợi ý câu hỏi:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedQuestions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSuggestionClick(item.text)}
                    className="text-left p-5 glass-effect-strong rounded-2xl border-2 border-indigo-200/50 hover:border-indigo-400 hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium flex-1 pt-2">{item.text}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Input Box */}
      <div className="sticky bottom-0 bg-white/80 backdrop-blur-xl border-t-2 border-gray-200/50 shadow-2xl px-4 py-6 z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập câu hỏi của bạn về hội nhập kinh tế quốc tế của Việt Nam..."
                className="w-full px-6 py-4 pr-14 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 resize-none bg-white text-gray-800 placeholder-gray-400 text-base shadow-lg transition-all"
                rows={1}
                style={{ minHeight: '64px', maxHeight: '150px' }}
              />
              <div className="absolute right-4 bottom-4 text-xs text-gray-400">
                Enter để gửi, Shift+Enter để xuống dòng
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`px-8 py-4 rounded-2xl font-bold shadow-xl transition-all flex items-center gap-3 ${
                input.trim() && !isLoading
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/50'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send size={22} />
              <span className="hidden md:inline">Gửi</span>
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center font-medium">
            🤖 AI chỉ trả lời câu hỏi về Hội nhập kinh tế quốc tế của Việt Nam
          </p>
        </div>
      </div>
    </div>
  );
}
