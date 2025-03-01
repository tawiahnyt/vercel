/** @format */

// interface DropdownProps {
//   content: {
//     navContents: {
//       heading: string;
//       subHeading: string;
//     }[];
//   }[];
// }



const Dropdown = ({ content }) => {

  console.log(content.length)
  return (
    <div>
      <div className="relative group">
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-vercel-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {content.map((item, index) => (
            <div key={index} className="py-1">
              <div
                className={`grid gap-1`}
                style={{
                  gridTemplateColumns: `repeat(${item.subNav.length}, minmax(0, 1fr))`,
                }}
              >
                <div className="font-bold text-white px-4 py-2">
                  {item.title}
                </div>

                {/* {item.subNav.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#_"
                    className="block px-4 py-2 text-sm text-white hover:bg-vercel-gray-700"
                  >
                    <div className="font-semibold">{subItem.heading}</div>
                    <div className="text-xs">{subItem.subHeading}</div>
                  </a>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );}

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
