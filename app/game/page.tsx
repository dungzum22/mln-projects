'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw, Star, Zap, Clock, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  // Khái niệm và nội dung hội nhập (5 câu)
  {
    id: 1,
    question: 'Hội nhập kinh tế quốc tế của mỗi quốc gia là gì?',
    options: [
      'Quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung',
      'Chỉ là việc mở cửa thị trường cho hàng hóa nước ngoài',
      'Quá trình thu hút đầu tư nước ngoài',
      'Chỉ là tham gia các tổ chức quốc tế',
    ],
    correctAnswer: 0,
    explanation: 'Hội nhập kinh tế quốc tế là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.',
  },
  {
    id: 2,
    question: 'Tại sao hội nhập kinh tế quốc tế là tất yếu khách quan?',
    options: [
      'Chỉ vì xu hướng toàn cầu hóa',
      'Vì toàn cầu hóa kinh tế vừa là xu hướng vận động vừa là công cụ để thống lĩnh thị trường, đòi hỏi các quốc gia phải tăng cường hợp tác',
      'Do sự áp đặt từ các nước phát triển',
      'Chỉ để thu hút đầu tư nước ngoài',
    ],
    correctAnswer: 1,
    explanation: 'Toàn cầu hóa kinh tế vừa là xu hướng vận động vừa là công cụ để thống lĩnh thị trường của các nền kinh tế, quá trình này đòi hỏi các quốc gia phải tăng cường hợp tác để giải quyết các vấn đề chung.',
  },
  {
    id: 3,
    question: 'Các mức độ hội nhập kinh tế quốc tế từ thấp đến cao bao gồm:',
    options: [
      'Liên kết song phương → Khu vực mậu dịch tự do (FTA) → Khu vực mậu dịch ưu đãi (PTA) → Liên minh thuế quan (CU)',
      'Chỉ có FTA và WTO',
      'Chỉ có liên kết song phương',
      'Tất cả các mức độ đều như nhau',
    ],
    correctAnswer: 0,
    explanation: 'Theo tiến trình, hội nhập được chia thành các mức độ từ thấp đến cao: Liên kết song phương, Khu vực mậu dịch tự do (FTA), Khu vực mậu dịch ưu đãi (PTA), Liên minh thuế quan (CU), và các mức độ cao hơn.',
  },
  {
    id: 4,
    question: 'Điều kiện chủ yếu để thực hiện hội nhập hiệu quả là:',
    options: [
      'Chỉ cần có vốn đầu tư',
      'Sự suy tư, sự tham gia của toàn xã hội, sự hiểu biết về hội nhập, nguồn nhân lực và an ninh hiểu mối tương tác giữa an ninh kinh tế và an ninh quốc gia',
      'Chỉ cần có công nghệ',
      'Chỉ cần có thị trường',
    ],
    correctAnswer: 1,
    explanation: 'Các điều kiện chủ yếu: sự suy tư, sự tham gia của toàn xã hội, sự hiểu biết về hội nhập, nguồn nhân lực và an ninh hiểu mối tương tác giữa an ninh kinh tế và an ninh quốc gia.',
  },
  {
    id: 5,
    question: 'Hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của:',
    options: [
      'Chỉ các nước phát triển',
      'Các nước, nhất là các nước đang và kém phát triển trong điều kiện hiện nay',
      'Chỉ các nước có nền kinh tế lớn',
      'Chỉ các nước trong khu vực châu Á',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của các nước, nhất là các nước đang và kém phát triển trong điều kiện hiện nay.',
  },
  
  // Tác động tích cực (3 câu)
  {
    id: 6,
    question: 'Một trong những tác động tích cực của hội nhập kinh tế quốc tế là:',
    options: [
      'Chỉ tăng trưởng kinh tế',
      'Thúc đẩy phát triển lực lượng sản xuất, tạo điều kiện mở rộng thị trường, tiếp thu KHCN, vốn, chuyển dịch cơ cấu kinh tế',
      'Chỉ tạo việc làm',
      'Chỉ cải thiện đời sống',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập thúc đẩy phát triển lực lượng sản xuất, tạo điều kiện mở rộng thị trường, tiếp thu KHCN, vốn, chuyển dịch cơ cấu kinh tế, nâng cao năng lực sản xuất, tăng trưởng nhanh, bền vững.',
  },
  {
    id: 7,
    question: 'Hội nhập kinh tế quốc tế thúc đẩy phân công lao động quốc tế và hợp tác kinh tế thông qua:',
    options: [
      'Chỉ tăng xuất khẩu',
      'Thúc đẩy chuyển dịch cơ cấu ngành và hiện đại hóa sản xuất, nâng cao năng lực cạnh tranh của nền kinh tế, tăng khả năng thu hút công nghệ hiện đại và đầu tư nước ngoài',
      'Chỉ giảm giá hàng hóa',
      'Chỉ tăng nhập khẩu',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập thúc đẩy chuyển dịch cơ cấu ngành và hiện đại hóa sản xuất, nâng cao năng lực cạnh tranh của nền kinh tế, đồng thời tăng khả năng thu hút công nghệ hiện đại và đầu tư nước ngoài.',
  },
  {
    id: 8,
    question: 'Hội nhập kinh tế quốc tế tạo điều kiện cải cách thể chế, chính sách bằng cách:',
    options: [
      'Chỉ thay đổi luật pháp',
      'Hoàn thiện hệ thống pháp luật, cơ chế quản lý, chiến lược phát triển phù hợp chuẩn mực quốc tế',
      'Chỉ giảm thuế',
      'Chỉ mở cửa thị trường',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập tạo điều kiện hoàn thiện hệ thống pháp luật, cơ chế quản lý, chiến lược phát triển phù hợp chuẩn mực quốc tế.',
  },
  
  // Tác động tiêu cực (3 câu)
  {
    id: 9,
    question: 'Một trong những tác động tiêu cực của hội nhập kinh tế quốc tế là:',
    options: [
      'Chỉ tăng cạnh tranh',
      'Gia tăng cạnh tranh gay gắt, nhiều doanh nghiệp và ngành kinh tế trong nước gặp khó khăn, phá sản, dẫn đến thất nghiệp, bất ổn kinh tế - xã hội',
      'Chỉ giảm giá hàng hóa',
      'Chỉ tăng nhập khẩu',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập gia tăng cạnh tranh gay gắt, nhiều doanh nghiệp và ngành kinh tế trong nước gặp khó khăn, phá sản, dẫn đến thất nghiệp, bất ổn kinh tế - xã hội.',
  },
  {
    id: 10,
    question: 'Hội nhập kinh tế quốc tế có thể dẫn đến:',
    options: [
      'Chỉ tăng trưởng kinh tế',
      'Gia tăng sự phụ thuộc kinh tế - văn hóa - xã hội vào bên ngoài, dễ tổn thương trước biến động toàn cầu, gia tăng các rủi ro như xâm lấn văn hóa, buôn lậu, tội phạm xuyên quốc gia',
      'Chỉ cải thiện đời sống',
      'Chỉ tạo việc làm',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập có thể gia tăng sự phụ thuộc kinh tế - văn hóa - xã hội vào bên ngoài, dễ tổn thương trước biến động toàn cầu, gia tăng các rủi ro như xâm lấn văn hóa, buôn lậu, tội phạm xuyên quốc gia và nhập cư trái phép.',
  },
  {
    id: 11,
    question: 'Hội nhập kinh tế quốc tế có thể gây ra thách thức đối với:',
    options: [
      'Chỉ doanh nghiệp',
      'Quyền lực nhà nước và an ninh quốc gia, có thể xâm phạm chủ quyền, can thiệp nội bộ, đe dọa an ninh chính trị, văn hóa, kinh tế',
      'Chỉ người tiêu dùng',
      'Chỉ nông dân',
    ],
    correctAnswer: 1,
    explanation: 'Hội nhập có thể tạo thách thức đối với quyền lực nhà nước và an ninh quốc gia, có thể xâm phạm chủ quyền, can thiệp nội bộ, đe dọa an ninh chính trị, văn hóa, kinh tế.',
  },
  
  // Giải pháp hội nhập (4 câu)
  {
    id: 12,
    question: 'Việt Nam gia nhập WTO vào năm nào?',
    options: [
      '1995',
      '2007',
      '2010',
      '2015',
    ],
    correctAnswer: 1,
    explanation: 'Năm 2007, Việt Nam trở thành thành viên WTO, đánh dấu một mốc quan trọng trong quá trình hội nhập kinh tế quốc tế.',
  },
  {
    id: 13,
    question: 'Để hội nhập hiệu quả, Việt Nam cần hoàn thiện thể chế kinh tế và pháp luật thông qua:',
    options: [
      'Chỉ cải cách hành chính',
      'Coi trọng khu vực tư nhân, đổi mới doanh nghiệp nhà nước, đổi mới cơ chế quản lý nhà nước theo hướng minh bạch, hỗ trợ, giám sát đúng chức năng',
      'Chỉ giảm thuế',
      'Chỉ mở cửa thị trường',
    ],
    correctAnswer: 1,
    explanation: 'Hoàn thiện cơ chế thị trường bằng cách coi trọng khu vực tư nhân, đổi mới doanh nghiệp nhà nước, đổi mới cơ chế quản lý nhà nước theo hướng minh bạch, hỗ trợ, giám sát đúng chức năng.',
  },
  {
    id: 14,
    question: 'Nâng cao năng lực cạnh tranh quốc tế đối với doanh nghiệp Việt Nam đòi hỏi:',
    options: [
      'Chỉ giảm giá sản phẩm',
      'Đổi mới công nghệ, quản trị, tư duy kinh doanh, học hỏi các kỹ năng như tìm kiếm cơ hội, huy động vốn, quản trị rủi ro và hợp tác cùng chính phủ',
      'Chỉ tăng xuất khẩu',
      'Chỉ thu hút đầu tư',
    ],
    correctAnswer: 1,
    explanation: 'Đối với doanh nghiệp, cần đổi mới công nghệ, quản trị, tư duy kinh doanh, học hỏi các kỹ năng như tìm kiếm cơ hội, huy động vốn, quản trị rủi ro và hợp tác cùng chính phủ.',
  },
  {
    id: 15,
    question: 'Xây dựng nền kinh tế độc lập, tự chủ của Việt Nam cần:',
    options: [
      'Chỉ đóng cửa thị trường',
      'Hoàn thiện đường lối phát triển, đẩy mạnh công nghiệp hóa, hiện đại hóa, tái cấu trúc kinh tế, đa dạng hóa thị trường và đối tác, đầu tư cho đổi mới công nghệ',
      'Chỉ tăng sản xuất trong nước',
      'Chỉ giảm nhập khẩu',
    ],
    correctAnswer: 1,
    explanation: 'Xây dựng nền kinh tế độc lập, tự chủ cần hoàn thiện đường lối phát triển, đẩy mạnh công nghiệp hóa, hiện đại hóa, tái cấu trúc kinh tế, đa dạng hóa thị trường và đối tác, đầu tư cho đổi mới công nghệ.',
  },
  
  // Thực trạng Việt Nam - Biên giới mềm (3 câu)
  {
    id: 16,
    question: '"Biên giới mềm" của Việt Nam là gì?',
    options: [
      'Chỉ là biên giới địa lý',
      'Tạo dựng sức ảnh hưởng và hình ảnh Việt Nam trên trường quốc tế thông qua các yếu tố văn hóa, tri thức, và công nghệ',
      'Chỉ là quan hệ ngoại giao',
      'Chỉ là thương mại quốc tế',
    ],
    correctAnswer: 1,
    explanation: '"Biên giới mềm" là tạo dựng sức ảnh hưởng và hình ảnh Việt Nam trên trường quốc tế thông qua các yếu tố văn hóa, tri thức, và công nghệ, giúp tăng cường vị thế, uy tín quốc tế mà không cần mở rộng lãnh thổ.',
  },
  {
    id: 17,
    question: 'Một trong những thành tựu của Việt Nam trong xây dựng "biên giới mềm" là:',
    options: [
      'Chỉ tăng xuất khẩu',
      'Nhiều di sản văn hóa vật thể và phi vật thể của Việt Nam được UNESCO công nhận, các hoạt động giao lưu văn hóa được tổ chức thường xuyên, nâng cao hình ảnh Việt Nam trên trường quốc tế',
      'Chỉ thu hút du lịch',
      'Chỉ phát triển công nghệ',
    ],
    correctAnswer: 1,
    explanation: 'Việt Nam đạt nhiều thành tựu trong lĩnh vực văn hóa và ngoại giao: nhiều di sản văn hóa được UNESCO công nhận, các hoạt động giao lưu văn hóa được tổ chức thường xuyên, nâng cao hình ảnh Việt Nam trên trường quốc tế.',
  },
  {
    id: 18,
    question: 'Một hạn chế trong xây dựng "biên giới mềm" của Việt Nam là:',
    options: [
      'Có quá nhiều di sản văn hóa',
      'Công tác quảng bá quốc gia còn rời rạc, thiếu chiến lược thống nhất, hiện chưa có một "chiến lược tổng thể về sức mạnh mềm quốc gia" được thể chế hóa',
      'Có quá nhiều hoạt động giao lưu',
      'Có quá nhiều công nghệ',
    ],
    correctAnswer: 1,
    explanation: 'Một trong những hạn chế là công tác quảng bá quốc gia còn rời rạc, thiếu chiến lược thống nhất, hiện chưa có một "chiến lược tổng thể về sức mạnh mềm quốc gia" được thể chế hóa như Hàn Quốc hay Nhật Bản.',
  },
  
  // Các quy luật kinh tế (2 câu)
  {
    id: 19,
    question: 'Quy luật giá trị là quy luật kinh tế cơ bản đòi hỏi:',
    options: [
      'Chỉ sản xuất hàng hóa',
      'Việc sản xuất và trao đổi hàng hoá phải dựa trên cơ sở hao phí lao động xã hội cần thiết, giá trị hàng hoá được quyết định bởi lượng lao động xã hội cần thiết',
      'Chỉ trao đổi hàng hóa',
      'Chỉ định giá hàng hóa',
    ],
    correctAnswer: 1,
    explanation: 'Quy luật giá trị là quy luật kinh tế cơ bản của sản xuất và lưu thông hàng hoá, đòi hỏi việc sản xuất và trao đổi hàng hoá phải dựa trên cơ sở hao phí lao động xã hội cần thiết.',
  },
  {
    id: 20,
    question: 'Quy luật cung – cầu phản ánh:',
    options: [
      'Chỉ mối quan hệ giữa giá cả và sản xuất',
      'Mối quan hệ giữa lượng hàng hoá được cung ứng và nhu cầu mua hàng hoá trên thị trường, là yếu tố chủ yếu quyết định giá cả thị trường',
      'Chỉ mối quan hệ giữa nhà sản xuất và người tiêu dùng',
      'Chỉ mối quan hệ giữa xuất khẩu và nhập khẩu',
    ],
    correctAnswer: 1,
    explanation: 'Quy luật cung – cầu phản ánh mối quan hệ giữa lượng hàng hoá được cung ứng và nhu cầu mua hàng hoá trên thị trường, là yếu tố chủ yếu quyết định giá cả thị trường.',
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleQuestions(baseQuestions: Question[]): Question[] {
  return shuffleArray(baseQuestions).map((q) => {
    const optionIndices = q.options.map((_, idx) => idx);
    const shuffledIndices = shuffleArray(optionIndices);
    const shuffledOptions = shuffledIndices.map((idx) => q.options[idx]);
    const newCorrectIndex = shuffledIndices.indexOf(q.correctAnswer);
    return {
      ...q,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex,
    };
  });
}

export default function Game() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeScore, setTimeScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));
  const QUESTION_TIME_LIMIT = 20;
  const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME_LIMIT);

  useEffect(() => {
    if (quizCompleted) return;
    if (selectedAnswer !== null) return;

    const timerId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setShowResult(true);
          setAnsweredQuestions((prevArr) => {
            const updated = [...prevArr];
            updated[currentQuestion] = true;
            return updated;
          });
          setTimeout(() => {
            if (currentQuestion < quizQuestions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              setSelectedAnswer(null);
              setShowResult(false);
              setTimeRemaining(QUESTION_TIME_LIMIT);
            } else {
              setQuizCompleted(true);
            }
          }, 1200);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentQuestion, selectedAnswer, quizCompleted, quizQuestions.length]);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      setTimeRemaining((prev) => prev);
      
      setAnsweredQuestions((prevArr) => {
        const updated = [...prevArr];
        updated[currentQuestion] = true;
        return updated;
      });

      if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
        setTimeScore((prev) => prev + timeRemaining);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeRemaining(QUESTION_TIME_LIMIT);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    const reshuffled = shuffleQuestions(questions);
    setQuizQuestions(reshuffled);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(reshuffled.length).fill(false));
    setTimeRemaining(QUESTION_TIME_LIMIT);
    setTimeScore(0);
  };

  const percentage = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;

  useEffect(() => {
    if (!quizCompleted) return;
    try {
      const newResult = {
        timestamp: Date.now(),
        correctCount: score,
        totalQuestions: quizQuestions.length,
        percentage,
        timeScore,
      };
      const existingRaw = localStorage.getItem('quizResults');
      const existing: typeof newResult[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(newResult);
      localStorage.setItem('quizResults', JSON.stringify(existing));
    } catch {}
  }, [quizCompleted, score, quizQuestions.length, percentage, timeScore]);

  useEffect(() => {
    setQuizQuestions(shuffleQuestions(questions));
  }, []);

  return (
    <div suppressHydrationWarning className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-4 md:py-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-4 transition-colors font-medium group text-sm"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center text-white shadow-xl transform rotate-3 hover:rotate-6 transition-transform">
                <Gamepad2 className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              </motion.div>
            </motion.div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-black text-gradient mb-1"
              >
                Trò Chơi Kiến Thức
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm md:text-base text-gray-600 font-medium"
              >
                Thử thách bản thân với câu hỏi về hội nhập kinh tế quốc tế của Việt Nam
              </motion.p>
            </div>
          </div>
        </motion.div>

        {!quizCompleted ? (
          <>
            {/* Stats Dashboard - Sticky */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="sticky top-4 z-30 mb-4"
            >
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect-strong rounded-xl p-3 md:p-4 border-2 border-purple-200/50"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-2">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Câu hỏi</p>
                    <p className="text-lg md:text-xl font-bold text-gray-800">
                      {currentQuestion + 1}/{quizQuestions.length}
                    </p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect-strong rounded-xl p-3 md:p-4 border-2 border-green-200/50"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-2">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Điểm số</p>
                    <p className="text-lg md:text-xl font-bold text-gray-800">{score}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass-effect-strong rounded-xl p-3 md:p-4 border-2 ${
                    timeRemaining <= 5 ? 'border-red-300/50 animate-pulse' : 'border-blue-200/50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${
                      timeRemaining <= 5 ? 'from-red-500 to-rose-500' : 'from-blue-500 to-cyan-500'
                    } rounded-lg flex items-center justify-center mb-2`}>
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <p className="text-xs text-gray-600 font-medium mb-1">Thời gian</p>
                    <p className={`text-lg md:text-xl font-bold ${
                      timeRemaining <= 5 ? 'text-red-600' : 'text-gray-800'
                    }`}>
                      {timeRemaining}s
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 100, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -15 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="glass-effect-strong rounded-2xl p-5 md:p-6 mb-4 border-2 border-white/50 shadow-xl"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-black text-base md:text-lg shadow-lg flex-shrink-0">
                    {currentQuestion + 1}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-tight flex-1">
                    {quizQuestions[currentQuestion].question}
                  </h2>
                </div>

                <div className="space-y-2">
                  {quizQuestions[currentQuestion].options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showIncorrect = showResult && isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={selectedAnswer === null ? { scale: 1.01, x: 4 } : {}}
                        whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswerClick(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-3 md:p-4 rounded-xl text-left transition-all flex items-center gap-3 relative overflow-hidden group ${
                          showCorrect
                            ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg scale-[1.02]'
                            : showIncorrect
                            ? 'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white shadow-lg'
                            : selectedAnswer === null
                            ? 'bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 border-2 border-gray-200 hover:border-purple-300 hover:shadow-md'
                            : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                        }`}
                      >
                        {selectedAnswer === null && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                          />
                        )}
                        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-base transition-all ${
                          showCorrect || showIncorrect
                            ? 'bg-white/30 backdrop-blur-sm'
                            : 'bg-gradient-to-br from-purple-500 to-violet-500 text-white shadow-md group-hover:scale-110'
                        }`}>
                          {showCorrect ? (
                            <CheckCircle size={22} className="text-white" />
                          ) : showIncorrect ? (
                            <XCircle size={22} className="text-white" />
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </div>
                        <span className={`flex-1 text-sm md:text-base font-medium ${
                          showCorrect || showIncorrect ? 'font-bold' : 'text-gray-700'
                        }`}>
                          {option}
                        </span>
                        {showCorrect && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute right-3"
                          >
                            <Sparkles className="w-5 h-5 text-yellow-300" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className={`mt-4 p-4 rounded-xl border-2 ${
                        selectedAnswer === quizQuestions[currentQuestion].correctAnswer
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300'
                          : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                          >
                            <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-green-600 flex-shrink-0" />
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                          >
                            <XCircle className="w-6 h-6 md:w-7 md:h-7 text-red-600 flex-shrink-0" />
                          </motion.div>
                        )}
                        <div className="flex-1">
                          <h3 className={`font-bold text-base md:text-lg mb-1 ${
                            selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? 'text-green-800' : 'text-red-800'
                          }`}>
                            {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? '🎉 Chính xác!' : '❌ Chưa đúng!'}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            {quizQuestions[currentQuestion].explanation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end mt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextQuestion}
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-purple-500/50 transition-all flex items-center gap-2 group"
                >
                  <span>{currentQuestion < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                  <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </motion.div>
            )}
          </>
        ) : (
          /* Results Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="glass-effect-strong rounded-2xl p-6 md:p-8 text-center border-2 border-white/50 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative inline-block mb-6"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Trophy className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-yellow-400" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-black text-gradient mb-4"
            >
              Hoàn thành!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 mb-3">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-lg md:text-xl text-gray-600 font-semibold mb-2">
                Bạn đã trả lời đúng <span className="text-purple-600 font-black">{percentage}%</span> câu hỏi
              </p>
              <p className="text-base text-gray-500">
                Điểm thời gian: <span className="font-bold text-gray-700">{timeScore}</span>
              </p>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-2 mb-6"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + star * 0.1, type: 'spring' }}
                >
                  <Star
                    className={`w-7 h-7 md:w-8 md:h-8 ${
                      star <= Math.ceil((score / quizQuestions.length) * 5)
                        ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6 p-5 bg-gradient-to-r from-purple-50 via-violet-50 to-fuchsia-50 rounded-xl border-2 border-purple-200"
            >
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                {percentage >= 80
                  ? '🎉 Xuất sắc! Bạn đã nắm vững kiến thức về hội nhập kinh tế quốc tế của Việt Nam!'
                  : percentage >= 60
                  ? '👍 Tốt lắm! Bạn đã hiểu khá tốt, hãy đọc lại một số phần để nắm vững hơn.'
                  : '💪 Hãy tiếp tục học tập! Đọc lại nội dung để hiểu sâu hơn nhé!'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <RotateCcw size={20} />
                Chơi lại
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-8 md:py-4 glass-effect-strong text-gray-700 rounded-xl font-bold text-base md:text-lg hover:shadow-xl transition-all border-2 border-gray-200"
                >
                  Về trang chủ
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
