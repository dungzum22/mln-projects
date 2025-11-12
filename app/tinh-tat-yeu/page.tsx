'use client';

import { motion } from 'framer-motion';
import { Target, ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { EconomyIllustration } from '@/components/Illustrations';

export default function TinhTatYeu() {
  const positiveImpacts = [
    {
      title: 'Thúc đẩy phát triển lực lượng sản xuất',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      points: [
        'Tạo điều kiện mở rộng thị trường, tiếp thu KHCN, vốn, chuyển dịch cơ cấu kinh tế',
        'Nâng cao năng lực sản xuất, tăng trưởng nhanh, bền vững, chuyển đổi mô hình tăng trưởng hiệu quả cao',
      ],
    },
    {
      title: 'Thúc đẩy phân công lao động quốc tế và hợp tác kinh tế',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      points: [
        'Thúc đẩy chuyển dịch cơ cấu ngành và hiện đại hóa sản xuất, nâng cao năng lực cạnh tranh của nền kinh tế',
        'Đồng thời tăng khả năng thu hút công nghệ hiện đại và đầu tư nước ngoài',
      ],
    },
    {
      title: 'Cải thiện đời sống và nâng cao chất lượng nguồn nhân lực',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600',
      points: [
        'Tiếp cận hàng hóa, dịch vụ chất lượng cao với giá cạnh tranh',
        'Tạo việc làm và nâng cao trình độ công nghệ trong quản lý',
      ],
    },
    {
      title: 'Thúc đẩy hội nhập văn hóa, chính trị, an ninh quốc phòng',
      icon: <Target className="w-6 h-6" />,
      color: 'from-violet-500 to-pink-600',
      points: [
        'Giao lưu văn hóa, nâng cao vị thế quốc gia, giữ gìn bản sắc dân tộc',
        'Tạo môi trường ổn định để xây dựng nhà nước pháp quyền XHCN, dân chủ, văn minh',
        'Tăng cường đoàn kết quốc tế, đấu tranh chống tội phạm xuyên quốc gia, bảo vệ hòa bình',
      ],
    },
    {
      title: 'Tạo điều kiện cải cách thể chế, chính sách',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-600',
      points: [
        'Hoàn thiện hệ thống pháp luật, cơ chế quản lý, chiến lược phát triển phù hợp chuẩn mực quốc tế',
      ],
    },
  ];

  const negativeImpacts = [
    {
      title: 'Gia tăng cạnh tranh gay gắt',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-red-500 to-orange-600',
      points: [
        'Nhiều doanh nghiệp và ngành kinh tế trong nước gặp khó khăn, phá sản',
        'Dẫn đến thất nghiệp, bất ổn kinh tế - xã hội',
      ],
    },
    {
      title: 'Gia tăng sự phụ thuộc kinh tế - văn hóa - xã hội vào bên ngoài và các vấn đề xã hội xuyên quốc gia',
      icon: <XCircle className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      points: [
        'Dễ tổn thương trước biến động toàn cầu',
        'Gia tăng các rủi ro như xâm lấn văn hóa, buôn lậu, tội phạm xuyên quốc gia và nhập cư trái phép',
      ],
    },
    {
      title: 'Gia tăng phân hóa giàu nghèo, bất bình đẳng xã hội và suy thoái tài nguyên, ô nhiễm môi trường',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-red-600 to-pink-600',
      points: [
        'Lợi ích và rủi ro phân bổ không đồng đều làm gia tăng khoảng cách giàu nghèo',
        'Chạy theo tăng trưởng nhanh dẫn đến khai thác cạn kiệt tài nguyên và hủy hoại môi trường',
      ],
    },
    {
      title: 'Thách thức đối với quyền lực nhà nước và an ninh quốc gia',
      icon: <XCircle className="w-6 h-6" />,
      color: 'from-pink-500 to-red-600',
      points: [
        'Xâm phạm chủ quyền, can thiệp nội bộ',
        'Đe dọa an ninh chính trị, văn hóa, kinh tế',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Tác động hội nhập
              </h1>
              <p className="text-gray-600 mt-1">
                Tác động tích cực và tiêu cực của hội nhập kinh tế quốc tế
              </p>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hội nhập kinh tế quốc tế mang lại <span className="font-semibold text-indigo-600">lợi ích to lớn</span> cho các nước, nhà sản xuất và người tiêu dùng, đồng thời cũng tạo ra những <span className="font-semibold text-red-600">thách thức và rủi ro</span> không nhỏ.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6">
              <EconomyIllustration />
            </div>
          </div>
        </motion.div>

        {/* Positive Impacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Tác động tích cực
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {positiveImpacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-green-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${impact.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {impact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {impact.title}
                      </h3>
                      <div className="space-y-2">
                        {impact.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Negative Impacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Tác động tiêu cực
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {negativeImpacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl border border-red-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${impact.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {impact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {impact.title}
                      </h3>
                      <div className="space-y-2">
                        {impact.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Kết luận</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hội nhập kinh tế quốc tế là <span className="font-semibold text-indigo-600">quá trình tất yếu và phức tạp</span>, đòi hỏi các quốc gia phải có chiến lược phù hợp để tận dụng tối đa các cơ hội, đồng thời giảm thiểu các rủi ro và thách thức. Việt Nam cần chủ động, tích cực tham gia hội nhập một cách có trách nhiệm, bảo vệ lợi ích quốc gia và phát triển bền vững.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/khai-niem">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Khái niệm và nội dung
            </motion.button>
          </Link>

          <Link href="/hoan-thien-the-che">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Các quy luật kinh tế
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
