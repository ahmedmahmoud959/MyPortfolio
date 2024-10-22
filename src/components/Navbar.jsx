import { Menubar } from "primereact/menubar";
import { classNames } from "primereact/utils";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0); // حالة لتتبع العنصر النشط

  const menuItems = [
    {
      label: "Home",
      command: () => setActiveIndex(0), // تعيين Home كعنصر نشط
    },
    {
      label: "About Me",
      command: () => setActiveIndex(1),
    },
    {
      label: "Skills",
      command: () => setActiveIndex(2),
    },
    {
      label: "Portfolio",
      command: () => setActiveIndex(3),
    },
    {
      label: "Contact ME",
      command: () => setActiveIndex(4),
    },
  ];

  // تعيين Home كعنصر نشط عند تحميل الصفحة
  useEffect(() => {
    setActiveIndex(0); // تعيين Home كعنصر نشط عند تحميل الصفحة
  }, []);

  return (
    <div className="container">
      <Menubar
        model={menuItems.map((item, index) => ({
          ...item,
          className: classNames({
            "nav-active-item": activeIndex === index, // إضافة فئة active إذا كان العنصر نشطًا
          }),
        }))}
      />
    </div>
  );
}

export default Navbar;
