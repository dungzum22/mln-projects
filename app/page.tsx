'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Target, TrendingUp, Scale, Users, Globe, ArrowRight, MessageCircle, Sparkles, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const roadmapItems = [
    {
      id: 1,
      title: 'Khái niệm và nội dung hội nhập',
      description: 'Khái niệm, tính tất yếu khách quan và nội dung hội nhập kinh tế quốc tế',
      icon: <BookOpen className="w-8 h-8" />,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-50 to-pink-50',
      link: '/khai-niem',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Tác động hội nhập',
      description: 'Tác động tích cực và tiêu cực của hội nhập kinh tế quốc tế',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      link: '/tinh-tat-yeu',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Các quy luật kinh tế',
      description: 'Quy luật giá trị, quy luật cung - cầu và quy luật cạnh tranh',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50',
      link: '/hoan-thien-the-che',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Thực trạng Việt Nam',
      description: 'Xây dựng "Biên giới mềm" trong quá trình hội nhập kinh tế quốc tế',
      icon: <Scale className="w-8 h-8" />,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-amber-50',
      link: '/quan-he-loi-ich',
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Giải pháp hội nhập',
      description: 'Hoàn thiện thể chế, nâng cao năng lực cạnh tranh và xây dựng nền kinh tế độc lập tự chủ',
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      link: '/dac-trung',
      delay: 0.5,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-blob mix-blend-multiply" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto max-w-7xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-strong border border-purple-200"
              >
                <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                <span className="text-sm font-semibold text-purple-700">Khám phá hành trình</span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
                  <span className="text-gradient-vietnam block mb-2">
                    Việt Nam
                  </span>
                  <span className="text-gray-800 block">
                    Trên Đường
                  </span>
                  <span className="text-gradient block text-5xl md:text-7xl">
                    Toàn Cầu Hóa
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Từ <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">khái niệm</span> đến 
                {' '}<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">tác động</span> và 
                {' '}<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">giải pháp</span> - 
                khám phá hành trình phát triển bền vững của nền kinh tế Việt Nam
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link href="/khai-niem">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Bắt đầu học
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 shimmer opacity-50" />
                  </motion.button>
                </Link>

                <Link href="/game">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 glass-effect-strong rounded-2xl font-bold text-lg text-gray-700 hover:text-purple-600 border-2 border-transparent hover:border-purple-200 transition-all flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Trò chơi
                  </motion.button>
                </Link>

                <Link href="/chat">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat AI
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="glass-effect-strong rounded-3xl p-12 shadow-2xl"
                >
                  <div className="relative w-full h-96 flex items-center justify-center">
                    <Globe className="w-64 h-64 text-purple-400 animate-float" />
                    {/* Decorative circles */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 blur-xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60 blur-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-20 px-4 z-10 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-gradient">Lộ trình khám phá</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Từng bước tìm hiểu về quá trình phát triển và định vị của Việt Nam trên bản đồ kinh tế thế giới
            </p>
          </motion.div>

          {/* Roadmap Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={item.link}>
                  <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} glass-effect-strong border-2 border-transparent hover:border-purple-200 transition-all group overflow-hidden cursor-pointer`}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Number Badge */}
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center font-bold text-gray-700 text-lg">
                        {item.id}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all">
                        <span>Tìm hiểu thêm</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 z-10 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-gradient">Điểm nổi bật</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Trải nghiệm học tập hiện đại với nội dung phong phú và tương tác đa dạng
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nội dung chi tiết',
                description: 'Hệ thống kiến thức được tổ chức khoa học, dễ hiểu với minh họa trực quan',
                icon: <BookOpen className="w-12 h-12" />,
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Trò chơi tương tác',
                description: 'Học qua quiz và mini games thú vị, củng cố kiến thức một cách sinh động',
                icon: <Zap className="w-12 h-12" />,
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Giao diện hiện đại',
                description: 'Thiết kế đẹp mắt, animation mượt mà, trải nghiệm tuyệt vời trên mọi thiết bị',
                icon: <Sparkles className="w-12 h-12" />,
                gradient: 'from-green-500 to-emerald-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect-strong rounded-3xl p-8 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-xl`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
