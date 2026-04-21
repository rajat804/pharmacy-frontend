import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown, MdMenu, MdClose } from 'react-icons/md';

const menuItems = [
  { title: "Home", path: "/" },
  {
    title: "About Us",
    submenu: [
      { title: "Our Story", path: "/about/our-story" },
      { title: "Mission & Vision", path: "/about/mission-vision" },
      { title: "Quality and Safety", path: "/about/quality-safety" },
      { title: "Awards & Recognitions", path: "/about/awards" },
    ],
  },
  {
    title: "Products",
    megaMenu: true,
    categories: [
      { title: "Pasteurised Human Breast Milk", subItems: [
        {title: "Neolact PHBM 70", path: "/products/phbm70"}
      ] },
      {
        title: "Lyophilised Human Milk Powder",
        subItems: [
          { title: "Neolact N70", path: "/products/n70" },
          { title: "Neolact N70 Prime", path: "/products/n70-prime" },
        ]
      },
      {
        title: "Human Milk Derived Fortifiers",
        subItems: [
          { title: "Neolact MMF", path: "/products/mmf" },
          { title: "Neolact MMF PLUS", path: "/products/mmf-plus" },
        ]
      },
      {
        title: "Sucrose 24% w/v Oral Solution",
        subItems: [{ title: "Neolact SOS", path: "/products/sos" }]
      },
    ]
  },
  {
    title: "Research & Analysis",
    submenu: [
      { title: "Publications", path: "/hcps/publications" },
      { title: "Case Studies", path: "/hcps/case-studies" },
      { title: "Conferences", path: "/hcps/conferences" },
    ],
  },
  {
    title: "Learn",
    submenu: [
      { title: "Blogs", path: "/learn/blogs" },
      { title: "Press Releases / Media Kit", path: "/learn/press" },
      { title: "Newsletter Sign Up", path: "/learn/newsletter" },
    ],
  },
  { title: "Career", path: "/career" },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Blue Theme */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200">
              <span className="text-white text-3xl font-bold">N</span>
            </div>
            <div>
              <p className="text-[10px] text-blue-600 -mt-1 tracking-wide uppercase font-semibold">nurturing lives</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15.5px] font-medium">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => {
                  setOpenDropdown(item.title);
                  if (item.megaMenu) setActiveCategory(item.categories[1]);
                }}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setActiveCategory(null);
                }}
              >
                {item.megaMenu ? (
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 font-medium group-hover:translate-y-[-2px] group-hover:scale-105">
                    {item.title}
                    <MdKeyboardArrowDown className="text-xl group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : item.submenu ? (
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 font-medium group-hover:translate-y-[-2px] group-hover:scale-105">
                    {item.title}
                    <MdKeyboardArrowDown className="text-xl group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `py-2 transition-all duration-300 font-medium relative ${
                        isActive 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-700 hover:text-blue-600 hover:scale-105'
                      } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full ${
                        isActive ? 'after:w-full' : ''
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}

                {/* Regular Dropdown */}
                {item.submenu && openDropdown === item.title && !item.megaMenu && (
                  <div className="absolute top-full left-0 pt-4 w-64 z-50">
                    <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 py-4 px-2 border border-blue-100 animate-fadeIn">
                      {item.submenu.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 rounded-xl mx-1 transition-all duration-300 text-sm ${
                              isActive
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2 hover:scale-105'
                            }`
                          }
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Dropdown for Products */}
                {item.megaMenu && openDropdown === "Products" && (
                  <div className="absolute top-full left-0 pt-4 w-[820px] z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 border border-blue-100 overflow-hidden flex">
                      
                      {/* Left Panel - Categories */}
                      <div className="w-5/12 bg-gradient-to-b from-blue-50 to-white py-6">
                        {item.categories.map((cat, i) => (
                          <div
                            key={i}
                            className={`px-6 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-300 mx-2 rounded-xl
                              ${activeCategory?.title === cat.title 
                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-200 translate-x-1 scale-105' 
                                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2 hover:scale-105'
                              }`}
                            onMouseEnter={() => setActiveCategory(cat)}
                          >
                            <div className="font-medium text-sm">{cat.title}</div>
                            {cat.subItems.length > 0 && (
                              <span className="text-lg font-light transition-transform duration-300 group-hover:translate-x-1">
                                {activeCategory?.title === cat.title ? '→' : '›'}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Right Panel - Sub Products */}
                      <div className="w-7/12 bg-white py-6 px-6">
                        {activeCategory?.subItems?.length > 0 ? (
                          activeCategory.subItems.map((sub, idx) => (
                            <NavLink
                              key={idx}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block px-5 py-3.5 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white rounded-xl mb-3 text-gray-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 text-sm font-medium hover:translate-x-2 hover:scale-105 ${
                                  isActive ? 'ring-2 ring-blue-600 bg-blue-50 text-blue-600' : ''
                                }`
                              }
                            >
                              {sub.title}
                            </NavLink>
                          ))
                        ) : (
                          <div className="text-center py-10">
                            <p className="text-blue-600 font-medium">No sub-products available</p>
                            <p className="text-gray-400 text-sm mt-1">Please select a category</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Enquire Button - Blue Theme */}
          <NavLink
            to="/enquire"
            className={({ isActive }) =>
              `hidden md:block px-7 py-3 rounded-xl font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1 hover:scale-105 
               ${isActive 
                 ? 'bg-gradient-to-r from-blue-700 to-blue-600' 
                 : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
               } text-white`
            }
          >
            Enquire Now !
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-90"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 py-6 px-6 max-h-[80vh] overflow-y-auto animate-slideDown shadow-lg">
          <div className="space-y-2">
            {menuItems.map((item, idx) => (
              <div key={idx} className="border-b border-blue-50 last:border-0 pb-2">
                {item.submenu || item.megaMenu ? (
                  <>
                    <button 
                      className="flex items-center justify-between w-full py-3 text-gray-800 font-medium hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                    >
                      <span>{item.title}</span>
                      <MdKeyboardArrowDown className={`text-xl transition-all duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 pb-2 space-y-1 animate-slideDown">
                        {item.submenu?.map((sub, subIdx) => (
                          <NavLink
                            key={subIdx}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block py-2.5 px-3 rounded-lg text-sm transition-all duration-300 ${
                                isActive 
                                  ? 'bg-blue-50 text-blue-600 font-medium' 
                                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2'
                              }`
                            }
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                        {item.megaMenu && item.categories?.map((cat, catIdx) => (
                          <div key={catIdx} className="mt-3">
                            <div className="font-semibold text-blue-600 py-2 text-sm">{cat.title}</div>
                            {cat.subItems?.map((sub, subIdx) => (
                              <NavLink
                                key={subIdx}
                                to={sub.path}
                                className={({ isActive }) =>
                                  `block py-2 pl-4 rounded-lg text-sm transition-all duration-300 ${
                                    isActive 
                                      ? 'bg-blue-50 text-blue-600' 
                                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2'
                                  }`
                                }
                                onClick={() => setIsMobileOpen(false)}
                              >
                                • {sub.title}
                              </NavLink>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-blue-600 border-l-4 border-blue-600 pl-3' 
                          : 'text-gray-800 hover:text-blue-600 hover:translate-x-2'
                      }`
                    }
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
            
            {/* Mobile Enquire Button */}
            <NavLink
              to="/enquire"
              className="block mt-4 text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1 hover:scale-[1.02]"
              onClick={() => setIsMobileOpen(false)}
            >
              Enquire Now !
            </NavLink>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;