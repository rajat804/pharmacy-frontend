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
      { title: "Pasteurised Human Breast Milk", path: "/products/pasteurised", subItems: [] },
      {
        title: "Lyophilised Human Milk Powder",
        path: "/products/lyophilised",
        subItems: [
          { title: "Neolact N70", path: "/products/n70" },
          { title: "Neolact N70 Prime", path: "/products/n70-prime" },
        ]
      },
      {
        title: "Human Milk Derived Fortifiers",
        path: "/products/fortifiers",
        subItems: [
          { title: "Neolact MMF", path: "/products/mmf" },
          { title: "Neolact MMF PLUS", path: "/products/mmf-plus" },
        ]
      },
      {
        title: "Sucrose 24% w/v Oral Solution",
        path: "/products/sos",
        subItems: [{ title: "Neolact SOS", path: "/products/sos" }]
      },
    ]
  },
  {
    title: "Donor",
    submenu: [
      { title: "Why Donate", path: "/donor/why-donate" },
      { title: "Become a Donor", path: "/donor/become-donor" },
      { title: "Donor Selection Guidelines", path: "/donor/guidelines" },
      { title: "Donor Testimonials", path: "/donor/testimonials" },
      { title: "FAQ for Donors", path: "/donor/faq" },
    ],
  },
  {
    title: "Parents",
    submenu: [
      { title: "Benefits of Human Milk", path: "/parents/benefits" },
      { title: "Make the Right Choice", path: "/parents/right-choice" },
      { title: "Lactation Support", path: "/parents/lactation-support" },
      { title: "Success Stories", path: "/parents/success-stories" },
      { title: "Parent Testimonials", path: "/parents/testimonials" },
      { title: "FAQs for Parents", path: "/parents/faq" },
    ],
  },
  {
    title: "HCPs",
    submenu: [
      { title: "Publications", path: "/hcps/publications" },
      { title: "Case Studies", path: "/hcps/case-studies" },
      { title: "Conferences", path: "/hcps/conferences" },
      { title: "HCP Testimonials", path: "/hcps/testimonials" },
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
  {
    title: "Support",
    submenu: [
      { title: "Contact Us", path: "/support/contact" },
      { title: "Customer Support", path: "/support/customer" },
      { title: "Request Information", path: "/support/request" },
      { title: "Careers", path: "/support/careers" },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e0ebe6] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - NeoLacta Brand Colors (Green/Teal) */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#1a6d4c] via-[#0f5a3e] to-[#0a4a33] rounded-2xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
              <span className="text-white text-3xl font-bold">N</span>
            </div>
            <div>
              <span className="font-bold text-2xl tracking-tighter text-[#1a4a3a]">neolacta</span>
              <p className="text-[10px] text-[#1a6d4c] -mt-1 tracking-wide">nurturing lives</p>
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
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#1a6d4c] transition-all py-2 font-medium">
                    {item.title}
                    <MdKeyboardArrowDown className="text-xl group-hover:rotate-180 transition-transform" />
                  </button>
                ) : item.submenu ? (
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#1a6d4c] transition-all py-2 font-medium">
                    {item.title}
                    <MdKeyboardArrowDown className="text-xl group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `py-2 transition-all font-medium ${isActive ? 'text-[#1a6d4c] font-semibold border-b-2 border-[#1a6d4c]' : 'text-gray-700 hover:text-[#1a6d4c]'}`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}

                {/* Regular Dropdown */}
                {item.submenu && openDropdown === item.title && !item.megaMenu && (
                  <div className="absolute top-full left-0 pt-4 w-64 z-50">
                    <div className="bg-white rounded-2xl shadow-xl py-4 px-2 border border-[#e0ebe6]">
                      {item.submenu.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 rounded-xl mx-1 transition-all text-sm ${isActive
                              ? 'bg-[#e8f5f0] text-[#1a6d4c] font-medium'
                              : 'text-gray-700 hover:bg-[#f0f7f4] hover:text-[#1a6d4c]'
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
                  <div className="absolute top-full left-0 pt-4 w-[820px] z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-[#e0ebe6] overflow-hidden flex">
                      
                      {/* Left Panel - Categories */}
                      <div className="w-5/12 bg-[#f8fbf9] py-6">
                        {item.categories.map((cat, i) => (
                          <div
                            key={i}
                            className={`px-6 py-3.5 flex items-center justify-between cursor-pointer transition-all mx-2 rounded-xl
                              ${activeCategory?.title === cat.title 
                                ? 'bg-[#1a6d4c] text-white shadow-md' 
                                : 'text-gray-700 hover:bg-[#e8f5f0] hover:text-[#1a6d4c]'
                              }`}
                            onMouseEnter={() => setActiveCategory(cat)}
                          >
                            <div className="font-medium text-sm">{cat.title}</div>
                            {cat.subItems.length > 0 && (
                              <span className="text-lg font-light">{activeCategory?.title === cat.title ? '→' : '›'}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Right Panel - Sub Products */}
                      <div className="w-7/12 bg-gradient-to-br from-[#f0f7f4] to-[#e8f5f0] py-6 px-6">
                        {activeCategory?.subItems?.length > 0 ? (
                          activeCategory.subItems.map((sub, idx) => (
                            <NavLink
                              key={idx}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block px-5 py-3.5 bg-white hover:bg-[#1a6d4c] hover:text-white rounded-xl mb-3 text-gray-800 hover:shadow-md transition-all text-sm font-medium ${isActive ? 'ring-2 ring-[#1a6d4c] bg-[#1a6d4c] text-white' : ''}`
                              }
                            >
                              {sub.title}
                            </NavLink>
                          ))
                        ) : (
                          <div className="text-center py-10">
                            <p className="text-[#1a6d4c] font-medium">No sub-products available</p>
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

          {/* Enquire Button - Brand Colors */}
          <NavLink
            to="/enquire"
            className={({ isActive }) =>
              `hidden md:block px-7 py-3 rounded-xl font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 
               ${isActive 
                 ? 'bg-gradient-to-r from-[#0f5a3e] to-[#1a6d4c]' 
                 : 'bg-gradient-to-r from-[#1a6d4c] to-[#0f5a3e] hover:from-[#0f5a3e] hover:to-[#0a4a33]'
               } text-white`
            }
          >
            Enquire Now !
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-[#1a6d4c]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Complete Implementation */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e0ebe6] py-6 px-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item, idx) => (
              <div key={idx} className="border-b border-[#e8f5f0] last:border-0 pb-2">
                {item.submenu || item.megaMenu ? (
                  <>
                    <button 
                      className="flex items-center justify-between w-full py-3 text-gray-800 font-medium hover:text-[#1a6d4c] transition-colors"
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                    >
                      <span>{item.title}</span>
                      <MdKeyboardArrowDown className={`text-xl transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.submenu?.map((sub, subIdx) => (
                          <NavLink
                            key={subIdx}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block py-2.5 px-3 rounded-lg text-sm ${isActive ? 'bg-[#e8f5f0] text-[#1a6d4c] font-medium' : 'text-gray-600 hover:bg-[#f0f7f4] hover:text-[#1a6d4c]'}`
                            }
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                        {item.megaMenu && item.categories?.map((cat, catIdx) => (
                          <div key={catIdx} className="mt-3">
                            <div className="font-semibold text-[#1a4a3a] py-2 text-sm">{cat.title}</div>
                            {cat.subItems?.map((sub, subIdx) => (
                              <NavLink
                                key={subIdx}
                                to={sub.path}
                                className={({ isActive }) =>
                                  `block py-2 pl-4 rounded-lg text-sm ${isActive ? 'bg-[#e8f5f0] text-[#1a6d4c]' : 'text-gray-600 hover:bg-[#f0f7f4] hover:text-[#1a6d4c]'}`
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
                      `block py-3 font-medium ${isActive ? 'text-[#1a6d4c] border-l-4 border-[#1a6d4c] pl-3' : 'text-gray-800 hover:text-[#1a6d4c]'}`
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
              className="block mt-4 text-center bg-gradient-to-r from-[#1a6d4c] to-[#0f5a3e] text-white py-3.5 rounded-xl font-semibold"
              onClick={() => setIsMobileOpen(false)}
            >
              Enquire Now !
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;