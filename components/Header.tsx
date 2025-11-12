'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, BookOpen, Gamepad2, ChevronDown, MessageCircle, Info, Globe2, Network, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentPages = [
    { name: 'Khái niệm và nội dung', href: '/khai-niem' },
    { name: 'Tác động hội nhập', href: '/tinh-tat-yeu' },
    { name: 'Các quy luật kinh tế', href: '/hoan-thien-the-che' },
    { name: 'Thực trạng Việt Nam', href: '/quan-he-loi-ich' },
    { name: 'Giải pháp hội nhập', href: '/dac-trung' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect-strong shadow-xl border-b border-purple-100'
          : 'bg-white/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow relative overflow-hidden group"
              >
                <Globe2 className="w-7 h-7 text-white z-10 relative group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Việt Nam
                </h1>
                <p className="text-xs text-gray-600 font-medium">Kinh Tế Quốc Tế</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" icon={<Home size={18} />}>
              Trang chủ
            </NavLink>

            {/* Content Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('content')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium"
              >
                <BookOpen size={18} />
                <span>Nội dung</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'content' ? 'rotate-180' : ''
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {activeDropdown === 'content' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-72 glass-effect-strong rounded-2xl overflow-hidden shadow-xl border border-purple-100"
                  >
                    {contentPages.map((page, index) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4, backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
                          className="px-4 py-3 transition-all border-b border-purple-50 last:border-0 flex items-center gap-2"
                        >
                          <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                          <span className="text-gray-700 hover:text-purple-600 font-medium">
                            {page.name}
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/game" icon={<Gamepad2 size={18} />}>
              Trò chơi
            </NavLink>

            <NavLink href="/chat" icon={<MessageCircle size={18} />}>
              Chat AI
            </NavLink>

            <NavLink href="/ve-du-an" icon={<Info size={18} />}>
              Thông tin dự án
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <MobileNavLink href="/" icon={<Home size={18} />}>
                  Trang chủ
                </MobileNavLink>
                
                <div className="space-y-1">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500">
                    NỘI DUNG
                  </div>
                  {contentPages.map((page) => (
                    <MobileNavLink key={page.href} href={page.href}>
                      {page.name}
                    </MobileNavLink>
                  ))}
                </div>

                <MobileNavLink href="/game" icon={<Gamepad2 size={18} />}>
                  Trò chơi
                </MobileNavLink>

                <MobileNavLink href="/chat" icon={<MessageCircle size={18} />}>
                  Chat AI
                </MobileNavLink>

                <MobileNavLink href="/ve-du-an" icon={<Info size={18} />}>
                  Thông tin dự án
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

const NavLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all cursor-pointer font-medium"
    >
      {icon}
      <span>{children}</span>
    </motion.div>
  </Link>
);

const MobileNavLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all font-medium"
    >
      {icon}
      <span>{children}</span>
    </motion.div>
  </Link>
);

export default Header;
