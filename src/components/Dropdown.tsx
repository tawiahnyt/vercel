/** @format */

interface DropdownProps {
  content: {
    navContents: {
      heading: string;
      subHeading: string;
      icon: React.ComponentType;
    }[];
  }[];
}

const Dropdown = ({ content }: DropdownProps) => {
  console.log(content.length);
  return (
    <div
      className={`bg-white px-8 w-max mx-auto grid ${
        content.length == 3 ? "grid-cols-3" : "grid-cols-2"
      } gap-8`}
    >
      {content.map((navContent, index) => (
        <div key={index} className="space-y-6 w-full">
          <h2 className="text-xl font-medium">{navContent.title}</h2>
          <div className="space-y-4">
            {navContent.subNav.map(
              (item, idx) =>
                item.heading && (
                  <div key={idx}>
                    <div className="flex items-start space-x-3 group cursor-pointer">
                      <div className="flex-shrink-0 p-2 bg-gray-900 rounded-md">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-blue-400 transition-colors">
                          {item.heading}
                        </h3>
                        <p className="text-sm text-gray-400">{item.subHeading}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </div>

    // <div>
    //   <div className="relative group">
    //     <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-vercel-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    //       {content.map((item, index) => (
    //         <div key={index} className="py-1">
    //           <div
    //             className={`grid gap-1`}
    //             style={{
    //               gridTemplateColumns: `repeat(${item.subNav.length}, minmax(0, 1fr))`,
    //             }}
    //           >
    //             <div className="font-bold text-white px-4 py-2">
    //               {item.title}
    //             </div>

    //             {/* {item.subNav.map((subItem, subIndex) => (
    //               <a
    //                 key={subIndex}
    //                 href="#_"
    //                 className="block px-4 py-2 text-sm text-white hover:bg-vercel-gray-700"
    //               >
    //                 <div className="font-semibold">{subItem.heading}</div>
    //                 <div className="text-xs">{subItem.subHeading}</div>
    //               </a>
    //             ))} */}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dropdown;

/* {item.subNav.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-vercel-gray-700"
                  >
                    <div className="font-semibold">{subItem.heading}</div>
                    <div className="text-xs">{subItem.subHeading}</div>
                  </a>
                ))} */
