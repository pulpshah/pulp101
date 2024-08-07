import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageContents() {
    return (
        <div className="flex-1 p-5 bg-white overflow-y-auto">
          <div className="w-[1449px] h-[995px] relative bg-white mx-auto">
            <div className="w-[760px] h-[76px] left-[61px] top-[35px] absolute bg-white justify-center items-center inline-flex">
              <div className="w-[760px] h-[76px] text-[#523f7b] text-[56px] font-semibold font-['Inter'] leading-[70px]">Heading</div>
            </div>
            <div className="w-[196px] h-[51px] left-[61px] top-[333px] absolute justify-center items-center inline-flex">
              <div className="w-[196px] h-[51px] text-[#52407b] text-[32px] font-semibold font-['Inter'] leading-[70px]">Subheading</div>
            </div>
            <div className="w-[760px] h-[172px] left-[61px] top-[136px] absolute justify-center items-center inline-flex">
              <div className="w-[760px] h-[172px]">
                <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '30px' }}>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                  <br /><br />
                </span>
              </div>
            </div>
            {/* Repeat for other text sections */}
            <div className="w-[760px] h-[172px] left-[61px] top-[409px] absolute justify-center items-center inline-flex">
              <div className="w-[760px] h-[172px]">
                <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '30px' }}>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                  <br /><br />
                </span>
              </div>
            </div>
            <div className="w-[760px] h-[172px] left-[61px] top-[606px] absolute justify-center items-center inline-flex">
              <div className="w-[760px] h-[172px]">
                <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '30px' }}>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                  <br /><br />
                </span>
              </div>
            </div>
            <div className="w-[760px] h-[172px] left-[61px] top-[803px] absolute justify-center items-center inline-flex">
              <div className="w-[760px] h-[172px]">
                <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '30px' }}>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                  <br /><br />
                </span>
              </div>
            </div>
            <div className="w-[760px] h-[172px] left-[995px] top-[803px] absolute justify-center items-center inline-flex">
              <div className="w-[760px] h-[172px]">
                <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '30px' }}>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                  <br /><br />
                </span>
              </div>
            </div>
            <div className="h-[413px] pl-[170px] pr-[169px] left-[853px] top-[138px] absolute border-8 border-black justify-center items-center inline-flex">
              <div className="text-black text-xl font-semibold font-['Inter'] leading-[30px]">Image/Data Placeholder</div>
            </div>
            <div className="h-[413px] pl-[170px] pr-[169px] left-[853px] top-[679px] absolute border-8 border-black justify-center items-center inline-flex">
              <div className="text-black text-xl font-semibold font-['Inter'] leading-[30px]">Image/Data Placeholder</div>
            </div>
          </div>
        </div>
      );
}
