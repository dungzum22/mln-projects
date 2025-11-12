'use client';

import { motion } from 'framer-motion';
import { Globe2, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, MapPin, Building2, Trophy, Camera } from 'lucide-react';
import Link from 'next/link';
import { TeamworkIllustration } from '@/components/Illustrations';

export default function QuanHeLoiIch() {
  const achievements = [
    {
      title: 'Trong lĩnh vực văn hóa và ngoại giao',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        'Ngoại giao văn hóa được đẩy mạnh với phương châm "Việt Nam là bạn, là đối tác tin cậy, là thành viên có trách nhiệm của cộng đồng quốc tế"',
        'Nhiều di sản văn hóa vật thể và phi vật thể của Việt Nam được UNESCO công nhận: Nhã nhạc cung đình Huế, Ca trù, Quan họ Bắc Ninh, Tín ngưỡng thờ Mẫu Tam phủ, Nghệ thuật Bài chòi miền Trung...',
        'Các hoạt động giao lưu văn hóa, tuần lễ Việt Nam tại các nước (Nhật, Hàn, Pháp, Mỹ…) được tổ chức thường xuyên, nâng cao hình ảnh Việt Nam trên trường quốc tế',
      ],
    },
    {
      title: 'Trong lĩnh vực kinh tế và thương mại',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Việt Nam trở thành một điểm đến đầu tư hấp dẫn, được nhiều tổ chức quốc tế đánh giá cao nhờ môi trường chính trị ổn định và chính sách hội nhập sâu rộng',
        'Thương hiệu "Made in Vietnam" đang dần được quốc tế công nhận không chỉ ở hàng hóa mà còn trong công nghệ, du lịch, và nông sản sạch',
        'Các hiệp định thương mại tự do (FTA) giúp Việt Nam tham gia vào chuỗi giá trị toàn cầu, qua đó mở rộng ảnh hưởng mềm về kinh tế',
      ],
    },
    {
      title: 'Trong lĩnh vực công nghệ và truyền thông',
      icon: <Camera className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      items: [
        'Việt Nam phát triển mạnh mẽ trong chuyển đổi số, tạo ra các nền tảng công nghệ "Make in Vietnam" (như Zalo, MoMo, VNG, Viettel AI…)',
        'Mạng xã hội và truyền thông trực tuyến được tận dụng để quảng bá văn hóa, hình ảnh đất nước ra thế giới (ví dụ: chiến dịch VietnamNOW của Bộ Ngoại giao, chiến dịch #HelloVietnam)',
        'Nhiều người trẻ Việt Nam trở thành "đại sứ mềm" khi lan tỏa văn hóa, ẩm thực, và âm nhạc Việt qua TikTok, YouTube, hoặc phim ảnh',
      ],
    },
    {
      title: 'Trong lĩnh vực du lịch và con người',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      items: [
        'Du lịch Việt Nam là một biểu hiện điển hình của biên giới mềm, thu hút hàng triệu du khách quốc tế mỗi năm',
        'Các danh lam thắng cảnh như Hạ Long, Ninh Bình, Phú Quốc, Hội An… được truyền thông thế giới ca ngợi',
        'Con người Việt Nam với hình ảnh thân thiện, hiếu khách, cần cù, sáng tạo trở thành "thương hiệu quốc gia"',
      ],
    },
  ];

  const limitations = [
    'Công tác quảng bá quốc gia còn rời rạc, thiếu chiến lược thống nhất',
    'Hiện chưa có một "chiến lược tổng thể về sức mạnh mềm quốc gia" được thể chế hóa như Hàn Quốc hay Nhật Bản',
    'Truyền thông quốc tế chưa đủ mạnh - các kênh báo chí, phim ảnh, thương hiệu Việt ít được nhận diện ở nước ngoài',
    'Nguồn nhân lực và sáng tạo văn hóa còn hạn chế - nhiều sản phẩm văn hóa vẫn mang tính nội địa, chưa đủ sức cạnh tranh quốc tế',
    'Thách thức từ toàn cầu hóa: việc tiếp nhận văn hóa ngoại lai dễ làm mờ nhạt bản sắc dân tộc nếu không có định hướng đúng đắn',
    'Thiếu phối hợp giữa các bộ ngành (Văn hóa – Ngoại giao – Công thương – Thông tin) trong việc hình thành "hệ sinh thái biên giới mềm"',
  ];

  const examples = [
    {
      title: 'K-Pop và Hallyu của Hàn Quốc',
      description: 'Cho thấy cách sức mạnh mềm tạo ra "biên giới mềm" lan tỏa toàn cầu. Việt Nam có thể học hỏi mô hình này qua việc đầu tư nghệ thuật giải trí và sáng tạo nội dung.',
    },
    {
      title: 'Chương trình "Vietnam\'s Essence"',
      description: 'Biểu diễn văn hóa truyền thống kết hợp hiện đại, thu hút khách du lịch quốc tế tại Hà Nội.',
    },
    {
      title: 'Sản phẩm "cà phê Việt Nam" và ẩm thực Việt',
      description: 'Phở, bánh mì, gỏi cuốn đã trở thành biểu tượng văn hóa, giúp lan tỏa hình ảnh Việt Nam thân thiện, sáng tạo và gần gũi.',
    },
    {
      title: 'Thành công của ngành du lịch hậu COVID-19',
      description: 'Cho thấy Việt Nam có tiềm năng mạnh trong việc phát huy "biên giới mềm" thông qua trải nghiệm, giao lưu văn hóa và quảng bá giá trị con người.',
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Globe2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Thực trạng Việt Nam
              </h1>
              <p className="text-gray-600 mt-1">
                Xây dựng "Biên giới mềm" trong quá trình hội nhập kinh tế quốc tế
              </p>
            </div>
          </div>
        </motion.div>

        {/* Background Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Bối cảnh chung</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Trong thời đại toàn cầu hóa và cách mạng công nghiệp 4.0, Việt Nam đang tham gia ngày càng sâu vào các tổ chức, định chế quốc tế như <span className="font-semibold text-indigo-600">ASEAN, WTO, APEC, CPTPP và RCEP</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Quá trình hội nhập này không chỉ là mở rộng <span className="font-semibold">biên giới cứng</span> (kinh tế, thương mại) mà còn đặt ra yêu cầu xây dựng <span className="font-semibold text-indigo-600">biên giới mềm</span> — tức là tạo dựng sức ảnh hưởng và hình ảnh Việt Nam trên trường quốc tế thông qua các yếu tố văn hóa, tri thức, và công nghệ.
              </p>
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl mt-4">
                <p className="text-gray-700 leading-relaxed font-semibold mb-2">"Biên giới mềm" giúp Việt Nam:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Tăng cường vị thế, uy tín quốc tế mà không cần mở rộng lãnh thổ</li>
                  <li>Bảo vệ lợi ích quốc gia thông qua sức hấp dẫn văn hóa, tiếng nói hòa bình và tinh thần hợp tác</li>
                  <li>Giảm phụ thuộc vào sức mạnh cứng (kinh tế, quân sự)</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6 flex items-center justify-center">
              <TeamworkIllustration />
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
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
                  <Trophy className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Thành tựu đạt được
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-green-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {achievement.title}
                      </h3>
                      <div className="space-y-2">
                        {achievement.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed">{item}</p>
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

        {/* Limitations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Hạn chế và thách thức
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dù đạt nhiều kết quả tích cực, "biên giới mềm" của Việt Nam vẫn còn một số điểm yếu:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {limitations.map((limitation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border border-orange-100"
                  >
                    <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed text-sm">{limitation}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Ví dụ minh họa tiêu biểu
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-purple-100"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {example.description}
                    </p>
                  </motion.div>
                ))}
              </div>
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
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Tiểu kết</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            "Biên giới mềm" của Việt Nam đang từng bước hình thành, trở thành nguồn sức mạnh vô hình giúp đất nước mở rộng tầm ảnh hưởng mà không cần sức ép chính trị hay quân sự.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tuy nhiên, để phát triển bền vững, Việt Nam cần chuyển từ <span className="font-semibold text-indigo-600">"tự phát" sang "chiến lược"</span>, xây dựng một chương trình quốc gia về ngoại giao văn hóa và sức mạnh mềm, góp phần khẳng định vị thế Việt Nam trên trường quốc tế.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/hoan-thien-the-che">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Các quy luật kinh tế
            </motion.button>
          </Link>

          <Link href="/dac-trung">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Giải pháp hội nhập
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
