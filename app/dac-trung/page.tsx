'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowLeft, ArrowRight, Target, Globe2, Scale, Building2, Award, Shield } from 'lucide-react';
import Link from 'next/link';
import { ChartIllustration } from '@/components/Illustrations';

export default function DacTrung() {
  const integrationProcess = [
    {
      title: 'Quan hệ ngoại giao và thương mại',
      items: [
        'Việt Nam đã thiết lập quan hệ ngoại giao với hơn 170 quốc gia',
        'Mở rộng thương mại tới hơn 230 thị trường',
        'Ký kết nhiều hiệp định song phương: trên 90 hiệp định thương mại, gần 60 hiệp định bảo hộ đầu tư, 54 hiệp định chống đánh thuế hai lần',
      ],
    },
    {
      title: 'Các mốc quan trọng trong tiến trình hội nhập',
      items: [
        '1995: Gia nhập ASEAN',
        '1996: Tham gia AFTA và là sáng lập viên ASEM',
        '1998: Gia nhập APEC',
        '2007: Trở thành thành viên WTO',
      ],
    },
  ];

  const commitments = [
    'Việt Nam thực hiện đầy đủ và nghiêm túc các cam kết trong khuôn khổ WTO, ASEAN, APEC…',
    'Cải cách chính sách thương mại theo hướng minh bạch, tự do hóa; mở cửa thị trường hàng hóa, dịch vụ và đầu tư',
    'Hoàn thành lộ trình cắt giảm thuế quan theo WTO từ năm 2014, ban hành các biểu thuế ưu đãi theo các FTA',
    'Tiếp tục thực hiện các cam kết lớn giai đoạn 2015–2020: Xây dựng Cộng đồng ASEAN, tầm nhìn ASEAN 2025; Hoàn tất các nghĩa vụ WTO (đến 31/12/2018); Hướng tới các mục tiêu tự do hóa của APEC',
  ];

  const institutionalReforms = [
    {
      title: 'Hoàn thiện cơ chế thị trường',
      items: [
        'Coi trọng khu vực tư nhân, đổi mới doanh nghiệp nhà nước',
        'Đổi mới cơ chế quản lý nhà nước theo hướng minh bạch, hỗ trợ, giám sát đúng chức năng',
      ],
    },
    {
      title: 'Cải cách hành chính và chính sách',
      items: [
        'Cải cách hành chính, chính sách đầu tư – kinh doanh, tạo môi trường thông thoáng để thu hút đầu tư trong và ngoài nước',
        'Rà soát, hoàn thiện hệ thống pháp luật, đặc biệt là các luật về đất đai, đầu tư, thương mại, thuế, tài chính, doanh nghiệp…',
      ],
    },
    {
      title: 'Phòng ngừa và xử lý tranh chấp',
      items: [
        'Phòng ngừa và xử lý tranh chấp quốc tế thông qua hoàn thiện pháp luật tương trợ tư pháp phù hợp với chuẩn mực quốc tế',
      ],
    },
  ];

  const competitivenessMeasures = [
    {
      title: 'Đối với doanh nghiệp',
      items: [
        'Đổi mới công nghệ, quản trị, tư duy kinh doanh',
        'Học hỏi các kỹ năng như tìm kiếm cơ hội, huy động vốn, quản trị rủi ro và hợp tác cùng chính phủ',
      ],
    },
    {
      title: 'Đối với Nhà nước',
      items: [
        'Đầu tư vào nguồn nhân lực chất lượng cao gắn với nhu cầu doanh nghiệp',
        'Phát triển hạ tầng giao thông, thông tin và dịch vụ',
        'Giảm chi phí sản xuất, thu hút vốn và công nghệ mới',
        'Nâng cao năng suất lao động, tăng khả năng cạnh tranh trên thị trường quốc tế',
      ],
    },
  ];

  const independenceMeasures = [
    {
      title: 'Hoàn thiện đường lối phát triển',
      description: 'Hoàn thiện đường lối phát triển đất nước',
    },
    {
      title: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa',
      description: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa, tái cấu trúc kinh tế, đa dạng hóa thị trường và đối tác, đầu tư cho đổi mới công nghệ',
    },
    {
      title: 'Mở rộng quan hệ kinh tế đối ngoại',
      description: 'Mở rộng quan hệ kinh tế đối ngoại, ký kết FTA thế hệ mới, huy động nguồn lực cho ba đột phá chiến lược: thể chế, hạ tầng, nhân lực',
    },
    {
      title: 'Tăng cường năng lực cạnh tranh',
      description: 'Tăng cường năng lực cạnh tranh thông qua thể chế minh bạch, ứng dụng khoa học - công nghệ và đào tạo nhân lực chất lượng cao',
    },
    {
      title: 'Kết hợp kinh tế với quốc phòng, an ninh',
      description: 'Kết hợp kinh tế với quốc phòng, an ninh và đối ngoại, đảm bảo nguyên tắc bình đẳng, cùng có lợi, giữ vững bản sắc văn hóa dân tộc',
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
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Giải pháp hội nhập
              </h1>
              <p className="text-gray-600 mt-1">
                Hoàn thiện thể chế, nâng cao năng lực cạnh tranh và xây dựng nền kinh tế độc lập tự chủ
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
                Để hội nhập kinh tế quốc tế hiệu quả, Việt Nam cần thực hiện <span className="font-semibold text-indigo-600">nhiều giải pháp đồng bộ</span> từ hoàn thiện thể chế, nâng cao năng lực cạnh tranh đến xây dựng nền kinh tế độc lập tự chủ.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6">
              <ChartIllustration />
            </div>
          </div>
        </motion.div>

        {/* Integration Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                Quá trình hội nhập quốc tế của Việt Nam
              </h2>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {integrationProcess.map((section, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
                className="p-5 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                        {itemIndex + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
                <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">
                Thực hiện cam kết quốc tế
                  </h2>
                </div>
              </div>

              <div className="p-6">
            <div className="space-y-3">
              {commitments.map((commitment, index) => (
                    <motion.div
                  key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{commitment}</p>
                    </motion.div>
                  ))}
                </div>
          </div>
        </motion.div>

        {/* Institutional Reforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                Hoàn thiện thể chế kinh tế và pháp luật
              </h2>
            </div>
                  </div>

          <div className="p-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hội nhập đòi hỏi thể chế kinh tế tương thích với các nước khác. Việt Nam phát triển kinh tế thị trường định hướng XHCN, khác về định hướng chính trị nhưng không cản trở hội nhập.
            </p>
            <div className="space-y-6">
              {institutionalReforms.map((reform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-purple-100"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {reform.title}
                  </h3>
                  <div className="space-y-2">
                    {reform.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                          {itemIndex + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Competitiveness Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế
              </h2>
            </div>
                  </div>

          <div className="p-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hiệu quả hội nhập kinh tế phụ thuộc lớn vào năng lực cạnh tranh quốc gia và doanh nghiệp. Việt Nam hiện còn yếu về công nghệ, hạ tầng, nguồn nhân lực và quy mô đầu tư, làm giảm khả năng cạnh tranh toàn cầu.
            </p>
            <div className="space-y-6">
              {competitivenessMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-green-100"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {measure.title}
                  </h3>
                  <div className="space-y-2">
                    {measure.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                          {itemIndex + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Independence Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-violet-500 to-pink-600 p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                Xây dựng nền kinh tế độc lập, tự chủ của Việt Nam
              </h2>
            </div>
          </div>

          <div className="p-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Xây dựng nền kinh tế độc lập, tự chủ là yêu cầu tất yếu để bảo đảm chủ quyền chính trị, phát triển bền vững và hội nhập hiệu quả. Một nền kinh tế độc lập tự chủ là nền kinh tế không phụ thuộc vào nước ngoài về đường lối, chính sách, tài chính hay công nghệ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Đảng Cộng sản Việt Nam luôn xác định xây dựng nền kinh tế độc lập tự chủ phải đi đôi với chủ động hội nhập quốc tế, phát huy nội lực, đồng thời tận dụng ngoại lực để phát triển nhanh và bền vững.
            </p>
            <div className="space-y-4">
              {independenceMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {measure.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {measure.description}
                      </p>
                    </div>
              </div>
            </motion.div>
          ))}
        </div>
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-indigo-200">
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế là biện chứng và hỗ trợ lẫn nhau: có độc lập tự chủ mới hội nhập hiệu quả, tránh 'hòa tan'; hội nhập sâu rộng giúp củng cố độc lập, nâng cao vị thế quốc gia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trong hơn 30 năm đổi mới, Việt Nam đã tăng cường quan hệ với hơn 180 quốc gia, ký nhiều FTA thế hệ mới (TPP, EVFTA...), mở rộng vai trò quốc tế, khẳng định vị thế độc lập, tự chủ và năng lực cạnh tranh quốc gia.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-green-50 to-emerald-50"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Kết luận</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Việt Nam cần thực hiện <span className="font-semibold text-indigo-600">đồng bộ các giải pháp</span> từ hoàn thiện thể chế, nâng cao năng lực cạnh tranh đến xây dựng nền kinh tế độc lập tự chủ để hội nhập kinh tế quốc tế hiệu quả, bền vững và phát triển. Các giải pháp này có mối quan hệ chặt chẽ, hỗ trợ lẫn nhau và cần được thực hiện một cách toàn diện, có hệ thống.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/quan-he-loi-ich">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Thực trạng Việt Nam
            </motion.button>
          </Link>

          <Link href="/game">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Thử thách với trò chơi! 🎮
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
