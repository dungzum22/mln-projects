'use client';

import { motion } from 'framer-motion';
import { Scale, ArrowLeft, ArrowRight, DollarSign, TrendingUp, Target, Link2 } from 'lucide-react';
import Link from 'next/link';
import { BalanceIllustration } from '@/components/Illustrations';

export default function HoanThienTheChe() {
  const valueLawContent = [
    {
      title: 'Khái niệm',
      content: 'Quy luật giá trị là quy luật kinh tế cơ bản của sản xuất và lưu thông hàng hoá, đòi hỏi việc sản xuất và trao đổi hàng hoá phải dựa trên cơ sở hao phí lao động xã hội cần thiết. Nói cách khác, giá trị hàng hoá được quyết định bởi lượng lao động xã hội cần thiết để sản xuất ra hàng hoá đó trong điều kiện sản xuất bình thường với trình độ kỹ thuật, năng suất lao động trung bình.',
    },
    {
      title: 'Nội dung của quy luật giá trị',
      items: [
        'Trong sản xuất: Người sản xuất phải tổ chức sản xuất sao cho hao phí lao động cá biệt ≤ hao phí lao động xã hội cần thiết',
        'Trong lưu thông: Hàng hoá phải trao đổi theo nguyên tắc ngang giá, tức là trao đổi giá trị này lấy giá trị khác tương đương',
      ],
    },
    {
      title: 'Tác động của quy luật giá trị',
      items: [
        'Điều tiết sản xuất và lưu thông hàng hoá: Giá cả tăng khuyến khích sản xuất mặt hàng đó; giá giảm làm thu hẹp sản xuất – qua đó điều tiết cân đối cung cầu',
        'Kích thích cải tiến kỹ thuật, hợp lý hóa sản xuất, làm tăng năng suất lao động để giảm hao phí lao động cá biệt',
        'Phân hóa người sản xuất hàng hoá: Những người có chi phí thấp thu được lợi nhuận cao, mở rộng sản xuất; người sản xuất kém hiệu quả bị thua lỗ, phá sản',
      ],
    },
    {
      title: 'Vai trò của quy luật giá trị trong nền kinh tế thị trường định hướng XHCN ở Việt Nam',
      items: [
        'Là cơ sở hình thành giá cả thị trường và cạnh tranh lành mạnh',
        'Thúc đẩy ứng dụng khoa học – công nghệ, nâng cao hiệu quả sản xuất kinh doanh',
        'Tuy nhiên, Nhà nước cần điều tiết, quản lý giá để hạn chế mặt trái như đầu cơ, độc quyền, hay phân hoá giàu nghèo',
      ],
    },
  ];

  const supplyDemandLaw = {
    title: 'Quy luật cung – cầu',
    content: 'Quy luật cung – cầu phản ánh mối quan hệ giữa lượng hàng hoá được cung ứng và nhu cầu mua hàng hoá trên thị trường, là yếu tố chủ yếu quyết định giá cả thị trường.',
    impacts: [
      'Khi cầu > cung, giá hàng hoá tăng → khuyến khích mở rộng sản xuất',
      'Khi cung > cầu, giá giảm → sản xuất bị thu hẹp',
      'Thị trường luôn vận động hướng đến điểm cân bằng cung – cầu',
    ],
    meaning: 'Giúp phân bổ nguồn lực hiệu quả hơn, tuy nhiên cần sự điều tiết của Nhà nước để tránh mất cân đối, bong bóng giá, hay khủng hoảng thừa.',
  };

  const competitionLaw = {
    title: 'Quy luật cạnh tranh',
    content: 'Là quy luật kinh tế thể hiện sự ganh đua giữa các chủ thể kinh tế trong sản xuất, lưu thông, nhằm giành lợi nhuận cao nhất, thị trường tiêu thụ rộng nhất, và điều kiện thuận lợi nhất.',
    forms: [
      'Cạnh tranh giữa người bán với người bán, người mua với người mua, người bán với người mua',
      'Cạnh tranh có thể là lành mạnh (theo năng lực, chất lượng, giá cả) hoặc không lành mạnh (độc quyền, thao túng thị trường)',
    ],
    role: [
      'Thúc đẩy tiến bộ kỹ thuật, tăng năng suất, giảm giá thành',
      'Loại bỏ doanh nghiệp yếu kém, tạo động lực phát triển',
      'Tuy nhiên, nếu thiếu kiểm soát, cạnh tranh có thể dẫn đến độc quyền, gian lận, ô nhiễm môi trường',
    ],
  };

  const relationship = {
    title: 'Mối quan hệ giữa quy luật giá trị – cung cầu – cạnh tranh',
    content: 'Ba quy luật này có mối liên hệ chặt chẽ:',
    points: [
      'Quy luật giá trị là cơ sở chung, quyết định sự vận động của giá cả',
      'Quy luật cung – cầu điều tiết sự biến động giá cả quanh giá trị hàng hoá',
      'Quy luật cạnh tranh là động lực buộc các chủ thể điều chỉnh sản xuất, hạ chi phí, cải tiến kỹ thuật – qua đó củng cố và phát triển quan hệ hàng hoá – tiền tệ',
    ],
  };

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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Các quy luật kinh tế
              </h1>
              <p className="text-gray-600 mt-1">
                Quy luật giá trị, quy luật cung – cầu và quy luật cạnh tranh
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
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Các quy luật kinh tế cơ bản như <span className="font-semibold text-indigo-600">quy luật giá trị, quy luật cung – cầu và quy luật cạnh tranh</span> đóng vai trò quan trọng trong việc điều tiết nền kinh tế thị trường và có mối quan hệ chặt chẽ với nhau.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6 flex items-center justify-center">
              <BalanceIllustration />
            </div>
          </div>
        </motion.div>

        {/* Value Law Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                Quy luật giá trị
              </h2>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {valueLawContent.map((section, index) => (
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
                {section.content && (
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                )}
                {section.items && (
                  <div className="space-y-3 mt-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                          {itemIndex + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supply-Demand Law Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                Quy luật cung – cầu và quy luật cạnh tranh
              </h2>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Supply-Demand Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quy luật cung – cầu
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-blue-600">Khái niệm:</span> {supplyDemandLaw.content}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tác động:</h4>
                <div className="space-y-2">
                  {supplyDemandLaw.impacts.map((impact, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{impact}</p>
                  </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">Ý nghĩa:</span> {supplyDemandLaw.meaning}
              </p>
            </motion.div>

            {/* Competition Law */}
                    <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
              className="p-5 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quy luật cạnh tranh
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-purple-600">Khái niệm:</span> {competitionLaw.content}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Các hình thức cạnh tranh:</h4>
                <div className="space-y-2">
                  {competitionLaw.forms.map((form, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{form}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Vai trò:</h4>
                <div className="space-y-2">
                  {competitionLaw.role.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                  ))}
                  </div>
              </div>
            </motion.div>

            {/* Relationship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
              className="p-5 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl border-2 border-indigo-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Link2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {relationship.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{relationship.content}</p>
                  <div className="space-y-3">
                    {relationship.points.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
            </div>
            </div>
            </motion.div>
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
            Ba quy luật kinh tế này có <span className="font-semibold text-indigo-600">mối liên hệ chặt chẽ</span> và cùng nhau điều tiết nền kinh tế thị trường. Việt Nam cần vận dụng các quy luật này một cách khoa học, đồng thời có sự điều tiết của Nhà nước để phát huy mặt tích cực, hạn chế mặt tiêu cực, phục vụ phát triển kinh tế – xã hội bền vững.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/tinh-tat-yeu">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Tác động hội nhập
            </motion.button>
          </Link>

          <Link href="/quan-he-loi-ich">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Thực trạng Việt Nam
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
