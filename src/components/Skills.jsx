import React from 'react'
import info from '../data/MyInfo'

const Skills = () => {
  return (
    <div className="gap-6 w-full h-auto border border-[#ffffff30] p-6 rounded-lg flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-2">~/Skills</h2>

      <div className="h-auto w-full flex flex-col lg:flex-row gap-6">
        {/* Technical Skills */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 border-b border-[#cc9329b7] pb-2">
            Technical Skills
          </h3>

          <div className="flex flex-col gap-6">
            {Object.entries(info.Skills).map(([category, skills], idx) => (
              <div key={idx}>
                <h4 className="text-lg font-medium mb-2 text-[#cc9329]">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#ffffff10] text-white rounded-xl text-base font-medium font-caudex border border-[#ffffff30] hover:bg-[#ffffff20] hover:border-[#cc932950] transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tags */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 border-b border-[#cc9329b7] pb-2">
            Developer Tags
            <span className="text-sm text-gray-400 font-normal ml-2">
              @ Atlas Software and Microsystems
            </span>
          </h3>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <img
              className="w-2/3 rounded-lg shadow-lg"
              src="./images/atlasdevtag.png"
              alt="Atlas Software and Microsystems Developer Tag"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
