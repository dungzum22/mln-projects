'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Info, Brain, BookOpenText, Layers, Users, Sparkles, Code2, FileText, Zap, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function VeDuAn() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div />;
  }

  const aiTools = [
    { name: 'GPT', desc: 'OpenAI', color: 'from-green-500 to-emerald-500', icon: Brain },
    { name: 'AI', desc: 'Trí tuệ nhân tạo', color: 'from-blue-500 to-cyan-500', icon: Zap },
    { name: 'Gemini', desc: 'Google AI', color: 'from-orange-500 to-red-500', icon: Sparkles },
  ];

  const teamMembers = [
    'Nguyễn Phan Trong Tín',
    'Nguyễn Công Trí',
    'Trần Ngọc Hiếu',
    'Nguyễn Thành Kinh',
    'Nguyễn Anh Dũng',
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 mb-6 transition-colors font-medium group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center text-white shadow-2xl transform rotate-3 hover:rotate-6 transition-transform">
                <Info className="w-10 h-10" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </motion.div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-black text-gradient mb-2"
              >
                Thông tin dự án
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 font-medium"
              >
                Tìm hiểu về công nghệ, AI, tài liệu và nhóm phát triển
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* AI sử dụng */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-effect-strong rounded-2xl p-6 border-2 border-indigo-200/50 hover:border-indigo-400 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Brain className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">AI đã sử dụng</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Sử dụng <span className="font-bold text-indigo-600">Google Gemini 2.5 Flash</span> thông qua thư viện <code className="px-2 py-1 bg-indigo-100 rounded text-sm font-mono">@google/generative-ai</code> cho trang <span className="font-semibold">Chat AI</span>.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  AI được dùng như <span className="font-bold">công cụ hỗ trợ</span> để trả lời câu hỏi về hội nhập kinh tế quốc tế, <span className="font-bold">không thay thế</span> việc biên soạn và kiểm chứng của nhóm.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tài liệu tham khảo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-effect-strong rounded-2xl p-6 border-2 border-blue-200/50 hover:border-blue-400 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <BookOpenText className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Tài liệu tham khảo</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Tổng hợp từ giáo trình và tài liệu học phần về <span className="font-semibold">Hội nhập kinh tế quốc tế của Việt Nam</span>.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Văn kiện, nghị quyết và tài liệu chính thức của Đảng và Nhà nước liên quan đến hội nhập kinh tế quốc tế.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Công nghệ AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect-strong rounded-2xl p-6 mb-8 border-2 border-purple-200/50"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Brain className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Công nghệ AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all cursor-default"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg mx-auto`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-center text-xl">{tool.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{tool.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Nhóm thực hiện */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect-strong rounded-2xl p-6 border-2 border-green-200/50"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Nhóm thực hiện</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3 shadow-lg">
                  {member.charAt(member.lastIndexOf(' ') + 1)}
                </div>
                <h3 className="font-bold text-gray-800">{member}</h3>
              </motion.div>
            ))}
          </div>
          <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-indigo-200">
            <p className="text-gray-700 leading-relaxed">
              Dự án <span className="font-bold text-indigo-600">không hoàn toàn phụ thuộc vào AI</span>. Nội dung được tổng hợp, biên soạn và kiểm chứng bởi nhóm; AI chỉ đóng vai trò hỗ trợ trong quá trình trả lời câu hỏi về hội nhập kinh tế quốc tế.
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Dự án được phát triển với ❤️ bởi nhóm sinh viên
          </p>
        </motion.div>
      </div>
    </div>
  );
}
