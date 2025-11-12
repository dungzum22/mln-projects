'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb, CheckCircle, Globe2, Target, Circle } from 'lucide-react';
import Link from 'next/link';
import { BookIllustration } from '@/components/Illustrations';

export default function KhaiNiem() {
  const necessityPoints = [
    'Toàn cầu hóa diễn ra trên nhiều phương diện (kinh tế, chính trị, văn hóa, xã hội...) nhưng toàn cầu hóa kinh tế là sự thể hiện nổi bật',
    'Toàn cầu hóa kinh tế vừa là xu hướng vận động vừa là công cụ để thống lĩnh thị trường của các nền kinh tế',
    'Quá trình này đòi hỏi các quốc gia phải tăng cường hợp tác để giải quyết các vấn đề chung',
    'Hội nhập kinh tế quốc tế là cách thức hiệu quả để các quốc gia tham gia vào quá trình toàn cầu hóa một cách chủ động và có trách nhiệm',
  ];

  const contentPoints = [
    {
      title: 'Chuẩn bị các điều kiện để thực hiện hội nhập hiệu quả',
      items: [
        'Hội nhập là tất yếu, nhưng không phải bằng mọi giá',
        'Quá trình hội nhập phải được cân nhắc với lợi ích và cách thức tối ưu',
        'Đòi hỏi phải có sự chuẩn bị các điều kiện trong nội bộ nền kinh tế cũng như các mối quan hệ quốc tế thích hợp',
        'Các điều kiện chủ yếu: sự suy tư, sự tham gia của toàn xã hội, sự hiểu biết về hội nhập, nguồn nhân lực và an ninh hiểu mối tương tác giữa an ninh kinh tế và an ninh quốc gia',
      ],
    },
    {
      title: 'Thực hiện đa dạng các hình thức, các mức độ hội nhập',
      mainItems: [
        'Hội nhập kinh tế quốc tế có thể diễn ra theo nhiều mức độ (nông, sâu)',
        'Tùy vào mức độ tham gia của một nước vào các quan hệ kinh tế đối ngoại',
        'Theo tiến trình, hội nhập được chia thành các mức độ từ thấp đến cao:',
      ],
      subItems: [
        'Liên kết song phương',
        'Khu vực mậu dịch tự do (FTA)',
        'Khu vực mậu dịch ưu đãi (PTA)',
        'Liên minh thuế quan (CU)',
        '... (và các mức độ cao hơn)',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
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
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Khái niệm và nội dung
              </h1>
              <p className="text-gray-600 mt-1">
                Hội nhập kinh tế quốc tế của Việt Nam
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Definition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Khái niệm</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-indigo-600">Hội nhập kinh tế quốc tế</span> của mỗi quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6">
                <BookIllustration />
              </div>
            </div>
          </motion.div>

          {/* Necessity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Tính tất yếu khách quan của hội nhập kinh tế quốc tế
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-3">Trong bối cảnh toàn cầu hóa kinh tế:</h3>
                    <div className="space-y-3">
                      {necessityPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl mt-4">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Tóm lại:</span> Hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của các nước, nhất là các nước đang và kém phát triển trong điều kiện hiện nay.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl mt-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Đối với các nước đang và kém phát triển:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Hội nhập kinh tế quốc tế là cơ hội để tiếp cận và sử dụng các nguồn lực bên ngoài như tài chính, khoa học công nghệ, kinh nghiệm quản lý của các nước phát triển nhằm đẩy nhanh quá trình công nghiệp hóa, hiện đại hóa. Đồng thời, nó tạo ra sức ép cạnh tranh buộc các nước này phải cải cách chính sách kinh tế và nâng cao năng lực cạnh tranh quốc gia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Nội dung hội nhập kinh tế quốc tế
                </h2>
                <div className="space-y-6">
                  {contentPoints.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl"
                    >
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        Thứ {index + 1 === 1 ? 'nhất' : 'hai'}, {section.title}
                      </h3>
                      <div className="space-y-3">
                        {/* Main items */}
                        {section.items && section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed flex-1">{item}</p>
                          </div>
                        ))}
                        
                        {/* Main items with sub-items */}
                        {section.mainItems && section.mainItems.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed flex-1">{item}</p>
                          </div>
                        ))}
                        
                        {/* Sub-items (nested list) */}
                        {section.subItems && (
                          <div className="ml-8 space-y-2 mt-2">
                            {section.subItems.map((subItem, subIndex) => (
                              <div key={subIndex} className="flex items-start gap-2">
                                <Circle className="w-1.5 h-1.5 text-indigo-600 fill-indigo-600 mt-2.5 flex-shrink-0" />
                                <p className="text-gray-700 leading-relaxed text-sm">{subItem}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Trang chủ
            </motion.button>
          </Link>

          <Link href="/tinh-tat-yeu">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Tác động hội nhập
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
