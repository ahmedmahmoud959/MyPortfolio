function Skills() {
  return (
    <section
      id="skills"
      className=" h-dvh relative  md:bg-gradient-to-b from-primary via-yellow-300 to-primary "
    >
      {/* <img
        src="https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="image-2"
        className="object-fill object-left-bottom w-full h-full absolute top-0 left-0 z-[0]"
      /> */}

      <div className="w-full h-full pt-20 pb-20  md:w-10/12 bg-secondy">
        <div className="container  flex justify-start">
          <div className="w-full ">
            <div>
              <h3 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                My Skills
              </h3>
              <div className="mt-20 grid grid-rows-[auto,auto,auto] gap-y-16">
                <div className="flex justify-center gap-x-14 gap-y-14 flex-wrap">
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626782/html-5_5968267_daykl7.png"
                      alt="HTML5"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      HTML5
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/css-3_5968242_zydzp4.png"
                      alt="CSS"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      CSS
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/js_jhvt8m.png"
                      alt="JS"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Javascript
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/7423888_react_react_native_icon_zjqvcq.png"
                      alt="React.js"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      React.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626784/tailwind-css-logo-5AD4175897-seeklogo.com_1_fiy6nm.png"
                      alt="tailwind"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      tailwind
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/Bootstrap_logo.svg_oinz50.png"
                      alt="Bootstrap"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Bootstrap
                    </span>
                  </div>
                </div>

                <div className="flex justify-center gap-x-16 gap-y-14 flex-wrap">
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/Frame_1_mrpunr.png"
                      alt="Node.js"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Node.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626782/icon-expressjs_1_vdrkzb.png"
                      alt="Express.js"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Express.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626784/python_iyqdi7.png"
                      alt="python"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Python
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/django_pb2fy9.png"
                      alt="Django"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Django
                    </span>
                  </div>
                </div>

                <div className="flex justify-center gap-x-16 gap-y-14 flex-wrap">
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626782/1012821_code_development_logo_mysql_icon_iv3wld.png"
                      alt="MySql"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      MySQL
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626783/1_doAg1_fMQKWFoub-6gwUiQ_mcomqn.png"
                      alt="MongoDB"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-y-2">
                    <img
                      src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729626782/18133_cg7cd2.png"
                      alt="Git"
                      className="scale-[.75]"
                    />
                    <span className="block text-base font-bold text-white">
                      Git
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
