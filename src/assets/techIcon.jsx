import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaChartPie } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandDjango } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";

export const techIcon = {
  html: (options ,n) => <FaHtml5 key={n} {...options.iconProps} />,
  css:(options ,n) => <FaCss3Alt key={n}  {...options.iconProps} />,
  javascript: (options ,n) => <FaJs key={n}  {...options.iconProps} />,
  fontawesome: (options ,n) => <FaFontAwesome key={n}  {...options.iconProps} />,
  react: (options ,n) => <FaReact key={n}  {...options.iconProps} />,
  jquery: (options ,n) => <DiJqueryLogo key={n}  {...options.iconProps} />,
  chartjs: (options ,n) => <FaChartPie key={n}  {...options.iconProps} />,
  mongodb: (options ,n) => <DiMongodb key={n}  {...options.iconProps} />,
  mysql: (options ,n) => <SiMysql key={n}  {...options.iconProps} />,
  github: (options ,n) => <FaGithub key={n}  {...options.iconProps} />,
  git: (options ,n) => <FaGitAlt key={n}  {...options.iconProps} />,
  django: (options ,n) => <TbBrandDjango key={n}  {...options.iconProps} />,
  python: (options ,n) => <FaPython key={n}  {...options.iconProps} />,
  nodejs: (options ,n) => <FaNodeJs key={n}  {...options.iconProps} />,
  tailwind: (options ,n) => <RiTailwindCssFill key={n}  {...options.iconProps} />,
  bootstrap: (options ,n) => <FaBootstrap key={n}  {...options.iconProps} />,
  redux: (options ,n) => <SiRedux key={n}  {...options.iconProps} />,
  
};


