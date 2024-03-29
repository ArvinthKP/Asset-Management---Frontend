import { useState } from 'react';
// import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import { Toaster } from 'react-hot-toast';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <Toaster />
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex flex-col overflow-hidden h-screen">

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col h-full">
          {/* <!-- ===== Header Start ===== --> */}
          
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className='h-full'>
            {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Sidebar End ===== --> */}
            <div className="mx-auto h-full max-w-screen-2xl p-2 md:p-4 2xl:p-8 overflow-y-auto overflow-x-hidden">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
