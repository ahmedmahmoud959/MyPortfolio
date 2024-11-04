import { classNames } from "primereact/utils";

export const MyStyle = {
  global: {
    css: `
    .progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-one-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
  
    @keyframes p-progress-spinner-dash{
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progress-spinner-color {
        100%, 0% {
            stroke: #ff5757;
        }
        40% {
            stroke: #696cff;
        }
        66% {
            stroke: #1ea97c;
        }
        80%, 90% {
            stroke: #cc8925;
        }
    }
         @keyframes p-progress-spinner-one-color {
       0% {
            stroke: #FFBD39;
        }
            100% {
            stroke: #FFBD39;
        }
       
    }
  `,
  },

  menubar: {
    root: {
      className: classNames(
        " bg-secondy-op	w-full  text-white sticky top-0 left-0 z-50",
        "flex lg:justify-end sm:justify-center justify-end items-center relative",
        "container-menu backdrop-blur-md	"
      ),
    },
    menu: ({ state }) => ({
      className: classNames(
        "m-0 sm:p-0 list-none bg-secondy ",
        "outline-none",
        "sm:flex items-center gap-x-7 flex-wrap sm:flex-row sm:top-auto sm:left-auto sm:relative sm:bg-transparent sm:shadow-none sm:w-auto",
        "flex-col top-full left-0",
        "absolute pt-3 pb-1 border-0 shadow-md w-full",
        {
          "hidden ": !state?.mobileActive,
          "flex px-5": state?.mobileActive,
        }
      ),
    }),
    menuitem: ({ props, context }) => ({
      className: classNames(
        "sm:relative sm:w-auto w-full static relative py-3 pb-1",
        "after:block after:h-[2px] after:w-full  after:bg-primary after:absolute after:bottom-0 after:transition-all	 after:ease-in-out	after:duration-300 duration-300",
        "after:scale-x-0 hover:after:scale-x-100",

        { "rounded-md": props.root },
        {
          "text-white dark:text-white font-semibold": !context.active,
          "text-primary dark:text-primary  after:block after:scale-x-100 after:h-[2px] after:w-full  after:bg-primary after:absolute after:bottom-0 after:transition-all	 after:ease-in-out	after:duration-300 duration-300":
            context.active,
        },
        {
          "hover:text-primary dark:hover:text-primary ": !context.active,
          "hover:bg-blue-200 dark:hover:bg-blue-500": context.active,
        }
      ),
    }),
    action: ({ context }) => ({
      className: classNames(
        "select-none",
        "cursor-pointer flex items-center no-underline overflow-hidden relative",
        "select-none",
        {
          "pl-9 sm:pl-5": context.level === 1,
          "pl-14 sm:pl-5": context.level === 2,
        }
      ),
    }),

    icon: "mr-2",
    submenuicon: ({ props }) => ({
      className: classNames({
        "ml-auto sm:ml-2": props.root,
        "ml-auto": !props.root,
      }),
    }),
    submenu: ({ props }) => ({
      className: classNames(
        "py-1 bg-white dark:bg-gray-900 border-0  sm:shadow-md sm:w-48",
        "w-full static shadow-none",
        "sm:absolute z-10",
        "m-0 list-none",
        {
          "sm:absolute sm:left-full sm:top-0": !props.root,
        }
      ),
    }),
    separator: "border-t border-gray-300 dark:border-blue-900/40 my-1 ",
    button: {
      className: classNames(
        "flex sm:hidden text-2xl mr-5 w-8 h-8 rounded-md text-white dark:text-white/80 transition border border-transparent duration-200 ease-in-out",
        "cursor-pointer flex items-center justify-center no-underline",
        "hover:text-primary dark:hover:text-white/80 hover:bg-secondy hover:border-primary  dark:hover:bg-gray-800/80 "
      ),
    },
  },

  button: {
    root: ({ props, context }) => ({
      className: classNames(
        "items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom",
        "transition duration-100 ease-in-out",
        "focus:outline-none focus:outline-offset-0",
        {
          "text-secondy bg-primary border-2 border-primary dark:border-primary hover:text-primary hover:bg-secondy dark:hover:bg-secondy hover:border-primary dark:hover:border-primary duration-100 ease-in-out":
            !props.link &&
            props.severity === null &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "text-blue-600 bg-transparent border-transparent ": props.link,
        },

        {
          "text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500":
            props.severity === "secondary" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500":
            props.severity === "success" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "text-white dark:text-gray-900 dark:bg-blue-400 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500":
            props.severity === "info" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500":
            props.severity === "warning" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500":
            props.severity === "help" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500":
            props.severity === "danger" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        { "shadow-lg": props.raised },
        { "rounded-md": !props.rounded, "rounded-full": props.rounded },
        {
          "bg-transparent border-transparent": props.text && !props.plain,
          "text-blue-500 dark:text-blue-400 hover:bg-blue-300/20":
            props.text &&
            (props.severity === null || props.severity === "info") &&
            !props.plain,
          "text-gray-500 dark:text-gray-400 hover:bg-gray-300/20":
            props.text && props.severity === "secondary" && !props.plain,
          "text-green-500 dark:text-green-400 hover:bg-green-300/20":
            props.text && props.severity === "success" && !props.plain,
          "text-orange-500 dark:text-orange-400 hover:bg-orange-300/20":
            props.text && props.severity === "warning" && !props.plain,
          "text-purple-500 dark:text-purple-400 hover:bg-purple-300/20":
            props.text && props.severity === "help" && !props.plain,
          "text-red-500 dark:text-red-400 hover:bg-red-300/20":
            props.text && props.severity === "danger" && !props.plain,
        },
        { "shadow-lg": props.raised && props.text },
        {
          "text-gray-500 hover:bg-gray-300/20": props.plain && props.text,
          "text-gray-500 border border-gray-500 hover:bg-gray-300/20":
            props.plain && props.outlined,
          "text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600":
            props.plain && !props.outlined && !props.text,
        },
        {
          "bg-transparent border": props.outlined && !props.plain,
          "text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20":
            props.outlined &&
            (props.severity === null || props.severity === "info") &&
            !props.plain,
          "text-white  border-2 border-white bg-secondy  hover:text-primary hover:bg-secondy hover:border-primary duration-100  ease-in-out":
            props.outlined && props.severity === "secondary" && !props.plain,
          "text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20":
            props.outlined && props.severity === "success" && !props.plain,
          "text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20":
            props.outlined && props.severity === "warning" && !props.plain,
          "text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20":
            props.outlined && props.severity === "help" && !props.plain,
          "text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20":
            props.outlined && props.severity === "danger" && !props.plain,
        },
        {
          "px-4 py-3 text-base": props.size === null,
          "text-xl py-3 px-4": props.size === "small",
          "text-xl py-3 px-6": props.size === "large",
        },
        { "flex-column": props.iconPos == "top" || props.iconPos == "bottom" },
        { "opacity-60 pointer-events-none cursor-default": context.disabled }
      ),
    }),
    label: ({ props }) => ({
      className: classNames(
        "flex-1",
        "duration-100",
        "font-bold",
        {
          "hover:underline": props.link,
        },
        { "invisible w-0": props.label == null }
      ),
    }),
    icon: ({ props }) => ({
      className: classNames("mx-0", {
        "mr-2": props.iconPos == "left" && props.label != null,
        "ml-2 order-1": props.iconPos == "right" && props.label != null,
        "mb-2": props.iconPos == "top" && props.label != null,
        "mt-2 order-2": props.iconPos == "bottom" && props.label != null,
      }),
    }),
    loadingIcon: ({ props }) => ({
      className: classNames("mx-0", {
        "mr-2": props.loading && props.iconPos == "left" && props.label != null,
        "ml-2 order-1":
          props.loading && props.iconPos == "right" && props.label != null,
        "mb-2": props.loading && props.iconPos == "top" && props.label != null,
        "mt-2 order-2":
          props.loading && props.iconPos == "bottom" && props.label != null,
      }),
    }),
    badge: ({ props }) => ({
      className: classNames({
        "ml-2 w-4 h-4 leading-none flex items-center justify-center":
          props.badge,
      }),
    }),
  },

  chip: {
    root: {
      className: classNames(
        "inline-flex items-center",
        "bg-secondy text-primary rounded-[16px] border border-primary-op px-3 dark:text-white/80 dark:bg-gray-900"
      ),
    },
    label: "leading-6",
    icon: "leading-6 mr-1 text-sm",
    image: {
      className: classNames("w-9 h-9 ml-[-0.75rem] mr-2", "rounded-full"),
    },
    removeIcon: {
      className: classNames(
        "ml-2 rounded-md transition duration-200 ease-in-out",
        "cursor-pointer leading-6"
      ),
    },
  },

  dialog: {
    root: ({ state }) => ({
      className: classNames(
        "rounded-lg shadow-lg border-0",
        "max-h-[90%] transform scale-100",
        "m-0 w-[50vw]",
        "dark:border dark:border-blue-900/40",
        {
          "transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
            state.maximized,
        }
      ),
    }),
    header: {
      className: classNames(
        "flex items-center justify-between shrink-0",
        "bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6",
        "dark:bg-gray-900  dark:text-white/80"
      ),
    },
    headerTitle: "font-bold text-lg",
    headerIcons: "flex items-center",
    closeButton: {
      className: classNames(
        "flex items-center justify-center overflow-hidden relative",
        "w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0",
        "hover:text-gray-700 hover:border-transparent hover:bg-gray-200",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", // focus
        "dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]"
      ),
    },
    closeButtonIcon: "w-4 h-4 inline-block",
    content: ({ state }) => ({
      className: classNames(
        "overflow-y-auto",
        "bg-white text-gray-700 px-6 pb-8 pt-0",
        "rounded-bl-lg rounded-br-lg",
        "dark:bg-gray-900  dark:text-white/80 ",
        {
          grow: state.maximized,
        }
      ),
    }),
    footer: {
      className: classNames(
        "shrink-0 ",
        "border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg",
        "dark:bg-gray-900  dark:text-white/80"
      ),
    },
    mask: ({ state }) => ({
      className: classNames("transition duration-200", {
        "bg-black/40": state.containerVisible,
      }),
    }),
    transition: ({ props }) => {
      return props.position === "top"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
          }
        : props.position === "bottom"
        ? {
            enterFromClass: "opacity-0 scale-75 translate-y-full",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0",
          }
        : props.position === "left" ||
          props.position === "top-left" ||
          props.position === "bottom-left"
        ? {
            enterFromClass:
              "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0",
          }
        : props.position === "right" ||
          props.position === "top-right" ||
          props.position === "bottom-right"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
          }
        : {
            enterFromClass: "opacity-0 scale-75",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass: "opacity-0 scale-75",
          };
    },
  },

  progressspinner: {
    root: {
      className: classNames(
        "relative mx-auto w-28 h-28 inline-block",
        "before:block before:pt-full"
      ),
    },
    spinner:
      "absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full  transform origin-center animate-spin",
    circle: "text-red-500 progress-spinner-circle",
  },
};
