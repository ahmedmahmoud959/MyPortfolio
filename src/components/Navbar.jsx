import { Menubar } from "primereact/menubar";
import { classNames } from "primereact/utils";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0); // حالة لتتبع العنصر النشط

  const menuItems = [
    {
      label: "Home",
      command: () => {
        setActiveIndex(0);
        document
          .getElementById("home-section")
          .scrollIntoView({ behavior: "smooth" });
      }, // تعيين Home كعنصر نشط
    },
    {
      label: "About Me",
      command: () => {
        setActiveIndex(1);
        document
          .getElementById("about-me")
          .scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Skills",
      command: () => {
        setActiveIndex(2);
        document
          .getElementById("skills")
          .scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Portfolio",
      command: () => {
        setActiveIndex(3);
        document
          .getElementById("my-projects")
          .scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Contact",
      command: () => {
        setActiveIndex(4);
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  // تعيين Home كعنصر نشط عند تحميل الصفحة
  useEffect(() => {
    setActiveIndex(0); // تعيين Home كعنصر نشط عند تحميل الصفحة
  }, []);

  return (
    <Menubar
      model={menuItems.map((item, index) => ({
        ...item,
        className: classNames({
          "nav-active-item font-bold": activeIndex === index, // إضافة فئة active إذا كان العنصر نشطًا
        }),
      }))}
      className=""
    />
  );
}

export default Navbar;
